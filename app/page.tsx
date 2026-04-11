"use client"
import React, { useState, useEffect } from "react";
import { Activity, Globe, Shield, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const GlassCard = ({ children, title }: { children: React.ReactNode, title?: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="p-[1px] rounded-xl bg-white/10 border border-white/5 backdrop-blur-md"
  >
    <div className="bg-black/80 p-6 rounded-xl h-full">
      {title && <h3 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4 font-bold">{title}</h3>}
      {children}
    </div>
  </motion.div>
);


const BackgroundEffects = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020202]">
    {/* Animated Nebula 1 */}
    <motion.div 
      animate={{ 
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
        x: [0, 50, 0],
        y: [0, -30, 0]
      }}
      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-cyan-500/10 blur-[120px] rounded-full"
    />
    {/* Animated Nebula 2 */}
    <motion.div 
      animate={{ 
        scale: [1, 1.3, 1],
        opacity: [0.2, 0.4, 0.2],
        x: [0, -40, 0],
        y: [0, 20, 0]
      }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full"
    />
    
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  </div>
);

export default function Sentinel() {
  const [time, setTime] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const [logs, setLogs] = useState([
    "Initializing background neural mesh...",
    "Rendering atmospheric particle effects",
    "Connection: STABLE"
  ]);

  const clearLogs = () => {
    setLogs(["SYSTEM_LOG_WIPED", "Ready for new session..."]);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen text-white p-8 font-mono relative overflow-hidden">
      <BackgroundEffects />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.header 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 border-b border-white/10 pb-8 gap-6"
        >
          <div>
            <h1 className="text-4xl font-black italic text-cyan-500 tracking-tighter">SENTINEL_DASH</h1>
            <p className="text-[9px] text-zinc-600 tracking-[0.5em] mt-1 uppercase">Encrypted_Session_Active</p>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right hidden md:block border-r border-white/10 pr-6">
              <div className="text-xl font-bold tabular-nums text-zinc-400 font-mono tracking-widest">{time}</div>
              <div className="text-[8px] text-cyan-500/50 uppercase font-bold tracking-tighter">System_Clock_Synced</div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(6, 182, 212, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsConnected(!isConnected)}
              className={`px-6 py-2 rounded-lg font-bold text-[11px] tracking-widest uppercase transition-all border ${
                isConnected 
                ? "bg-green-500/10 border-green-500 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)]" 
                : "bg-cyan-500 text-black border-cyan-400 hover:bg-cyan-400"
              }`}
            >
              {isConnected ? "0x71...82f" : "Connect Wallet"}
            </motion.button>
          </div>
        </motion.header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <GlassCard title="Global Infrastructure">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Globe className="text-cyan-400 w-8 h-8 animate-pulse" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping" />
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tighter">12,402</div>
                <div className="text-[9px] text-cyan-500/50 font-bold uppercase tracking-widest">Active_Nodes</div>
              </div>
            </div>
          </GlassCard>

          <GlassCard title="Security Protocol">
             <div className="flex items-center gap-4">
              <div className="p-2 bg-red-500/10 rounded-lg border border-red-500/20">
                <Shield className="text-red-500 w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tighter text-red-500/90">PROTECTED</div>
                <div className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest">AES_256_ENABLED</div>
              </div>
            </div>
          </GlassCard>

          <GlassCard title="Compute Bandwidth">
             <div className="flex items-center gap-4">
              <div className="p-2 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <Activity className="text-purple-400 w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-bold tracking-tighter italic">4.2 TB/s</div>
                <div className="text-[9px] text-purple-500/50 font-bold uppercase tracking-widest">Mesh_Throughput</div>
              </div>
            </div>
          </GlassCard>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 p-6 bg-black/40 border border-white/10 rounded-xl backdrop-blur-sm"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[10px] text-zinc-500 tracking-widest uppercase font-bold flex items-center gap-2">
              <Terminal size={12} /> System_Log_Stream
            </h3>
            <button 
              onClick={clearLogs}
              className="text-[9px] border border-red-500/50 text-red-500 px-2 py-1 rounded hover:bg-red-500/10 transition-all active:scale-95 font-bold"
            >
              WIPE_TERMINAL
            </button>
          </div>

          <div className="space-y-2 text-[11px] text-zinc-500 font-mono italic">
            {logs.map((log, i) => (
              <p key={i}>{`[${time}] > ${log}`}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

const Terminal = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
);