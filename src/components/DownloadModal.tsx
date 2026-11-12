import React, { useState } from 'react';
import { X, Download, CheckCircle2, ShieldCheck, HardDrive, MonitorCheck, ArrowRight, FileCheck } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloadProgress, setDownloadProgress] = useState<number | null>(null);
  const [downloadFinished, setDownloadFinished] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleStartDownload = () => {
    setDownloadProgress(5);
    setDownloadFinished(false);

    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev === null) return 10;
        if (prev >= 100) {
          clearInterval(interval);
          setDownloadFinished(true);
          return 100;
        }
        return prev + Math.floor(Math.random() * 20) + 15;
      });
    }, 250);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#0e131d] border border-slate-800 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative text-left">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          aria-label="Đóng cửa sổ"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3.5 mb-6">
          <img
            src="/assets/aistudio/04_Logo_Q_BieuDoNen_AppIcon_TrongSuot_4K_463159f3.svg"
            alt="Quant Terminal Pro Icon"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h3 className="text-xl font-bold text-white">Tải Quant Terminal Pro Desktop</h3>
            <p className="text-xs text-slate-400">Phiên bản chính thức v1.0.x (Windows 64-bit)</p>
          </div>
        </div>

        {/* File Specs Box */}
        <div className="bg-slate-900/80 rounded-xl p-4 border border-slate-800 space-y-2 mb-6 text-xs font-mono">
          <div className="flex justify-between text-slate-300">
            <span className="text-slate-400 font-sans">Tệp cài đặt:</span>
            <span className="text-white font-bold">QuantTerminalPro_Setup_x64_v1.0.exe</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span className="text-slate-400 font-sans">Dung lượng:</span>
            <span className="text-cyan-400 font-bold">359.7 MB</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span className="text-slate-400 font-sans">Hệ điều hành:</span>
            <span className="text-white">Windows 10 / Windows 11 (64-bit)</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span className="text-slate-400 font-sans">Mã xác thực SHA-256:</span>
            <span className="text-slate-400 text-[10px] truncate max-w-[200px]">
              8e4a9c2b...3f71d
            </span>
          </div>
        </div>

        {/* Download Action Area */}
        {downloadProgress === null ? (
          <div className="space-y-4">
            <button
              type="button"
              onClick={handleStartDownload}
              className="w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-cyan-600 via-teal-600 to-emerald-600 hover:from-cyan-500 hover:to-emerald-500 shadow-lg shadow-cyan-950/60 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Bắt Đầu Tải Bản Cài Đặt (359.7 MB)</span>
            </button>
            <div className="text-center text-[11px] text-slate-400">
              Máy chủ phân phối tốc độ cao qua CDN Cloud Direct (Singapore & Việt Nam)
            </div>
          </div>
        ) : (
          <div className="space-y-4 bg-slate-900/90 rounded-xl p-5 border border-slate-800">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-white font-bold">
                {downloadFinished ? 'Tải tệp thành công!' : 'Đang tải tệp cài đặt...'}
              </span>
              <span className="text-cyan-400 font-bold">{Math.min(100, downloadProgress)}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 ease-out"
                style={{ width: `${Math.min(100, downloadProgress)}%` }}
              />
            </div>

            <div className="flex justify-between text-[11px] text-slate-400 font-mono">
              <span>
                {downloadFinished
                  ? '359.7 MB / 359.7 MB'
                  : `${((359.7 * Math.min(100, downloadProgress)) / 100).toFixed(1)} MB / 359.7 MB`}
              </span>
              <span>{downloadFinished ? 'Hoàn tất' : 'Tốc độ: 48.5 MB/s'}</span>
            </div>

            {downloadFinished && (
              <div className="pt-2 animate-in fade-in">
                <div className="p-3 bg-emerald-950/40 border border-emerald-800/80 rounded-lg text-xs text-emerald-300 flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>
                    Tệp <strong>QuantTerminalPro_Setup_x64_v1.0.exe</strong> đã sẵn sàng!
                  </span>
                </div>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  Đóng Cửa Sổ & Bắt Đầu Cài Đặt
                </button>
              </div>
            )}
          </div>
        )}

        {/* 3 Quick Installation Steps */}
        <div className="mt-6 pt-5 border-t border-slate-800 text-xs text-slate-400 space-y-2">
          <div className="font-semibold text-slate-300 uppercase tracking-wider text-[11px]">
            3 Bước Cài Đặt Đơn Giản:
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-cyan-400 font-bold">1.</span>
            <span>Mở tệp vừa tải về, nhấp đúp để khởi chạy trình cài đặt.</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-cyan-400 font-bold">2.</span>
            <span>Nhấn "Tiến &gt;" để cài đặt vào thư mục cá nhân (không cần quyền Admin).</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="font-mono text-cyan-400 font-bold">3.</span>
            <span>Khởi chạy biểu tượng Quant Terminal ngoài Desktop và bắt đầu giao dịch!</span>
          </div>
        </div>
      </div>
    </div>
  );
};
