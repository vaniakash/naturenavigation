import DestinationsGrid from '@/components/DestinationsGrid';
import FAQSection from '@/components/FAQSection';
import styles from './page.module.css';
import Link from 'next/link';

export default function DestinationsPage() {
    return (
        <>
            <div>
                {/* Custom Hero for Destinations */}
                <section className={styles.hero} style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/back.webp')" }}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.title}>Explore Destinations</h1>
                        <p className={styles.subtitle}>
                            Discover the most loved trekking regions of Uttarakhand
                        </p>
                        <Link href="/treks" className={styles.ctaBtn}>
                            View All Treks
                        </Link>
                    </div>
                </section>

                {/* Destinations Grid */}
                <DestinationsGrid />

                {/* FAQ Section */}
                <div style={{ marginBottom: '4rem' }}>
                    <FAQSection />
                </div>
            </div>
        </>
    );
}
