import React from 'react';
import ProductCard from '../components/ProductCard';

const PRODUCTS = [
  { id: 1, name: 'Minimalist Wireless Headphones', price: 129, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80', desc: 'High-fidelity sound, wrapped in pure comfort.' },
  { id: 2, name: 'Sleek Smart Watch', price: 199, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80', desc: 'Track your day with timeless, clean aesthetics.' },
  { id: 3, name: 'Premium Leather Wallet', price: 45, image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80', desc: 'Slim design, genuine materials.' },
  { id: 4, name: 'Mechanical Matte Keyboard', price: 89, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80', desc: 'Satisfying clicks, beautiful backlighting.' },
];

export default function Shop() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-extrabold mb-8 tracking-tight">Our Collection</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PRODUCTS.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </main>
  );
}