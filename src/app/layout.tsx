import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../app/css/globals.css";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "News Homepage | Frontend Mentor Challenge",
    description: "A Frontend Mentor challenge, labeled as junior difficulty",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en-US" className={inter.className}>
            <body>{children}</body>
        </html>
    );
}
