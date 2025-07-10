'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, XCircle } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFB] to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/"
            className="inline-flex items-center text-[#1E3A8A] hover:text-[#14B8A6] transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative w-16 h-16">
                <Image
                  src="/pixs_icon.png"
                  alt="PixsBliss App Icon"
                  fill
                  className="rounded-xl"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">
                Acceptance of Terms
              </h2>
              <p className="text-gray-700 mb-4">
                By downloading, installing, or using PixsBliss, you agree to be bound by these Terms of Service. 
                If you do not agree to these terms, please do not use our application.
              </p>
              <div className="bg-blue-50 border-l-4 border-[#1E3A8A] p-4 rounded">
                <p className="text-gray-700">
                  <strong>Note:</strong> These terms apply to all users of PixsBliss, regardless of how you access or use the application.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 mr-2 text-green-500" />
                Permitted Uses
              </h2>
              <p className="text-gray-700 mb-4">
                You may use PixsBliss for the following purposes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Downloading and setting anime wallpapers on your personal devices</li>
                <li>Browsing and exploring wallpaper collections</li>
                <li>Creating personal favorites and collections</li>
                <li>Sharing wallpapers with friends and family (for personal use only)</li>
                <li>Using the app for non-commercial purposes</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4 flex items-center">
                <XCircle className="w-6 h-6 mr-2 text-red-500" />
                Prohibited Uses
              </h2>
              <p className="text-gray-700 mb-4">
                You may not use PixsBliss for any of the following:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Commercial use or redistribution of wallpapers</li>
                <li>Modifying, reverse engineering, or decompiling the app</li>
                <li>Attempting to gain unauthorized access to our systems</li>
                <li>Using the app to distribute malware or harmful content</li>
                <li>Violating any applicable laws or regulations</li>
                <li>Impersonating PixsBliss or its representatives</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">
                Intellectual Property Rights
              </h2>
              <p className="text-gray-700 mb-4">
                PixsBliss respects intellectual property rights:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>The PixsBliss app and its code are owned by PixsBliss</li>
                <li>Wallpapers are provided for personal use only</li>
                <li>We do not claim ownership of the wallpaper content</li>
                <li>Users are responsible for respecting copyright laws</li>
                <li>Report copyright violations to our support team</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">
                Disclaimers and Limitations
              </h2>
              <p className="text-gray-700 mb-4">
                PixsBliss is provided &quot;as is&quot; without warranties:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>We do not guarantee uninterrupted service</li>
                <li>App updates may change features or functionality</li>
                <li>We are not responsible for device compatibility issues</li>
                <li>Download speeds depend on your internet connection</li>
                <li>We reserve the right to modify or discontinue the service</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">
                Termination
              </h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your access to PixsBliss:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>For violations of these Terms of Service</li>
                <li>If you engage in harmful or illegal activities</li>
                <li>At our discretion for any reason</li>
                <li>Upon your request to delete your account</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Upon termination, you must cease all use of the app and delete it from your devices.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">
                Changes to Terms
              </h2>
              <p className="text-gray-700 mb-4">
                We may update these Terms of Service from time to time:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Changes will be posted in the app and on our website</li>
                <li>Continued use constitutes acceptance of new terms</li>
                <li>We will notify users of significant changes</li>
                <li>You can review the current terms at any time</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.7 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">
                Contact Information
              </h2>
              <p className="text-gray-700 mb-4">
                If you have questions about these Terms of Service:
              </p>
              <div className="flex justify-center">
                <a href="/contact" className="px-6 py-3 bg-[#14B8A6] text-white font-bold rounded-lg shadow hover:bg-[#1E3A8A] transition-colors text-lg">
                  Contact Us
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
} 