
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { blogsData } from '@/data/blogs';
import styles from './page.module.css';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = blogsData.find((b) => b.slug === slug);

    if (!blog) {
        return {
            title: 'Blog Not Found',
        };
    }

    return {
        title: `${blog.title} | Nature Navigation`,
        description: blog.excerpt,
    };
}

export async function generateStaticParams() {
    return blogsData.map((blog) => ({
        slug: blog.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const blog = blogsData.find((b) => b.slug === slug);

    if (!blog) {
        notFound();
    }

    return (
        <article className={styles.container}>
            <Link href="/blog" className={styles.backLink}>
                ← Back to Blog
            </Link>

            <header className={styles.header}>
                <div className={styles.meta}>
                    <span className={styles.date}>{blog.date}</span>
                    <span className={styles.author}>By {blog.author}</span>
                </div>
                <h1 className={styles.title}>{blog.title}</h1>
                <div className={styles.tags}>
                    {blog.tags.map(tag => (
                        <span key={tag} className={styles.tag}>#{tag}</span>
                    ))}
                </div>
            </header>

            <div className={styles.featuredImage}>
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className={styles.image}
                    priority
                />
            </div>

            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            <footer className={styles.footer}>
                <h3>Ready to trek?</h3>
                <p>Explore our upcoming treks or contact us for a customized plan.</p>
                <div className={styles.footerLinks}>
                    <Link href="/treks" className={styles.ctaButton}>Explore Treks</Link>
                    <Link href="/contact" className={styles.secondaryButton}>Contact Us</Link>
                </div>
            </footer>
        </article>
    );
}
