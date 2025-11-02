'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function FunPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-green-200 via-green-50 to-white dark:from-green-900 dark:via-green-100 dark:to-white">
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
      
      {/* Subtle noise overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.07] mix-blend-soft-light" style={{ backgroundImage: "url('data:image/svg+xml;utf8,\u003csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\' viewBox=\'0 0 120 120\'\u003e\u003cfilter id=\'n\' x=\'-20%\' y=\'-20%\' width=\'140%\' height=\'140%\'\u003e\u003cfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/\u003e\u003cfeColorMatrix type=\'saturate\' values=\'0\'/\u003e\u003c/filter\u003e\u003crect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.4\'/\u003e\u003c/svg\u003e')" }} />

      <div className="max-w-5xl mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white shadow-sm backdrop-blur transition hover:bg-white/20 dark:border-white/10"
            >
              <ArrowLeft size={18} />
              <span>Back to Home</span>
            </Link>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-6xl font-bold mb-3 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm"
          >
            Fun Zone 🎉
          </motion.h1>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs tracking-wide uppercase text-white/90 shadow-sm backdrop-blur-sm mb-8">
            <span>Playground</span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 animate-pulse" />
          </div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mx-auto max-w-2xl text-lg md:text-xl text-foreground/90 mb-12 leading-relaxed"
          >
            Welcome to the fun page! This is where creativity meets playfulness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { id: 1, title: 'Color Splash', emoji: '🎨', desc: 'A palette of happy accidents.' },
              { id: 2, title: 'Tiny Party', emoji: '🎈', desc: 'Confetti for your thoughts.' },
              { id: 3, title: 'Groove Box', emoji: '🎵', desc: 'Vibes on infinite loop.' },
              { id: 4, title: 'Pixel Pet', emoji: '🧸', desc: 'Cuteness, safely contained.' },
              { id: 5, title: 'Zen Garden', emoji: '🪴', desc: 'Serenity with a sprinkle of chaos.' },
              { id: 6, title: 'Star Field', emoji: '✨', desc: 'Make a little wish.' },
            ].map((item, idx) => (
              <motion.div
                key={item.id}
                whileHover={{ y: -6, rotate: 0.25 }}
                whileTap={{ scale: 0.98 }}
                className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-green-200 via-green-50 to-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                <div className="relative h-full rounded-2xl bg-background/80 backdrop-blur-md border border-white/20 p-6">
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(80%_60%_at_0%_0%,rgba(255,255,255,0.18),transparent_60%),radial-gradient(60%_60%_at_100%_0%,rgba(255,255,255,0.12),transparent_50%)]" />
                  <div className="relative z-10">
                    <div className="text-4xl mb-4 drop-shadow-sm select-none">{item.emoji}</div>
                    <h3 className="text-xl font-semibold mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-foreground/75 text-sm mb-4">{item.desc}</p>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/90 border border-white/15">
                        Ready soon
                      </span>
                      <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-white/15 px-5 py-2.5 text-sm font-medium text-white backdrop-blur border border-white/20 shadow-sm transition hover:bg-white/25"
            >
              <ArrowLeft size={18} />
              <span>Back to Home</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

