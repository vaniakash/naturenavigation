'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Trek } from '@/data/treks';
import styles from './TrekCard.module.css';

interface TrekCardProps {
    trek: Trek;
}

export default function TrekCard({ trek }: TrekCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    src={trek.image}
                    alt={trek.name}
                    fill
                    className={styles.image}
                />
                <span className={styles.badge}>{trek.difficulty}</span>
            </div>

            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{trek.name}</h3>
                    <span className={styles.subtitle}>{trek.description.substring(0, 60)}...</span>
                </div>

                <div className={styles.detailsGrid}>
                    <div className={styles.detailItem}>
                        <span>📅 {trek.duration.split(' ')[0]} Days</span>
                    </div>
                    <div className={styles.detailItem}>
                        <span>⛰ {trek.difficulty}</span>
                    </div>
                </div>

                <div className={styles.footer}>
                    <div className={styles.actionButtons}>
                        <Link href={`/treks/${trek.id}`} className={styles.viewDetailsBtn}>
                            Info
                        </Link>
                        <Link href={`/treks/${trek.id}`} className={styles.bookBtn}>
                            Book
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
