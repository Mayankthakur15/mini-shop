import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Auth from './pages/Auth';

export default function App() {
  const [session, setSession] = useState(null);
  // Simple state to switch pages without breaking your folder setup
  const [currentPage, setCurrentPage] = useState('home'); 

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setCurrentPage('home');
    alert('Logged out!');
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* HEADER / NAVIGATION */}
      <header className="border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <button onClick={() => setCurrentPage('home')} className="font-black text-xl tracking-tight uppercase">
            Mini-Shop
          </button>
          
          <div className="flex items-center gap-6 text-sm font-medium">
            <button onClick={() => setCurrentPage('home')} className={`hover:text-blue-600 ${currentPage === 'home' ? 'text-blue-600' : 'text-gray-600'}`}>Home</button>
            <button onClick={() => setCurrentPage('shop')} className={`hover:text-blue-600 ${currentPage === 'shop' ? 'text-blue-600' : 'text-gray-600'}`}>Shop All</button>
            
            <span className="text-gray-300">|</span>

            {session ? (
              <div className="flex items-center gap-3">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600 font-mono">{session.user.email}</span>
                <button onClick={handleLogout} className="text-red-600 hover:underline font-semibold">Logout</button>
              </div>
            ) : (
              <button onClick={() => setCurrentPage('login')} className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-1.5 rounded-md text-xs font-semibold shadow transition">
                Admin Login
              </button>
            )}
          </div>
        </div>
      </header>

      {/* DYNAMIC PAGE ROUTING */}
      <div className="animate-fadeIn">
        {currentPage === 'home' && <Home />}
        {currentPage === 'shop' && <Shop session={session} />}
        {currentPage === 'login' && (
          session ? (setCurrentPage('shop'), null) : <Auth />
        )}
      </div>
    </div>
  );
}