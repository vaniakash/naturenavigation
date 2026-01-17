'use client';

import { useState, useMemo } from 'react';
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
            <TrekPageHeader />

            <div className={styles.contentWrapper}>
                <div className={styles.layout}>
                    {/* Sidebar */}
                    <div className={styles.sidebarWrapper}>
                        <TrekFilterSidebar
                            selectedFilters={selectedFilters}
                            onFilterChange={handleFilterChange}
                            onClearFilters={handleClearFilters}
                            searchQuery={searchQuery}
                            onSearch={setSearchQuery}
                        />
                    </div>

                    {/* Main Content */}
                    <div className={styles.resultSection}>
                        <div className={styles.resultsHeader}>
                            <h2 className={styles.resultsCount}>
                                Showing {filteredTreks.length} Treks
                            </h2>
                            {/* Sort dropdown could go here */}
                        </div>

                        {filteredTreks.length > 0 ? (
                            <div className={styles.grid}>
                                {filteredTreks.map(trek => (
                                    <TrekCard key={trek.id} trek={trek} />
                                ))}
                            </div>
                        ) : (
                            <div className={styles.noResults}>
                                No treks found matching your filters.
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <PrivateTrekSection />
        </div>
    );
}
