import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, Search, MessageSquare, ChevronDown } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { productCategories } from '../data/products';
import { MobileNavigation } from './MobileNavigation';

interface HeaderProps {
  onOpenGeneralEnquiry: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenGeneralEnquiry, onOpenSearch }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const location = useLocation();

  const isCurrent = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Bar Announcement Header */}
      <div className="bg-[#004AAD] text-white py-1.5 px-4 text-[11px] sm:text-xs">
        <div className="max-w-[1280px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00AEEF] animate-pulse" />
            <span className="font-medium hidden xs:inline">
              Hyderabad & AP's #1 Mosquito Net & UPVC Screen Specialists
            </span>
            <span className="font-medium xs:hidden">
              Doorstep Laser Measurement in 2 Hours
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-blue-100">
              {siteConfig.company.workingDays} ({siteConfig.company.workingHours})
            </span>
            <a
              href={`tel:${siteConfig.company.phone}`}
              className="font-bold hover:underline flex items-center gap-1 text-white"
            >
              <Phone className="w-3 h-3" />
              <span>{siteConfig.company.phoneFormatted}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 h-20 sm:h-22 flex items-center justify-between gap-4">
          {/* Logo prominently displayed in GREAT scale without repeating plain text */}
          <Link
            to="/"
            className="flex items-center hover:opacity-95 transition-opacity shrink-0 py-1"
            aria-label="Shiva Sai Home Needs - Home"
          >
            <img
              src="/assets/logo/shivasai-brand-full.png"
              alt="Shiva Sai Home Needs Logo"
              className="h-14 xs:h-16 sm:h-18 md:h-20 w-auto max-w-[240px] xs:max-w-[280px] sm:max-w-[340px] md:max-w-[420px] object-contain drop-shadow-xs"
            />
          </Link>

          {/* Desktop Navigation Menu: Home, Products, Services, Projects, Gallery, Contact */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-bold text-slate-700">
            <Link
              to="/"
              className={`hover:text-[#004AAD] transition-colors whitespace-nowrap py-2 ${
                isCurrent('/') ? 'text-[#004AAD] border-b-2 border-[#004AAD]' : ''
              }`}
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCategoryDropdownOpen(true)}
              onMouseLeave={() => setIsCategoryDropdownOpen(false)}
            >
              <Link
                to="/products"
                className={`inline-flex items-center gap-1 hover:text-[#004AAD] transition-colors whitespace-nowrap py-2 ${
                  isCurrent('/products') ? 'text-[#004AAD] border-b-2 border-[#004AAD]' : ''
                }`}
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </Link>

              {isCategoryDropdownOpen && (
                <div className="absolute left-0 top-full pt-1 w-72 z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 p-3 text-xs divide-y divide-slate-100">
                    <div className="pb-2 px-1">
                      <Link
                        to="/products"
                        onClick={() => setIsCategoryDropdownOpen(false)}
                        className="font-extrabold text-[#004AAD] hover:underline block py-1"
                      >
                        All 15+ Screen & Door Products →
                      </Link>
                    </div>
                    <div className="pt-2 space-y-1">
                      {productCategories.map((cat) => (
                        <Link
                          key={cat.id}
                          to={`/products/mosquito-net-door-and-sliding-mosquito-net?category=${cat.slug}`}
                          onClick={() => setIsCategoryDropdownOpen(false)}
                          className="block px-2.5 py-1.5 rounded-lg hover:bg-blue-50 text-slate-700 hover:text-[#004AAD] font-semibold truncate transition-colors"
                        >
                          {cat.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/services"
              className={`hover:text-[#004AAD] transition-colors whitespace-nowrap py-2 ${
                isCurrent('/services') ? 'text-[#004AAD] border-b-2 border-[#004AAD]' : ''
              }`}
            >
              Services
            </Link>

            <Link
              to="/projects"
              className={`hover:text-[#004AAD] transition-colors whitespace-nowrap py-2 ${
                isCurrent('/projects') ? 'text-[#004AAD] border-b-2 border-[#004AAD]' : ''
              }`}
            >
              Projects
            </Link>

            <Link
              to="/gallery"
              className={`hover:text-[#004AAD] transition-colors whitespace-nowrap py-2 ${
                isCurrent('/gallery') ? 'text-[#004AAD] border-b-2 border-[#004AAD]' : ''
              }`}
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className={`hover:text-[#004AAD] transition-colors whitespace-nowrap py-2 ${
                isCurrent('/contact') ? 'text-[#004AAD] border-b-2 border-[#004AAD]' : ''
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Icons: Search Bar Trigger + Call Now */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Search Trigger Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-[#004AAD] border border-slate-200 hover:border-blue-300 rounded-xl text-xs font-bold transition-all shadow-2xs"
              aria-label="Open search dialog"
            >
              <Search className="w-4 h-4 text-[#004AAD]" />
              <span className="hidden xl:inline">Search...</span>
              <kbd className="hidden xl:inline px-1.5 py-0.5 text-[10px] bg-white border border-slate-300 rounded text-slate-500 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* Call Now Button */}
            <a
              href={`tel:${siteConfig.company.phone}`}
              className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2.5 text-xs font-bold text-white bg-[#004AAD] hover:bg-blue-800 active:bg-blue-900 rounded-xl shadow-md hover-lift transition-all whitespace-nowrap"
              aria-label={`Call Shiva Sai Home Needs at ${siteConfig.company.phoneFormatted}`}
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{siteConfig.company.phoneFormatted}</span>
              <span className="sm:hidden font-semibold">Call</span>
            </a>

            {/* Mobile menu trigger button (slides menu down from TOP) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 text-slate-700 hover:text-[#004AAD] hover:bg-slate-100 rounded-xl transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Drawer sliding down from top */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenEnquiry={onOpenGeneralEnquiry}
        onOpenSearch={onOpenSearch}
      />
    </>
  );
};
