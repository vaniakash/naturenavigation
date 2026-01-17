'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const { data: session } = useSession();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/treks', label: 'Treks' },
        { href: '/destinations', label: 'Destinations' },
        { href: '/about', label: 'About' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/faq', label: 'FAQ' },
        { href: '/contact', label: 'Contact' },
    ];

    const isActive = (path: string) => pathname === path;

    const handleLogout = async () => {
        await signOut({ callbackUrl: '/' });
    };

    // Hide Navbar on Admin Dashboard
    if (pathname?.startsWith('/admin')) {
        return null;
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logoContainer}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/logo.webp"
                            alt="Nature Navigation"
                            fill
                            className={styles.logoImage}
                        />
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className={styles.desktopNav}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`${styles.navLink} ${isActive(link.href) ? styles.navLinkActive : ''}`}
                        >
                            {link.label}
                        </Link>
                    ))}

                </div>

                {/* Auth Buttons */}
                <div className={styles.authButtons}>
                    {session ? (
                        <>
                            <Link
                                href={
                                    session.user.role === 'admin'
                                        ? '/admin'
                                        : '/dashboard/user'
                                }
                                className={styles.btnPrimary}
                            >
                                Dashboard
                            </Link>
                            {pathname?.startsWith('/dashboard') && (
                                <button onClick={handleLogout} className={styles.btnSecondary}>
                                    Logout
                                </button>
                            )}
                        </>
                    ) : (
                        <>
                            <Link href="/login" className={styles.btnGhost}>
                                Login
                            </Link>
                            <Link href="/register" className={styles.btnPrimary}>
                                Sign Up
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Controls */}
                <div className={styles.mobileControls}>


                    {/* Hamburger Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={styles.mobileMenuBtn}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg className={styles.menuIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className={styles.menuIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className={styles.mobileMenu} onClick={() => setIsMenuOpen(false)}>
                    <div className={styles.mobileMenuContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.drawerHeader}>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className={styles.drawerCloseBtn}
                                aria-label="Close menu"
                            >
                                <svg className={styles.menuIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`${styles.mobileNavLink} ${isActive(link.href) ? styles.mobileNavLinkActive : ''}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className={styles.mobileDivider}></div>
                        {session ? (
                            <>
                                <Link
                                    href={
                                        session.user.role === 'admin'
                                            ? '/admin'
                                            : '/dashboard/user'
                                    }
                                    onClick={() => setIsMenuOpen(false)}
                                    className={styles.btnGhost}
                                >
                                    Dashboard
                                </Link>
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setIsMenuOpen(false);
                                    }}
                                    className={styles.btnSecondary}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    onClick={() => setIsMenuOpen(false)}
                                    className={styles.btnGhost}
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    onClick={() => setIsMenuOpen(false)}
                                    className={styles.btnPrimary}
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}


        </nav>
    );
}
