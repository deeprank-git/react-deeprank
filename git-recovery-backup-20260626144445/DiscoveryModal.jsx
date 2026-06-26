import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";
import {
  HiX, HiCheck, HiArrowRight, HiChevronLeft, HiChevronRight,
  HiPhone, HiMail, HiLockClosed, HiBadgeCheck,
} from "react-icons/hi";
import {
  HiBolt, HiGlobeAlt, HiCodeBracket, HiCpuChip,
  HiMagnifyingGlass, HiMegaphone, HiSparkles, HiShieldCheck,
} from "react-icons/hi2";
import { useModal } from "../context/ModalContext";

/* ─── static data ─────────────────────────────────────────── */
const SERVICES = [
  { id: "AI Automation",        icon: HiBolt },
  { id: "SEO",                  icon: HiMagnifyingGlass },
  { id: "Digital Marketing",    icon: HiMegaphone },
  { id: "Web Development",      icon: HiGlobeAlt },
  { id: "Software Development", icon: HiCodeBracket },
  { id: "NFT Development",      icon: HiSparkles },
  { id: "Custom Solutions",     icon: HiCpuChip },
];

const TIME_SLOTS = [
  "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "02:00 PM", "03:00 PM",
  "04:00 PM", "05:00 PM", "06:00 PM",
];

const BUDGETS = [
  "< $1,000", "$1,000 – $5,000", "$5,000 – $10,000",
  "$10,000 – $25,000", "$25,000+", "Not Sure Yet",
];

const HOW_HEARD = [
  "Google Search", "Social Media", "Referral", "LinkedIn",
  "Blog / Article", "Event / Conference", "Other",
];

const MONTHS = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

/* ─── helpers ─────────────────────────────────────────────── */
function buildCalendar(year, month) {
  const first = new Date(year, month, 1).getDay();
  const total = new Date(year, month + 1, 0).getDate();
  const cells = Array(first).fill(null);
  for (let d = 1; d <= total; d++) cells.push(d);
  return cells;
}

function fmtDate(d) {
  if (!d) return "Not selected";
  return `${DAYS[d.getDay()]}, ${d.getDate()} ${MONTHS[d.getMonth()].slice(0,3)} ${d.getFullYear()}`;
}

const BLANK = {
  service: "", fullName: "", businessName: "", email: "",
  phone: "", website: "", budget: "", description: "",
  date: null, time: "", howHeard: "", newsletter: false,
};

/* ─── component ───────────────────────────────────────────── */
const DiscoveryModal = () => {
  const { isOpen, close } = useModal();
  const [form, setForm]       = useState(BLANK);
  const [errors, setErrors]   = useState({});
  const [status, setStatus]   = useState("idle"); // idle | sending | success | error
  const [calDate, setCalDate] = useState(new Date(2026, 6));   // July 2026
  const [captchaToken, setCaptchaToken] = useState(null);
  const recaptchaRef = useRef(null);

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  /* close on Escape */
  useEffect(() => {
    const fn = (e) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [close]);

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  if (!isOpen) return null;

  /* validation */
  const validate = () => {
    const e = {};
    if (!form.service)   e.service  = "Please select a service";
    if (!form.fullName.trim()) e.fullName = "Full name required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Valid email required";
    if (!form.date)      e.date     = "Please choose a date";
    if (!form.time)      e.time     = "Please select a time slot";
    if (!captchaToken)   e.captcha  = "Please complete the CAPTCHA";
    setErrors(e);
    return !Object.keys(e).length;
  };

  /* submit */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");

    const base = {
      from_name:     form.fullName,
      business_name: form.businessName || "N/A",
      user_email:    form.email,
      phone:         form.phone || "N/A",
      website:       form.website || "N/A",
      service:       form.service,
      budget:        form.budget || "Not specified",
      description:   form.description || "N/A",
      date:          fmtDate(form.date),
      time:          form.time,
      how_heard:     form.howHeard || "N/A",
      newsletter:    form.newsletter ? "Yes" : "No",
    };

    const sid = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const key = { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY };

    try {
      await emailjs.send(sid, import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...base, to_email: "ash.shri982@gmail.com" }, key);
      await emailjs.send(sid, import.meta.env.VITE_EMAILJS_TEMPLATE_ID_USER,
        { ...base, to_email: form.email }, key);
      setStatus("success");
      setTimeout(() => { close(); setForm(BLANK); setStatus("idle"); setCaptchaToken(null); recaptchaRef.current?.reset(); }, 3000);
    } catch {
      setStatus("error");
      recaptchaRef.current?.reset();
      setCaptchaToken(null);
    }
  };

  /* calendar helpers */
  const today = new Date();
  const cells = buildCalendar(calDate.getFullYear(), calDate.getMonth());

  const sidebarItems = [
    { label: "Service",  value: form.service || "Not selected" },
    { label: "Date",     value: fmtDate(form.date) },
    { label: "Time",     value: form.time || "Not selected" },
    { label: "Duration", value: "30 Minutes" },
    { label: "Price",    value: "Free Consultation" },
  ];

  return createPortal(
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6">

      {/* backdrop */}
      <div
        className="absolute inset-0 bg-black/65 backdrop-blur-[6px]"
        onClick={close}
      />

      {/* modal shell */}
      <div
        className="relative z-10 w-full max-w-5xl h-[85vh] flex overflow-hidden rounded-3xl shadow-2xl border border-white/20 modal-enter"
        onClick={(e) => e.stopPropagation()}
        style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(24px)" }}
      >

        {/* ── left: scrollable form ──────────────────────────── */}
        <div className="flex-1 overflow-y-auto px-7 py-7 lg:px-9">

          {/* header */}
          <div className="mb-7">
            <span className="inline-block text-[10px] font-bold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1.5 rounded-full mb-3">
              Book a Discovery Call
            </span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 leading-[1.1] mb-2.5">
              Let's Build Something<br />
              <span className="text-blue-600">Extraordinary.</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Tell us about your project and schedule a discovery call with our experts.
            </p>
            <div className="flex flex-wrap gap-2">
              {["30 Minute Consultation", "Tailored Strategy", "No Obligation – 100% Free"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-[11px] font-semibold text-green-700 bg-green-50 border border-green-100 px-3 py-1.5 rounded-full">
                  <HiCheck className="w-3 h-3 shrink-0" />{t}
                </span>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">

            {/* ── Step 1: Service ── */}
            <section>
              <h3 className="flex items-center gap-2 text-sm font-black text-gray-900 mb-4">
                <span className="w-6 h-6 rounded-full bg-blue-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0">1</span>
                Select Your Service
              </h3>
              {errors.service && <p className="text-red-500 text-xs mb-2">{errors.service}</p>}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5">
                {SERVICES.map(({ id, icon: Icon }) => {
                  const active = form.service === id;
                  return (
                    <button
                      type="button"
                      key={id}
                      onClick={() => { set("service", id); setErrors((e) => ({ ...e, service: "" })); }}
                      className={`flex flex-col items-center gap-2 p-3.5 rounded-2xl border-2 text-center transition-all duration-200 group ${
                        active
                          ? "bg-blue-900 border-blue-900 text-white shadow-lg shadow-blue-900/25 scale-[1.02]"
                          : "bg-white border-gray-100 text-gray-600 hover:border-blue-200 hover:bg-blue-50 hover:scale-[1.02]"
                      }`}
                    >
                      <Icon className={`w-5 h-5 transition-colors ${active ? "text-blue-300" : "text-blue-600"}`} />
                      <span className="text-[11px] font-bold leading-tight">{id}</span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* ── Step 2: Project Details ── */}
            <section>
              <h3 className="flex items-center gap-2 text-sm font-black text-gray-900 mb-4">
                <span className="w-6 h-6 rounded-full bg-blue-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0">2</span>
                Tell Us About Your Project
              </h3>
              <div className="grid sm:grid-cols-2 gap-3.5">

                {/* Full Name */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 mb-1.5">Full Name <span className="text-red-400">*</span></label>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) => { set("fullName", e.target.value); setErrors((er) => ({ ...er, fullName: "" })); }}
                    placeholder="Enter your full name"
                    className={`w-full border-2 rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 placeholder-gray-300 ${
                      errors.fullName ? "border-red-300 bg-red-50" : "border-gray-100 bg-white hover:border-gray-200"
                    }`}
                  />
                  {errors.fullName && <p className="text-red-500 text-[10px] mt-1">{errors.fullName}</p>}
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 mb-1.5">Business Name</label>
                  <input
                    type="text"
                    value={form.businessName}
                    onChange={(e) => set("businessName", e.target.value)}
                    placeholder="Enter your business name"
                    className="w-full border-2 border-gray-100 hover:border-gray-200 rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 placeholder-gray-300 bg-white"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 mb-1.5">Email Address <span className="text-red-400">*</span></label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => { set("email", e.target.value); setErrors((er) => ({ ...er, email: "" })); }}
                    placeholder="Enter your email address"
                    className={`w-full border-2 rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 placeholder-gray-300 ${
                      errors.email ? "border-red-300 bg-red-50" : "border-gray-100 bg-white hover:border-gray-200"
                    }`}
                  />
                  {errors.email && <p className="text-red-500 text-[10px] mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 mb-1.5">Phone Number</label>
                  <div className="flex gap-2">
                    <span className="flex items-center px-3 border-2 border-gray-100 rounded-xl bg-gray-50 text-sm text-gray-500 whitespace-nowrap select-none">🇮🇳 +91</span>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      placeholder="Phone number"
                      className="flex-1 min-w-0 border-2 border-gray-100 hover:border-gray-200 rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 placeholder-gray-300 bg-white"
                    />
                  </div>
                </div>

                {/* Website */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 mb-1.5">Website URL</label>
                  <input
                    type="text"
                    value={form.website}
                    onChange={(e) => set("website", e.target.value)}
                    placeholder="https://yourwebsite.com"
                    className="w-full border-2 border-gray-100 hover:border-gray-200 rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 placeholder-gray-300 bg-white"
                  />
                </div>

                {/* Budget */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 mb-1.5">Monthly Budget</label>
                  <select
                    value={form.budget}
                    onChange={(e) => set("budget", e.target.value)}
                    className="w-full border-2 border-gray-100 hover:border-gray-200 rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 bg-white text-gray-700"
                  >
                    <option value="">Select your budget</option>
                    {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>

                {/* Description — full width */}
                <div className="sm:col-span-2">
                  <label className="block text-[11px] font-bold text-gray-500 mb-1.5">Project Description</label>
                  <textarea
                    value={form.description}
                    onChange={(e) => set("description", e.target.value)}
                    placeholder="Tell us about your challenges, goals, and what you're looking to achieve..."
                    rows={4}
                    className="w-full border-2 border-gray-100 hover:border-gray-200 rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 placeholder-gray-300 resize-none bg-white"
                  />
                </div>
              </div>
            </section>

            {/* ── Step 3: Calendar ── */}
            <section>
              <h3 className="flex items-center gap-2 text-sm font-black text-gray-900 mb-4">
                <span className="w-6 h-6 rounded-full bg-blue-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0">3</span>
                Choose a Date
              </h3>
              {errors.date && <p className="text-red-500 text-xs mb-2">{errors.date}</p>}
              <div className="bg-white border-2 border-gray-100 rounded-2xl p-5 shadow-sm">
                {/* month nav */}
                <div className="flex items-center justify-between mb-4">
                  <button
                    type="button"
                    onClick={() => setCalDate(new Date(calDate.getFullYear(), calDate.getMonth() - 1))}
                    className="w-8 h-8 rounded-xl hover:bg-gray-100 flex items-center justify-center transition-colors"
                  >
                    <HiChevronLeft className="w-4 h-4 text-gray-500" />
                  </button>
                  <p className="text-sm font-black text-gray-900">
                    {MONTHS[calDate.getMonth()]} {calDate.getFullYear()}
                  </p>
                  <button
                    type="button"
                    onClick={() => setCalDate(new Date(calDate.getFullYear(), calDate.getMonth() + 1))}
                    className="w-8 h-8 rounded-xl hover:bg-gray-100 flex items-center justify-center transition-colors"
                  >
                    <HiChevronRight className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
                {/* day headers */}
                <div className="grid grid-cols-7 mb-2">
                  {DAYS.map((d) => (
                    <p key={d} className="text-center text-[10px] font-bold text-gray-400 uppercase">{d}</p>
                  ))}
                </div>
                {/* date cells */}
                <div className="grid grid-cols-7 gap-1">
                  {cells.map((day, i) => {
                    if (!day) return <div key={`empty-${i}`} />;
                    const d    = new Date(calDate.getFullYear(), calDate.getMonth(), day);
                    const past = d < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                    const sel  = form.date && form.date.toDateString() === d.toDateString();
                    const isT  = d.toDateString() === today.toDateString();
                    return (
                      <button
                        type="button"
                        key={day}
                        disabled={past}
                        onClick={() => { set("date", d); setErrors((er) => ({ ...er, date: "" })); }}
                        className={`h-9 rounded-xl text-sm font-semibold transition-all duration-150 ${
                          past
                            ? "text-gray-200 cursor-not-allowed"
                            : sel
                            ? "bg-blue-900 text-white shadow-md shadow-blue-900/30"
                            : isT
                            ? "border-2 border-blue-400 text-blue-700 hover:bg-blue-50"
                            : "text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
                <p className="text-[10px] text-center text-gray-400 mt-3">
                  ✦ All times are in Asia/Kolkata (IST)
                </p>
              </div>
            </section>

            {/* ── Step 4: Time ── */}
            <section>
              <h3 className="flex items-center gap-2 text-sm font-black text-gray-900 mb-4">
                <span className="w-6 h-6 rounded-full bg-blue-900 text-white text-[10px] font-bold flex items-center justify-center shrink-0">4</span>
                Select a Time
              </h3>
              {errors.time && <p className="text-red-500 text-xs mb-2">{errors.time}</p>}
              <p className="text-xs text-gray-400 mb-3">
                {form.date
                  ? `Available slots for ${fmtDate(form.date)}`
                  : "Select a date above to see available slots"}
              </p>
              <div className="grid grid-cols-3 gap-2.5">
                {TIME_SLOTS.map((t) => (
                  <button
                    type="button"
                    key={t}
                    disabled={!form.date}
                    onClick={() => { set("time", t); setErrors((er) => ({ ...er, time: "" })); }}
                    className={`py-3 rounded-2xl text-xs font-bold border-2 transition-all duration-150 ${
                      form.time === t
                        ? "bg-blue-900 text-white border-blue-900 shadow-lg shadow-blue-900/25 scale-[1.02]"
                        : !form.date
                        ? "border-gray-100 text-gray-300 cursor-not-allowed bg-gray-50"
                        : "border-gray-100 bg-white text-gray-600 hover:border-blue-300 hover:bg-blue-50 hover:scale-[1.01]"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </section>

            {/* ── Step 5: Additional ── */}
            <section>
              <h3 className="flex items-center gap-2 text-sm font-black text-gray-900 mb-4">
                <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 text-[10px] font-bold flex items-center justify-center shrink-0">5</span>
                Additional Information
                <span className="text-gray-400 font-normal text-xs">(Optional)</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 mb-1.5">How did you hear about us?</label>
                  <select
                    value={form.howHeard}
                    onChange={(e) => set("howHeard", e.target.value)}
                    className="w-full border-2 border-gray-100 hover:border-gray-200 rounded-xl px-3.5 py-2.5 text-sm outline-none transition-all focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400 bg-white text-gray-700"
                  >
                    <option value="">Select an option</option>
                    {HOW_HEARD.map((h) => <option key={h} value={h}>{h}</option>)}
                  </select>
                </div>
                <div className="flex items-center gap-3 pt-6">
                  <input
                    id="newsletter"
                    type="checkbox"
                    checked={form.newsletter}
                    onChange={(e) => set("newsletter", e.target.checked)}
                    className="w-4 h-4 accent-blue-700 rounded cursor-pointer"
                  />
                  <label htmlFor="newsletter" className="text-xs text-gray-500 cursor-pointer leading-snug">
                    Subscribe to our newsletter for updates and insights
                  </label>
                </div>
              </div>
              <p className="text-[10px] text-gray-400 mt-3">
                🔒 Your information is secure and will never be shared.
              </p>
            </section>

            {/* ── reCAPTCHA ── */}
            <div className="flex flex-col items-start gap-1">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                onChange={(token) => { setCaptchaToken(token); setErrors((e) => ({ ...e, captcha: "" })); }}
                onExpired={() => setCaptchaToken(null)}
              />
              {errors.captcha && (
                <p className="text-red-500 text-xs mt-1">{errors.captcha}</p>
              )}
            </div>

            {/* ── Submit ── */}
            <div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 bg-blue-900 hover:bg-blue-800 disabled:bg-blue-400 text-white py-4 rounded-2xl font-bold text-sm transition-all shadow-lg shadow-blue-900/30 hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.99]"
              >
                {status === "sending" ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Scheduling your call…
                  </>
                ) : (
                  <>Schedule Discovery Call <HiArrowRight className="w-4 h-4" /></>
                )}
              </button>

              {status === "success" && (
                <div className="mt-4 flex items-center gap-2.5 bg-green-50 border border-green-200 rounded-xl p-3.5 animate-fade-in">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <HiCheck className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-green-800">Booking Confirmed!</p>
                    <p className="text-xs text-green-600">Check your inbox for confirmation details.</p>
                  </div>
                </div>
              )}
              {status === "error" && (
                <div className="mt-4 bg-red-50 border border-red-200 rounded-xl p-3.5">
                  <p className="text-sm font-semibold text-red-700">Something went wrong. Please try again or email us directly.</p>
                </div>
              )}
            </div>

          </form>
        </div>

        {/* ── right: sticky sidebar ─────────────────────────── */}
        <aside className="hidden lg:flex w-72 xl:w-80 flex-col overflow-y-auto border-l border-white/40"
          style={{ background: "rgba(248,250,255,0.85)", backdropFilter: "blur(12px)" }}>
          <div className="p-6 flex flex-col gap-6">

            {/* booking summary */}
            <div className="bg-white/80 rounded-2xl border border-white/60 shadow-sm p-5"
              style={{ backdropFilter: "blur(8px)" }}>
              <p className="text-[10px] font-black tracking-widest text-gray-500 uppercase mb-4">Your Discovery Call</p>
              <div className="flex flex-col gap-3">
                {sidebarItems.map(({ label, value }) => (
                  <div key={label} className="flex items-start justify-between gap-2">
                    <p className="text-[11px] text-gray-400 shrink-0">{label}</p>
                    <p className={`text-[11px] font-bold text-right ${
                      value === "Not selected" ? "text-gray-300" : "text-gray-800"
                    }`}>{value}</p>
                  </div>
                ))}
              </div>
              {form.service && form.date && form.time && (
                <div className="mt-4 pt-3 border-t border-gray-100">
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-100">
                    <HiCheck className="w-3 h-3" /> Ready to confirm
                  </span>
                </div>
              )}
            </div>

            {/* what happens next */}
            <div>
              <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">What happens next?</p>
              <div className="flex flex-col gap-3.5">
                {[
                  "You'll receive a confirmation email with joining details and a calendar invite.",
                  "Our team reviews your project details before the call.",
                  "We deliver a tailored 30-minute strategy session with our experts.",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-[9px] font-black text-blue-700">{i + 1}</span>
                    </div>
                    <p className="text-[11px] text-gray-500 leading-snug">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* contact */}
            <div>
              <p className="text-[10px] font-black tracking-widest text-gray-400 uppercase mb-3">Have Questions?</p>
              <div className="flex flex-col gap-2">
                <a href="tel:+919766413245" className="flex items-center gap-2 text-xs text-gray-600 hover:text-blue-700 transition-colors font-medium">
                  <HiPhone className="w-3.5 h-3.5 text-blue-500 shrink-0" />+91 976641 3245
                </a>
                <a href="mailto:hello@deeprank.com" className="flex items-center gap-2 text-xs text-gray-600 hover:text-blue-700 transition-colors font-medium">
                  <HiMail className="w-3.5 h-3.5 text-blue-500 shrink-0" />hello@deeprank.com
                </a>
                <p className="text-[10px] text-gray-400 mt-1">Mon – Fri: 9:00 AM – 7:00 PM IST</p>
              </div>
            </div>

            {/* trust badges */}
            <div className="flex flex-col gap-3.5">
              {[
                { Icon: HiLockClosed,  label: "Secure & Confidential", desc: "Your data is 100% safe with us" },
                { Icon: HiShieldCheck, label: "Expert Consultation",   desc: "Talk directly with industry experts" },
                { Icon: HiBadgeCheck,  label: "No Obligation",         desc: "100% free, cancel any time" },
              ].map(({ Icon, label, desc }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-gray-800">{label}</p>
                    <p className="text-[10px] text-gray-400">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* close button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full border border-white/40 flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-sm"
          style={{ background: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)" }}
        >
          <HiX className="w-4 h-4 text-gray-600" />
        </button>
      </div>
    </div>,
    document.body
  );
};

export default DiscoveryModal;
