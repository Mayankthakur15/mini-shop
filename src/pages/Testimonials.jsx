import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h2 className="text-3xl font-bold tracking-tight mb-12">What Our Customers Say</h2>
      <div className="space-y-8">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
          <p className="italic text-gray-600">"The aesthetic matches my desk setup flawlessly. Delivery was fast and the unboxing felt premium."</p>
          <h4 className="font-bold text-sm mt-4 text-gray-900">— Sarah K.</h4>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm">
          <p className="italic text-gray-600">"Incredible attention to detail. No unnecessary bells and whistles—just pure, clean minimalist hardware."</p>
          <h4 className="font-bold text-sm mt-4 text-gray-900">— James L.</h4>
        </motion.div>
      </div>
    </main>
  );
}