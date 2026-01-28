import React from 'react';
import styles from './cancellation.module.css';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cancellation & Refund Policy | Nature Navigation',
    description: 'Cancellation & Refund Policy for Nature Navigation. Understand our terms for cancellations, refunds, and trek modifications.',
};

export default function CancellationRefundPolicy() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Cancellation & Refund Policy</h1>
                <p className={styles.lastUpdated}>Last updated: January 2026</p>
            </header>

            <div className={styles.introduction}>
                <p>
                    At Nature Navigation, we understand that plans can change due to unforeseen circumstances. This Cancellation & Refund Policy explains how cancellations, refunds, and changes are handled for our trekking and adventure services.
                </p>
            </div>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>1. Cancellation by the Participant</h2>
                <div className={styles.content}>
                    <p>If you cancel your trek booking, the following cancellation charges will apply:</p>
                    <ul>
                        <li>
                            <span>✅</span>
                            <span><strong>More than 30 days before trek start date:</strong> <br />90% refund of the trek fee (excluding taxes, insurance, and transaction charges)</span>
                        </li>
                        <li>
                            <span>✅</span>
                            <span><strong>15 to 30 days before trek start date:</strong> <br />50% refund of the trek fee</span>
                        </li>
                        <li>
                            <span>✅</span>
                            <span><strong>7 to 14 days before trek start date:</strong> <br />25% refund of the trek fee</span>
                        </li>
                        <li>
                            <span>❌</span>
                            <span><strong>Less than 7 days before trek start date:</strong> <br />No refund</span>
                        </li>
                    </ul>
                    <p>Refunds, if applicable, will be processed within 7–10 working days to the original payment method.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>2. Cancellation Due to Weather or Natural Conditions</h2>
                <div className={styles.content}>
                    <p>Trekking activities are highly dependent on weather and environmental conditions. In case of:</p>
                    <ul>
                        <li>Extreme weather</li>
                        <li>Natural disasters</li>
                        <li>Government restrictions</li>
                        <li>Safety concerns</li>
                    </ul>
                    <p>Nature Navigation reserves the right to:</p>
                    <ul>
                        <li>Modify the trek itinerary</li>
                        <li>Postpone the trek</li>
                        <li>Cancel the trek entirely</li>
                    </ul>
                    <p>In such cases:</p>
                    <ul>
                        <li>Participants may receive a future trek credit, or</li>
                        <li>A partial refund, depending on expenses already incurred</li>
                    </ul>
                    <p>Refund decisions in these situations will be final and binding.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>3. Cancellation by Nature Navigation</h2>
                <div className={styles.content}>
                    <p>If a trek is cancelled by Nature Navigation due to unavoidable circumstances:</p>
                    <ul>
                        <li>Participants will be offered a full refund of the trek fee, or</li>
                        <li>The option to transfer the booking to another trek/date</li>
                    </ul>
                    <p>No additional compensation will be provided beyond the refund of the trek fee.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>4. No-Show Policy</h2>
                <div className={styles.content}>
                    <p>If a participant fails to:</p>
                    <ul>
                        <li>Report at the pickup point</li>
                        <li>Join the trek on the scheduled date</li>
                    </ul>
                    <p>This will be treated as a no-show, and no refund will be applicable.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>5. Partial Participation / Early Exit</h2>
                <div className={styles.content}>
                    <p>If a participant chooses to:</p>
                    <ul>
                        <li>Leave the trek midway</li>
                        <li>Skip certain days or activities</li>
                    </ul>
                    <p>No refund will be provided for the unused portion of the trek.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>6. Refund Method</h2>
                <div className={styles.content}>
                    <ul>
                        <li>Refunds will be processed to the original mode of payment</li>
                        <li>Transaction charges, taxes, and insurance fees are non-refundable</li>
                        <li>Processing time: 7–10 business days</li>
                    </ul>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>7. Transfer Policy</h2>
                <div className={styles.content}>
                    <ul>
                        <li>Trek bookings are non-transferable without prior approval</li>
                        <li>Any approved transfer may attract an administrative fee</li>
                    </ul>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>8. Changes to This Policy</h2>
                <div className={styles.content}>
                    <p>Nature Navigation reserves the right to update or modify this Cancellation & Refund Policy at any time. Changes will be effective immediately upon posting on the website.</p>
                </div>
            </section>

            <section className={styles.section}>
                <h2 className={styles.sectionTitle}>9. Contact Us</h2>
                <div className={styles.content}>
                    <p>For cancellation or refund-related queries, please contact:</p>
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
