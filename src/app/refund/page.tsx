"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9FAFB] to-white">
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-[#1E3A8A] hover:text-[#14B8A6] transition-colors"
          >
            &larr; Back to Home
          </Link>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">
              💸 Refund &amp; Cancellation Policy
            </h1>
            <p className="text-xl text-gray-600">
              At <strong>PixsBliss</strong>, we offer premium anime wallpapers as digital downloads. Because these are <strong>non-returnable digital goods</strong>, we follow a transparent refund policy to protect both users and our platform.
            </p>
          </div>
          <div className="prose prose-lg max-w-none mx-auto">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-2">✅ No Refund After Successful Download</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Once a wallpaper is <strong>successfully downloaded to your device</strong>, the purchase is <strong>non-refundable</strong>.</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-2">🚫 Eligible Refund Conditions</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Payment was successfully deducted <strong>but</strong> the wallpaper was <strong>not unlocked</strong>, or</li>
                <li>The download <strong>did not complete</strong>, and the item remains inaccessible.</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-2">🕐 Refund Window</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Refund requests must be submitted within <strong>24 hours</strong> of the payment.</li>
                <li>Requests made after 24 hours <strong>will not</strong> be considered.</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-2">🔁 Refund Processing</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>If your issue is <strong>genuine</strong>, we will process the refund within <strong>7 business days</strong> to your original payment method.</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-2">📬 How to Request a Refund</h2>
              <div className="bg-[#F0FDFA] border border-[#14B8A6] rounded-xl p-6 text-center mb-4">
                <p className="text-lg font-semibold text-[#1E3A8A] mb-2">
                  Please fill out the refund/contact form at the link below:
                </p>
                <Link href="/contact" className="inline-block mt-2 px-6 py-3 bg-[#14B8A6] text-white font-bold rounded-lg shadow hover:bg-[#1E3A8A] transition-colors text-lg">
                  👉 Apply for Refund
                </Link>
                <p className="mt-6 text-gray-700 text-base">
                  Or email us directly at:
                  <br />
                  <a
                    href="mailto:pixsbliss.app+refunds@gmail.com"
                    className="text-[#14B8A6] font-semibold underline hover:text-[#1E3A8A] transition-colors"
                  >
                    pixsbliss.app+refunds@gmail.com
                  </a>
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-700 mt-4">
                <li>Your <strong>name</strong></li>
                <li><strong>Payment ID / receipt</strong></li>
                <li>Brief description of the issue</li>
                <li>Any relevant screenshots</li>
              </ul>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-[#1E3A8A] mb-2">❗Important Notes</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Refunds will <strong>not</strong> be issued for personal reasons (e.g., changed mind, wrong selection).</li>
                <li>Multiple refund claims from the same user may lead to account review or suspension.</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
} 