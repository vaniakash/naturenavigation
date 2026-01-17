'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import styles from './userDashboard.module.css';
import Link from 'next/link';

interface Booking {
    _id: string;
    trekName: string;
    date: string;
    status: string;
    participants: number;
    amount: number;
    createdAt: string;
}

export default function UserDashboard() {
    const { data: session } = useSession();
    const [booking, setBooking] = useState<Booking | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchBooking();
    }, []);

    const fetchBooking = async () => {
        try {
            const response = await fetch('/api/bookings/user');
            const data = await response.json();
            // Assuming we just want to show the latest booking for this specific UI design
            if (data.bookings && data.bookings.length > 0) {
                setBooking(data.bookings[0]);
            }
        } catch (error) {
            console.error('Error fetching bookings:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.contentWrapper}>
                <h1 className={styles.welcomeTitle}>
                    Welcome, <span className={styles.userName}>{session?.user?.name?.split(' ')[0]}</span>
                </h1>

                {loading ? (
                    <div className={styles.loadingWrapper}>
                        <div className={styles.spinner}></div>
                    </div>
                ) : (
                    <div className={styles.dashboardGrid}>
                        {/* Booked Trek Card */}
                        <div className={styles.card}>
                            <h2 className={styles.cardHeader}>Booked Trek</h2>

                            {booking ? (
                                <div className={styles.trekInfo}>
                                    <div className={styles.trekIcon}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
                                        </svg>
                                    </div>
                                    <div className={styles.trekDetails}>
                                        <div className={styles.trekName}>{booking.trekName}</div>
                                        <div className={styles.trekDate}>
                                            {new Date(booking.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(new Date(booking.date).setDate(new Date(booking.date).getDate() + 5)).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className={styles.emptyState}>
                                    <p className={styles.emptyText}>No trek booked yet</p>
                                    <Link href="/treks" className={styles.bookButton}>
                                        Book Trek
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Payment Status Card (Only visible if booked) */}
                        {booking && (
                            <div className={styles.card}>
                                <h2 className={styles.cardHeader}>Payment Status</h2>
                                <div className={styles.paymentInfo}>
                                    <div className={styles.checkIcon}>
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 6 9 17l-5-5"></path>
                                        </svg>
                                    </div>
                                    <div className={styles.paymentStatus}>
                                        <span className={styles.statusText}>Paid</span>
                                        <span className={styles.amount}>Amount: ₹{booking.amount.toLocaleString()}</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
