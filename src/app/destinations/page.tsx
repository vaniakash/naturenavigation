
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { destinationPackages } from '@/data/destinations';
import styles from './page.module.css';

export default function DestinationsPage() {
    return (
        <div className={styles.pageContainer}>
            {/* HERO SECTION */}
            <section className={styles.mainHero}>
                <div className={styles.heroOverlay} />
                <div className={styles.heroContent}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={styles.mainTitle}
                    >
                        Sacred Journeys
                    </motion.h1>
                    <p className={styles.mainSubtitle}>Choose your spiritual path in the Himalayas</p>
                </div>
            </section>

            {/* PACKAGE SELECTION GRID - Only 2 Main Cards */}
            <section className={styles.selectionSection}>
                <div className={styles.gridContainer}>
                    {destinationPackages.map((pkg, index) => (
                        <Link href={`/destinations/${pkg.slug}`} key={pkg.id} className={styles.cardLink}>
                            <motion.div
                                className={styles.packageCard}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={pkg.bannerImage}
                                        alt={pkg.title}
                                        fill
                                        className={styles.cardImage}
                                    />
                                    <div className={styles.cardOverlay}>
                                        <h2>{pkg.title}</h2>
                                        <p>{pkg.description}</p>
                                        <span className={styles.exploreBtn}>Explore Package &rarr;</span>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
