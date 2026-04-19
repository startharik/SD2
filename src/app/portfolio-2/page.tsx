'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  TrendingUp, 
  Leaf, 
  ShieldCheck, 
  BarChart3, 
  ArrowUpRight, 
  Wallet,
  Globe,
  CheckCircle2,
  X,
  LayoutGrid,
  Zap,
  Activity,
  ArrowRight,
  Database,
  Lock,
  RefreshCcw,
  PieChart,
  ExternalLink,
  ChevronDown,
  Building2,
  Cpu,
  Layers,
  Sparkles,
  Gavel
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  Tooltip, 
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';
import { cn } from '@/lib/utils';
import { InvestModal } from '@/components/InvestModal';

const mockChartData = [
  { name: 'Jan', value: 4000, yield: 240 },
  { name: 'Feb', value: 4500, yield: 280 },
  { name: 'Mar', value: 4200, yield: 260 },
  { name: 'Apr', value: 4800, yield: 310 },
  { name: 'May', value: 5200, yield: 340 },
  { name: 'Jun', value: 5100, yield: 320 },
  { name: 'Jul', value: 5900, yield: 390 },
];

export default function Portfolio2Page() {
  const [isInvestModalOpen, setIsInvestModalOpen] = useState(false);
  const [portfolioValue, setPortfolioValue] = useState(1240500);
  const [showToast, setShowToast] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const handleInvestSuccess = (amount: number) => {
    setTimeout(() => {
      setPortfolioValue(prev => prev + amount);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    }, 500);
  };

  return (
    <div className="relative min-h-screen">
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-[110] w-full max-w-sm"
          >
            <div className="mx-4 p-4 rounded-2xl bg-emerald-500 text-black shadow-2xl shadow-emerald-500/20 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle2 size={20} className="shrink-0" />
                <div className="flex flex-col">
                  <span className="font-bold text-sm">Transaction Successful</span>
                  <span className="text-[10px] font-medium opacity-80 uppercase tracking-widest font-mono">Polygon L2 Testnet Verified</span>
                </div>
              </div>
              <button onClick={() => setShowToast(false)} className="p-1 hover:bg-black/10 rounded-lg transition-colors">
                <X size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. CINEMATIC HERO SECTION */}
      <motion.section 
        style={{ scale: heroScale, opacity: heroOpacity }}
        className="relative h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden px-6"
      >
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-bounce-slow" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[100px] animate-spin-slow" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8 max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/5 border border-border backdrop-blur-xl">
            <Sparkles size={14} className="text-primary" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500">The Future of Institutional RWAs</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-foreground tracking-tighter leading-none">
            Your Digital <span className="text-primary italic">Empire</span>, Verified.
          </h1>

          <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Manage your high-yield Sharjah real estate portfolio with on-chain transparency and real-time environmental impact tracking.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <button 
              onClick={() => setIsInvestModalOpen(true)}
              className="px-10 py-5 rounded-full bg-primary text-white font-black text-sm uppercase tracking-widest hover:scale-105 hover:shadow-2xl hover:shadow-primary/40 transition-all flex items-center gap-3 group"
            >
              Expand Portfolio
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 rounded-full bg-card/30 backdrop-blur-xl border border-border text-foreground font-black text-sm uppercase tracking-widest hover:bg-card/50 transition-all">
              View Global Ledger
            </button>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-500">Scroll to Explore</span>
          <ChevronDown size={20} className="text-primary" />
        </motion.div>
      </motion.section>

      {/* 2. FLOATING KPI DASHBOARD */}
      <section className="relative z-10 -mt-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Portfolio Valuation', value: `$${portfolioValue.toLocaleString()}`, icon: Wallet, desc: 'Real-time On-chain Value' },
            { label: 'Verified Yield', value: '8.4%', icon: TrendingUp, desc: 'Average Portfolio APY' },
            { label: 'Carbon Removed', value: '12.4k t', icon: Leaf, desc: 'Verified ESG Credits' },
            { label: 'Security Level', value: 'Tier 2', icon: ShieldCheck, desc: 'Institutional Compliant' },
          ].map((item, i) => (
            <motion.div 
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2.5rem] bg-card/50 backdrop-blur-2xl border border-border shadow-2xl group hover:border-primary/50 transition-all"
            >
              <div className="p-3 rounded-2xl bg-primary/10 text-primary w-fit mb-6 group-hover:scale-110 transition-transform">
                <item.icon size={24} />
              </div>
              <p className="text-2xl font-black text-foreground tracking-tight mb-1">{item.value}</p>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">{item.label}</p>
              <div className="h-px w-full bg-border mb-4" />
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. IMMERSIVE PERFORMANCE HUB */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                <Activity size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Performance Terminal</span>
              </div>
              <h2 className="text-5xl font-black text-foreground tracking-tighter leading-tight">
                Institutional <span className="text-primary">Intelligence.</span>
              </h2>
              <p className="text-lg text-slate-400 font-medium leading-relaxed">
                Track your real estate yields with precision. Our proprietary AI engine predicts NOI trends while the Polygon L2 ledger ensures every cent is accounted for.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { label: 'Automated Yield Engine', icon: Zap, color: 'text-amber-500' },
                { label: 'ESG Compliance Registry', icon: ShieldCheck, color: 'text-emerald-500' },
                { label: 'Decentralized Governance', icon: Gavel, color: 'text-blue-500' },
              ].map((feature) => (
                <div key={feature.label} className="flex items-center gap-4 p-4 rounded-2xl bg-card/30 border border-border group hover:bg-card/50 transition-all cursor-pointer">
                  <div className={cn("p-2 rounded-xl bg-background border border-border", feature.color)}>
                    <feature.icon size={18} />
                  </div>
                  <span className="text-sm font-black text-foreground uppercase tracking-widest">{feature.label}</span>
                  <ArrowRight size={14} className="ml-auto text-slate-500 group-hover:text-primary transition-colors group-hover:translate-x-1" />
                </div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 p-8 rounded-[3rem] bg-card border border-border shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5 opacity-0 hover:opacity-100 transition-opacity pointer-events-none" />
            <div className="h-[400px] w-full relative z-10">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockChartData}>
                  <defs>
                    <linearGradient id="fancyGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="currentColor" strokeOpacity={0.03} vertical={false} />
                  <XAxis dataKey="name" stroke="currentColor" strokeOpacity={0.3} fontSize={10} fontWeight="black" tickLine={false} axisLine={false} dy={10} />
                  <YAxis stroke="currentColor" strokeOpacity={0.3} fontSize={10} fontWeight="black" tickLine={false} axisLine={false} dx={-5} />
                  <Tooltip 
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="bg-card/90 backdrop-blur-xl p-6 rounded-[2rem] border border-border shadow-2xl space-y-2">
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{payload[0].payload.name} Valuation</p>
                            <p className="text-3xl font-black text-primary">${payload[0].value?.toLocaleString()}</p>
                            <div className="flex items-center gap-2 pt-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Verified Growth</span>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Area type="monotone" dataKey="value" stroke="var(--primary)" strokeWidth={5} fill="url(#fancyGradient)" animationDuration={3000} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. CINEMATIC ASSET SHOWCASE */}
      <section className="py-32 px-6 bg-foreground/[0.02] border-y border-border">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Curated Assets</h2>
            <p className="text-5xl font-black text-foreground tracking-tight">Sharjah&apos;s Premium RWA Feed</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'SD Covenant Sharjah', class: 'Commercial Hub', yield: '9.2%', img: 'https://images.unsplash.com/photo-1577493322603-5814e6da567d?auto=format&fit=crop&q=80&w=800', tags: ['Events', 'Education'] },
              { name: 'Madagascar Bio-Reserve', class: 'ESG/Bio', yield: '7.5%', img: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800', tags: ['Carbon', 'Wildlife'] },
              { name: 'Leasing Engine Dubai', class: 'Revenue Layer', yield: '8.4%', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=800', tags: ['Leasing', 'Media'] },
            ].map((asset, i) => (
              <motion.div 
                key={asset.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative rounded-[3rem] overflow-hidden bg-card border border-border shadow-2xl hover:shadow-primary/10 transition-all cursor-pointer"
              >
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img src={asset.img} alt={asset.name} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute top-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 text-white">
                    <p className="text-[8px] font-black uppercase tracking-widest mb-1 opacity-60 text-center">Projected Yield</p>
                    <p className="text-xl font-black text-center">{asset.yield}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                  <div className="flex gap-2">
                    {asset.tags.map(tag => (
                      <span key={tag} className="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded bg-white/10 backdrop-blur-md text-white border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-primary uppercase tracking-widest mb-1">{asset.class}</p>
                    <h3 className="text-2xl font-black text-white tracking-tight">{asset.name}</h3>
                  </div>
                  <button className="w-full py-4 rounded-2xl bg-white text-black font-black text-[10px] uppercase tracking-widest opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center gap-2">
                    Access Asset Terminal <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INSTITUTIONAL LEDGER FOOTER */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-32 px-6"
      >
        <div className="max-w-7xl mx-auto p-12 rounded-[4rem] bg-slate-900 dark:bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
          <div className="absolute -top-48 -right-48 opacity-5 pointer-events-none">
            <Globe size={600} strokeWidth={0.5} className="animate-spin-slow" />
          </div>

          <div className="flex-1 space-y-8 relative z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 p-3 rounded-2xl bg-primary/20 text-primary border border-primary/20">
              <Database size={32} />
              <div className="h-10 w-px bg-primary/20" />
              <h2 className="text-3xl font-black tracking-tighter leading-none">Sharjah Institutional Ledger</h2>
            </div>
            
            <p className="text-xl text-slate-400 leading-relaxed font-medium max-w-3xl">
              SD Covenant provides a fully transparent, real-time ledger for institutional asset management. All valuations and yield distributions are verified on-chain via the <span className="text-primary font-bold">Polygon L2</span> protocol.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {[
                { label: 'Real-time Feed', icon: Activity },
                { label: 'SEC Compliant', icon: ShieldCheck },
                { label: 'Asset Backed', icon: PieChart },
                { label: 'L2 Verified', icon: Cpu },
              ].map((badge) => (
                <div key={badge.label} className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-[11px] font-black uppercase tracking-widest flex items-center gap-2 group hover:bg-white/10 transition-all">
                  <badge.icon size={16} className="text-primary group-hover:scale-110 transition-transform" />
                  {badge.label}
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[400px] space-y-6 relative z-10">
            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-transparent border border-white/10 backdrop-blur-3xl space-y-8">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-primary uppercase tracking-[0.3em]">Compliance Protocol</p>
                <p className="text-2xl font-black text-white tracking-tight">Verified Institutional Tier 2</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <span>IDENTITY CLAIM</span>
                  <span className="text-emerald-500">AUTHENTICATED</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
                </div>
              </div>
              <button className="w-full py-5 rounded-2xl bg-white text-black font-black text-[10px] uppercase tracking-widest hover:scale-[1.02] transition-all flex items-center justify-center gap-2">
                Access Compliance Vault <ExternalLink size={14} />
              </button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Invest Modal */}
      <InvestModal 
        isOpen={isInvestModalOpen} 
        onClose={() => setIsInvestModalOpen(false)} 
        onSuccess={handleInvestSuccess}
      />
    </div>
  );
}
