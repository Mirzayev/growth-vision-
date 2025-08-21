import React from "react";
import  yuksalish from "../assets/images/yuksalish.jpg"
import { motion } from "framer-motion";
export default function Portfolio() {
  const projects = [
    {
      title: "CRM Tizimi",
      desc: "Mijozlar bilan munosabatlarni boshqarish uchun zamonaviy va qulay tizim ishlab chiqildi.",
      img: "https://cdn.imgbin.com/19/17/5/imgbin-customer-relationship-management-application-software-computer-icons-crm-icon-xYGC28EkFs1FYFuXjxNMuGxJk.jpg",
    },
    {
      title: "Yuksalish",
      desc: "Yuksalish  uchun innovatsion yangi dizayndagi veb-site yaratdik",
      img: yuksalish,
    },
    {
      title: "Korporativ Veb-sayt",
      desc: "Biznes uchun zamonaviy, tezkor va mobil moslashuvchan veb-sayt yaratildi.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Mobil Ilova",
      desc: "Android va iOS uchun qulay interfeysli va foydali mobil dastur ishlab chiqildi.",
      img: "https://sigosoft.com/wp-content/uploads/2024/01/inside-image-min.png",
    },
  ];

  return (
    <section className="relative py-20 px-6 md:px-16 text-white">
      {/* Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Loyihalarimiz
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Kompaniyamiz tomonidan amalga oshirilgan eng muvaffaqiyatli loyihalar bilan tanishing.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
          initial= {{ opacity: 0, y: -40}}
          whileInView={{ opacity: 1, y: 0}}
          transition={{ duration: 0.6, delay: i* 0.2}}
            key={i}
            className="group bg-gray-900 rounded-2xl overflow-hidden shadow-lg 
                       hover:shadow-cyan-500/30 "
          >
            {/* Rasm */}
            <div className="overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-52 object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            {/* Text */}
            <div className="p-6 space-y-3">
              <h3 className="text-2xl font-bold text-cyan-400">
                {project.title}
              </h3>
              <p className="text-gray-300">{project.desc}</p>
              <button className="mt-4 px-5 py-2 rounded-xl bg-cyan-600 hover:bg-cyan-700 transition shadow-md shadow-cyan-500/30">
                Batafsil
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
