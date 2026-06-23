'use client';

import Image, { StaticImageData } from 'next/image';
import { useState, useEffect } from 'react';

interface Props {
    images: StaticImageData[];
    interval?: number; // ms, default 4000
}

export default function AboutSlider({ images, interval = 4000 }: Props) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
        <div className="about-slider">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`about-slider__slide${index === current ? ' about-slider__slide--active' : ''}`}
                >
                    <Image
                        src={img}
                        alt={`About image ${index + 1}`}
                        fill
                        priority={index === 0}
                        sizes="100vw"
                    />
                </div>
            ))}

            <div className="about-slider__dots">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`about-slider__dot${index === current ? ' about-slider__dot--active' : ''}`}
                        onClick={() => setCurrent(index)}
                        aria-label={`Фото ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}