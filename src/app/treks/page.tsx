'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import TrekPageHeader from '@/components/treks/TrekPageHeader';
import TrekFilterSidebar from '@/components/treks/TrekFilterSidebar';
import TrekCard from '@/components/treks/TrekCard';
import { treksData } from '@/data/treks';
import styles from './page.module.css';
import PrivateTrekSection from '@/components/treks/PrivateTrekSection';

export default function TreksPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
        region: [],
        difficulty: [],
        season: []
    });

    const handleFilterChange = (category: string, value: string) => {
        setSelectedFilters(prev => {
            const current = prev[category] || [];
            const updated = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value];
            return { ...prev, [category]: updated };
        });
    };

    const handleClearFilters = () => {
        setSelectedFilters({
            region: [],
            difficulty: [],
            season: []
        });
        setSearchQuery('');
    };

    const filteredTreks = useMemo(() => {
        return treksData.filter(trek => {
            // Search filter
            if (searchQuery && !trek.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                return false;
            }

            // Category filters
            const regionMatch = selectedFilters.region.length === 0 || selectedFilters.region.includes(trek.region);

            // Difficulty matching (approximate string match)
            const difficultyMatch = selectedFilters.difficulty.length === 0 ||
                selectedFilters.difficulty.some(d => trek.difficulty.includes(d));

            // Season matching -> Check if any selected season is in trek's seasons array
            const seasonMatch = selectedFilters.season.length === 0 ||
                selectedFilters.season.some(s => (trek.seasons || []).includes(s));

            return regionMatch && difficultyMatch && seasonMatch;
        });
    }, [searchQuery, selectedFilters]);

    return (
        <div className={styles.pageContainer}>
            <TrekPageHeader totalTreks={treksData.length} />

            <div className={styles.contentWrapper}>
                <div className={styles.layout}>
                    {/* Sidebar */}
                    <aside className={styles.sidebarWrapper}>
                        <TrekFilterSidebar
                            selectedFilters={selectedFilters}
                            onFilterChange={handleFilterChange}
                            onClearFilters={handleClearFilters}
                            searchQuery={searchQuery}
                            onSearch={setSearchQuery}
                        />
                    </aside>

                    {/* Main Content */}
                    <main className={styles.resultSection}>
                        <motion.div
                            className={styles.resultsHeader}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className={styles.resultsCount}>
                                {filteredTreks.length === treksData.length
                                    ? `All Treks (${filteredTreks.length})`
                                    : `Showing ${filteredTreks.length} of ${treksData.length} Treks`
                                }
                            </h2>
                        </motion.div>

                        {filteredTreks.length > 0 ? (
                            <motion.div
                                className={styles.grid}
                                layout
                            >
                                {filteredTreks.map((trek, index) => (
                                    <TrekCard key={trek.id} trek={trek} index={index} />
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                className={styles.noResults}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className={styles.noResultsIcon}>🔍</div>
                                <h3 className={styles.noResultsTitle}>No treks found</h3>
                                <p className={styles.noResultsText}>
                                    Try adjusting your filters or search query
                                </p>
                                <button
                                    className={styles.clearFiltersButton}
                                    onClick={handleClearFilters}
                                >
                                    Clear All Filters
                                </button>
                            </motion.div>
                        )}
                    </main>
                </div>
            </div>

            <PrivateTrekSection />
        </div>
    );
}
