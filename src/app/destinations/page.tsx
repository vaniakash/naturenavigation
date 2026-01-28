'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { destinationPackages } from '@/data/destinations';
import styles from './page.module.css';
import { useState } from 'react';
import { Mountain, ShieldCheck, Users, HeartHandshake, Wallet, FileCheck } from 'lucide-react';

const faqs = [
    {
        question: "Is Char Dham suitable for senior citizens?",
        answer: "Yes, Char Dham is visited by thousands of senior citizens annually. However, decent physical fitness is recommended. Pony and Palki services are available for those who cannot walk long distances."
    },
    {
        question: "How difficult is Panch Kedar?",
        answer: "Panch Kedar is considered moderately difficult to difficult, as it involves significant trekking (especially Madhyamaheshwar and Rudranath). It is best suited for trekkers and fit devotees."
    },
    {
        question: "Is prior trekking experience required?",
        answer: "For Char Dham, trekking is minimal (mostly Yamunotri and Kedarnath), so no prior experience is strictly needed. For Panch Kedar, prior trekking experience or good fitness is highly recommended."
    },
    {
        question: "What about medical facilities?",
        answer: "Basic medical facilities are available at key stops, but we also carry First Aid kits. For emergencies, government helicopter services are available at Kedarnath and other strategic points."
    }
];

export default function DestinationsPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

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


            {/* 1. WHY CHOOSE THIS YATRA */}
            <section className={styles.sectionPadding}>
                <h2 className={styles.sectionTitle}>Why Choose <span>This Yatra?</span></h2>
                <div className={styles.whyChooseGrid}>
                    <div className={styles.trustItem}>
                        <span className={styles.trustIcon}><Mountain size={40} className="text-emerald-500" /></span>
                        <h3 className={styles.trustTitle}>Local Himalayan Guides</h3>
                        <p className={styles.trustDesc}>Expert guidance from locals who know the terrain.</p>
                    </div>
                    <div className={styles.trustItem}>
                        <span className={styles.trustIcon}><ShieldCheck size={40} className="text-emerald-500" /></span>
                        <h3 className={styles.trustTitle}>Spiritual + Safe</h3>
                        <p className={styles.trustDesc}>Itineraries balanced for devotion and safety.</p>
                    </div>
                    <div className={styles.trustItem}>
                        <span className={styles.trustIcon}><Users size={40} className="text-emerald-500" /></span>
                        <h3 className={styles.trustTitle}>Small Groups</h3>
                        <p className={styles.trustDesc}>Personalized attention and better experience.</p>
                    </div>
                    <div className={styles.trustItem}>
                        <span className={styles.trustIcon}><HeartHandshake size={40} className="text-emerald-500" /></span>
                        <h3 className={styles.trustTitle}>Emergency Support</h3>
                        <p className={styles.trustDesc}>24/7 medical & operational backup.</p>
                    </div>
                    <div className={styles.trustItem}>
                        <span className={styles.trustIcon}><Wallet size={40} className="text-emerald-500" /></span>
                        <h3 className={styles.trustTitle}>Transparent Pricing</h3>
                        <p className={styles.trustDesc}>No hidden costs, what you see is what you pay.</p>
                    </div>
                    <div className={styles.trustItem}>
                        <span className={styles.trustIcon}><FileCheck size={40} className="text-emerald-500" /></span>
                        <h3 className={styles.trustTitle}>Govt. Compliant</h3>
                        <p className={styles.trustDesc}>Registered routes and authorized services.</p>
                    </div>
                </div>
            </section>


            {/* 2. YATRA COMPARISON */}
            <section className={styles.sectionPadding}>
                <h2 className={styles.sectionTitle}>Yatra <span>Comparison</span></h2>
                <div className={styles.comparisonContainer}>
                    <table className={styles.comparisonTable}>
                        <thead>
                            <tr>
                                <th>Feature</th>
                                <th>Char Dham</th>
                                <th>Panch Kedar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Duration</td>
                                <td>10–12 Days</td>
                                <td>12–15 Days</td>
                            </tr>
                            <tr>
                                <td>Difficulty</td>
                                <td>Easy–Moderate</td>
                                <td>Moderate</td>
                            </tr>
                            <tr>
                                <td>Best For</td>
                                <td>First-timers & Families</td>
                                <td>Devotees & Trekkers</td>
                            </tr>
                            <tr>
                                <td>Spiritual Focus</td>
                                <td>Vishnu + Shiva</td>
                                <td>Lord Shiva (5 Forms)</td>
                            </tr>
                            <tr>
                                <td>Trekking Involved</td>
                                <td>Minimal (mainly Kedarnath)</td>
                                <td>High (steep ascents)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* 3. SPIRITUAL SIGNIFICANCE */}
            <section className={styles.sectionPadding}>
                <h2 className={styles.sectionTitle}>Spiritual <span>Significance</span></h2>
                <div className={styles.spiritualGrid}>
                    <div className={styles.spiritualBlock}>
                        <h3>Char Dham</h3>
                        <p>
                            Considered the path to Moksha (salvation) and completion of the spiritual life cycle. The journey traditionally proceeds from West to East: Yamunotri (Purification), Gangotri (Compassion), Kedarnath (Liberation), and Badrinath (Realization). It is believed to wash away sins and open the gates of heaven.
                        </p>
                    </div>
                    <div className={styles.spiritualBlock}>
                        <h3>Panch Kedar</h3>
                        <p>
                            Dedicated to the five forms of Lord Shiva: Kedarnath (Hump), Tungnath (Arms), Rudranath (Face), Madhyamaheshwar (Navel), and Kalpeshwar (Hair). This Yatra represents raw Himalayan devotion, taking pilgrims through ancient forests and high meadows to seek Shiva's blessings in his most elemental forms.
                        </p>
                    </div>
                </div>
            </section>

            {/* 4. INTERACTIVE ROUTE MAP (Placeholder) */}
            <section className={styles.sectionPadding}>
                <h2 className={styles.sectionTitle}>Yatra <span>Route Map</span></h2>
                <div className={styles.mapPlaceholder}>
                    {/* In a real scenario, this would be an interactive SVG map */}
                    <svg className={styles.mapSVG} viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <linearGradient id="mapGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#e2e8f0" />
                                <stop offset="100%" stopColor="#cbd5e1" />
                            </linearGradient>
                        </defs>
                        <rect width="800" height="400" fill="url(#mapGrad)" rx="20" />
                        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#64748b" fontSize="20">
                            Interactive Route Map Visual
                        </text>
                        {/* Simulating points */}
                        <circle cx="200" cy="200" r="8" fill="#10b981" />
                        <text x="200" y="230" textAnchor="middle" fill="#475569" fontSize="12">Yamunotri</text>
                        <circle cx="300" cy="150" r="8" fill="#10b981" />
                        <text x="300" y="180" textAnchor="middle" fill="#475569" fontSize="12">Gangotri</text>
                        <circle cx="450" cy="180" r="8" fill="#10b981" />
                        <text x="450" y="210" textAnchor="middle" fill="#475569" fontSize="12">Kedarnath</text>
                        <circle cx="600" cy="220" r="8" fill="#10b981" />
                        <text x="600" y="250" textAnchor="middle" fill="#475569" fontSize="12">Badrinath</text>
                        <path d="M200 200 L300 150 L450 180 L600 220" stroke="#94a3b8" strokeWidth="2" strokeDasharray="5,5" fill="none" />
                    </svg>
                </div>
            </section>

            {/* 5. BEST TIME TO VISIT */}
            <section className={styles.sectionPadding}>
                <h2 className={styles.sectionTitle}>Best Time to <span>Visit</span></h2>
                <div className={styles.timelineGrid}>
                    <div className={styles.timelineCard}>
                        <span className={styles.timelineMonth}>May – June</span>
                        <p className={styles.timelineDesc}>Best weather, clear views, slightly crowded. Ideal for all.</p>
                    </div>
                    <div className={`${styles.timelineCard} ${styles.monsoon}`}>
                        <span className={styles.timelineMonth}>July – Aug</span>
                        <p className={styles.timelineDesc}>Monsoon season. Lush greenery but risk of landslides. For adventure seekers.</p>
                    </div>
                    <div className={`${styles.timelineCard} ${styles.cold}`}>
                        <span className={styles.timelineMonth}>Sept – Oct</span>
                        <p className={styles.timelineDesc}>Post-monsoon freshness, cold nights, very clear mountain views.</p>
                    </div>
                </div>
            </section>

            {/* 6. FAQ ACCORDION */}
            <section className={styles.sectionPadding}>
                <h2 className={styles.sectionTitle}>Frequently Asked <span>Questions</span></h2>
                <div className={styles.faqContainer}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={styles.faqItem}>
                            <button
                                className={styles.faqQuestion}
                                onClick={() => toggleFaq(index)}
                            >
                                {faq.question}
                                <span>{openFaq === index ? '−' : '+'}</span>
                            </button>
                            {openFaq === index && (
                                <div className={styles.faqAnswer}>
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* 7. CTA SECTION */}
            <section className={styles.ctaSection}>
                <h2>Ready to Begin Your Sacred Journey?</h2>
                <div className={styles.ctaButtons}>
                    <Link href="/contact" className={styles.primaryBtn}>
                        Talk to a Yatra Expert
                    </Link>
                    <Link href="/contact" className={styles.secondaryBtn}>
                        Get Detailed Itinerary
                    </Link>
                </div>
            </section>
        </div>
    );
}
