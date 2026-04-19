'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
   ShieldCheck, 
   UserCheck, 
   Lock, 
   RefreshCcw, 
   CheckCircle2, 
   XCircle,
   FileText, 
   Shield, 
   Activity, 
   Zap, 
   Globe, 
   Database, 
   Search,
   Download,
   ExternalLink, 
   ChevronRight,
   Gavel,
   Scale
 } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function CompliancePage() {
  const [kycStatus, setKycStatus] = useState('pending');
  const [isProcessing, setIsProcessing] = useState(false);
  const fromAddress = '0x1234...5678';
  const toAddress = '0xabcd...efgh';
  const [isWhitelisted, setIsWhitelisted] = useState(false);
  const [simulationResult, setSimulationResult] = useState<null | 'success' | 'error'>(null);
  const tabs = ['overview', 'verification', 'rules', 'logs'] as const;
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>('overview');

  const handleKyc = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setKycStatus('verified');
      setIsProcessing(false);
    }, 2000);
  };

  const simulateTransfer = () => {
    setIsProcessing(true);
    setSimulationResult(null);
    setTimeout(() => {
      setSimulationResult(isWhitelisted ? 'success' : 'error');
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20">
      
      {/* 1. HERO HEADER: COMPLIANCE STATUS */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3 p-6 rounded-[2rem] bg-card border border-border flex flex-col md:flex-row items-center justify-between overflow-hidden relative group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10 w-full md:w-auto">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-black text-foreground tracking-tight leading-none">Compliance Engine</h1>
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] mt-2">ERC-3643 Restriction Layer</p>
              </div>
            </div>
            <div className="hidden md:block h-10 w-px bg-border" />
            <div className="flex items-center gap-8">
              <div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">KYC Tier</p>
                <p className="text-xl font-black text-foreground tracking-tight">Tier 2 <span className="text-[10px] text-primary">INSTITUTIONAL</span></p>
              </div>
              <div>
                <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Status</p>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <p className="text-xs font-black text-emerald-500 uppercase tracking-widest">Active</p>
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
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6 rounded-[2rem] bg-slate-900 text-white flex flex-col justify-between shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative z-10 flex justify-between items-start">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Next Audit</p>
            <Gavel size={16} className="text-primary" />
          </div>
          <div className="relative z-10 mt-4">
            <p className="text-2xl font-black tracking-tight leading-none">Q3 Regulatory</p>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] mt-2 text-primary flex items-center gap-1.5">
              <Zap size={10} className="fill-primary" />
              Standard Verified
            </p>
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
            {/* Main Interactive Hub */}
            <div className="lg:col-span-8 space-y-6">
              {/* Restriction Simulation Card */}
              <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 text-primary/5 group-hover:text-primary/10 transition-colors pointer-events-none">
                  <Lock size={200} />
                </div>
                <div className="flex items-center justify-between mb-8 relative z-10">
                  <div>
                    <h3 className="text-lg font-black text-foreground tracking-tight">Restriction Simulation</h3>
                    <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest mt-1">Real-time ERC-3643 Rule Validation</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    <Database size={12} />
                    <span className="text-[9px] font-black uppercase tracking-widest">Protocol V4.2</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 mb-8">
                  <div className="p-5 rounded-2xl bg-foreground/[0.02] border border-border space-y-2">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest px-1">Source Wallet</p>
                    <p className="text-xs font-black font-mono text-foreground truncate">{fromAddress}</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-foreground/[0.02] border border-border space-y-2">
                    <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest px-1">Recipient Wallet</p>
                    <p className="text-xs font-black font-mono text-foreground truncate">{toAddress}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-6 rounded-2xl bg-foreground/[0.02] border border-border mb-8 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className={cn("w-3 h-3 rounded-full transition-all duration-500", isWhitelisted ? "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]" : "bg-slate-300 dark:bg-slate-700")} />
                    <div>
                      <p className="text-sm font-black text-foreground uppercase tracking-widest leading-none">Recipient Whitelisted</p>
                      <p className="text-[9px] text-slate-500 font-bold uppercase mt-1">Global Identity Claim Status</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setIsWhitelisted(!isWhitelisted)}
                    className={cn("w-12 h-6 rounded-full transition-all relative", isWhitelisted ? "bg-primary" : "bg-slate-200 dark:bg-slate-800")}
                  >
                    <div className={cn("absolute top-1 w-4 h-4 rounded-full bg-white shadow-md transition-all", isWhitelisted ? "left-7" : "left-1")} />
                  </button>
                </div>

                <button 
                  onClick={simulateTransfer}
                  disabled={isProcessing}
                  className="w-full py-5 rounded-2xl bg-primary hover:bg-primary/90 disabled:bg-slate-200 dark:disabled:bg-slate-800 text-white font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 shadow-lg shadow-primary/20 relative z-10"
                >
                  {isProcessing ? <RefreshCcw className="animate-spin" size={18} /> : "Run Compliance Check"}
                </button>

                <AnimatePresence>
                  {simulationResult && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 overflow-hidden"
                    >
                      <div className={cn(
                        "p-6 rounded-2xl border flex items-center gap-6",
                        simulationResult === 'success' ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" : "bg-rose-500/10 border-rose-500/20 text-rose-500"
                      )}>
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                          simulationResult === 'success' ? "bg-emerald-500 text-white" : "bg-rose-500 text-white"
                        )}>
                          {simulationResult === 'success' ? <CheckCircle2 size={24} /> : <XCircle size={24} />}
                        </div>
                        <div className="flex-1">
                          <p className="font-black uppercase tracking-widest text-xs mb-1">
                            {simulationResult === 'success' ? 'Transfer Authorized' : 'Transfer Restricted'}
                          </p>
                          <p className="text-[11px] font-bold opacity-80 leading-relaxed">
                            {simulationResult === 'success' 
                              ? 'All compliance claims verified. Recipient meets institutional requirements.' 
                              : 'Identity claims missing. Recipient must complete verification via identity provider.'}
                          </p>
                        </div>
                        <button className="p-2 rounded-lg hover:bg-black/5 transition-colors">
                          <ChevronRight size={18} />
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl">
                  <h3 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Identity Claims</h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Accreditation', status: 'Verified', color: 'primary' },
                      { label: 'AML Screening', status: 'Cleared', color: 'emerald' },
                      { label: 'Jurisdiction', status: 'Approved', color: 'blue' },
                    ].map((item) => (
                      <div key={item.label} className="flex justify-between items-center p-4 rounded-xl bg-foreground/[0.02] border border-border group hover:border-primary/30 transition-all">
                        <span className="text-xs font-black text-foreground uppercase tracking-tight">{item.label}</span>
                        <div className="flex items-center gap-2">
                          <div className={cn("w-1.5 h-1.5 rounded-full", `bg-${item.color}-500`)} />
                          <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{item.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-8 rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-xl relative overflow-hidden flex flex-col justify-between group">
                  <div className="absolute top-0 right-0 p-6 text-white/5 group-hover:scale-110 transition-transform">
                    <Scale size={120} />
                  </div>
                  <div className="relative z-10">
                    <div className="p-3 rounded-2xl bg-primary/20 text-primary w-fit mb-6 border border-primary/20">
                      <Shield size={24} />
                    </div>
                    <h3 className="text-xl font-black text-white tracking-tight mb-4 leading-tight">Regulatory Standards</h3>
                    <p className="text-sm text-slate-400 font-medium leading-relaxed">
                      Compliant with DIFC and EU MiCA regulations for institutional security token transfers and digital asset management.
                    </p>
                  </div>
                  <button className="mt-8 flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all group">
                    <span className="text-[10px] font-black text-white uppercase tracking-widest">View Legal Framework</span>
                    <ExternalLink size={16} className="text-slate-500 group-hover:text-primary transition-colors" />
                  </button>
                </div>
              </div>
            </div>

            {/* Identity Verification Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-sm font-black text-foreground flex items-center gap-2 tracking-tight">
                    <UserCheck size={18} className="text-primary" />
                    Identity Verification
                  </h3>
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border",
                    kycStatus === 'verified' ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" : "bg-amber-500/10 text-amber-500 border-amber-500/20"
                  )}>
                    {kycStatus}
                  </span>
                </div>
                <div className="space-y-6">
                  <div className="space-y-3">
                    {[
                      { label: 'Tier Level', value: 'Tier 2 Institutional' },
                      { label: 'Jurisdiction', value: 'European Union (DE)' },
                      { label: 'Expiry Date', value: 'Oct 12, 2027' },
                    ].map(row => (
                      <div key={row.label} className="flex justify-between items-center">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{row.label}</span>
                        <span className="text-[10px] font-black text-foreground uppercase">{row.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                      Your identity is verified via SD Covenant Compliance Engine. This status is required for holding and transferring UAT tokens.
                    </p>
                  </div>

                  {kycStatus === 'pending' ? (
                    <button 
                      onClick={handleKyc}
                      disabled={isProcessing}
                      className="w-full py-4 rounded-2xl bg-primary hover:bg-primary/90 text-white font-black text-[11px] uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
                    >
                      {isProcessing ? <RefreshCcw className="animate-spin" size={14} /> : "Complete KYC Verification"}
                    </button>
                  ) : (
                    <div className="flex gap-2">
                      <div className="flex-1 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-black flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest">
                        <CheckCircle2 size={14} /> Verified
                      </div>
                      <button className="px-4 py-3 rounded-xl border border-border text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        View
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="p-8 rounded-[2.5rem] bg-card border border-border shadow-xl space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <FileText size={20} />
                  </div>
                  <h3 className="text-sm font-black text-foreground tracking-tight">Audit Trail</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { action: 'Claim Refresh', time: '2h ago', status: 'ok' },
                    { action: 'Rule Update', time: '1d ago', status: 'ok' },
                    { action: 'Simulation', time: '2d ago', status: 'err' },
                  ].map((log, i) => (
                    <div key={i} className="flex items-center justify-between group">
                      <div className="flex items-center gap-3">
                        <div className={cn("w-1.5 h-1.5 rounded-full", log.status === 'ok' ? "bg-emerald-500" : "bg-rose-500")} />
                        <span className="text-[11px] font-black text-foreground group-hover:text-primary transition-colors cursor-pointer">{log.action}</span>
                      </div>
                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{log.time}</span>
                    </div>
                  ))}
                </div>
                <button className="flex items-center justify-between w-full p-4 rounded-2xl bg-foreground/5 hover:bg-foreground/10 transition-all group mt-4">
                  <span className="text-[10px] font-black uppercase tracking-widest">Full Regulatory Report</span>
                  <Download size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Placeholder for other tabs */}
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
            <h2 className="text-2xl font-black text-foreground tracking-tight mb-4 uppercase">{activeTab} Interface</h2>
            <p className="text-slate-500 font-medium max-w-md">Detailed configuration for ERC-3643 claim rules and institutional verification workflows are being initialized.</p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. ECOSYSTEM COMPLIANCE FOOTER */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="p-10 rounded-[3rem] bg-slate-900 dark:bg-slate-950 text-white border border-slate-800 shadow-2xl relative overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 opacity-5 pointer-events-none">
          <Globe size={400} strokeWidth={0.5} />
        </div>

        <div className="relative z-10 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-primary/20 text-primary border border-primary/20">
                <Search size={24} />
              </div>
              <h2 className="text-2xl font-black tracking-tight leading-none">Global Compliance Network</h2>
            </div>
            <p className="text-lg text-slate-400 leading-relaxed font-medium max-w-3xl">
              SD Covenant leverages the <span className="text-primary font-bold">ONCHAINID</span> protocol to ensure all asset transfers are compliant across multiple jurisdictions, automatically blocking restricted addresses.
            </p>
            <div className="flex gap-4">
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest">MiCA Compliant</div>
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest">KYC/AML V4.2</div>
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest">ISO 27001</div>
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
