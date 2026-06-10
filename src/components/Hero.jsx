import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <header className="max-w-6xl mx-auto px-6 py-20 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-gray-950"
      >
        Less is beautiful.
      </motion.h2>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-gray-500 max-w-md mx-auto text-lg mb-8"
      >
        Discover curated daily essentials built with premium quality and an uncompromising minimalist aesthetic.
      </motion.p>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
        <Link to="/shop" className="bg-black text-white px-8 py-3.5 rounded-full font-medium shadow-sm hover:bg-gray-800 transition-colors">
          Explore Collection
        </Link>
      </motion.div>
    </header>
  );
}