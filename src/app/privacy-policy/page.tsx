import React from 'react';
import styles from './privacy.module.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | Nature Navigation',
    description: 'Privacy Policy for Nature Navigation. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Privacy Policy</h1>
                <p className={styles.lastUpdated}>Last updated: January 2026</p>
            </header>

            <div className={styles.introduction}>
                <p>
                    At Nature Navigation, accessible from{' '}
                    <Link href="/" className={styles.link}>
                        https://www.naturenavigation.in/
                    </Link>
                    , we respect your privacy and are committed to protecting any personal information you share with us. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                </p>
            </div>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
                <div className={styles.content}>
                    <p>We may collect the following types of information:</p>

                    <div className={styles.subSection}>
                        <h3 className={styles.subSectionTitle}>a) Personal Information</h3>
                        <p>When you:</p>
                        <ul>
                            <li>Contact us</li>
                            <li>Register for a trek</li>
                            <li>Fill out inquiry or booking forms</li>
                        </ul>
                        <p>You may be asked to provide:</p>
                        <ul>
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Any other details required for trek registration or communication</li>
                        </ul>
                    </div>

                    <div className={styles.subSection}>
                        <h3 className={styles.subSectionTitle}>b) Non-Personal Information</h3>
                        <p>We automatically collect limited technical information such as:</p>
                        <ul>
                            <li>Browser type</li>
                            <li>Device information</li>
                            <li>IP address</li>
                            <li>Pages visited on our website</li>
                        </ul>
                        <p>This data helps us improve website performance and user experience.</p>
                    </div>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
                <div className={styles.content}>
                    <p>The information collected is used to:</p>
                    <ul>
                        <li>Respond to your inquiries</li>
                        <li>Process trek registrations and bookings</li>
                        <li>Share trek-related updates and information</li>
                        <li>Improve our website and services</li>
                        <li>Ensure safety and operational communication during treks</li>
                    </ul>
                    <p>We do not sell, rent, or trade your personal information to third parties.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>3. Cookies and Tracking Technologies</h2>
                <div className={styles.content}>
                    <p>Nature Navigation may use cookies to:</p>
                    <ul>
                        <li>Enhance user experience</li>
                        <li>Understand website traffic and usage patterns</li>
                    </ul>
                    <p>You can choose to disable cookies through your browser settings. Disabling cookies may affect certain website functionalities.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>4. Third-Party Services</h2>
                <div className={styles.content}>
                    <p>We may use trusted third-party tools or services such as:</p>
                    <ul>
                        <li>Payment gateways</li>
                        <li>Email communication services</li>
                        <li>Analytics tools (e.g., Google Analytics)</li>
                    </ul>
                    <p>These third parties have their own privacy policies, and we are not responsible for their content or practices.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>5. Data Security</h2>
                <div className={styles.content}>
                    <p>We implement reasonable security measures to protect your personal data from unauthorized access, misuse, or disclosure. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>6. Links to External Websites</h2>
                <div className={styles.content}>
                    <p>Our website may contain links to third-party websites. Once you leave our site, we are not responsible for the privacy practices or content of those websites. We encourage you to read their privacy policies separately.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>7. Children&apos;s Information</h2>
                <div className={styles.content}>
                    <p>Nature Navigation does not knowingly collect personal information from children under the age of 13 without parental consent. If you believe your child has provided personal data on our website, please contact us immediately.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>8. Changes to This Privacy Policy</h2>
                <div className={styles.content}>
                    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Continued use of our website after changes implies acceptance of the updated policy.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>9. Your Consent</h2>
                <div className={styles.content}>
                    <p>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>10. Contact Us</h2>
                <div className={styles.content}>
                    <p>If you have any questions or concerns regarding this Privacy Policy, you can contact us at:</p>
                    <div style={{ marginTop: '1rem' }}>
                        <p><strong>Nature Navigation</strong></p>
                        <p>Website: <Link href="/" className={styles.link}>https://www.naturenavigation.in/</Link></p>
                        <p>Email: <a href="mailto:naturenavigation@gmail.com" className={styles.link}>naturenavigation@gmail.com</a></p>
                    </div>
                </div>
            </section>
        </div>
    );
}
