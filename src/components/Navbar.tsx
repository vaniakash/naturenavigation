'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { Menu, X, LogIn, UserPlus, LayoutDashboard, LogOut } from 'lucide-react';
import styles from './Navbar.module.css';

import { motion, AnimatePresence } from 'framer-motion';

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

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const isActive = (path: string) => pathname === path;

    const handleLogout = async () => {
        await signOut({ callbackUrl: '/' });
    };

    // Hide Navbar on Admin Dashboard
    if (pathname?.startsWith('/admin')) {
        return null;
    }

    const menuVariants = {
        initial: { opacity: 0, scale: 0.95 },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1] as const,
                staggerChildren: 0.05
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: { duration: 0.2 }
        }
    };

    const itemVariants = {
        initial: { opacity: 0, y: 20 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: [0.16, 1, 0.3, 1] as const
            }
        },
        exit: { opacity: 0, y: 10 }
    };

    return (
        <>
            <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
                <div className={styles.container}>
                    {/* Logo */}
                    <Link href="/" className={styles.logoContainer} onClick={() => setIsMenuOpen(false)}>
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

                    {/* Mobile Menu Button - Acts as Toggle */}
                    <button
                        className={styles.mobileMenuBtn}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24">
                            <motion.path
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                variants={{
                                    closed: { d: "M 2 6 L 22 6" },
                                    open: { d: "M 3 3 L 21 21" }
                                }}
                                initial="closed"
                                animate={isMenuOpen ? "open" : "closed"}
                                transition={{ duration: 0.3 }} // Adjust duration if needed
                            />
                            <motion.path
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                d="M 2 12 L 22 12"
                                variants={{
                                    closed: { opacity: 1 },
                                    open: { opacity: 0 }
                                }}
                                initial="closed"
                                animate={isMenuOpen ? "open" : "closed"}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.path
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                variants={{
                                    closed: { d: "M 2 18 L 22 18" },
                                    open: { d: "M 3 21 L 21 3" }
                                }}
                                initial="closed"
                                animate={isMenuOpen ? "open" : "closed"}
                                transition={{ duration: 0.3 }}
                            />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu - Full Screen Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className={styles.mobileMenu}
                            variants={menuVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                        >
                            <div className={styles.mobileNavLinks}>
                                {navLinks.map((link) => (
                                    <motion.div key={link.href} variants={itemVariants} style={{ width: '100%' }}>
                                        <Link
                                            href={link.href}
                                            className={`${styles.mobileNavLink} ${isActive(link.href) ? styles.mobileNavLinkActive : ''}`}
                                            onClick={() => setIsMenuOpen(false)}
                                            style={{ display: 'block', width: '100%', textAlign: 'center' }}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className={styles.mobileAuthButtons}
                                variants={itemVariants}
                            >
                                {session ? (
                                    <>
                                        <Link
                                            href={session.user.role === 'admin' ? '/admin' : '/dashboard/user'}
                                            className={styles.btnPrimary}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <LayoutDashboard size={20} />
                                            <span>Dashboard</span>
                                        </Link>
                                        <button
                                            onClick={() => {
                                                handleLogout();
                                                setIsMenuOpen(false);
                                            }}
                                            className={styles.btnSecondary}
                                        >
                                            <LogOut size={20} />
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
                                            <LogIn size={20} />
                                            <span>Login</span>
                                        </Link>
                                        <Link
                                            href="/register"
                                            className={styles.btnPrimary}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <UserPlus size={20} />
                                            <span>Sign Up</span>
                                        </Link>
                                    </>
                                )}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
            {/* Spacer to prevent content from hiding behind fixed navbar */}
            <div style={{ height: '80px', width: '100%' }} />
        </>
    );
}
