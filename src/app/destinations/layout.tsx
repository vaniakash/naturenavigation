import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Destinations - Nature Navigation",
    description: "Discover the breathtaking destinations we cover in Uttarakhand and Himachal Pradesh.",
};

export default function DestinationsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
