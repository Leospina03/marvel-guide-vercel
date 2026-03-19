import * as React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { mcuData } from "../data/mcu";

export default function Home() {
  const stats = {
    film: mcuData.filter(i => i.tipo === "film").length,
    serie: mcuData.filter(i => i.tipo === "serie" || i.tipo === "film TV").length,
    fasi: Math.max(...mcuData.map(i => i.fase)),
    essenziali: mcuData.filter(i => i.essenziale).length,
  };

  return (
    <div className="flex flex-col w-full relative">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Cinematic background" 
          className="w-full h-[110vh] object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
      </div>

      <div className="w-full min-h-[85vh] flex flex-col justify-center relative z-10 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-center text-center">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 flex items-center justify-center"
          >
            <div className="bg-primary px-4 py-1 font-display text-sm tracking-widest text-white/90 shadow-[0_0_20px_rgba(226,54,54,0.6)]">
              LA GUIDA DEFINITIVA
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-white tracking-tighter mb-6 text-shadow-lg"
          >
            MARVEL UNIVERSE
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-sans text-lg sm:text-xl text-white/70 max-w-2xl mb-12 font-light"
          >
            Esplora ogni film e serie TV del Marvel Cinematic Universe. 
            Scopri l'ordine perfetto in cui guardarli, le connessioni segrete 
            e i titoli fondamentali per comprendere l'intera saga.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/lista" className="outline-none">
              <Button variant="marvel" size="lg" className="w-full sm:w-auto px-12 py-6 text-lg">
                Inizia l'esplorazione
              </Button>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* Stats Section */}
      <div className="w-full relative z-10 pb-24 mt-[-40px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <StatCard value={stats.film.toString()} label="Film Cinematografici" delay={0.8} />
            <StatCard value={stats.serie.toString()} label="Serie e Speciali" delay={0.9} />
            <StatCard value={stats.fasi.toString()} label="Fasi Complete" delay={1.0} />
            <StatCard value={stats.essenziali.toString()} label="Titoli Essenziali" delay={1.1} highlight />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ value, label, delay, highlight = false }: { value: string, label: string, delay: number, highlight?: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`glass-panel p-6 rounded-2xl flex flex-col items-center justify-center text-center ${highlight ? 'border-primary/30 bg-primary/5' : ''}`}
    >
      <span className={`font-display text-4xl sm:text-5xl font-bold mb-2 ${highlight ? 'text-primary' : 'text-white'}`}>
        {value}
      </span>
      <span className="font-sans text-xs sm:text-sm text-white/50 uppercase tracking-wider">
        {label}
      </span>
    </motion.div>
  );
}
