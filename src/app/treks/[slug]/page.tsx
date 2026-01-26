import { treksData } from '@/data/treks';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const params = await props.params;
    const trek = treksData.find((t) => t.slug === params.slug);

    if (!trek) {
        return {
            title: 'Trek Not Found',
        };
    }

    return {
        title: `${trek.name} - Nature Navigation`,
        description: trek.description,
        openGraph: {
            title: trek.name,
            description: trek.description,
            images: [trek.image],
        },
    };
}
import styles from './trekDetail.module.css';
import Image from 'next/image';
import { Mountain, MapPin, Clock, Calendar, TrendingUp, Check, ChevronDown } from 'lucide-react';
import BookNowButton from '@/components/BookNowButton';

// Force static generation for known paths (optional but good for performance)
export async function generateStaticParams() {
    return treksData.map((trek) => ({
        slug: trek.slug,
    }));
}

export default async function TrekDetailPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const trek = treksData.find((t) => t.slug === params.slug);

    if (!trek) {
        notFound();
    }

    return (
        <div className={styles.container}>
            {/* JSON-LD for Trek Product */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Product",
                        "name": trek.name,
                        "image": [`https://naturenavigation.in${trek.image}`],
                        "description": trek.description,
                        "brand": {
                            "@type": "Brand",
                            "name": "Nature Navigation"
                        },
                        "offers": {
                            "@type": "Offer",
                            "url": `https://naturenavigation.in/treks/${trek.slug}`,
                            "priceCurrency": "INR",
                            "price": trek.price.replace(/[^0-9]/g, ''),
                            "availability": "https://schema.org/InStock",
                            "validFrom": new Date().toISOString()
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.8",
                            "reviewCount": "50"
                        }
                    })
                }}
            />
            {/* JSON-LD for Breadcrumbs */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://naturenavigation.in"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Treks",
                                "item": "https://naturenavigation.in/treks"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": trek.name,
                                "item": `https://naturenavigation.in/treks/${trek.slug}`
                            }
                        ]
                    })
                }}
            />

            {/* HER0 SECTION */}
            <section className={styles.hero}>
                <div className={styles.heroBackground}>
                    <Image
                        src={trek.image}
                        alt={trek.name}
                        fill
                        className={styles.heroImage}
                        priority
                    />
                </div>
                <div className={styles.heroOverlay}></div>

                <div className={styles.heroContent}>
                    {trek.heroTitle && <div className={styles.heroTitle}>{trek.heroTitle}</div>}
                    <h1 className={styles.trekName}>{trek.name}</h1>
                    {trek.heroSubtitle && <div className={styles.heroSubtitle}>{trek.heroSubtitle}</div>}
                </div>
            </section>

            <div className={styles.contentWrapper}>
                {/* LEFT COLUMN: MAIN CONTENT */}
                <div className={styles.mainColumn}>

                    {/* QUICK FACTS GRID */}
                    <section className={styles.quickFacts}>
                        <div className={styles.factCard}>
                            <MapPin className={styles.factIcon} size={24} />
                            <div className={styles.factLabel}>Region</div>
                            <div className={styles.factValue}>{trek.region.split('(')[0].trim()}</div>
                        </div>
                        <div className={styles.factCard}>
                            <TrendingUp className={styles.factIcon} size={24} />
                            <div className={styles.factLabel}>Difficulty</div>
                            <div className={styles.factValue}>{trek.difficulty}</div>
                        </div>
                        <div className={styles.factCard}>
                            <Clock className={styles.factIcon} size={24} />
                            <div className={styles.factLabel}>Duration</div>
                            <div className={styles.factValue}>{trek.duration.split(' ')[0]} Days</div>
                        </div>
                        <div className={styles.factCard}>
                            <Mountain className={styles.factIcon} size={24} />
                            <div className={styles.factLabel}>Altitude</div>
                            <div className={styles.factValue}>{trek.altitude.split(' ')[0]}</div>
                        </div>
                        <div className={styles.factCard}>
                            <Calendar className={styles.factIcon} size={24} />
                            <div className={styles.factLabel}>Best Season</div>
                            <div className={styles.factValue}>Win/Spr</div>
                        </div>
                    </section>

                    <hr style={{ margin: '3rem 0', borderColor: '#e2e8f0', opacity: 0.5 }} />

                    {/* ABOUT */}
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>About The Trek</h2>
                        <div className={styles.text} style={{ whiteSpace: 'pre-line' }}>
                            {trek.longDescription || trek.description}
                        </div>
                    </section>

                    <hr style={{ margin: '3rem 0', borderColor: '#e2e8f0', opacity: 0.5 }} />

                    {/* HIGHLIGHTS */}
                    {trek.highlights && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Trek Highlights</h2>
                            <ul className={styles.highlightList}>
                                {trek.highlights.map((highlight, index) => (
                                    <li key={index} className={styles.highlightItem}>
                                        <Check className={styles.highlightIcon} size={18} />
                                        {highlight}
                                    </li>
                                ))}
                            </ul>
                        </section>
                    )}

                    <hr style={{ margin: '3rem 0', borderColor: '#e2e8f0', opacity: 0.5 }} />

                    {/* ITINERARY */}
                    {trek.itinerary && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Detailed Itinerary</h2>
                            <div className={styles.accordion}>
                                {trek.itinerary.map((day, index) => (
                                    <details key={index} className={styles.accordionItem} open={index === 0}>
                                        <summary className={styles.accordionHeader}>
                                            <span className={styles.accordionTitle}>
                                                <span style={{ color: '#64748b', marginRight: '0.5rem' }}>{day.day}:</span>
                                                {day.title}
                                            </span>
                                            <ChevronDown className={styles.accordionIcon} size={20} />
                                        </summary>
                                        <div className={styles.accordionContent}>
                                            <p>{day.description}</p>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>
                    )}

                    <hr style={{ margin: '3rem 0', borderColor: '#e2e8f0', opacity: 0.5 }} />

                    {/* INCLUSIONS */}
                    {trek.inclusions && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>Inclusions & Exclusions</h2>
                            <div className={styles.accordion}>
                                <details className={styles.accordionItem}>
                                    <summary className={styles.accordionHeader}>
                                        <span className={styles.accordionTitle}>Inclusions</span>
                                        <ChevronDown className={styles.accordionIcon} size={20} />
                                    </summary>
                                    <div className={styles.accordionContent}>
                                        <ul style={{ paddingLeft: '1.2rem' }}>
                                            {trek.inclusions.map((item, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>)}
                                        </ul>
                                    </div>
                                </details>
                                {trek.exclusions && (
                                    <details className={styles.accordionItem}>
                                        <summary className={styles.accordionHeader}>
                                            <span className={styles.accordionTitle}>Exclusions</span>
                                            <ChevronDown className={styles.accordionIcon} size={20} />
                                        </summary>
                                        <div className={styles.accordionContent}>
                                            <ul style={{ paddingLeft: '1.2rem' }}>
                                                {trek.exclusions.map((item, i) => <li key={i} style={{ marginBottom: '0.5rem' }}>{item}</li>)}
                                            </ul>
                                        </div>
                                    </details>
                                )}
                            </div>
                        </section>
                    )}

                    {/* FAQs */}
                    {trek.faqs && (
                        <section className={styles.section}>
                            <h2 className={styles.sectionTitle}>FAQs</h2>
                            <div className={styles.accordion}>
                                {trek.faqs.map((faq, index) => (
                                    <details key={index} className={styles.accordionItem}>
                                        <summary className={styles.accordionHeader}>
                                            <span className={styles.accordionTitle}>{faq.question}</span>
                                            <ChevronDown className={styles.accordionIcon} size={20} />
                                        </summary>
                                        <div className={styles.accordionContent}>
                                            <p>{faq.answer}</p>
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </section>
                    )}

                </div>

                {/* RIGHT SIDEBAR: PRICE CARD */}
                <div className={styles.sidebar}>
                    <div className={styles.priceCard}>
                        <div className={styles.priceLabel}>From</div>
                        <div className={styles.priceValue}>{trek.price}</div>
                        <div className={styles.pricePer}>Per Person</div>

                        {trek.priceDetails && (
                            <div className={styles.priceBreakdown}>
                                <div className={styles.breakdownItem}>
                                    <Check className={styles.checkIcon} size={16} />
                                    <span>{trek.priceDetails.gst}</span>
                                </div>
                                <div className={styles.breakdownItem}>
                                    <Check className={styles.checkIcon} size={16} />
                                    <span>{trek.priceDetails.insurance}</span>
                                </div>
                                <div className={styles.breakdownItem}>
                                    <Check className={styles.checkIcon} size={16} />
                                    <span>{trek.priceDetails.transport}</span>
                                </div>
                            </div>
                        )}

                        <BookNowButton
                            trekId={trek.slug}
                            trekName={trek.name}
                            price={trek.price || '11450'}
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
