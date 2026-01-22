'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Clock, ArrowRight } from 'lucide-react';
import styles from './PopularTreks.module.css';

const TrekCard = ({ trek, isActive }: { trek: any; isActive: boolean }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (!isActive) return;

        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % trek.images.length);
        }, 6000);

        return () => clearInterval(interval);
    }, [trek.images.length, isActive]);

    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
        >
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

                <div className={styles.imageOverlay} />

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
                        <Clock className={styles.icon} size={18} />
                        {trek.duration}
                    </span>
                </div>

                <Link href={trek.slug} className={styles.cardBtn}>
                    <span>View Details</span>
                    <ArrowRight className={styles.btnIcon} size={20} />
                </Link>
            </div>
        </motion.div>
    );
};

export default function PopularTreks() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const constraintsRef = useRef(null);

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

    const handlePrevious = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev === 0 ? featuredTreks.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev === featuredTreks.length - 1 ? 0 : prev + 1));
    };

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction > 0 ? -1000 : 1000,
            opacity: 0,
        }),
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <motion.h2
                        className={styles.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        Popular <span className={styles.highlight}>Treks</span>
                    </motion.h2>
                    <motion.p
                        className={styles.subtitle}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        Discover our most popular trekking routes in the Uttarakhand Himalayas
                    </motion.p>
                </div>

                {/* Desktop Grid View */}
                <div className={styles.desktopGrid}>
                    {featuredTreks.map((trek, index) => (
                        <motion.div
                            key={trek.name}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                        >
                            <TrekCard trek={trek} isActive={true} />
                        </motion.div>
                    ))}
                </div>

                {/* Mobile Carousel View */}
                <div className={styles.mobileCarousel} ref={constraintsRef}>
                    <motion.button
                        className={`${styles.navBtn} ${styles.navBtnLeft}`}
                        onClick={handlePrevious}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronLeft size={24} />
                    </motion.button>

                    <div className={styles.carouselWrapper}>
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: 'spring', stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                                drag="x"
                                dragConstraints={{ left: 0, right: 0 }}
                                dragElastic={1}
                                onDragEnd={(e, { offset, velocity }) => {
                                    const swipe = swipePower(offset.x, velocity.x);
                                    if (swipe < -swipeConfidenceThreshold) {
                                        handleNext();
                                    } else if (swipe > swipeConfidenceThreshold) {
                                        handlePrevious();
                                    }
                                }}
                                className={styles.carouselSlide}
                            >
                                <TrekCard trek={featuredTreks[currentIndex]} isActive={true} />
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <motion.button
                        className={`${styles.navBtn} ${styles.navBtnRight}`}
                        onClick={handleNext}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <ChevronRight size={24} />
                    </motion.button>

                    {/* Dots Indicator */}
                    <div className={styles.dotsContainer}>
                        {featuredTreks.map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                            />
                        ))}
                    </div>
                </div>

                <motion.div
                    className={styles.footer}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <Link href="/treks" className={styles.viewAllBtn}>
                        <span>View All Treks</span>
                        <ArrowRight size={20} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};
