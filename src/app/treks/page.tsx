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

    // Pagination State
    const [visibleCount, setVisibleCount] = useState(4);
    const TREKS_PER_PAGE = 4;

    const handleFilterChange = (category: string, value: string) => {
        setSelectedFilters(prev => {
            const current = prev[category] || [];
            const updated = current.includes(value)
                ? current.filter(item => item !== value)
                : [...current, value];
            return { ...prev, [category]: updated };
        });
        // Reset pagination when filters change
        setVisibleCount(TREKS_PER_PAGE);
    };

    const handleClearFilters = () => {
        setSelectedFilters({
            region: [],
            difficulty: [],
            season: []
        });
        setSearchQuery('');
        // Reset pagination when filters are cleared
        setVisibleCount(TREKS_PER_PAGE);
    };

    // Reset pagination when search query changes
    useMemo(() => {
        setVisibleCount(TREKS_PER_PAGE);
    }, [searchQuery]);

    const filteredTreks = useMemo(() => {
        return treksData.filter(trek => {
            // Search filter
            if (searchQuery && !trek.name.toLowerCase().includes(searchQuery.toLowerCase())) {
                return false;
            }

            // Region matching - check if trek region contains filter value or vice versa
            const regionMatch = selectedFilters.region.length === 0 ||
                selectedFilters.region.some(r =>
                    trek.region.toLowerCase().includes(r.toLowerCase()) ||
                    r.toLowerCase().includes(trek.region.toLowerCase())
                );

            // Difficulty matching (approximate string match)
            const difficultyMatch = selectedFilters.difficulty.length === 0 ||
                selectedFilters.difficulty.some(d => trek.difficulty.includes(d));

            // Season matching -> Check if any selected season is in trek's seasons array
            const seasonMatch = selectedFilters.season.length === 0 ||
                selectedFilters.season.some(s => (trek.seasons || []).includes(s));

            return regionMatch && difficultyMatch && seasonMatch;
        });
    }, [searchQuery, selectedFilters]);

    // Validated visible treks
    const visibleTreks = filteredTreks.slice(0, visibleCount);
    const hasMore = visibleCount < filteredTreks.length;

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + TREKS_PER_PAGE);
    };

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
                            <>
                                <motion.div
                                    className={styles.grid}
                                    layout
                                >
                                    {visibleTreks.map((trek, index) => (
                                        <TrekCard key={trek.id} trek={trek} index={index} />
                                    ))}
                                </motion.div>

                                {hasMore && (
                                    <div className={styles.loadMoreContainer}>
                                        <button
                                            onClick={handleLoadMore}
                                            className={styles.loadMoreButton}
                                        >
                                            View More Treks
                                        </button>
                                    </div>
                                )}
                            </>
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
