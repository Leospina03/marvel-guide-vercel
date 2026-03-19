import * as React from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Film } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const isHome = location === "/";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 selection:text-white">
      {/* Navbar */}
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${!isHome ? 'bg-background/80 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group outline-none">
            <div className="bg-primary text-white p-1 rounded-sm px-2 font-display text-xl font-bold tracking-tighter shadow-[0_0_10px_rgba(226,54,54,0.5)] group-hover:scale-105 transition-transform">
              MARVEL
            </div>
            <span className="font-display text-xl font-medium tracking-tight text-white/90 group-hover:text-white transition-colors">
              GUIDE
            </span>
          </Link>
          
          <nav className="flex items-center gap-6">
            <Link href="/lista" className="font-sans text-sm font-medium text-white/70 hover:text-white transition-colors hover:text-shadow-sm outline-none">
              Tutti i Titoli
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 w-full flex flex-col relative z-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black/50 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-white/50">
            <Film size={18} />
            <span className="font-sans text-sm">MCU Guide - Creato per i fan</span>
          </div>
          <div className="text-white/30 text-xs font-sans">
            Questo è un progetto non ufficiale. Tutti i diritti appartengono ai rispettivi proprietari.
          </div>
        </div>
      </footer>
    </div>
  );
}
