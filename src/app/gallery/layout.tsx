import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery - Nature Navigation",
    description: "View stunning photos from our treks. See the beauty of the Himalayas through our lens.",
};

export default function GalleryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
