'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function IrrelevantPage() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-100 via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-950">
      {/* Animated gradient orbs */}
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
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-gray-200/20 to-gray-100/20 rounded-full blur-3xl"
      />
      
      {/* Subtle noise overlay */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.07] mix-blend-soft-light" style={{ backgroundImage: "url('data:image/svg+xml;utf8,\u003csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'120\' height=\'120\' viewBox=\'0 0 120 120\'\u003e\u003cfilter id=\'n\' x=\'-20%\' y=\'-20%\' width=\'140%\' height=\'140%\'\u003e\u003cfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/\u003e\u003cfeColorMatrix type=\'saturate\' values=\'0\'/\u003e\u003c/filter\u003e\u003crect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.4\'/\u003e\u003c/svg\u003e')" }} />

      <div className="max-w-4xl mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8 flex justify-start"
          >
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-background/80 backdrop-blur-md border border-border hover:bg-background transition-colors"
              >
                <ArrowLeft size={18} />
                <span>Back to Home</span>
              </motion.div>
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-6xl font-bold mb-3 text-foreground drop-shadow-sm"
          >
            Irrelevant Page 🤷
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mx-auto max-w-2xl text-lg md:text-xl text-foreground/90 mb-12 leading-relaxed"
          >
            This page is intentionally irrelevant. Sometimes the best things in life are the ones that don't matter.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { id: 1, title: 'Random Thoughts', emoji: '💭', desc: 'Thoughts that lead nowhere.' },
                { id: 2, title: 'Pointless Facts', emoji: '📚', desc: 'Knowledge you\'ll never need.' },
                { id: 3, title: 'Useless Info', emoji: '📝', desc: 'Information that serves no purpose.' },
                { id: 4, title: 'Trivial Matters', emoji: '🎲', desc: 'Things that don\'t really matter.' },
              ].map((item, idx) => (
                <motion.div
                  key={item.id}
                  whileHover={{ y: -6, rotate: 0.25 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-gray-200 via-gray-50 to-white shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
                >
                  <div className="relative h-full rounded-2xl bg-background/80 backdrop-blur-md border border-white/20 p-6">
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(80%_60%_at_0%_0%,rgba(255,255,255,0.18),transparent_60%),radial-gradient(60%_60%_at_100%_0%,rgba(255,255,255,0.12),transparent_50%)]" />
                    <div className="relative z-10">
                      <div className="text-4xl mb-4 drop-shadow-sm select-none">{item.emoji}</div>
                      <h3 className="text-xl font-semibold mb-2 tracking-tight">{item.title}</h3>
                      <p className="text-foreground/75 text-sm">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

