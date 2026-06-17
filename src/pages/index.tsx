import React from 'react';
import MovieCard from '../components/MovieCard';

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-background text-white">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-4xl font-black text-primary">Cinema Time | سينما تايم</h1>
        <div className="text-sm text-gray-400">Made by Nawaf (N58)</div>
      </header>
      
      <section>
        <h2 className="text-2xl font-bold mb-6 text-right">أفلام مختارة</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 text-right">
           <p className="col-span-full">تطبيق سينما تايم قيد التشغيل - يرجى تزويد مفتاح API الخاص بـ TMDB.</p>
        </div>
      </section>
      
      <footer className="mt-20 border-t border-white/10 pt-8 text-center text-gray-500">
        <p>نظام سينما تايم المتكامل - Cinema Time Production</p>
        <p className="mt-2 text-xs">Developed by N58 / Nawaf</p>
      </footer>
    </div>
  );
}