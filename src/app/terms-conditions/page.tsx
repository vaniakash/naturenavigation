import React from 'react';
import styles from './terms.module.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms & Conditions | Nature Navigation',
    description: 'Terms and Conditions for participating in treks and using services offered by Nature Navigation. Read carefully before booking.',
};

export default function TermsConditions() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Terms & Conditions</h1>
                <p className={styles.lastUpdated}>Last updated: January 2026</p>
            </header>

            <div className={styles.introduction}>
                <p>
                    Welcome to Nature Navigation. By accessing or using our website{' '}
                    <Link href="/" className={styles.link}>
                        https://www.naturenavigation.in/
                    </Link>{' '}
                    and booking any of our services, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully.
                </p>
            </div>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
                <div className={styles.content}>
                    <p>By using this website or booking any trek or service offered by Nature Navigation, you confirm that:</p>
                    <ul>
                        <li>You have read and understood these Terms & Conditions</li>
                        <li>You agree to be legally bound by them</li>
                    </ul>
                    <p>If you do not agree with any part of these terms, please do not use our website or services.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>2. Eligibility to Participate</h2>
                <div className={styles.content}>
                    <p>To participate in any trek:</p>
                    <ul>
                        <li>You must meet the minimum age and fitness requirements</li>
                        <li>You must disclose any medical conditions that could affect your safety</li>
                        <li>You confirm that you are physically and mentally fit for trekking activities</li>
                    </ul>
                    <p>Nature Navigation reserves the right to deny participation if safety requirements are not met.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>3. Booking & Payment</h2>
                <div className={styles.content}>
                    <ul>
                        <li>All bookings are confirmed only after full or partial payment is received</li>
                        <li>Prices mentioned on the website are subject to change without prior notice</li>
                        <li>Payment must be made through approved payment methods only</li>
                    </ul>
                    <p>Booking confirmation details will be shared via email or phone.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>4. Cancellation & Refund</h2>
                <div className={styles.content}>
                    <p>
                        All cancellations and refunds are governed by our{' '}
                        <Link href="/cancellation-refund" className={styles.link}>
                            Cancellation & Refund Policy
                        </Link>
                        , which forms an integral part of these Terms & Conditions.
                    </p>
                    <p>Please refer to the Cancellation & Refund Policy page for detailed information.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>5. Trek Itinerary & Changes</h2>
                <div className={styles.content}>
                    <p>Nature Navigation reserves the right to:</p>
                    <ul>
                        <li>Modify trek itineraries</li>
                        <li>Change trek routes, schedules, or campsites</li>
                        <li>Cancel or postpone treks</li>
                    </ul>
                    <p>Such changes may be required due to:</p>
                    <ul>
                        <li>Weather conditions</li>
                        <li>Safety concerns</li>
                        <li>Natural disasters</li>
                        <li>Government or local authority restrictions</li>
                    </ul>
                    <p>These decisions will be made in the best interest of participant safety.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>6. Health, Safety & Risk Acknowledgement</h2>
                <div className={styles.content}>
                    <p>Trekking involves inherent risks including:</p>
                    <ul>
                        <li>Altitude sickness</li>
                        <li>Injuries</li>
                        <li>Weather-related challenges</li>
                        <li>Terrain difficulties</li>
                    </ul>
                    <p>By participating, you acknowledge these risks and agree that:</p>
                    <ul>
                        <li>Nature Navigation is not liable for injuries, illness, or accidents unless caused by gross negligence</li>
                        <li>You participate at your own risk</li>
                    </ul>
                    <p>Participants must follow instructions given by trek leaders and staff at all times.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>7. Insurance</h2>
                <div className={styles.content}>
                    <ul>
                        <li>Trek insurance, if provided, is subject to the insurer’s terms</li>
                        <li>Participants are encouraged to have personal medical and travel insurance</li>
                        <li>Nature Navigation is not responsible for insurance claim outcomes</li>
                    </ul>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>8. Personal Belongings</h2>
                <div className={styles.content}>
                    <p>Nature Navigation is not responsible for:</p>
                    <ul>
                        <li>Loss or theft of personal items</li>
                        <li>Damage to personal equipment or gear</li>
                    </ul>
                    <p>Participants are advised to take care of their belongings throughout the trek.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>9. Code of Conduct</h2>
                <div className={styles.content}>
                    <p>Participants are expected to:</p>
                    <ul>
                        <li>Respect fellow trekkers, staff, and local communities</li>
                        <li>Follow environmental and sustainability guidelines</li>
                        <li>Avoid alcohol, drugs, or disruptive behavior during treks</li>
                    </ul>
                    <p>Violation of conduct rules may result in removal from the trek without refund.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>10. Intellectual Property</h2>
                <div className={styles.content}>
                    <p>All content on this website, including:</p>
                    <ul>
                        <li>Text</li>
                        <li>Images</li>
                        <li>Logos</li>
                        <li>Design elements</li>
                    </ul>
                    <p>Are the property of Nature Navigation unless otherwise stated. Unauthorized use, reproduction, or distribution is prohibited.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>11. Third-Party Links</h2>
                <div className={styles.content}>
                    <p>Our website may contain links to third-party websites. Nature Navigation is not responsible for:</p>
                    <ul>
                        <li>Content</li>
                        <li>Services</li>
                        <li>Privacy practices</li>
                    </ul>
                    <p>Of those external websites.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>12. Limitation of Liability</h2>
                <div className={styles.content}>
                    <p>Nature Navigation shall not be liable for:</p>
                    <ul>
                        <li>Indirect or consequential damages</li>
                        <li>Delays caused by external factors</li>
                        <li>Acts of nature, government actions, or force majeure events</li>
                    </ul>
                    <p>Our maximum liability, if any, shall not exceed the amount paid by the participant for the trek.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>13. Governing Law & Jurisdiction</h2>
                <div className={styles.content}>
                    <p>These Terms & Conditions shall be governed by and interpreted in accordance with the laws of India.</p>
                    <p>Any disputes shall be subject to the jurisdiction of Indian courts.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>14. Changes to Terms</h2>
                <div className={styles.content}>
                    <p>Nature Navigation reserves the right to modify these Terms & Conditions at any time. Continued use of the website or services after changes implies acceptance of the updated terms.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>15. Contact Information</h2>
                <div className={styles.content}>
                    <p>For any questions regarding these Terms & Conditions, contact:</p>
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
