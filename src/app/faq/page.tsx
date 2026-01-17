'use client';

import { useState } from 'react';
import styles from './page.module.css';

export default function FAQPage() {
    const faqItems = [
        {
            q: "Registering for a Trek with Nature Navigation",
            a: "To register for a trek with Nature Navigation, choose your preferred trek from our website and submit the registration form with the required details. Our team will review your submission and contact you with confirmation, payment instructions, and next steps. Registration is subject to availability and safety considerations."
        },
        {
            q: "Payment Concerns",
            a: "We offer secure and transparent payment options for all treks. Payment details, deadlines, and accepted methods will be shared during the booking process. For any payment-related questions or issues, our support team is available to assist you."
        },
        {
            q: "Find Information for Your Trek",
            a: "Detailed information about each trek—including itinerary, difficulty level, altitude, fitness requirements, and inclusions—is available on the respective trek pages. If you need additional clarification, you can contact our team before booking."
        },
        {
            q: "A Guide for Beginners",
            a: "Beginners are welcome on select treks designed for first-time trekkers. These treks include gradual ascents, proper acclimatization, and guidance from experienced trek leaders. We recommend reviewing fitness requirements and preparing adequately before joining."
        },
        {
            q: "Cancellations",
            a: "Cancellation policies vary by trek and season. Any applicable charges, refund timelines, and conditions will be communicated at the time of booking. We encourage trekkers to review the cancellation terms carefully before confirming their registration."
        },
        {
            q: "Trek Facilities",
            a: "Facilities during treks may include tents, sleeping arrangements, meals, and basic sanitation, depending on the route and terrain. While we strive to provide comfort, trekkers should be prepared for limited facilities in remote mountain regions."
        },
        {
            q: "Women Trekkers",
            a: "Nature Navigation welcomes women trekkers on all eligible treks. Safety, respect, and comfort are prioritized, and our teams follow professional conduct at all times. Women trekkers are encouraged to reach out with any specific concerns before booking."
        },
        {
            q: "Renting Gear",
            a: "Trekkers can rent essential trekking gear based on availability. Rental details, pricing, and equipment lists will be shared prior to the trek. We recommend informing us in advance if you require rented gear."
        },
        {
            q: "I Am a Senior Above 55 Years",
            a: "Participation for senior trekkers depends on fitness level, medical condition, and trek difficulty. Seniors are advised to consult a medical professional and discuss their suitability with our team before registering for a trek."
        },
        {
            q: "About Nature Navigation Trek Vouchers",
            a: "Trek vouchers may be offered for gifting or future use, subject to terms and validity. Voucher details, usage conditions, and expiration timelines will be shared at the time of purchase."
        },
        {
            q: "Treks for Families",
            a: "Family-friendly treks are available on select routes that are suitable for mixed age groups. These treks focus on safety, comfort, and shared experiences. Please review age requirements and trek details before booking."
        },
        {
            q: "Experiential Learning Programs",
            a: "Our experiential learning programs are designed to combine outdoor adventure with practical learning. These programs may include team-building activities, leadership development, and nature-based education, depending on the group’s objectives."
        }
    ];

    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredFaqItems = faqItems
        .map((item, index) => ({ ...item, originalIndex: index }))
        .filter(item =>
            item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.a.toLowerCase().includes(searchQuery.toLowerCase())
        );

    const scrollToSection = (index: number) => {
        const element = document.getElementById(`faq-${index}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveQuestion(index);
        }
    };

    return (
        <main className={styles.main}>
            {/* Green Hero Section */}
            <div className={styles.hero}>
                <h1 className={styles.heroTitle}>Have a question in mind?</h1>
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        placeholder="Type your question here"
                        className={styles.searchInput}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <svg className={styles.searchIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
            </div>

            {/* Content Section */}
            <div className={styles.container}>
                {/* Topic Index */}
                <h2 className={styles.topicIndexTitle}>Topic Index</h2>
                <div className={styles.divider}></div>

                {filteredFaqItems.length > 0 ? (
                    <ul className={styles.topicList}>
                        {filteredFaqItems.map((item) => (
                            <li
                                key={item.originalIndex}
                                className={styles.topicItem}
                                onClick={() => scrollToSection(item.originalIndex)}
                            >
                                <span className={styles.arrow}>›</span>
                                <span className={styles.topicText}>{item.q}</span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>No topics match your search.</p>
                )}

                {/* FAQ List Section */}
                <div id="faq-list-section">
                    <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
                    <div className={styles.divider}></div>

                    {filteredFaqItems.length > 0 ? (
                        <div className={styles.questionsGrid}>
                            {filteredFaqItems.map((item) => (
                                <div
                                    key={item.originalIndex}
                                    id={`faq-${item.originalIndex}`}
                                    className={`${styles.questionCard} ${activeQuestion === item.originalIndex ? styles.active : ''}`}
                                    onClick={() => setActiveQuestion(activeQuestion === item.originalIndex ? null : item.originalIndex)}
                                >
                                    <div className={styles.questionText}>{item.q}</div>
                                    <div className={styles.answerText}>{item.a}</div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p style={{ textAlign: 'center', color: '#666' }}>No questions found matching &quot;{searchQuery}&quot;</p>
                    )}
                </div>
            </div>
        </main>
    );
}
