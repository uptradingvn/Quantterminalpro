import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05070c] border-t border-slate-800/80 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          <div className="flex items-center gap-3">
            <img
              src="/assets/aistudio/04_Logo_Q_BieuDoNen_AppIcon_TrongSuot_4K_463159f3.svg"
              alt="Quant Terminal Pro"
              className="w-8 h-8 object-contain"
            />
            <div>
              <span className="text-white font-bold text-sm tracking-tight">
                Quant Terminal <span className="text-cyan-400">Pro</span>
              </span>
              <span className="block text-[11px] text-slate-400">
                Nền Tảng Giao Dịch & Định Lượng Độc Lập
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <a href="#showcase" className="hover:text-cyan-400 transition-colors">
              Showcase Màn Hình
            </a>
            <a href="#screener" className="hover:text-cyan-400 transition-colors">
              Bộ Lọc & Điểm Quant
            </a>
            <a href="#rrg" className="hover:text-cyan-400 transition-colors">
              Ma Trận RRG
            </a>
            <a href="#installer" className="hover:text-cyan-400 transition-colors">
              Trình Cài Đặt
            </a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">
              Bảng Giá
            </a>
          </div>
        </div>

        {/* Risk Disclaimer & Regulatory Note */}
        <div className="space-y-2 text-[11px] text-slate-400 leading-relaxed max-w-4xl">
          <p>
            <strong className="text-slate-400">Tuyên bố miễn trừ trách nhiệm rủi ro:</strong> Đầu tư chứng khoán và các sản phẩm tài chính luôn tiềm ẩn rủi ro biến động thị trường. Quant Terminal Pro là phần mềm công cụ hỗ trợ phân tích kỹ thuật, sàng lọc dữ liệu định lượng và trực quan hóa ma trận dòng tiền. Các tín hiệu mua bán, điểm số định lượng và xếp hạng chỉ mang tính chất tham khảo kỹ thuật, không cấu thành lời khuyên đầu tư tài chính trực tiếp.
          </p>
          <p>
            Tương thích hoàn toàn với hệ điều hành Microsoft Windows 10 & 11 (64-bit). Hỗ trợ chuẩn kết nối luồng dữ liệu thời gian thực từ các nhà cung cấp được cấp phép tại thị trường Việt Nam.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-900 text-[11px] text-slate-400">
          <div>
            © 2026 Quant Terminal Pro Desktop v1.0.x. Bản quyền thuộc về đội ngũ phát triển.
          </div>
          <div className="flex items-center gap-4 font-mono">
            <span>Phiên bản: 1.0.x Enterprise</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400">Dữ liệu: Realtime Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
