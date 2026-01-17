'use client';

import styles from './TrekPageHeader.module.css';

export default function TrekPageHeader() {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>All Treks</h1>
        </div>
    );
}
