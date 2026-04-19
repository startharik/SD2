'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  Leaf, 
  ShieldCheck, 
  BarChart3, 
  ArrowUpRight, 
  Wallet,
  Globe,
  CheckCircle2,
  X
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { cn } from '@/lib/utils';
import { InvestModal } from '@/components/InvestModal';

const mockChartData = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 4500 },
  { name: 'Mar', value: 4200 },
  { name: 'Apr', value: 4800 },
  { name: 'May', value: 5200 },
  { name: 'Jun', value: 5100 },
  { name: 'Jul', value: 5900 },
];

export default function Dashboard() {
  const [isInvestModalOpen, setIsInvestModalOpen] = useState(false);
  const [portfolioValue, setPortfolioValue] = useState(1240500);
  const [showToast, setShowToast] = useState(false);

  const handleInvestSuccess = (amount: number) => {
    // Add small delay to match modal closing animation
    setTimeout(() => {
      setPortfolioValue(prev => prev + amount);
      setShowToast(true);
      // Auto hide toast
      setTimeout(() => setShowToast(false), 5000);
    }, 500);
  };

  return (
    <div className="space-y-10">
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

      {/* Hero / Portfolio Summary */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 p-10 rounded-[2rem] bg-card border border-border shadow-2xl shadow-slate-200 dark:shadow-none relative overflow-hidden group transition-all duration-500"
        >
          <div className="absolute top-0 right-0 p-12 text-primary/5 group-hover:text-primary/10 transition-colors duration-500">
            <Globe size={160} />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-slate-400 dark:text-slate-500 text-xs font-bold mb-2 uppercase tracking-[0.2em]">Total Portfolio Value</h2>
            <div className="flex items-baseline gap-4 mb-10">
              <motion.span 
                key={portfolioValue}
                initial={{ opacity: 0.5, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-5xl font-black text-card-foreground tracking-tight"
              >
                ${portfolioValue.toLocaleString()}
              </motion.span>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                <TrendingUp size={14} /> +12.5%
              </div>
            </div>
            
            <div className="h-[240px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={mockChartData}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="var(--primary)" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'var(--card)', 
                      border: '1px solid var(--border)', 
                      borderRadius: '16px',
                      color: 'var(--card-foreground)',
                      boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="value" 
                    stroke="var(--primary)" 
                    fillOpacity={1} 
                    fill="url(#colorValue)" 
                    strokeWidth={4} 
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-10 rounded-[2rem] bg-card border border-border flex flex-col justify-between shadow-2xl shadow-slate-200 dark:shadow-none transition-all duration-500"
        >
          <div>
            <h3 className="text-2xl font-black text-card-foreground mb-8 tracking-tight">Asset Allocation</h3>
            <div className="space-y-6">
              {[
                { 
                  name: 'Physical Asset Layer', 
                  value: '40%', 
                  desc: '72,000 sq ft facility', 
                  color: 'bg-primary' 
                },
                { 
                  name: 'Revenue Asset Layer', 
                  value: '30%', 
                  desc: 'Core & Supplementary streams', 
                  color: 'bg-emerald-400' 
                },
                { 
                  name: 'ESG Asset Layer', 
                  value: '20%', 
                  desc: 'Carbon and water credits', 
                  color: 'bg-emerald-600' 
                },
                { 
                  name: 'Digital & IP Layer', 
                  value: '10%', 
                  desc: 'VGH-AAI & SCCT infra', 
                  color: 'bg-slate-400' 
                },
              ].map((item) => (
                <div key={item.name} className="group">
                  <div className="flex justify-between items-end mb-2 px-1">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{item.name}</span>
                      <span className="text-[8px] font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest leading-none">{item.desc}</span>
                    </div>
                    <span className="text-sm font-black text-card-foreground">{item.value}</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: item.value }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={cn("h-full rounded-full", item.color)}
                    />
                  </div>
                </div>
              ))}
              
              <button 
                onClick={() => setIsInvestModalOpen(true)}
                className="w-full mt-6 p-5 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-lg transition-all duration-300 shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group"
              >
                Invest Now
                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="pt-8 space-y-4 border-t border-border mt-8">
            <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
              <span className="text-slate-400">Strategy</span>
              <span className="text-primary">Balanced Growth</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Metric Cards */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { 
            label: 'Current APY', 
            value: '8.4%', 
            icon: TrendingUp, 
            sub: 'Fixed + Performance',
            status: 'Live'
          },
          { 
            label: 'ESG Score', 
            value: '94/100', 
            icon: Leaf, 
            sub: 'Top 5% of Sector',
            status: 'Live'
          },
          { 
            label: 'Compliance', 
            value: 'KYC Verified', 
            icon: ShieldCheck, 
            sub: 'Tier 2 Institutional',
            status: 'Live'
          },
          { 
            label: 'Total Yield', 
            value: '$84,200', 
            icon: Wallet, 
            sub: 'Claimable: $2,400',
            status: 'Live',
            highlight: true
          },
        ].map((metric, i) => (
          <motion.div 
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + (i * 0.1) }}
            className="p-8 rounded-[1.5rem] bg-card border border-border shadow-xl shadow-slate-100 dark:shadow-none hover:border-primary/30 transition-all duration-300 group relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                <metric.icon size={24} />
              </div>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[8px] font-black uppercase tracking-widest border border-primary/20">
                <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                {metric.status}
              </div>
            </div>
            
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{metric.label}</span>
              <p className="text-3xl font-black text-card-foreground tracking-tight">{metric.value}</p>
              <p className={cn(
                "text-[10px] font-bold uppercase tracking-widest mt-2",
                metric.highlight ? "text-primary" : "text-slate-400"
              )}>
                {metric.sub}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Featured Assets */}
      <section className="space-y-8">
        <div className="flex items-center justify-between px-2">
          <h2 className="text-2xl font-black text-card-foreground flex items-center gap-4 tracking-tight">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Leaf size={24} />
            </div>
            Active Asset Opportunities
          </h2>
          <button className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all duration-300">
            View All Opportunities <ArrowUpRight size={16} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            whileHover={{ y: -8 }}
            className="rounded-[2.5rem] overflow-hidden bg-card border border-border group cursor-pointer shadow-2xl shadow-slate-200 dark:shadow-none transition-all duration-500"
          >
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-[url('/rwa1.jpg')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-1.5 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20">
                  Active
                </span>
              </div>
            </div>
            <div className="p-10 relative">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-black text-card-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">SD Covenant</h3>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Sharjah Development • Multipurpose RWA</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Reforestation', 'Wildlife', 'Ecosystem', 'Carbon'].map(tag => (
                      <span key={tag} className="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: 'Yield', value: '9.2%', color: 'text-primary' },
                  { label: 'Target', value: '$1B', color: 'text-card-foreground' },
                  { label: 'Carbon', value: '12k Ton', color: 'text-card-foreground' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300 border border-transparent group-hover:border-primary/10">
                    <p className="text-[10px] text-slate-400 uppercase mb-1 font-black tracking-widest">{stat.label}</p>
                    <p className={`text-lg font-black tracking-tight ${stat.color}`}>{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -8 }}
            className="rounded-[2.5rem] overflow-hidden bg-card border border-border group cursor-pointer shadow-2xl shadow-slate-200 dark:shadow-none transition-all duration-500"
          >
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-[url('/madagascar.png')] bg-cover bg-center group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
              <div className="absolute top-6 left-6">
                <span className="px-4 py-1.5 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-widest shadow-lg shadow-primary/20">
                  Active
                </span>
              </div>
            </div>
            <div className="p-10 relative">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-2xl font-black text-card-foreground group-hover:text-primary transition-colors duration-300 tracking-tight">Project Invest Madagascar</h3>
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mt-1">Madagascar • Biodiversity & Conservation</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {['Reforestation', 'Wildlife', 'Ecosystem', 'Carbon'].map(tag => (
                      <span key={tag} className="text-[8px] font-black uppercase tracking-widest px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 border border-border">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                {[
                  { label: 'Yield', value: '7.5%', color: 'text-primary' },
                  { label: 'Target', value: '$50B', color: 'text-card-foreground' },
                  { label: 'Carbon', value: '45k Ton', color: 'text-card-foreground' },
                ].map((stat) => (
                  <div key={stat.label} className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300 border border-transparent group-hover:border-primary/10">
                    <p className="text-[10px] text-slate-400 uppercase mb-1 font-black tracking-widest">{stat.label}</p>
                    <p className={cn("text-lg font-black tracking-tight", stat.color)}>{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Asset Explorer Preview */}
      <section className="p-10 rounded-[2.5rem] bg-card border border-border shadow-2xl shadow-slate-200 dark:shadow-none transition-all duration-500">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-black text-card-foreground flex items-center gap-4 tracking-tight">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <BarChart3 size={24} />
            </div>
            Asset Performance Explorer
          </h2>
          <button className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all duration-300">
            View All Assets <ArrowUpRight size={16} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-[10px] text-slate-400 uppercase font-black tracking-[0.2em] border-b border-border">
                <th className="pb-6 px-6">Asset Name</th>
                <th className="pb-6 px-6">Asset Class</th>
                <th className="pb-6 px-6">Location</th>
                <th className="pb-6 px-6">NOI Yield</th>
                <th className="pb-6 px-6">ESG Rating</th>
                <th className="pb-6 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                { name: 'SD Covenant Community Center 1', location: 'Sharjah, UAE' },
                { name: 'SD Covenant Community Center 2', location: 'Abu Dhabi, UAE' },
                { name: 'SD Covenant Community Center 3', location: 'Dubai, UAE' },
              ].map((item, i) => (
                <tr key={i} className="border-b border-border/50 group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors duration-300">
                  <td className="py-6 px-6 text-card-foreground font-black tracking-tight">{item.name}</td>
                  <td className="py-6 px-6 text-slate-500 font-bold uppercase text-[10px] tracking-widest">Commercial RWA</td>
                  <td className="py-6 px-6 text-slate-400 font-medium">{item.location}</td>
                  <td className="py-6 px-6 text-primary font-black">8.4%</td>
                  <td className="py-6 px-6">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-black border border-primary/20 tracking-widest">AA+</span>
                  </td>
                  <td className="py-6 px-6 text-right">
                    <button className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-primary group-hover:text-white transition-all duration-300 flex items-center justify-center mx-auto mr-0">
                      <ArrowUpRight size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Invest Modal */}
      <InvestModal 
        isOpen={isInvestModalOpen} 
        onClose={() => setIsInvestModalOpen(false)} 
        onSuccess={handleInvestSuccess}
      />
    </div>
  );
}
