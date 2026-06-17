import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Play, Info } from 'lucide-react';

const MovieRow = ({ title }: { title: string }) => (
  <div className="mb-8">
    <h2 className="text-xl md:text-2xl font-semibold mb-4 px-8 md:px-16 text-right">{title}</h2>
    <div className="relative group">
      <div className="flex gap-4 overflow-x-scroll px-8 md:px-16 hide-scrollbar scroll-smooth">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div 
            key={i}
            className="min-w-[160px] md:min-w-[220px] aspect-[2/3] relative rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:z-10 focus:outline-none focus:ring-4 focus:ring-[#e50914] focus:ring-offset-2 focus:ring-offset-[#111111]"
            tabIndex={0}
          >
            <img 
              src={`https://images.tmdb.org/t/p/w500/placeholder.jpg`} 
              className="w-full h-full object-cover bg-gray-800"
              alt="Movie Poster"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end p-4 text-right">
              <span className="text-sm font-bold">عنوان الفيلم {i}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#111111] text-white font-['Cairo']" dir="rtl">
      <Head>
        <title>Cinema Time | سينما تايم</title>
      </Head>

      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 px-8 md:px-16 py-4 flex justify-between items-center ${isScrolled ? 'bg-[#0c0c0c] shadow-xl' : 'bg-transparent'}`}>
        <div className="flex items-center gap-10">
          <h1 className="text-3xl font-black text-[#e50914] tracking-tighter">CINEMA TIME</h1>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            <span className="cursor-pointer hover:text-[#e50914] transition">الرئيسية</span>
            <span className="cursor-pointer hover:text-[#e50914] transition">الأفلام</span>
            <span className="cursor-pointer hover:text-[#e50914] transition">المسلسلات</span>
          </div>
        </div>
        <div className="text-sm font-bold border-r border-[#e50914] pr-4">
          Made by <span className="text-[#e50914]">N58</span>
        </div>
      </nav>

      <header className="relative h-[90vh] w-full flex items-center px-8 md:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] to-transparent z-10" />
          <div className="w-full h-full bg-gray-900 animate-pulse" />
        </div>

        <div className="relative z-20 max-w-2xl">
          <h1 className="text-6xl md:text-8xl font-black mb-6 drop-shadow-2xl">فيلم الليلة</h1>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
            تجربة مشاهدة سينمائية فريدة من نوعها مع أفضل الأفلام والمسلسلات الحصرية، بجودة عالية ودعم كامل للغة العربية.
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-3 bg-white text-black px-10 py-4 rounded-md font-bold hover:bg-opacity-80 transition focus:ring-4 focus:ring-[#e50914]">
              <Play fill="black" size={24} />
              <span>تشغيل الآن</span>
            </button>
            <button className="flex items-center gap-3 bg-gray-500/40 text-white px-10 py-4 rounded-md font-bold hover:bg-gray-500/60 transition backdrop-blur-md focus:ring-4 focus:ring-[#e50914]">
              <Info size={24} />
              <span>التفاصيل</span>
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-20 -mt-32 pb-20">
        <MovieRow title="أفلام عربية مختارة" />
        <MovieRow title="الأكثر شهرة على سينما تايم" />
        <MovieRow title="أفلام الحركة والإثارة" />
      </main>

      <footer className="py-16 bg-[#0c0c0c] border-t border-white/5 text-center">
        <p className="text-gray-500 mb-4">نظام سينما تايم المتكامل - Cinema Time Pro</p>
        <p className="text-sm font-bold">Developed by <span className="text-[#e50914]">Nawaf (N58)</span></p>
      </footer>
    </div>
  );
}