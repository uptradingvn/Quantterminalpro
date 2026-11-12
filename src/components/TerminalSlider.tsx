import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Play,
  Pause,
  Layers,
  Sparkles,
  MousePointer,
  RotateCcw
} from 'lucide-react';
import { TERMINAL_SLIDES, TerminalSlide } from '../data/terminalData';

interface TerminalSliderProps {
  onOpenLightbox: (slide: TerminalSlide) => void;
}

export const TerminalSlider: React.FC<TerminalSliderProps> = ({ onOpenLightbox }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const lastScrollTimeRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = TERMINAL_SLIDES.length;
  const currentSlide = TERMINAL_SLIDES[currentIndex];

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Keyboard navigation (ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'ArrowLeft') {
        goToPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Auto-play timer (advances every 7s if not hovered and auto-play is enabled)
  useEffect(() => {
    if (!isAutoPlay || isHovered) return;
    const interval = setInterval(() => {
      goToNext();
    }, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlay, isHovered, goToNext]);

  // Mouse Wheel & Trackpad scroll listener with debounce
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const now = Date.now();
    // 400ms cooldown to avoid skipping multiple slides on one scroll flick
    if (now - lastScrollTimeRef.current < 450) {
      return;
    }

    // Determine vertical or horizontal wheel intent
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

    if (Math.abs(delta) > 25) {
      if (delta > 0) {
        goToNext();
      } else {
        goToPrev();
      }
      lastScrollTimeRef.current = now;
    }
  };

  // Touch Swipe navigation for mobile
  const touchStartXRef = useRef<number>(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  return (
    <section id="showcase" className="py-16 lg:py-24 bg-[#0a0e17] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              <Layers className="w-4 h-4" />
              <span>Giao Diện Thực Tế Desktop v1.0.x</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Khám Phá Toàn Diện Không Gian Làm Việc
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Trượt mũi tên hoặc lăn con trỏ chuột trực tiếp trên khung hiển thị để khám phá 5 phân hệ cốt lõi của Quant Terminal Pro.
            </p>
          </div>

          {/* Interactive Control Pill: Auto-play + Gestures hint */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2 text-xs text-slate-400 bg-slate-900/90 border border-slate-800 px-3 py-1.5 rounded-lg">
              <MousePointer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Lăn chuột hoặc bấm phím mũi tên ← →</span>
            </div>

            <button
              type="button"
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/90 border border-slate-800 hover:border-slate-700 px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
              title={isAutoPlay ? 'Tạm dừng tự động chuyển' : 'Bật tự động chuyển'}
            >
              {isAutoPlay ? (
                <>
                  <Pause className="w-3 h-3 text-cyan-400" />
                  <span>Dừng</span>
                </>
              ) : (
                <>
                  <Play className="w-3 h-3 text-emerald-400" />
                  <span>Tự động</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 5-Segmented Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-6">
          {TERMINAL_SLIDES.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`text-left p-3 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                  isActive
                    ? 'bg-slate-900 border-cyan-500/80 shadow-md shadow-cyan-950/40 text-white'
                    : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700 text-slate-400'
                }`}
              >
                {/* Active progress indicator line */}
                {isActive && (
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-emerald-400 animate-pulse"
                  />
                )}
                <div className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 mb-1 flex items-center justify-between">
                  <span>Màn hình {slide.index}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                </div>
                <div className="text-xs sm:text-sm font-semibold truncate text-slate-200">
                  {slide.shortTitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* The Master Stage / Showcase Container */}
        <div
          ref={containerRef}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative rounded-2xl bg-[#070a10] border border-slate-800 shadow-2xl overflow-hidden group focus:outline-none"
          tabIndex={0}
          aria-label="Khung trình chiếu giao diện phần mềm Quant Terminal Pro"
        >
          {/* Top Window Bar: Windows Terminal Style */}
          <div className="h-10 bg-[#0e131d] border-b border-slate-800 px-4 flex items-center justify-between text-xs font-mono text-slate-400 select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="ml-3 text-[11px] text-slate-300 font-semibold truncate hidden sm:inline">
                Quant Terminal Pro | {currentSlide.title}
              </span>
            </div>

            <div className="flex items-center gap-4 text-[11px]">
              <span className="hidden md:inline text-cyan-400/90 font-medium">
                {currentSlide.marketContext}
              </span>
              <button
                type="button"
                onClick={() => onOpenLightbox(currentSlide)}
                className="flex items-center gap-1.5 text-slate-300 hover:text-white bg-slate-800/90 hover:bg-slate-700 px-2.5 py-1 rounded transition-colors cursor-pointer"
                title="Phóng to ảnh 4K sắc nét"
              >
                <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                <span className="hidden sm:inline">Phóng to 4K</span>
              </button>
            </div>
          </div>

          {/* Main Visual Display Area */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/9.5] w-full bg-black/40 overflow-hidden flex items-center justify-center">
            {/* Screenshots rendered with smooth cross-fade */}
            {TERMINAL_SLIDES.map((slide, index) => {
              const isCurrent = index === currentIndex;
              return (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-500 ease-out ${
                    isCurrent
                      ? 'opacity-100 scale-100 pointer-events-auto z-10'
                      : 'opacity-0 scale-98 pointer-events-none z-0'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-contain sm:object-cover object-top select-none cursor-pointer"
                    onClick={() => onOpenLightbox(slide)}
                    loading="eager"
                  />
                </div>
              );
            })}

            {/* Left Arrow Button */}
            <button
              type="button"
              onClick={goToPrev}
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#080b11]/85 hover:bg-[#0c121e] border border-slate-700/80 hover:border-cyan-400 text-white shadow-xl flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Màn hình trước đó (Phím mũi tên trái)"
            >
              <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Right Arrow Button */}
            <button
              type="button"
              onClick={goToNext}
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-[#080b11]/85 hover:bg-[#0c121e] border border-slate-700/80 hover:border-cyan-400 text-white shadow-xl flex items-center justify-center transition-all cursor-pointer hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Màn hình tiếp theo (Phím mũi tên phải)"
            >
              <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
            </button>

            {/* Bottom Floating Caption Banner on Hover/View */}
            <div className="absolute bottom-4 left-4 right-4 z-20 hidden sm:flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#080b11]/85 backdrop-blur-md border border-slate-800/90 text-xs">
              <div className="flex items-center gap-3">
                <span className="font-mono text-cyan-400 font-bold">
                  {currentSlide.index} / {String(total).padStart(2, '0')}
                </span>
                <span className="text-white font-medium truncate">{currentSlide.title}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="hidden lg:inline text-[11px]">
                  Bấm vào ảnh để phóng to chi tiết biểu đồ
                </span>
                <button
                  type="button"
                  onClick={() => onOpenLightbox(currentSlide)}
                  className="text-cyan-400 hover:text-cyan-300 font-medium underline flex items-center gap-1 cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3" />
                  <span>Mở rộng</span>
                </button>
              </div>
            </div>
          </div>

          {/* Under-the-screen Technical Intelligence Panel */}
          <div className="p-6 sm:p-8 bg-[#0c101a] border-t border-slate-800/90">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
              {/* Left Column: Title & Deep Description */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="text-cyan-400 font-bold">{currentSlide.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>Màn hình {currentSlide.index}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {currentSlide.title}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {currentSlide.description}
                </p>

                {/* Core Feature Checklist */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentSlide.coreFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Quantitative Telemetry Stats */}
              <div className="lg:col-span-5 bg-slate-900/60 rounded-xl p-5 border border-slate-800 space-y-4">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Thông Số Phân Hệ</span>
                  <span className="font-mono text-cyan-400">STATUS: LIVE</span>
                </div>

                <div className="space-y-3">
                  {currentSlide.stats.map((s, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between pb-2 border-b border-slate-800/60 text-xs sm:text-sm"
                    >
                      <span className="text-slate-400">{s.label}</span>
                      <span className="font-mono font-bold text-white tabular-nums">{s.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-1">
                  <div className="text-[11px] text-slate-400 mb-2">Thao tác nhanh:</div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={goToPrev}
                      className="flex-1 py-2 px-3 text-xs font-medium text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg text-center transition-colors cursor-pointer"
                    >
                      ← Màn hình trước
                    </button>
                    <button
                      type="button"
                      onClick={goToNext}
                      className="flex-1 py-2 px-3 text-xs font-medium text-white bg-cyan-700 hover:bg-cyan-600 rounded-lg text-center transition-colors cursor-pointer"
                    >
                      Màn hình sau →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
