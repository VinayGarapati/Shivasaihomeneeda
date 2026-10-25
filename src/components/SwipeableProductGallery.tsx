import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Sparkles, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProductItem } from '../types/product';
import { siteConfig } from '../data/siteConfig';

interface SwipeableProductGalleryProps {
  products: ProductItem[];
  title?: string;
  subtitle?: string;
  onOpenQuote: (productName: string) => void;
}

export const SwipeableProductGallery: React.FC<SwipeableProductGalleryProps> = ({
  products,
  title = 'Signature Mosquito Net & Screen Solutions',
  subtitle = 'Swipe left/right on mobile or use arrow buttons on desktop to explore our custom systems.',
  onOpenQuote
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    // Calculate active slide index
    const cardWidth = 320;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), products.length - 1));
  };

  useEffect(() => {
    checkScroll();
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll, { passive: true });
      return () => container.removeEventListener('scroll', checkScroll);
    }
  }, [products]);

  const handleScroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = 340;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const scrollToIndex = (index: number) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 336; // 320 card + 16 gap
    scrollContainerRef.current.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
  };

  return (
    <div className="space-y-5">
      {/* Header and Desktop Scroll Buttons */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#004AAD] text-xs font-bold border border-blue-100 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Product Gallery</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
            {subtitle}
          </p>
        </div>

        {/* Windows / Desktop Navigation Scroll Buttons */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-400 mr-2 hidden sm:inline">
            Scroll Gallery:
          </span>
          <button
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            aria-label="Scroll gallery left"
            className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
              canScrollLeft
                ? 'bg-white hover:bg-blue-50 text-[#004AAD] border-slate-300 shadow-xs hover-lift'
                : 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            aria-label="Scroll gallery right"
            className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all ${
              canScrollRight
                ? 'bg-white hover:bg-blue-50 text-[#004AAD] border-slate-300 shadow-xs hover-lift'
                : 'bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed'
            }`}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Swipeable Container (Touch-swipe enabled on mobile, smooth scroll on Windows) */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory touch-pan-x scroll-smooth no-scrollbar py-2 -mx-4 px-4 sm:mx-0 sm:px-0"
      >
        {products.map((p, idx) => (
          <div
            key={p.id}
            className="w-[285px] xs:w-[320px] shrink-0 snap-start bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover-lift flex flex-col justify-between group transition-all"
          >
            <div>
              {/* Product Image with Hover Zoom */}
              <div className="relative aspect-4/3 bg-slate-100 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2.5 left-2.5">
                  <span className="px-2.5 py-1 bg-white/95 backdrop-blur-xs text-[#004AAD] text-[10px] font-extrabold uppercase tracking-wider rounded-md shadow-xs border border-slate-100">
                    {p.categoryName}
                  </span>
                </div>
                <div className="absolute bottom-2.5 right-2.5">
                  <span className="px-2.5 py-1 bg-[#004AAD] text-white text-xs font-bold rounded-lg shadow-md">
                    ₹{p.price} <span className="text-[10px] font-normal">{p.priceUnit}</span>
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-4 space-y-2">
                <Link to={`/products/${p.slug}`}>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#004AAD] transition-colors line-clamp-1">
                    {p.name}
                  </h3>
                </Link>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {p.shortDescription}
                </p>

                {/* Quick Inquiry Button directly next to description */}
                <div className="pt-1">
                  <a
                    href={`https://wa.me/${siteConfig.company.whatsappNumber}?text=${encodeURIComponent(
                      `Hi Shiva Sai Home Needs! I would like to make a Quick Inquiry about "${p.name}". Please share price details and schedule a free doorstep measurement.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 px-3 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white rounded-lg text-xs font-bold shadow-2xs hover-lift transition-all"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Quick Inquiry on WhatsApp</span>
                  </a>
                </div>

                {/* Spec Snippet */}
                <div className="pt-2 border-t border-slate-100 text-[11px] text-slate-500 space-y-1">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF] shrink-0" />
                    <span className="truncate"><strong>Mesh:</strong> {p.specifications.netType}</span>
                  </div>
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F58220] shrink-0" />
                    <span className="truncate"><strong>Frame:</strong> {p.specifications.frameMaterial}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="p-4 pt-0 flex gap-2">
              <Link
                to={`/products/${p.slug}`}
                className="flex-1 py-2 px-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl text-center transition-colors"
              >
                View Specs
              </Link>
              <button
                onClick={() => onOpenQuote(p.name)}
                className="py-2 px-3 bg-[#004AAD] hover:bg-blue-800 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
              >
                Get Quote
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Swipe Indicators / Pagination Dots */}
      <div className="flex items-center justify-center gap-1.5 pt-2">
        {products.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              activeIndex === idx
                ? 'w-6 bg-[#004AAD]'
                : 'w-1.5 bg-slate-200 hover:bg-slate-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
