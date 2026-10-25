import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  X, 
  RotateCcw, 
  MessageSquare, 
  AlertCircle, 
  Loader2, 
  CheckCircle2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { VideoItem } from '../types/product';
import { siteConfig } from '../data/siteConfig';

interface VideoGalleryProps {
  videos?: VideoItem[];
  className?: string;
  title?: string;
  subtitle?: string;
}

export const VideoGallery: React.FC<VideoGalleryProps> = ({ 
  videos = [], 
  className = '',
  title = 'Product Action & Smooth Sliding Operations',
  subtitle = 'Watch how effortlessly our pleated and sliding mosquito mesh systems glide in real residential installations.'
}) => {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true); // Start muted to guarantee browser autoplay works
  const [isBuffering, setIsBuffering] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  // If no videos, don't render empty section
  if (!videos || videos.length === 0) {
    return null;
  }

  // Filter video categories
  const videoCategories = [
    { id: 'all', label: 'All Demonstration Videos' },
    { id: 'sliding', label: 'Sliding Doors & Windows' },
    { id: 'pleated', label: 'Pleated Accordion Nets' },
    { id: 'hinged', label: 'Hinged Openable Doors' },
    { id: 'cloth-hanger', label: 'Balcony Ceiling Hangers' }
  ];

  const filteredVideos = videos.filter((vid) => {
    if (selectedTag === 'all') return true;
    const titleLower = vid.title.toLowerCase();
    const descLower = (vid.description || '').toLowerCase();
    if (selectedTag === 'sliding') {
      return titleLower.includes('sliding') || descLower.includes('sliding');
    }
    if (selectedTag === 'pleated') {
      return titleLower.includes('pleated') || descLower.includes('pleated');
    }
    if (selectedTag === 'hinged') {
      return titleLower.includes('hinged') || titleLower.includes('double') || descLower.includes('hinged') || descLower.includes('leaf');
    }
    if (selectedTag === 'cloth-hanger') {
      return titleLower.includes('hanger') || titleLower.includes('cloth') || descLower.includes('pulley');
    }
    return true;
  });

  const handleOpenVideo = (vid: VideoItem) => {
    setActiveVideo(vid);
    setHasError(false);
    setIsBuffering(true);
    setIsPlaying(false);
    setIsMuted(true); // muted ensures autoplay is never rejected by browser security
    setPlaybackSpeed(1);
    setCurrentTime(0);
  };

  const handleCloseModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setActiveVideo(null);
    setHasError(false);
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Fallback: try muted
        if (videoRef.current) {
          videoRef.current.muted = true;
          setIsMuted(true);
          videoRef.current.play().catch(() => {});
        }
      });
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const newMuted = !videoRef.current.muted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  const cycleSpeed = () => {
    if (!videoRef.current) return;
    const speeds = [1, 1.25, 1.5, 0.75];
    const nextIdx = (speeds.indexOf(playbackSpeed) + 1) % speeds.length;
    const nextSpeed = speeds[nextIdx];
    videoRef.current.playbackRate = nextSpeed;
    setPlaybackSpeed(nextSpeed);
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  const formatSeconds = (sec: number) => {
    if (isNaN(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <section className={`bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs ${className}`}>
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold border border-blue-200/60 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Action Video Proof</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        </div>

        <a
          href="https://wa.me/917337308486?text=Hi%20Shiva%20Sai%20Home%20Needs%2C%20please%20share%20all%20latest%20mosquito%20net%20installation%20video%20clips."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 rounded-lg text-xs font-semibold shrink-0 transition-colors"
        >
          <MessageSquare className="w-4 h-4 text-emerald-600" />
          <span>Request Videos on WhatsApp</span>
        </a>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-3 mb-5 text-xs scrollbar-none">
        {videoCategories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedTag(cat.id)}
            className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-colors shrink-0 ${
              selectedTag === cat.id
                ? 'bg-blue-600 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredVideos.map((vid) => (
          <div
            key={vid.id}
            className="group relative rounded-xl overflow-hidden border border-slate-200 bg-slate-950 cursor-pointer shadow-xs hover:shadow-md transition-all hover:border-blue-400 flex flex-col"
            onClick={() => handleOpenVideo(vid)}
          >
            {/* Thumbnail Box */}
            <div className="relative aspect-video sm:aspect-[16/10] bg-slate-900 overflow-hidden">
              <img
                src={vid.thumbnailUrl}
                alt={vid.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-blue-600 transition-all">
                  <Play className="w-5 h-5 ml-0.5 fill-white" />
                </div>
              </div>

              {/* Duration Badge */}
              {vid.duration && (
                <div className="absolute top-2.5 right-2.5 px-2 py-0.5 bg-black/80 backdrop-blur-xs text-white text-[10px] font-mono font-semibold rounded">
                  {vid.duration}
                </div>
              )}

              <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-blue-600/90 text-white text-[10px] font-semibold rounded uppercase tracking-wider">
                HD Video
              </div>
            </div>

            {/* Video Meta Info */}
            <div className="p-3.5 bg-white flex-1 flex flex-col justify-between border-t border-slate-100">
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {vid.title}
                </h4>
                {vid.description && (
                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {vid.description}
                  </p>
                )}
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-blue-600 font-semibold">
                <span className="flex items-center gap-1 group-hover:underline">
                  <Play className="w-3 h-3 fill-blue-600" />
                  <span>Click to Watch Demo</span>
                </span>
                <span className="text-slate-400 font-normal">Sound Available</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Player with Advanced Fallback & Error Resilience */}
      {activeVideo && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-4 backdrop-blur-xs"
          onClick={handleCloseModal}
        >
          <div
            className="relative w-full max-w-2xl bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Modal Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-900 text-white border-b border-slate-800">
              <div className="min-w-0 pr-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-400 block">
                  Installation Demonstration
                </span>
                <h4 className="text-xs sm:text-sm font-semibold truncate text-white">
                  {activeVideo.title}
                </h4>
              </div>

              <button
                onClick={handleCloseModal}
                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors shrink-0"
                aria-label="Close video player"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Viewport Area (Adapts to portrait and landscape) */}
            <div className="relative bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[420px] max-h-[65vh]">
              {/* Buffering Spinner */}
              {isBuffering && !hasError && (
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 text-white pointer-events-none">
                  <Loader2 className="w-8 h-8 animate-spin text-blue-400 mb-2" />
                  <span className="text-xs font-medium">Loading high-definition video...</span>
                </div>
              )}

              {/* Error Fallback */}
              {hasError ? (
                <div className="p-8 text-center text-white max-w-md space-y-4">
                  <AlertCircle className="w-12 h-12 text-amber-400 mx-auto" />
                  <div>
                    <h5 className="text-base font-bold text-white">Video Stream Notice</h5>
                    <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                      Your current browser or network is preventing direct inline playback. You can open the raw clip directly or get this video sent immediately to your phone on WhatsApp.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={activeVideo.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold rounded-lg inline-flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Open Direct Video</span>
                    </a>

                    <a
                      href={`https://wa.me/917337308486?text=${encodeURIComponent(
                        `Hi Shiva Sai Home Needs, please share video demonstration for "${activeVideo.title}".`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-lg inline-flex items-center gap-1.5"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Request on WhatsApp</span>
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <video
                    ref={videoRef}
                    src={activeVideo.videoUrl}
                    poster={activeVideo.thumbnailUrl}
                    playsInline
                    preload="metadata"
                    muted={isMuted}
                    autoPlay
                    onLoadStart={() => setIsBuffering(true)}
                    onWaiting={() => setIsBuffering(true)}
                    onCanPlay={() => {
                      setIsBuffering(false);
                      if (videoRef.current) {
                        videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {
                          setIsPlaying(false);
                        });
                      }
                    }}
                    onPlaying={() => {
                      setIsBuffering(false);
                      setIsPlaying(true);
                    }}
                    onPause={() => setIsPlaying(false)}
                    onTimeUpdate={() => {
                      if (videoRef.current) {
                        setCurrentTime(videoRef.current.currentTime);
                        setDuration(videoRef.current.duration || 0);
                      }
                    }}
                    onEnded={() => setIsPlaying(false)}
                    onError={() => {
                      setIsBuffering(false);
                      setHasError(true);
                    }}
                    className="w-full h-full max-h-[65vh] object-contain cursor-pointer"
                    onClick={togglePlay}
                  />

                  {/* Big Play Overlay when paused */}
                  {!isPlaying && !isBuffering && (
                    <button
                      onClick={togglePlay}
                      className="absolute inset-0 flex items-center justify-center bg-black/35 hover:bg-black/20 transition-colors"
                      aria-label="Play video"
                    >
                      <div className="w-16 h-16 rounded-full bg-blue-600/90 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                        <Play className="w-7 h-7 ml-1 fill-white" />
                      </div>
                    </button>
                  )}
                </>
              )}
            </div>

            {/* Custom Control Bar */}
            {!hasError && (
              <div className="p-3 bg-slate-900 border-t border-slate-800 text-white space-y-2">
                {/* Progress bar */}
                <div 
                  className="w-full h-1.5 bg-slate-800 rounded-full cursor-pointer relative overflow-hidden"
                  onClick={(e) => {
                    if (!videoRef.current || !duration) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    const clickRatio = (e.clientX - rect.left) / rect.width;
                    videoRef.current.currentTime = clickRatio * duration;
                  }}
                >
                  <div 
                    className="h-full bg-blue-500 rounded-full transition-all duration-100"
                    style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  {/* Left Controls: Play, Restart, Time */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={togglePlay}
                      className="p-1.5 rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                      title={isPlaying ? 'Pause' : 'Play'}
                    >
                      {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                    </button>

                    <button
                      onClick={handleRestart}
                      className="p-1.5 rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                      title="Replay from start"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>

                    <div className="font-mono text-[11px] text-slate-400">
                      <span>{formatSeconds(currentTime)}</span>
                      <span> / </span>
                      <span>{formatSeconds(duration || 0)}</span>
                    </div>
                  </div>

                  {/* Right Controls: Sound, Speed, Fullscreen, WhatsApp */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={toggleMute}
                      className="p-1.5 rounded hover:bg-slate-800 text-slate-300 hover:text-white flex items-center gap-1 transition-colors"
                      title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                    >
                      {isMuted ? (
                        <>
                          <VolumeX className="w-4 h-4 text-amber-400" />
                          <span className="text-[10px] text-amber-400 font-medium hidden xs:inline">Unmute</span>
                        </>
                      ) : (
                        <Volume2 className="w-4 h-4 text-emerald-400" />
                      )}
                    </button>

                    <button
                      onClick={cycleSpeed}
                      className="px-2 py-0.5 rounded bg-slate-800 hover:bg-slate-700 text-[11px] font-mono text-slate-300 hover:text-white"
                      title="Change Playback Speed"
                    >
                      {playbackSpeed}x
                    </button>

                    <button
                      onClick={handleFullscreen}
                      className="p-1.5 rounded hover:bg-slate-800 text-slate-300 hover:text-white transition-colors"
                      title="Fullscreen"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>

                    <a
                      href={`https://wa.me/917337308486?text=${encodeURIComponent(
                        `Hi Shiva Sai Home Needs, please share the full video clip for: "${activeVideo.title}".`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[11px] font-semibold transition-colors"
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>Get on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
