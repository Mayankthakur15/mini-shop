import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';

export default function Home() {
  return (
    <div className="animate-fadeIn">
      <Hero />
      <Categories />
    </div>
  );
}