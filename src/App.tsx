import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';
import { EnquiryModal } from './components/EnquiryModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { TimedContactPopup } from './components/TimedContactPopup';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { MosquitoNetProductsPage } from './pages/MosquitoNetProductsPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [isGeneralEnquiryOpen, setIsGeneralEnquiryOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Global keyboard shortcut for search: Ctrl+K or Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white text-slate-900 font-sans">
        {/* Global Header with Logo in Great Scale & Exact 6 Menu Items */}
        <Header 
          onOpenGeneralEnquiry={() => setIsGeneralEnquiryOpen(true)}
          onOpenSearch={() => setIsSearchOpen(true)}
        />

        {/* Page Content Viewport */}
        <main className="flex-1">
          <Routes>
            {/* 1. Home Page */}
            <Route path="/" element={<HomePage />} />
            
            {/* 2. Product Page */}
            <Route path="/products" element={<MosquitoNetProductsPage />} />
            <Route
              path="/products/mosquito-net-door-and-sliding-mosquito-net"
              element={<MosquitoNetProductsPage />}
            />
            <Route path="/products/:slug" element={<ProductDetailPage />} />

            {/* 3. Services Page */}
            <Route path="/services" element={<ServicesPage />} />

            {/* 4. Projects Page */}
            <Route path="/projects" element={<GalleryPage />} />

            {/* 5. Gallery Page */}
            <Route path="/gallery" element={<GalleryPage />} />

            {/* 6. Contact Page with AI Estimator */}
            <Route path="/contact" element={<ContactPage />} />

            {/* Supporting Pages */}
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/faqs" element={<FAQPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />

            {/* Catch-all 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Contact Actions: WhatsApp Icon and Call Icon */}
        <WhatsAppFloatingButton />

        {/* Timed Contact Pop-up every 1 minute with exit button */}
        <TimedContactPopup onOpenEnquiryModal={() => setIsGeneralEnquiryOpen(true)} />

        {/* Global Search Modal */}
        <GlobalSearchModal
          isOpen={isSearchOpen}
          onClose={() => setIsSearchOpen(false)}
        />

        {/* Global Enquiry / Quotation Modal */}
        <EnquiryModal
          isOpen={isGeneralEnquiryOpen}
          onClose={() => setIsGeneralEnquiryOpen(false)}
          productName="Shiva Sai Home Needs Custom Sizing & Quotation"
          defaultEnquiryType="quote"
        />
      </div>
    </BrowserRouter>
  );
}
