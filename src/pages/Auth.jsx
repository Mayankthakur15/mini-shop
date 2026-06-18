import React, { useState } from 'react';
import { supabase } from '../supabaseClient';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async (e) => {
    e.preventDefault();
    if (!email || !password) return alert('Please fill in all fields');

    try {
      setLoading(true);
      
      if (isSignUp) {
        // Sign Up Action
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        alert('Registration successful! Check your email for a confirmation link.');
      } else {
        // Log In Action
        const { data, error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        alert('Logged in successfully!');
      }
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="max-w-md mx-auto px-6 py-16 mt-12 bg-white border border-gray-200 rounded-xl shadow-sm">
      <h2 className="text-2xl font-extrabold text-center mb-6 tracking-tight">
        {isSignUp ? 'Create an Account' : 'Welcome Back'}
      </h2>

      <form onSubmit={handleAuth} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2.5 border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-lg text-sm shadow transition disabled:opacity-50"
        >
          {loading ? 'Processing...' : isSignUp ? 'Sign Up' : 'Log In'}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-500">
        {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
        <button
          type="button"
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-blue-600 font-semibold hover:underline"
        >
          {isSignUp ? 'Log In here' : 'Sign Up here'}
        </button>
      </div>
    </main>
  );
}