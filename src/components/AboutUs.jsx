import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Zap, Rocket } from "lucide-react";

export default function AboutUs() {
  const features = [
    {
      title: "Tezkor va ishonchli yechimlar",
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "Mahsuldorlikni oshirish",
      icon: <Lightbulb className="w-6 h-6 text-violet-400" />,
    },
    {
      title: "Innovatsion texnologiyalar",
      icon: <Rocket className="w-6 h-6 text-cyan-400" />,
    },
  ];

  return (
    <section className="relative py-24 px-6 md:px-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-950">
      {/* Gradient shapelar fon uchun */}
      <div className="absolute top-0 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto"
      >
        {/* Chap taraf - text */}
        <div className="space-y-8 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
              Biz haqimizda
            </span>
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
            Bizning jamoamiz{" "}
            <span className="text-orange-400 font-semibold">Website</span>,{" "}
            <span className="text-cyan-400 font-semibold">CRM</span>,{" "}
            <span className="text-violet-400 font-semibold">ERP</span> va biznes
            jarayonlarini avtomatlashtiruvchi innovatsion yechimlarni ishlab
            chiqadi. Maqsadimiz — korxonalarga zamonaviy IT xizmatlarini
            taqdim etib, samaradorlikni oshirish va rivojlanishga hissa qo‘shish.
          </p>

          {/* Features */}
          <ul className="grid gap-5 mt-8">
            {features.map((f, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 10 }}
                className="flex items-center gap-4 text-gray-300"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-md">
                  {f.icon}
                </div>
                <span className="text-lg">{f.title}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* O‘ng taraf - image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-80 h-80 md:w-[420px] md:h-[420px] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.25)]">
            <img
              src="https://lh6.googleusercontent.com/proxy/HV4mFQp7bOJSnsfU2zRcv8m-SkRNHTnuGJEARGnkY8-MlJ5nh1VB3X11nyLuGRWXnXbt2KSEHk4e5JeGjkvyK4_-f-mx5NoeXVnPUIP7CegJ2fxgdw"
              alt="About Us"
              className="w-full h-full object-cover hover:scale-110 transition duration-700"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-violet-600/20 mix-blend-overlay"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
