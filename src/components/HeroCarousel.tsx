'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import styles from './HeroCarousel.module.css';

const carouselSlides = [
    {
        image: '/Gemini_Generated_Image_b6nj89b6nj89b6nj.webp',
        headline: 'More Than a Destination. A Calling.',
        subheadline: 'At Kedarnath, faith meets the Himalayas, and every step becomes a journey within.',
    },
    {
        image: '/heroa.webp',
        headline: 'This Is Where Your Journey Begins',
        subheadline: 'One step forward. A thousand memories waiting in the Himalayas.',
    },
    {
        image: '/herob.webp',
        headline: 'Leave the Noise Behind',
        subheadline: 'Walk into the mountains and reconnect with what truly matters.',
    },
    {
        image: '/heroc.webp',
        headline: 'What If the Summit Changed You?',
        subheadline: 'Stand above the clouds and rediscover clarity, strength, and perspective in the heart of the Himalayas.',
    },
    {
        image: '/herod.webp',
        headline: 'What If the Summit Changed You?',
        subheadline: 'Stand above the clouds and rediscover clarity, strength, and perspective in the heart of the Himalayas.',
    },
];

export default function HeroCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentX, setCurrentX] = useState(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (!isDragging) {
                setCurrentIndex((prevIndex) =>
                    prevIndex === carouselSlides.length - 1 ? 0 : prevIndex + 1
                );
            }
        }, 6000); // 6 seconds auto-swipe

        return () => clearInterval(interval);
    }, [isDragging]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? carouselSlides.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === carouselSlides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setStartX(e.pageX);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        setCurrentX(e.pageX);
    };

    const handleMouseUp = () => {
        if (!isDragging) return;

        const diff = startX - currentX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                goToNext();
            } else {
                goToPrevious();
            }
        }

        setIsDragging(false);
        setStartX(0);
        setCurrentX(0);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setIsDragging(true);
        setStartX(e.touches[0].pageX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;
        setCurrentX(e.touches[0].pageX);
    };

    const handleTouchEnd = () => {
        if (!isDragging) return;

        const diff = startX - currentX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                goToNext();
            } else {
                goToPrevious();
            }
        }

        setIsDragging(false);
        setStartX(0);
        setCurrentX(0);
    };

    return (
        <>
            {/* Background Carousel */}
            <div
                className={styles.carousel}
                ref={carouselRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className={styles.carouselInner}>
                    {carouselSlides.map((slide, index) => (
                        <div
                            key={index}
                            className={`${styles.carouselItem} ${index === currentIndex ? styles.active : ''
                                }`}
                        >
                            <Image
                                src={slide.image}
                                alt={slide.headline}
                                fill
                                className={styles.carouselImage}
                                priority={index === 0}
                                draggable={false}
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevious}
                    className={`${styles.carouselControl} ${styles.prev}`}
                    aria-label="Previous slide"
                >
                    <svg className={styles.controlIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
                <button
                    onClick={goToNext}
                    className={`${styles.carouselControl} ${styles.next}`}
                    aria-label="Next slide"
                >
                    <svg className={styles.controlIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Dots Indicator */}
                <div className={styles.dotsContainer}>
                    {carouselSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Overlay Content */}
            <div className="hero-overlay">
                <div className="hero-content-center">
                    <h1 className="hero-title-large">
                        {carouselSlides[currentIndex].headline.split(' ').slice(0, -1).join(' ')}{' '}
                        <span className="text-green">{carouselSlides[currentIndex].headline.split(' ').slice(-1)}</span>
                    </h1>
                    <p className="hero-description-large">
                        {carouselSlides[currentIndex].subheadline}
                    </p>
                    <a href="/treks" className="btn btn-primary btn-large">
                        Explore Treks
                    </a>
                    <p className="hero-stats-white">
                        Led by local mountain experts who know the Himalayas
                    </p>
                </div>
            </div>
        </>
    );
}
