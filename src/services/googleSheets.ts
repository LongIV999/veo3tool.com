/**
 * Google Sheets Email Collection Service
 *
 * This service handles sending email data to Google Sheets via Apps Script Web App
 */

interface EmailData {
    email: string;
    videoThumbnail?: string;
    metadata?: string | object;
}

interface GoogleSheetsResponse {
    status: 'success' | 'error';
    message: string;
}

// IMPORTANT: Replace this with your actual Google Apps Script Web App URL
// Get this URL after deploying your Apps Script (Deploy → New deployment → Web app)
const GOOGLE_SHEETS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzZK_OvtFl2HtqaRIQBjq8wz6N6p7FMJWo-58_I5k2lLzhX4ttsuxBAbilYTCgJAxnc/exec';

/**
 * Submit email to Google Sheets
 * @param email - User's email address
 * @returns Promise with response data
 */
export const submitEmailToGoogleSheets = async (
    email: string,
    videoThumbnail?: string,
    metadata?: object
): Promise<GoogleSheetsResponse> => {
    try {
        // Validate email
        if (!email || !email.trim()) {
            throw new Error('Email is required');
        }

        // Prepare data matching Google Sheet columns (Timestamp, Email, Video Thumbnail, Metadata)
        const data: EmailData = {
            email: email.trim(),
            videoThumbnail: videoThumbnail || '',
            metadata: metadata ? JSON.stringify(metadata) : ''
        };

        console.log('Sending data to Google Sheets:', data);

        // Send POST request to Google Apps Script Web App
        await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
            method: 'POST',
            mode: 'no-cors', // Required for Google Apps Script
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });

        // Note: With 'no-cors' mode, we can't read the response
        // We assume success if no error was thrown
        console.log('Email submitted to Google Sheets:', email);

        return {
            status: 'success',
            message: 'Email saved successfully'
        };

    } catch (error) {
        console.error('Error submitting to Google Sheets:', error);

        return {
            status: 'error',
            message: error instanceof Error ? error.message : 'Unknown error occurred'
        };
    }
};

/**
 * Test connection to Google Sheets endpoint
 * @returns Promise<boolean> - true if connection successful
 */
export const testGoogleSheetsConnection = async (): Promise<boolean> => {
    try {
        const response = await fetch(GOOGLE_SHEETS_WEB_APP_URL, {
            method: 'GET',
        });

        return response.ok;
    } catch (error) {
        console.error('Google Sheets connection test failed:', error);
        return false;
    }
};
