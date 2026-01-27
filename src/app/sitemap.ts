import { MetadataRoute } from 'next';
import { treksData } from '@/data/treks';
import { blogsData } from '@/data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://naturenavigation.in';

    // Static routes
    const routes = [
        '',
        '/about',
        '/treks',
        '/blog',
        '/gallery',
        '/faq',
        '/contact',
        '/destinations',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    // Dynamic trek routes
    const trekRoutes = treksData.map((trek) => ({
        url: `${baseUrl}/treks/${trek.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    // Dynamic blog routes
    const blogRoutes = blogsData.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(blog.date), // Use blog date as last modified
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [...routes, ...trekRoutes, ...blogRoutes];
}
