'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './PopularTreks.module.css';

const TrekCard = ({ trek }: { trek: any }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % trek.images.length);
        }, 6000); // Change image every 6 seconds

        return () => clearInterval(interval);
    }, [trek.images.length]);

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                {trek.images.map((img: string, index: number) => (
                    <Image
                        key={index}
                        src={img}
                        alt={`${trek.name} - Image ${index + 1}`}
                        fill
                        className={`${styles.image} ${index === currentImageIndex ? styles.activeImage : styles.inactiveImage}`}
                        priority={index === 0}
                    />
                ))}

                {/* Carousel Indicators */}
                <div className={styles.indicators}>
                    {trek.images.map((_: any, index: number) => (
                        <div
                            key={index}
                            className={`${styles.indicator} ${index === currentImageIndex ? styles.activeIndicator : ''}`}
                        />
                    ))}
                </div>

                <div className={styles.badge}>{trek.difficulty}</div>
            </div>

            <div className={styles.content}>
                <div className={styles.cardHeader}>
                    <h3 className={styles.trekName}>{trek.name}</h3>
                    <span className={styles.price}>{trek.price}</span>
                </div>

                <div className={styles.details}>
                    <span className={styles.detailItem}>
                        <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {trek.duration}
                    </span>
                </div>

                <Link href={trek.slug} className={styles.cardBtn}>
                    View Details
                    <svg className={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </div>
    );
};

export default function PopularTreks() {
    const featuredTreks = [
        {
            name: 'Har Ki Dun Trek',
            duration: '7 Days',
            difficulty: 'Moderate',
            price: '₹12,999',
            images: ['/harkidun.webp', '/harkiduna.webp', '/harkidunb.webp'],
            slug: '/treks/har-ki-dun',
        },
        {
            name: 'Valley of Flowers',
            duration: '6 Days',
            difficulty: 'Easy-Moderate',
            price: '₹15,999',
            images: ['/valley.webp', '/vally.webp', '/velly.webp'],
            slug: '/treks/valley-of-flowers',
        },
        {
            name: 'Kedarkantha Trek',
            duration: '5 Days',
            difficulty: 'Moderate',
            price: '₹10,999',
            images: ['/kedar.webp', '/kedarkantha.webp', '/kedarkanthab.webp'],
            slug: '/treks/kedarkantha',
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Popular <span className={styles.highlight}>Treks</span>
                    </h2>
                    <p className={styles.subtitle}>
                        Discover our most popular trekking routes in the Uttarakhand Himalayas
                    </p>
                </div>

                <div className={styles.grid}>
                    {featuredTreks.map((trek) => (
                        <TrekCard key={trek.name} trek={trek} />
                    ))}
                </div>

                <div className={styles.footer}>
                    <Link href="/treks" className={styles.viewAllBtn}>
                        View All Treks
                    </Link>
                </div>
            </div>
        </section>
    );
}
