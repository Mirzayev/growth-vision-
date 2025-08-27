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
    const email = form.get("email")?.toString().trim();
    let phoneValue = phone.trim();
    const message = form.get("message")?.toString().trim();
    const consent = form.get("consent") === "on";
    const botField = form.get("website")?.toString().trim();

    if (botField) return; // honeypot (spam oldini olish)

    if (!name) return setError("Ismingizni kiriting.");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return setError("Yaroqli email kiriting.");
    }

    // Telefon validatsiya (+998 bilan boshlanishi va jami 12 ta raqam)

    if (!message || message.length < 10) {
      return setError("Xabaringizni batafsilroq yozing (kamida 10 ta belgi).");
    }
    if (!consent) return setError("Jo'natishdan oldin rozilik belgilang.");

    setSubmitting(true);
    await new Promise((res) => setTimeout(res, 1000)); // server simulation
    setSubmitting(false);
    setSubmitted(true);
    e.currentTarget.reset();
    setPhone("+998 "); // telefon inputni qayta tozalash
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center p-4 md:p-8 bg-[#0A192F] relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full opacity-20 blur-3xl bg-gradient-radial from-cyan-600 to-transparent" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full opacity-20 blur-3xl bg-gradient-radial from-emerald-400 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-[1400px]"
      >
        <div className="bg-white/95 backdrop-blur rounded-2xl shadow-xl border border-slate-100">
          <div className="p-6 md:p-8">
            <header className="mb-6">
              <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
                Biz bilan bog'laning
              </h1>
              <p className="mt-2 text-slate-600">
                Savolingiz, taklifingiz yoki buyurtmangiz bormi? Formani
                to'ldiring — javob qaytaramiz.
              </p>
            </header>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900"
              >
                <p className="font-medium">
                  Rahmat! Xabaringiz qabul qilindi ✅
                </p>
                <p className="text-sm mt-1">
                  Tez orada siz bilan bog'lanamiz. Shu paytda, email
                  pochtangizni kuzatib boring.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={onSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                {/* Bot-check hidden field */}
                <input
                  type="text"
                  name="website"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <FormField
                  label="Ism familiya"
                  name="name"
                  placeholder="Temurbek Mirzayev"
                  required
                />
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
                <PhoneInput
                  country={"uz"}
                  enableSearch={true}
                  preferredCountries={["uz", "ru", "us"]}
                  placeholder="+998 90 123 45 67"
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  inputClass="!w-full !rounded-2xl !border !border-slate-200 !bg-white !px-9 !py-3 !text-slate-900 !placeholder-slate-400 !shadow-sm !outline-none focus:!border-[#0A192F]"
                  buttonClass="!border-none !bg-transparent"
                  containerClass="w-full"
                />
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Xabar
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Loyihangiz haqida qisqacha yozib bering..."
                    className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm outline-none  focus:border-[#0A192F]"
                  />
                </div>

                <div className="md:col-span-2 flex items-start gap-3">
                  <input
                    id="consent"
                    name="consent"
                    type="checkbox"
                    className="mt-1 h-5 w-5 rounded-md border-slate-300 text-[#0A192F] focus:border-[#0A192F]"
                  />
                  <label htmlFor="consent" className="text-sm text-slate-700">
                    Men shaxsiy ma'lumotlarimni qayta ishlashga roziman va
                    maxfiylik siyosatiga roziman.
                  </label>
                </div>

                {error && (
                  <div className="md:col-span-2 rounded-xl border border-rose-200 bg-rose-50 p-3 text-rose-800">
                    {error}
                  </div>
                )}

                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-2xl px-5 py-3 font-medium text-white shadow-lg transition disabled:opacity-60 bg-[#0A192F] hover:bg-[#0A192F]"
                  >
                    {submitting ? "Jo'natilmoqda..." : "Xabarni yuborish"}
                  </button>
                </div>
              </form>
            )}

            <footer className="mt-6 text-xs text-slate-500">
              <p>
                Shu formani o'zingizning backend API'ga ulab qo'yishingiz
                mumkin. Hozircha namuna tarzida front-end validatsiyasi
                ishlatilmoqda.
              </p>
            </footer>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium text-slate-700 mb-1"
      >
        {label} {required && <span className="text-rose-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm outline-none  focus:border-[#0A192F]"
      />
    </div>
  );
}
