import { useState } from "react";
import { Link } from "react-router-dom";
import { HiCheckCircle, HiXCircle, HiArrowRight, HiChevronRight } from "react-icons/hi";
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import lumani from "../assets/lumani.png";
import yogalife from "../assets/yogalife.png";
import exademy from "../assets/exademy.png";
import CTA from "../sections/CTA";
import { useModal } from "../context/ModalContext";

const trafficData = [
  { m: "Jan", value: 700 },
  { m: "Feb", value: 950 },
  { m: "Mar", value: 1400 },
  { m: "Apr", value: 2100 },
  { m: "May", value: 2900 },
  { m: "Jun", value: 3700 },
];

const leadsData = [
  { m: "Jan", value: 6 },
  { m: "Feb", value: 10 },
  { m: "Mar", value: 18 },
  { m: "Apr", value: 28 },
  { m: "May", value: 44 },
  { m: "Jun", value: 65 },
];

const performanceData = [
  { m: "Jan", organic: 700, leads: 6, conversions: 2 },
  { m: "Feb", organic: 950, leads: 10, conversions: 4 },
  { m: "Mar", organic: 1400, leads: 18, conversions: 9 },
  { m: "Apr", organic: 2100, leads: 28, conversions: 16 },
  { m: "May", organic: 2900, leads: 44, conversions: 28 },
  { m: "Jun", organic: 3700, leads: 65, conversions: 48 },
];

const TABS = ["Overview", "About The Client", "Our Strategy", "The Results", "Testimonial"];

const relatedCases = [
  { img: lumani, tag: "Enterprise", title: "Lumani Systems", stat: "+300%", label: "Leads", desc: "Complex product rollout with measurable lead growth." },
  { img: exademy, tag: "Education", title: "Exademy", stat: "+250%", label: "Course Sales", desc: "High-performance learning platform built for growth." },
  { img: yogalife, tag: "Wellness", title: "Yogalife Global", stat: "+120%", label: "Membership Growth", desc: "Redesigned LMS and automation grew memberships." },
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

const LumaniSystem = () => {
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
          <span className="text-gray-900 font-semibold">Lumani Systems</span>
        </nav>
      </div>

      <section className="max-w-7xl mx-auto px-5 lg:px-8 py-10 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-widest text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full mb-4 uppercase">Success Story</span>
            <h1 className="text-4xl lg:text-5xl font-black leading-[1.08] text-gray-900 mb-3">Lumani Systems</h1>
            <h2 className="text-3xl lg:text-4xl font-black text-blue-700 leading-tight mb-5">300% Increase In Leads</h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6 max-w-lg">Lumani partnered with DeepRank to launch a complex product offering and drive qualified lead growth through technical marketing and enterprise-focused UX.</p>
            <div className="flex flex-wrap gap-2 mb-8">{["Enterprise","Technical","Product","Demand Gen"].map(t=>(<span key={t} className="text-xs font-semibold text-blue-700 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-full">{t}</span>))}</div>
            <button onClick={open} className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-800 text-white px-7 py-3.5 rounded-2xl font-semibold text-sm">Book Discovery Call <HiArrowRight className="w-4 h-4"/></button>
          </div>

          <div className="relative"><div className="rounded-3xl overflow-hidden shadow-2xl"><img src={lumani} alt="Lumani" className="w-full h-80 lg:h-96 object-cover"/></div></div>
        </div>
      </section>

      <div className="bg-gray-50 border-y border-gray-100"><div className="max-w-7xl mx-auto px-5 lg:px-8 py-4"><div className="flex flex-wrap gap-6 lg:gap-12">{[{label:"Industry",value:"Enterprise Software"},{label:"Location",value:"EMEA"},{label:"Duration",value:"10 Months"},{label:"Services Used",value:"Product Marketing + Demand Gen"}].map(i=>(<div key={i.label} className="flex items-center gap-3"><div><p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{i.label}</p><p className="text-sm font-bold text-gray-900 mt-0.5">{i.value}</p></div></div>))}</div></div></div>

      <div className="sticky top-0 z-30 bg-white border-b border-gray-100 shadow-sm"><div className="max-w-7xl mx-auto px-5 lg:px-8"><div className="flex gap-0 overflow-x-auto">{TABS.map(tab=>(<button key={tab} onClick={()=>setActiveTab(tab)} className={`shrink-0 px-5 py-4 text-xs font-bold border-b-2 transition-all ${activeTab===tab?"border-blue-700 text-blue-700":"border-transparent text-gray-500 hover:text-gray-800"}`}>{tab}</button>))}</div></div></div>

      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-12 lg:py-16 space-y-16">
        <div className="grid lg:grid-cols-3 gap-8"><div><p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">About The Client</p><h3 className="text-xl font-black text-gray-900 mb-4">Lumani Systems</h3><p className="text-sm text-gray-600 leading-relaxed">Lumani builds complex industrial control systems and needed a go-to-market strategy to launch new products in target markets.</p></div><div><p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">The Challenge</p><h3 className="text-xl font-black text-gray-900 mb-4">What We Had to Solve</h3><ul className="flex flex-col gap-2.5">{["Complex product messaging","Long sales cycles","Poor lead qualification","No scalable demand gen"].map(i=>(<li key={i} className="flex items-start gap-2 text-sm text-gray-600"><HiXCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5"/>{i}</li>))}</ul></div><div><p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">Before Working With Us</p><h3 className="text-xl font-black text-gray-900 mb-4">Starting Point</h3><div className="grid grid-cols-2 gap-3">{[{v:"700",l:"Monthly Traffic"},{v:"10",l:"Leads / Month"},{v:"£0",l:"MQLs"},{v:"0.6%",l:"Conversion Rate"}].map(s=>(<div key={s.l} className="bg-red-50 border border-red-100 rounded-2xl p-4 text-center"><p className="text-2xl font-black text-red-600">{s.v}</p><p className="text-[10px] text-gray-500 font-medium mt-1">{s.l}</p></div>))}</div></div></div>

        <div><div className="mb-8"><p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">Our Strategy</p><h3 className="text-3xl font-black text-gray-900">Product-led demand gen and technical content strategy.</h3></div><div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">{[{n:"01",title:"Technical Content",desc:"Whitepapers & docs"},{n:"02",title:"SEO",desc:"Targeted enterprise queries"},{n:"03",title:"ABM",desc:"Account-based campaigns"},{n:"04",title:"Lead Scoring",desc:"Qualify early and route"},{n:"05",title:"Analytics",desc:"Funnel + pipeline reporting"}].map(step=>(<div key={step.n} className="bg-gray-50 rounded-2xl p-5 border border-gray-100"><span className="text-4xl font-black text-blue-100">{step.n}</span><h4 className="text-sm font-black text-gray-900 mt-2 mb-2">{step.title}</h4><p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p></div>))}</div></div>

        <div><p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-6">Services Used</p><div className="flex flex-wrap gap-3">{"Content,ABM,Analytics,SEO,Demand Gen".split(',').map(s=>(<span key={s} className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm">{s}</span>))}</div></div>

        <div className="grid lg:grid-cols-2 gap-12 items-start"><div><p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">What We Did</p><h3 className="text-3xl font-black text-gray-900 mb-6">Enterprise-ready marketing and funnel optimisation.</h3><div className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">{"Technical content,SEO,ABM,Lead scoring,Campaigns,Reporting,Playbooks,Support".split(',').map(item=>(<div key={item} className="flex items-center gap-2 text-sm text-gray-700"><HiCheckCircle className="w-4 h-4 text-blue-600 shrink-0"/>{item}</div>))}</div></div><div className="bg-blue-900 rounded-3xl p-8 text-white"><p className="text-5xl text-blue-400 font-black leading-none mb-4">"</p><p className="text-base leading-relaxed text-blue-100 mb-6">"DeepRank helped us craft messaging and demand gen that actually moved pipeline."</p><div className="flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white font-black text-sm">LU</div><div><p className="text-sm font-bold">Lumani Systems</p><p className="text-xs text-blue-300">Head of Marketing</p></div></div></div></div>

        <div><p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-2">The Results</p><h3 className="text-3xl font-black text-gray-900 mb-10">Lead volume and pipeline improved significantly.</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">{[{label:"Leads",before:"10",after:"40",delta:"+300%",color:"#3B82F6",grad:"og",data:trafficData,positive:true},{label:"Traffic",before:"700",after:"3.7K",delta:"+429%",color:"#8B5CF6",grad:"le",data:trafficData,positive:true},{label:"MQLs",before:"0",after:"18",delta:"—",color:"#10B981",grad:"cp",data:leadsData,positive:true},{label:"Conversion",before:"0.6%",after:"2.1%",delta:"+250%",color:"#F59E0B",grad:"ic",data:leadsData,positive:true}].map(m=>(<div key={m.label} className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm"><p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">{m.label}</p><div className="flex items-end justify-between mb-1"><p className="text-3xl font-black text-gray-900">{m.after}</p><span className={`text-xs font-bold px-2 py-0.5 rounded-lg ${m.positive?"bg-green-50 text-green-700":"bg-red-50 text-red-700"}`}>{m.delta}</span></div><p className="text-[10px] text-gray-400 mb-3">was {m.before}</p><MetricChart data={m.data} color={m.color} gradient={m.grad} /></div>))}</div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm"><div className="flex items-center justify-between mb-1"><p className="text-sm font-black text-gray-900">Performance Over Time</p><span className="text-[10px] text-gray-400 bg-gray-50 px-2.5 py-1 rounded-lg">Jan – Jun 2025</span></div><p className="text-[11px] text-gray-400 mb-4">Monthly performance across campaigns</p><div className="h-[240px]"><ResponsiveContainer width="100%" height="100%"><LineChart data={performanceData} margin={{top:4,right:8,left:-20,bottom:0}}><CartesianGrid strokeDasharray="3 3" stroke="#F3F4F6"/><XAxis dataKey="m" tick={{fontSize:10,fill:"#9CA3AF"}} axisLine={false} tickLine={false}/><YAxis tick={{fontSize:10,fill:"#9CA3AF"}} axisLine={false} tickLine={false}/><Tooltip contentStyle={{fontSize:11,borderRadius:8,border:"1px solid #E5E7EB"}}/><Line type="monotone" dataKey="organic" stroke="#3B82F6" strokeWidth={2.5} dot={false}/><Line type="monotone" dataKey="leads" stroke="#8B5CF6" strokeWidth={2.5} dot={false}/><Line type="monotone" dataKey="conversions" stroke="#10B981" strokeWidth={2.5} dot={false}/></LineChart></ResponsiveContainer></div></div>
        </div>

        <div><p className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mb-3">Related Case Studies</p><h3 className="text-2xl font-black text-gray-900 mb-8">More Success Stories</h3><div className="grid sm:grid-cols-3 gap-5">{relatedCases.map(c=>(<div key={c.title} className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-pointer bg-white"><div className="relative h-44 overflow-hidden"><img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/><div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"/><span className="absolute top-3 left-3 text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-100 text-blue-700">{c.tag}</span><div className="absolute bottom-3 left-3"><div className="bg-white rounded-xl px-3 py-1.5 shadow-lg inline-block"><p className="text-xl font-black text-blue-900 leading-none">{c.stat}</p><p className="text-[9px] text-gray-500 font-medium">{c.label}</p></div></div></div><div className="p-4"><h4 className="text-sm font-bold text-gray-900 mb-1.5">{c.title}</h4><p className="text-gray-500 text-xs leading-relaxed mb-3">{c.desc}</p><button className="flex items-center gap-1 text-blue-700 font-semibold text-xs hover:gap-2.5 transition-all">View Case Study <HiArrowRight className="w-3.5 h-3.5"/></button></div></div>))}</div></div>

        <div className="rounded-3xl bg-[#0B0F9C] p-8 text-white shadow-[0_24px_90px_rgba(11,15,156,0.2)] lg:p-12"><div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-2xl"><p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-blue-100">Ready To Grow?</p><h3 className="mt-3 text-3xl font-black sm:text-4xl">Ready To Build Demand For Your Product?</h3><p className="mt-4 text-lg leading-8 text-blue-100">We help technical product teams create market demand and predictable pipelines.</p></div><div className="flex flex-wrap gap-3"><button onClick={open} className="rounded-2xl bg-white px-6 py-3.5 text-sm font-semibold text-[#0B0F9C] transition-transform duration-300 hover:-translate-y-0.5">Book Discovery Call</button><a href="/services" className="rounded-2xl border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10">Explore Services</a></div></div></div>
      </div>

      <CTA />
    </div>
  );
};

export default LumaniSystem;
