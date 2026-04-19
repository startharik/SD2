'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Leaf, 
  Wind, 
  Globe, 
  BarChart3, 
  CheckCircle2,
  Trophy,
  ArrowUpRight,
  Droplets,
  Trees,
  FileText,
  ShieldCheck,
  Building2,
  ExternalLink,
  Download,
  Activity,
  Zap,
  LayoutGrid,
  Shield,
  Award
} from 'lucide-react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';
import { cn } from '@/lib/utils';

const pieData = [
  { name: 'Renewable Energy', value: 45, color: '#10b981' },
  { name: 'Carbon Removal', value: 25, color: '#34d399' },
  { name: 'Clean Water', value: 20, color: '#059669' },
  { name: 'Social Housing', value: 10, color: '#064e3b' },
];

const impactHistory = [
  { month: 'Jan', co2: 850, water: 45 },
  { month: 'Feb', co2: 920, water: 52 },
  { month: 'Mar', co2: 1100, water: 65 },
  { month: 'Apr', co2: 1050, water: 58 },
  { month: 'May', co2: 1250, water: 72 },
  { month: 'Jun', co2: 1450, water: 85 },
];

export default function ESGPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'environmental' | 'social' | 'governance'>('overview');

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20">
      
      {/* 1. HERO HEADER: IMPACT STATUS */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3 p-6 rounded-[2rem] bg-card border border-border flex flex-col md:flex-row items-center justify-between overflow-hidden relative group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <Leaf size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-black text-foreground tracking-tight leading-none">ESG Impact Hub</h1>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mt-2">Personalized Portfolio Analytics</p>
              </div>
            </div>
            <div className="hidden md:block h-10 w-px bg-border" />
            <div className="flex items-center gap-8">
              <div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">CO2 Offset</p>
                <p className="text-xl font-black text-foreground tracking-tight">12.4k<span className="text-xs text-slate-400 ml-1">t</span></p>
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Impact Score</p>
                <p className="text-xl font-black text-primary tracking-tight">A+ <span className="text-[10px] text-emerald-500 ml-1">(+12)</span></p>
              </div>
              <div className="hidden sm:block">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Registry Status</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-xs font-black text-foreground uppercase tracking-widest">Live Verified</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 relative z-10 mt-6 md:mt-0">
            <div className="flex p-1 rounded-xl bg-background border border-border">
              {['overview', 'environmental', 'social', 'governance'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all",
                    activeTab === tab ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-500 hover:text-foreground"
                  )}
                >
                  {tab.charAt(0).toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 rounded-[2rem] bg-emerald-500 text-white flex flex-col justify-between shadow-2xl shadow-emerald-500/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <div className="relative z-10 flex justify-between items-start">
            <p className="text-[10px] font-black uppercase tracking-widest text-white/70">Impact Goal</p>
            <Trophy size={16} className="text-white/50" />
          </div>
          <div className="relative z-10 mt-4">
            <p className="text-2xl font-black tracking-tight leading-none">Net Zero 2030</p>
            <div className="w-full h-1 bg-white/20 rounded-full mt-3 overflow-hidden">
              <div className="w-[65%] h-full bg-white shadow-[0_0_10px_white]" />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'overview' && (
          <motion.div 
            key="overview"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Left/Main: Impact Dashboard */}
            <div className="lg:col-span-8 space-y-6">
              <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none">
                  <Trees size={200} />
                </div>
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div>
                    <h3 className="text-lg font-black text-foreground tracking-tight">Environmental Performance</h3>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">Monthly Offset Tracking (Tonnes CO2)</p>
                  </div>
                  <div className="flex p-1 rounded-lg bg-background border border-border">
                    <button className="px-3 py-1 rounded-md bg-primary text-white text-[9px] font-black uppercase">CO2</button>
                    <button className="px-3 py-1 rounded-md text-slate-500 text-[9px] font-black uppercase">Water</button>
                  </div>
                </div>
                
                <div className="h-[300px] w-full relative z-10">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={impactHistory}>
                      <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.03} vertical={false} />
                      <XAxis dataKey="month" stroke="currentColor" strokeOpacity={0.3} fontSize={10} fontWeight="black" tickLine={false} axisLine={false} dy={10} />
                      <YAxis stroke="currentColor" strokeOpacity={0.3} fontSize={10} fontWeight="black" tickLine={false} axisLine={false} dx={-5} />
                      <Tooltip 
                        cursor={{fill: 'var(--primary)', fillOpacity: 0.05}}
                        content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-card p-4 rounded-xl border border-border shadow-2xl space-y-2">
                                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{payload[0].payload.month}</p>
                                <p className="text-lg font-black text-primary">{payload[0].value} t CO2</p>
                              </div>
                            );
                          }
                          return null;
                        }} 
                      />
                      <Bar dataKey="co2" fill="var(--primary)" radius={[6, 6, 0, 0]} barSize={40} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl">
                  <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-8">Personalized Impact Mix</h3>
                  <div className="flex items-center gap-8">
                    <div className="w-[140px] h-[140px] shrink-0">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie data={pieData} cx="50%" cy="50%" innerRadius={45} outerRadius={65} paddingAngle={8} dataKey="value">
                            {pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />)}
                          </Pie>
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="space-y-3 w-full">
                      {pieData.map((item) => (
                        <div key={item.name} className="flex items-center justify-between group">
                          <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                            <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest group-hover:text-foreground transition-colors">{item.name}</span>
                          </div>
                          <span className="text-[10px] font-black text-foreground">{item.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-8 rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between group">
                  <div className="absolute top-0 right-0 p-6 text-white/5 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={120} />
                  </div>
                  <div className="relative z-10">
                    <div className="p-3 rounded-2xl bg-primary/20 text-primary w-fit mb-6 border border-primary/20">
                      <Award size={24} />
                    </div>
                    <h3 className="text-xl font-black text-white tracking-tight mb-4 leading-tight">Impact Certification</h3>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed">
                      Your investments are fully certified byBureau Veritas and USGBC Platinum standards, recorded as immutable on-chain proof.
                    </p>
                  </div>
                  <button className="mt-8 flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">View All Certificates</span>
                    <ArrowUpRight size={16} className="text-slate-500 group-hover:text-primary transition-colors" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Category Grades & Registry */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl">
                <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-8">Category Breakdown</h3>
                <div className="space-y-6">
                  {[
                    { title: 'Environmental', grade: 'A+', icon: Wind, trend: '+4%' },
                    { title: 'Social Impact', grade: 'AAA', icon: Globe, trend: 'Stable' },
                    { title: 'Governance', grade: 'AA', icon: Shield, trend: '+2%' },
                  ].map((cat) => (
                    <div key={cat.title} className="p-4 rounded-2xl bg-background border border-border group hover:border-primary/30 transition-all cursor-pointer">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:text-primary transition-colors">
                            <cat.icon size={18} />
                          </div>
                          <span className="text-xs font-black text-foreground">{cat.title}</span>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black border border-primary/20">{cat.grade}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map(i => <div key={i} className={cn("w-6 h-1 rounded-full", i <= 4 ? "bg-primary" : "bg-slate-100 dark:bg-slate-800")} />)}
                        </div>
                        <span className="text-[8px] font-black text-emerald-500 uppercase tracking-widest">{cat.trend}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <FileText size={20} />
                  </div>
                  <h3 className="text-sm font-black text-foreground tracking-tight">Impact Registry</h3>
                </div>
                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-border">
                  <p className="text-[9px] text-slate-500 font-bold leading-relaxed uppercase tracking-widest italic">
                    Every megawatt and tonne offset is certified and recorded as an immutable NFT proof on the SD Impact Registry.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="group relative flex items-center justify-between w-full p-5 rounded-2xl bg-slate-900 text-white shadow-2xl transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden border border-white/10">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-primary/20 to-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.3),transparent_70%)]" />
                    <div className="relative z-10 flex flex-col items-start gap-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">Annual Review 2026</span>
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500 text-[8px] font-black text-white uppercase animate-pulse">New</span>
                      </div>
                      <span className="text-xs font-black uppercase tracking-widest text-white">Download ESG Report</span>
                    </div>
                    <div className="relative z-10 p-2 rounded-xl bg-white/10 text-white group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Download size={18} className="group-hover:animate-bounce" />
                    </div>
                  </button>
                  <button className="flex items-center justify-between w-full p-4 rounded-2xl border border-border hover:bg-slate-50 dark:hover:bg-slate-800 transition-all group">
                    <span className="text-[10px] font-black text-foreground uppercase tracking-widest">On-Chain Registry</span>
                    <ExternalLink size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Placeholder for other tabs - can be expanded later */}
        {activeTab !== 'overview' && (
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-12 rounded-[3rem] bg-card border border-border shadow-xl flex flex-col items-center justify-center text-center min-h-[500px]"
          >
            <div className="p-6 rounded-[2.5rem] bg-primary/10 text-primary mb-8 animate-pulse">
              <Activity size={48} />
            </div>
            <h2 className="text-2xl font-black text-foreground tracking-tight mb-4 uppercase">{activeTab} Analytics</h2>
            <p className="text-slate-500 font-medium max-w-md">Detailed category-specific impact metrics and historical audit trails are being compiled from the institutional ledger.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. PORTFOLIO AGGREGATE FOOTER */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-10 rounded-[3rem] bg-slate-900 dark:bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 opacity-5 pointer-events-none">
          <Building2 size={400} strokeWidth={0.5} />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-primary/20 text-primary border border-primary/20">
                <LayoutGrid size={24} />
              </div>
              <h2 className="text-2xl font-black tracking-tight leading-none">Real Estate Portfolio Impact</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Renewable', value: '45.2', unit: 'GWh', icon: Wind },
                { label: 'Wind Power', value: '28.4', unit: 'GWh', icon: Wind },
                { label: 'Water Saved', value: '1.2', unit: 'ML', icon: Droplets },
                { label: 'Land Restored', value: '420', unit: 'Ha', icon: Trees },
              ].map((item) => (
                <div key={item.label} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all group">
                  <div className="flex items-center gap-2 mb-3 text-slate-500 group-hover:text-primary transition-colors">
                    <item.icon size={16} />
                    <span className="text-[9px] font-black uppercase tracking-widest">{item.label}</span>
                  </div>
                  <p className="text-xl font-black text-white">{item.value}<span className="text-[10px] text-slate-500 ml-1.5">{item.unit}</span></p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
