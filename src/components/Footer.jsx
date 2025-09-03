import React from "react";
import {
  FaFacebookF,
  FaTelegramPlane,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";
import Logo from "../assets/images/Logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12  px-6 md:px-16 mt-20 relative overflow-hidden">
      {/* Dekorativ gradient */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-cyan-500/10 blur-3xl rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-violet-500/10 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Logo */}
        <div>
          <img className="max-w-[160px]" src={Logo} alt="Logo" />
        </div>

        {/* Foydali linklar */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">
            Foydali havolalar
          </h2>
          <ul className="space-y-3">
            {[
              { name: "Xizmatlarimiz", link: "#services" },
              { name: "Loyihalarimiz", link: "#projects" },
              { name: "Biz haqimizda", link: "#about" },
              { name: "Bog‘lanish", link: "#contact" },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.link}
                  className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-violet-400 transition text-gray-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Ijtimoiy tarmoqlar */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">
            Biz bilan bog‘laning
          </h2>
          <p className="mb-5 text-gray-400">
            Ijtimoiy tarmoqlarda bizni kuzatib boring:
          </p>
          <div className="flex gap-4">
            {[
              { icon: <FaPhone />, link: "tel:+998883211233" }, // 🔥 tel: qo'shildi
              { icon: <FaFacebookF />, link: "https://facebook.com" },
              { icon: <FaTelegramPlane />, link: "https://t.me" },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/grovision.uz?igsh=MWVkaDZwb2hoanpyaw==",
              },
              { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined} // 🔥 faqat ijtimoiy tarmoqlar uchun yangi tab ochadi
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-violet-500 shadow-md hover:scale-110 transition transform duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Pastki qism */}
      <div className="border-t border-gradient-to-r from-cyan-500 to-violet-500 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sizning Kompaniyangiz. Barcha huquqlar
        himoyalangan.
      </div>
    </footer>
  );
}
