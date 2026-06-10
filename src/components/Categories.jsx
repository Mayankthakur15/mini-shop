import React from 'react';
import { motion } from 'framer-motion';

const CATS = [
  { name: 'Audio', img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80' },
  { name: 'Wearables', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80' },
  { name: 'Desk Setup', img: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80' }
];

export default function Categories() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-xl font-bold mb-6 tracking-tight text-gray-900">Browse Categories</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CATS.map((cat, i) => (
          <motion.div 
            whileHover={{ scale: 1.02 }}
            key={i} 
            className="h-48 rounded-2xl overflow-hidden relative group cursor-pointer shadow-sm"
          >
            <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-semibold text-xl tracking-wide">{cat.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}