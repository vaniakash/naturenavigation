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

            {/* Why Choose Section */}
            <motion.div
                className={styles.trustSection}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <h2 className={styles.trustTitle}>Why Choose These Destinations</h2>
                <div className={styles.trustGrid}>
                    {trustPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            className={styles.trustCard}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + index * 0.1 }}
                        >
                            <div className={styles.trustIcon}>{point.icon}</div>
                            <h4 className={styles.trustCardTitle}>{point.title}</h4>
                            <p className={styles.trustCardDesc}>{point.description}</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Help / CTA Section */}
            <motion.div
                className={styles.helpSection}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                <h3 className={styles.helpTitle}>Not sure which destination is right for you?</h3>
                <p className={styles.helpText}>Our travel experts are here to help you plan your perfect journey</p>
                <div className={styles.helpButtons}>
                    <Link href="/contact" className={styles.primaryBtn}>
                        <MessageCircle size={20} />
                        <span>Talk to an Expert</span>
                    </Link>
                    <a href="https://wa.me/919119776613" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
                        <Phone size={20} />
                        <span>WhatsApp Us</span>
                    </a>
                </div>
            </motion.div>

            {/* SEO Content Block */}
            <div className={styles.seoContent}>
                <h2 className={styles.seoTitle}>Explore Trekking & Spiritual Destinations in the Himalayas</h2>
                <p className={styles.seoText}>
                    Discover the majestic beauty of trekking destinations in Uttarakhand and Himachal Pradesh. From the sacred Char Dham Yatra circuit to adventurous trails in Garhwal and Kumaon Himalayas, we offer expertly guided experiences for pilgrims and adventure seekers alike. Our destinations span spiritual circuits, nature trails, and cultural expeditions across the Indian Himalayas.
                </p>
                <p className={styles.seoText}>
                    Whether you're seeking spiritual enlightenment at ancient temples, challenging mountain treks, or peaceful nature retreats, our carefully curated destinations offer something for every traveler. Experience the pristine valleys, snow-capped peaks, and rich cultural heritage of the Himalayan region with local guides who know every trail intimately.
                </p>
            </div>
        </div>
    );
}
