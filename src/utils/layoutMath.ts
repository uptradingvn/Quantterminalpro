/**
 * Pure helper functions for Nival stage layout scaling and coordinate mapping.
 */

export interface StageLayoutParams {
  isPhone: boolean;
  isMobile: boolean;
  isFit: boolean;
  navCompact: boolean;
  bw: number | null;
  bh: number | null;
  s: number | null;
  hf: string | null;
  fx: number;
}

export function computeStageLayout(w: number, h: number, isPhone: boolean): StageLayoutParams {
  if (isPhone) {
    return {
      isPhone: true,
      isMobile: false,
      isFit: false,
      navCompact: true,
      bw: null,
      bh: null,
      s: null,
      hf: null,
      fx: 0,
    };
  }

  const mobile = w / h < 1.05;
  const bh = mobile ? 1366 : 1024;
  const ideal = Math.round(bh * w / h);
  const lo = mobile ? 560 : 1060;
  const hi = mobile ? 1450 : 2600;
  const bw = Math.max(lo, Math.min(hi, ideal));
  const s = Math.min(w / bw, h / bh);
  const hf = Math.min(79, 79 * (bw - 295) / 965).toFixed(2) + 'px';
  const isFit = Math.abs(ideal - bw) > 1;
  const compact = mobile || s < 0.52;
  const fx = Math.max(0, (bw - (mobile ? 640 : 1536)) / 2);

  return {
    isPhone: false,
    isMobile: mobile,
    isFit,
    navCompact: compact,
    bw,
    bh,
    s,
    hf,
    fx,
  };
}

export function computeSpotlightCoords(
  clientX: number,
  clientY: number,
  rect: { left: number; top: number; width: number; height: number },
  offsetWidth: number,
  offsetHeight: number
): { x: number; y: number } {
  const sx = offsetWidth / rect.width;
  const sy = offsetHeight / rect.height;
  return {
    x: (clientX - rect.left) * sx,
    y: (clientY - rect.top) * sy,
  };
}

export function wrapIndex(index: number, total: number): number {
  return ((index % total) + total) % total;
}
