
import { destinationPackages } from '@/data/destinations';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import FloatingContact from '@/components/FloatingContact';
// Note: FloatingContact is currently restricted to Home, but we might want a specific enquiry button here. 
// We will simply use an Enquiry Button that opens a modal or links to contact.
// For now, let's create a simple Enquiry Button or reuse concepts.

import FAQSection from '@/components/FAQSection';
import styles from './detail.module.css';

export async function generateStaticParams() {
    return destinationPackages.map((pkg) => ({
        slug: pkg.slug,
    }));
}

export default async function DestinationDetailPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const pkg = destinationPackages.find((p) => p.slug === params.slug);

    if (!pkg) {
        notFound();
    }

    return (
        <div className={styles.pageContainer}>
            {/* HERO BANNER */}
            <div className={styles.heroBanner}>
                <Image
                    src={pkg.bannerImage}
                    alt={pkg.title}
                    fill
                    className={styles.heroImage}
                    priority
                />
                <div className={styles.heroOverlay}>
                    <div className={styles.heroContent}>
                        <h1 className={styles.title}>{pkg.title}</h1>
                        <p className={styles.description}>{pkg.description}</p>
                        <Link href="/contact" className={styles.enquiryBtnHero}>
                            Send Enquiry
                        </Link>
                    </div>
                </div>
            </div>

            {/* SUB-DESTINATIONS GRID */}
            <div className={styles.contentContainer}>
                <h2 className={styles.sectionTitle}>Destinations Covered</h2>
                <div className={styles.grid}>
                    {pkg.subDestinations.map((dest, idx) => (
                        <div key={idx} className={styles.card}>
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    fill
                                    className={styles.cardImage}
                                />
                            </div>
                            <div className={styles.cardContent}>
                                <h3>{dest.name}</h3>
                                <p>{dest.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* BOTTOM CTA */}
                <div className={styles.ctaSection}>
                    <h3>Ready to start your spiritual journey?</h3>
                    <Link href="/contact" className={styles.enquiryBtnLarge}>
                        Book Your Yatra Now
                    </Link>
                </div>
            </div>

            <FAQSection />
        </div>
    );
}
