import React, { useEffect, useState } from 'react';
import { X, ZoomIn, ZoomOut, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { TerminalSlide, TERMINAL_SLIDES } from '../data/terminalData';

interface LightboxModalProps {
  initialSlide: TerminalSlide | null;
  onClose: () => void;
  onOpenDownload: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  initialSlide,
  onClose,
  onOpenDownload
}) => {
  const [currentSlideId, setCurrentSlideId] = useState<string>(
    initialSlide ? initialSlide.id : TERMINAL_SLIDES[0].id
  );
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const currentIndex = TERMINAL_SLIDES.findIndex((s) => s.id === currentSlideId);
  const activeSlide = TERMINAL_SLIDES[currentIndex >= 0 ? currentIndex : 0];

  useEffect(() => {
    if (initialSlide) {
      setCurrentSlideId(initialSlide.id);
      setZoomLevel(1);
    }
  }, [initialSlide]);

  // Handle ESC and arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        const next = (currentIndex + 1) % TERMINAL_SLIDES.length;
        setCurrentSlideId(TERMINAL_SLIDES[next].id);
        setZoomLevel(1);
      } else if (e.key === 'ArrowLeft') {
        const prev = (currentIndex - 1 + TERMINAL_SLIDES.length) % TERMINAL_SLIDES.length;
        setCurrentSlideId(TERMINAL_SLIDES[prev].id);
        setZoomLevel(1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, onClose]);

  if (!initialSlide) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-3 sm:p-6 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      {/* Top Bar Controls */}
      <div className="flex items-center justify-between text-xs font-mono text-slate-300 pb-3 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <span className="text-cyan-400 font-bold">
            Màn hình {activeSlide.index} / {String(TERMINAL_SLIDES.length).padStart(2, '0')}
          </span>
          <span className="text-white font-semibold hidden sm:inline">{activeSlide.title}</span>
        </div>

        <div className="flex items-center gap-2">
          {/* Zoom controls */}
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.max(1, z - 0.25))}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Thu nhỏ"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="text-[11px] font-mono tabular-nums px-1 text-slate-400">
            {Math.round(zoomLevel * 100)}%
          </span>
          <button
            type="button"
            onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.25))}
            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Phóng to"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={onOpenDownload}
            className="hidden md:inline-flex items-center gap-1.5 ml-2 px-3 py-1.5 text-xs font-semibold text-white bg-gradient-to-r from-cyan-600 to-emerald-600 rounded-lg hover:brightness-110 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Tải Bản v1.0.x</span>
          </button>

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="ml-2 p-1.5 rounded-lg bg-slate-800 hover:bg-rose-950 hover:text-rose-400 text-slate-300 transition-colors cursor-pointer"
            aria-label="Đóng cửa sổ phóng to"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Display */}
      <div className="relative flex-1 flex items-center justify-center overflow-auto my-3">
        {/* Previous Arrow */}
        <button
          type="button"
          onClick={() => {
            const prev = (currentIndex - 1 + TERMINAL_SLIDES.length) % TERMINAL_SLIDES.length;
            setCurrentSlideId(TERMINAL_SLIDES[prev].id);
            setZoomLevel(1);
          }}
          className="absolute left-2 sm:left-4 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
          aria-label="Màn hình trước"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* The high-res image */}
        <div
          className="transition-transform duration-200 ease-out select-none"
          style={{ transform: `scale(${zoomLevel})` }}
        >
          <img
            src={activeSlide.image}
            alt={activeSlide.title}
            className="max-h-[75vh] w-auto max-w-full rounded-lg shadow-2xl object-contain border border-slate-800 cursor-zoom-in"
            onClick={() => setZoomLevel((z) => (z > 1 ? 1 : 1.75))}
          />
        </div>

        {/* Next Arrow */}
        <button
          type="button"
          onClick={() => {
            const next = (currentIndex + 1) % TERMINAL_SLIDES.length;
            setCurrentSlideId(TERMINAL_SLIDES[next].id);
            setZoomLevel(1);
          }}
          className="absolute right-2 sm:right-4 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-white flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
          aria-label="Màn hình tiếp theo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption */}
      <div className="bg-[#0e131d] rounded-xl p-3 sm:p-4 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <div className="text-slate-300 text-center sm:text-left">
          <span className="font-bold text-white">{activeSlide.title}:</span>{' '}
          <span className="text-slate-400">{activeSlide.tagline}</span>
        </div>
        <div className="text-slate-500 font-mono text-[11px] shrink-0">
          Nhấn ESC để đóng · Nhấp đúp hoặc lăn chuột để phóng to
        </div>
      </div>
    </div>
  );
};
