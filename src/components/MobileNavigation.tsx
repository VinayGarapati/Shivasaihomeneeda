import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, ChevronRight, X, Search, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenEnquiry: () => void;
  onOpenSearch: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  onClose,
  onOpenEnquiry,
  onOpenSearch
}) => {
  const location = useLocation();

  if (!isOpen) return null;

  // Clean non-redundant navigation labels requested by the user
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' }
  ];

  const isCurrent = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex flex-col justify-start animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Menu Container sliding down from the TOP as requested */}
      <div 
        className="w-full bg-white rounded-b-3xl shadow-2xl border-b border-slate-200 max-h-[90vh] overflow-y-auto p-5 sm:p-6 space-y-5 animate-in slide-in-from-top duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with High-Resolution Logo & Close Button */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <Link to="/" onClick={onClose} className="block">
            <img
              src="/assets/logo/shivasai-brand-full.png"
              alt="Shiva Sai Home Needs"
              className="h-12 w-auto max-w-[220px] object-contain"
            />
          </Link>
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Search Bar */}
        <button
          onClick={() => {
            onClose();
            onOpenSearch();
          }}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-50 hover:bg-blue-50 border border-slate-200 hover:border-blue-300 rounded-xl text-xs font-semibold text-slate-500 hover:text-[#004AAD] transition-all"
        >
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4 text-[#004AAD]" />
            <span>Search mosquito nets, prices, locations...</span>
          </div>
          <span className="text-[10px] bg-white border border-slate-200 px-1.5 py-0.5 rounded text-slate-400">
            Search
          </span>
        </button>

        {/* Exact 6 Links: Home, Product Page, Services Page, Projects Page, Gallery Page, Contact Page */}
        <nav className="space-y-1.5" aria-label="Mobile Primary Menu">
          {navItems.map((item) => {
            const active = isCurrent(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  active
                    ? 'bg-[#004AAD] text-white shadow-xs'
                    : 'text-slate-800 hover:bg-blue-50/70 hover:text-[#004AAD]'
                }`}
              >
                <span>{item.label}</span>
                <ChevronRight className={`w-4 h-4 ${active ? 'text-white' : 'text-slate-400'}`} />
              </Link>
            );
          })}
        </nav>

        {/* Contact Actions in Menu */}
        <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2.5">
          <a
            href={`tel:${siteConfig.company.phone}`}
            className="flex items-center justify-center gap-2 py-3 px-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>

          <a
            href={siteConfig.company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-xs font-bold shadow-xs transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Service Footnote */}
        <div className="text-center text-[11px] text-slate-500 pt-1">
          📍 Free Doorstep Laser Measurement within 2 hours across Hyderabad
        </div>
      </div>
    </div>
  );
};
