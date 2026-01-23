'use client';

import { useState, FormEvent } from 'react';
import { useSession } from 'next-auth/react';
import styles from './BookingModal.module.css';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    trekId: string;
    trekName: string;
    trekPrice: number;
}

export default function BookingModal({ isOpen, onClose, trekId, trekName, trekPrice }: BookingModalProps) {
    const { data: session } = useSession();
    const [formData, setFormData] = useState({
        userName: session?.user?.name || '',
        userEmail: session?.user?.email || '',
        phoneNumber: '',
        date: '',
        participants: 1,
        specialRequests: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Validation
            if (!formData.userName || !formData.userEmail || !formData.phoneNumber || !formData.date) {
                setError('Please fill in all required fields');
                setLoading(false);
                return;
            }

            const totalAmount = trekPrice * formData.participants;

            const response = await fetch('/api/bookings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    trekId,
                    trekName,
                    date: formData.date,
                    participants: formData.participants,
                    amount: totalAmount,
                    userName: formData.userName,
                    userEmail: formData.userEmail,
                    phoneNumber: formData.phoneNumber,
                    specialRequests: formData.specialRequests
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to submit booking');
            }

            setSuccess(true);
            setTimeout(() => {
                onClose();
                setSuccess(false);
                setFormData({
                    userName: session?.user?.name || '',
                    userEmail: session?.user?.email || '',
                    phoneNumber: '',
                    date: '',
                    participants: 1,
                    specialRequests: ''
                });
            }, 3000);
        } catch (err: any) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close">
                    ×
                </button>

                <div className={styles.header}>
                    <h2 className={styles.title}>Book Your Trek</h2>
                    <p className={styles.trekName}>{trekName}</p>
                </div>

                {success ? (
                    <div className={styles.successMessage}>
                        <div className={styles.successIcon}>✓</div>
                        <h3>Booking Request Sent!</h3>
                        <p>Thank you for your booking request. We've sent a confirmation email to {formData.userEmail}.</p>
                        <p>Our team will review and confirm your booking within 24 hours.</p>
                    </div>
                ) : (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="userName" className={styles.label}>
                                Full Name <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="text"
                                id="userName"
                                name="userName"
                                value={formData.userName}
                                onChange={handleChange}
                                className={styles.input}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="userEmail" className={styles.label}>
                                Email <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="email"
                                id="userEmail"
                                name="userEmail"
                                value={formData.userEmail}
                                onChange={handleChange}
                                className={styles.input}
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phoneNumber" className={styles.label}>
                                Phone Number <span className={styles.required}>*</span>
                            </label>
                            <input
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="+91 XXXXX XXXXX"
                                required
                            />
                        </div>

                        <div className={styles.formRow}>
                            <div className={styles.formGroup}>
                                <label htmlFor="date" className={styles.label}>
                                    Trek Date <span className={styles.required}>*</span>
                                </label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className={styles.input}
                                    min={new Date().toISOString().split('T')[0]}
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="participants" className={styles.label}>
                                    Participants <span className={styles.required}>*</span>
                                </label>
                                <select
                                    id="participants"
                                    name="participants"
                                    value={formData.participants}
                                    onChange={handleChange}
                                    className={styles.input}
                                    required
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                        <option key={num} value={num}>{num}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="specialRequests" className={styles.label}>
                                Special Requests (Optional)
                            </label>
                            <textarea
                                id="specialRequests"
                                name="specialRequests"
                                value={formData.specialRequests}
                                onChange={handleChange}
                                className={styles.textarea}
                                rows={4}
                                placeholder="Any dietary requirements, medical conditions, or special requests..."
                            />
                        </div>

                        <div className={styles.priceInfo}>
                            <div className={styles.priceRow}>
                                <span>Price per person:</span>
                                <span>₹{trekPrice.toLocaleString()}</span>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Participants:</span>
                                <span>× {formData.participants}</span>
                            </div>
                            <div className={`${styles.priceRow} ${styles.totalPrice}`}>
                                <span>Total Amount:</span>
                                <span>₹{(trekPrice * formData.participants).toLocaleString()}</span>
                            </div>
                        </div>

                        {error && (
                            <div className={styles.errorMessage}>
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className={styles.submitBtn}
                            disabled={loading}
                        >
                            {loading ? 'Submitting...' : 'Submit Booking Request'}
                        </button>

                        <p className={styles.note}>
                            * Your booking will be confirmed within 24 hours. You'll receive an email with payment instructions.
                        </p>
                    </form>
                )}
            </div>
        </div >
    );
}
