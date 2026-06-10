import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-gray-100 px-8 py-4 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold tracking-widest">Thakur Electronics</Link>
      <div className="flex gap-8 text-sm font-medium text-gray-600">
  <Link to="/" className="hover:text-black transition-colors">Home</Link>
  <Link to="/shop" className="hover:text-black transition-colors">Shop</Link>
  <Link to="/testimonials" className="hover:text-black transition-colors">Reviews</Link>
  <Link to="/contact" className="hover:text-black transition-colors">Contact</Link> {/* Added Link */}
</div>
      <button className="p-2 hover:bg-gray-100 rounded-full relative">
        <ShoppingBag size={20} />
      </button>
    </nav>
  );
}