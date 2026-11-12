import React from 'react';
import { Download, ChevronRight, Monitor, Cpu, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onOpenDownload: () => void;
  onScrollToShowcase: () => void;
}

const LIVE_TICKERS = [
  { symbol: 'VNINDEX', price: '1.743,07', change: '+28.75', percent: '+1.68%', up: true },
  { symbol: 'VIC', price: '242.000', change: '+7.500', percent: '+3.24%', up: true },
  { symbol: 'SSI', price: '20.650', change: '+750', percent: '+3.77%', up: true },
  { symbol: 'MWG', price: '74.000', change: '+1.700', percent: '+2.35%', up: true },
  { symbol: 'VHM', price: '62.000', change: '+1.600', percent: '+2.65%', up: true },
  { symbol: 'KDH', price: '15.900', change: '+850', percent: '+5.65%', up: true },
  { symbol: 'PNJ', price: '14.700', change: '+500', percent: '+3.52%', up: true },
  { symbol: 'HPG', price: '21.250', change: '+350', percent: '+1.67%', up: true },
  { symbol: 'GVR', price: '29.650', change: '+850', percent: '+2.95%', up: true },
  { symbol: 'SHS', price: '13.700', change: '+500', percent: '+3.79%', up: true },
  { symbol: 'FPT', price: '50.900', change: '-400', percent: '-0.78%', up: false }
];

export const Hero: React.FC<HeroProps> = ({ onOpenDownload, onScrollToShowcase }) => {
  return (
    <section id="hero" className="relative pt-6 pb-16 lg:pt-10 lg:pb-24 overflow-hidden border-b border-slate-800/80">
      {/* Subtle Background Radial Gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(6, 182, 212, 0.15), rgba(16, 185, 129, 0.08), transparent 70%)'
        }}
      />

      {/* Live Ticker Bar */}
      <div className="w-full bg-[#0a0f18] border-y border-slate-800/90 py-2.5 mb-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 flex items-center gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 pr-4 border-r border-slate-800 shrink-0 text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-ping" />
            <span>Thị Trường Trực Tiếp</span>
          </div>

          {/* Marquee / Scrollable tickers */}
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar whitespace-nowrap scroll-smooth">
            {LIVE_TICKERS.map((t) => (
              <div key={t.symbol} className="flex items-center gap-2">
                <span className="text-white font-bold">{t.symbol}</span>
                <span className="text-slate-300 tabular-nums">{t.price}</span>
                <span
                  className={`tabular-nums font-medium ${
                    t.up ? 'text-emerald-400' : 'text-rose-400'
                  }`}
                >
                  {t.percent}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Metadata tag: zero-pill discipline */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400/90">
            <span>Enterprise Trading Platform</span>
            <span aria-hidden="true">·</span>
            <span>Phiên Bản v1.0.x</span>
            <span aria-hidden="true">·</span>
            <span>Hệ Thống Độc Lập</span>
          </div>

          {/* Hero Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white text-balance leading-tight sm:leading-none">
            Nền Tảng Giao Dịch & Định Lượng Độc Lập Cho Nhà Đầu Tư Chuyên Nghiệp
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            Tối ưu hóa tốc độ xử lý dữ liệu thời gian thực, tích hợp bộ lọc 1.554 cổ phiếu với thuật toán
            <span className="text-white font-semibold"> Điểm QUANT</span>, bản đồ nhiệt thị trường và
            <span className="text-cyan-400 font-semibold"> ma trận RRG xoay động lượng</span> thế hệ mới.
          </p>

          {/* Primary Action Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenDownload}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 rounded-xl shadow-lg shadow-cyan-900/40 hover:shadow-cyan-500/20 transition-all cursor-pointer active:scale-95"
            >
              <Download className="w-5 h-5" />
              <span>Tải Bản Desktop v1.0.x</span>
              <span className="text-xs text-cyan-100/90 bg-black/20 px-2 py-0.5 rounded font-mono">
                359.7 MB
              </span>
            </button>

            <button
              type="button"
              onClick={onScrollToShowcase}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white border border-slate-700 rounded-xl transition-all cursor-pointer"
            >
              <span>Xem Showcase Màn Hình</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust Notes */}
          <p className="text-xs text-slate-400 flex items-center justify-center gap-2 flex-wrap">
            <span>Dành cho Windows 10 & 11 (64-bit)</span>
            <span aria-hidden="true">·</span>
            <span>Không cần quyền Admin</span>
            <span aria-hidden="true">·</span>
            <span>Kết nối DataPro, FireAnt & Cloud Direct</span>
          </p>
        </div>

        {/* 4 Quantitative Rigor Metric Cards */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3 text-cyan-400 mb-2">
              <Zap className="w-5 h-5" />
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Độ Trễ Nến</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              &lt; 2.5 ms
            </div>
            <p className="text-xs text-slate-400 mt-1">Cập nhật mili-giây từng tick giá</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3 text-emerald-400 mb-2">
              <Cpu className="w-5 h-5" />
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Bộ Lọc Đa Ngành</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              1.554 mã
            </div>
            <p className="text-xs text-slate-400 mt-1">Quét thuật toán Điểm Quant tức thì</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3 text-blue-400 mb-2">
              <Monitor className="w-5 h-5" />
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Đa Màn Hình</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              8 Sheets
            </div>
            <p className="text-xs text-slate-400 mt-1">Không gian làm việc chuyên nghiệp</p>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/70 border border-slate-800/90 hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3 text-teal-400 mb-2">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Cài Đặt Độc Lập</span>
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">
              359.7 MB
            </div>
            <p className="text-xs text-slate-400 mt-1">Gói cài đặt độc lập, không cần Admin</p>
          </div>
        </div>
      </div>
    </section>
  );
};
