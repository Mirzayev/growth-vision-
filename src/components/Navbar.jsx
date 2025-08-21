import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/images/Logo.png";
import { Link } from "react-scroll"; // react-scrolldan Link

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Asosiy", link: "home" },
    { name: "Biz haqimizda", link: "about" },
    { name: "Xizmatlarimiz", link: "services" },
    { name: "Loyihalarimiz", link: "portfolio" },
    { name: "Bog'lanish", link: "contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/10 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600 cursor-pointer lg:max-w-[130px] max-w-[100px]">
          <img src={Logo} alt="Logo" className="rounded-lg" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white font-medium">
          {menuItems.map((item, i) => (
            <li key={i}>
              <Link
                to={item.link}
                smooth={true}
                duration={600}
                offset={-80} // navbar balandligini hisobga oladi
                className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white/10 backdrop-blur-lg shadow-md">
          <ul className="flex flex-col items-center gap-6 py-6 text-white font-medium">
            {menuItems.map((item, i) => (
              <li key={i}>
                <Link
                  to={item.link}
                  smooth={true}
                  duration={600}
                  offset={-80}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer hover:text-blue-400 transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
