'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight,
  Calendar,
  Wallet,
  Globe,
  PieChart,
  Calculator,
  Building2,
  Video,
  GraduationCap,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  RefreshCcw,
  Zap,
  History,
  Cpu,
  DollarSign
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  Tooltip, 
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { cn } from '@/lib/utils';

const mockHistoryData = [
  { month: 'Jan', revenue: 120000, payout: 36000 },
  { month: 'Feb', revenue: 145000, payout: 43500 },
  { month: 'Mar', revenue: 138000, payout: 41400 },
  { month: 'Apr', revenue: 162000, payout: 48600 },
  { month: 'May', revenue: 185000, payout: 55500 },
  { month: 'Jun', revenue: 178000, payout: 53400 },
];

const compositionData = [
  { name: 'Events', value: 35, color: '#10b981' },
  { name: 'Education', value: 25, color: '#3b82f6' },
  { name: 'Leasing', value: 25, color: '#6366f1' },
  { name: 'Media', value: 15, color: '#f59e0b' },
];

export default function RevenuePage() {
  const tabs = ['overview', 'simulator', 'audit'] as const;
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>('overview');
  const [noiInput, setNoiInput] = useState('1000000');
  const [isSimulating, setIsSimulating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const estimatedPayout = Number(noiInput) * 0.3;

  const handleSimulate = () => {
    setIsSimulating(true);
    setShowResult(false);
    setTimeout(() => {
      setIsSimulating(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20">
      
      {/* 1. HERO HEADER: FINANCIAL OVERVIEW */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3 p-6 rounded-[2rem] bg-card border border-border flex flex-col md:flex-row items-center justify-between overflow-hidden relative group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <TrendingUp size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-black text-foreground tracking-tight leading-none">Revenue Engine</h1>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mt-2">Institutional NOI Distribution</p>
              </div>
            </div>
            <div className="hidden md:block h-10 w-px bg-border" />
            <div className="flex items-center gap-8">
              <div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Total Distributed</p>
                <p className="text-xl font-black text-foreground tracking-tight">$1.2M+</p>
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Payout Ratio</p>
                <p className="text-xl font-black text-primary tracking-tight">30%</p>
              </div>
              <div className="hidden sm:block">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Distribution Asset</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-[8px] font-black text-white">$</div>
                  <p className="text-sm font-black text-foreground">USDC</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 relative z-10 mt-6 md:mt-0">
            <div className="flex p-1 rounded-xl bg-background border border-border">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all",
                    activeTab === tab ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-500 hover:text-foreground"
                  )}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 rounded-[2rem] bg-primary text-white flex flex-col justify-between shadow-2xl shadow-primary/20 relative overflow-hidden group">
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          <div className="relative z-10 flex justify-between items-start">
            <p className="text-[10px] font-black uppercase tracking-widest text-white/70">Next Payout</p>
            <Calendar size={16} className="text-white/50" />
          </div>
          <div className="relative z-10 mt-4">
            <p className="text-2xl font-black tracking-tight leading-none">Nov 15, 2026</p>
            <div className="text-[9px] font-black uppercase tracking-[0.2em] mt-2 text-white/60 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Engine Ready
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
            {/* Performance Analytics */}
            <div className="lg:col-span-8 space-y-6">
              <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-lg font-black text-foreground tracking-tight">Financial Performance</h3>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">Rolling 6 Month Historical Data</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Revenue</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Payouts</span>
                    </div>
                  </div>
                </div>
                
                <div className="h-[350px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={mockHistoryData}>
                      <defs>
                        <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.03} vertical={false} />
                      <XAxis dataKey="month" stroke="currentColor" strokeOpacity={0.3} fontSize={10} fontWeight="black" tickLine={false} axisLine={false} dy={10} />
                      <YAxis stroke="currentColor" strokeOpacity={0.3} fontSize={10} fontWeight="black" tickLine={false} axisLine={false} dx={-5} />
                      <Tooltip content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-card p-4 rounded-xl border border-border shadow-2xl space-y-2">
                              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{payload[0].payload.month}</p>
                              <div className="space-y-1">
                                <p className="text-lg font-black text-primary">${payload[0].value?.toLocaleString()}</p>
                                <p className="text-xs font-black text-blue-500">Payout: ${payload[1].value?.toLocaleString()}</p>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }} />
                      <Area type="monotone" dataKey="revenue" stroke="var(--primary)" strokeWidth={3} fill="url(#revenueGradient)" animationDuration={2000} />
                      <Area type="monotone" dataKey="payout" stroke="#3b82f6" strokeWidth={2} fill="transparent" strokeDasharray="5 5" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl">
                  <h3 className="text-sm font-black text-foreground tracking-tight mb-6 flex items-center gap-2">
                    <PieChart size={18} className="text-primary" />
                    Revenue Composition
                  </h3>
                  <div className="h-[200px] w-full mb-6">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={compositionData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.03} horizontal={false} />
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" stroke="currentColor" strokeOpacity={0.5} fontSize={10} fontWeight="black" tickLine={false} axisLine={false} width={80} />
                        <Tooltip cursor={{fill: 'transparent'}} content={({ active, payload }) => {
                          if (active && payload && payload.length) {
                            return (
                              <div className="bg-card p-3 rounded-lg border border-border shadow-xl">
                                <p className="text-xs font-black text-foreground">{payload[0].value}% of Total</p>
                              </div>
                            );
                          }
                          return null;
                        }} />
                        <Bar dataKey="value" radius={[0, 10, 10, 0]} barSize={20}>
                          {compositionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} fillOpacity={0.8} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {compositionData.slice(0, 4).map((item) => (
                      <div key={item.name} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{item.name}</span>
                        <span className="text-[10px] font-black text-foreground ml-auto">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between">
                  <div className="absolute top-0 right-0 p-6 opacity-10">
                    <ShieldCheck size={120} />
                  </div>
                  <div className="relative z-10">
                    <div className="p-3 rounded-2xl bg-primary/20 text-primary w-fit mb-6 border border-primary/20">
                      <Globe size={24} />
                    </div>
                    <h3 className="text-xl font-black text-white tracking-tight mb-4 leading-tight">Institutional Yield Protection</h3>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed">
                      All revenue reports are cryptographically verified by third-party auditors before being pushed to the distribution engine.
                    </p>
                  </div>
                  <button className="mt-8 flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">Audit Smart Contract</span>
                    <ArrowUpRight size={16} className="text-slate-500 group-hover:text-primary transition-colors" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side: Quick Stats & Streams */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl">
                <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Distribution Streams</h3>
                <div className="space-y-4">
                  {[
                    { title: 'Event & Venue', value: '$145k', icon: Calendar, trend: 'up' },
                    { title: 'Edu-Training', value: '$92k', icon: GraduationCap, trend: 'up' },
                    { title: 'RWA Leasing', value: '$84k', icon: Building2, trend: 'down' },
                    { title: 'Media Services', value: '$42k', icon: Video, trend: 'up' },
                  ].map((stream) => (
                    <div key={stream.title} className="p-4 rounded-2xl bg-background border border-border flex items-center justify-between group hover:border-primary/30 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:text-primary transition-colors">
                          <stream.icon size={18} />
                        </div>
                        <div>
                          <p className="text-xs font-black text-foreground">{stream.title}</p>
                          <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest">Monthly Average</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-black text-foreground">{stream.value}</p>
                        <div className="flex items-center gap-1 justify-end">
                          {stream.trend === 'up' ? <ArrowUpRight size={10} className="text-emerald-500" /> : <ArrowDownRight size={10} className="text-rose-500" />}
                          <span className={cn("text-[8px] font-black", stream.trend === 'up' ? "text-emerald-500" : "text-rose-500")}>
                            {stream.trend === 'up' ? '+4.2%' : '-1.5%'}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl space-y-6">
                <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Active Wallet</h3>
                <div className="p-6 rounded-3xl bg-slate-50 dark:bg-slate-800/50 border border-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                      <Wallet size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-black text-foreground">0x8f...2c4a</p>
                      <p className="text-[9px] text-slate-500 font-bold uppercase">Institutional Vault</p>
                    </div>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-emerald-400" />
                </div>
                <div className="space-y-4 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Treasury Reserve</span>
                    <span className="text-xs font-black text-foreground">$4.2M</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div className="w-[70%] h-full bg-primary" />
                  </div>
                  <p className="text-[9px] text-slate-400 leading-relaxed font-medium">
                    70% of all generated NOI is maintained in the institutional reserve to back asset maintenance and protocol stability.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'simulator' && (
          <motion.div 
            key="simulator"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10"
          >
            <div className="p-10 rounded-[2.5rem] bg-card border border-border shadow-2xl">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <Calculator size={24} />
                </div>
                <h2 className="text-2xl font-black text-foreground tracking-tight">Payout Simulator</h2>
              </div>

              <div className="space-y-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-1">Total Project NOI ($)</label>
                  <div className="relative">
                    <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-black">$</div>
                    <input 
                      type="number" 
                      value={noiInput}
                      onChange={(e) => setNoiInput(e.target.value)}
                      className="w-full bg-slate-50 dark:bg-slate-800/50 border border-border rounded-2xl pl-10 pr-6 py-5 text-xl font-black text-foreground focus:outline-none focus:border-primary/50 transition-all"
                      placeholder="Enter NOI amount..."
                    />
                  </div>
                </div>

                <div className="p-8 rounded-[1.5rem] bg-slate-50 dark:bg-slate-800/50 border border-border space-y-6">
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                    <span className="text-slate-400">Distribution Policy</span>
                    <span className="text-primary bg-primary/10 px-3 py-1 rounded-full border border-primary/20 font-black">30.00%</span>
                  </div>
                  <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                    <span className="text-slate-400">Treasury Reserve</span>
                    <span className="text-foreground font-black">70.00%</span>
                  </div>
                  <div className="h-px bg-border" />
                  <div className="flex justify-between items-baseline pt-2">
                    <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Estimated Payout</span>
                    <span className="text-4xl font-black text-foreground tracking-tight">${estimatedPayout.toLocaleString()}</span>
                  </div>
                </div>

                <button 
                  onClick={handleSimulate}
                  disabled={isSimulating}
                  className="w-full py-6 rounded-2xl bg-primary hover:bg-primary/90 disabled:bg-slate-800 text-white font-black text-lg transition-all flex items-center justify-center gap-3 shadow-2xl shadow-primary/20"
                >
                  {isSimulating ? <RefreshCcw className="animate-spin" size={20} /> : "Execute Simulation"}
                  <ArrowRight size={20} />
                </button>

                {showResult && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-5 rounded-2xl bg-primary/10 border border-primary/20 flex items-center gap-4"
                  >
                    <CheckCircle2 size={20} className="text-primary shrink-0" />
                    <span className="text-[10px] text-primary font-black uppercase tracking-widest">Simulation Verified via Protocol V4.2 Rules</span>
                  </motion.div>
                )}
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-10 rounded-[2.5rem] bg-slate-900 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-xl font-black tracking-tight mb-4">How it works</h3>
                  <div className="space-y-6">
                    {[
                      { step: '01', title: 'NOI Certification', desc: 'Net Operating Income is calculated and certified by SD Covenant auditors.' },
                      { step: '02', title: 'Policy Application', desc: 'The 30/70 distribution policy is applied via the Revenue Smart Contract.' },
                      { step: '03', title: 'Automated Payout', desc: 'Funds are distributed in USDC directly to eligible token holder wallets.' },
                    ].map((item) => (
                      <div key={item.step} className="flex gap-4">
                        <span className="text-xl font-black text-primary/50">{item.step}</span>
                        <div>
                          <p className="text-sm font-black text-white">{item.title}</p>
                          <p className="text-xs text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl flex items-center gap-6">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                  <Zap size={32} />
                </div>
                <div>
                  <p className="text-xl font-black text-foreground">$1.2M+</p>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Cumulative Distributed</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'audit' && (
          <motion.div 
            key="audit"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-10 rounded-[2.5rem] bg-card border border-border shadow-2xl"
          >
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                  <History size={24} />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-foreground tracking-tight">Audit Trail</h2>
                  <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">On-chain distribution records</p>
                </div>
              </div>
              <button className="px-6 py-2.5 rounded-xl border border-border text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                Export CSV
              </button>
            </div>

            <div className="space-y-4">
              {[
                { date: 'March 2026', amount: '$420,500', payout: '$126,150', status: 'Distributed', id: '0x8f...2c4a', efficiency: '99.8%' },
                { date: 'February 2026', amount: '$385,200', payout: '$115,560', status: 'Distributed', id: '0x3a...9e1d', efficiency: '99.9%' },
                { date: 'January 2026', amount: '$410,000', payout: '$123,000', status: 'Distributed', id: '0x5c...7b8f', efficiency: '99.7%' },
                { date: 'December 2025', amount: '$450,000', payout: '$135,000', status: 'Distributed', id: '0x9d...4e2a', efficiency: '99.9%' },
              ].map((item) => (
                <div key={item.date} className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 rounded-2xl border border-border hover:border-primary/30 transition-all group">
                  <div>
                    <p className="text-sm font-black text-foreground tracking-tight">{item.date}</p>
                    <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest mt-1">{item.id}</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-1">Total NOI</p>
                    <p className="text-lg font-black text-foreground">{item.amount}</p>
                  </div>
                  <div>
                    <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-1">User Payout</p>
                    <p className="text-lg font-black text-primary">{item.payout}</p>
                  </div>
                  <div className="flex items-center justify-end gap-6">
                    <div className="text-right">
                      <p className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-1">Efficiency</p>
                      <p className="text-xs font-black text-foreground">{item.efficiency}</p>
                    </div>
                    <span className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-[9px] font-black uppercase tracking-widest border border-primary/20">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Automated Yield Engine Footer Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-10 rounded-[3rem] bg-slate-900 dark:bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 opacity-5 pointer-events-none">
          <Cpu size={400} strokeWidth={0.5} />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-primary/20 text-primary border border-primary/20">
                <Cpu size={24} />
              </div>
              <h2 className="text-2xl font-black tracking-tight leading-none">Automated Yield Engine</h2>
            </div>
            
            <p className="text-lg text-slate-400 leading-relaxed font-medium max-w-2xl">
              Distributions are triggered monthly based on certified NOI reports. 
              Calculations are transparently recorded on-chain via the <span className="text-primary font-bold">SD Covenant Revenue Engine</span>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {[
                { label: 'Payout Asset', value: 'USDC', icon: DollarSign },
                { label: 'Frequency', value: 'Monthly', icon: Calendar },
                { label: 'Gas Efficiency', value: '99.8%', icon: Zap },
              ].map((item) => (
                <div key={item.label} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/40 transition-all group">
                  <div className="flex items-center gap-3 mb-3 text-slate-500 group-hover:text-primary transition-colors">
                    <item.icon size={16} />
                    <span className="text-[9px] font-black uppercase tracking-widest">{item.label}</span>
                  </div>
                  <p className="text-xl font-black text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
