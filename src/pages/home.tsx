import * as React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { mcuData } from "../data/mcu";
import { useLanguage } from "@/context/language";

export default function Home() {
  const { language } = useLanguage();

  const stats = {
    film: mcuData.filter((i) => i.tipo === "film").length,
    serie: mcuData.filter((i) => i.tipo === "serie" || i.tipo === "film TV").length,
    fasi: Math.max(...mcuData.map((i) => i.fase)),
    essenziali: mcuData.filter((i) => i.essenziale).length,
  };

  const text = {
    eyebrow: language === "it" ? "LA GUIDA DEFINITIVA" : "THE ULTIMATE GUIDE",
    description:
      language === "it"
        ? "Esplora ogni film e serie TV del Marvel Cinematic Universe. Scopri l'ordine perfetto in cui guardarli, le connessioni segrete e i titoli fondamentali per comprendere l'intera saga."
        : "Explore every movie and TV series in the Marvel Cinematic Universe. Discover the perfect watch order, hidden connections, and the key titles needed to understand the entire saga.",
    cta: language === "it" ? "Inizia l'esplorazione" : "Start exploring",
    statMovies: language === "it" ? "Film Cinematografici" : "Movies",
    statSeries: language === "it" ? "Serie e Speciali" : "Series & Specials",
    statPhases: language === "it" ? "Fasi Complete" : "Completed Phases",
    statEssentials: language === "it" ? "Titoli Essenziali" : "Essential Titles",
  };

  return (
    <div className="relative flex w-full flex-col">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Cinematic background"
          className="h-[110vh] w-full object-cover object-top opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background/50" />
      </div>

      <div className="relative z-10 flex min-h-[85vh] w-full flex-col justify-center pt-16">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 flex items-center justify-center"
          >
            <div className="bg-primary px-4 py-1 font-display text-sm tracking-widest text-white/90 shadow-[0_0_20px_rgba(226,54,54,0.6)]">
              {text.eyebrow}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-6 font-display text-5xl font-bold tracking-tighter text-white text-shadow-lg sm:text-7xl md:text-8xl"
          >
            MARVEL UNIVERSE
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-12 max-w-2xl font-sans text-lg font-light text-white/70 sm:text-xl"
          >
            {text.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link href="/lista" className="outline-none">
              <Button
                variant="marvel"
                size="lg"
                className="w-full px-12 py-6 text-lg sm:w-auto"
              >
                {text.cta}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mt-[-24px] w-full pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="border-t border-white/10 pt-8"
          >
            <div className="grid grid-cols-2 gap-x-8 gap-y-8 md:grid-cols-4">
              <StatItem value={stats.film.toString()} label={text.statMovies} />
              <StatItem value={stats.serie.toString()} label={text.statSeries} />
              <StatItem value={stats.fasi.toString()} label={text.statPhases} />
              <StatItem
                value={stats.essenziali.toString()}
                label={text.statEssentials}
                highlight
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function StatItem({
  value,
  label,
  highlight = false,
}: {
  value: string;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div className="text-center">
      <div
        className={`font-display text-4xl font-bold leading-none sm:text-5xl ${
          highlight ? "text-primary" : "text-white/90"
        }`}
      >
        {value}
      </div>

      <div className="mt-3 text-[11px] font-medium uppercase tracking-[0.22em] text-white/45 sm:text-xs">
        {label}
      </div>
    </div>
  );
}