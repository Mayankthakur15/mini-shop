import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-16 min-h-[70vh] flex flex-col justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* LEFT: CONTACT INFO */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Connect With Us</span>
            <h2 className="text-4xl font-extrabold tracking-tight mt-1 text-gray-900">Get in touch.</h2>
            <p className="text-gray-500 mt-4 max-w-sm leading-relaxed">
              Have a question about our curated pieces, shipping timelines, or custom orders? Drop a line below.
            </p>
          </motion.div>

          <div className="space-y-4 pt-4">
            <div className="flex items-center gap-4 text-gray-600">
              <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                <Mail size={18} className="text-black" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Email Support</p>
                <p className="text-sm font-semibold text-gray-800">thakurmayank@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-600">
              <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                <Phone size={18} className="text-black" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Call/Text</p>
                <p className="text-sm font-semibold text-gray-800">+91 0987654321
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-600">
              <div className="p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
                <MapPin size={18} className="text-black" />
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium">Studio Location</p>
                <p className="text-sm font-semibold text-gray-800">Mumbai, Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: ANIMATED MINIMALIST FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white border border-gray-100 p-8 rounded-3xl shadow-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
              <input 
                type="text" 
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                placeholder="John Doe"
                className="w-full bg-gray-50/50 border border-gray-100 focus:border-black rounded-xl p-3.5 text-sm outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
              <input 
                type="email" 
                value={form.email}
                onChange={(e) => setForm({...form, email: e.target.value})}
                placeholder="hello@domain.com"
                className="w-full bg-gray-50/50 border border-gray-100 focus:border-black rounded-xl p-3.5 text-sm outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Your Message</label>
              <textarea 
                rows="4"
                value={form.message}
                onChange={(e) => setForm({...form, message: e.target.value})}
                placeholder="Write your note here..."
                className="w-full bg-gray-50/50 border border-gray-100 focus:border-black rounded-xl p-3.5 text-sm outline-none transition-colors resize-none"
                required
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors shadow-sm"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* TOAST SUCCESS NOTIFICATION */}
      <AnimatePresence>
        {submitted && (
          <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-6 right-6 bg-black text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 z-50 text-sm font-medium border border-gray-800"
          >
            <CheckCircle size={18} className="text-green-400" />
            <span>Message sent successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}