import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TerminalSlider } from './components/TerminalSlider';
import { InteractiveScreener } from './components/InteractiveScreener';
import { RrgMatrixSection } from './components/RrgMatrixSection';
import { InstallerWalkthrough } from './components/InstallerWalkthrough';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { DownloadModal } from './components/DownloadModal';
import { TerminalSlide } from './data/terminalData';

export default function App() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [lightboxSlide, setLightboxSlide] = useState<TerminalSlide | null>(null);

  const handleOpenDownload = () => {
    setIsDownloadOpen(true);
  };

  const handleCloseDownload = () => {
    setIsDownloadOpen(false);
  };

  const handleScrollToShowcase = () => {
    const el = document.getElementById('showcase');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTier = (_tierName: string) => {
    setIsDownloadOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080b11] text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Top Bar Navigation */}
      <Navbar onOpenDownload={handleOpenDownload} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Live Ticker and Institutional Positioning */}
        <Hero
          onOpenDownload={handleOpenDownload}
          onScrollToShowcase={handleScrollToShowcase}
        />

        {/* The Core Feature: Arrow & Mouse Wheel Slider Showcase */}
        <TerminalSlider onOpenLightbox={(slide) => setLightboxSlide(slide)} />

        {/* Interactive Screener Table */}
        <InteractiveScreener />

        {/* Relative Rotation Graph (RRG) Explainer */}
        <RrgMatrixSection />

        {/* Real Desktop Installer Walkthrough */}
        <InstallerWalkthrough onOpenDownload={handleOpenDownload} />

        {/* Pricing & License Tiers */}
        <PricingSection onSelectTier={handleSelectTier} />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Institutional Footer */}
      <Footer />

      {/* Fullscreen 4K Lightbox Modal */}
      <LightboxModal
        initialSlide={lightboxSlide}
        onClose={() => setLightboxSlide(null)}
        onOpenDownload={handleOpenDownload}
      />

      {/* Desktop Installer Download Modal */}
      <DownloadModal isOpen={isDownloadOpen} onClose={handleCloseDownload} />
    </div>
  );
}
