import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Trash2, Edit3, Check, X } from 'lucide-react';

export default function ProductCard({ product, onRefresh }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newPrice, setNewPrice] = useState(product.price);

  // 1. DELETE FUNCTION
  const handleDelete = async () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${product.name}"?`);
    if (!confirmDelete) return;

    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', product.id);

    if (error) {
      alert('Error deleting item: ' + error.message);
    } else {
      onRefresh(); // Instantly refresh shop layout
    }
  };

  // 2. UPDATE FUNCTION
  const handleUpdatePrice = async () => {
    if (!newPrice || isNaN(newPrice)) return;

    const { error } = await supabase
      .from('products')
      .update({ price: parseFloat(newPrice) })
      .eq('id', product.id);

    if (error) {
      alert('Error updating price: ' + error.message);
    } else {
      setIsEditing(false);
      onRefresh(); // Instantly refresh shop layout
    }
  };

  return (
    <div className="group relative border border-gray-100 rounded-2xl p-4 bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between">
      <div>
        {/* IMAGE HOVER ACTION CONTAINER */}
        <div className="aspect-square w-full overflow-hidden rounded-xl bg-gray-50 relative">
          <img 
            src={product.image_url} 
            alt={product.name} 
            className="h-full w-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
          />
          
          {/* TRASH (DELETE) ICON FLOATING BUTTON */}
          <button 
            onClick={handleDelete}
            className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs p-2 rounded-xl text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors shadow-xs"
            title="Delete Product"
          >
            <Trash2 size={16} />
          </button>
        </div>

        {/* CONTENT DETAILS */}
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-800 tracking-tight">{product.name}</h3>
          
          {/* INLINE CONDITIONAL PRICE EDITING */}
          <div className="mt-2 flex items-center justify-between min-h-[36px]">
            {isEditing ? (
              <div className="flex items-center gap-1.5 w-full">
                <span className="text-xs font-bold text-gray-400">$</span>
                <input 
                  type="number"
                  step="0.01"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  className="w-20 bg-gray-50 border border-gray-200 rounded-lg px-2 py-1 text-xs font-bold outline-none focus:border-black"
                />
                <button onClick={handleUpdatePrice} className="p-1 bg-black text-white rounded-md hover:bg-gray-800">
                  <Check size={12} />
                </button>
                <button onClick={() => setIsEditing(false)} className="p-1 bg-gray-100 text-gray-500 rounded-md hover:bg-gray-200">
                  <X size={12} />
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between w-full">
                <p className="text-sm font-black text-gray-900">${Number(product.price).toFixed(2)}</p>
                <button 
                  onClick={() => setIsEditing(true)}
                  className="text-gray-400 hover:text-black p-1 transition-colors rounded-lg hover:bg-gray-50"
                  title="Edit Price"
                >
                  <Edit3 size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}