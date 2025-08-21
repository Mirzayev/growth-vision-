import React from "react";
import { motion } from "framer-motion";
export default function AboutUs() {
  return (
    <section className="relative py-16 px-6 md:px-20 group">
      <motion.div
      initial= {{opacity: 0, y: -50}}
      whileInView={{opacity: 1, y: 0}}
      transition={{ duration: 1.7, ease: "easeInOut"}}
      className="relative mx-auto flex flex-col md:flex-row justify-between gap-12  items-center">

        <div className="flex justify-center md:w-1/2">
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-3xl overflow-hidden ">
            <img
              src="https://t4.ftcdn.net/jpg/06/73/27/49/360_F_673274993_U7udTMmzT35pVc73JLzYbBLUZ0dSP6Kf.jpg"
              alt="About Us"
              className="w-full h-full object-cover hover:scale-105 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-violet-600/20"></div>
          </div>
        </div>
        <div className=" relative w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6 drop-shadow-lg">
            Biz haqimizda
          </h2>

          {/* HR chiziq */}
          <div className="relative my-6 h-[2px] w-full bg-gray-700 rounded-full overflow-hidden">
            <span
              className="absolute left-0 top-0 h-full w-full origin-left scale-x-0 
    bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500 rounded-full 
    transition-transform duration-1000 ease-out 
    group-hover:scale-x-100"
              style={{
                boxShadow: "0 0 25px 6px rgba(34, 211, 238, 0.7)", // cyan nur effekti
              }}
            ></span>
          </div>

          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Bizning kompaniyamiz{" "}
            <span className="text-cyan-400 font-semibold">CRM</span>,{" "}
            <span className="text-violet-400 font-semibold">ERP</span> va turli
            biznes jarayonlarini avtomatlashtiruvchi innovatsion yechimlar
            ishlab chiqadi. Maqsadimiz — korxonalarga zamonaviy IT xizmatlarini
            taqdim etib, samaradorlikni oshirish va rivojlanishga hissa
            qo‘shish.
          </p>

          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              Tezkor va ishonchli yechimlar
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-violet-400 rounded-full"></span>
              Mahsuldorlikni oshirish
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
              Innovatsion texnologiyalar
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
