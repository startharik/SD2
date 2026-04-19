'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Zap, 
  Leaf, 
  DollarSign, 
  RefreshCcw,
  ShieldCheck,
  Cpu,
  Globe,
  Activity,
  Database,
  Link,
  ChevronRight,
  Lock,
  Wifi,
  Radio,
  Binary,
  ShieldAlert,
  Server,
  ArrowRight
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine,
  AreaChart,
  Area
} from 'recharts';
import { cn } from '@/lib/utils';

const mockData = [
  { time: '12:00', kwh: 450, carbon: 120, revenue: 1200, sqft: 72000 },
  { time: '12:15', kwh: 480, carbon: 125, revenue: 1250, sqft: 72000 },
  { time: '12:30', kwh: 520, carbon: 130, revenue: 1300, sqft: 72000 },
  { time: '12:45', kwh: 510, carbon: 128, revenue: 1280, sqft: 72000 },
  { time: '13:00', kwh: 550, carbon: 135, revenue: 1350, sqft: 72000 },
  { time: '13:15', kwh: 580, carbon: 140, revenue: 1400, sqft: 72000 },
  { time: '13:30', kwh: 610, carbon: 145, revenue: 1450, sqft: 72000 },
];

export default function OraclePage() {
  const [lastUpdate, setLastUpdate] = useState(new Date().toLocaleTimeString());
  const [isUpdating, setIsUpdating] = useState(false);
  const [activeTab, setActiveTab] = useState<'performance' | 'network'>('performance');

  const handleManualUpdate = () => {
    setIsUpdating(true);
    setTimeout(() => {
      setLastUpdate(new Date().toLocaleTimeString());
      setIsUpdating(false);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20">
      
      {/* 1. HEADER: STATUS & QUICK SYNC */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-card/30 backdrop-blur-md p-4 rounded-2xl border border-border">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
            <h1 className="text-xl font-black text-foreground tracking-tight">Oracle Command Center</h1>
          </div>
          <div className="hidden md:block h-6 w-px bg-border" />
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Network Status</span>
            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase">Operational</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Last Sync</p>
            <p className="text-xs font-black text-foreground font-mono">{lastUpdate}</p>
          </div>
          <button 
            onClick={handleManualUpdate}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 text-white transition-all shadow-lg shadow-primary/20 group"
          >
            <RefreshCcw className={cn("w-4 h-4", isUpdating && "animate-spin")} />
            <span className="text-xs font-black uppercase tracking-widest">Sync Network</span>
          </button>
        </div>
      </div>

      {/* 2. KPI ROW: VITAL METRICS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Network Latency', value: '120ms', icon: Wifi, trend: 'Optimal', color: 'primary' },
          { label: 'Oracle Uptime', value: '99.98%', icon: Server, trend: 'Verified', color: 'emerald' },
          { label: 'Data Integrity', value: '100%', icon: ShieldCheck, trend: 'Secure', color: 'blue' },
          { label: 'Global Syncs', value: '1.2M+', icon: RefreshCcw, trend: 'Real-time', color: 'amber' },
        ].map((item, i) => (
          <motion.div 
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-5 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all group"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={cn("p-2 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-400 group-hover:text-primary transition-colors")}>
                <item.icon size={18} />
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.trend}</span>
            </div>
            <p className="text-3xl font-black text-foreground tracking-tight mb-1">{item.value}</p>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{item.label}</p>
          </motion.div>
        ))}
      </div>

      {/* 3. CENTER HUB: INTERACTIVE DATA & VERIFICATION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left/Main: Asset Hub (8 Cols) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-8 rounded-3xl bg-card border border-border shadow-xl overflow-hidden flex flex-col min-h-[550px]"
        >
          <div className="p-6 border-b border-border flex items-center justify-between bg-card/50">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Activity size={24} />
              </div>
              <div>
                <h2 className="text-xl font-black text-foreground tracking-tight">Real-Time Asset Hub</h2>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Institutional RWA Feed</p>
              </div>
            </div>
            
            <div className="flex p-1 rounded-xl bg-background border border-border">
              <button 
                onClick={() => setActiveTab('performance')}
                className={cn(
                  "px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                  activeTab === 'performance' ? "bg-primary text-white" : "text-slate-500 hover:text-foreground"
                )}
              >
                Utilization
              </button>
              <button 
                onClick={() => setActiveTab('network')}
                className={cn(
                  "px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all",
                  activeTab === 'network' ? "bg-primary text-white" : "text-slate-500 hover:text-foreground"
                )}
              >
                Network
              </button>
            </div>
          </div>

          <div className="flex-1 p-6">
            {activeTab === 'performance' ? (
              <div className="space-y-6">
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={mockData}>
                      <defs>
                        <linearGradient id="primaryGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.03} vertical={false} />
                      <XAxis dataKey="time" stroke="currentColor" strokeOpacity={0.3} fontSize={10} fontWeight="black" tickLine={false} axisLine={false} dy={10} />
                      <YAxis stroke="currentColor" strokeOpacity={0.3} fontSize={10} fontWeight="black" tickLine={false} axisLine={false} dx={-5} />
                      <Tooltip content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          return (
                            <div className="bg-card p-4 rounded-xl border border-border shadow-xl space-y-2">
                              <p className="text-[10px] font-black text-foreground/40 uppercase tracking-widest">{payload[0].payload.time}</p>
                              <div className="space-y-0.5">
                                <p className="text-sm font-black text-emerald-500">CARBON: {payload[0].payload.carbon} t</p>
                                <p className="text-sm font-black text-primary">SQFT: {payload[0].payload.sqft.toLocaleString()}</p>
                              </div>
                            </div>
                          );
                        }
                        return null;
                      }} />
                      <Area type="monotone" dataKey="sqft" stroke="var(--primary)" strokeWidth={3} fill="url(#primaryGradient)" animationDuration={2000} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'Active Utilization', value: '72,000', unit: 'SQFT', color: 'primary' },
                    { label: 'Verified Carbon', value: '145', unit: 'TONNES', color: 'emerald' },
                    { label: 'Revenue Impact', value: '$1,450', unit: '/ HR', color: 'amber' },
                  ].map((stat) => (
                    <div key={stat.label} className="p-4 rounded-2xl bg-foreground/[0.02] border border-border">
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{stat.label}</p>
                      <p className="text-2xl font-black text-foreground">{stat.value}<span className="text-[10px] text-slate-400 ml-1.5">{stat.unit}</span></p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                <div className="p-6 rounded-2xl bg-foreground/[0.02] border border-border flex flex-col items-center justify-center relative overflow-hidden group">
                  <Globe size={240} className="text-primary/10 group-hover:text-primary/20 transition-all duration-1000 animate-spin-slow" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="p-4 rounded-xl bg-card/80 backdrop-blur-xl border border-primary/20 text-center">
                      <p className="text-xl font-black text-foreground">Sharjah Hub</p>
                      <p className="text-[10px] text-primary font-black uppercase tracking-widest">Master Node</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Network Health</h3>
                  {[
                    { name: 'Data Latency', value: '120ms', icon: Wifi },
                    { name: 'Consensus', value: '100%', icon: Radio },
                    { name: 'Uptime', value: '99.99%', icon: Server },
                    { name: 'Block Time', value: '2.4s', icon: Binary },
                  ].map((stat) => (
                    <div key={stat.name} className="p-3.5 rounded-xl bg-foreground/[0.02] border border-border flex items-center justify-between group hover:border-primary/30 transition-all">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          <stat.icon size={16} />
                        </div>
                        <span className="text-xs font-black text-foreground">{stat.name}</span>
                      </div>
                      <span className="text-lg font-black text-foreground font-mono">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Right: Verification & Security (4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="p-6 rounded-3xl bg-card border border-border shadow-xl space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                <ShieldCheck size={28} />
              </div>
              <div>
                <h2 className="text-xl font-black text-foreground tracking-tight">Verification</h2>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Protocol Layer V4</p>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { label: 'Data Source', value: 'IoT Sensor Network', icon: Database, status: 'Verified' },
                { label: 'Oracle Node', value: 'Chainlink DON', icon: Link, status: 'Verified' },
                { label: 'Asset ID', value: 'RWA-SOL-SHJ-002', icon: Globe, status: 'On-Chain' },
              ].map((item) => (
                <div key={item.label} className="p-4 rounded-xl bg-background border border-border group hover:border-emerald-500/30 transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-lg bg-card text-emerald-500 group-hover:scale-110 transition-transform">
                      <item.icon size={14} />
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-widest px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                      {item.status}
                    </span>
                  </div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-0.5">{item.label}</p>
                  <p className="text-sm font-black text-foreground tracking-tight">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20 relative overflow-hidden group cursor-pointer">
              <div className="relative z-10 flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-white/70 uppercase font-black tracking-widest mb-1">Security Status</p>
                  <p className="text-xl font-black tracking-tight">Active Protection</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/20 backdrop-blur-md">
                  <Lock size={18} />
                </div>
              </div>
              <Cpu size={100} className="absolute top-1/2 right-[-5%] -translate-y-1/2 opacity-10 pointer-events-none group-hover:scale-110 transition-transform" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* 4. BOTTOM ROW: AUDIT & COMPLIANCE */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden group">
          <ShieldAlert size={120} className="absolute top-0 right-0 p-8 text-primary/5 group-hover:text-primary/10 transition-colors" />
          <div className="relative z-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Radio size={20} />
              </div>
              <h3 className="text-lg font-black text-white tracking-tight">Audit Trail</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-medium max-w-lg">
              Cryptographically signed asset data is pushed to the Treasury contract every 15 minutes, backing all NOI distributions with real-world proof.
            </p>
            <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-primary transition-colors">
              View Smart Contract <ArrowRight size={14} />
            </button>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-card border border-border shadow-xl flex flex-col justify-center space-y-4">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="text-lg font-black text-foreground tracking-tight">Compliance Status</h3>
              <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest">Institutional Ledger active</p>
            </div>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            All oracle data is cryptographically signed and stored on the SD Covenant compliance ledger for institutional auditing, ensuring full regulatory alignment and transparency.
          </p>
        </div>
      </div>
    </div>
  );
}
