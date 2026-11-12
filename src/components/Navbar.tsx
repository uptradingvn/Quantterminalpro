import React, { useState } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenDownload: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDownload }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#080b11]/90 backdrop-blur-md border-b border-slate-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark & Official App Icon */}
        <a href="#hero" className="flex items-center gap-3 whitespace-nowrap shrink-0 group">
          <img
            src="/assets/aistudio/04_Logo_Q_BieuDoNen_AppIcon_TrongSuot_4K_463159f3.svg"
            alt="Quant Terminal Pro Logo"
            className="w-9 h-9 object-contain drop-shadow-[0_0_12px_rgba(0,195,137,0.35)] transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
              Quant Terminal <span className="text-cyan-400 font-extrabold">Pro</span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">
              Desktop Edition v1.0.x
            </span>
          </div>
        </a>

        {/* Zone 2: 4–5 clean single-line nav links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a
            href="#showcase"
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            Showcase Màn Hình
          </a>
          <a
            href="#screener"
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            Bộ Lọc & Điểm Quant
          </a>
          <a
            href="#rrg"
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            Ma Trận RRG
          </a>
          <a
            href="#installer"
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            Trình Cài Đặt
          </a>
          <a
            href="#pricing"
            className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0"
          >
            Bảng Giá
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenDownload}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 rounded-lg shadow-sm shadow-cyan-950/50 hover:shadow-cyan-500/25 transition-all whitespace-nowrap shrink-0 active:scale-95 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Tải Bản Desktop v1.0.x</span>
            <span className="hidden md:inline text-[10px] text-cyan-200/80 font-normal">
              (359.7 MB)
            </span>
          </button>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c1017] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 text-sm font-medium text-slate-300">
            <a
              href="#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
            >
              Showcase Màn Hình
            </a>
            <a
              href="#screener"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
            >
              Bộ Lọc & Điểm Quant
            </a>
            <a
              href="#rrg"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
            >
              Ma Trận RRG
            </a>
            <a
              href="#installer"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
            >
              Trình Cài Đặt Desktop
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-md hover:bg-slate-800/80 hover:text-cyan-400 transition-colors"
            >
              Bảng Giá Bản Quyền
            </a>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownload();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-lg shadow-sm"
            >
              <Download className="w-4 h-4" />
              <span>Tải Bản Desktop v1.0.x (359.7 MB)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
