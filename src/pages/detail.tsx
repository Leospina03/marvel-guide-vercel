import * as React from "react";
import { useRoute, Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { useMCUItem, useMCUList } from "../hooks/use-mcu";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ArrowLeft, Star, Clapperboard, Tv, Calendar, Clock, MonitorPlay, AlertTriangle, ListOrdered } from "lucide-react";

export default function Detail() {
  const [, params] = useRoute("/titolo/:id");
  const [, setLocation] = useLocation();
  const id = params?.id || "";

  const { data: item, isLoading, error } = useMCUItem(id);
  const { data: allItems } = useMCUList();

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
        <h2 className="text-3xl font-display font-bold text-white mb-4">Titolo non trovato</h2>
        <Button onClick={() => setLocation("/lista")}>Torna alla lista</Button>
      </div>
    );
  }

  // Find prerequisite items objects to display them nicely
  const prerequisites = allItems ? allItems.filter(i => item.vedereFirst.includes(i.titolo)) : [];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full relative pb-20"
    >
      {/* Abstract Texture Background specific to detail pages */}
      <div className="absolute top-0 left-0 w-full h-[60vh] z-0 overflow-hidden pointer-events-none">
        <img 
          src={`${import.meta.env.BASE_URL}images/texture-abstract.png`}
          alt="texture" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/90 to-background" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 relative z-10">
        
        <Link href="/lista" className="inline-flex items-center gap-2 text-white/50 hover:text-white font-sans text-sm mb-8 transition-colors outline-none group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Torna all'elenco
        </Link>

        {/* Header Section */}
        <div className="flex flex-col md:flex-row gap-8 mb-12">
          
          {/* Visual Poster Placeholder */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="w-full md:w-1/3 aspect-[2/3] rounded-2xl glass-panel relative overflow-hidden flex flex-col justify-center items-center p-8 text-center border-white/10 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50"></div>
            
            <div className="text-white/20 mb-6 relative z-10 group-hover:scale-110 transition-transform duration-500">
              {item.tipo === "film" ? <Clapperboard size={80} strokeWidth={1} /> : <Tv size={80} strokeWidth={1} />}
            </div>
            
            <h2 className="font-display text-4xl font-bold text-white/90 relative z-10 tracking-tighter leading-none mb-4">
              {item.titolo.split(':').map((part, i) => (
                <React.Fragment key={i}>
                  {part}
                  {i === 0 && item.titolo.includes(':') && <span className="text-primary">:</span>}
                  {i === 0 && item.titolo.includes(':') && <br/>}
                </React.Fragment>
              ))}
            </h2>
            
            <div className="absolute bottom-4 right-4 text-8xl font-display font-black text-white/5 select-none z-0">
              {item.ordineCronologico}
            </div>
          </motion.div>

          {/* Details */}
          <div className="w-full md:w-2/3 flex flex-col justify-center">
            
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="phase" className="text-sm px-3 py-1">Fase {item.fase}</Badge>
              {item.saga && <Badge variant="secondary" className="text-sm px-3 py-1">{item.saga}</Badge>}
              {item.essenziale && (
                <Badge variant="essential" className="text-sm px-3 py-1 gap-1.5 flex items-center">
                  <Star size={14} fill="currentColor" /> Essenziale
                </Badge>
              )}
            </div>

            <h1 className="font-display text-4xl sm:text-6xl font-bold text-white mb-2 leading-tight">
              {item.titolo}
            </h1>
            
            <p className="font-sans text-xl text-white/40 italic mb-8 border-l-2 border-primary/50 pl-4">
              {item.titoloOriginale}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              <div className="glass-panel rounded-xl p-4 flex flex-col">
                <span className="text-white/40 text-xs font-sans mb-1 flex items-center gap-1"><Calendar size={12}/> Anno</span>
                <span className="text-white font-medium">{item.anno}</span>
              </div>
              <div className="glass-panel rounded-xl p-4 flex flex-col">
                <span className="text-white/40 text-xs font-sans mb-1 flex items-center gap-1"><Clock size={12}/> Durata</span>
                <span className="text-white font-medium">{item.durata}</span>
              </div>
              <div className="glass-panel rounded-xl p-4 flex flex-col">
                <span className="text-white/40 text-xs font-sans mb-1 flex items-center gap-1"><MonitorPlay size={12}/> Piattaforma</span>
                <span className="text-white font-medium">{item.piattaforma}</span>
              </div>
              <div className="glass-panel rounded-xl p-4 flex flex-col">
                <span className="text-white/40 text-xs font-sans mb-1 flex items-center gap-1"><ListOrdered size={12}/> Ordini</span>
                <span className="text-white font-medium text-sm">Cron. #{item.ordineCronologico}<br/>Uscita #{item.ordineUscita}</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none font-sans">
              <p className="text-white/80 text-lg leading-relaxed">{item.descrizione}</p>
            </div>
          </div>
        </div>

        {/* Lower Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          
          {/* Why it's important */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-panel p-8 rounded-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="text-primary" /> 
              Perché è importante?
            </h3>
            <p className="font-sans text-white/70 leading-relaxed">
              {item.importanza}
            </p>
          </motion.div>

          {/* Prereqs */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="glass-panel p-8 rounded-2xl"
          >
            <h3 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <ListOrdered className="text-white/50" /> 
              Da vedere prima
            </h3>
            
            {prerequisites.length === 0 ? (
              <div className="bg-black/30 rounded-lg p-6 text-center border border-white/5">
                <p className="font-sans text-white/50">Nessun titolo strettamente necessario prima di questo. Puoi guardarlo subito!</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {prerequisites.map(prereq => (
                  <Link href={`/titolo/${prereq.id}`} key={prereq.id} className="outline-none block">
                    <div className="bg-black/30 hover:bg-black/50 border border-white/5 hover:border-white/20 rounded-xl p-4 flex items-center justify-between group transition-all cursor-pointer hover-elevate">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-display text-xs text-white/50 group-hover:text-white transition-colors">
                          #{prereq.ordineCronologico}
                        </div>
                        <div>
                          <h4 className="font-display text-lg text-white/90 group-hover:text-primary transition-colors">{prereq.titolo}</h4>
                          <span className="font-sans text-xs text-white/40">{prereq.anno}</span>
                        </div>
                      </div>
                      <ArrowLeft className="text-white/20 group-hover:text-primary rotate-180 transition-colors" size={16}/>
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
