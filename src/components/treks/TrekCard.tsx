'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Mountain, MapPin, Clock, IndianRupee } from 'lucide-react';
import { Trek } from '@/data/treks';
import styles from './TrekCard.module.css';

interface TrekCardProps {
    trek: Trek;
    index?: number;
}

export default function TrekCard({ trek, index = 0 }: TrekCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = trek.routeMap ? [trek.image, trek.routeMap] : [trek.image];

    useEffect(() => {
        if (images.length > 1) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prev) => (prev + 1) % images.length);
            }, 8000); // 8 seconds

            return () => clearInterval(interval);
        }
    }, [images.length]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94]
            }}
            whileHover={{ y: -8 }}
            className={styles.card}
        >
            <Link href={`/treks/${trek.slug}`} className={styles.cardLink}>
                <motion.div
                    className={styles.imageContainer}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImageIndex}
                            className={styles.imageWrapper}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Image
                                src={images[currentImageIndex]}
                                alt={trek.name}
                                fill
                                className={styles.image}
                            />
                        </motion.div>
                    </AnimatePresence>
                    <div className={styles.imageOverlay} />
                    <span className={styles.badge}>
                        <Mountain className={styles.badgeIcon} />
                        {trek.difficulty}
                    </span>
                    <div className={styles.priceTag}>
                        <IndianRupee className={styles.priceIcon} />
                        <span>{trek.price.replace('₹', '')}</span>
                    </div>
                </motion.div>

                <div className={styles.content}>
                    <div className={styles.header}>
                        <h3 className={styles.title}>{trek.name}</h3>
                        <p className={styles.subtitle}>{trek.description}</p>
                    </div>

                    <div className={styles.detailsGrid}>
                        <div className={styles.detailItem}>
                            <MapPin className={styles.icon} />
                            <span>{trek.region}</span>
                        </div>
                        <div className={styles.detailItem}>
                            <Clock className={styles.icon} />
                            <span>{trek.duration.split(' ')[0]} Days</span>
                        </div>
                        <div className={styles.detailItem}>
                            <Calendar className={styles.icon} />
                            <span>{trek.bestSeason.split(',')[0]}</span>
                        </div>
                    </div>

                    <div className={styles.footer}>
                        <motion.div
                            className={styles.bookBtn}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Book Now
                        </motion.div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
