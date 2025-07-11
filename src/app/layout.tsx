import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Star, Heart } from "lucide-react";

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
      <head>
        <meta name="google-site-verification" content="253Sy6sdVEeF1YuGPApoBdZ7p3o2a2Ftgvews0PzBWc" />
        <meta property="og:title" content="PixsBliss - Transform Your Screen with Stunning Anime Wallpapers" />
        <meta property="og:description" content="Explore high-quality anime wallpapers curated just for you. Download PixsBliss and transform your device with beautiful wallpapers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pixs-bliss-site.vercel.app/" />
        <meta property="og:image" content="https://pixs-bliss-site.vercel.app/pixs_icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PixsBliss - Transform Your Screen with Stunning Anime Wallpapers" />
        <meta name="twitter:description" content="Explore high-quality anime wallpapers curated just for you. Download PixsBliss and transform your device with beautiful wallpapers." />
        <meta name="twitter:image" content="https://pixs-bliss-site.vercel.app/pixs_icon.png" />
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "PixsBliss",
            "url": "https://pixs-bliss-site.vercel.app/",
            "description": "Explore high-quality anime wallpapers curated just for you. Download PixsBliss and transform your device with beautiful wallpapers.",
            "publisher": {
              "@type": "Organization",
              "name": "PixsBliss"
            }
          }
        `}</script>
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
        <footer className="bg-gradient-to-br from-[#1E3A8A] to-[#14B8A6] text-white py-12 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4">
                    <Image
                      src="/pixs_icon.png"
                      alt="PixsBliss App Icon"
                      fill
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-2xl font-bold">PixsBliss</h3>
                </div>
                <p className="text-white/80 mb-4 max-w-md">
                  Transform your device with stunning anime wallpapers. 
                  High-quality, curated content for anime lovers.
                </p>
                <div className="flex space-x-4">
                  <div className="flex items-center text-white/80">
                    <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm">4.8/5 Rating</span>
                  </div>
                  <div className="flex items-center text-white/80">
                    <Heart className="w-4 h-4 mr-1 fill-red-400 text-red-400" />
                    <span className="text-sm">10K+ Downloads</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-white/80">
                  <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                  <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                  <li><a href="#download" className="hover:text-white transition-colors">Download</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-white/80">
                  <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                  <li><Link href="/refund" className="hover:text-white transition-colors">Refund & Cancellation Policy</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
              <p>&copy; 2025 PixsBliss. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
