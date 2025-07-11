import { motion } from 'framer-motion';
import { Sparkles, RefreshCw, Image as ImageIcon, Heart } from 'lucide-react';

const features = [
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "High-Quality Curated Wallpapers",
    description: "Discover handpicked anime wallpapers in stunning resolution, carefully curated for the best visual experience."
  },
  {
    icon: <RefreshCw className="w-8 h-8" />,
    title: "Smooth Browsing Experience",
    description: "Enjoy seamless navigation with pull-to-refresh functionality and smooth scrolling through thousands of wallpapers."
  },
  {
    icon: <ImageIcon className="w-8 h-8" />,
    title: "Instant Preview & Download",
    description: "Preview wallpapers instantly and download them with a single tap. No waiting, no complications."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Regular Updates",
    description: "Get fresh content regularly with new categories and wallpapers added frequently to keep your collection growing."
  }
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mb-4">
            Why Choose PixsBliss?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of quality, performance, and beauty
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-[#F9FAFB] to-white border border-gray-100 hover:shadow-lg transition-all duration-300"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1E3A8A] to-[#14B8A6] rounded-full text-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1E3A8A] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 