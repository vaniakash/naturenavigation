'use client';

import { useState } from 'react';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import styles from './login.module.css';

export default function LoginPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const result = await signIn('credentials', {
                email: formData.email,
                password: formData.password,
                redirect: false,
            });

            if (result?.error) {
                setError('Invalid email or password');
                setLoading(false);
                return;
            }

            // Fetch the updated session to determine the role
            const response = await fetch('/api/auth/session');
            const session = await response.json();

            if (session?.user?.role === 'admin') {
                router.push('/admin');
            } else {
                router.push('/dashboard/user');
            }

            router.refresh();
        } catch (err) {
            setError('An error occurred. Please try again.');
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <h1 className={styles.title}>
                    Welcome <span className={styles.highlight}>Back</span>
                </h1>
                <p className={styles.subtitle}>
                    Login to access your dashboard
                </p>

                {error && (
                    <div className={styles.error}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email" className={styles.label}>
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            className={styles.input}
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }

                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <label htmlFor="password" className={styles.label}>
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            required
                            className={styles.input}
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({ ...formData, password: e.target.value })
                            }

                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className={styles.submitBtn}
                    >
                        {loading ? (
                            <div className={styles.spinner}></div>
                        ) : (
                            'Login'
                        )}
                    </button>
                </form>

                <div className={styles.divider}>
                    <span>OR</span>
                </div>

                <button
                    onClick={() => signIn('google', { callbackUrl: '/dashboard/user' })}
                    className={styles.googleBtn}
                    type="button"
                >
                    <img
                        src="https://www.google.com/favicon.ico"
                        alt="Google"
                        className={styles.googleIcon}
                    />
                    Login with Google
                </button>

                <div className={styles.footer}>
                    <p>
                        Don't have an account?{' '}
                        <Link href="/register" className={styles.link}>
                            Create one
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
