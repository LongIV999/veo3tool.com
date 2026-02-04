function doPost(e) {
    const lock = LockService.getScriptLock();
    lock.tryLock(10000);

    try {
        const doc = SpreadsheetApp.getActiveSpreadsheet();
        // Use the Sheet Name you defined (ensure this matches your tab name exactly)
        const sheet = doc.getSheetByName(SHEET_NAME);

        const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
        const nextRow = sheet.getLastRow() + 1;

        // --- FIX: Force JSON parsing ---
        // In 'no-cors' mode, the Content-Type header is stripped, so checking
        // e.postData.type === "application/json" often FAILS.
        // We try to parse the contents directly.
        let data;
        try {
            data = JSON.parse(e.postData.contents);
        } catch (err) {
            // If parsing fails, fall back to parameters (e.g. form submission)
            data = e.parameter;
        }
        // -----------------------------

        const newRow = headers.map(function (header) {
            if (header === 'Timestamp') return new Date();
            // map header to data key (lowercase for matching)
            const key = header.toLowerCase();
            // Debug: Log if needed using Logger.log(key + ": " + data[key]);
            return data[key] || data[header] || '';
        });

        sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow]);

        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
            .setMimeType(ContentService.MimeType.JSON);
    } catch (e) {
        return ContentService
            .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e.toString() }))
            .setMimeType(ContentService.MimeType.JSON);
    } finally {
        lock.releaseLock();
    }
}
