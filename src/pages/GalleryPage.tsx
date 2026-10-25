import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductImagePlaceholder } from '../components/ProductImagePlaceholder';
import { ImageZoomModal } from '../components/ImageZoomModal';
import { EnquiryModal } from '../components/EnquiryModal';
import { 
  MessageSquare, 
  Maximize2, 
  MapPin, 
  Camera, 
  ExternalLink, 
  Star, 
  CheckCircle2, 
  Filter,
  ShieldCheck,
  Video
} from 'lucide-react';
import { projects, projectsCategories, googleProfileShareUrl } from '../data/projects';
import { sampleVideos } from '../data/products';
import { VideoGallery } from '../components/VideoGallery';
import { QuickContactBanner } from '../components/QuickContactBanner';
import { ProjectItem } from '../types/product';

export const GalleryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'projects' | 'all-photos' | 'videos'>('projects');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<{
    url: string;
    title: string;
    categorySlug?: string;
  } | null>(null);
  const [enquiryProjectName, setEnquiryProjectName] = useState<string>('Custom Mosquito Screen Installation');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Projects & Gallery', path: '/projects' }
  ];

  // Filtered projects
  const filteredProjects = projects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.categorySlug === activeCategory;
  });

  // Flat list of all 28 real on-site photos from projects and workshop uploads
  const allRealPhotos = [
    { url: '/assets/aistudio/IMG-20261024-WA0010_ecfb542d.jpg', title: 'Brown Aluminium Mosquito Door Installation with Master Installer', tag: 'Mosquito Door' },
    { url: '/assets/aistudio/IMG-20261024-WA0011_a53349ea.jpg', title: 'Teak Wood-Grain Finish Hinged Mosquito Screen Door', tag: 'Mosquito Door' },
    { url: '/assets/aistudio/IMG-20261024-WA0012_4f593d74.jpg', title: '4-Panel Sliding Balcony Mosquito Mesh Partition', tag: 'Balcony Sliding' },
    { url: '/assets/aistudio/IMG-20261024-WA0013_b0b45482.jpg', title: 'Heavy Hinged Door with Protective Grooved Kick-Plate', tag: 'Mosquito Door' },
    { url: '/assets/aistudio/IMG-20261024-WA0014_1ccc08a0.jpg', title: 'Exterior Window Box Grills with Insect Mesh (Elevation View)', tag: 'Safety Grills' },
    { url: '/assets/aistudio/IMG-20261024-WA0015_0642790e.jpg', title: 'French Style Double Leaf Openable Mosquito Net Door', tag: 'Mosquito Door' },
    { url: '/assets/aistudio/IMG-20261024-WA0016_c917c26d.jpg', title: 'White Architectural Sliding Window with Top Glass Transom', tag: 'Window Screen' },
    { url: '/assets/aistudio/IMG-20261024-WA0017_dbde43d0.jpg', title: 'Exterior Window Safety Grills with Rain Canopy & Mesh', tag: 'Safety Grills' },
    { url: '/assets/aistudio/IMG-20261024-WA0018_96552f95.jpg', title: 'Steel Security Grill Door with Integrated SS 304 Mesh', tag: 'Safety Grills' },
    { url: '/assets/aistudio/IMG-20261024-WA0019_91cba12a.jpg', title: 'Full Balcony Diamond Mesh Safety Grill & Insect Enclosure', tag: 'Safety Grills' },
    { url: '/assets/aistudio/IMG-20261024-WA0020_86be2107.jpg', title: 'Brown Openable Single Door Mosquito Mesh Frame', tag: 'Mosquito Door' },
    { url: '/assets/aistudio/IMG-20261024-WA0021_4bccf820.jpg', title: 'Double Leaf Door Screen with Reinforced Corner Brackets', tag: 'Mosquito Door' },
    { url: '/assets/aistudio/IMG-20261024-WA0022_6f5f5714.jpg', title: '6-Pipe Stainless Steel Balcony Ceiling Cloth Hanger Pulley', tag: 'Ceiling Cloth Hangers' },
    { url: '/assets/aistudio/IMG-20261024-WA0023_aa6b8f90.jpg', title: 'Custom Window Insect Screen Shutter with Factory Protective Tape', tag: 'Window Screen' },
    { url: '/assets/aistudio/IMG-20261024-WA0024_24c54d60.jpg', title: 'Balcony Openable Net Door Verification by Senior Technician', tag: 'Mosquito Door' },
    { url: '/assets/aistudio/IMG-20261024-WA0025_195e1b7c.jpg', title: 'Fixed Window and Utility Duct Screen Frame Installation', tag: 'Ventilator' },
    { url: '/assets/aistudio/IMG-20261024-WA0026_eab95c8f.jpg', title: 'Exterior Wall Exhaust Fan Duct Pest Barrier Screen', tag: 'Ventilator' },
    { url: '/assets/aistudio/IMG-20261024-WA0027_c11c4fea.jpg', title: '2-Panel Hinged Wooden Casement Window Mosquito Screens', tag: 'Window Screen' },
    { url: '/assets/aistudio/IMG-20261024-WA0028_5f769a22.jpg', title: 'Technician Demonstrating Wall Cleat for Balcony Cloth Hanger', tag: 'Ceiling Cloth Hangers' },
    { url: '/assets/aistudio/IMG-20261024-WA0029_c3d3b00f.jpg', title: 'Multi-Panel Balcony Sliding Mosquito Mesh Partition System', tag: 'Balcony Sliding' },
    { url: '/assets/aistudio/IMG-20261024-WA0030_876ea08b.jpg', title: '3-Panel Openable Screens over Arched Heritage Window Grills', tag: 'Window Screen' },
    { url: '/assets/aistudio/IMG-20261024-WA0031_24cba99a.jpg', title: 'Living Room Entrance Heavy-Duty Mosquito Net Door', tag: 'Mosquito Door' },
    { url: '/assets/aistudio/IMG-20261024-WA0032_fa1d6d56.jpg', title: 'Balcony Ceiling Clothes Pulley Line Adjustment & Handover', tag: 'Ceiling Cloth Hangers' },
    { url: '/assets/aistudio/IMG-20261024-WA0033_a31cc30c.jpg', title: 'Full 3-Section Bay Window Insect Screen Fitting', tag: 'Window Screen' },
    { url: '/assets/aistudio/IMG-20261024-WA0034_f4147787.jpg', title: 'UPVC Sliding Window 3rd-Track Insect Mesh Shutter', tag: 'Window Screen' }
  ];

  const handleOpenQuoteModal = (name: string) => {
    setEnquiryProjectName(name);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white min-h-screen pb-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-6">
        <Breadcrumbs items={breadcrumbs} />

        {/* Main Header Container */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold border border-blue-200">
                <Camera className="w-3.5 h-3.5 text-blue-700" />
                <span>Original Photos from Google Business Profile</span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Projects & Real Installation Showcase
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Browse authentic on-site photos of our custom mosquito net doors, sliding balcony systems, window screens, and ceiling cloth drying hangers installed across Hyderabad, Vijayawada, and surrounding regions.
              </p>
            </div>

            {/* Google Profile Badge Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between gap-4 shrink-0">
              <div>
                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-slate-800 ml-1">5.0 Star Rated</span>
                </div>
                <p className="text-xs font-bold text-slate-900 mt-1">shivasaihomeneeds</p>
                <p className="text-[11px] text-slate-500">Verified On-Site Work & Reviews</p>
              </div>

              <a
                href={googleProfileShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors shrink-0"
              >
                <span>Google Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* View Mode Switcher: Case Study Projects vs All Real Photos */}
          <div className="flex items-center justify-between border-y border-slate-200 py-3 gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveTab('projects')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === 'projects'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                Detailed Project Case Studies ({projects.length})
              </button>
              <button
                onClick={() => setActiveTab('all-photos')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === 'all-photos'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                All Original Photo Gallery ({allRealPhotos.length})
              </button>
              <button
                onClick={() => setActiveTab('videos')}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 ${
                  activeTab === 'videos'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>Action Videos ({sampleVideos.length})</span>
              </button>
            </div>

            <button
              onClick={() => handleOpenQuoteModal('General Free Site Measurement')}
              className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors shrink-0"
            >
              <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
              <span>Book Free Site Measurement</span>
            </button>
          </div>

          {/* Category Filter Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-semibold text-slate-600 flex items-center gap-1 shrink-0 mr-1">
              <Filter className="w-3.5 h-3.5 text-slate-600" />
              Category:
            </span>
            {projectsCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* TAB 1: Detailed Projects View */}
          {activeTab === 'projects' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
              {filteredProjects.map((proj) => (
                <article
                  key={proj.id}
                  className="bg-white rounded-xl border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col overflow-hidden group"
                >
                  <div
                    className="relative h-72 sm:h-80 w-full bg-slate-950 overflow-hidden cursor-pointer flex items-center justify-center p-1.5"
                    onClick={() => setSelectedPhoto({ url: proj.image, title: proj.title })}
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />

                    {/* Badges */}
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

                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-white text-[11px] font-medium z-10 bg-black/60 backdrop-blur-xs px-2.5 py-1 rounded">
                      <span className="flex items-center gap-1 truncate">
                        <MapPin className="w-3 h-3 text-red-400 shrink-0" />
                        {proj.location}
                      </span>
                      <span className="text-[10px] text-slate-300 shrink-0">
                        {proj.specifications.dimensions}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                        {proj.description}
                      </p>

                      {proj.highlights && (
                        <div className="pt-1 space-y-1">
                          {proj.highlights.slice(0, 2).map((item, idx) => (
                            <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                              <span className="line-clamp-1">{item}</span>
                            </div>
                          ))}
                        </div>
                      )}

                      {proj.clientReview && (
                        <div className="mt-2.5 p-2 bg-slate-50 border border-slate-100 rounded-lg text-xs italic text-slate-600">
                          "{proj.clientReview.comment}"
                          <span className="block font-semibold text-slate-800 not-italic text-[11px] mt-0.5">
                            — {proj.clientReview.author}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                      <div className="text-[11px] text-slate-500">
                        <span className="block font-semibold text-slate-800">
                          {proj.specifications.frameMaterial?.split(' ')[0] || 'Aluminium'}
                        </span>
                        <span>{proj.specifications.systemType?.split(' ')[0] || 'Custom Fit'}</span>
                      </div>

                      <button
                        onClick={() => handleOpenQuoteModal(`Installation similar to ${proj.title} (${proj.location})`)}
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
          )}

          {/* TAB 2: All Original Photos Gallery */}
          {activeTab === 'all-photos' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-2">
              {allRealPhotos.map((photo, idx) => (
                <div
                  key={idx}
                  className="group relative bg-slate-100 rounded-lg overflow-hidden border border-slate-200 cursor-pointer shadow-xs hover:border-blue-300 transition-all"
                  onClick={() => setSelectedPhoto(photo)}
                >
                  <ProductImagePlaceholder
                    src={photo.url}
                    title={photo.title}
                    aspectRatio="auto"
                    fitMode="contain"
                    showZoomBadge={true}
                    className="w-full h-64 bg-slate-950 flex items-center justify-center p-1"
                  />
                  <div className="p-3 bg-white border-t border-slate-100">
                    <p className="text-xs font-bold text-slate-800 line-clamp-1">{photo.title}</p>
                    <div className="flex items-center justify-between mt-1 text-[11px] text-slate-500">
                      <span>{photo.tag}</span>
                      <span className="text-blue-600 font-semibold flex items-center gap-0.5">
                        <Camera className="w-3 h-3" /> Real Photo
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* TAB 3: Video Demonstrations */}
          {activeTab === 'videos' && (
            <div className="pt-2">
              <VideoGallery
                videos={sampleVideos}
                title="On-Site Action Video Demonstrations"
                subtitle="High-definition clips showing the smooth glide of sliding screens, automatic magnetic door latches, and balcony ceiling cloth drying pulley operations."
              />
            </div>
          )}
        </div>

        {/* Quick Contact & Free Measurement Banner */}
        <QuickContactBanner
          title="Liked Any Project or Real Photo?"
          subtitle="Our master installer can fabricate the identical sliding, pleated, or SS 304 insect system for your flat or villa with doorstep measurement."
          onOpenEnquiry={() => setIsModalOpen(true)}
        />
      </div>

      {/* High-Resolution Zoom Modal */}
      {selectedPhoto && (
        <ImageZoomModal
          isOpen={Boolean(selectedPhoto)}
          onClose={() => setSelectedPhoto(null)}
          images={[selectedPhoto.url]}
          productTitle={selectedPhoto.title}
          categorySlug={selectedPhoto.categorySlug || 'mosquito-net-door'}
        />
      )}

      {/* Direct WhatsApp Quote Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={enquiryProjectName}
        defaultEnquiryType="quote"
      />
    </div>
  );
};
