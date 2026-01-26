import type { Metadata, Viewport } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { SessionProvider } from 'next-auth/react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://naturenavigation.in'),
  title: {
    default: "Nature Navigation - Trekking in Uttarakhand",
    template: "%s | Nature Navigation"
  },
  description: "Join Nature Navigation for unforgettable trekking experiences across Uttarakhand. Based in Uttarkashi, we organize premium treks throughout the Himalayas.",
  keywords: ["trekking", "uttarakhand", "uttarkashi", "hiking", "himalaya", "adventure", "nature", "trekking packages", "Kedarkantha", "Valley of Flowers"],
  authors: [{ name: "Rahul Rawat" }],
  creator: "Nature Navigation",
  publisher: "Nature Navigation",
  openGraph: {
    title: "Nature Navigation - Trekking in Uttarakhand",
    description: "Join Nature Navigation for unforgettable trekking experiences across Uttarakhand. Authorized and experienced trek operators.",
    url: 'https://naturenavigation.in',
    siteName: 'Nature Navigation',
    images: [
      {
        url: '/logo.jpg',
        width: 800,
        height: 600,
        alt: 'Nature Navigation Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Nature Navigation - Trekking in Uttarakhand",
    description: "Premium trekking experiences in the Himalayas. Book your next adventure with us.",
    images: ['/logo.jpg'],
  },
  icons: {
    icon: '/logo.jpg',
    shortcut: '/logo.jpg',
    apple: '/logo.jpg',
  },
  manifest: '/manifest.webmanifest',
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_ID',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${outfit.variable} ${inter.variable}`}>
        <SessionProvider>
          <GoogleAnalytics GA_MEASUREMENT_ID="G-XXXXXXXXXX" />
          <Navbar />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Nature Navigation",
                "url": "https://naturenavigation.in",
                "logo": "https://naturenavigation.in/logo.jpg",
                "sameAs": [
                  "https://www.instagram.com/naturenavigation_/",
                  "https://www.instagram.com/sinu_rawat_1/"
                ],
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+91 95481 77756",
                  "contactType": "customer service",
                  "email": "naturenavigation56@gmail.com"
                }
              })
            }}
          />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <FloatingContact />
        </SessionProvider>
      </body>
    </html>
  );
}
