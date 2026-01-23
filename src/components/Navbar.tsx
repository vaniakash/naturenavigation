'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { Menu, X, LogIn, UserPlus, LayoutDashboard, LogOut } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
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

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => pathname === path;

    const handleLogout = async () => {
        await signOut({ callbackUrl: '/' });
    };

    // Hide Navbar on Admin Dashboard
    if (pathname?.startsWith('/admin')) {
        return null;
    }

    return (
        <>
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
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className={styles.desktopNav}>
                        {navLinks.map((link) => (
                            <div key={link.href} className={styles.navLinkWrapper}>
                                <Link
                                    href={link.href}
                                    className={`${styles.navLink} ${isActive(link.href) ? styles.navLinkActive : ''}`}
                                >
                                    {link.label}
                                </Link>
                                {isActive(link.href) && (
                                    <div className={styles.activeIndicator} />
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Auth Buttons - Desktop */}
                    <div className={styles.authButtons}>
                        {session ? (
                            <>
                                <Link
                                    href={session.user.role === 'admin' ? '/admin' : '/dashboard/user'}
                                    className={styles.btnPrimary}
                                >
                                    <LayoutDashboard size={18} />
                                    <span>Dashboard</span>
                                </Link>
                                {pathname?.startsWith('/dashboard') && (
                                    <button
                                        onClick={handleLogout}
                                        className={styles.btnSecondary}
                                    >
                                        <LogOut size={18} />
                                        <span>Logout</span>
                                    </button>
                                )}
                            </>
                        ) : (
                            <>
                                <Link href="/login" className={styles.btnGhost}>
                                    <LogIn size={18} />
                                    <span>Login</span>
                                </Link>
                                <Link href="/register" className={styles.btnPrimary}>
                                    <UserPlus size={18} />
                                    <span>Sign Up</span>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <>
                        <div className={styles.backdrop} onClick={() => setIsMenuOpen(false)} />
                        <div className={styles.mobileMenu}>
                            <div className={styles.mobileMenuHeader}>
                                <h2 className={styles.menuTitle}>Menu</h2>
                                <button
                                    className={styles.closeBtn}
                                    onClick={() => setIsMenuOpen(false)}
                                    aria-label="Close menu"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className={styles.mobileNavLinks}>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`${styles.mobileNavLink} ${isActive(link.href) ? styles.mobileNavLinkActive : ''}`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {link.label}
                                        {isActive(link.href) && <div className={styles.activeDot} />}
                                    </Link>
                                ))}
                            </div>

                            <div className={styles.mobileDivider} />

                            <div className={styles.mobileAuthButtons}>
                                {session ? (
                                    <>
                                        <Link
                                            href={session.user.role === 'admin' ? '/admin' : '/dashboard/user'}
                                            className={styles.btnPrimary}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <LayoutDashboard size={18} />
                                            <span>Dashboard</span>
                                        </Link>
                                        <button
                                            onClick={() => {
                                                handleLogout();
                                                setIsMenuOpen(false);
                                            }}
                                            className={styles.btnSecondary}
                                        >
                                            <LogOut size={18} />
                                            <span>Logout</span>
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            href="/login"
                                            className={styles.btnGhost}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <LogIn size={18} />
                                            <span>Login</span>
                                        </Link>
                                        <Link
                                            href="/register"
                                            className={styles.btnPrimary}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <UserPlus size={18} />
                                            <span>Sign Up</span>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </nav>
            {/* Spacer to prevent content from hiding behind fixed navbar */}
            <div style={{ height: '80px', width: '100%' }} />
        </>
    );
}
