import React, { useEffect } from 'react';

const PreloadImages = ({ images }) => {
    useEffect(() => {
        images.forEach((image) => {
            const img = new Image();
            img.src = image;
        });
    }, [images]);

    return null;
};

export default PreloadImages;
