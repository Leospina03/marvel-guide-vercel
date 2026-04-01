import * as React from "react";
import { useRoute, Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useMCUItem, useMCUList } from "../hooks/use-mcu";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  ArrowLeft,
  Star,
  Clapperboard,
  Tv,
  Calendar,
  Clock,
  MonitorPlay,
  AlertTriangle,
  ListOrdered,
} from "lucide-react";
import { useLanguage } from "@/context/language";

function getLocalizedSaga(saga: string, language: "it" | "en") {
  if (language === "it") {
    return saga;
  }

  if (saga === "Saga dell'Infinito") return "Infinity Saga";
  if (saga === "Saga del Multiverso") return "Multiverse Saga";

  return saga;
}

export default function Detail() {
  const { language } = useLanguage();
  const [, params] = useRoute("/titolo/:id");
  const [, setLocation] = useLocation();
  const id = params?.id || "";

  const { data: item, isLoading, error } = useMCUItem(id);
  const { data: allItems } = useMCUList();

  const text = {
    notFound: language === "it" ? "Titolo non trovato" : "Title not found",
    backToList: language === "it" ? "Torna alla lista" : "Back to list",
    backToOverview: language === "it" ? "Torna all'elenco" : "Back to list",
    phase: language === "it" ? "Fase" : "Phase",
    essential: language === "it" ? "Essenziale" : "Essential",
    year: language === "it" ? "Anno" : "Year",
    duration: language === "it" ? "Durata" : "Duration",
    platform: language === "it" ? "Piattaforma" : "Platform",
    order: language === "it" ? "Ordine" : "Order",
    chronological: language === "it" ? "Cron." : "Chron.",
    release: language === "it" ? "Uscita" : "Release",
    whyImportant:
      language === "it" ? "Perché è importante?" : "Why is it important?",
    watchBefore: language === "it" ? "Da vedere prima" : "Watch first",
    noPrereqs:
      language === "it"
        ? "Nessun titolo strettamente necessario prima di questo. Puoi guardarlo subito!"
        : "No strictly required titles before this one. You can watch it right away!",
  };

  if (isLoading) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !item) {
    return (
      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-display font-bold text-white mb-4">
          {text.notFound}
        </h2>
        <Button onClick={() => setLocation("/lista")}>{text.backToList}</Button>
      </div>
    );
  }

  const prerequisites = allItems
    ? allItems.filter((i) => item.vedereFirst.includes(i.titolo))
    : [];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full relative pb-20"
    >
      <div className="absolute top-0 left-0 w-full h-[60vh] z-0 overflow-hidden pointer-events-none">
        <img
          src={`${import.meta.env.BASE_URL}images/texture-abstract.png`}
          alt="texture"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/90 to-background" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10">
        <Link
          href="/lista"
          className="inline-flex items-center gap-2 text-white/50 hover:text-white font-sans text-sm mb-8 transition-colors outline-none group"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          {text.backToOverview}
        </Link>

        <div className="flex flex-col md:flex-row gap-8 mb-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full md:w-1/3 aspect-[2/3] rounded-2xl glass-panel relative overflow-hidden flex flex-col justify-center items-center p-8 text-center border-white/10 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50"></div>

            <div className="text-white/20 mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500">
              {item.tipo === "film" ? (
                <Clapperboard size={80} strokeWidth={1} />
              ) : (
                <Tv size={80} strokeWidth={1} />
              )}
            </div>

            <h2 className="font-display text-4xl font-bold text-white/90 relative z-10 tracking-tighter leading-none mb-4">
              {item.titolo.split(":").map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i === 0 && item.titolo.includes(":") && (
                    <span className="text-primary">:</span>
                  )}
                  {i === 0 && item.titolo.includes(":") && <br />}
                </React.Fragment>
              ))}
            </h2>

            <div className="absolute bottom-4 right-4 text-8xl font-display font-black text-white/5 select-none z-0">
              {item.ordineCronologico}
            </div>
          </motion.div>

          <div className="w-full md:w-2/3 flex flex-col justify-center">
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="phase" className="text-sm px-3 py-1">
                {text.phase} {item.fase}
              </Badge>
              {item.saga && (
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  {getLocalizedSaga(item.saga, language)}
                </Badge>
              )}
              {item.essenziale && (
                <Badge
                  variant="essential"
                  className="text-sm px-3 py-1 gap-1.5 flex items-center"
                >
                  <Star size={14} fill="currentColor" /> {text.essential}
                </Badge>
              )}
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-bold text-white mb-2 leading-tight">
              {item.titolo}
            </h1>

            <p className="font-sans text-xl text-white/40 italic mb-8 border-l-2 border-primary/50 pl-4">
              {item.titoloOriginale}
            </p>

            <div className="mb-8 border-t border-b border-white/10 py-5">
              <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
                <DetailMeta
                  icon={<Calendar size={13} />}
                  label={text.year}
                  value={<span>{item.anno}</span>}
                />
                <DetailMeta
                  icon={<Clock size={13} />}
                  label={text.duration}
                  value={<span>{item.durata}</span>}
                />
                <DetailMeta
                  icon={<MonitorPlay size={13} />}
                  label={text.platform}
                  value={<span>{item.piattaforma}</span>}
                />
                <DetailMeta
                  icon={<ListOrdered size={13} />}
                  label={text.order}
                  value={
                    <div className="space-y-1">
                      <div>
                        {text.chronological} #{item.ordineCronologico}
                      </div>
                      <div>
                        {text.release} #{item.ordineUscita}
                      </div>
                    </div>
                  }
                />
              </div>
            </div>

            <div className="prose prose-invert max-w-none font-sans">
              <p className="text-white/80 text-lg leading-relaxed">
                {item.descrizione}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="text-primary" />
              {text.whyImportant}
            </h3>
            <p className="font-sans text-white/70 leading-relaxed">
              {item.importanza}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="glass-panel p-8 rounded-2xl"
          >
            <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <ListOrdered className="text-white/50" />
              {text.watchBefore}
            </h3>

            {prerequisites.length === 0 ? (
              <div className="bg-black/30 rounded-lg p-6 text-center border border-white/5">
                <p className="font-sans text-white/50">{text.noPrereqs}</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {prerequisites.map((prereq) => (
                  <Link
                    href={`/titolo/${prereq.id}`}
                    key={prereq.id}
                    className="outline-none block"
                  >
                    <div className="bg-black/30 hover:bg-black/50 border border-white/5 hover:border-white/20 rounded-xl p-4 flex items-center justify-between group transition-all cursor-pointer hover-elevate">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-display text-xs text-white/50 group-hover:text-white transition-colors">
                          #{prereq.ordineCronologico}
                        </div>
                        <div>
                          <h4 className="font-display text-lg text-white/90 group-hover:text-primary transition-colors">
                            {prereq.titolo}
                          </h4>
                          <span className="font-sans text-xs text-white/40">
                            {prereq.anno}
                          </span>
                        </div>
                      </div>
                      <ArrowLeft
                        className="text-white/20 group-hover:text-primary rotate-180 transition-colors"
                        size={16}
                      />
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function DetailMeta({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="min-w-0">
      <div className="mb-2 flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-white/40">
        <span className="text-white/35">{icon}</span>
        <span>{label}</span>
      </div>
      <div className="text-sm sm:text-base font-medium text-white/90 leading-relaxed break-words">
        {value}
      </div>
    </div>
  );
}