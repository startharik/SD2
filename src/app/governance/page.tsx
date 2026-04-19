'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  Clock, 
  Users, 
  ArrowRight,
  BarChart3,
  TrendingUp,
  FileText,
  Gavel,
  RefreshCcw,
  Zap,
  Shield,
  Search,
  Download,
  ExternalLink,
  ChevronRight,
  Scale,
  Activity,
  UserPlus,
  Landmark,
  PieChart
} from 'lucide-react';
import { cn } from '@/lib/utils';

export default function GovernancePage() {
  const [votedId, setVotedId] = useState<number | null>(null);
  const [isVoting, setIsVoting] = useState(false);
  const [activeTab, setActiveTab] = useState<'proposals' | 'voting-power' | 'treasury'>('proposals');

  const proposals = [
    {
      id: 1,
      title: 'UAT-2026-004: Expand SD Covenant Assets',
      description: 'Allocate $5M from the Treasury to double the capacity of the SD Covenant project. Expected increase in NOI: +15% per annum.',
      status: 'Active',
      votesFor: 12450000,
      votesAgainst: 1200000,
      endsIn: '2d 14h',
      creator: 'SD Foundation',
      type: 'Asset Allocation'
    },
    {
      id: 2,
      title: 'UAT-2026-003: Carbon Credit Liquidity Pool',
      description: 'Establish a dedicated liquidity pool for SD Covenant Carbon Credits on Uniswap v3 with initial seed of 100k Tonnes.',
      status: 'Passed',
      votesFor: 25000000,
      votesAgainst: 500000,
      endsIn: 'Closed',
      creator: 'Institutional LP',
      type: 'Liquidity'
    }
  ];

  const handleVote = (id: number) => {
    setIsVoting(true);
    setTimeout(() => {
      setVotedId(id);
      setIsVoting(false);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20">
      
      {/* 1. GOVERNANCE HERO HEADER */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3 p-6 rounded-[2rem] bg-card border border-border flex flex-col md:flex-row items-center justify-between overflow-hidden relative group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <Gavel size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-black text-foreground tracking-tight leading-none">DAO Governance</h1>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mt-2">Institutional Protocol Control</p>
              </div>
            </div>
            <div className="hidden md:block h-10 w-px bg-border" />
            <div className="flex items-center gap-8">
              <div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Voting Power</p>
                <p className="text-xl font-black text-foreground tracking-tight">1.2M <span className="text-[10px] text-primary">UAT</span></p>
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Active</p>
                <p className="text-xl font-black text-primary tracking-tight">01</p>
              </div>
              <div className="hidden sm:block">
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">DAO Status</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-xs font-black text-foreground uppercase tracking-widest">Connected</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 relative z-10 mt-6 md:mt-0">
            <div className="flex p-1 rounded-xl bg-background border border-border">
              {['proposals', 'voting-power', 'treasury'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as any)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-[9px] font-black uppercase tracking-widest transition-all",
                    activeTab === tab ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-500 hover:text-foreground"
                  )}
                >
                  {tab.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 rounded-[2rem] bg-slate-900 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex justify-between items-start">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">DAO Health</p>
            <Activity size={16} className="text-primary" />
          </div>
          <div className="relative z-10 mt-4">
            <p className="text-2xl font-black tracking-tight leading-none">74.2% Quorum</p>
            <div className="w-full h-1 bg-white/10 rounded-full mt-3 overflow-hidden">
              <div className="w-[74.2%] h-full bg-primary" />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'proposals' && (
          <motion.div 
            key="proposals"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6"
          >
            {/* Proposals List */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex items-center justify-between px-2">
                <h2 className="text-xl font-black text-foreground flex items-center gap-3 tracking-tight">
                  <FileText size={20} className="text-primary" />
                  Active Proposals
                </h2>
                <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                  Create Proposal
                </button>
              </div>

              {proposals.map((proposal, i) => (
                <div 
                  key={proposal.id}
                  className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl hover:border-primary/30 transition-all group"
                >
                  <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className={cn(
                          "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border",
                          proposal.status === 'Active' ? "bg-primary/10 text-primary border-primary/20" : "bg-slate-100 dark:bg-slate-800 text-slate-400 border-border"
                        )}>
                          {proposal.status}
                        </span>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{proposal.type}</span>
                      </div>
                      <h3 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors tracking-tight leading-tight">
                        {proposal.title}
                      </h3>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Proposed by {proposal.creator}</p>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 text-[10px] font-black uppercase tracking-widest bg-foreground/[0.02] px-4 py-2 rounded-full border border-border">
                      <Clock size={14} className="text-primary" /> Ends: {proposal.endsIn}
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 font-medium leading-relaxed mb-10">
                    {proposal.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                        <span className="text-primary">In Favor</span>
                        <span className="text-foreground">{(proposal.votesFor / 1000000).toFixed(1)}M UAT ({(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst) * 100).toFixed(1)}%)</span>
                      </div>
                      <div className="h-2 w-full bg-foreground/[0.03] rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${(proposal.votesFor / (proposal.votesFor + proposal.votesAgainst) * 100)}%` }} />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                        <span className="text-rose-500">Against</span>
                        <span className="text-foreground">{(proposal.votesAgainst / 1000000).toFixed(1)}M UAT ({(proposal.votesAgainst / (proposal.votesFor + proposal.votesAgainst) * 100).toFixed(1)}%)</span>
                      </div>
                      <div className="h-2 w-full bg-foreground/[0.03] rounded-full overflow-hidden">
                        <div className="h-full bg-rose-500 rounded-full" style={{ width: `${(proposal.votesAgainst / (proposal.votesFor + proposal.votesAgainst) * 100)}%` }} />
                      </div>
                    </div>
                  </div>

                  {proposal.status === 'Active' && (
                    <div className="flex gap-4">
                      {votedId === proposal.id ? (
                        <div className="w-full py-5 rounded-2xl bg-primary/10 border border-primary/20 text-primary font-black uppercase tracking-widest flex items-center justify-center gap-3">
                          <CheckCircle2 size={20} /> You voted FOR
                        </div>
                      ) : (
                        <>
                          <button 
                            onClick={() => handleVote(proposal.id)}
                            disabled={isVoting}
                            className="flex-1 py-5 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20"
                          >
                            {isVoting ? <RefreshCcw className="animate-spin" size={18} /> : "Vote FOR"}
                          </button>
                          <button 
                            disabled={isVoting}
                            className="flex-1 py-5 rounded-2xl border border-border text-foreground font-black text-sm uppercase tracking-widest hover:bg-rose-500/10 hover:text-rose-500 hover:border-rose-500/20 transition-all"
                          >
                            Vote AGAINST
                          </button>
                        </>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Column: Stats & Activity */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl">
                <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-8">DAO Metrics</h3>
                <div className="space-y-6">
                  {[
                    { label: 'Active Voters', value: '450', icon: Users, trend: '+12' },
                    { label: 'Quorum Reached', value: '74.2%', icon: Scale, trend: 'Optimal' },
                    { label: 'Total UAT Staked', value: '85M', icon: Shield, trend: '92%' },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center gap-4 p-4 rounded-2xl bg-foreground/[0.02] border border-border group hover:border-primary/30 transition-all">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <stat.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
                        <p className="text-xl font-black text-foreground">{stat.value}</p>
                      </div>
                      <span className="text-[9px] font-black text-primary bg-primary/10 px-2 py-1 rounded-lg uppercase tracking-widest">{stat.trend}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Activity size={20} />
                  </div>
                  <h3 className="text-sm font-black text-foreground tracking-tight">Recent Votes</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { user: '0x12...3456', action: 'FOR', time: '2h ago', color: 'emerald' },
                    { user: '0xab...cdef', action: 'FOR', time: '5h ago', color: 'emerald' },
                    { user: '0x78...9012', action: 'AGAINST', time: '8h ago', color: 'rose' },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-border/50 hover:border-primary/30 transition-all group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className={cn("w-1.5 h-1.5 rounded-full", activity.color === 'emerald' ? "bg-emerald-500" : "bg-rose-500")} />
                        <span className="text-[11px] font-black text-foreground font-mono group-hover:text-primary transition-colors">{activity.user}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={cn("text-[9px] font-black uppercase tracking-widest", activity.color === 'emerald' ? "text-emerald-500" : "text-rose-500")}>{activity.action}</span>
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{activity.time}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="flex items-center justify-between w-full p-4 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-all group mt-4">
                  <span className="text-[10px] font-black uppercase tracking-widest">View Governance Logs</span>
                  <ExternalLink size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Placeholder for other tabs */}
        {activeTab !== 'proposals' && (
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="p-12 rounded-[3rem] bg-card border border-border shadow-xl flex flex-col items-center justify-center text-center min-h-[500px]"
          >
            <div className="p-6 rounded-[2.5rem] bg-primary/10 text-primary mb-8 animate-pulse">
              <Activity size={48} />
            </div>
            <h2 className="text-2xl font-black text-foreground tracking-tight mb-4 uppercase">{activeTab} Interface</h2>
            <p className="text-slate-500 font-medium max-w-md">Detailed configuration for voting delegation, UAT staking rewards, and institutional treasury flows are being initialized.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. GOVERNANCE PROTOCOL FOOTER */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-10 rounded-[3rem] bg-slate-900 dark:bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 opacity-5 pointer-events-none">
          <Shield size={400} strokeWidth={0.5} />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-primary/20 text-primary border border-primary/20">
                <Landmark size={24} />
              </div>
              <h2 className="text-2xl font-black tracking-tight leading-none">Treasury & Protocol Control</h2>
            </div>
            <p className="text-lg text-slate-400 leading-relaxed font-medium max-w-3xl">
              The SD Covenant DAO empowers institutional holders to shape the protocol&apos;s future. All approved proposals are executed via <span className="text-primary font-bold">Timelock Smart Contracts</span> to ensure maximum security and transparency.
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Shield size={12} className="text-primary" /> Multi-sig Secured
              </div>
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Clock size={12} className="text-primary" /> 48h Timelock
              </div>
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Scale size={12} className="text-primary" /> Weighted Voting
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
