'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { Menu, LogIn, UserPlus, LayoutDashboard, LogOut } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
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

    // Hide Navbar on Admin Dashboard OR Menu Page
    if (pathname?.startsWith('/admin') || pathname === '/menu') {
        return null;
    }

    return (
        <>
            <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
                <div className={styles.container}>
                    {/* Logo */}
                    <Link href="/" className={styles.logoContainer} aria-label="Nature Navigation Home">
                        <div className={styles.logoWrapper}>
                            <Image
                                src="/logo.webp"
                                alt="Nature Navigation Logo"
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

                    {/* Mobile Menu Button - Link to /menu */}
                    <Link
                        href="/menu"
                        className={styles.mobileMenuBtn}
                        aria-label="Open menu"
                    >
                        <Menu size={26} />
                    </Link>
                </div>
            </nav>
            {/* Spacer to prevent content from hiding behind fixed navbar */}
            <div style={{ height: '80px', width: '100%' }} />
        </>
    );
}
