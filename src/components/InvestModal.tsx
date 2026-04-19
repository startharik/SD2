'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ArrowRight, 
  CheckCircle2, 
  RefreshCcw, 
  ShieldCheck, 
  Info,
  TrendingUp
} from 'lucide-react';

interface InvestModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (amount: number) => void;
}

export function InvestModal({ isOpen, onClose, onSuccess }: InvestModalProps) {
  const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle');
  const [amount, setAmount] = useState('5000');

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStatus('idle');
        setAmount('5000');
      }, 300);
    }
  }, [isOpen]);

  const handleInvest = () => {
    setStatus('processing');
    setTimeout(() => {
      setStatus('success');
      onSuccess(parseFloat(amount));
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-slate-950 border border-emerald-950/50 rounded-[2.5rem] shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 border-b border-emerald-950/30 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-500">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white tracking-tight">Institutional Investment</h3>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mt-1">UAT Secondary Market</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="w-10 h-10 rounded-xl hover:bg-slate-900 text-slate-400 flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-8 space-y-8">
              {/* Asset Info Card */}
              <div className="p-6 rounded-2xl bg-slate-900/50 border border-emerald-950/20 flex items-center gap-5">
                <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center shrink-0">
                   <TrendingUp className="text-emerald-500" size={32} />
                </div>
                <div>
                  <p className="text-sm font-black text-white tracking-tight">SD Covenant Community Center</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Active</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">•</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">9.2% Expected Yield</span>
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="space-y-4">
                <div className="flex justify-between items-end px-1">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Investment Amount</label>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Balance: 2,500.00 USDC</span>
                </div>
                <div className="relative">
                  <input 
                    type="number" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full bg-slate-900/50 border border-emerald-950/30 rounded-2xl px-6 py-5 text-2xl font-black text-white focus:outline-none focus:border-emerald-500/50 focus:ring-4 focus:ring-emerald-500/5 transition-all"
                    placeholder="0.00"
                  />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 flex items-center gap-3">
                    <button className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-500 text-[10px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-black transition-colors">Max</button>
                    <span className="font-black text-slate-400">USDC</span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl border border-emerald-950/20 space-y-1">
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">UAT to Receive</p>
                  <p className="text-lg font-black text-white tracking-tight">
                    {amount ? (parseFloat(amount) * 1.2).toLocaleString() : '0.00'}
                  </p>
                </div>
                <div className="p-4 rounded-2xl border border-emerald-950/20 space-y-1">
                  <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">Platform Fee</p>
                  <p className="text-lg font-black text-slate-400 tracking-tight">$0.00</p>
                </div>
              </div>

              {/* Compliance Note */}
              <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10 flex items-start gap-4">
                <Info size={18} className="text-amber-500 shrink-0 mt-0.5" />
                <p className="text-[10px] text-amber-500/80 font-bold leading-relaxed">
                  By investing, you confirm that you have read the SD Covenant Prospectus and agree to the institutional transfer restrictions of ERC-3643.
                </p>
              </div>

              {/* Action Button */}
              <button 
                onClick={handleInvest}
                disabled={status !== 'idle' || !amount}
                className="w-full py-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-800 text-black font-black text-lg transition-all flex items-center justify-center gap-3 shadow-2xl shadow-emerald-500/20"
              >
                {status === 'processing' ? (
                  <RefreshCcw className="animate-spin" size={20} />
                ) : status === 'success' ? (
                  <CheckCircle2 size={20} />
                ) : (
                  <>Confirm Investment <ArrowRight size={20} /></>
                )}
              </button>
            </div>

            {/* Footer */}
            <div className="p-6 bg-slate-900/30 border-t border-emerald-950/30 flex items-center justify-center gap-3">
              <ShieldCheck size={14} className="text-emerald-500" />
              <span className="text-[9px] text-slate-400 font-black uppercase tracking-[0.2em]">Secured by SD Compliance Layer</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
