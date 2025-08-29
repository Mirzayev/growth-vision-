import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

// Iconlar
import crm from "../assets/icons/crm.png";
import erp from "../assets/icons/erp.png";
import service from "../assets/icons/service.png";
import onboarding from "../assets/icons/onboarding.png";

export default function Banner() {
  const features = [
    { title: "CRM", icon: crm },
    { title: "ERP", icon: erp },
    { title: "Avtomatlashtirish", icon: service },
    { title: "Outsource IT", icon: onboarding },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e1b4b] overflow-hidden">
      
      {/* Orqa fon bezaklar */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl w-full">
        
        {/* Chap taraf yozuv */}
        <div className="space-y-8 text-center md:text-left">
          <h1 className="text-4xl sm:text-[55px] font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              IT Yechimlari
            </span>{" "}
            <span className="text-slate-200">orqali biznesingizni yangi darajaga olib chiqing</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300/80 leading-relaxed max-w-xl mx-auto md:mx-0">
            Innovatsion CRM, ERP va avtomatlashtirish tizimlari bilan biznesingizni kuchaytiring.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              to="portfolio"
              smooth={true}
              duration={800}
              offset={-90}
              className="px-8 py-3 cursor-pointer bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-violet-500 rounded-2xl text-white font-semibold transition shadow-lg hover:shadow-cyan-500/40 text-white rounded-2xl font-semibold shadow-lg  transition"
            >
              Batafsil
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={1000}
              offset={-90}
              className="px-8 py-3 cursor-pointer bg-white/10 border border-cyan-400 rounded-2xl text-cyan-300 font-semibold backdrop-blur-xl hover:bg-white/20 transition"
            >
              Bog‘lanish
            </Link>
          </div>
        </div>

        {/* O‘ng taraf — kartochkalar */}
        <div className="grid grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.03, rotate: 0.2 }}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-white/10 flex flex-col items-center text-center space-y-4 hover:shadow-cyan-500/30 transition"
            >
              <img src={f.icon} alt={f.title} className="w-14 h-14 drop-shadow-[0_6px_20px_rgba(56,189,248,0.6)]" />
              <h2 className="text-lg font-semibold text-cyan-300">{f.title}</h2>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
