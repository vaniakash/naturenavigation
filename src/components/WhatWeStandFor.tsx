'use client';

import styles from './WhatWeStandFor.module.css';

export default function WhatWeStandFor() {
    const content = [
        {
            heading: "Thoughtful Planning",
            tagline: "Carefully Designed Experiences",
            description: "Every experience on our platform is thoughtfully planned. We focus on clarity, structure, and smooth execution so users can feel confident from the very first interaction."
        },
        {
            heading: "Safety First Mindset",
            tagline: "Safety as a Core Principle",
            description: "Safety is not an afterthought for us. From planning routes to managing logistics, we prioritize responsible decision-making and preparedness at every stage."
        },
        {
            heading: "Quality Over Quantity",
            tagline: "Focused on Doing Things Right",
            description: "We are starting small—intentionally. This allows us to pay close attention to details, improve continuously, and deliver quality experiences instead of rushing scale."
        },
        {
            heading: "Purpose-Driven Vision",
            tagline: "Built with Long-Term Vision",
            description: "This platform is built with a clear purpose: to create meaningful journeys and experiences. We are committed to learning, evolving, and growing responsibly over time."
        },
        {
            heading: "Community-Oriented Approach",
            tagline: "Growing With Our Community",
            description: "We believe strong platforms are built with people, not just for them. Feedback, transparency, and trust will shape how we grow moving forward."
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>What We Stand For</h2>
                <div className={styles.grid}>
                    {content.map((item, index) => (
                        <div key={index} className={styles.column}>
                            <h3 className={styles.columnHeading}>{item.heading}</h3>
                            <strong className={styles.tagline}>{item.tagline}</strong>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
