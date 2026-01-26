import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "FAQs - Nature Navigation",
    description: "Find answers to common questions about trekking with Nature Navigation.",
};

export default function FAQLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
