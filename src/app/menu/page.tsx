'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { X, LogIn, UserPlus, LayoutDashboard, LogOut } from 'lucide-react';
import styles from './menu.module.css';

export default function MenuPage() {
    const pathname = usePathname();
    const router = useRouter();
    const { data: session } = useSession();

    // Although we are on /menu, we might want to highlight the previous page or just use standard logic.
    // Since /menu is a separate page, 'isActive' might only be useful if we passed the referrer or context.
    // For now, we'll simplify and not highlight active state or just check if it matches EXACTLY / (which is rare since we are on /menu).
    // Better approach: Just list links.

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/treks', label: 'Treks' },
        { href: '/destinations', label: 'Destinations' },
        { href: '/about', label: 'About' },
        { href: '/gallery', label: 'Gallery' },
        { href: '/blog', label: 'Blog' },
        { href: '/faq', label: 'FAQ' },
        { href: '/contact', label: 'Contact' },
    ];

    const handleLogout = async () => {
        await signOut({ callbackUrl: '/' });
    };

    const containerVariants = {
        initial: { opacity: 0 },
        animate: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        },
        exit: { opacity: 0 }
    };

    const itemVariants = {
        initial: { opacity: 0, y: 30 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1] as const
            }
        }
    };

    return (
        <motion.div
            className={styles.menuContainer}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={containerVariants}
        >
            <div className={styles.header}>
                <button
                    onClick={() => router.back()}
                    className={styles.closeBtn}
                    aria-label="Close menu"
                >
                    <X size={32} />
                </button>
            </div>

            <div className={styles.navLinks}>
                {navLinks.map((link) => (
                    <motion.div key={link.href} variants={itemVariants} style={{ width: '100%' }}>
                        <Link href={link.href} className={styles.navLink}>
                            {link.label}
                        </Link>
                    </motion.div>
                ))}
            </div>

            <motion.div className={styles.authButtons} variants={itemVariants}>
                {session ? (
                    <>
                        <Link
                            href={session.user.role === 'admin' ? '/admin' : '/dashboard/user'}
                            className={styles.btnPrimary}
                        >
                            <LayoutDashboard size={20} />
                            <span>Dashboard</span>
                        </Link>
                        <button
                            onClick={handleLogout}
                            className={styles.btnSecondary}
                        >
                            <LogOut size={20} />
                            <span>Logout</span>
                        </button>
                    </>
                ) : (
                    <>
                        <Link href="/login" className={styles.btnGhost}>
                            <LogIn size={20} />
                            <span>Login</span>
                        </Link>
                        <Link href="/register" className={styles.btnPrimary}>
                            <UserPlus size={20} />
                            <span>Sign Up</span>
                        </Link>
                    </>
                )}
            </motion.div>
        </motion.div>
    );
}
