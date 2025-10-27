'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Fun Box - Top Right Corner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="fixed top-20 right-4 md:right-8 z-40"
      >
        <Link href="/fun">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white rounded-lg shadow-lg p-4 cursor-pointer group hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <Sparkles size={20} className="group-hover:rotate-180 transition-transform duration-300" />
              <span className="font-semibold text-sm md:text-base">Fun</span>
            </div>
          </motion.div>
        </Link>
      </motion.div>

      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
