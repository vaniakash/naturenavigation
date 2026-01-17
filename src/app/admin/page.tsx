'use client';

import { useEffect, useState } from 'react';
import { signOut } from 'next-auth/react';
import styles from './adminDashboard.module.css';

interface Booking {
    _id: string;
    userName: string;
    userEmail: string;
    trekName: string;
    date: string;
    status: string;
    participants: number;
    amount: number;
    phoneNumber?: string;
    createdAt: string;
}

interface User {
    _id: string;
    name: string;
    email: string;
    role: string;
    createdAt: string;
}

export default function AdminDashboard() {
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState<'overview' | 'bookings' | 'users'>('overview');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const [bookingsRes, usersRes] = await Promise.all([
                fetch('/api/admin/bookings'),
                fetch('/api/admin/users'),
            ]);

            const bookingsData = await bookingsRes.json();
            const usersData = await usersRes.json();

            setBookings(bookingsData.bookings || []);
            setUsers(usersData.users || []);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false);
        }
    };
    const stats = {
        totalBookings: bookings.length,
        totalUsers: users.length,
        totalRevenue: bookings.reduce((sum, b) => sum + b.amount, 0),
        pendingBookings: bookings.filter((b) => b.status === 'pending').length,
    };

    return (
        <div className={styles.container}>
            {/* Mobile Header */}
            <div className={styles.mobileHeader}>
                <div className={styles.logo}>
                    <svg className={styles.logoIcon} viewBox="0 0 24 24">
                        <path d="M12 2L2 22h20L12 2zm0 4l6 14H6l6-14z" fill="currentColor" />
                    </svg>
                    TREKADMIN
                </div>
                <button
                    className={styles.menuBtn}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Sidebar Navigation */}
            <aside className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}>
                <div className={styles.logo}>
                    <svg className={styles.logoIcon} viewBox="0 0 24 24">
                        <path d="M12 2L2 22h20L12 2zm0 4l6 14H6l6-14z" fill="currentColor" />
                    </svg>
                    TREKADMIN
                </div>

                <nav className={styles.nav}>
                    <button
                        onClick={() => { setActiveTab('overview'); setIsSidebarOpen(false); }}
                        className={`${styles.navItem} ${activeTab === 'overview' ? styles.navItemActive : ''}`}
                    >
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        Overview
                    </button>
                    <button
                        onClick={() => { setActiveTab('bookings'); setIsSidebarOpen(false); }}
                        className={`${styles.navItem} ${activeTab === 'bookings' ? styles.navItemActive : ''}`}
                    >
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Bookings
                    </button>
                    <button
                        onClick={() => { setActiveTab('users'); setIsSidebarOpen(false); }}
                        className={`${styles.navItem} ${activeTab === 'users' ? styles.navItemActive : ''}`}
                    >
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        Users
                    </button>

                    <button
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className={`${styles.navItem} ${styles.logoutBtn}`}
                    >
                        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Logout
                    </button>
                </nav>
            </aside>

            {/* Main Content Area */}
            <main className={styles.mainContent}>
                <header className={styles.header}>
                    <h1 className={styles.pageTitle}>
                        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
                    </h1>
                    <span className={styles.dateDisplay}>
                        {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                </header>

                {loading ? (
                    <div className={styles.loadingWrapper}>
                        <div className={styles.spinner}></div>
                    </div>
                ) : (
                    <>
                        {/* Stats Row - Always visible on Overview */}
                        {activeTab === 'overview' && (
                            <div className={styles.statsGrid}>
                                <div className={styles.statCard}>
                                    <div className={styles.statHeader}>
                                        <div className={styles.statIconWrapper}>
                                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <span className={styles.statLabel}>Total Revenue</span>
                                    </div>
                                    <div className={styles.statValue}>${stats.totalRevenue.toLocaleString()}</div>
                                </div>
                                <div className={styles.statCard}>
                                    <div className={styles.statHeader}>
                                        <div className={styles.statIconWrapper}>
                                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <span className={styles.statLabel}>Total Bookings</span>
                                    </div>
                                    <div className={styles.statValue}>{stats.totalBookings}</div>
                                </div>
                                <div className={styles.statCard}>
                                    <div className={styles.statHeader}>
                                        <div className={styles.statIconWrapper}>
                                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                            </svg>
                                        </div>
                                        <span className={styles.statLabel}>Active Users</span>
                                    </div>
                                    <div className={styles.statValue}>{stats.totalUsers}</div>
                                </div>
                                <div className={styles.statCard}>
                                    <div className={styles.statHeader}>
                                        <div className={styles.statIconWrapper}>
                                            <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <span className={styles.statLabel}>Pending Requests</span>
                                    </div>
                                    <div className={styles.statValue}>{stats.pendingBookings}</div>
                                </div>
                            </div>
                        )}

                        {/* Recent Bookings in Overview */}
                        {(activeTab === 'overview' || activeTab === 'bookings') && (
                            <div className={styles.sectionCard}>
                                <div className={styles.cardHeader}>
                                    <h2 className={styles.cardTitle}>
                                        {activeTab === 'overview' ? 'Recent Bookings' : 'All Bookings'}
                                    </h2>
                                    {activeTab === 'overview' && (
                                        <button
                                            onClick={() => setActiveTab('bookings')}
                                            className={styles.viewAllBtn}
                                        >
                                            View All
                                        </button>
                                    )}
                                </div>
                                <div className={styles.tableWrapper}>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th className={styles.th}>Trek Name</th>
                                                <th className={styles.th}>Date</th>
                                                <th className={styles.th}>Customer</th>
                                                <th className={styles.th}>Status</th>
                                                <th className={styles.th}>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bookings.length > 0 ? (
                                                (activeTab === 'overview' ? bookings.slice(0, 5) : bookings).map((booking) => (
                                                    <tr key={booking._id} className={styles.tr}>
                                                        <td className={styles.td}>{booking.trekName}</td>
                                                        <td className={styles.td}>{new Date(booking.date).toLocaleDateString()}</td>
                                                        <td className={styles.td}>
                                                            <div className={styles.userCell}>
                                                                <span className={styles.userName}>{booking.userName}</span>
                                                            </div>
                                                        </td>
                                                        <td className={styles.td}>
                                                            <span className={`${styles.statusBadge} ${booking.status === 'confirmed' ? styles.statusConfirmed :
                                                                booking.status === 'pending' ? styles.statusPending :
                                                                    booking.status === 'paid' ? styles.statusPaid :
                                                                        styles.statusCompleted
                                                                }`}>
                                                                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                                                            </span>
                                                        </td>
                                                        <td className={styles.td}>${booking.amount.toLocaleString()}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan={5} className={styles.emptyState}>No recent bookings found.</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}

                        {/* Users Table */}
                        {activeTab === 'users' && (
                            <div className={styles.sectionCard}>
                                <div className={styles.cardHeader}>
                                    <h2 className={styles.cardTitle}>registered Users</h2>
                                </div>
                                <div className={styles.tableWrapper}>
                                    <table className={styles.table}>
                                        <thead>
                                            <tr>
                                                <th className={styles.th}>Name</th>
                                                <th className={styles.th}>Email</th>
                                                <th className={styles.th}>Role</th>
                                                <th className={styles.th}>Joined Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {users.map((user) => (
                                                <tr key={user._id} className={styles.tr}>
                                                    <td className={styles.td} style={{ fontWeight: 500, color: '#f1f5f9' }}>{user.name}</td>
                                                    <td className={styles.td}>{user.email}</td>
                                                    <td className={styles.td}>
                                                        <span className={`${styles.roleBadge} ${user.role === 'admin' ? styles.roleAdmin : styles.roleUser}`}>
                                                            {user.role}
                                                        </span>
                                                    </td>
                                                    <td className={styles.td}>{new Date(user.createdAt).toLocaleDateString()}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </main>
        </div>
    );
}
