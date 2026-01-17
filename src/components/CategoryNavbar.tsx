'use client';

import Link from 'next/link';
import styles from './CategoryNavbar.module.css';

export default function CategoryNavbar() {
    const categories = [
        { label: 'Upcoming Treks', href: '/treks/upcoming' },
        { label: 'Summer Camps 2026', href: '/camps/summer' },
        { label: 'Special Treks', href: '/treks/special', hasDropdown: true },
        { label: 'Insoul', href: '/insoul', hasDropdown: true },
        { label: 'Unexplored India', href: '/unexplored' },
        { label: 'Intrek Club', href: '/club' },
        { label: 'Latest Articles', href: '/articles' },
        { label: 'Documented Treks', href: '/treks/documented', hasDropdown: true },
        { label: 'Our Story', href: '/about', hasDropdown: true },
    ];

    return (
        <nav className={styles.categoryNavbar}>
            <div className={styles.container}>
                <ul className={styles.navList}>
                    {categories.map((category, index) => (
                        <li key={index} className={styles.navItem}>
                            <Link href={category.href} className={styles.navLink}>
                                {category.label}
                                {category.hasDropdown && (
                                    <svg className={styles.dropdownIcon} fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
