import React, { useState, useEffect } from 'react';
import { supabase } from '../supabaseClient';
import ProductCard from '../components/ProductCard';

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  
  // Form State Fields
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  // 1. SELECT FUNCTION: Fetch products on mount
  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching items:', error.message);
    } else {
      setProducts(data || []);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 2. CREATE FUNCTION: Add item on button click
  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (!name || !price || !imageUrl) {
      alert('Please fill out all fields.');
      return;
    }

    setLoading(true);

    const { error } = await supabase
      .from('products')
      .insert([
        { 
          name: name, 
          price: parseFloat(price), 
          image_url: imageUrl 
        }
      ]);

    setLoading(false);

    if (error) {
      alert('Failed to add item: ' + error.message);
    } else {
      // Clear inputs, close panel, and refresh product grid
      setName('');
      setPrice('');
      setImageUrl('');
      setShowForm(false);
      fetchProducts(); 
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">The Collection</h1>
          <p className="text-sm text-gray-500 mt-1">Curated minimalist pieces for everyday utility.</p>
        </div>
        
        {/* Toggle Button to open/close entry form */}
        <button 
          onClick={() => setShowForm(!showForm)}
          className="bg-black text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          {showForm ? 'Cancel' : '＋ Add Product'}
        </button>
      </div>

      {/* RENDER DYNAMIC FORM PANEL */}
      {showForm && (
        <div className="mb-12 bg-white border border-gray-100 rounded-2xl p-6 max-w-xl mx-auto shadow-sm">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Add New Inventory Item</h3>
          <form onSubmit={handleAddProduct} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Product Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Minimalist Leather Wallet"
                className="w-full bg-gray-50 border border-gray-100 focus:border-black rounded-xl p-3 text-sm outline-none transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Price ($)</label>
                <input 
                  type="number" 
                  step="0.01"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="49.99"
                  className="w-full bg-gray-50 border border-gray-100 focus:border-black rounded-xl p-3 text-sm outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">Image URL</label>
                <input 
                  type="url" 
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full bg-gray-50 border border-gray-100 focus:border-black rounded-xl p-3 text-sm outline-none transition-colors"
                />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3.5 rounded-xl text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {loading ? 'Inserting Into Database...' : 'Save and Publish Item'}
            </button>
          </form>
        </div>
      )}

      {/* PRODUCT DISPLAY GRID */}
      {products.length === 0 ? (
        <div className="text-center py-12 text-gray-400 text-sm">
          No products found. Use the add button above to populate your database!
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onRefresh={fetchProducts} // Pass down down to allow DELETE or UPDATE hooks later
            />
          ))}
        </div>
      )}
    </div>
  );
}