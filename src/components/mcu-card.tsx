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

function MjolnirIcon() {
  return (
    <svg
      viewBox="0 0 120 120"
      className="w-[72px] h-[72px]"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <g fill="currentColor">
        <rect x="34" y="24" width="36" height="26" rx="4" />
        <rect x="68" y="28" width="10" height="18" rx="2" />
        <rect x="49" y="49" width="7" height="34" rx="3" />
        <rect x="46" y="82" width="13" height="7" rx="3" />
      </g>
    </svg>
  );
}

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

      window.dispatchEvent(new CustomEvent("mcu-watched-updated"));
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
        <div
          className={[
            "h-full rounded-xl overflow-hidden flex flex-col relative transition-all duration-300",
            isWatched
              ? "border border-cyan-300/70 shadow-[0_0_10px_rgba(34,211,238,0.18)]"
              : "border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_8px_30px_rgba(226,54,54,0.15)]",
          ].join(" ")}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-b ${bgGradient} transition-all duration-300 ${
              isWatched ? "opacity-30" : "opacity-80"
            }`}
          />

          <div
            className={`absolute inset-0 transition-all duration-300 ${
              isWatched ? "bg-black/88" : "bg-black/60"
            }`}
          />

          {isWatched && (
            <div className="absolute inset-0 z-0 flex flex-col items-center justify-center pointer-events-none">
              <div className="text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.55)]">
                <MjolnirIcon />
              </div>
              <span className="mt-3 text-[11px] uppercase tracking-[0.4em] text-slate-200/75 font-display">
                Worthy
              </span>
            </div>
          )}

          <div
            className={`relative h-1 w-full bg-gradient-to-r from-transparent to-transparent transition-colors duration-500 ${
              isWatched
                ? "via-cyan-300/60"
                : "via-white/20 group-hover:via-primary"
            }`}
          />

          <div className="relative p-5 flex-1 flex flex-col z-10">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <div
                  className={[
                    "relative flex items-center justify-center rounded-lg min-w-10 h-10 px-2 border font-bold transition-all duration-200 shrink-0",
                    isWatched
                      ? "bg-black/35 border-cyan-300/25 text-slate-200/90"
                      : "bg-black/35 border-white/15 text-white/85",
                  ].join(" ")}
                  aria-label={`Ordine ${numberToDisplay}`}
                >
                  <span className="text-sm font-display">#{numberToDisplay}</span>
                </div>

                {item.essenziale && (
                  <div
                    className="bg-amber-500/20 text-amber-400 p-2 rounded-full border border-amber-500/40"
                    title="Da non perdere"
                  >
                    <Star size={16} fill="currentColor" />
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleToggle}
                  title={isWatched ? "Segnato come visto" : "Segna come visto"}
                  aria-label={isWatched ? "Segnato come visto" : "Segna come visto"}
                  className={[
                    "relative z-20 flex items-center justify-center rounded-full w-10 h-10 shrink-0",
                    "transition-all duration-200 ease-out",
                    "focus:outline-none focus:ring-2 focus:ring-cyan-300/70 focus:ring-offset-0",
                    "bg-black/35 backdrop-blur-[2px]",
                    isWatched
                      ? "border border-cyan-300 text-white shadow-[0_0_14px_rgba(34,211,238,0.45)] hover:scale-105 hover:brightness-110"
                      : "border border-white/20 text-white/75 shadow-none hover:scale-105 hover:border-white/40 hover:text-white hover:bg-black/45",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "absolute inset-0 rounded-full transition-all duration-200",
                      isWatched
                        ? "bg-cyan-300/10 shadow-[inset_0_0_10px_rgba(34,211,238,0.25)]"
                        : "bg-transparent shadow-none",
                    ].join(" ")}
                  />

                  {isWatched ? (
                    <Check
                      size={16}
                      strokeWidth={3}
                      className="relative z-10 text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.85)]"
                    />
                  ) : (
                    <span className="relative z-10 block w-3.5 h-3.5 rounded-full border border-white/35" />
                  )}
                </button>

                <Badge variant="phase">Fase {item.fase}</Badge>
              </div>
            </div>

            <h3
              className={`font-display text-xl font-bold mb-1 group-hover:text-primary transition-colors line-clamp-2 leading-tight ${
                isWatched ? "text-white/10" : "text-white"
              }`}
            >
              {item.titolo}
            </h3>

            <p
              className={`font-sans text-xs mb-4 line-clamp-1 italic ${
                isWatched ? "text-white/10" : "text-white/50"
              }`}
            >
              {item.titoloOriginale}
            </p>

            <div className="flex flex-wrap gap-2 mb-4 mt-auto pt-4">
              <Badge
                variant="outline"
                className={`gap-1.5 flex items-center ${
                  isWatched ? "border-white/5 text-white/12" : ""
                }`}
              >
                {item.tipo === "film" ? (
                  <Clapperboard size={12} />
                ) : (
                  <Tv size={12} />
                )}
                {item.tipo}
              </Badge>

              <Badge
                variant="outline"
                className={`gap-1.5 flex items-center ${
                  isWatched
                    ? "border-white/5 text-white/10"
                    : "border-white/10 text-white/60"
                }`}
              >
                <Calendar size={12} />
                {item.anno}
              </Badge>
            </div>

            <p
              className="font-sans text-sm line-clamp-3 leading-relaxed text-white/70"
              style={isWatched ? { opacity: 0 } : undefined}
            >
              {item.descrizione}
            </p>
          </div>

          <div
            className={`relative px-5 py-3 border-t flex items-center justify-between mt-auto transition-colors z-10 ${
              isWatched
                ? "border-cyan-300/10 bg-black/70"
                : "border-white/10 bg-black/40 group-hover:bg-primary/10"
            }`}
          >
            <span className="text-xs font-sans text-white/50 group-hover:text-white/80">
              Scopri di più
            </span>
            <span
              className={`font-bold group-hover:translate-x-1 transition-transform ${
                isWatched ? "text-cyan-300" : "text-primary"
              }`}
            >
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}