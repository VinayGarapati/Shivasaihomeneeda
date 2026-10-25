import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, PhoneCall, ChevronDown, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Product } from '../types/product';
import { siteConfig } from '../data/siteConfig';
import { ImageCarousel } from './ImageCarousel';
import { ProductSpecifications } from './ProductSpecifications';

interface ProductCardProps {
  product: Product;
  onOpenQuote: (product: Product) => void;
  onOpenCallback: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onOpenQuote,
  onOpenCallback
}) => {
  const [showFullSpecs, setShowFullSpecs] = useState(false);

  return (
    <article className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-sm transition-all overflow-hidden flex flex-col">
      {/* Top Banner / Category strip */}
      <div className="px-4 py-2 bg-slate-50 border-b border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
        <span className="font-semibold text-blue-700 tracking-wide uppercase">
          {product.categoryName}
        </span>
        <span className="flex items-center gap-1 text-slate-600">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
          On-Site Installation
        </span>
      </div>

      <div className="p-4 sm:p-5 flex-1 flex flex-col md:flex-row gap-5">
        {/* Left: Image Carousel & Zoom Gallery (Uncropped full view) */}
        <div className="w-full md:w-72 lg:w-80 shrink-0">
          <ImageCarousel
            images={product.images}
            primaryImage={product.image}
            productTitle={product.name}
            categorySlug={product.categoryId}
          />
        </div>

        {/* Right: Product Details, Price & Specs */}
        <div className="flex-1 flex flex-col justify-between space-y-3">
          <div>
            {/* Title & Price Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 hover:text-blue-700 transition-colors">
                  <Link to={`/products/${product.slug}`}>
                    {product.name}
                  </Link>
                </h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  {product.shortDescription}
                </p>

                {/* Quick Inquiry Button directly next to description */}
                <div className="mt-2.5 flex flex-wrap items-center gap-2">
                  <a
                    href={`https://wa.me/${siteConfig.company.whatsappNumber}?text=${encodeURIComponent(
                      `Hi Shiva Sai Home Needs! I would like to make a Quick Inquiry about "${product.name}". Please share price details and schedule a free doorstep measurement.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white rounded-lg text-xs font-bold shadow-xs hover-lift transition-all"
                    title={`Quick WhatsApp Inquiry for ${product.name}`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Quick Inquiry</span>
                  </a>
                  <span className="text-[11px] text-slate-400 font-medium">Instant WhatsApp response</span>
                </div>
              </div>

              {/* Verified Price or Price on Request */}
              <div className="shrink-0 text-left sm:text-right mt-1 sm:mt-0">
                {product.price && !product.isPriceOnRequest ? (
                  <div>
                    <span className="text-xs text-slate-500 font-medium block">Approx Price</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-lg font-black text-slate-900 font-mono">
                        ₹{product.price}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {product.priceUnit || '₹/sq ft'}
                      </span>
                    </div>
                  </div>
                ) : (
                  <span className="inline-block px-2.5 py-1 text-xs font-semibold text-blue-800 bg-blue-50 rounded border border-blue-200">
                    Price on Request
                  </span>
                )}
              </div>
            </div>

            {/* Key feature bullet points */}
            {product.features && product.features.length > 0 && (
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {product.features.slice(0, 4).map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{feat}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Compact or Full Technical Specifications */}
          <div className="pt-2">
            <ProductSpecifications
              specifications={product.specifications}
              isCompact={!showFullSpecs}
            />

            {/* Toggle Full Specifications */}
            <button
              onClick={() => setShowFullSpecs(!showFullSpecs)}
              className="mt-2 text-xs font-semibold text-blue-600 hover:text-blue-800 inline-flex items-center gap-1 transition-colors"
            >
              <span>{showFullSpecs ? 'Collapse Specifications' : 'View Full Technical Specifications'}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform ${showFullSpecs ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* Action Buttons Row */}
          <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5">
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => onOpenQuote(product)}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Get Best Quote</span>
              </button>

              <button
                onClick={() => onOpenCallback(product)}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-slate-600" />
                <span>Request Callback</span>
              </button>
            </div>

            <Link
              to={`/products/${product.slug}`}
              className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-blue-700 transition-colors py-1.5 px-2"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
