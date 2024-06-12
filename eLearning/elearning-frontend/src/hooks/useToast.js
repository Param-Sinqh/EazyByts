// src/hooks/useToast.js

import { useState, useEffect } from 'react';

const useToast = () => {
    const [toast, setToast] = useState({ message: '', show: false });

    useEffect(() => {
        const handleHideToast = () => {
            setToast({ ...toast, show: false });
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('hide-toast', handleHideToast);
        }

        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('hide-toast', handleHideToast);
            }
        };
    }, [toast]);

    const showToast = (message) => {
        setToast({ message, show: true });
    };

    return { toast, showToast };
};

export default useToast;
