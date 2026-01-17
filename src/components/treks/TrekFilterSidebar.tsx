'use client';

import { useState } from 'react';
import styles from './TrekFilterSidebar.module.css';

interface FilterOption {
    label: string;
    value: string;
    count?: number;
}

interface FilterSection {
    id: string;
    title: string;
    options: FilterOption[];
}

interface TrekFilterSidebarProps {
    selectedFilters: Record<string, string[]>;
    onFilterChange: (category: string, value: string) => void;
    onClearFilters: () => void;
    searchQuery: string;
    onSearch: (query: string) => void;
}

export default function TrekFilterSidebar({
    selectedFilters,
    onFilterChange,
    onClearFilters,
    searchQuery,
    onSearch
}: TrekFilterSidebarProps) {
    const filters: FilterSection[] = [
        {
            id: 'region',
            title: 'Region',
            options: [
                { label: 'Uttarakhand', value: 'Uttarakhand' },
                { label: 'Himachal Pradesh', value: 'Himachal Pradesh' },
                { label: 'Ladakh', value: 'Ladakh' }
            ]
        },
        {
            id: 'difficulty',
            title: 'Difficulty',
            options: [
                { label: 'Easy', value: 'Easy' },
                { label: 'Moderate', value: 'Moderate' },
                { label: 'Difficult', value: 'Difficult' }
            ]
        },
        {
            id: 'season',
            title: 'Best Season',
            options: [
                { label: 'Summer', value: 'Summer' },
                { label: 'Winter', value: 'Winter' },
                { label: 'Monsoon', value: 'Monsoon' },
                { label: 'Autumn', value: 'Autumn' }
            ]
        }
    ];

    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const isSelected = (category: string, value: string) => {
        return !!selectedFilters[category]?.includes(value);
    };

    return (
        <div className={styles.sidebar}>
            {/* Mobile Toggle Button */}
            <button
                className={styles.toggleButton}
                onClick={() => setIsMobileOpen(!isMobileOpen)}
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M1 14h6m2-6h6m2 8h6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {isMobileOpen ? 'Hide Filters' : 'Show Filters'}
            </button>

            <div className={`${styles.contentWrapper} ${isMobileOpen ? styles.open : ''}`}>
                <div className={styles.filterHeader}>
                    <h3 className={styles.filterTitle}>Filters</h3>
                    <button onClick={onClearFilters} className={styles.clearButton}>
                        Clear All
                    </button>
                </div>

                {/* Search Input in Sidebar */}
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Search treks..."
                        className={styles.searchInput}
                        value={searchQuery || ''}
                        onChange={(e) => onSearch(e.target.value)}
                    />
                </div>

                {filters.map((section) => (
                    <div key={section.id} className={styles.section}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTitle}>{section.title}</span>
                        </div>
                        <div className={styles.options}>
                            {section.options.map((option) => (
                                <label key={option.value} className={styles.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        className={styles.checkbox}
                                        checked={isSelected(section.id, option.value)}
                                        onChange={() => onFilterChange(section.id, option.value)}
                                    />
                                    {option.label}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
