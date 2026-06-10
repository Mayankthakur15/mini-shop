import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white mt-24 py-8 px-6 text-center text-xs text-gray-400 tracking-wider">
      <p>© {new Date().getFullYear()} ELEMENT STORE. ALL RIGHTS RESERVED.</p>
    </footer>
  );
}