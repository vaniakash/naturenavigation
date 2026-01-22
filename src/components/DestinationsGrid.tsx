'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Mountain, Heart, Palmtree, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import styles from './DestinationsGrid.module.css';

const categories = [
    { id: 'adventure', label: 'Adventure Regions', icon: Mountain },
    { id: 'spiritual', label: 'Spiritual Circuits', icon: Heart },
    { id: 'nature', label: 'Nature & Culture', icon: Palmtree },
    { id: 'popular', label: 'Popular Regions', icon: MapPin }
];

const destinations = [
    {
        id: 1,
        name: 'Char Dham Circuit',
        description: 'Sacred journey through four holy shrines of Uttarakhand',
        experiencesCount: 4,
        image: '/kedar.webp',
        slug: '/treks',
        category: 'spiritual',
        isPopular: true
    },
    {
        id: 2,
        name: 'Garhwal Himalayas',
        description: 'Epic trekking routes and pristine mountain valleys',
        experiencesCount: 12,
        image: '/harkidun.webp',
        slug: '/treks',
        category: 'adventure',
        isPopular: true
    },
    {
        id: 3,
        name: 'Kumaon Himalayas',
        description: 'Serene trails through pine forests and meadows',
        experiencesCount: 8,
        image: '/valley.webp',
        slug: '/treks',
        category: 'adventure',
        isPopular: false
    },
    {
        id: 4,
        name: 'Himachal Pradesh',
        description: 'Adventure sports and scenic mountain landscapes',
        experiencesCount: 10,
        image: '/back.webp',
        slug: '/treks',
        category: 'nature',
        isPopular: true
    },
    {
        id: 5,
        name: 'Dharamshala & Kangra',
        description: 'Tibetan culture meets Himalayan beauty',
        experiencesCount: 6,
        image: '/here.webp',
        slug: '/treks',
        category: 'nature',
        isPopular: false
    }
];

const trustPoints = [
    { icon: '🏔️', title: 'Local Experts & Guides', description: 'Born and raised in the Himalayas' },
    { icon: '⭐', title: 'Years of Experience', description: 'Deep knowledge of every trail' },
    { icon: '🛡️', title: 'Safe & Responsible Travel', description: 'Your safety is our priority' },
    { icon: '🤝', title: 'Trusted by Travelers', description: 'Pilgrims & trekkers alike' }
];

export default function DestinationsGrid() {
    const [activeCategory, setActiveCategory] = useState('adventure');
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const filteredDestinations = activeCategory === 'popular'
        ? destinations.filter(d => d.isPopular)
        : destinations.filter(d => d.category === activeCategory);

    return (
        <div className={styles.container}>
            {/* Destination Categories */}
            <motion.div
                className={styles.categories}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                {categories.map((cat) => {
                    const Icon = cat.icon;
                    return (
                        <button
                            key={cat.id}
                            className={`${styles.categoryChip} ${activeCategory === cat.id ? styles.active : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            <Icon size={18} />
                            <span>{cat.label}</span>
                        </button>
                    );
                })}
            </motion.div>

            {/* Destination Cards Grid */}
            <div className={styles.grid}>
                {filteredDestinations.map((dest, index) => {
                    const isHovered = hoveredCard === dest.id;

                    return (
                        <motion.div
                            key={dest.id}
                            className={styles.card}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            onMouseEnter={() => setHoveredCard(dest.id)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    fill
                                    className={styles.image}
                                    style={{
                                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                        transition: 'transform 0.6s ease'
                                    }}
                                />
                                <div className={styles.overlay} />
                            </div>

                            <div className={styles.content}>
                                <h3 className={styles.destName}>{dest.name}</h3>
                                <p className={styles.destDescription}>{dest.description}</p>

                                <div className={styles.experiencesBadge}>
                                    <MapPin size={16} />
                                    <span>{dest.experiencesCount} Experiences Available</span>
                                </div>

                                <Link href={dest.slug} className={styles.exploreBtn}>
                                    <span>Explore</span>
                                    <motion.div
                                        animate={{ x: isHovered ? 5 : 0 }}
                                        transition={{ type: 'spring', stiffness: 300 }}
                                    >
                                        <ArrowRight size={18} />
                                    </motion.div>
                                </Link>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* Expert CTA Section - Redesigned */}
            <motion.section
                className={styles.expertCTA}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
            >
                <div className={styles.ctaBg}></div>
                <div className={styles.ctaContent}>
                    <div className={styles.ctaTextBlock}>
                        <motion.h2
                            className={styles.ctaTitle}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Need Help Choosing?
                        </motion.h2>
                        <motion.p
                            className={styles.ctaDescription}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            Our destination experts are here to craft your perfect Himalayan adventure. Get personalized recommendations based on your preferences, fitness level, and travel goals.
                        </motion.p>
                        <motion.div
                            className={styles.ctaFeatures}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className={styles.ctaFeature}>
                                <div className={styles.ctaCheck}>✓</div>
                                <span>Free consultation</span>
                            </div>
                            <div className={styles.ctaFeature}>
                                <div className={styles.ctaCheck}>✓</div>
                                <span>Instant response</span>
                            </div>
                            <div className={styles.ctaFeature}>
                                <div className={styles.ctaCheck}>✓</div>
                                <span>Custom itineraries</span>
                            </div>
                        </motion.div>
                    </div>

                    <motion.div
                        className={styles.ctaActions}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <Link href="/contact" className={styles.ctaPrimaryBtn}>
                            <MessageCircle className={styles.btnIcon} />
                            <span className={styles.btnText}>
                                <span className={styles.btnLabel}>Talk to Expert</span>
                                <span className={styles.btnSubtext}>Get personalized advice</span>
                            </span>
                            <ArrowRight className={styles.btnArrow} />
                        </Link>

                        <a
                            href="https://wa.me/919548177756"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.ctaSecondaryBtn}
                        >
                            <Phone className={styles.btnIcon} />
                            <span className={styles.btnText}>
                                <span className={styles.btnLabel}>WhatsApp</span>
                                <span className={styles.btnSubtext}>Quick response</span>
                            </span>
                        </a>
                    </motion.div>
                </div>
            </motion.section>

            {/* SEO Content Block - Redesigned */}
            <motion.section
                className={styles.seoSection}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <div className={styles.seoContainer}>
                    <div className={styles.seoHeader}>
                        <h2 className={styles.seoMainTitle}>
                            Discover Himalayan Destinations
                        </h2>
                        <div className={styles.seoDivider}></div>
                    </div>

                    <div className={styles.seoGrid}>
                        <div className={styles.seoColumn}>
                            <h3 className={styles.seoColumnTitle}>Trekking Destinations</h3>
                            <p className={styles.seoColumnText}>
                                Explore breathtaking trekking destinations across Uttarakhand and Himachal Pradesh. From the sacred Char Dham Yatra circuit to challenging trails in the Garhwal and Kumaon Himalayas, discover expertly guided experiences designed for both pilgrims and adventure seekers.
                            </p>
                        </div>

                        <div className={styles.seoColumn}>
                            <h3 className={styles.seoColumnTitle}>Spiritual Journeys</h3>
                            <p className={styles.seoColumnText}>
                                Whether you seek spiritual enlightenment at ancient temples, challenging mountain expeditions, or peaceful nature retreats, our curated destinations offer transformative experiences. Traverse pristine valleys, witness snow-capped peaks, and immerse yourself in the rich cultural heritage of the Himalayas with local guides who know every trail intimately.
                            </p>
                        </div>
                    </div>

                    <div className={styles.seoKeywords}>
                        <span className={styles.seoTag}>Uttarakhand Treks</span>
                        <span className={styles.seoTag}>Himachal Pradesh</span>
                        <span className={styles.seoTag}>Char Dham Yatra</span>
                        <span className={styles.seoTag}>Garhwal Himalayas</span>
                        <span className={styles.seoTag}>Spiritual Tourism</span>
                        <span className={styles.seoTag}>Adventure Travel</span>
                    </div>
                </div>
            </motion.section>
        </div>
    );
}
