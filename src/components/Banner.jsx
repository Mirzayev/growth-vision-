import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Iconlar
import crm from "../assets/icons/crm.png";
import erp from "../assets/icons/erp.png";
import service from "../assets/icons/service.png";
import onboarding from "../assets/icons/onboarding.png";

import "swiper/css";
import "swiper/css/pagination";

export default function Banner() {
  const slides = [
    {
      title: "CRM Tizimlari",
      desc: "Mijozlaringiz bilan aloqani avtomatlashtiring va biznesingizni tezlashtiring.",
      icon: crm,
    },
    {
      title: "ERP Yechimlari",
      desc: "Resurslarni boshqarishning eng zamonaviy tizimlari orqali samaradorlikni oshiring.",
      icon: erp,
    },
    {
      title: "Avtomatlashtirish",
      desc: "Jarayonlarni avtomatlashtirib, vaqt va xarajatni tejang.",
      icon: service,
    },
    {
      title: "Outsource IT Xizmatlari",
      desc: "IT mutaxassislarini topish va ulardan foydalanishda eng yaxshi yechim.",
      icon: onboarding,
    },
  ];

  return (
    <section className="relative w-full min-h-screen text-white flex items-center px-4 sm:px-8 md:px-20 py-18 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
        
        {/* Chap tarafdagi yozuv */}
        <div className="space-y-6 max-w-2xl text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-blue-500">IT Yechimlari</span> orqali
            <br className="hidden sm:block" />
            biznesingizni yangi bosqichga olib chiqing
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            CRM, ERP va avtomatlashtirish tizimlari yordamida kompaniyangizni
            samarador va raqobatbardosh qiling.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:justify-center md:justify-start">
            <button className="px-6 cursor-pointer py-3 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold transition shadow-lg hover:shadow-blue-500/30">
              Batafsil
            </button>
            <button className="px-6 cursor-pointer  py-3 w-full sm:w-auto bg-transparent border border-blue-500 hover:bg-blue-600/10 rounded-xl text-blue-400 font-semibold transition">
              Bog‘lanish
            </button>
          </div>
        </div>

        {/* O‘ng tarafdagi iconlar slider */}
        <div className="flex justify-center items-center">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500 }}
            pagination={{ clickable: true }}
            loop={true}
           className="w-full max-w-sm sm:max-w-md shadow-[0_2px_2px_rgba(56,189,248,0.25),0_0_15px_rgba(139,92,246,0.35)] rounded-2xl"

          >
          
            
            {slides.map((slide, i) => (
              <SwiperSlide
                key={i}
                className="bg-transparent rounded-2xl p-8 sm:p-10 transition duration-500 
                w-full
                border border-cyan-400/20 flex flex-col items-center text-center space-y-6"
              >
                {/* Icon qismi */}
                <div className="flex items-center justify-center">
                  <div
                    className="w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center 
                      bg-gradient-to-tr from-cyan-500/30 to-violet-500/20 
                      rounded-full 
                      shadow-inner shadow-[inset_0_0_20px_rgba(139,92,246,0.5)]"
                  >
                    <img
                      src={slide.icon}
                      alt={slide.title}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-contain 
                        drop-shadow-[0_4px_12px_rgba(56,189,248,0.7)]"
                    />
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-cyan-300 drop-shadow-md">
                  {slide.title}
                </h2>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed px-2">
                  {slide.desc}
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
