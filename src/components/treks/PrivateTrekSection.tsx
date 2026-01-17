'use client';

import { useState } from 'react';
import styles from './PrivateTrekSection.module.css';

export default function PrivateTrekSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        trekName: '',
        dates: '',
        groupSize: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const res = await fetch('/api/private-trek', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    trekName: '',
                    dates: '',
                    groupSize: '',
                    message: ''
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Custom & Private Treks</h2>
                    <p className={styles.subtitle}>
                        Want a personalized experience? We organize private treks for friends, families, and corporate groups.
                        Tell us your requirements, and we'll craft the perfect itinerary for you.
                    </p>
                </div>

                <div className={styles.formCard}>
                    <form onSubmit={handleSubmit} className={styles.formGrid}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name" className={styles.label}>Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className={styles.input}

                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="trekName" className={styles.label}>Interested Trek / Region</label>
                            <input
                                type="text"
                                id="trekName"
                                name="trekName"
                                value={formData.trekName}
                                onChange={handleChange}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="groupSize" className={styles.label}>Group Size</label>
                            <input
                                type="number"
                                id="groupSize"
                                name="groupSize"
                                value={formData.groupSize}
                                onChange={handleChange}
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="dates" className={styles.label}>Preferred Dates</label>
                            <input
                                type="text"
                                id="dates"
                                name="dates"
                                value={formData.dates}
                                onChange={handleChange}
                                className={styles.input}
                            />
                        </div>

                        <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                            <label htmlFor="message" className={styles.label}>Message / Special Requirements</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.textarea}
                            ></textarea>
                        </div>

                        <div className={`${styles.fullWidth}`}>
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className={styles.submitBtn}
                            >
                                {status === 'loading' ? 'Sending Request...' : 'Send Custom Request'}
                            </button>
                        </div>
                    </form>

                    {status === 'success' && (
                        <div className={styles.successMessage}>
                            ✅ Request received! We will check the feasibility and get back to you shortly.
                        </div>
                    )}

                    {status === 'error' && (
                        <div className={styles.errorMessage}>
                            ❌ Something went wrong. Please try again or contact us directly.
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
