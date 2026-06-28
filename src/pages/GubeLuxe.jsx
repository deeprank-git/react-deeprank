import { useState } from "react";
import { Link } from "react-router-dom";
import {
	HiCheckCircle, HiXCircle, HiArrowRight, HiChevronRight,
} from "react-icons/hi";
import {
	AreaChart, Area, LineChart, Line, XAxis, YAxis,
	CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";
import yogalife from "../assets/yogalife.png";
import aisutilities from "../assets/aisutilities.png";
import exademy from "../assets/exademy.png";
import CTA from "../sections/CTA";
import gebeluxe from "../assets/gebeluxe.png";
import { useModal } from "../context/ModalContext";

/* ── chart data (sample) ── */
const trafficData = [
	{ m: "Jan", value: 1800 },
	{ m: "Feb", value: 2300 },
	{ m: "Mar", value: 3200 },
	{ m: "Apr", value: 4200 },
	{ m: "May", value: 5200 },
	{ m: "Jun", value: 6400 },
];

const leadsData = [
	{ m: "Jan", value: 12 },
	{ m: "Feb", value: 18 },
	{ m: "Mar", value: 28 },
	{ m: "Apr", value: 42 },
	{ m: "May", value: 60 },
	{ m: "Jun", value: 82 },
];

const performanceData = [
	{ m: "Jan", organic: 1800, leads: 12, sales: 8 },
	{ m: "Feb", organic: 2300, leads: 18, sales: 12 },
	{ m: "Mar", organic: 3200, leads: 28, sales: 21 },
	{ m: "Apr", organic: 4200, leads: 42, sales: 30 },
	{ m: "May", organic: 5200, leads: 60, sales: 46 },
	{ m: "Jun", organic: 6400, leads: 82, sales: 68 },
];

const TABS = ["Overview", "About The Client", "Our Strategy", "The Results", "Testimonial"];

const relatedCases = [
	{ img: yogalife, tag: "Wellness", title: "Yogalife Global", stat: "+120%", label: "Membership Growth", desc: "Redesigned LMS and automation grew memberships." },
	{ img: aisutilities, tag: "Utilities", title: "AIS Utilities", stat: "+180%", label: "Conversion", desc: "Conversion-focused growth for modern utility providers." },
	{ img: exademy, tag: "Education", title: "Exademy", stat: "+250%", label: "Course Sales", desc: "High-performance learning platform built for growth." },
];

const MetricChart = ({ data, color, gradient }) => (
	<ResponsiveContainer width="100%" height={80}>
		<AreaChart data={data} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
			<defs>
				<linearGradient id={gradient} x1="0" y1="0" x2="0" y2="1">
					<stop offset="5%" stopColor={color} stopOpacity={0.3} />
					<stop offset="95%" stopColor={color} stopOpacity={0} />
				</linearGradient>
			</defs>
			<Area type="monotone" dataKey="value" stroke={color} strokeWidth={2} fill={`url(#${gradient})`} dot={false} />
		</AreaChart>
	</ResponsiveContainer>
);

const GubeLuxe = () => {
	const [activeTab, setActiveTab] = useState("Overview");
	const { open } = useModal();

	return (
		<div className="bg-white text-slate-900">
			<div className="max-w-7xl mx-auto px-5 lg:px-8 pt-6 pb-2">
				<nav className="flex items-center gap-1.5 text-xs text-gray-500">
					<Link to="/" className="hover:text-blue-700 transition-colors">DeepRank</Link>
					<HiChevronRight className="w-3.5 h-3.5" />
					<Link to="/case-study" className="hover:text-blue-700 transition-colors">Case Studies</Link>
					<HiChevronRight className="w-3.5 h-3.5" />
					<span className="text-gray-900 font-semibold">GubeLuxe</span>
				</nav>
			</div>

			<section className="max-w-7xl mx-auto px-5 lg:px-8 py-10 lg:py-14">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div>
						<span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full mb-4 uppercase">
							<span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" /> Success Story
						</span>
						<h1 className="text-4xl lg:text-5xl font-black leading-[1.08] text-gray-900 mb-3">GubeLuxe</h1>
						<h2 className="text-3xl lg:text-4xl font-black text-blue-700 leading-tight mb-5">Luxury E‑commerce Growth<br />+256% Revenue</h2>
						<p className="text-gray-500 text-base leading-relaxed mb-6 max-w-lg">GubeLuxe partnered with DeepRank to revamp their ecommerce UX, optimise product SEO and scale paid and organic revenue.</p>
						<div className="flex flex-wrap gap-2 mb-8">
							{["E‑commerce", "SEO", "UX", "Paid Ads"].map((tag) => (
								<span key={tag} className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full">{tag}</span>
							))}
						</div>
						<button onClick={open} className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-7 py-3.5 rounded-2xl font-semibold text-sm transition-all shadow-lg shadow-blue-900/25">Book Discovery Call <HiArrowRight className="w-4 h-4" /></button>
					</div>

					<div className="relative">
						<div className="rounded-3xl overflow-hidden shadow-2xl">
							<img src={gebeluxe} alt="GubeLuxe preview" className="w-full h-80 lg:h-96 object-cover" />
						</div>
						<div className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 min-w-[170px]">
							<p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Business Growth</p>
							<p className="text-4xl font-black text-blue-700">+256%</p>
							<p className="text-xs font-semibold text-gray-600 mt-0.5">Revenue</p>
						</div>
					</div>
				</div>
			</section>

			<div className="bg-gray-50 border-y border-gray-100">
				<div className="max-w-7xl mx-auto px-5 lg:px-8 py-4">
					<div className="flex flex-wrap gap-6 lg:gap-12">
						{[{ label: "Industry", value: "Luxury Retail" },{ label: "Location", value: "UK" },{ label: "Duration", value: "9 Months" },{ label: "Services Used", value: "SEO + CRO + Paid Ads" }].map((item) => (
							<div key={item.label} className="flex items-center gap-3">
								<div>
									<p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{item.label}</p>
									<p className="text-sm font-bold text-gray-900 mt-0.5">{item.value}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm">
				<div className="max-w-7xl mx-auto px-5 lg:px-8">
					<div className="flex gap-0 overflow-x-auto">
						{TABS.map((tab) => (
							<button key={tab} onClick={() => setActiveTab(tab)} className={`shrink-0 px-5 py-4 text-xs font-bold border-b-2 transition-all ${activeTab === tab ? "border-blue-700 text-blue-700" : "border-transparent text-gray-500 hover:text-gray-800"}`}>
								{tab}
							</button>
						))}
					</div>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 lg:py-16 space-y-16">
				<div className="grid lg:grid-cols-3 gap-8">
					<div>
						<p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">About The Client</p>
						<h3 className="text-xl font-black text-gray-900 mb-4">GubeLuxe</h3>
						<p className="text-sm text-gray-600 leading-relaxed">A luxury ecommerce brand specialising in handcrafted home goods. Needed better SEO, improved product pages and scaled paid acquisition to increase AOV.</p>
					</div>

					<div>
						<p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">The Challenge</p>
						<h3 className="text-xl font-black text-gray-900 mb-4">What We Had to Solve</h3>
						<ul className="flex flex-col gap-2.5">
							{["Low organic product visibility","High cart abandonment","Slow site speed","No A/B testing","Fragmented analytics"].map((item) => (
								<li key={item} className="flex items-start gap-2 text-sm text-gray-600"><HiXCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />{item}</li>
							))}
						</ul>
					</div>

					<div>
						<p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">Before Working With Us</p>
						<h3 className="text-xl font-black text-gray-900 mb-4">Starting Point</h3>
						<div className="grid grid-cols-2 gap-3">
							{[{ v: "1,800", l: "Monthly Traffic" },{ v: "45", l: "Orders / Month" },{ v: "£24.30", l: "AOV" },{ v: "1.2%", l: "Conversion Rate" }].map((s) => (
								<div key={s.l} className="bg-red-50 border border-red-100 rounded-2xl p-4 text-center"><p className="text-2xl font-black text-red-600">{s.v}</p><p className="text-[10px] text-gray-500 font-medium mt-1">{s.l}</p></div>
							))}
						</div>
					</div>
				</div>

				<div>
					<div className="mb-8">
						<p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">Our Strategy</p>
						<h3 className="text-3xl font-black text-gray-900">A combined SEO, CRO and paid strategy to increase revenue.</h3>
					</div>
					<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
						{[{ n: "01", title: "Product SEO", desc: "Optimise product pages and schema." },{ n: "02", title: "CRO", desc: "A/B test checkout and product pages." },{ n: "03", title: "Site Speed", desc: "Performance improvements and CDN." },{ n: "04", title: "Paid Scale", desc: "Scale top-performing paid channels." },{ n: "05", title: "Analytics", desc: "Unified tracking and LTV modelling." }].map((step)=> (
							<div key={step.n} className="bg-gray-50 rounded-2xl p-5 border border-gray-100"><span className="text-4xl font-black text-blue-100">{step.n}</span><h4 className="text-sm font-black text-gray-900 mt-2 mb-2">{step.title}</h4><p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p></div>
						))}
					</div>
				</div>

				<div>
					<p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-6">Services Used</p>
					<div className="flex flex-wrap gap-3">
						{["SEO","CRO","Paid Ads","Performance","Analytics"].map((s)=> (<span key={s} className="flex items-center gap-2 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-100 px-5 py-2.5 rounded-2xl shadow-sm">{s}</span>))}
					</div>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 items-start">
					<div>
						<p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">What We Did</p>
						<h3 className="text-3xl font-black text-gray-900 mb-6">Full ecommerce growth program focused on revenue.</h3>
						<div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
							{["Technical SEO","Product Schema","Checkout tests","Performance optimisations","Paid creative","Email flows","Analytics","Personalisation"].map((item)=> (<div key={item} className="flex items-center gap-2 text-sm text-gray-700"><HiCheckCircle className="w-4 h-4 text-blue-600 shrink-0" />{item}</div>))}
						</div>
					</div>

					<div className="bg-blue-900 rounded-3xl p-8 text-white">
						<p className="text-5xl text-blue-400 font-black leading-none mb-4">"</p>
						<p className="text-base leading-relaxed text-blue-100 mb-6">DeepRank helped us scale revenue and reduce churn — their tests and optimisation were game changing for our store.</p>
						<div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-black text-sm">GL</div><div><p className="text-sm font-bold">GubeLuxe CEO</p><p className="text-xs text-blue-300">CEO, GubeLuxe</p></div></div>
					</div>
				</div>

				<div>
					<p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">The Results</p>
					<h3 className="text-3xl font-black text-gray-900 mb-10">Measured uplift across revenue, traffic and conversion.</h3>

					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
						{[{ label: "Revenue", before: "£24.3K", after: "£86.7K", delta: "+256%", color: "#3B82F6", grad: "og", data: trafficData, positive: true },{ label: "Orders", before: "45", after: "210", delta: "+366%", color: "#8B5CF6", grad: "le", data: leadsData, positive: true },{ label: "AOV", before: "£24.3", after: "£38.9", delta: "+60%", color: "#10B981", grad: "cp", data: trafficData, positive: true },{ label: "Conversion", before: "1.2%", after: "3.8%", delta: "+217%", color: "#F59E0B", grad: "ic", data: leadsData, positive: true }].map((m)=> (
							<div key={m.label} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"><p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">{m.label}</p><div className="flex items-end justify-between mb-1"><p className="text-3xl font-black text-gray-900">{m.after}</p><span className={`text-xs font-bold px-2 py-0.5 rounded-lg ${m.positive ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>{m.delta}</span></div><p className="text-[10px] text-gray-400 mb-3">was {m.before}</p><MetricChart data={m.data} color={m.color} gradient={m.grad} /></div>
						))}
					</div>

					<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
						<div className="flex items-center justify-between mb-1"><p className="text-sm font-black text-gray-900">Performance Over Time</p><span className="text-[10px] text-gray-400 bg-gray-50 px-2.5 py-1 rounded-lg">Jan – Jun 2025</span></div>
						<p className="text-[11px] text-gray-400 mb-4">Monthly growth across organic traffic, leads and orders</p>
						<div className="flex flex-wrap gap-4 mb-4">{[{ color: "#3B82F6", label: "Organic Traffic" },{ color: "#8B5CF6", label: "Leads" },{ color: "#10B981", label: "Orders" }].map((l)=> (<span key={l.label} className="flex items-center gap-1.5 text-[11px] text-gray-500"><span className="w-2 h-2 rounded-full" style={{ backgroundColor: l.color }} />{l.label}</span>))}</div>
						<ResponsiveContainer width="100%" height={240}><LineChart data={performanceData} margin={{ top: 4, right: 8, left: -20, bottom: 0 }}><CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6" /><XAxis dataKey="m" tick={{ fontSize: 10, fill: "#9CA3AF" }} axisLine={false} tickLine={false} /><YAxis tick={{ fontSize: 10, fill: "#9CA3AF" }} axisLine={false} tickLine={false} /><Tooltip contentStyle={{ fontSize: 11, borderRadius: 8, border: "1px solid #E5E7EB" }} /><Line type="monotone" dataKey="organic" stroke="#3B82F6" strokeWidth={2.5} dot={false} /><Line type="monotone" dataKey="leads" stroke="#8B5CF6" strokeWidth={2.5} dot={false} /><Line type="monotone" dataKey="sales" stroke="#10B981" strokeWidth={2.5} dot={false} /></LineChart></ResponsiveContainer>
					</div>
				</div>

				<div>
					<p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">Related Case Studies</p>
					<h3 className="text-2xl font-black text-gray-900 mb-8">More Success Stories</h3>
					<div className="grid sm:grid-cols-3 gap-5">
						{relatedCases.map((c) => (
							<div key={c.title} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer bg-white">
								<div className="relative h-44 overflow-hidden">
									<img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
									<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
									<span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">{c.tag}</span>
									<div className="absolute bottom-3 left-3"><div className="bg-white rounded-xl px-3 py-1.5 shadow-lg inline-block"><p className="text-xl font-black text-blue-900 leading-none">{c.stat}</p><p className="text-[9px] text-gray-500 font-medium">{c.label}</p></div></div>
								</div>
								<div className="p-4"><h4 className="text-sm font-bold text-gray-900 mb-1.5">{c.title}</h4><p className="text-gray-500 text-xs leading-relaxed mb-3">{c.desc}</p><button className="flex items-center gap-1 text-blue-700 font-semibold text-xs hover:gap-2.5 transition-all">View Case Study <HiArrowRight className="w-3.5 h-3.5" /></button></div>
							</div>
						))}
					</div>
				</div>

				<div className="bg-blue-900 rounded-3xl p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 justify-between">
					<div className="flex items-center gap-6"><div className="w-16 h-16 rounded-2xl bg-blue-800 flex items-center justify-center shrink-0"><span className="text-3xl">🛍️</span></div><div><p className="text-white font-black text-2xl lg:text-3xl leading-tight">Want Similar Results<br />For Your Business?</p><p className="text-blue-300 text-sm mt-1">Let's build your success story.</p></div></div>
					<button onClick={open} className="shrink-0 flex items-center gap-2 bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-2xl font-black text-sm transition-all shadow-xl whitespace-nowrap">Book Discovery Call <HiArrowRight className="w-4 h-4" /></button>
				</div>

			</div>

			<CTA />
		</div>
	);
};

export default GubeLuxe;
