import React, { useState } from 'react';
import { Compass, RotateCw, History, ArrowUpRight, TrendingUp } from 'lucide-react';

interface RrgQuadrant {
  id: 'leading' | 'weakening' | 'lagging' | 'improving';
  name: string;
  nameEn: string;
  color: string;
  borderColor: string;
  bgLight: string;
  description: string;
  stocks: { ticker: string; mom: string; sessionChange: string; ratio: string }[];
}

const QUADRANTS: RrgQuadrant[] = [
  {
    id: 'leading',
    name: 'DẪN DẮT',
    nameEn: 'LEADING',
    color: 'text-emerald-400',
    borderColor: 'border-emerald-500/40',
    bgLight: 'bg-emerald-950/20',
    description: 'Sức mạnh giá và động lượng vượt trội so với VN-Index. Đây là nhóm sinh lời mạnh nhất thị trường.',
    stocks: [
      { ticker: 'DXG', mom: '102.9', sessionChange: '+4.11%', ratio: '102.8' },
      { ticker: 'DIG', mom: '102.6', sessionChange: '+2.40%', ratio: '102.3' },
      { ticker: 'CEO', mom: '102.6', sessionChange: '+0.82%', ratio: '101.8' },
      { ticker: 'TCH', mom: '103.3', sessionChange: '+2.64%', ratio: '100.4' },
      { ticker: 'KDH', mom: '101.1', sessionChange: '+5.65%', ratio: '102.0' }
    ]
  },
  {
    id: 'weakening',
    name: 'SUY YẾU',
    nameEn: 'WEAKENING',
    color: 'text-amber-400',
    borderColor: 'border-amber-500/40',
    bgLight: 'bg-amber-950/20',
    description: 'Vẫn duy trì tỷ suất sinh lời cao nhưng gia tốc động lượng đang giảm dần. Cần chủ động chốt lời bảo vệ thành quả.',
    stocks: [
      { ticker: 'VIC', mom: '101.5', sessionChange: '+3.24%', ratio: '98.4' },
      { ticker: 'QCG', mom: '100.2', sessionChange: '-0.47%', ratio: '99.9' }
    ]
  },
  {
    id: 'improving',
    name: 'CẢI THIỆN',
    nameEn: 'IMPROVING',
    color: 'text-cyan-400',
    borderColor: 'border-cyan-500/40',
    bgLight: 'bg-cyan-950/20',
    description: 'Bắt đầu đảo chiều tích cực và thu hút dòng tiền mới, sẵn sàng vượt trục để tiến vào góc Dẫn Dắt.',
    stocks: [
      { ticker: 'DXS', mom: '98.5', sessionChange: '+4.35%', ratio: '102.5' },
      { ticker: 'NVL', mom: '98.4', sessionChange: '+3.33%', ratio: '100.9' },
      { ticker: 'VPH', mom: '96.6', sessionChange: '+2.78%', ratio: '101.8' }
    ]
  },
  {
    id: 'lagging',
    name: 'TỤT HẬU',
    nameEn: 'LAGGING',
    color: 'text-rose-400',
    borderColor: 'border-rose-500/40',
    bgLight: 'bg-rose-950/20',
    description: 'Cả sức mạnh giá lẫn động lượng đều dưới mức trung bình thị trường. Hạn chế mua mới hoặc ưu tiên cơ cấu.',
    stocks: [
      { ticker: 'VHM', mom: '98.1', sessionChange: '+2.65%', ratio: '99.8' },
      { ticker: 'PRT', mom: '99.8', sessionChange: '-1.09%', ratio: '97.8' },
      { ticker: 'SCR', mom: '97.4', sessionChange: '+2.31%', ratio: '99.5' }
    ]
  }
];

export const RrgMatrixSection: React.FC = () => {
  const [selectedQuadrant, setSelectedQuadrant] = useState<'leading' | 'weakening' | 'lagging' | 'improving'>('leading');

  const current = QUADRANTS.find((q) => q.id === selectedQuadrant) || QUADRANTS[0];

  return (
    <section id="rrg" className="py-16 lg:py-24 bg-[#0a0e17] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
              <Compass className="w-4 h-4" />
              <span>Phương Pháp Phân Tích Chu Kỳ Luân Chuyển</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ma Trận RRG Xoay Động Lượng Ngành
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Định vị vị thế của 23 nhóm ngành và từng cổ phiếu trong chu kỳ xoay kim đồng hồ dựa trên 2 trục chuẩn: RS-Ratio (Sức mạnh) và RS-Momentum (Động lượng).
            </p>
          </div>

          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-3.5 py-2 rounded-xl text-xs text-slate-300 font-mono">
            <History className="w-4 h-4 text-cyan-400" />
            <span>Độ dài vệt đuôi: 8 phiên · Replay mượt mà</span>
          </div>
        </div>

        {/* 4 Quadrants Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {QUADRANTS.map((quad) => {
            const isSelected = selectedQuadrant === quad.id;
            return (
              <button
                key={quad.id}
                type="button"
                onClick={() => setSelectedQuadrant(quad.id)}
                className={`p-5 rounded-xl border text-left transition-all cursor-pointer relative ${
                  isSelected
                    ? `${quad.bgLight} ${quad.borderColor} shadow-lg shadow-cyan-950/20`
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-base font-extrabold tracking-tight ${quad.color}`}>
                    {quad.name}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                    {quad.nameEn}
                  </span>
                </div>
                <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">
                  {quad.description}
                </p>
                <div className="mt-3 text-[11px] font-mono text-cyan-400 font-semibold flex items-center gap-1">
                  <span>{quad.stocks.length} mã theo dõi</span>
                  <span>→</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Quadrant Detail Display */}
        <div className="bg-[#0e131d] rounded-2xl border border-slate-800 p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-1">
                <span>GÓC PHẦN TƯ ĐANG CHỌN</span>
                <span aria-hidden="true">·</span>
                <span className={`font-bold ${current.color}`}>{current.name}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Danh Sách Cổ Phiếu Vùng {current.name} ({current.nameEn})
              </h3>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              Hệ số RS so với VNINDEX = 100
            </div>
          </div>

          {/* Stocks in quadrant */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {current.stocks.map((stock) => (
              <div
                key={stock.ticker}
                className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/50 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-base font-extrabold text-white font-mono">{stock.ticker}</span>
                  <span className="text-xs font-semibold text-emerald-400 font-mono">
                    {stock.sessionChange}
                  </span>
                </div>
                <div className="text-[11px] space-y-1 text-slate-400 font-mono">
                  <div className="flex justify-between">
                    <span>Động Lượng (MOM):</span>
                    <span className="text-slate-200 font-bold">{stock.mom}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sức Mạnh (RATIO):</span>
                    <span className="text-slate-200 font-bold">{stock.ratio}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <RotateCw className="w-3.5 h-3.5 text-cyan-400" />
              <span>
                Nguyên lý chuyển động: Cải thiện (Improving) → Dẫn dắt (Leading) → Suy yếu (Weakening) → Tụt hậu (Lagging).
              </span>
            </div>
            <a
              href="#showcase"
              className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1"
            >
              <span>Xem trực quan trên Màn hình 05</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
