import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Play, Info, ChevronLeft, ChevronRight } from 'lucide-react';

const MovieRow = ({ title }: { title: string }) => (
  <div className="mb-8">
    <h2 className="text-xl md:text-2xl font-semibold mb-4 px-8 md:px-16">{title}</h2>
    <div className="relative group">
      <div className="flex gap-2 overflow-x-scroll px-8 md:px-16 hide-scrollbar scroll-smooth">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <div 
            key={i}
            className="min-w-[140px] md:min-w-[200px] aspect-[2/3] relative rounded-md overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10 focus-ring"
            tabIndex={0}
          >
            <img 
              src={`https://via.placeholder.com/400x600/222/e50914?text=Cinema+Time+${i}`} 
              className="w-full h-full object-cover"
              alt="Movie Poster"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-end p-4">
              <span className="text-xs font-bold">اسم الفيلم {i}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function NetflixRedesign() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      <Head>
        <title>Cinema Time | سينما تايم</title>
      </Head>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-colors duration-500 px-8 md:px-16 py-4 flex justify-between items-center ${isScrolled ? 'bg-[#0c0c0c]' : 'bg-transparent'}`}>
        <div className="flex items-center gap-8">
          <h1 className="text-2xl md:text-3xl font-black text-[#e50914] tracking-tighter">CINEMA TIME</h1>
          <div className="hidden md:flex gap-4 text-sm">
            <span className="cursor-pointer hover:text-gray-300 transition">الرئيسية</span>
            <span className="cursor-pointer hover:text-gray-300 transition">الأفلام</span>
            <span className="cursor-pointer hover:text-gray-300 transition">المسلسلات</span>
          </div>
        </div>
        <div className="text-sm font-medium text-gray-400">
          Made by <span className="text-[#e50914]">N58</span>
        </div>
      </nav>

      {/* Hero Banner */}
      <header className="relative h-[80vh] md:h-[95vh] w-full flex items-center px-8 md:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://via.placeholder.com/1920x1080/111/444?text=Hero+Backdrop" 
            className="w-full h-full object-cover opacity-60"
            alt="Hero Backdrop"
          />
          <div className="absolute inset-0 netflix-gradient" />
        </div>

        <div className="relative z-10 max-w-2xl mt-20">
          <h1 className="text-5xl md:text-7xl font-black mb-4 drop-shadow-xl">فيلم الليلة</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed line-clamp-3">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى.
          </p>
          <div className="flex gap-4">
            <button className="flex items-center gap-2 bg-white text-black px-8 py-2 md:py-3 rounded font-bold hover:bg-white/90 transition focus-ring">
              <Play className="fill-black" size={24} />
              <span>تشغيل</span>
            </button>
            <button className="flex items-center gap-2 bg-gray-500/50 text-white px-8 py-2 md:py-3 rounded font-bold hover:bg-gray-500/40 transition focus-ring backdrop-blur-md">
              <Info size={24} />
              <span>المزيد من التفاصيل</span>
            </button>
          </div>
        </div>
      </header>

      {/* Movie Rows */}
      <main className="relative z-10 -mt-20 pb-20">
        <MovieRow title="أفلام عربية رائجة" />
        <MovieRow title="الأكثر مشاهدة" />
        <MovieRow title="أفلام الأكشن" />
        <MovieRow title="مسلسلات جديدة" />
      </main>

      <footer className="py-12 border-t border-white/10 text-center text-gray-500 text-sm">
        <div className="mb-4 flex justify-center gap-8">
          <span>الخصوصية</span>
          <span>شروط الاستخدام</span>
          <span>اتصل بنا</span>
        </div>
        <p>نظام سينما تايم المتكامل - Developed by Nawaf (N58)</p>
      </footer>
    </div>
  );
}