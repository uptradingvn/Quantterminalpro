import React, { useState } from 'react';
import { Download, CheckCircle2, FolderCheck, HardDrive, ShieldAlert, Cpu } from 'lucide-react';
import { INSTALLER_FEATURES } from '../data/terminalData';

interface InstallerWalkthroughProps {
  onOpenDownload: () => void;
}

export const InstallerWalkthrough: React.FC<InstallerWalkthroughProps> = ({ onOpenDownload }) => {
  const [activeStep, setActiveStep] = useState<1 | 2>(1);

  return (
    <section id="installer" className="py-16 lg:py-24 bg-[#080b11] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-2">
            <HardDrive className="w-4 h-4" />
            <span>Trình Cài Đặt Desktop v1.0.x Tối Ưu</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cài Đặt Siêu Tốc · Sẵn Sàng Giao Dịch Trong 60 Giây
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Phần mềm được đóng gói hoàn toàn độc lập, không yêu cầu cài đặt môi trường ngoài, vận hành mượt mà và không bao giờ bị khóa quyền Administrator.
          </p>
        </div>

        {/* Step Selector Buttons */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <button
            type="button"
            onClick={() => setActiveStep(1)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeStep === 1
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950/50'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span>Bước 1: Chào Mừng & Điều Khoản</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveStep(2)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeStep === 2
                ? 'bg-cyan-600 text-white shadow-md shadow-cyan-950/50'
                : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            <span>Bước 2: Chọn Thư Mục Cài Đặt (359.7 MB)</span>
          </button>
        </div>

        {/* Interactive Installer Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0d121c] rounded-2xl border border-slate-800 p-6 sm:p-10 shadow-2xl">
          {/* Left Column: Real Installer Window Mockup */}
          <div className="lg:col-span-7 flex flex-col items-center">
            <div className="w-full max-w-xl rounded-xl overflow-hidden shadow-2xl border border-slate-700/80 bg-slate-950 transition-all duration-300">
              {activeStep === 1 ? (
                <img
                  src="/assets/aistudio/quant-terminal-pro-cai-dat-welcome-v10x_4b9e4436.png"
                  alt="Giao diện cài đặt Quant Terminal Pro - Chào mừng"
                  className="w-full h-auto object-contain select-none"
                />
              ) : (
                <img
                  src="/assets/aistudio/quant-terminal-pro-cai-dat-chon-thu-muc-v10x_9c969531.png"
                  alt="Giao diện cài đặt Quant Terminal Pro - Chọn thư mục"
                  className="w-full h-auto object-contain select-none"
                />
              )}
            </div>
            <div className="text-[11px] text-slate-400 mt-3 font-mono">
              Ảnh thực tế từ bộ cài đặt Quant Terminal Pro Desktop v1.0.x
            </div>
          </div>

          {/* Right Column: Key Engineering Highlights */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {INSTALLER_FEATURES.map((feat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/90 space-y-1">
                  <div className="flex items-center gap-2 text-sm font-bold text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 pl-6 leading-relaxed">
                    {feat.description}
                  </p>
                  <div className="pl-6 pt-1">
                    <span className="text-[11px] font-mono text-cyan-400 font-medium">
                      {feat.highlight}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenDownload}
                className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 text-sm font-semibold text-white bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 rounded-xl shadow-lg shadow-cyan-950/60 transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Tải Ngay Bộ Cài Đặt (359.7 MB)</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
