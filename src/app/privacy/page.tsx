'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowLeft, Eye, Lock, Database } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
              Privacy Policy
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
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-2" />
                Information We Collect
              </h2>
              <p className="text-gray-700 mb-4">
                <strong>PixsBliss</strong> respects your privacy. This app does <strong>not collect personal data</strong> from users unless you log in as an <strong>admin</strong>.
              </p>
              
              <div className="bg-blue-50 border-l-4 border-[#1E3A8A] p-4 rounded mb-4">
                <h3 className="font-semibold text-[#1E3A8A] mb-2">For Regular Users:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>No personal information is collected</li>
                  <li>No account or sign-up is required to browse or download wallpapers</li>
                  <li>The app may store favorite wallpapers <strong>locally on your device</strong> only</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-[#14B8A6] p-4 rounded">
                <h3 className="font-semibold text-[#14B8A6] mb-2">For Admin Users:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>We collect only your <strong>email and profile name</strong> during Google Sign-In</li>
                  <li>This data is used solely for admin identification and access control</li>
                  <li>This data is securely stored in <strong>Firebase Authentication</strong> and not shared with third parties</li>
                </ul>
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
                <Lock className="w-6 h-6 mr-2" />
                How We Use Your Information
              </h2>
              <p className="text-gray-700 mb-4">
                We use the collected information to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Provide and maintain the PixsBliss wallpaper service</li>
                <li>Enable admin access control and authentication</li>
                <li>Store your favorite wallpapers locally on your device</li>
                <li>Ensure secure access to admin features</li>
                <li>Maintain app functionality and performance</li>
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
                <Database className="w-6 h-6 mr-2" />
                Data Storage and Security
              </h2>
              <p className="text-gray-700 mb-4">
                Your data security is our top priority:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Wallpapers are hosted on <strong>Cloudinary</strong></li>
                <li>Metadata like titles or categories is stored in <strong>Firebase Firestore</strong></li>
                <li>Admin authentication data is securely stored in <strong>Firebase Authentication</strong></li>
                <li>Favorite wallpapers are stored locally on your device only</li>
                <li>We use industry-standard encryption for data protection</li>
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
                Third-Party Services
              </h2>
              <p className="text-gray-700 mb-4">
                PixsBliss uses the following third-party services:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Cloudinary</strong> - for hosting and serving wallpapers</li>
                <li><strong>Firebase Firestore</strong> - for storing wallpaper metadata</li>
                <li><strong>Firebase Authentication</strong> - for admin user authentication</li>
                <li><strong>Google Sign-In</strong> - for admin authentication (email and profile name only)</li>
              </ul>
              <p className="text-gray-700 mt-4">
                These services have their own privacy policies, and we encourage you to review them.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">
                Your Rights
              </h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Contact us to delete your admin account or data</li>
                <li>Use the app without creating an account (regular users)</li>
                <li>Store favorite wallpapers locally on your device</li>
                <li>Contact us with privacy concerns</li>
              </ul>
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded mt-4">
                <p className="text-gray-700">
                  <strong>Important:</strong> No personal information is ever sold or monetized.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">
                App Permissions
              </h2>
              <p className="text-gray-700 mb-4">
                PixsBliss requires the following permissions to function properly:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li><strong>Storage permission</strong> - to save wallpapers to your device</li>
                <li><strong>Network access</strong> - to fetch wallpapers from the cloud</li>
              </ul>
              <p className="text-gray-700 mt-4">
                These permissions are essential for the app's core functionality and are used only for their intended purposes.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.6 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-4">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gradient-to-r from-[#1E3A8A]/10 to-[#14B8A6]/10 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> manasdey.iron006@gmail.com<br />
                  <strong>Subject:</strong> Privacy Policy Inquiry
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </main>
    </div>
  );
} 