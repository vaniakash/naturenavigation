'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import DestinationsGrid from '@/components/DestinationsGrid';
import FAQSection from '@/components/FAQSection';
import styles from './page.module.css';

export default function DestinationsPage() {
    return (
        <>
            {/* Simplified Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBackground} />

                <div className={styles.heroContent}>
                    <motion.div
                        className={styles.iconWrapper}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                    >
                        <MapPin className={styles.heroIcon} />
                    </motion.div>

                    <motion.h1
                        className={styles.heroTitle}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Trekking & Spiritual Destinations
                    </motion.h1>

                    <motion.p
                        className={styles.heroSubtitle}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Explore Himalayan regions, pilgrimage circuits, and sacred valleys
                    </motion.p>

                    <motion.div
                        className={styles.statBadge}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <span className={styles.statNumber}>10+</span>
                        <span className={styles.statLabel}>Destinations Covered</span>
                    </motion.div>
                </div>
            </section>

            {/* Destinations Grid */}
            <DestinationsGrid />

            {/* FAQ Section */}
            <div style={{ marginBottom: '4rem' }}>
                <FAQSection />
            </div>
        </>
    );
}
