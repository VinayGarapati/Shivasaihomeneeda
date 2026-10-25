import React, { useState } from 'react';
import { Filter, ChevronDown, ChevronRight, Check, Sparkles, PhoneCall } from 'lucide-react';
import { ProductCategory } from '../types/product';
import { siteConfig } from '../data/siteConfig';

interface ProductSidebarProps {
  categories: ProductCategory[];
  selectedCategorySlug: string | null;
  onSelectCategory: (slug: string | null) => void;
  categoryCounts: Record<string, number>;
  totalProductsCount: number;
  className?: string;
}

export const ProductSidebar: React.FC<ProductSidebarProps> = ({
  categories,
  selectedCategorySlug,
  onSelectCategory,
  categoryCounts,
  totalProductsCount,
  className = ''
}) => {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  return (
    <aside className={`w-full ${className}`}>
      {/* Mobile Collapsible Header */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
          className="w-full flex items-center justify-between px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold border border-slate-200 transition-colors"
          aria-expanded={isMobileFiltersOpen}
        >
          <div className="flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-blue-600" />
            <span>Product Categories & Filters</span>
            {selectedCategorySlug && (
              <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
            )}
          </div>
          <ChevronDown
            className={`w-4 h-4 text-slate-500 transition-transform ${
              isMobileFiltersOpen ? 'rotate-180' : ''
            }`}
          />
        </button>
      </div>

      {/* Main Filter Content (Visible always on desktop, toggleable on mobile) */}
      <div
        className={`${
          isMobileFiltersOpen ? 'block' : 'hidden'
        } lg:block space-y-5 bg-white lg:bg-transparent rounded-xl lg:rounded-none p-4 lg:p-0 border lg:border-none border-slate-200 shadow-sm lg:shadow-none`}
      >
        {/* Category List Card */}
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs">
          <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
              Categories
            </span>
            <span className="text-[11px] text-slate-600 font-mono">
              8 Systems
            </span>
          </div>

          <div className="p-2 space-y-0.5">
            {/* View All Products button */}
            <button
              onClick={() => {
                onSelectCategory(null);
                setIsMobileFiltersOpen(false);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-md transition-colors text-left ${
                selectedCategorySlug === null
                  ? 'bg-blue-50 text-blue-700 font-semibold border border-blue-200/60'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                {selectedCategorySlug === null && (
                  <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                )}
                <span className="truncate">View All Products</span>
              </div>
              <span className="text-[11px] font-mono text-slate-600 px-1.5 py-0.5 rounded bg-slate-100">
                {totalProductsCount}
              </span>
            </button>

            {/* Category Items */}
            {categories.map((cat) => {
              const isSelected = selectedCategorySlug === cat.slug;
              const count = categoryCounts[cat.id] || 0;

              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    onSelectCategory(cat.slug);
                    setIsMobileFiltersOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-md transition-colors text-left ${
                    isSelected
                      ? 'bg-blue-50 text-blue-700 font-semibold border border-blue-200/60'
                      : 'text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    {isSelected ? (
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    ) : (
                      <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
                    )}
                    <span className="truncate">{cat.name}</span>
                  </div>
                  <span
                    className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-blue-100 text-blue-800' : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Free Measurement & Quote Card in Sidebar */}
        <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-lg p-4 border border-blue-800 shadow-sm space-y-3">
          <div className="flex items-center gap-1.5 text-blue-300 text-[11px] font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Factory Direct Fabrication</span>
          </div>
          <h4 className="text-xs font-bold text-white leading-snug">
            Need Custom Dimensions for Your Balcony or Doors?
          </h4>
          <p className="text-[11px] text-slate-300 leading-relaxed">
            Our technician visits your site with aluminium profile color swatches and mesh samples for exact laser measurement.
          </p>
          <a
            href={`tel:${siteConfig.company.phone}`}
            className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-xs font-semibold shadow-xs transition-colors"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span>Call {siteConfig.company.phoneFormatted}</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
