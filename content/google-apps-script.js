/**
 * Google Apps Script for LongBest AI Landing Page
 * 
 * INSTRUCTIONS:
 * 1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1y_9YONmHzq6Ju5pqzqeYFApQv9zPvqRB4EMakmOvG7E/edit
 * 2. Go to Extensions > Apps Script.
 * 3. Delete any existing code and paste this code.
 * 4. Click "Deploy" > "New deployment".
 * 5. Select type "Web app".
 * 6. Set Description to "LongBest AI Form".
 * 7. Set "Execute as" to "Me".
 * 8. Set "Who has access" to "Anyone" (IMPORTANT!).
 * 9. Click "Deploy".
 * 10. Web app URL: https://script.google.com/macros/s/AKfycbzZK_OvtFl2HtqaRIQBjq8wz6N6p7FMJWo-58_I5k2lLzhX4ttsuxBAbilYTCgJAxnc/exec
 */

const SHEET_NAME = 'Veo3tool'; // Change if your sheet name is different

function initialSetup() {
    const doc = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = doc.getSheetByName(SHEET_NAME);

    if (!sheet) {
        sheet = doc.insertSheet(SHEET_NAME);
    }

    const headers = ['Timestamp', 'Email', 'Video Thumbnail', 'Metadata'];
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    sheet.setFrozenRows(1);
}

function doPost(e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        const doc = SpreadsheetApp.getActiveSpreadsheet();
        const sheet = doc.getSheetByName(SHEET_NAME);

        const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
        const nextRow = sheet.getLastRow() + 1;

        // Parse data from request
        // Support both JSON (raw) and url-encoded
        let data;
        if (e.postData && e.postData.type === "application/json") {
            data = JSON.parse(e.postData.contents);
        } else {
            data = e.parameter;
        }

        // Debug logging - you can view this in Execution log
        Logger.log('Received data: ' + JSON.stringify(data));
        Logger.log('Headers: ' + JSON.stringify(headers));

        const newRow = headers.map(function (header) {
            if (header === 'Timestamp') return new Date();
            // map header to data key (lowercase for matching)
            const key = header.toLowerCase();
            const value = data[key] || data[header] || '';
            Logger.log('Header: ' + header + ', Key: ' + key + ', Value: ' + value);
            return value;
        });

        Logger.log('New row: ' + JSON.stringify(newRow));
        sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow, 'data': data }))
            .setMimeType(ContentService.MimeType.JSON);
    } catch (err) {
        Logger.log('Error: ' + err.toString());
        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'error', 'error': err.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    } finally {
        lock.releaseLock();
    }
}

function doGet(e) {
    return ContentService
        .createTextOutput(JSON.stringify({ 'result': 'success', 'message': 'Web App is running' }))
        .setMimeType(ContentService.MimeType.JSON);
}
