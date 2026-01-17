'use client';

import Link from 'next/link';
import styles from './CTASection.module.css';

export default function CTASection() {
    return (
        <section className={styles.section}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        Ready for Your Next <span className={styles.highlight}>Adventure</span>?
                    </h2>
                    <p className={styles.description}>
                        Join thousands of trekkers who have experienced the beauty of Uttarakhand with Nature Navigation.
                        Your journey to the summit begins here.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/register" className={styles.primaryBtn}>
                            Create Account
                        </Link>
                        <Link href="/contact" className={styles.secondaryBtn}>
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
