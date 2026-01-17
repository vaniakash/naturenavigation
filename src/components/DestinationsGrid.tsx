import Image from 'next/image';
import Link from 'next/link';
import styles from './DestinationsGrid.module.css';

const destinations = [
    {
        name: 'Kedarnath',
        subtitle: 'Faith meets the Himalayas',
        tags: ['Spiritual Trek ■ High Altitude', 'Summer & Autumn'],
        image: '/kedar.webp',
        slug: '/destinations/kedarnath'
    },
    {
        name: 'Har Ki Dun',
        subtitle: 'Valley of Gods',
        tags: ['Scenic Valley ■ Moderate Trek', 'All Seasons'],
        image: '/harkidun.webp',
        slug: '/destinations/har-ki-dun'
    },
    {
        name: 'Kedarkantha',
        subtitle: 'Best Winter Trek',
        tags: ['Winter Special ■ Beginner Friendly', 'Dec - Apr'],
        image: '/back.webp',
        slug: '/destinations/kedarkantha'
    },
    {
        name: 'Valley of Flowers',
        subtitle: 'Nature in Full Bloom',
        tags: ['UNESCO Site ■ Easy-Moderate', 'Jul - Sep'],
        image: '/valley.webp',
        slug: '/destinations/valley-of-flowers'
    },
    {
        name: 'Chopta - Tungnath',
        subtitle: 'Mini Switzerland of India',
        tags: ['Short Trek ■ Panoramic Views', 'All Seasons'],
        image: '/back.webp',
        slug: '/destinations/chopta'
    },
    {
        name: 'Dayara Bugyal',
        subtitle: 'High Altitude Meadows',
        tags: ['Winter Skiing ■ Easy Trek', 'All Seasons'],
        image: '/back.webp',
        slug: '/destinations/dayara-bugyal'
    },
    {
        name: 'Nag Tibba',
        subtitle: 'Serpent\'s Peak',
        tags: ['Weekend Trek ■ Best Views', 'All Seasons'],
        image: '/back.webp',
        slug: '/destinations/nag-tibba'
    }
];

export default function DestinationsGrid() {
    return (
        <div className={styles.container}>

            <div className={styles.grid}>
                {destinations.map((dest) => (
                    <div key={dest.name} className={styles.card}>
                        <Image
                            src={dest.image}
                            alt={dest.name}
                            fill
                            className={styles.image}
                        />
                        <div className={styles.overlay}></div>

                        <div className={styles.content}>
                            <h3 className={styles.cardTitle}>{dest.name}</h3>
                            <p className={styles.subtitle}>{dest.subtitle}</p>

                            <div className={styles.tags}>
                                {dest.tags.map((tag, index) => (
                                    <div key={index} className={styles.tag}>
                                        <span className={styles.dot}></span>
                                        {tag}
                                    </div>
                                ))}
                            </div>

                            <Link href={dest.slug} className={styles.viewBtn}>
                                View Treks
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* New Expert CTA Design */}
            <div className={styles.expertSection}>
                <h3 className={styles.expertTitle}>Not Sure Where to Start?</h3>
                <p className={styles.expertText}>Let us help you choose the perfect trek for your adventure.</p>
                <Link href="/contact" className={styles.expertBtn}>
                    Contact Our Experts
                </Link>
            </div>
        </div>
    );
}
