'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X, MapPin, Mountain, Calendar, Trash2 } from 'lucide-react';
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
    icon: React.ReactNode;
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
            icon: <MapPin className={styles.sectionIcon} />,
            options: [
                { label: 'Uttarakhand', value: 'Uttarakhand' },
                { label: 'Himachal Pradesh', value: 'Himachal Pradesh' },
                { label: 'Ladakh', value: 'Ladakh' }
            ]
        },
        {
            id: 'difficulty',
            title: 'Difficulty',
            icon: <Mountain className={styles.sectionIcon} />,
            options: [
                { label: 'Easy', value: 'Easy' },
                { label: 'Moderate', value: 'Moderate' },
                { label: 'Difficult', value: 'Difficult' }
            ]
        },
        {
            id: 'season',
            title: 'Best Season',
            icon: <Calendar className={styles.sectionIcon} />,
            options: [
                { label: 'Summer', value: 'Summer' },
                { label: 'Winter', value: 'Winter' },
                { label: 'Monsoon', value: 'Monsoon' },
                { label: 'Autumn', value: 'Autumn' },
                { label: 'Spring', value: 'Spring' }
            ]
        }
    ];

    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const isSelected = (category: string, value: string) => {
        return !!selectedFilters[category]?.includes(value);
    };

    const getTotalActiveFilters = () => {
        return Object.values(selectedFilters).reduce((sum, arr) => sum + arr.length, 0);
    };

    const activeCount = getTotalActiveFilters();

    return (
        <>
            {/* Mobile Toggle Button */}
            <motion.button
                className={styles.mobileToggle}
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <SlidersHorizontal className={styles.toggleIcon} />
                <span>Filters</span>
                {activeCount > 0 && (
                    <span className={styles.filterBadge}>{activeCount}</span>
                )}
            </motion.button>

            {/* Mobile Backdrop */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        className={styles.backdrop}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsMobileOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Sidebar/Drawer */}
            <motion.div
                className={`${styles.sidebar} ${isMobileOpen ? styles.open : ''}`}
                initial={false}
            >
                <div className={styles.sidebarHeader}>
                    <div className={styles.headerTop}>
                        <h3 className={styles.title}>
                            <SlidersHorizontal className={styles.titleIcon} />
                            Filters
                        </h3>
                        <button
                            type="button"
                            className={styles.closeButton}
                            onClick={() => setIsMobileOpen(false)}
                            aria-label="Close filters"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {activeCount > 0 && (
                        <motion.button
                            className={styles.clearAllButton}
                            onClick={onClearFilters}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Trash2 className={styles.clearIcon} />
                            Clear All ({activeCount})
                        </motion.button>
                    )}
                </div>

                {/* Search Input */}
                <div className={styles.searchContainer}>
                    <Search className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search treks..."
                        className={styles.searchInput}
                        value={searchQuery || ''}
                        onChange={(e) => onSearch(e.target.value)}
                    />
                    {searchQuery && (
                        <button
                            className={styles.clearSearch}
                            onClick={() => onSearch('')}
                            aria-label="Clear search"
                        >
                            <X size={16} />
                        </button>
                    )}
                </div>

                {/* Filter Sections */}
                <div className={styles.filtersContent}>
                    {filters.map((section, sectionIndex) => (
                        <motion.div
                            key={section.id}
                            className={styles.section}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: sectionIndex * 0.1 }}
                        >
                            <div className={styles.sectionHeader}>
                                {section.icon}
                                <span className={styles.sectionTitle}>{section.title}</span>
                            </div>
                            <div className={styles.options}>
                                {section.options.map((option) => {
                                    const checked = isSelected(section.id, option.value);
                                    return (
                                        <motion.label
                                            key={option.value}
                                            className={`${styles.checkboxLabel} ${checked ? styles.checked : ''}`}
                                            whileHover={{ x: 2 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <input
                                                type="checkbox"
                                                className={styles.checkbox}
                                                checked={checked}
                                                onChange={() => onFilterChange(section.id, option.value)}
                                            />
                                            <span className={styles.checkmark}>
                                                {checked && (
                                                    <motion.svg
                                                        width="12"
                                                        height="12"
                                                        viewBox="0 0 12 12"
                                                        initial={{ scale: 0 }}
                                                        animate={{ scale: 1 }}
                                                        transition={{ type: 'spring', stiffness: 500 }}
                                                    >
                                                        <path
                                                            d="M10 3L4.5 8.5L2 6"
                                                            stroke="currentColor"
                                                            strokeWidth="2"
                                                            fill="none"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </motion.svg>
                                                )}
                                            </span>
                                            <span className={styles.labelText}>{option.label}</span>
                                        </motion.label>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </>
    );
}
