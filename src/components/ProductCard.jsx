import React from 'react';
import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
  return (
    <motion.div 
      whileHover={{ y: -6 }}
      className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex flex-col justify-between"
    >
      <div>
        <div className="aspect-square rounded-xl bg-gray-50 overflow-hidden mb-4">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <h4 className="font-semibold text-gray-800 text-base mb-1">{product.name}</h4>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{product.desc}</p>
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold text-lg">${product.price}</span>
        <button className="bg-black text-white text-xs px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
          View Detail
        </button>
      </div>
    </motion.div>
  );
}