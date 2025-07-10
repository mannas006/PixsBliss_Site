import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PixsBliss - Transform Your Screen with Stunning Anime Wallpapers",
  description: "Explore high-quality anime wallpapers curated just for you. Download PixsBliss and transform your device with beautiful wallpapers.",
  keywords: "anime wallpapers, mobile app, wallpapers, anime, download",
  authors: [{ name: "PixsBliss Team" }],
  openGraph: {
    title: "PixsBliss - Stunning Anime Wallpapers",
    description: "Transform your screen with high-quality anime wallpapers",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
