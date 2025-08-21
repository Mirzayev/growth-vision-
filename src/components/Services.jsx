import React from "react";
import {
  FaCogs,
  FaGlobe,
  FaRobot,
  FaChartLine,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "CRM Tizimlari",
      desc: "Mijozlar bilan aloqalarni samarali boshqarish va savdoni tezlashtirish uchun maxsus yechimlar.",
      icon: <FaChartLine className="text-cyan-400 text-4xl" />,
    },
    {
      title: "ERP Yechimlari",
      desc: "Resurslarni boshqarish tizimi orqali biznes jarayonlarini avtomatlashtiring va nazoratni kuchaytiring.",
      icon: <FaCogs className="text-violet-400 text-4xl" />,
    },
    {
      title: "IT Outsourcing",
      desc: "Tajribali IT mutaxassislarini jalb qilish va xizmatlardan moslashuvchan foydalanish imkoniyati.",
      icon: <FaLaptopCode className="text-blue-400 text-4xl" />,
    },
    {
      title: "Website Xizmatlari",
      desc: "Zamonaviy, tezkor va mobil qurilmalarga mos veb-saytlar yaratish orqali biznesingizni onlayn rivojlantiring.",
      icon: <FaGlobe className="text-indigo-500 text-4xl" />,
    },
    {
      title: "Mobil Ilovalar",
      desc: "Android va iOS platformalari uchun zamonaviy va qulay mobil ilovalar ishlab chiqish.",
      icon: <FaMobileAlt className="text-green-400 text-4xl" />,
    },
    {
      title: "Telegram Botlar",
      desc: "Telegram botlar orqali jarayonlarni avtomatlashtirish va tezkor xizmat ko‘rsatish.",
      icon: <FaRobot className="text-blue-400 text-4xl" />,
    },
  ];

  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 drop-shadow-lg">
          Xizmatlarimiz
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Biznesingizni rivojlantirish uchun eng zamonaviy va innovatsion IT
          yechimlar
        </p>
      </div>

      {/* Services grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{
              y: -8,
              boxShadow: "0 8px 25px rgba(34,211,238,0.3)",
              transition: { duration: 0.1, ease: "easeOut" }, // tezroq hover
            }}
            className="bg-[#0A192F] rounded-2xl p-8 flex flex-col items-center text-center 
             border border-cyan-400/20 shadow-lg"
          >
            <div className="mb-6">{service.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-cyan-300">
              {service.title}
            </h3>
            <p className="text-gray-300 leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
