import React, { createContext, useContext, useState, type ReactNode } from 'react';
import EmailPopup from '../components/EmailPopup';
import Toast, { type ToastType } from '../components/Toast';
import { submitEmailToGoogleSheets } from '../services/googleSheets';

interface ToastState {
    message: string;
    type: ToastType;
    isVisible: boolean;
}

interface PopupContextType {
    openEmailPopup: () => void;
    closeEmailPopup: () => void;
    showToast: (message: string, type?: ToastType) => void;
    hideToast: () => void;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export const usePopup = () => {
    const context = useContext(PopupContext);
    if (!context) {
        throw new Error('usePopup must be used within PopupProvider');
    }
    return context;
};

interface PopupProviderProps {
    children: ReactNode;
}

export const PopupProvider: React.FC<PopupProviderProps> = ({ children }) => {
    const [isEmailPopupOpen, setIsEmailPopupOpen] = useState(false);
    const [toast, setToast] = useState<ToastState>({
        message: '',
        type: 'success',
        isVisible: false
    });

    const openEmailPopup = () => {
        setIsEmailPopupOpen(true);
    };

    const closeEmailPopup = () => {
        setIsEmailPopupOpen(false);
    };

    const showToast = (message: string, type: ToastType = 'success') => {
        setToast({
            message,
            type,
            isVisible: true
        });
    };

    const hideToast = () => {
        setToast((prev) => ({
            ...prev,
            isVisible: false
        }));
    };

    const handleEmailSubmit = async (email: string, source: string = 'Popup') => {
        try {
            // Submit email to Google Sheets
            const result = await submitEmailToGoogleSheets(email, source);

            if (result.status === 'success') {
                // Show success toast
                showToast('🎉 Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.', 'success');
                console.log('✅ Email saved to Google Sheets:', email);
            } else {
                // Show error toast but still log the email locally
                showToast('⚠️ Đã có lỗi xảy ra, nhưng chúng tôi đã ghi nhận email của bạn.', 'info');
                console.error('❌ Google Sheets error:', result.message);
                console.log('📧 Email (saved locally):', email);
            }
        } catch (error) {
            // Fallback: show error toast but log email
            showToast('⚠️ Đã có lỗi xảy ra, vui lòng thử lại sau.', 'error');
            console.error('❌ Submit error:', error);
            console.log('📧 Email (not saved):', email);
        }
    };

    return (
        <PopupContext.Provider
            value={{
                openEmailPopup,
                closeEmailPopup,
                showToast,
                hideToast
            }}
        >
            {children}

            {/* Email Popup */}
            <EmailPopup
                isOpen={isEmailPopupOpen}
                onClose={closeEmailPopup}
                onSubmit={handleEmailSubmit}
            />

            {/* Toast Notification */}
            <Toast
                message={toast.message}
                type={toast.type}
                isVisible={toast.isVisible}
                onClose={hideToast}
            />
        </PopupContext.Provider>
    );
};
