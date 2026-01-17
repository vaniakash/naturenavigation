'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './FAQSection.module.css';

const faqs = [
    {
        question: "Why is your trek fee higher than other trekking companies?",
        answer: "We prioritize safety, high-quality equipment, experienced certified guides, and nutritious meals. We ensure fair wages for our staff and maintain a low trekker-to-guide ratio for a personalized experience."
    },
    {
        question: "Can I join your groups as a solo trekker?",
        answer: "Absolutely! Many of our trekkers join solo. It's a great way to meet like-minded adventure enthusiasts. We ensure a safe and inclusive environment for everyone."
    },
    {
        question: "I'm a solo woman. Is it safe for me?",
        answer: "Yes, safety is our top priority. We have separate tents for women (unless sharing with friends/family), and our staff is trained to ensure a secure and comfortable environment for female trekkers."
    },
    {
        question: "Why do I have to register so much in advance?",
        answer: "Permits for Himalayan treks need to be arranged early, and our groups fill up quickly. Early registration helps us ensure all logistics, including accomodation and equipment, are perfectly arranged."
    },
    {
        question: "What are some easy treks for beginners?",
        answer: "For beginners, we recommend treks like Kedarkantha, Valley of Flowers, or Dayara Bugyal. These treks have well-defined trails and moderate altitudes, making them perfect for first-timers."
    },
    {
        question: "I'm obese and my BMI is high. Can I trek with you?",
        answer: "Trekking is physically demanding. We review health forms carefully. If your BMI is high, we may ask for a fitness certificate or suggest a preparation plan. Safety is paramount."
    },
    {
        question: "Why are you so strict about fitness approvals?",
        answer: "The Himalayas can be unpredictable. Physical fitness safeguards you against altitude sickness and fatigue. We want you to enjoy the trek, not just endure it."
    },
    {
        question: "Do you have any group discounts?",
        answer: "Yes, we offer special discounts for groups of 5 or more. Please contact our support team or check our booking page for current offers."
    },
    {
        question: "I have health issues like BP, asthma, diabetes. can I trek?",
        answer: "It depends on the severity. You must consult your doctor. If controlled and approved by a physician, many people with these conditions trek successfully, but full disclosure is mandatory."
    },
    {
        question: "What are toilets like? I'm worried!",
        answer: "We set up dry toilet tents at campsites. They are hygienic, eco-friendly, and private. We use a cat-hole pit system which is covered after use to decompose naturally."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>
                        Frequently Asked Questions
                    </h2>
                    <div className={styles.underline}></div>
                </div>

                <div className={styles.grid}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`${styles.item} ${openIndex === index ? styles.active : ''}`}
                        >
                            <button
                                className={styles.question}
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span>{faq.question}</span>
                                <span className={styles.icon}>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        style={{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
                                    >
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </span>
                            </button>
                            <div
                                className={styles.answerWrapper}
                                style={{
                                    maxHeight: openIndex === index ? '500px' : '0',
                                    opacity: openIndex === index ? 1 : 0
                                }}
                            >
                                <div className={styles.answer}>
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.footer}>
                    <Link href="/faq" className={styles.viewMoreBtn}>
                        View More FAQs
                    </Link>
                </div>
            </div>
        </section>
    );
}
