import * as React from "react";
import { Link, useLocation } from "wouter";
import { Coffee, Film, Mail } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const isHome = location === "/";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/30 selection:text-white">
      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          !isHome
            ? "bg-background/80 backdrop-blur-md border-b border-white/5 shadow-lg"
            : "bg-transparent"
        }`}
      >
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
            <Link
              href="/lista"
              className="font-sans text-sm font-medium text-white/70 hover:text-white transition-colors hover:text-shadow-sm outline-none"
            >
              Tutti i Titoli
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 w-full flex flex-col relative z-10">{children}</main>

      {/* Footer */}
      <footer className="border-t border-white/5 bg-black/50 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-center gap-5 text-center">
            <div className="flex items-center gap-2 text-white/50">
              <Film size={18} />
              <span className="font-sans text-sm">MCU Guide - Creato per i fan</span>
            </div>

            <div className="text-white/30 text-xs font-sans max-w-2xl leading-relaxed">
              Questo è un progetto non ufficiale. Tutti i diritti appartengono ai rispettivi proprietari.
            </div>

            <a
              href="https://ko-fi.com/spina03"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Se ti va, offrimi un caffè"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#d6b36a]/20 bg-gradient-to-r from-white/[0.05] via-[#d6b36a]/[0.06] to-white/[0.05] px-5 py-2.5 text-sm font-sans text-white/80 shadow-[0_0_0_rgba(214,179,106,0)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#d6b36a]/40 hover:bg-gradient-to-r hover:from-[#d6b36a]/[0.10] hover:via-[#d6b36a]/[0.16] hover:to-[#d6b36a]/[0.10] hover:text-white hover:shadow-[0_0_22px_rgba(214,179,106,0.12)]"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#d6b36a]/12 text-[#e7c987] transition-colors duration-300 group-hover:bg-[#d6b36a]/20 group-hover:text-[#f4d692]">
                <Coffee size={15} />
              </span>
              <span className="tracking-[0.01em]">Se ti va, offrimi un caffè</span>
            </a>

            <div className="flex flex-wrap items-center justify-center gap-2 text-center text-xs font-sans text-white/35">
              <span className="inline-flex items-center gap-1.5 text-white/30">
                <Mail size={13} />
                <span>Suggerimenti o segnalazioni:</span>
              </span>
              <a
                href="mailto:leonardospinazze5@gmail.com"
                className="text-white/55 underline decoration-white/15 underline-offset-4 transition-colors hover:text-white hover:decoration-white/35"
              >
                leonardospinazze5@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}