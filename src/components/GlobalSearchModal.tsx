import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Search, 
  X, 
  ArrowRight, 
  Layers, 
  Wrench, 
  HelpCircle, 
  Building2, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { products, productCategories } from '../data/products';
import { faqsData, FAQItem } from '../data/faqs';
import { projects } from '../data/projects';
import { ProjectItem } from '../types/product';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'products' | 'services' | 'faqs' | 'projects'>('all');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const normalizedQuery = query.toLowerCase().trim();

  // Search Results
  const matchingProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(normalizedQuery) ||
      p.shortDescription.toLowerCase().includes(normalizedQuery) ||
      p.categoryName.toLowerCase().includes(normalizedQuery) ||
      (p.specifications.netType && p.specifications.netType.toLowerCase().includes(normalizedQuery))
  );

  const servicesList = [
    { title: 'Free Doorstep Laser Measurement', desc: 'Precision digital sizing within 2 hours across Hyderabad', path: '/services' },
    { title: 'Balcony Sliding Mosquito Net Installation', desc: 'Custom aluminium tracks & roller bearing shutters', path: '/services' },
    { title: 'Barrier-Free Pleated Screen Fitting', desc: 'Zero-trip 3mm floor guide for French doors and balconies', path: '/services' },
    { title: 'UPVC Window 3rd-Track Insect Screen Retrofit', desc: 'Direct clip-on bug shutters matching UPVC frames', path: '/services' },
    { title: 'Stainless Steel SS 304 Pet & Security Doors', desc: 'Dog-scratch proof and knife-shear resistant mesh door fabrication', path: '/services' },
    { title: 'Balcony Ceiling Cloth Drying Hanger Setup', desc: 'SS 304 pulley lines for modern high-rise apartments', path: '/services' },
    { title: 'Balcony Safety Grills & Pigeon Mesh Enclosures', desc: 'Ceiling to floor diamond lattice fall hazard protection', path: '/services' }
  ];

  const matchingServices = servicesList.filter(
    (s) => s.title.toLowerCase().includes(normalizedQuery) || s.desc.toLowerCase().includes(normalizedQuery)
  );

  const matchingFaqs = faqsData.filter(
    (f: FAQItem) =>
      f.question.toLowerCase().includes(normalizedQuery) ||
      f.answer.toLowerCase().includes(normalizedQuery) ||
      f.category.toLowerCase().includes(normalizedQuery)
  );

  const matchingProjects = projects.filter(
    (prj: ProjectItem) =>
      prj.title.toLowerCase().includes(normalizedQuery) ||
      prj.location.toLowerCase().includes(normalizedQuery) ||
      prj.description.toLowerCase().includes(normalizedQuery) ||
      (prj.specifications.systemType && prj.specifications.systemType.toLowerCase().includes(normalizedQuery))
  );

  const handleSelect = (path: string) => {
    onClose();
    navigate(path);
  };

  const totalResults =
    (selectedFilter === 'all' || selectedFilter === 'products' ? matchingProducts.length : 0) +
    (selectedFilter === 'all' || selectedFilter === 'services' ? matchingServices.length : 0) +
    (selectedFilter === 'all' || selectedFilter === 'faqs' ? matchingFaqs.length : 0) +
    (selectedFilter === 'all' || selectedFilter === 'projects' ? matchingProjects.length : 0);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 bg-slate-900/60 backdrop-blur-xs">
      <div 
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[82vh] animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 bg-slate-50/70 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#004AAD] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products, mesh types, UPVC, prices, locations..."
            className="w-full bg-transparent text-slate-900 placeholder-slate-400 text-sm sm:text-base font-medium focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 hover:bg-slate-200 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 hover:bg-slate-200 rounded-lg text-slate-500 hover:text-slate-800 transition-colors shrink-0"
            aria-label="Close search"
          >
            <span className="text-xs font-semibold px-1.5 py-0.5 bg-slate-200 text-slate-700 rounded hidden sm:inline">ESC</span>
            <X className="w-5 h-5 sm:hidden" />
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-slate-100 bg-white overflow-x-auto text-xs no-scrollbar">
          {[
            { id: 'all', label: 'All Results' },
            { id: 'products', label: `Products (${matchingProducts.length})` },
            { id: 'services', label: `Services (${matchingServices.length})` },
            { id: 'faqs', label: `FAQs (${matchingFaqs.length})` },
            { id: 'projects', label: `Projects (${matchingProjects.length})` }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-3 py-1 rounded-full font-medium whitespace-nowrap transition-colors ${
                selectedFilter === tab.id
                  ? 'bg-[#004AAD] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Results Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Quick Suggestion Pills if query is empty */}
          {!query && (
            <div className="space-y-4 py-2">
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Popular Searches</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Balcony Sliding Door',
                    'Barrier-Free Pleated Net',
                    'UPVC 3-Track Net',
                    'SS 304 Pet Proof',
                    'Ceiling Cloth Hanger',
                    'Cost per sq ft',
                    'Kukatpally Service'
                  ].map((chip) => (
                    <button
                      key={chip}
                      onClick={() => setQuery(chip)}
                      className="px-3 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-[#004AAD] hover:border-blue-200 border border-slate-200 rounded-lg text-xs font-medium text-slate-700 transition-colors"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Product Categories</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {productCategories.slice(0, 6).map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleSelect(`/products/mosquito-net-door-and-sliding-mosquito-net?category=${cat.slug}`)}
                      className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 text-left transition-all group"
                    >
                      <span className="text-xs font-semibold text-slate-800 group-hover:text-[#004AAD]">{cat.name}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#004AAD]" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Empty State */}
          {query && totalResults === 0 && (
            <div className="text-center py-10 space-y-3">
              <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                <Search className="w-6 h-6" />
              </div>
              <p className="text-sm font-bold text-slate-800">No exact results found for "{query}"</p>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                Try searching for "sliding", "pleated", "cloth hanger", "UPVC", or click below to chat with our expert directly.
              </p>
              <button
                onClick={() => handleSelect('/contact')}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#004AAD] text-white rounded-lg text-xs font-semibold hover:bg-blue-800 transition-colors"
              >
                <span>Ask AI Advisor or Book Free Measurement</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Products List */}
          {(selectedFilter === 'all' || selectedFilter === 'products') && matchingProducts.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#004AAD] uppercase tracking-wider">
                <Layers className="w-3.5 h-3.5" />
                <span>Products & Mesh Systems ({matchingProducts.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchingProducts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => handleSelect(`/products/${p.slug}`)}
                    className="w-full flex items-center gap-3 p-2.5 rounded-xl border border-slate-100 hover:border-blue-300 hover:bg-blue-50/40 text-left transition-all group"
                  >
                    <img
                      src={p.image}
                      alt={p.name}
                      loading="lazy"
                      className="w-12 h-12 rounded-lg object-cover shrink-0 border border-slate-200"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-[#004AAD] truncate">
                          {p.name}
                        </p>
                        <span className="text-xs font-extrabold text-[#F58220] shrink-0">
                          ₹{p.price} <span className="text-[10px] text-slate-500 font-normal">{p.priceUnit}</span>
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5">{p.shortDescription}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Services List */}
          {(selectedFilter === 'all' || selectedFilter === 'services') && matchingServices.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wider">
                <Wrench className="w-3.5 h-3.5" />
                <span>Installation Services ({matchingServices.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchingServices.map((srv, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelect(srv.path)}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl border border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/40 text-left transition-all group"
                  >
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-emerald-700">{srv.title}</p>
                      <p className="text-[11px] text-slate-500">{srv.desc}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 shrink-0 ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* FAQs List */}
          {(selectedFilter === 'all' || selectedFilter === 'faqs') && matchingFaqs.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-purple-700 uppercase tracking-wider">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Frequently Answered Questions ({matchingFaqs.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchingFaqs.slice(0, 4).map((faq: FAQItem) => (
                  <button
                    key={faq.id}
                    onClick={() => handleSelect('/faq')}
                    className="w-full p-2.5 rounded-xl border border-slate-100 hover:border-purple-300 hover:bg-purple-50/40 text-left transition-all group"
                  >
                    <p className="text-xs sm:text-sm font-semibold text-slate-900 group-hover:text-purple-700">{faq.question}</p>
                    <p className="text-[11px] text-slate-500 line-clamp-2 mt-1">{faq.answer}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Projects List */}
          {(selectedFilter === 'all' || selectedFilter === 'projects') && matchingProjects.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-700 uppercase tracking-wider">
                <Building2 className="w-3.5 h-3.5" />
                <span>Completed Apartment Projects ({matchingProjects.length})</span>
              </div>
              <div className="space-y-1.5">
                {matchingProjects.slice(0, 4).map((prj: ProjectItem) => (
                  <button
                    key={prj.id}
                    onClick={() => handleSelect('/projects')}
                    className="w-full flex items-center justify-between p-2.5 rounded-xl border border-slate-100 hover:border-amber-300 hover:bg-amber-50/40 text-left transition-all group"
                  >
                    <div>
                      <p className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-amber-800">{prj.title}</p>
                      <p className="text-[11px] text-slate-500">{prj.location}</p>
                    </div>
                    {prj.badge && (
                      <span className="text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded font-bold shrink-0">
                        {prj.badge}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
          <span>Need custom sizing? Call <strong>+91 73373 08486</strong> for free site visit</span>
          <button
            onClick={() => handleSelect('/contact')}
            className="text-[#004AAD] font-bold hover:underline"
          >
            Open AI Advisor →
          </button>
        </div>
      </div>
    </div>
  );
};
