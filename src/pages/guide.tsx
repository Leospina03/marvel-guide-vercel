import * as React from "react";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMCUList } from "../hooks/use-mcu";
import { MCUCard } from "../components/mcu-card";
import { Button } from "../components/ui/button";
import {
  Search,
  Loader2,
  ArrowDownAZ,
  LayoutGrid,
  Calendar,
  Star,
} from "lucide-react";

type SortType = "uscita" | "cronologico";
type TypeFilter = "tutti" | "film" | "serie";
type PhaseFilter = "tutte" | 1 | 2 | 3 | 4 | 5 | 6;
type WatchFilter = "tutti" | "non-visti" | "visti";

export default function Guide() {
  const { data: titles, isLoading, error } = useMCUList();

  const [sortOrder, setSortOrder] = useState<SortType>("cronologico");
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("tutti");
  const [phaseFilter, setPhaseFilter] = useState<PhaseFilter>("tutte");
  const [onlyEssentials, setOnlyEssentials] = useState(false);
  const [watchFilter, setWatchFilter] = useState<WatchFilter>("tutti");
  const [searchQuery, setSearchQuery] = useState("");
  const [watchedRefresh, setWatchedRefresh] = useState(0);
  const [showCompletionBadge, setShowCompletionBadge] = useState(false);

  const previousCompleteRef = React.useRef(false);

  React.useEffect(() => {
    const refreshWatched = () => setWatchedRefresh((v) => v + 1);
    window.addEventListener("mcu-watched-updated", refreshWatched);

    return () => {
      window.removeEventListener("mcu-watched-updated", refreshWatched);
    };
  }, []);

  const filteredAndSorted = useMemo(() => {
    if (!titles) return [];

    let result = [...titles];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.titolo.toLowerCase().includes(q) ||
          t.titoloOriginale.toLowerCase().includes(q)
      );
    }

    if (typeFilter === "film") result = result.filter((t) => t.tipo === "film");

    if (typeFilter === "serie") {
      result = result.filter((t) => t.tipo === "serie" || t.tipo === "film TV");
    }

    if (phaseFilter !== "tutte") {
      result = result.filter((t) => t.fase === phaseFilter);
    }

    if (onlyEssentials) {
      result = result.filter((t) => t.essenziale);
    }

    if (watchFilter === "non-visti") {
      result = result.filter((t) => {
        try {
          return localStorage.getItem(`mcu-watched:${t.id}`) !== "1";
        } catch {
          return true;
        }
      });
    }

    if (watchFilter === "visti") {
      result = result.filter((t) => {
        try {
          return localStorage.getItem(`mcu-watched:${t.id}`) === "1";
        } catch {
          return false;
        }
      });
    }

    result.sort((a, b) => {
      if (sortOrder === "uscita") return a.ordineUscita - b.ordineUscita;
      return a.ordineCronologico - b.ordineCronologico;
    });

    return result;
  }, [
    titles,
    sortOrder,
    typeFilter,
    phaseFilter,
    onlyEssentials,
    watchFilter,
    searchQuery,
    watchedRefresh,
  ]);

  const watchedStats = useMemo(() => {
    if (!titles) {
      return {
        watchedCount: 0,
        totalCount: 0,
        percent: 0,
        isComplete: false,
      };
    }

    let watchedCount = 0;

    for (const item of titles) {
      try {
        if (localStorage.getItem(`mcu-watched:${item.id}`) === "1") {
          watchedCount++;
        }
      } catch {}
    }

    const totalCount = titles.length;
    const percent =
      totalCount > 0 ? Math.round((watchedCount / totalCount) * 100) : 0;
    const isComplete = totalCount > 0 && watchedCount === totalCount;

    return {
      watchedCount,
      totalCount,
      percent,
      isComplete,
    };
  }, [titles, watchedRefresh]);

  React.useEffect(() => {
    const wasComplete = previousCompleteRef.current;
    const nowComplete = watchedStats.isComplete;

    if (!wasComplete && nowComplete) {
      void fireCompletionConfetti();
      setShowCompletionBadge(true);

      const timeout = window.setTimeout(() => {
        setShowCompletionBadge(false);
      }, 2400);

      previousCompleteRef.current = nowComplete;

      return () => {
        window.clearTimeout(timeout);
      };
    }

    if (!nowComplete) {
      setShowCompletionBadge(false);
    }

    previousCompleteRef.current = nowComplete;
  }, [watchedStats.isComplete]);

  async function fireCompletionConfetti() {
    const { default: confetti } = await import("canvas-confetti");

    const colors = ["#FFD700", "#C0C0C0", "#22D3EE"];

    const base = {
      colors,
      ticks: 260,
      gravity: 1.08,
      drift: 0.18,
      decay: 0.92,
      startVelocity: 50,
      scalar: 1,
      zIndex: 2000,
      disableForReducedMotion: true as const,
    };

    const leftCannon = (overrides: Record<string, unknown> = {}) =>
      confetti({
        ...base,
        origin: { x: 0.03, y: 0.92 },
        angle: 58,
        spread: 34,
        particleCount: 42,
        shapes: ["square", "circle"],
        ...overrides,
      });

    const rightCannon = (overrides: Record<string, unknown> = {}) =>
      confetti({
        ...base,
        origin: { x: 0.97, y: 0.92 },
        angle: 122,
        spread: 34,
        particleCount: 42,
        shapes: ["square", "circle"],
        ...overrides,
      });

    leftCannon({
      particleCount: 46,
      startVelocity: 58,
      spread: 30,
      scalar: 1.15,
      drift: 0.22,
    });

    rightCannon({
      particleCount: 46,
      startVelocity: 58,
      spread: 30,
      scalar: 1.15,
      drift: -0.22,
    });

    window.setTimeout(() => {
      leftCannon({
        particleCount: 28,
        startVelocity: 46,
        spread: 42,
        scalar: 0.92,
        gravity: 1.02,
        drift: 0.16,
      });

      rightCannon({
        particleCount: 28,
        startVelocity: 46,
        spread: 42,
        scalar: 0.92,
        gravity: 1.02,
        drift: -0.16,
      });
    }, 180);

    window.setTimeout(() => {
      leftCannon({
        particleCount: 18,
        startVelocity: 36,
        spread: 54,
        scalar: 0.72,
        gravity: 0.98,
        decay: 0.94,
        drift: 0.1,
      });

      rightCannon({
        particleCount: 18,
        startVelocity: 36,
        spread: 54,
        scalar: 0.72,
        gravity: 0.98,
        decay: 0.94,
        drift: -0.1,
      });
    }, 380);
  }

  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center p-8 glass-panel rounded-xl">
          <p className="text-destructive font-bold text-xl mb-2">
            Errore di caricamento
          </p>
          <p className="text-white/60 font-sans">
            Impossibile caricare il database MCU.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col relative">
      <AnimatePresence>
        {showCompletionBadge && (
          <motion.div
            key="completion-badge"
            initial={{ opacity: 0, y: -14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.35 }}
            className="pointer-events-none fixed left-1/2 top-6 z-[130] -translate-x-1/2"
          >
            <div className="rounded-full border border-[#FFD700]/40 bg-black/55 px-5 py-2 text-center shadow-[0_0_30px_rgba(255,215,0,0.22)] backdrop-blur-md">
              <div className="font-display text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#FFD700]">
                MCU completato
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-center">
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
          Marvel Timeline
        </h1>

        <p className="font-sans text-white/60 max-w-3xl mx-auto">
          Sfoglia l&apos;intero Marvel Cinematic Universe. Usa i filtri per trovare
          esattamente cosa guardare.
        </p>
      </div>

      <div className="mt-6 mb-8 sm:mb-10 max-w-3xl mx-auto w-full sticky top-16 z-40">
        <div className="bg-[rgba(6,10,18,0.82)] backdrop-blur-xl border border-white/8 rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.25)]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
            <div className="flex-1 h-[10px] rounded-full bg-white/5 overflow-hidden border border-white/5">
              <div
                className={`h-full rounded-full transition-all duration-300 ${
                  watchedStats.isComplete
                    ? "bg-[#FFD700] shadow-[0_0_14px_rgba(255,215,0,0.55)]"
                    : "bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.45)]"
                }`}
                style={{ width: `${watchedStats.percent}%` }}
              />
            </div>

            <div
              className={`text-[11px] sm:text-xs uppercase tracking-[0.28em] font-display whitespace-nowrap ${
                watchedStats.isComplete
                  ? "text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.45)]"
                  : "text-slate-300/80"
              }`}
            >
              Titoli Visti: {watchedStats.watchedCount} / {watchedStats.totalCount}
            </div>
          </div>
        </div>
      </div>

      <div className="glass-panel p-4 sm:p-6 rounded-2xl mb-8 flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40"
            size={18}
          />
          <input
            type="text"
            placeholder="Cerca titolo..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-black/40 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder:text-white/40 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all font-sans text-sm"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex bg-black/40 p-1 rounded-lg border border-white/10">
            <button
              onClick={() => setWatchFilter("tutti")}
              className={`px-3 py-1.5 rounded-md text-xs font-display uppercase tracking-wider transition-colors ${
                watchFilter === "tutti"
                  ? "bg-white/20 text-white shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Tutti
            </button>
            <button
              onClick={() => setWatchFilter("non-visti")}
              className={`px-3 py-1.5 rounded-md text-xs font-display uppercase tracking-wider transition-colors ${
                watchFilter === "non-visti"
                  ? "bg-primary text-white shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Non visti
            </button>
            <button
              onClick={() => setWatchFilter("visti")}
              className={`px-3 py-1.5 rounded-md text-xs font-display uppercase tracking-wider transition-colors ${
                watchFilter === "visti"
                  ? "bg-green-600/80 text-white shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Visti
            </button>
          </div>

          <div className="flex bg-black/40 p-1 rounded-lg border border-white/10">
            <button
              onClick={() => setSortOrder("cronologico")}
              className={`px-3 py-1.5 rounded-md text-xs font-display uppercase tracking-wider flex items-center gap-2 transition-colors ${
                sortOrder === "cronologico"
                  ? "bg-primary text-white shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <ArrowDownAZ size={14} /> Storia
            </button>
            <button
              onClick={() => setSortOrder("uscita")}
              className={`px-3 py-1.5 rounded-md text-xs font-display uppercase tracking-wider flex items-center gap-2 transition-colors ${
                sortOrder === "uscita"
                  ? "bg-white/20 text-white shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Calendar size={14} /> Uscita
            </button>
          </div>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value as TypeFilter)}
            className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary/50 font-sans"
          >
            <option value="tutti">Tutti i tipi</option>
            <option value="film">Solo Film</option>
            <option value="serie">Solo Serie/TV</option>
          </select>

          <select
            value={phaseFilter}
            onChange={(e) =>
              setPhaseFilter(
                e.target.value === "tutte"
                  ? "tutte"
                  : (Number(e.target.value) as PhaseFilter)
              )
            }
            className="bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary/50 font-sans"
          >
            <option value="tutte">Tutte le fasi</option>
            <option value="1">Fase 1</option>
            <option value="2">Fase 2</option>
            <option value="3">Fase 3</option>
            <option value="4">Fase 4</option>
            <option value="5">Fase 5</option>
            <option value="6">Fase 6</option>
          </select>

          <button
            onClick={() => setOnlyEssentials(!onlyEssentials)}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm border transition-all ${
              onlyEssentials
                ? "bg-amber-500/20 border-amber-500/50 text-amber-400"
                : "bg-black/40 border-white/10 text-white/60 hover:border-white/20"
            }`}
          >
            <Star size={16} className={onlyEssentials ? "fill-amber-400" : ""} />
            <span className="font-sans">Solo Essenziali</span>
          </button>
        </div>
      </div>

      {isLoading ? (
        <div className="w-full flex-1 flex flex-col items-center justify-center py-20">
          <Loader2 className="animate-spin text-primary mb-4" size={48} />
          <p className="font-display text-white/50 tracking-widest animate-pulse">
            CARICAMENTO DATABASE...
          </p>
        </div>
      ) : (
        <>
          <div className="mb-4 text-white/40 text-sm font-sans flex items-center justify-between">
            <span>Trovati {filteredAndSorted.length} titoli</span>
            <span className="hidden sm:block">
              Ordinati per:{" "}
              <strong className="text-white/80">
                {sortOrder === "cronologico"
                  ? "Ordine di Storia"
                  : "Data di Uscita"}
              </strong>
            </span>
          </div>

          {filteredAndSorted.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center py-20 text-center glass-panel rounded-2xl">
              <LayoutGrid className="text-white/20 mb-4" size={64} />
              <h3 className="font-display text-2xl text-white mb-2">
                Nessun titolo trovato
              </h3>
              <p className="font-sans text-white/50 max-w-md">
                Prova a modificare i filtri o la ricerca per trovare quello che
                cerchi.
              </p>
              <Button
                variant="outline"
                className="mt-6"
                onClick={() => {
                  setSearchQuery("");
                  setTypeFilter("tutti");
                  setPhaseFilter("tutte");
                  setOnlyEssentials(false);
                  setWatchFilter("tutti");
                }}
              >
                Resetta Filtri
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
              <AnimatePresence>
                {filteredAndSorted.map((item, index) => (
                  <MCUCard
                    key={item.id}
                    item={item}
                    ordineType={sortOrder}
                    index={index}
                  />
                ))}
              </AnimatePresence>
            </div>
          )}
        </>
      )}
    </div>
  );
}