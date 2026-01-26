import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Trekking Packages - Nature Navigation",
    description: "Explore our premium trekking packages in the Himalayas. From Kedarkantha to Rupin Pass, find your perfect adventure.",
};

export default function TreksLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
