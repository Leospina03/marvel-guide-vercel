import * as React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "../components/ui/button";
import { mcuData } from "../data/mcu";

export default function Home() {
  const stats = {
    film: mcuData.filter((i) => i.tipo === "film").length,
    serie: mcuData.filter((i) => i.tipo === "serie" || i.tipo === "film TV").length,
    fasi: Math.max(...mcuData.map((i) => i.fase)),
    essenziali: mcuData.filter((i) => i.essenziale).length,
  };

  return (
    <div className="relative flex w-full flex-col">
      {/* Background Image Container */}
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
              LA GUIDA DEFINITIVA
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
            Esplora ogni film e serie TV del Marvel Cinematic Universe.
            Scopri l&apos;ordine perfetto in cui guardarli, le connessioni segrete
            e i titoli fondamentali per comprendere l&apos;intera saga.
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
                Inizia l&apos;esplorazione
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 mt-[-40px] w-full pb-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6 text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-white/35 sm:text-sm">
              Panoramica del catalogo
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            <StatCard
              value={stats.film.toString()}
              label="Film Cinematografici"
              delay={0.8}
            />
            <StatCard
              value={stats.serie.toString()}
              label="Serie e Speciali"
              delay={0.9}
            />
            <StatCard
              value={stats.fasi.toString()}
              label="Fasi Complete"
              delay={1.0}
            />
            <StatCard
              value={stats.essenziali.toString()}
              label="Titoli Essenziali"
              delay={1.1}
              highlight
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({
  value,
  label,
  delay,
  highlight = false,
}: {
  value: string;
  label: string;
  delay: number;
  highlight?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      className={[
        "relative rounded-xl border px-4 py-5 text-center sm:px-5 sm:py-6",
        "border-white/8 bg-white/[0.03] backdrop-blur-[2px]",
        highlight ? "border-primary/20 bg-primary/[0.04]" : "",
      ].join(" ")}
    >
      <div
        className={[
          "font-display text-4xl font-bold leading-none sm:text-5xl",
          highlight ? "text-primary" : "text-white/90",
        ].join(" ")}
      >
        {value}
      </div>

      <div className="mt-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white/45 sm:text-xs">
        {label}
      </div>
    </motion.div>
  );
}