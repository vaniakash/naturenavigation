'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        difficulty: '',
        participants: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', location: '', difficulty: '', participants: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main>
            {/* Hero Section */}
            <div className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <p className={styles.heroSmall}>GET IN TOUCH</p>
                    <h1 className={styles.heroTitle}>CONTACT NATURE NAVIGATION.</h1>
                    <p className={styles.heroSubtitle}>Begin Your Journey to the Top.</p>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.mainGrid}>
                    {/* Left Column */}
                    <div className={styles.leftColumn}>
                        <h2 className={styles.leftTitle}>Contact Nature Navigation</h2>
                        <p className={styles.leftText}>
                            Connect with us to plan your next Himalayan expedition. We are dedicated to providing safe, memorable, and professionally guided trekking experiences.
                        </p>
                    </div>

                    {/* Middle Column: Form */}
                    <div>
                        <h2 className={styles.formTitle}>Contact Nature Navigation</h2>

                        {status === 'success' && (
                            <div className={styles.successMsg}>
                                ✅ Expedition inquiry sent successfully! We will contact you soon.
                            </div>
                        )}

                        {status === 'error' && (
                            <div className={styles.errorMsg}>
                                ❌ Failed to send inquiry. Please try again.
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            <div className={styles.formGrid}>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Full Name"
                                    className={styles.input}
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    className={styles.input}
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    name="phone"
                                    type="tel"
                                    placeholder="Phone Number (with country)"
                                    className={styles.input}
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <input
                                    name="location"
                                    type="text"
                                    placeholder="Preferred Trek Location"
                                    className={styles.input}
                                    value={formData.location}
                                    onChange={handleChange}
                                />
                                <select
                                    name="difficulty"
                                    className={styles.select}
                                    value={formData.difficulty}
                                    onChange={handleChange}
                                >
                                    <option value="">Trek Difficulty Level</option>
                                    <option value="easy">Easy</option>
                                    <option value="moderate">Moderate</option>
                                    <option value="difficult">Difficult</option>
                                    <option value="challenging">Challenging</option>
                                </select>
                                <input
                                    name="participants"
                                    type="number"
                                    placeholder="Number of Participants"
                                    className={styles.input}
                                    value={formData.participants}
                                    onChange={handleChange}
                                />
                            </div>
                            <textarea
                                name="message"
                                rows={5}
                                placeholder="Message"
                                className={`${styles.textarea} ${styles.fullWidth}`}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>

                            <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
                                {status === 'sending' ? 'SENDING...' : 'SEND EXPEDITION INQUIRY'}
                            </button>
                        </form>
                    </div>

                    {/* Right Column: Info */}
                    <div>
                        <div className={styles.infoSection}>
                            <h3 className={styles.infoTitle}>Office Address</h3>
                            <p className={styles.infoText}>
                                Uttarkashi - Gangotri Road,<br />
                                Bhatwari, Uttarakhand,<br />
                                India
                            </p>

                            <div className={styles.mapContainer}>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.62982888636!2d78.36153669642646!3d30.72697850893113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908dc4d0706b98f%3A0x6d9d1e3703c5885c!2sUttarkashi%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1705600000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0, borderRadius: '4px' }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>

                        <div className={styles.infoSection}>
                            <h3 className={styles.infoTitle}>Call & Email Support</h3>
                            <p className={styles.infoText}>
                                +91 123 456 7890<br />
                                support@naturenavigation.com<br />
                                +91 987 654 3210 (WhatsApp)
                            </p>
                        </div>

                        <div className={styles.emergencyBox}>
                            <h3 className={styles.emergencyTitle}>EMERGENCY CONTACT & SAFETY SUPPORT</h3>
                            <p className={styles.emergencyText}>
                                For urgent trekking-related matters and safety queries, please call our dedicated 24/7 emergency line:
                            </p>
                            <span className={styles.emergencyNumber}>+91 999 888 7777</span>
                        </div>

                        <div className={styles.infoSection}>
                            <h3 className={styles.infoTitle}>Business Hours & Response Time</h3>
                            <p className={styles.infoText}>
                                <strong>Monday - Friday:</strong> 9 AM - 6 PM IST<br />
                                <strong>Saturday:</strong> 10 AM - 2 PM IST<br />
                                <strong>Expected Reply Time:</strong> Within 24 hours
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
