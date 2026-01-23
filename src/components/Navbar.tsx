'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X, LogIn, UserPlus, LayoutDashboard, LogOut } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const { data: session } = useSession();
    const { scrollY } = useScroll();

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/treks', label: 'Treks' },
        { href: '/destinations', label: 'Destinations' },
        { href: '/about', label: 'About' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/faq', label: 'FAQ' },
        { href: '/contact', label: 'Contact' },
    ];

    // Scroll-based animations
    const navbarBg = useTransform(
        scrollY,
        [0, 100],
        ['rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.95)']
    );

    const navbarPadding = useTransform(scrollY, [0, 100], ['1rem 0', '0.5rem 0']);
    const navbarShadow = useTransform(
        scrollY,
        [0, 100],
        ['0 2px 8px rgba(0, 0, 0, 0.05)', '0 4px 20px rgba(0, 0, 0, 0.1)']
    );

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

    // Animation variants
    const navbarVariants = {
        initial: { y: -100, opacity: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring' as const,
                stiffness: 100,
                damping: 20
            }
        }
    } as const;

    const menuItemVariants = {
        closed: { x: 50, opacity: 0 },
        open: (i: number) => ({
            x: 0,
            opacity: 1,
            transition: {
                delay: i * 0.08,
                type: 'spring' as const,
                stiffness: 300,
                damping: 24
            }
        })
    } as const;

    const backdropVariants = {
        hidden: { opacity: 0, backdropFilter: 'blur(0px)' },
        visible: {
            opacity: 1,
            backdropFilter: 'blur(4px)',
            transition: { duration: 0.3 }
        },
        exit: {
            opacity: 0,
            backdropFilter: 'blur(0px)',
            transition: { duration: 0.2 }
        }
    } as const;

    const mobileMenuVariants = {
        closed: {
            y: '100%',
            transition: {
                type: 'spring' as const,
                stiffness: 400,
                damping: 40
            }
        },
        open: {
            y: 0,
            transition: {
                type: 'spring' as const,
                stiffness: 400,
                damping: 40
            }
        }
    } as const;

    return (
        <motion.nav
            className={styles.navbar}
            variants={navbarVariants}
            initial="initial"
            animate="animate"
            style={{
                background: navbarBg as any,
                padding: navbarPadding as any,
                boxShadow: navbarShadow as any,
            }}
        >
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logoContainer}>
                    <motion.div
                        className={styles.logoWrapper}
                        whileHover={{ scale: 1.05, rotate: -2 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                    >
                        <Image
                            src="/logo.webp"
                            alt="Nature Navigation"
                            fill
                            className={styles.logoImage}
                            priority
                        />
                    </motion.div>
                </Link>

                {/* Desktop Navigation */}
                <div className={styles.desktopNav}>
                    {navLinks.map((link, index) => (
                        <motion.div
                            key={link.href}
                            className={styles.navLinkWrapper}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <Link
                                href={link.href}
                                className={`${styles.navLink} ${isActive(link.href) ? styles.navLinkActive : ''}`}
                            >
                                <motion.span
                                    whileHover={{ y: -2 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                >
                                    {link.label}
                                </motion.span>
                            </Link>
                            {isActive(link.href) && (
                                <motion.div
                                    className={styles.activeIndicator}
                                    layoutId="activeIndicator"
                                    transition={{
                                        type: 'spring',
                                        stiffness: 380,
                                        damping: 30
                                    }}
                                />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Auth Buttons - Desktop */}
                <div className={styles.authButtons}>
                    {session ? (
                        <>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link
                                    href={session.user.role === 'admin' ? '/admin' : '/dashboard/user'}
                                    className={styles.btnPrimary}
                                >
                                    <LayoutDashboard size={18} />
                                    <span>Dashboard</span>
                                </Link>
                            </motion.div>
                            {pathname?.startsWith('/dashboard') && (
                                <motion.button
                                    onClick={handleLogout}
                                    className={styles.btnSecondary}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <LogOut size={18} />
                                    <span>Logout</span>
                                </motion.button>
                            )}
                        </>
                    ) : (
                        <>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/login" className={styles.btnGhost}>
                                    <LogIn size={18} />
                                    <span>Login</span>
                                </Link>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Link href="/register" className={styles.btnPrimary}>
                                    <UserPlus size={18} />
                                    <span>Sign Up</span>
                                </Link>
                            </motion.div>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                    className={styles.mobileMenuBtn}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Toggle menu"
                >
                    <AnimatePresence mode="wait">
                        {isMenuOpen ? (
                            <motion.div
                                key="close"
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 90 }}
                                exit={{ rotate: 0 }}
                                transition={{ duration: 0.2 }}
                            >
                                <X size={24} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{ rotate: 0 }}
                                animate={{ rotate: 0 }}
                                exit={{ rotate: 90 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Menu size={24} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            className={styles.backdrop}
                            variants={backdropVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            onClick={() => setIsMenuOpen(false)}
                        />

                        {/* Menu Content */}
                        <motion.div
                            className={styles.mobileMenu}
                            variants={mobileMenuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={0.2}
                            onDragEnd={(_, info) => {
                                if (info.offset.x > 100 || info.velocity.x > 500) {
                                    setIsMenuOpen(false);
                                }
                            }}
                        >
                            <div className={styles.mobileMenuHeader}>
                                <h3 className={styles.menuTitle}>Menu</h3>
                                <motion.button
                                    className={styles.closeBtn}
                                    onClick={() => setIsMenuOpen(false)}
                                    whileHover={{ rotate: 90, scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label="Close menu"
                                >
                                    <X size={24} />
                                </motion.button>
                            </div>

                            <div className={styles.mobileNavLinks}>
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        key={link.href}
                                        custom={index}
                                        variants={menuItemVariants}
                                        initial="closed"
                                        animate="open"
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`${styles.mobileNavLink} ${isActive(link.href) ? styles.mobileNavLinkActive : ''}`}
                                        >
                                            {link.label}
                                            {isActive(link.href) && (
                                                <motion.div
                                                    className={styles.activeDot}
                                                    layoutId="mobileDot"
                                                />
                                            )}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                className={styles.mobileDivider}
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ delay: 0.6 }}
                            />

                            <motion.div
                                className={styles.mobileAuthButtons}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.7 }}
                            >
                                {session ? (
                                    <>
                                        <Link
                                            href={session.user.role === 'admin' ? '/admin' : '/dashboard/user'}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={styles.btnPrimary}
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
                                            onClick={() => setIsMenuOpen(false)}
                                            className={styles.btnGhost}
                                        >
                                            <LogIn size={18} />
                                            <span>Login</span>
                                        </Link>
                                        <Link
                                            href="/register"
                                            onClick={() => setIsMenuOpen(false)}
                                            className={styles.btnPrimary}
                                        >
                                            <UserPlus size={18} />
                                            <span>Sign Up</span>
                                        </Link>
                                    </>
                                )}
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
