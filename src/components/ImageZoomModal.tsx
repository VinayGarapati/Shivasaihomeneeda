import React, { useState, useEffect } from 'react';
import { X, ZoomIn, ZoomOut, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductImagePlaceholder } from './ProductImagePlaceholder';

interface ImageZoomModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  initialIndex?: number;
  productTitle: string;
  categorySlug?: string;
}

export const ImageZoomModal: React.FC<ImageZoomModalProps> = ({
  isOpen,
  onClose,
  images,
  initialIndex = 0,
  productTitle,
  categorySlug = 'mosquito-net-door'
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setZoomLevel(1);
  }, [initialIndex, isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight' && images.length > 1) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setZoomLevel(1);
      } else if (e.key === 'ArrowLeft' && images.length > 1) {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setZoomLevel(1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, images.length, onClose]);

  if (!isOpen) return null;

  const currentImage = images[currentIndex] || '';

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.5, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.5, 1));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="zoom-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
    >
      <div className="relative w-full max-w-5xl h-[85vh] bg-slate-950 rounded-xl overflow-hidden border border-slate-800 flex flex-col shadow-2xl">
        {/* Top bar with title and controls */}
        <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800 text-white">
          <div className="flex items-center gap-3 min-w-0">
            <span id="zoom-modal-title" className="text-sm font-semibold truncate text-slate-100">
              {productTitle}
            </span>
            {images.length > 1 && (
              <span className="text-xs text-slate-400 shrink-0">
                Photo {currentIndex + 1} of {images.length}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-800 rounded-lg p-1 border border-slate-700">
              <button
                onClick={handleZoomOut}
                disabled={zoomLevel <= 1}
                aria-label="Zoom Out"
                className="p-1.5 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed rounded"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono px-2 text-slate-300">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button
                onClick={handleZoomIn}
                disabled={zoomLevel >= 2.5}
                aria-label="Zoom In"
                className="p-1.5 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed rounded"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                aria-label="Reset Zoom"
                title="Reset Zoom"
                className="p-1.5 text-slate-300 hover:text-white rounded ml-1"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Image viewport */}
        <div className="relative flex-1 flex items-center justify-center p-4 overflow-auto bg-slate-900/50">
          <div
            className="transition-transform duration-200 ease-out origin-center max-w-full max-h-full flex items-center justify-center"
            style={{ transform: `scale(${zoomLevel})` }}
          >
            <ProductImagePlaceholder
              src={currentImage}
              title={`${productTitle} - View ${currentIndex + 1}`}
              categorySlug={categorySlug}
              aspectRatio="auto"
              fitMode="contain"
              showZoomBadge={false}
              className="w-full max-w-4xl h-[70vh] bg-transparent rounded-lg shadow-2xl"
            />
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={() => {
                  setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
                  setZoomLevel(1);
                }}
                aria-label="Previous photo"
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-colors shadow-lg"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  setCurrentIndex((prev) => (prev + 1) % images.length);
                  setZoomLevel(1);
                }}
                aria-label="Next photo"
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-slate-700 transition-colors shadow-lg"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail strip if multiple photos */}
        {images.length > 1 && (
          <div className="px-4 py-3 bg-slate-900 border-t border-slate-800 flex items-center justify-center gap-2 overflow-x-auto">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setZoomLevel(1);
                }}
                className={`w-16 h-12 rounded border-2 overflow-hidden transition-all shrink-0 ${
                  currentIndex === idx
                    ? 'border-blue-500 ring-2 ring-blue-500/30'
                    : 'border-slate-700 opacity-60 hover:opacity-100'
                }`}
              >
                <ProductImagePlaceholder
                  src={img}
                  title={`Thumbnail ${idx + 1}`}
                  categorySlug={categorySlug}
                  aspectRatio="auto"
                  showZoomBadge={false}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
