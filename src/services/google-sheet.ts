
export interface LeadData {
    name: string;
    email: string;
    phone: string;
    role: string;
    interest: string;
    source?: string;
}

export interface SheetResponse {
    result: 'success' | 'error';
    row?: number;
    error?: any;
}

// TODO: Replace with the actual URL provided by the user after deployment
const GOOGLE_SCRIPT_URL = 'YOUR_WEB_APP_URL_HERE';

export const submitToSheet = async (data: LeadData): Promise<SheetResponse> => {
    if (GOOGLE_SCRIPT_URL === 'YOUR_WEB_APP_URL_HERE') {
        console.warn('Google Script URL is not configured.');
        return { result: 'error', error: 'Configuration missing' };
    }

    try {
        // We use no-cors mode because Google Apps Script redirects to a different domain
        // and standard CORS would block it. However, this means we can't read the response.
        // Ideally, we would use a proxy or JSONP, but for a simple landing page, 
        // we often assume success if no network error occurs, or use a proper backend.
        // BUT, standard fetch with 'application/json' often triggers preflight which GAS doesn't handle.
        // The most robust way without a backend is using FormData and no-cors.

        const formData = new FormData();
        Object.keys(data).forEach(key => {
            formData.append(key, (data as any)[key]);
        });

        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            body: formData,
            mode: 'no-cors'
        });

        // Since mode is no-cors, we can't get the actual JSON response.
        // We assume success if the request completed.
        return { result: 'success' };

    } catch (error) {
        console.error('Error submitting to sheet:', error);
        return { result: 'error', error };
    }
};
