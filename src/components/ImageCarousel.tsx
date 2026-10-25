import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, Scan, Frame } from 'lucide-react';
import { ProductImagePlaceholder } from './ProductImagePlaceholder';
import { ImageZoomModal } from './ImageZoomModal';

interface ImageCarouselProps {
  images?: string[];
  primaryImage: string;
  productTitle: string;
  categorySlug?: string;
  className?: string;
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images = [],
  primaryImage,
  productTitle,
  categorySlug = 'mosquito-net-door',
  className = ''
}) => {
  const allImages = images.length > 0 ? images : [primaryImage];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  const [isFullContain, setIsFullContain] = useState(true); // Default to true so images are never cropped

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % allImages.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  return (
    <div className={`relative flex flex-col gap-2 ${className}`}>
      {/* Main active image container - generous height for tall doors */}
      <div className="relative group cursor-pointer rounded-xl overflow-hidden border border-slate-200 bg-slate-950/5">
        <ProductImagePlaceholder
          src={allImages[activeIndex]}
          title={productTitle}
          categorySlug={categorySlug}
          aspectRatio="auto"
          fitMode={isFullContain ? 'contain' : 'cover'}
          className="w-full h-72 sm:h-80 md:h-88 bg-gradient-to-b from-slate-50 to-slate-100"
          onZoomClick={() => setIsZoomOpen(true)}
          showZoomBadge={false}
        />

        {/* Carousel Prev/Next Buttons (only if multiple images) */}
        {allImages.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              aria-label="Previous image"
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/95 text-slate-800 shadow-md border border-slate-200/80 hover:bg-white transition-opacity opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next image"
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/95 text-slate-800 shadow-md border border-slate-200/80 hover:bg-white transition-opacity opacity-0 group-hover:opacity-100 z-10"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Top Controls: View Toggle & Counter */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsFullContain(!isFullContain);
            }}
            title={isFullContain ? 'Fill container' : 'Fit full uncropped photo'}
            className="px-2 py-1 rounded bg-slate-900/80 text-white hover:bg-slate-900 transition-colors text-[11px] font-medium flex items-center gap-1 backdrop-blur-xs border border-white/20 shadow-xs"
          >
            {isFullContain ? <Scan className="w-3 h-3 text-blue-400" /> : <Frame className="w-3 h-3 text-blue-400" />}
            <span className="hidden xs:inline">{isFullContain ? 'Full View' : 'Fill'}</span>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomOpen(true);
            }}
            aria-label="Open high-resolution zoom viewer"
            className="p-1.5 rounded bg-slate-900/80 text-white hover:bg-slate-900 transition-colors text-xs flex items-center gap-1 backdrop-blur-xs border border-white/20 shadow-xs"
          >
            <Maximize2 className="w-3.5 h-3.5 text-blue-400" />
            <span className="text-[11px] font-medium hidden sm:inline">Enlarge</span>
          </button>
        </div>

        {/* Image index indicator if multiple */}
        {allImages.length > 1 && (
          <div className="absolute bottom-2.5 right-2.5 z-10 bg-black/60 backdrop-blur-xs text-white text-[10px] font-mono px-2 py-0.5 rounded-full">
            {activeIndex + 1} / {allImages.length}
          </div>
        )}
      </div>

      {/* Thumbnail Bar (if multiple images) */}
      {allImages.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto py-1 scrollbar-thin">
          {allImages.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`w-16 h-14 rounded-lg border overflow-hidden shrink-0 transition-all bg-slate-100 ${
                activeIndex === idx
                  ? 'border-blue-600 ring-2 ring-blue-500/30 shadow-sm'
                  : 'border-slate-200 opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={img}
                alt={`Thumb ${idx + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain p-0.5"
              />
            </button>
          ))}
        </div>
      )}

      {/* Modal Zoom & Inspection */}
      <ImageZoomModal
        isOpen={isZoomOpen}
        onClose={() => setIsZoomOpen(false)}
        images={allImages}
        initialIndex={activeIndex}
        productTitle={productTitle}
        categorySlug={categorySlug}
      />
    </div>
  );
};
