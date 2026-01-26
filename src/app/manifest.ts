import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Nature Navigation',
        short_name: 'Nature Nav',
        description: 'Premier trekking experiences in the Himalayas. Based in Uttarkashi.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#16a34a', // matching the nature/green theme
        icons: [
            {
                src: '/logo.webp',
                sizes: '192x192',
                type: 'image/webp',
            },
            {
                src: '/logo.webp',
                sizes: '512x512',
                type: 'image/webp',
            },
            {
                src: '/logo.jpg',
                sizes: 'any',
                type: 'image/jpeg',
            },
        ],
    };
}
