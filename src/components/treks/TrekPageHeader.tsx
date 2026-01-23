'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Mountain } from 'lucide-react';
import styles from './TrekPageHeader.module.css';

interface TrekPageHeaderProps {
    totalTreks?: number;
}

const heroImages = [
    '/back.webp',
    '/himachal/AI/the-great-himalaya.webp'
];

export default function TrekPageHeader({ totalTreks = 0 }: TrekPageHeaderProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 8000); // 8 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={styles.header}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentImageIndex}
                    className={styles.backgroundImage}
                    style={{ backgroundImage: `url(${heroImages[currentImageIndex]})` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                />
            </AnimatePresence>
            <div className={styles.backgroundPattern} />
            <div className={styles.container}>
                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <motion.div
                        className={styles.iconWrapper}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    >
                        <Mountain className={styles.headerIcon} />
                    </motion.div>

                    <h1 className={styles.title}>Explore Himalayan Treks</h1>
                    <p className={styles.subtitle}>
                        Discover breathtaking trails through majestic mountains and pristine valleys
                    </p>

                    {totalTreks > 0 && (
                        <motion.div
                            className={styles.stats}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className={styles.statItem}>
                                <TrendingUp className={styles.statIcon} />
                                <span className={styles.statNumber}>{totalTreks}</span>
                                <span className={styles.statLabel}>Treks Available</span>
                            </div>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}
