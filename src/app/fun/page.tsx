'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function FunPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 dark:from-cyan-900 dark:via-purple-950 dark:to-pink-900">
      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-yellow-400/30 to-orange-500/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-400/30 to-indigo-600/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-green-400/20 to-emerald-500/20 rounded-full blur-3xl"
      />
      
      <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span>Back to Home</span>
          </Link>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent"
          >
            Fun Zone 🎉
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-xl text-foreground/80 mb-12"
          >
            Welcome to the fun page! This is where creativity meets playfulness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-background/80 backdrop-blur-sm border border-border rounded-lg p-6 shadow-lg"
              >
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-2">Fun Item {item}</h3>
                <p className="text-foreground/70">
                  Something exciting coming soon!
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

