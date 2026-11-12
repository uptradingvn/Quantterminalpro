import React from 'react';
import { Check, Star, ShieldCheck } from 'lucide-react';
import { PRICING_TIERS } from '../data/terminalData';

interface PricingSectionProps {
  onSelectTier: (tierName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectTier }) => {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-[#0a0e17] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Minh Bạch · Đầu Tư Cho Lợi Nhuận Bền Vững</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Gói Bản Quyền Quant Terminal Pro
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Lựa chọn gói công cụ định lượng phù hợp với quy mô tài sản và phong cách giao dịch của bạn.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PRICING_TIERS.map((tier) => {
            return (
              <div
                key={tier.id}
                className={`flex flex-col justify-between p-6 sm:p-8 rounded-2xl border transition-all ${
                  tier.popular
                    ? 'bg-gradient-to-b from-[#0f1728] to-[#0a0f1a] border-cyan-500/80 shadow-2xl shadow-cyan-950/40 relative'
                    : 'bg-[#0c101a] border-slate-800 hover:border-slate-700'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 text-[11px] font-extrabold uppercase tracking-wider rounded-full shadow-md flex items-center gap-1">
                    <Star className="w-3 h-3 fill-slate-950" />
                    <span>Gói Phổ Biến Nhất</span>
                  </div>
                )}

                <div>
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                    <p className="text-xs text-slate-400 mt-1 min-h-[36px] leading-relaxed">
                      {tier.description}
                    </p>
                  </div>

                  <div className="mb-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tabular-nums">
                        {tier.price}
                      </span>
                      {tier.unit && (
                        <span className="text-xs font-medium text-slate-400">{tier.unit}</span>
                      )}
                    </div>
                    <div className="text-[11px] text-cyan-400 mt-1 font-medium">{tier.billing}</div>
                  </div>

                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Tính năng bao gồm:
                    </div>
                    {tier.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectTier(tier.name)}
                  className={`w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                    tier.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-bold shadow-lg shadow-cyan-900/40 active:scale-95'
                      : 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-700'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
