import React, { type ImgHTMLAttributes } from 'react';

interface OptimizedImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    sizes?: string;
    className?: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw", className, alt, ...props }) => {
    // If src is a URL or SVG, render standard image
    if (src.startsWith('http') || src.endsWith('.svg')) {
        return <img src={src} className={className} alt={alt} {...props} />;
    }

    // Deconstruct path
    const extension = src.split('.').pop() || '';
    const basePath = src.replace(`.${extension}`, '');

    // WebP Source Set
    const webpSrcSet = `
        ${basePath}-640w.webp 640w,
        ${basePath}-1024w.webp 1024w,
        ${basePath}-1920w.webp 1920w,
        ${basePath}.webp 2000w
    `;

    // Original Format Source Set (fallback for browsers without WebP - rare now but good practice)
    // Actually, usually browsers support WebP. If not, we fallback to original src.
    // We can also generate resized versions for original format if needed, but let's stick to WebP for optimization.

    return (
        <picture>
            <source
                type="image/webp"
                srcSet={webpSrcSet}
                sizes={sizes}
            />
            <img
                src={src}
                alt={alt}
                className={className}
                loading="lazy"
                decoding="async"
                {...props}
            />
        </picture>
    );
};

export default OptimizedImage;
