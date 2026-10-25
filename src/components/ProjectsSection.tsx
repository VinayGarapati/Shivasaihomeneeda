import React, { useState } from 'react';
import { 
  MapPin, 
  ShieldCheck, 
  ExternalLink, 
  Maximize2, 
  MessageSquare, 
  Star, 
  CheckCircle2, 
  Camera, 
  Layers,
  ArrowRight,
  Filter
} from 'lucide-react';
import { projects, projectsCategories, googleProfileShareUrl } from '../data/projects';
import { ProjectItem } from '../types/product';
import { ImageZoomModal } from './ImageZoomModal';
import { EnquiryModal } from './EnquiryModal';

interface ProjectsSectionProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  showFilters?: boolean;
  showViewAllLink?: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  title = 'Real Installation Projects & Workmanship',
  subtitle = 'Original on-site photographs from our customer installations across Hyderabad, Vijayawada, and surrounding regions sourced from our verified Google Business Profile.',
  limit,
  showFilters = true,
  showViewAllLink = false
}) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedZoomPhoto, setSelectedZoomPhoto] = useState<{ url: string; title: string } | null>(null);
  const [enquiryProject, setEnquiryProject] = useState<ProjectItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.categorySlug === activeCategory;
  });

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  const handleOpenQuote = (project: ProjectItem) => {
    setEnquiryProject(project);
    setIsModalOpen(true);
  };

  return (
    <section className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-8">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold border border-blue-200">
              <Camera className="w-3.5 h-3.5 text-blue-700" />
              <span>100% Real Site Photos & No Artificial Art</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {title}
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Verified Google Business Link Card */}
          <div className="shrink-0 bg-white rounded-xl border border-slate-200 p-4 shadow-xs flex items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-amber-500 text-xs font-bold">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-slate-800 ml-1">5.0 Star Rated</span>
              </div>
              <p className="text-xs font-semibold text-slate-900">
                Shiva Sai Home Needs on Google
              </p>
              <p className="text-[11px] text-slate-500">
                Verified Customer Reviews & Photos
              </p>
            </div>
            <a
              href={googleProfileShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 rounded-lg text-xs font-semibold transition-colors"
            >
              <span>View Google Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Filter Category Tabs (if enabled) */}
        {showFilters && (
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-200">
            <span className="text-xs font-semibold text-slate-600 flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5 text-slate-600" />
              Filter:
            </span>
            {projectsCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((proj) => (
            <article
              key={proj.id}
              className="bg-white rounded-xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow flex flex-col overflow-hidden group"
            >
              {/* Photo Viewport with Uncropped Full Display & Zoom Trigger */}
              <div
                className="relative h-72 sm:h-80 w-full bg-slate-950 overflow-hidden cursor-pointer flex items-center justify-center p-1.5"
                onClick={() => setSelectedZoomPhoto({ url: proj.image, title: proj.title })}
              >
                <img
                  src={proj.image}
                  alt={proj.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />

                {/* Badges Overlay */}
                <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1.5 z-10">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/85 text-white backdrop-blur-xs border border-white/20">
                    {proj.category}
                  </span>
                  {proj.badge && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white shadow-xs">
                      {proj.badge}
                    </span>
                  )}
                </div>

                <div className="absolute top-2.5 right-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="inline-flex items-center gap-1 px-2 py-1 bg-white/95 text-slate-900 rounded-md text-xs font-semibold shadow-xs">
                    <Maximize2 className="w-3.5 h-3.5 text-blue-600" />
                    <span>Zoom</span>
                  </span>
                </div>

                {/* Location indicator at bottom of photo */}
                <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[11px] font-medium z-10 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded">
                  <span className="flex items-center gap-1 truncate">
                    <MapPin className="w-3 h-3 text-red-400 shrink-0" />
                    {proj.location}
                  </span>
                  <span className="text-[10px] text-slate-300 shrink-0">
                    {proj.specifications.dimensions || 'Custom Size'}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {proj.description}
                  </p>

                  {/* Highlights Bullet List */}
                  {proj.highlights && proj.highlights.length > 0 && (
                    <div className="pt-1 space-y-1">
                      {proj.highlights.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Customer feedback quotation */}
                  {proj.clientReview && (
                    <div className="mt-2.5 p-2 bg-slate-50 border border-slate-100 rounded-lg text-xs italic text-slate-600">
                      "{proj.clientReview.comment}"
                      <span className="block font-semibold text-slate-800 not-italic text-[11px] mt-0.5">
                        — {proj.clientReview.author}
                      </span>
                    </div>
                  )}
                </div>

                {/* Specifications Bar & Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div className="text-[11px] text-slate-500">
                    <span className="block font-semibold text-slate-800">
                      {proj.specifications.frameMaterial?.split(' ')[0] || 'Aluminium'}
                    </span>
                    <span>{proj.specifications.systemType?.split(' ')[0] || 'Custom'}</span>
                  </div>

                  <button
                    onClick={() => handleOpenQuote(proj)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors shrink-0"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Get Quote</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Optional View All Button */}
        {showViewAllLink && (
          <div className="pt-4 text-center">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs sm:text-sm font-semibold shadow-xs transition-colors"
            >
              <span>Explore All 17+ Completed Site Installations</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        )}

      </div>

      {/* High-Resolution Zoom Modal */}
      {selectedZoomPhoto && (
        <ImageZoomModal
          isOpen={Boolean(selectedZoomPhoto)}
          onClose={() => setSelectedZoomPhoto(null)}
          images={[selectedZoomPhoto.url]}
          productTitle={selectedZoomPhoto.title}
        />
      )}

      {/* Direct WhatsApp Quote Modal */}
      {enquiryProject && (
        <EnquiryModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setEnquiryProject(null);
          }}
          productName={`Installation similar to ${enquiryProject.title} (${enquiryProject.location})`}
          defaultEnquiryType="quote"
        />
      )}
    </section>
  );
};
