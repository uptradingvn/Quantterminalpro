/**
 * Quant Terminal Pro Data
 * Real screenshots and capabilities extracted from the actual desktop application
 */

export interface TerminalSlide {
  id: string;
  index: string;
  title: string;
  shortTitle: string;
  category: string;
  image: string;
  tagline: string;
  description: string;
  coreFeatures: string[];
  stats: { label: string; value: string }[];
  marketContext: string;
}

export const TERMINAL_SLIDES: TerminalSlide[] = [
  {
    id: 'chart-realtime',
    index: '01',
    title: 'Biểu Đồ Kỹ Thuật Độc Lập & Bảng Giá Realtime',
    shortTitle: 'Biểu Đồ & Bảng Giá',
    category: 'Analysis & Execution',
    image: '/assets/aistudio/1_25a6f4fb.png',
    tagline: 'Giao diện TradingView Pro tối ưu hóa cho chứng khoán Việt Nam với tốc độ mili-giây',
    description:
      'Tích hợp toàn diện biểu đồ nến kỹ thuật, bảng giá độ sâu thị trường trực tiếp (Live AetherPro), đặt lệnh nhanh (Ctrl+K) và hỗ trợ đa tab workspace lên đến 8 sheets làm việc song song.',
    coreFeatures: [
      'Trình biên dịch tích hợp Pine Script / AFL / MQL4 / MQL5 Compiler',
      'Công cụ kiểm thử chiến lược Strategy Tester ngay trên biểu đồ',
      'Độ sâu thị trường, Bảng giá Realtime Việt Nam & Quốc Tế đồng bộ',
      'Theo dõi đồng thời đa tài sản: VNINDEX, HPG, FPT, XAUUSD, EURUSD'
    ],
    stats: [
      { label: 'Độ trễ luồng nến', value: '< 2.5ms' },
      { label: 'Đa màn hình', value: '8 Sheets' },
      { label: 'Ngôn ngữ code', value: 'Pine / AFL / MQL' }
    ],
    marketContext: 'VNINDEX 1.743,07 (+28.75 / +1.68%) · Khối lượng 877.00M cổ phiếu'
  },
  {
    id: 'quant-screener',
    index: '02',
    title: 'Bộ Lọc & Quét Tín Hiệu Đa Ngành (Explore & Scan)',
    shortTitle: 'Bộ Lọc & Điểm Quant',
    category: 'Quantitative Screener',
    image: '/assets/aistudio/2_e92c39c7.png',
    tagline: 'Quét toàn bộ 1.554 mã cổ phiếu tức thì với thuật toán Điểm Quant độc quyền',
    description:
      'Hệ thống định lượng tự động chấm Điểm QUANT (thang điểm 100), đánh giá xếp hạng sức mạnh giá RS RATING, phát hiện tín hiệu MUA MẠNH (SOS) và lọc đột biến khối lượng so với MA20 theo thời gian thực.',
    coreFeatures: [
      'Bộ lọc đa tiêu chí: Khối lượng >= 50K, Nạp AFL / Pine Script tùy biến',
      'Thuật toán Điểm Quant độc quyền kết hợp Technical & Fundamental',
      'Xếp hạng sức mạnh giá RS Rating (1 - 99) phân loại siêu cổ phiếu',
      'Cảnh báo sớm tín hiệu MUA MẠNH (SOS), QUAN SÁT và phân kỳ khối lượng'
    ],
    stats: [
      { label: 'Số mã quét', value: '1.554 mã' },
      { label: 'Thời gian quét', value: '0.04s' },
      { label: 'Chỉ báo kết hợp', value: '22 cột FA & TA' }
    ],
    marketContext: 'Phát hiện tín hiệu MUA MẠNH: PNJ (Điểm 78), HDG (Điểm 76), KDH (Điểm 75), SSI (Điểm 73)'
  },
  {
    id: 'market-heatmap',
    index: '03',
    title: 'Bản Đồ Nhiệt Toàn Thị Trường (Market Heatmap)',
    shortTitle: 'Bản Đồ Nhiệt 1.491 Mã',
    category: 'Market Breadth',
    image: '/assets/aistudio/3_59d2d526.png',
    tagline: 'Cái nhìn toàn cảnh trực quan 1.491 mã cổ phiếu phân nhóm theo ngành và vốn hóa',
    description:
      'Bản đồ Treemap phân cấp phản ánh dòng tiền thông minh luân chuyển giữa các nhóm ngành: Bất động sản, Ngân hàng, Thực phẩm, Dầu khí, Chứng khoán, Bán lẻ, Thép với tương tác tooltip chi tiết từng mã.',
    coreFeatures: [
      'Trực quan hóa vốn hóa và % tăng giảm của 1.491 doanh nghiệp niêm yết',
      'Phân vùng chuyên sâu: Bất Động Sản, Ngân Hàng, Dầu Khí, Thép, Bán Lẻ',
      'Nhấp chuột mở ngay biểu đồ chi tiết mã cổ phiếu tức thì',
      'Thanh đo phổ sắc thái từ -3% (Đỏ) đến +3% (Xanh ngọc / Xanh lục)'
    ],
    stats: [
      { label: 'Quy mô hiển thị', value: '1.491 mã' },
      { label: 'Phân nhóm ngành', value: '23 nhóm' },
      { label: 'Cập nhật dòng tiền', value: 'Thời gian thực' }
    ],
    marketContext: 'Dẫn sóng thị trường: VIC +3.24%, VHM +2.65%, SSI +3.77%, MWG +2.35%, HPG +1.67%'
  },
  {
    id: 'multichart-grid',
    index: '04',
    title: 'Bản Đồ Cổ Phiếu Multi-Chart Grid So Sánh',
    shortTitle: 'Multi-Chart Grid',
    category: 'Comparative Analysis',
    image: '/assets/aistudio/4_3dd596d3.png',
    tagline: 'Theo dõi đồng thời lưới 4 đến 8 biểu đồ độc lập trên cùng một màn hình',
    description:
      'So sánh biến động giá, khối lượng tích lũy và hiệu suất 3 Tháng / YTD của các cổ phiếu cùng ngành như GVR, MWG, SSB, SSI, VHM, VIC để phát hiện cổ phiếu dẫn dắt (Leader) sớm nhất.',
    coreFeatures: [
      'Bố cục lưới Grid linh hoạt từ 2, 4 đến 6 biểu đồ đồng bộ thời gian',
      'Xem nhanh lịch sử 5 Ngày, 1 Tháng, 3 Tháng, 6 Tháng, YTD, 1 Năm',
      'Đồng bộ hóa con trỏ chuột crosshair qua tất cả các khung hình',
      'Bộ lọc nhanh theo danh sách Watchlist cá nhân hóa'
    ],
    stats: [
      { label: 'Lưới hiển thị', value: '4 - 8 Charts' },
      { label: 'Khung so sánh', value: '5D đến 5Y' },
      { label: 'Đồng bộ Crosshair', value: 'Độc lập / Đồng bộ' }
    ],
    marketContext: 'So sánh tương quan sóng ngành Bất Động Sản & Bán Lẻ (GVR vs MWG vs SSI)'
  },
  {
    id: 'rrg-matrix',
    index: '05',
    title: 'Ma Trận RRG Xoay Động Lượng Ngành (Relative Rotation Graph)',
    shortTitle: 'Ma Trận RRG',
    category: 'Rotation Dynamics',
    image: '/assets/aistudio/5_1ed4754c.png',
    tagline: 'Mô hình 4 góc phần tư xác định chu kỳ luân chuyển dòng tiền thông minh',
    description:
      'Mô hình chuẩn quốc tế phân bổ cổ phiếu vào 4 góc phần tư: DẪN DẮT (Leading), SUY YẾU (Weakening), TỤT HẬU (Lagging), và CẢI THIỆN (Improving) dựa trên RS-Ratio và RS-Momentum so với VN-Index.',
    coreFeatures: [
      'Theo dõi vệt xoay động lượng (Trail 8 phiên) của 21 mã Bất động sản dân cư',
      'Chế độ Replay tua lại chuyển động dòng tiền qua từng mốc lịch sử',
      'Tự động định danh nhóm cổ phiếu Dẫn dắt: DXG, DIG, CEO, TCH, HDC, KDH',
      'Phát hiện sớm điểm xoay từ vùng Cải thiện (Improving) sang Dẫn dắt (Leading)'
    ],
    stats: [
      { label: 'Vệt đuôi theo dõi', value: '8 phiên' },
      { label: 'Chế độ Replay', value: 'Tua lịch sử' },
      { label: 'Hệ quy chiếu', value: 'VNINDEX = 100' }
    ],
    marketContext: 'Top Dẫn Dắt (Leading): DXG (+4.11%), DIG (+2.40%), CEO (+0.82%), TCH (+2.64%)'
  }
];

export interface ScreenerSample {
  ticker: string;
  name: string;
  exchange: string;
  price: number;
  changePercent: number;
  aflSignal: 'MUA MẠNH (SOS)' | 'QUAN SÁT';
  rsRating: number;
  quantScore: number;
  volume: string;
  volVsMa20: number;
  rsi: number;
  threeMonth: number;
  pe: number;
  roe: number;
}

export const SAMPLE_SCREENER_DATA: ScreenerSample[] = [
  {
    ticker: 'PNJ',
    name: 'CTCP Vàng bạc Đá quý Phú Nhuận',
    exchange: 'HOSE',
    price: 14.70,
    changePercent: 3.52,
    aflSignal: 'MUA MẠNH (SOS)',
    rsRating: 84,
    quantScore: 78,
    volume: '15.67M',
    volVsMa20: 13.13,
    rsi: 46.8,
    threeMonth: 16.6,
    pe: 3.5,
    roe: 17.0
  },
  {
    ticker: 'CTG',
    name: 'Ngân hàng TMCP Công Thương VN',
    exchange: 'HOSE',
    price: 31.90,
    changePercent: 0.79,
    aflSignal: 'QUAN SÁT',
    rsRating: 82,
    quantScore: 77,
    volume: '9.04M',
    volVsMa20: 2.34,
    rsi: 52.7,
    threeMonth: 22.8,
    pe: 6.5,
    roe: 22.2
  },
  {
    ticker: 'TPB',
    name: 'Ngân hàng TMCP Tiên Phong',
    exchange: 'HOSE',
    price: 12.70,
    changePercent: 1.20,
    aflSignal: 'QUAN SÁT',
    rsRating: 88,
    quantScore: 77,
    volume: '10.91M',
    volVsMa20: 2.52,
    rsi: 42.1,
    threeMonth: 30.8,
    pe: 4.8,
    roe: 16.9
  },
  {
    ticker: 'HDG',
    name: 'Công ty Cổ phần Tập đoàn Hà Đô',
    exchange: 'HOSE',
    price: 16.70,
    changePercent: 3.09,
    aflSignal: 'MUA MẠNH (SOS)',
    rsRating: 98,
    quantScore: 76,
    volume: '3.10M',
    volVsMa20: 4.31,
    rsi: 67.0,
    threeMonth: 21.7,
    pe: 11.0,
    roe: 7.4
  },
  {
    ticker: 'KDH',
    name: 'CTCP Đầu tư và Kinh doanh Nhà Khang Điền',
    exchange: 'HOSE',
    price: 15.90,
    changePercent: 5.65,
    aflSignal: 'MUA MẠNH (SOS)',
    rsRating: 99,
    quantScore: 75,
    volume: '22.89M',
    volVsMa20: 6.22,
    rsi: 65.5,
    threeMonth: 31.7,
    pe: 19.8,
    roe: 5.9
  },
  {
    ticker: 'HVN',
    name: 'Tổng Công ty Hàng không Việt Nam',
    exchange: 'HOSE',
    price: 22.85,
    changePercent: 6.78,
    aflSignal: 'QUAN SÁT',
    rsRating: 92,
    quantScore: 74,
    volume: '2.34M',
    volVsMa20: 0.63,
    rsi: 49.2,
    threeMonth: 9.5,
    pe: 17.1,
    roe: 50.1
  },
  {
    ticker: 'SSI',
    name: 'Công ty Cổ phần Chứng khoán SSI',
    exchange: 'HOSE',
    price: 20.65,
    changePercent: 3.77,
    aflSignal: 'MUA MẠNH (SOS)',
    rsRating: 79,
    quantScore: 73,
    volume: '34.15M',
    volVsMa20: 3.82,
    rsi: 58.8,
    threeMonth: 6.0,
    pe: 11.1,
    roe: 13.5
  },
  {
    ticker: 'FRT',
    name: 'CTCP Bán lẻ Kỹ thuật số FPT',
    exchange: 'HOSE',
    price: 146.40,
    changePercent: 2.52,
    aflSignal: 'QUAN SÁT',
    rsRating: 96,
    quantScore: 73,
    volume: '377.0K',
    volVsMa20: 0.37,
    rsi: 74.3,
    threeMonth: 18.4,
    pe: 26.5,
    roe: 35.6
  },
  {
    ticker: 'VNM',
    name: 'Công ty Cổ phần Sữa Việt Nam',
    exchange: 'HOSE',
    price: 57.90,
    changePercent: 1.76,
    aflSignal: 'QUAN SÁT',
    rsRating: 85,
    quantScore: 72,
    volume: '3.29M',
    volVsMa20: 0.82,
    rsi: 64.5,
    threeMonth: 16.7,
    pe: 16.0,
    roe: 29.9
  },
  {
    ticker: 'SHS',
    name: 'Công ty Cổ phần Chứng khoán Sài Gòn - HN',
    exchange: 'HNX',
    price: 13.70,
    changePercent: 3.79,
    aflSignal: 'MUA MẠNH (SOS)',
    rsRating: 78,
    quantScore: 70,
    volume: '16.82M',
    volVsMa20: 8.38,
    rsi: 61.6,
    threeMonth: 4.4,
    pe: 12.3,
    roe: 10.8
  }
];

export const INSTALLER_FEATURES = [
  {
    title: 'Kết nối trực tiếp dữ liệu tốc độ cao',
    description: 'Hỗ trợ đồng thời các nguồn DataPro, FireAnt và Cloud Direct với độ trễ dưới 2 mili-giây.',
    highlight: 'DataPro · FireAnt · Cloud Direct'
  },
  {
    title: 'Cài đặt cá nhân không cần quyền Admin',
    description: 'Mặc định phần mềm cài đặt vào thư mục người dùng cá nhân (AppData), tránh bị Windows khóa quyền ghi dữ liệu.',
    highlight: 'Không cần Admin · Vận hành mượt mà'
  },
  {
    title: 'Tự động tạo biểu tượng ngoài Desktop & Start Menu',
    description: 'Khởi động tức thì với 1 cú nhấp chuột. Bộ nhớ cài đặt nhẹ nhàng chỉ 359.7 MB.',
    highlight: 'Dung lượng yêu cầu: 359.7 MB'
  },
  {
    title: 'Tích hợp sẵn thư mục Plugins mở rộng',
    description: 'Dễ dàng thêm các chỉ báo tùy chỉnh, thuật toán Python, code AFL hay Pine Script từ cộng đồng.',
    highlight: 'Mở rộng linh hoạt · Hỗ trợ Python / AFL'
  }
];

export const PRICING_TIERS = [
  {
    id: 'starter',
    name: 'Cá Nhân Standard',
    price: '499.000',
    unit: 'đ / tháng',
    billing: 'Thanh toán theo năm (tiết kiệm 20%)',
    popular: false,
    description: 'Dành cho nhà đầu tư cá nhân cần biểu đồ kỹ thuật chuyên nghiệp và bảng giá tốc độ cao.',
    features: [
      'Biểu đồ kỹ thuật thời gian thực TradingView Pro',
      'Độ sâu bảng giá Việt Nam (HOSE, HNX, UPCOM)',
      'Bộ lọc cổ phiếu cơ bản (50 tiêu chí)',
      'Tối đa 2 sheets làm việc đồng thời',
      'Cập nhật dữ liệu chuẩn EOD & Intraday'
    ],
    cta: 'Đăng Ký Bản Standard'
  },
  {
    id: 'pro',
    name: 'Chuyên Nghiệp Pro',
    price: '990.000',
    unit: 'đ / tháng',
    billing: 'Được 86% nhà đầu tư lựa chọn',
    popular: true,
    description: 'Gói hoàn chỉnh với bộ lọc Điểm Quant, Bản đồ nhiệt toàn thị trường và Ma trận RRG xoay động lượng.',
    features: [
      'Tất cả tính năng của gói Standard',
      'Thuật toán Điểm QUANT & Xếp hạng RS Rating độc quyền',
      'Bộ lọc đa ngành Explore & Scan 1.554 mã cổ phiếu',
      'Bản đồ nhiệt thị trường Treemap 1.491 mã',
      'Ma trận RRG 4 góc phần tư & Replay lịch sử',
      'Trình biên dịch Pine / AFL / MQL4 Compiler',
      'Đa màn hình lên đến 8 sheets độc lập',
      'Hỗ trợ kỹ thuật ưu tiên 24/7'
    ],
    cta: 'Dùng Thử Pro 14 Ngày'
  },
  {
    id: 'enterprise',
    name: 'Quỹ & Tổ Chức Enterprise',
    price: 'Liên hệ',
    unit: '',
    billing: 'Hợp đồng theo năm cho Team & Quỹ',
    popular: false,
    description: 'Dành cho các đội nhóm quỹ đầu tư, công ty chứng khoán, tổ chức tự doanh cần API trực tiếp.',
    features: [
      'Tất cả tính năng của gói Chuyên Nghiệp Pro',
      'Dedicated Cloud Direct Data Server riêng biệt',
      'Hỗ trợ kết nối Python SDK & REST/WebSocket API',
      'Custom thuật toán định lượng theo yêu cầu tổ chức',
      'Cấp phép sử dụng không giới hạn thiết bị trong tổ chức',
      'Ký cam kết SLA uptime 99.99%',
      'Chuyên gia Quant riêng đào tạo và hỗ trợ trực tiếp'
    ],
    cta: 'Tư Vấn Doanh Nghiệp'
  }
];

export const FAQS = [
  {
    q: 'Quant Terminal Pro có cần cài đặt môi trường như Python hay C++ không?',
    a: 'Không. Trình cài đặt Quant Terminal Pro Desktop v1.0.x (dung lượng 359.7 MB) đã được đóng gói độc lập toàn diện. Bạn chỉ cần tải về, nhấn "Tiếp tục" là có thể sử dụng ngay mà không cần cấu hình phức tạp hay cài thêm bất kỳ thư viện nào.'
  },
  {
    q: 'Phần mềm có cần quyền Administrator khi cài đặt không?',
    a: 'Không cần. Quant Terminal Pro được thiết kế thông minh để cài đặt trực tiếp vào thư mục ứng dụng người dùng (%LocalAppData%\\Programs\\QuantTerminal). Điều này giúp phần mềm ghi nhận dữ liệu cache mượt mà mà không bao giờ bị Windows UAC khóa quyền.'
  },
  {
    q: 'Tôi có thể dùng dữ liệu từ DataPro, FireAnt hay tài khoản chứng khoán của tôi không?',
    a: 'Có. Quant Terminal Pro tích hợp sẵn bộ kết nối trực tiếp tốc độ cao với các nhà cung cấp dữ liệu lớn tại Việt Nam (DataPro, FireAnt, Cloud Direct) và hỗ trợ nạp dữ liệu EOD/Intraday từ nhiều nguồn linh hoạt.'
  },
  {
    q: 'Làm thế nào để sử dụng phím mũi tên hoặc lăn chuột trên bộ sưu tập màn hình?',
    a: 'Bạn có thể nhấn các nút mũi tên trái/phải trên màn hình, dùng phím mũi tên bàn phím (← / →), vuốt cảm ứng trên điện thoại hoặc chỉ cần cuộn bánh xe chuột (Mouse Wheel) trực tiếp khi di chuột qua khung hiển thị màn hình.'
  },
  {
    q: 'Cấu hình máy tính tối thiểu để chạy phần mềm mượt mà là gì?',
    a: 'Hệ điều hành Windows 10 hoặc Windows 11 (64-bit), CPU từ Intel Core i3 / AMD Ryzen 3 trở lên, RAM tối thiểu 8GB (khuyến nghị 16GB nếu mở đồng thời 8 sheet biểu đồ), và ổ cứng SSD còn trống tối thiểu 500 MB.'
  }
];
