
import React from "react";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-center px-6">
      <h1 className="text-5xl font-bold mb-4">Biznesingiz uchun Zamonaviy Website 🚀</h1>
      <p className="max-w-2xl mb-6">
        Biz sizning biznesingizni internetda yanada rivojlantirish uchun professional va mobilga mos veb-saytlar yaratamiz.
      </p>
      <a
        href="#contact"
        className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-blue-100 transition"
      >
        Bog‘lanish
      </a>
    </div>
  );
}
