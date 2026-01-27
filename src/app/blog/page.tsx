
import { blogsData } from '@/data/blogs';
import BlogCard from '@/components/blog/BlogCard';
import styles from './page.module.css';

export const metadata = {
    title: 'Travel Blog | Nature Navigation',
    description: 'Read our latest travel guides, trekking tips, and stories from the Himalayas. Expert advice for your next adventure in Uttarakhand and Himachal.',
};

export default function BlogListingPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Nature Navigation Blog</h1>
                <p className={styles.subtitle}>
                    Stories, guides, and tips from the heart of the Himalayas.
                </p>
            </header>

            <div className={styles.grid}>
                {blogsData.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                ))}
            </div>
        </div>
    );
}
