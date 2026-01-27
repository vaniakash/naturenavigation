
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/data/blogs';
import styles from './BlogCard.module.css';

interface BlogCardProps {
    blog: BlogPost;
}

export default function BlogCard({ blog }: BlogCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.imageContainer}>
                <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className={styles.content}>
                <div className={styles.meta}>
                    <span className={styles.date}>{blog.date}</span>
                    <span className={styles.tag}>{blog.tags[0]}</span>
                </div>
                <h3 className={styles.title}>
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h3>
                <p className={styles.excerpt}>{blog.excerpt}</p>
                <Link href={`/blog/${blog.slug}`} className={styles.readMore}>
                    Read More_
                </Link>
            </div>
        </div>
    );
}
