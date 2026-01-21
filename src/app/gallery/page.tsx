'use client';

import Masonry from '@/components/Masonry';
import styles from './share.module.css';

export default function GalleryPage() {
    // Trek gallery images with heights for masonry layout
    const items = [
        {
            id: "1",
            img: "/aboutb.png",
            url: "#",
            height: 900,
        },
        {
            id: "2",
            img: "/aboutd.png",
            url: "#",
            height: 950,
        },
        {
            id: "3",
            img: "/rahul.png",
            url: "#",
            height: 800,
        },
        {
            id: "4",
            img: "/harkidun.webp",
            url: "#",
            height: 750,
        },
        {
            id: "5",
            img: "/kedarkantha.webp",
            url: "#",
            height: 700,
        },
        {
            id: "6",
            img: "/here.webp",
            url: "#",
            height: 900,
        },
        {
            id: "7",
            img: "/heroa.webp",
            url: "#",
            height: 850,
        },
        {
            id: "8",
            img: "/herob.webp",
            url: "#",
            height: 700,
        },
        {
            id: "9",
            img: "/heroc.webp",
            url: "#",
            height: 800,
        },
        {
            id: "10",
            img: "/herod.webp",
            url: "#",
            height: 850,
        },
        {
            id: "11",
            img: "/valley.webp",
            url: "#",
            height: 750,
        },
        {
            id: "12",
            img: "/vally.webp",
            url: "#",
            height: 650,
        },
        {
            id: "13",
            img: "/velly.webp",
            url: "#",
            height: 700,
        },
        {
            id: "14",
            img: "/kedarkanthab.webp",
            url: "#",
            height: 800,
        },
        {
            id: "15",
            img: "/harkiduna.webp",
            url: "#",
            height: 750,
        },
        {
            id: "16",
            img: "/harkidunb.webp",
            url: "#",
            height: 700,
        },
        {
            id: "17",
            img: "/about.png",
            url: "#",
            height: 850,
        },
        {
            id: "18",
            img: "/about1.png",
            url: "#",
            height: 900,
        },
        {
            id: "19",
            img: "/aboutc.png",
            url: "#",
            height: 800,
        },
        {
            id: "20",
            img: "/kedar.webp",
            url: "#",
            height: 750,
        },
    ];

    return (
        <div className="min-h-screen px-4 py-24 pb-32">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold mb-4">
                        Trek <span className="gradient-text">Gallery</span>
                    </h1>
                    <p className="text-text-light text-lg">
                        Glimpses from our incredible trekking adventures
                    </p>
                </div>

                {/* Masonry Gallery - Calculate dynamic height */}
                <div style={{ minHeight: '2000px', marginBottom: '3rem' }}>
                    <Masonry
                        items={items}
                        ease="power3.out"
                        duration={0.6}
                        stagger={0.05}
                        animateFrom="bottom"
                        scaleOnHover
                        hoverScale={0.95}
                        blurToFocus
                        colorShiftOnHover={false}
                    />
                </div>
            </div>

            {/* Share Section - Modern & Engaging Design */}
            <div className={styles.shareSection}>
                <div className={styles.shareContent}>
                    <h2 className={styles.shareTitle}>
                        Share Your Trek Memories
                    </h2>
                    <p className={styles.shareSubtitle}>
                        Been on an unforgettable trek with us? Share your moments and inspire others!
                    </p>

                    <div className={styles.socialContainer}>
                        <a
                            href="https://www.instagram.com/naturenavigation_/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialButton}
                            aria-label="Follow Nature Navigation on Instagram"
                        >
                            <svg
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                        <a
                            href="https://www.instagram.com/sinu_rawat_1/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialButton}
                            aria-label="Follow Sinu Rawat on Instagram"
                        >
                            <svg
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                                <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>
                    </div>

                    <div className={styles.tagline}>
                        <p>
                            Tag us with <span className={styles.hashtag}>#NatureNavigation</span> to be featured!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
