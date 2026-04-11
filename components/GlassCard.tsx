"use client"
import { motion } from "framer-motion";

export const GlassCard = ({ children, title }: { children: React.ReactNode, title?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="p-[1px] rounded-xl bg-gradient-to-b from-white/20 to-transparent shadow-[0_0_20px_rgba(0,242,255,0.1)]"
  >
    <div className="bg-black/90 backdrop-blur-xl p-6 rounded-xl border border-white/5">
      {title && <h3 className="text-[10px] uppercase tracking-widest text-zinc-500 mb-4 font-bold">{title}</h3>}
      {children}
    </div>
  </motion.div>
);