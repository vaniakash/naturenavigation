'use client';

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from './page.module.css';

interface Booking {
    _id: string;
    userId: string;
    trekId: string;
    trekName: string;
    date: string;
    status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
    participants: number;
    amount: number;
    userName: string;
    userEmail: string;
    phoneNumber: string;
    specialRequests?: string;
    adminNotes?: string;
    createdAt: string;
}

export default function AdminBookingsPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [bookings, setBookings] = useState<Booking[]>([]);
    const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [expandedId, setExpandedId] = useState<string | null>(null);

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/');
        } else if (session && session.user.role !== 'admin') {
            router.push('/');
        }
    }, [status, session, router]);

    useEffect(() => {
        fetchBookings();
    }, []);

    useEffect(() => {
        applyFilters();
    }, [filter, searchTerm, bookings]);

    const fetchBookings = async () => {
        try {
            const response = await fetch('/api/admin/bookings');
            const data = await response.json();
            setBookings(data.bookings || []);
        } catch (error) {
            console.error('Error fetching bookings:', error);
        } finally {
            setLoading(false);
        }
    };

    const applyFilters = () => {
        let filtered = [...bookings];

        // Filter by status
        if (filter !== 'all') {
            filtered = filtered.filter(b => b.status === filter);
        }

        // Filter by search term
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(b =>
                b.userName.toLowerCase().includes(term) ||
                b.userEmail.toLowerCase().includes(term) ||
                b.trekName.toLowerCase().includes(term) ||
                b.phoneNumber.includes(term)
            );
        }

        setFilteredBookings(filtered);
    };

    const handleStatusUpdate = async (bookingId: string, newStatus: 'confirmed' | 'cancelled') => {
        try {
            const response = await fetch(`/api/admin/bookings/${bookingId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus }),
            });

            if (response.ok) {
                await fetchBookings(); // Refresh the list
                setExpandedId(null);
            }
        } catch (error) {
            console.error('Error updating booking:', error);
        }
    };

    const getStatusBadgeClass = (status: string) => {
        switch (status) {
            case 'pending':
                return styles.statusPending;
            case 'confirmed':
                return styles.statusConfirmed;
            case 'cancelled':
                return styles.statusCancelled;
            case 'completed':
                return styles.statusCompleted;
            default:
                return '';
        }
    };

    if (status === 'loading' || loading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.spinner}></div>
                <p>Loading bookings...</p>
            </div>
        );
    }

    if (!session || session.user.role !== 'admin') {
        return null;
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div>
                    <h1 className={styles.title}>Trek Bookings Management</h1>
                    <p className={styles.subtitle}>Manage all trek booking requests</p>
                </div>
                <div className={styles.stats}>
                    <div className={styles.statCard}>
                        <span className={styles.statNumber}>{bookings.filter(b => b.status === 'pending').length}</span>
                        <span className={styles.statLabel}>Pending</span>
                    </div>
                    <div className={styles.statCard}>
                        <span className={styles.statNumber}>{bookings.filter(b => b.status === 'confirmed').length}</span>
                        <span className={styles.statLabel}>Confirmed</span>
                    </div>
                    <div className={styles.statCard}>
                        <span className={styles.statNumber}>{bookings.length}</span>
                        <span className={styles.statLabel}>Total</span>
                    </div>
                </div>
            </div>

            <div className={styles.controls}>
                <div className={styles.searchBox}>
                    <input
                        type="text"
                        placeholder="Search by name, email, trek, or phone..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>

                <div className={styles.filterButtons}>
                    {['all', 'pending', 'confirmed', 'cancelled', 'completed'].map(status => (
                        <button
                            key={status}
                            className={`${styles.filterBtn} ${filter === status ? styles.filterActive : ''}`}
                            onClick={() => setFilter(status)}
                        >
                            {status.charAt(0).toUpperCase() + status.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {
                filteredBookings.length === 0 ? (
                    <div className={styles.emptyState}>
                        <p>No bookings found</p>
                    </div>
                ) : (
                    <div className={styles.tableContainer}>
                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Trek</th>
                                    <th>Customer</th>
                                    <th>Date</th>
                                    <th>Participants</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Created</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBookings.map(booking => (
                                    <>
                                        <tr
                                            key={booking._id}
                                            className={expandedId === booking._id ? styles.expandedRow : ''}
                                            onClick={() => setExpandedId(expandedId === booking._id ? null : booking._id)}
                                        >
                                            <td>{booking.trekName}</td>
                                            <td>
                                                <div>{booking.userName}</div>
                                                <div className={styles.secondary}>{booking.userEmail}</div>
                                            </td>
                                            <td>{new Date(booking.date).toLocaleDateString()}</td>
                                            <td>{booking.participants}</td>
                                            <td className={styles.amount}>₹{booking.amount.toLocaleString()}</td>
                                            <td>
                                                <span className={`${styles.statusBadge} ${getStatusBadgeClass(booking.status)}`}>
                                                    {booking.status}
                                                </span>
                                            </td>
                                            <td>{new Date(booking.createdAt).toLocaleDateString()}</td>
                                            <td onClick={(e) => e.stopPropagation()}>
                                                {booking.status === 'pending' && (
                                                    <div className={styles.actionButtons}>
                                                        <button
                                                            className={`${styles.actionBtn} ${styles.acceptBtn}`}
                                                            onClick={() => handleStatusUpdate(booking._id, 'confirmed')}
                                                        >
                                                            Accept
                                                        </button>
                                                        <button
                                                            className={`${styles.actionBtn} ${styles.rejectBtn}`}
                                                            onClick={() => handleStatusUpdate(booking._id, 'cancelled')}
                                                        >
                                                            Reject
                                                        </button>
                                                    </div>
                                                )}
                                            </td>
                                        </tr>
                                        {expandedId === booking._id && (
                                            <tr className={styles.detailsRow}>
                                                <td colSpan={8}>
                                                    <div className={styles.details}>
                                                        <div className={styles.detailSection}>
                                                            <h4>Contact Information</h4>
                                                            <p><strong>Phone:</strong> {booking.phoneNumber}</p>
                                                            <p><strong>Email:</strong> {booking.userEmail}</p>
                                                        </div>
                                                        {booking.specialRequests && (
                                                            <div className={styles.detailSection}>
                                                                <h4>Special Requests</h4>
                                                                <p>{booking.specialRequests}</p>
                                                            </div>
                                                        )}
                                                        {booking.adminNotes && (
                                                            <div className={styles.detailSection}>
                                                                <h4>Admin Notes</h4>
                                                                <p>{booking.adminNotes}</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        )}
                                    </>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )
            }
        </div >
    );
}
