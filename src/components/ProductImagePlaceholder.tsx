import React, { useState } from 'react';
import { Camera, Maximize2 } from 'lucide-react';

interface ProductImagePlaceholderProps {
  categorySlug?: string;
  title: string;
  src?: string;
  alt?: string;
  className?: string;
  aspectRatio?: '4/3' | '16/9' | '1/1' | '4/5' | '3/4' | 'auto';
  fitMode?: 'contain' | 'cover';
  onZoomClick?: () => void;
  showZoomBadge?: boolean;
  priority?: boolean;
}

export const ProductImagePlaceholder: React.FC<ProductImagePlaceholderProps> = ({
  title,
  src,
  alt,
  className = '',
  aspectRatio = '4/3',
  fitMode = 'contain', // Default to contain so doors and tall frames are shown 100% full without cropping
  onZoomClick,
  showZoomBadge = true,
  priority = false
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClass =
    aspectRatio === '4/3'
      ? 'aspect-[4/3]'
      : aspectRatio === '16/9'
      ? 'aspect-[16/9]'
      : aspectRatio === '1/1'
      ? 'aspect-square'
      : aspectRatio === '4/5'
      ? 'aspect-[4/5]'
      : aspectRatio === '3/4'
      ? 'aspect-[3/4]'
      : ''; // auto: takes natural or container height

  const showImg = Boolean(src) && !hasError;

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-b from-slate-100 to-slate-200/80 border border-slate-200/90 group select-none flex items-center justify-center ${aspectClass} ${className}`}
      onClick={onZoomClick}
      role={onZoomClick ? 'button' : undefined}
      tabIndex={onZoomClick ? 0 : undefined}
      onKeyDown={(e) => {
        if (onZoomClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onZoomClick();
        }
      }}
      aria-label={onZoomClick ? `View full uncropped photo for ${title}` : title}
    >
      {/* Real original photo with uncropped containment */}
      {showImg && (
        <img
          src={src}
          alt={alt || title}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={`w-full h-full ${
            fitMode === 'contain' ? 'object-contain p-1' : 'object-cover'
          } transition-all duration-300 group-hover:scale-[1.02] ${
            isLoaded ? 'opacity-100 filter-none' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
        />
      )}

      {/* Verified Real Photo Badge */}
      {showImg && isLoaded && (
        <div className="absolute bottom-2 left-2 z-20 pointer-events-none">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-900/80 text-white backdrop-blur-xs shadow-xs border border-white/20">
            <Camera className="w-3 h-3 text-blue-400 shrink-0" />
            <span>Original Photo</span>
          </span>
        </div>
      )}

      {/* Skeleton / Shimmer during initial loading */}
      {showImg && !isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-slate-100 animate-pulse text-slate-400">
          <Camera className="w-7 h-7 mb-2 text-slate-400" />
          <span className="text-[11px] font-medium text-slate-500">Loading full photo...</span>
        </div>
      )}

      {/* Fallback only if missing / image failed */}
      {!showImg && (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-slate-100 text-slate-600 text-center">
          <Camera className="w-8 h-8 text-slate-400 mb-2" />
          <span className="text-xs font-semibold text-slate-700">{title}</span>
          <span className="text-[10px] text-slate-500 mt-0.5">Original Image</span>
        </div>
      )}

      {/* Interactive Zoom Overlay Badge */}
      {showZoomBadge && onZoomClick && (
        <div className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold text-slate-900 bg-white/95 backdrop-blur-sm rounded-md shadow-sm border border-slate-200">
            <Maximize2 className="w-3.5 h-3.5 text-blue-600" />
            <span>Full View</span>
          </span>
        </div>
      )}
    </div>
  );
};
