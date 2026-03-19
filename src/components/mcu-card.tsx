import * as React from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { MCUItem } from "../data/mcu";
import { Badge } from "./ui/badge";
import { Star, Tv, Clapperboard, Calendar, Check } from "lucide-react";

interface MCUCardProps {
  item: MCUItem;
  ordineType: "uscita" | "cronologico";
  index: number;
}

const PHASE_COLORS: Record<number, string> = {
  1: "from-blue-900 via-slate-800 to-black",
  2: "from-purple-900 via-slate-800 to-black",
  3: "from-red-900 via-slate-800 to-black",
  4: "from-indigo-900 via-slate-800 to-black",
  5: "from-emerald-900 via-slate-800 to-black",
  6: "from-orange-900 via-slate-800 to-black",
};

export function MCUCard({ item, ordineType, index }: MCUCardProps) {
  const numberToDisplay =
    ordineType === "uscita" ? item.ordineUscita : item.ordineCronologico;

  const [isWatched, setIsWatched] = React.useState<boolean>(() => {
    try {
      return localStorage.getItem(`mcu-watched:${item.id}`) === "1";
    } catch {
      return false;
    }
  });

  function handleToggle(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    e.stopPropagation();
    const next = !isWatched;
    setIsWatched(next);
    try {
      if (next) localStorage.setItem(`mcu-watched:${item.id}`, "1");
      else localStorage.removeItem(`mcu-watched:${item.id}`);
    } catch {}
  }

  const bgGradient = PHASE_COLORS[item.fase] ?? PHASE_COLORS[1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Link
        href={`/titolo/${item.id}`}
        className="block h-full outline-none group cursor-pointer"
      >
        <div className="h-full rounded-xl overflow-hidden flex flex-col relative border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_8px_30px_rgba(226,54,54,0.15)] transition-all duration-300">
          {/* Sfondo gradiente per fase */}
          <div
            className={`absolute inset-0 bg-gradient-to-b ${bgGradient} ${
              isWatched ? "opacity-55" : "opacity-80"
            } transition-all duration-300`}
          />

          {/* Velo nero per leggibilità testi */}
          <div
            className={`absolute inset-0 ${
              isWatched ? "bg-black/75" : "bg-black/60"
            } transition-all duration-300`}
          />

          {/* Timbro completato */}
          {isWatched && (
            <div className="absolute top-4 right-[-28px] z-20 rotate-12 pointer-events-none">
              <div className="border-2 border-red-500/70 bg-red-600/15 px-8 py-1.5 shadow-[0_0_18px_rgba(220,38,38,0.25)]">
                <span className="font-display text-xs tracking-[0.25em] text-red-400 uppercase">
                  Completato
                </span>
              </div>
            </div>
          )}

          {/* Linea accent in cima */}
          <div className="relative h-1 w-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:via-primary transition-colors duration-500" />

          <div className="relative p-5 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                {/* BOTTONE VISTO */}
                <button
                  onClick={handleToggle}
                  title={isWatched ? "Rimuovi da visti" : "Segna come visto"}
                  className={[
                    "flex items-center justify-center rounded-lg w-10 h-10 border-2 font-bold transition-all duration-200 cursor-pointer select-none shrink-0",
                    isWatched
                      ? "bg-green-500/30 border-green-400 text-green-300"
                      : "bg-black/40 border-white/30 text-white hover:bg-red-600/30 hover:border-red-400 hover:text-white",
                  ].join(" ")}
                >
                  {isWatched ? (
                    <Check size={20} strokeWidth={3} />
                  ) : (
                    <span className="text-sm font-display">#{numberToDisplay}</span>
                  )}
                </button>

                {item.essenziale && (
                  <div
                    className="bg-amber-500/20 text-amber-400 p-2 rounded-full border border-amber-500/40"
                    title="Da non perdere"
                  >
                    <Star size={16} fill="currentColor" />
                  </div>
                )}
              </div>
              <Badge variant="phase">Fase {item.fase}</Badge>
            </div>

            <h3
              className={`font-display text-xl font-bold mb-1 group-hover:text-primary transition-colors line-clamp-2 leading-tight ${
                isWatched ? "text-white/80" : "text-white"
              }`}
            >
              {item.titolo}
            </h3>

            <p
              className={`font-sans text-xs mb-4 line-clamp-1 italic ${
                isWatched ? "text-white/35" : "text-white/50"
              }`}
            >
              {item.titoloOriginale}
            </p>

            <div className="flex flex-wrap gap-2 mb-4 mt-auto pt-4">
              <Badge variant="outline" className="gap-1.5 flex items-center">
                {item.tipo === "film" ? <Clapperboard size={12} /> : <Tv size={12} />}
                {item.tipo}
              </Badge>
              <Badge
                variant="outline"
                className="gap-1.5 flex items-center border-white/10 text-white/60"
              >
                <Calendar size={12} />
                {item.anno}
              </Badge>
            </div>

            <p
              className={`font-sans text-sm line-clamp-3 leading-relaxed ${
                isWatched ? "text-white/55" : "text-white/70"
              }`}
            >
              {item.descrizione}
            </p>
          </div>

          <div
            className={`relative px-5 py-3 border-t border-white/10 flex items-center justify-between mt-auto group-hover:bg-primary/10 transition-colors ${
              isWatched ? "bg-black/55" : "bg-black/40"
            }`}
          >
            <span className="text-xs font-sans text-white/50 group-hover:text-white/80">
              Scopri di più
            </span>
            <span className="text-primary font-bold group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}