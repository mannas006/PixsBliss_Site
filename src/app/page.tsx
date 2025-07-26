'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Download, 
  Shield, 
  CheckCircle
} from 'lucide-react';
import Gallery from './Gallery';
import FeaturesSection from './FeaturesSection';

export default function Home() {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.pixsbliss.app.mobileApp';
  const [downloadState, setDownloadState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleDownload = async () => {
    if (downloadState === 'loading') return;
    setDownloadState('loading');
    setTimeout(() => {
      window.open(playStoreUrl, '_blank');
      setDownloadState('success');
      setTimeout(() => setDownloadState('idle'), 1200);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFB] to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/10 to-[#14B8A6]/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-[#1E3A8A] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Transform Your Screen with
              <span className="block text-[#14B8A6]">Stunning Anime Wallpapers</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore high-quality anime wallpapers curated just for you. 
              Download PixsBliss and give your device the perfect look it deserves.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button
                onClick={handleDownload}
                disabled={downloadState === 'loading'}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-[#1E3A8A] to-[#14B8A6] rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {downloadState === 'loading' ? (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center"
                  >
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Opening Play Store...
                  </motion.span>
                ) : downloadState === 'success' ? (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center text-white"
                  >
                    <CheckCircle className="w-5 h-5 mr-2 text-white" />
                    Redirected to Play Store!
                  </motion.span>
                ) : (
                  <span className="flex items-center">
                    <Download className="w-5 h-5 mr-2" />
                    Download from Play Store
                  </span>
                )}
              </button>
              
              <p className="text-sm text-gray-500 mt-4 flex items-center justify-center">
                <Shield className="w-4 h-4 mr-1" />
                Available on Google Play Store
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Features Section */}
      <FeaturesSection />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-[#14B8A6] mb-2">How do I download wallpapers?</h3>
              <p className="text-gray-700">Simply browse the collection, tap on your favorite wallpaper, and click the download button to save it to your device instantly.</p>
                </div>
            <div>
              <h3 className="text-xl font-semibold text-[#14B8A6] mb-2">Is PixsBliss free to use?</h3>
              <p className="text-gray-700">Yes! PixsBliss offers a wide range of high-quality anime wallpapers for free. Some premium content may be available in the future.</p>
        </div>
            <div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#14B8A6] mb-2">Are all wallpapers anime-themed?</h3>
              <p className="text-gray-700">Yes, PixsBliss specializes in high-quality anime wallpapers curated for anime fans. All wallpapers are anime-themed.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#14B8A6] mb-2">Will there be other types of wallpapers in the future?</h3>
              <p className="text-gray-700">Currently, PixsBliss focuses on anime wallpapers. We may consider expanding to other categories based on user feedback.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 bg-gradient-to-br from-[#1E3A8A] to-[#14B8A6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Screen?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of users who have already discovered the perfect anime wallpapers with PixsBliss.
            </p>
            <button
              onClick={handleDownload}
              disabled={downloadState === 'loading'}
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-[#1E3A8A] bg-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {downloadState === 'loading' ? (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center"
                >
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-[#1E3A8A] mr-2"></div>
                  Opening Play Store...
                </motion.span>
              ) : downloadState === 'success' ? (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Redirected to Play Store!
                </motion.span>
              ) : (
                <span className="flex items-center">
                  <Download className="w-5 h-5 mr-2" />
                  Download Now - It&apos;s Free!
                </span>
              )}
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
