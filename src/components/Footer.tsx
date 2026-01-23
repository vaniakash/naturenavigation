'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';

export default function Footer() {
    const [isLegalOpen, setIsLegalOpen] = useState(false);
    const currentYear = new Date().getFullYear();
    const pathname = usePathname();

    // Hide Footer on Admin Panel
    if (pathname?.startsWith('/admin')) {
        return null;
    }

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Brand Section with Logo */}
                <div className={styles.brandSection}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/logo.webp"
                            alt="Nature Navigation"
                            width={60}
                            height={60}
                            className={styles.logo}
                        />
                    </div>
                    <h3 className={styles.brandName}>Nature Navigation</h3>
                    <p className={styles.brandDescription}>
                        Your trusted partner for unforgettable trekking experiences in the Uttarakhand Himalayas.
                        Based in Uttarkashi, we bring you closer to nature.
                    </p>
                </div>

                {/* Quick Links */}
                <div className={styles.linksSection}>
                    <h4 className={styles.sectionTitle}>Quick Links</h4>
                    <nav className={styles.linkList}>
                        <Link href="/" className={styles.link}>Home</Link>
                        <Link href="/treks" className={styles.link}>Treks</Link>
                        <Link href="/about" className={styles.link}>About Us</Link>
                        <Link href="/gallery" className={styles.link}>Gallery</Link>
                        <Link href="/faq" className={styles.link}>FAQ</Link>
                        <Link href="/contact" className={styles.link}>Contact</Link>
                    </nav>
                </div>

                {/* Contact Information */}
                <div className={styles.contactSection}>
                    <h4 className={styles.sectionTitle}>Contact</h4>
                    <div className={styles.contactList}>
                        <a href="mailto:naturenavigation56@gmail.com" className={styles.contactItem}>
                            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className={styles.contactText}>naturenavigation56@gmail.com</span>
                        </a>
                        <a href="tel:+91 95481 77756" className={styles.contactItem}>
                            <svg className={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className={styles.contactText}>+91 95481 77756</span>
                        </a>
                    </div>
                </div>

                {/* Social Media */}
                <div className={styles.socialSection}>
                    <h4 className={styles.sectionTitle}>Follow Us</h4>
                    <div className={styles.socialLinks}>

                        <a href="https://www.instagram.com/naturenavigation_/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                            <svg className={styles.socialIcon} fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                            </svg>
                        </a>

                    </div>
                </div>
            </div>

            {/* Collapsible Legal Section - Mobile Only */}
            <div className={styles.legalAccordion}>
                <button
                    onClick={() => setIsLegalOpen(!isLegalOpen)}
                    className={styles.legalToggle}
                    aria-expanded={isLegalOpen}
                >
                    <span>Legal & Policies</span>
                    <svg
                        className={`${styles.chevron} ${isLegalOpen ? styles.chevronOpen : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {isLegalOpen && (
                    <nav className={styles.legalLinks}>
                        <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
                        <Link href="/cancellation-refund" className={styles.legalLink}>Cancellation & Refund Policy</Link>
                        <Link href="/terms-conditions" className={styles.legalLink}>Terms & Conditions</Link>
                    </nav>
                )}
            </div>

            {/* Legal Links - Desktop Only */}
            <nav className={styles.legalDesktop}>
                <Link href="/privacy-policy" className={styles.legalLink}>Privacy Policy</Link>
                <span className={styles.separator}>•</span>
                <Link href="/cancellation-refund" className={styles.legalLink}>Cancellation & Refund</Link>
                <span className={styles.separator}>•</span>
                <Link href="/terms-conditions" className={styles.legalLink}>Terms & Conditions</Link>
            </nav>

            {/* Bottom Bar */}
            <div className={styles.bottomBar}>
                <p className={styles.copyright}>
                    © {currentYear} Nature Navigation. All rights reserved.
                </p>
                <p className={styles.designer}>
                    Designed by <a href="https://berkysan.shop" target="_blank" rel="noopener noreferrer" className={styles.designerLink}>AKASH RANA</a>
                </p>
            </div>
        </footer>
    );
}
