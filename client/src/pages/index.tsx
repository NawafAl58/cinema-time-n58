import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { Play, Plus, Info, Volume2 } from 'lucide-react';

const MovieRow = ({ title }: { title: string }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mb-12 group/row">
      <h2 className="text-xl md:text-2xl font-bold mb-4 px-8 md:px-16 text-gray-200 hover:text-white transition-colors duration-300">
        {title}
      </h2>
      <div className="relative">
        <div 
          ref={scrollRef}
          className="flex gap-3 overflow-x-scroll px-8 md:px-16 hide-scrollbar scroll-smooth"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
            <div 
              key={i}
              className="min-w-[140px] md:min-w-[200px] aspect-[2/3] relative rounded-sm overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:z-10 focus-ring bg-[#1a1a1a]"
              tabIndex={0}
              role="button"
              aria-label={`Movie ${i}`}
            >
              <img 
                src={`https://image.tmdb.org/t/p/w500/placeholder.jpg`} 
                className="w-full h-full object-cover"
                alt="Poster"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x600/111/e50914?text=Cinema+Time';
                }}
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-[#e50914] text-xs font-bold mb-1">98% Match</p>
                <p className="text-sm font-black truncate">عنوان الفيلم المميز {i}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function CinemaTimePremium() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] selection:bg-[#e50914] selection:text-white">
      <Head>
        <title>Cinema Time | Premium Streaming</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-[100] transition-colors duration-700 px-8 md:px-16 py-5 flex justify-between items-center ${isScrolled ? 'bg-[#0a0a0a]' : 'bg-gradient-to-b from-black/80 to-transparent'}`}>
        <div className="flex items-center gap-12">
          <h1 className="text-3xl md:text-4xl font-black text-[#e50914] tracking-tighter cursor-pointer">CINEMA TIME</h1>
          <div className="hidden lg:flex gap-6 text-sm font-medium text-gray-200">
            <span className="cursor-pointer hover:text-white transition-colors duration-300">الرئيسية</span>
            <span className="cursor-pointer hover:text-white transition-colors duration-300">المسلسلات</span>
            <span className="cursor-pointer hover:text-white transition-colors duration-300">الأفلام</span>
            <span className="cursor-pointer hover:text-white transition-colors duration-300">أحدث الإضافات</span>
            <span className="cursor-pointer hover:text-white transition-colors duration-300">قائمتي</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="text-xs font-bold tracking-widest text-gray-400 uppercase hidden md:block">
            Made by <span className="text-[#e50914]">N58</span>
          </div>
          <div className="w-8 h-8 bg-[#e50914] rounded-sm cursor-pointer focus-ring" tabIndex={0} />
        </div>
      </nav>

      {/* Billboard / Hero Section */}
      <header className="relative h-[95vh] w-full flex items-center px-8 md:px-16 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.jpg" 
            className="w-full h-full object-cover opacity-80"
            alt="Billboard Background"
          />
          <div className="absolute inset-0 hero-overlay z-10" />
          <div className="absolute inset-0 hero-v-overlay z-10" />
        </div>

        <div className="relative z-20 max-w-3xl mt-20">
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-[#e50914] text-white text-[10px] font-black px-1 py-0.5 rounded-sm">N58 ORIGINAL</div>
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-6 drop-shadow-2xl tracking-tighter leading-none">فخر العرب</h1>
          <div className="flex items-center gap-4 mb-6 text-lg font-bold">
            <span className="text-[#46d369]">99% Match</span>
            <span className="text-gray-400">2026</span>
            <span className="border border-gray-400 px-2 text-xs py-0.5 text-gray-400 rounded-sm">18+</span>
            <span className="text-gray-400">10 مواسم</span>
            <span className="bg-white/10 px-2 py-0.5 text-xs rounded-sm">Ultra HD 4K</span>
          </div>
          <p className="text-xl text-gray-100 mb-10 leading-normal max-w-2xl drop-shadow-lg font-medium">
            في عالم مليء بالتحديات، يبرز بطل واحد ليغير مجرى التاريخ. تجربة سينمائية مذهلة تأخذك في رحلة عبر الزمن والواقع. متوفر حصرياً على منصة سينما تايم.
          </p>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-3 bg-white text-black px-10 py-3 rounded-md font-black text-xl hover:bg-white/80 transition focus-ring group">
              <Play fill="black" size={28} className="group-hover:scale-110 transition-transform duration-300" />
              <span>تشغيل</span>
            </button>
            <button className="flex items-center gap-3 bg-gray-500/40 text-white px-10 py-3 rounded-md font-black text-xl hover:bg-gray-500/60 transition backdrop-blur-md focus-ring group">
              <Info size={28} className="group-hover:scale-110 transition-transform duration-300" />
              <span>المزيد من المعلومات</span>
            </button>
            <div className="mr-auto flex items-center gap-4">
               <button className="p-2 rounded-full border-2 border-gray-500 text-gray-200 hover:text-white hover:border-white transition focus-ring">
                 <Volume2 size={24} />
               </button>
            </div>
          </div>
        </div>
      </header>

      {/* Content Rows */}
      <main className="relative z-20 -mt-44 pb-32">
        <MovieRow title="أفلام عربية حائزة على جوائز" />
        <MovieRow title="المسلسلات الأكثر رواجاً الآن" />
        <MovieRow title="مختارات Nawaf لك اليوم" />
        <MovieRow title="إصدارات جديدة مثيرة" />
        <MovieRow title="أفلام الحركة والإثارة العالمية" />
      </main>

      {/* Footer */}
      <footer className="py-20 bg-[#0a0a0a] border-t border-white/5 px-8 md:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12 text-gray-500 text-sm font-medium">
          <div className="flex flex-col gap-4">
            <span className="hover:underline cursor-pointer">الأسئلة الشائعة</span>
            <span className="hover:underline cursor-pointer">علاقات المستثمرين</span>
            <span className="hover:underline cursor-pointer">طرق المشاهدة</span>
            <span className="hover:underline cursor-pointer">المعلومات القانونية</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="hover:underline cursor-pointer">مركز المساعدة</span>
            <span className="hover:underline cursor-pointer">الوظائف</span>
            <span className="hover:underline cursor-pointer">شروط الاستخدام</span>
            <span className="hover:underline cursor-pointer">اتصل بنا</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="hover:underline cursor-pointer">الحساب</span>
            <span className="hover:underline cursor-pointer">متجر الهدايا</span>
            <span className="hover:underline cursor-pointer">الخصوصية</span>
            <span className="hover:underline cursor-pointer">اختبار السرعة</span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="hover:underline cursor-pointer">مركز الإعلام</span>
            <span className="hover:underline cursor-pointer">تفضيلات ملفات تعريف الارتباط</span>
            <span className="hover:underline cursor-pointer">معلومات الشركة</span>
            <span className="hover:underline cursor-pointer">الضمانات</span>
          </div>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
          <div className="text-2xl font-black text-[#e50914] opacity-50">CINEMA TIME</div>
          <div className="text-gray-500 text-xs">© 2026 Cinema Time Production - All Rights Reserved</div>
          <div className="text-sm font-black tracking-widest">
            Developed by <span className="text-[#e50914]">Nawaf (N58)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
