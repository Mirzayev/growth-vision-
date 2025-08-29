import React, { useState } from "react";
import { motion } from "framer-motion";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const form = new FormData(e.currentTarget);
    const name = form.get("name")?.toString().trim();
    const message = form.get("message")?.toString().trim();
    let phoneValue = phone.trim();

    if (!name) return setError("Ismingizni kiriting.");
    if (!phoneValue || phoneValue.length < 9)
      return setError("Telefon raqamni to‘liq kiriting.");
    if (!message || message.length < 5)
      return setError("Savolingizni yozing (kamida 5 ta belgi).");

    setSubmitting(true);
    await new Promise((res) => setTimeout(res, 1000)); // imitasiya
    setSubmitting(false);
    setSubmitted(true);
    e.currentTarget.reset();
    setPhone("+998 ");
  };

  return (
   <section className=" flex items-center justify-center bg-[#0A192F] p-6">
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className="rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2 w-full max-w-7xl"
  >
    {/* Chap taraf - rasm */}
    <div className="hidden md:flex items-center justify-center bg-[#112240]">
      <img
        src="https://www.andagro.ro/wp-content/uploads/contact_us.jpeg"
        alt="Contact us"
        className="h-full w-full object-contain"
      />
    </div>

    {/* O‘ng taraf - forma */}
    <div className="p-8 md:p-10 bg-[#112240] text-slate-100">
      <h1 className="text-2xl font-bold mb-2">Biz bilan bog‘laning</h1>
      <p className="mb-6 text-sm text-slate-300">
        Savolingizni yozib qoldiring, tez orada aloqaga chiqamiz ✅
      </p>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-xl border border-emerald-500 bg-emerald-900 p-4 text-emerald-200"
        >
          <p className="font-medium">Rahmat! Xabaringiz yuborildi ✅</p>
          <p className="text-sm mt-1">Tez orada siz bilan bog‘lanamiz.</p>
        </motion.div>
      ) : (
        <form onSubmit={onSubmit} className="md:space-y-8 space-y-5">
          <FormField
            label="Ism familiya"
            name="name"
            placeholder="Temurbek Mirzayev"
            required
            className="w-full rounded-xl border border-slate-100 bg-[#1E293B] px-4 py-3 text-slate-100 placeholder-slate-400 shadow-sm outline-none !focus:border-blue-400"
          />

          {/* Telefon */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Telefon raqamingiz
            </label>
            <PhoneInput
              country={"uz"}
              enableSearch={true}
              preferredCountries={["uz", "ru", "us"]}
              placeholder="+998 90 123 45 67"
              value={phone}
              onChange={(value) => setPhone(value)}
              inputClass="!w-full !rounded-xl !border !border-slate-700 !bg-[#1E293B] !px-10 !py-[18px] !text-slate-100 !placeholder-slate-400 focus:!border-blue-400"
              buttonClass="!border-none !bg-transparent"
              containerClass="w-full"
            />
          </div>

          {/* Xabar */}
          <div>
            <label className="block text-sm font-medium mb-1">Savolingiz</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Savolingizni shu yerga yozing..."
              className="w-full rounded-xl border border-slate-700 bg-[#1E293B] px-4 py-3 text-slate-100 placeholder-slate-400 shadow-sm outline-none focus:border-blue-400"
            />
          </div>

          {error && (
            <div className="rounded-xl border border-rose-500 bg-rose-900/50 p-3 text-rose-200 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={submitting}
            className="w-full cursor-pointer rounded-xl px-5 py-3 font-medium text-white bg-blue-600 hover:bg-blue-700 transition disabled:opacity-60 md:mt-10 mt-2"
          >
            {submitting ? "Yuborilmoqda..." : "Xabarni yuborish"}
          </button>
        </form>
      )}
    </div>
  </motion.div>
</section>

  );
}

function FormField({ label, name, type = "text", placeholder, required }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-100 mb-1"
      >
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border bg-[#1E293B] border-slate-700  px-4 py-3 text-slate-200 placeholder-slate-400 shadow-sm outline-none focus:border-blue-400"
      />
    </div>
  );
}
