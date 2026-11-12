import React, { useState, useMemo } from 'react';
import { Search, Filter, TrendingUp, Flame, ArrowUpDown, Sparkles } from 'lucide-react';
import { SAMPLE_SCREENER_DATA, ScreenerSample } from '../data/terminalData';

export const InteractiveScreener: React.FC = () => {
  const [filterType, setFilterType] = useState<'all' | 'sos' | 'high_quant' | 'vol_spike'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'quantScore' | 'rsRating' | 'changePercent' | 'volVsMa20'>('quantScore');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');

  const filteredData = useMemo(() => {
    let list = [...SAMPLE_SCREENER_DATA];

    // Filter by type
    if (filterType === 'sos') {
      list = list.filter((item) => item.aflSignal === 'MUA MẠNH (SOS)');
    } else if (filterType === 'high_quant') {
      list = list.filter((item) => item.quantScore >= 75);
    } else if (filterType === 'vol_spike') {
      list = list.filter((item) => item.volVsMa20 >= 3.0);
    }

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (item) => item.ticker.toLowerCase().includes(q) || item.name.toLowerCase().includes(q)
      );
    }

    // Sort
    list.sort((a, b) => {
      const valA = a[sortBy];
      const valB = b[sortBy];
      return sortOrder === 'desc' ? valB - valA : valA - valB;
    });

    return list;
  }, [filterType, searchQuery, sortBy, sortOrder]);

  const toggleSort = (col: 'quantScore' | 'rsRating' | 'changePercent' | 'volVsMa20') => {
    if (sortBy === col) {
      setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc');
    } else {
      setSortBy(col);
      setSortOrder('desc');
    }
  };

  return (
    <section id="screener" className="py-16 lg:py-24 bg-[#080b11] border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Thuật Toán Định Lượng Độc Lập</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Trải Nghiệm Bộ Lọc & Điểm QUANT Trực Tiếp
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
              Hệ thống quét tự động chấm Điểm Quant theo thang 100, đo lường RS Rating và tự động cảnh báo tín hiệu Mua Mạnh (SOS) thời gian thực.
            </p>
          </div>

          <div className="text-right hidden sm:block">
            <span className="text-xs text-slate-400 font-mono">Dữ liệu mẫu từ phiên giao dịch</span>
            <div className="text-sm font-bold text-white font-mono">Khớp: 323 / 1.554 mã</div>
          </div>
        </div>

        {/* Filter Toolbar Controls */}
        <div className="bg-[#0e131d] border border-slate-800 rounded-xl p-3 sm:p-4 mb-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Segmented Filter Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <button
              type="button"
              onClick={() => setFilterType('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                filterType === 'all'
                  ? 'bg-slate-700 text-white font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              Tất cả (10 mã tiêu biểu)
            </button>
            <button
              type="button"
              onClick={() => setFilterType('sos')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 ${
                filterType === 'sos'
                  ? 'bg-emerald-600/90 text-white font-semibold'
                  : 'text-slate-400 hover:text-emerald-400 hover:bg-slate-800'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>★ MUA MẠNH (SOS)</span>
            </button>
            <button
              type="button"
              onClick={() => setFilterType('high_quant')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                filterType === 'high_quant'
                  ? 'bg-cyan-600/90 text-white font-semibold'
                  : 'text-slate-400 hover:text-cyan-400 hover:bg-slate-800'
              }`}
            >
              Điểm Quant ≥ 75
            </button>
            <button
              type="button"
              onClick={() => setFilterType('vol_spike')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1 ${
                filterType === 'vol_spike'
                  ? 'bg-amber-600/90 text-white font-semibold'
                  : 'text-slate-400 hover:text-amber-400 hover:bg-slate-800'
              }`}
            >
              <Flame className="w-3 h-3 text-amber-400" />
              <span>Vol Đột Biến (KL/MA20 &gt; 3x)</span>
            </button>
          </div>

          {/* Search box */}
          <div className="relative min-w-[200px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm mã (VD: SSI, PNJ, KDH)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-900 border border-slate-700/80 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* Screener Interactive Table */}
        <div className="rounded-xl border border-slate-800 overflow-hidden bg-[#0a0e16] shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#0f1422] border-b border-slate-800 text-slate-400 uppercase font-mono tracking-wider text-[11px] select-none">
                <tr>
                  <th className="py-3 px-4">Mã CK</th>
                  <th className="py-3 px-4">Sàn</th>
                  <th className="py-3 px-4">Giá Khớp</th>
                  <th
                    className="py-3 px-4 cursor-pointer hover:text-white"
                    onClick={() => toggleSort('changePercent')}
                  >
                    <div className="flex items-center gap-1">
                      <span>Thay Đổi %</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="py-3 px-4">Tín Hiệu AFL</th>
                  <th
                    className="py-3 px-4 cursor-pointer hover:text-white"
                    onClick={() => toggleSort('rsRating')}
                  >
                    <div className="flex items-center gap-1">
                      <span>RS Rating</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th
                    className="py-3 px-4 cursor-pointer hover:text-white bg-slate-800/40"
                    onClick={() => toggleSort('quantScore')}
                  >
                    <div className="flex items-center gap-1 text-cyan-400 font-bold">
                      <span>Điểm QUANT ↓</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="py-3 px-4">Khối Lượng</th>
                  <th
                    className="py-3 px-4 cursor-pointer hover:text-white"
                    onClick={() => toggleSort('volVsMa20')}
                  >
                    <div className="flex items-center gap-1">
                      <span>KL / MA20</span>
                      <ArrowUpDown className="w-3 h-3" />
                    </div>
                  </th>
                  <th className="py-3 px-4">RSI (14)</th>
                  <th className="py-3 px-4">3 Tháng %</th>
                  <th className="py-3 px-4">P/E</th>
                  <th className="py-3 px-4">ROE %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/70 font-mono text-slate-300">
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan={13} className="py-8 text-center text-slate-500 font-sans">
                      Không tìm thấy mã cổ phiếu nào phù hợp với bộ lọc hiện tại.
                    </td>
                  </tr>
                ) : (
                  filteredData.map((row) => (
                    <tr
                      key={row.ticker}
                      className="hover:bg-slate-800/40 transition-colors group"
                    >
                      <td className="py-3 px-4">
                        <div className="font-bold text-white flex items-center gap-2">
                          <span className="text-cyan-400 font-sans font-extrabold">{row.ticker}</span>
                          <span className="text-[10px] text-slate-400 font-sans font-normal truncate max-w-[120px] hidden sm:inline">
                            {row.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-slate-400 text-[10px] font-sans">{row.exchange}</td>
                      <td className="py-3 px-4 text-white font-bold tabular-nums">
                        {row.price.toFixed(2)}
                      </td>
                      <td className="py-3 px-4 tabular-nums font-semibold">
                        <span
                          className={
                            row.changePercent > 0
                              ? 'text-emerald-400'
                              : row.changePercent < 0
                              ? 'text-rose-400'
                              : 'text-amber-400'
                          }
                        >
                          +{row.changePercent.toFixed(2)}%
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        {row.aflSignal === 'MUA MẠNH (SOS)' ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-sans font-semibold bg-emerald-950/80 text-emerald-400 border border-emerald-800/80">
                            <span>★ MUA MẠNH (SOS)</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-sans text-slate-400 bg-slate-900 border border-slate-800">
                            QUAN SÁT
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 tabular-nums">
                        <div className="flex items-center gap-2">
                          <span className="w-5 font-bold">{row.rsRating}</span>
                          <div className="w-12 h-1.5 bg-slate-800 rounded-full overflow-hidden hidden sm:block">
                            <div
                              className="h-full bg-cyan-400"
                              style={{ width: `${row.rsRating}%` }}
                            />
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-4 tabular-nums bg-slate-800/30">
                        <div className="flex items-center gap-1.5">
                          <span className="text-cyan-300 font-extrabold text-sm">{row.quantScore}</span>
                          <span className="text-slate-500 text-[10px]">/100</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 tabular-nums">{row.volume}</td>
                      <td className="py-3 px-4 tabular-nums">
                        <span
                          className={`flex items-center gap-1 font-semibold ${
                            row.volVsMa20 > 3.0 ? 'text-amber-400' : 'text-slate-300'
                          }`}
                        >
                          {row.volVsMa20 > 3.0 && <Flame className="w-3 h-3 inline text-amber-400" />}
                          {row.volVsMa20.toFixed(2)}x
                        </span>
                      </td>
                      <td className="py-3 px-4 tabular-nums">{row.rsi.toFixed(1)}</td>
                      <td className="py-3 px-4 tabular-nums text-emerald-400 font-medium">
                        +{row.threeMonth.toFixed(1)}%
                      </td>
                      <td className="py-3 px-4 tabular-nums text-slate-400">{row.pe.toFixed(1)}</td>
                      <td className="py-3 px-4 tabular-nums text-slate-300 font-medium">{row.roe.toFixed(1)}%</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <div className="p-3 bg-[#0c101a] border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
            <span>Hiển thị 10 trong 323 mã thỏa mãn tiêu chuẩn</span>
            <span className="hidden sm:inline">Thời gian xử lý: 0.04s trên máy trạm</span>
          </div>
        </div>
      </div>
    </section>
  );
};
