import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Wind, 
  Ruler, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Wrench, 
  Shield, 
  Eye, 
  ExternalLink, 
  Star, 
  Camera,
  Award,
  Zap,
  MapPin,
  Clock
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { productCategories, products, sampleVideos } from '../data/products';
import { ProductImagePlaceholder } from '../components/ProductImagePlaceholder';
import { EnquiryModal } from '../components/EnquiryModal';
import { ContactSection } from '../components/ContactSection';
import { ProjectsSection } from '../components/ProjectsSection';
import { VideoGallery } from '../components/VideoGallery';
import { FAQSection } from '../components/FAQSection';
import { SwipeableProductGallery } from '../components/SwipeableProductGallery';
import { QuickContactBanner } from '../components/QuickContactBanner';
import { googleProfileShareUrl } from '../data/projects';

export const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enquiryProductName, setEnquiryProductName] = useState('Home Page Free Site Measurement');
  const [enquiryType, setEnquiryType] = useState<'quote' | 'callback' | 'measurement'>('measurement');

  const handleOpenMeasurement = (productTitle?: string) => {
    setEnquiryProductName(productTitle || 'Free Doorstep Measurement & Quotation');
    setEnquiryType('measurement');
    setIsModalOpen(true);
  };

  const handleOpenQuote = (productTitle: string) => {
    setEnquiryProductName(productTitle);
    setEnquiryType('quote');
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* 1. Hero Section - Showcasing the Logo in GREAT SCALE as requested by user */}
      <section className="relative bg-gradient-to-b from-blue-50/60 via-white to-slate-50/50 border-b border-slate-200/80 py-8 sm:py-12 lg:py-16 overflow-hidden">
        {/* Subtle Decorative Brand Circles */}
        <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-100/40 blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-orange-100/40 blur-3xl pointer-events-none -z-10" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Great Scale Official Brand Logo & Headline */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#004AAD]/10 text-[#004AAD] rounded-full text-xs font-bold border border-[#004AAD]/20 shadow-2xs">
                <Sparkles className="w-3.5 h-3.5 text-[#F58220]" />
                <span>Premier Manufacturer & Installation Specialists</span>
              </div>

              {/* High-Resolution Brand Logo in Great Scale */}
              <div className="pt-1">
                <img
                  src="/assets/logo/shivasai-brand-full.png"
                  alt="Shiva Sai Home Needs - Better Homes, Safer Spaces, Complete Solutions"
                  className="w-full max-w-[340px] xs:max-w-[420px] sm:max-w-[500px] md:max-w-[560px] h-auto object-contain drop-shadow-md hover-lift transition-all"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Best Mosquito Net Doors, Sliding Mesh & UPVC Windows in Hyderabad
              </h1>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
                Keep mosquitoes, flies, bugs, and lizards out while preserving 100% natural breeze and view clarity. Engineered with heavy 6063-T6 architectural aluminium, barrier-free pleated tracks, and marine-grade SS 304 wire mesh custom fabricated to exact millimeter tolerances.
              </p>

              {/* Fast Trust Indicators using Brand Colors */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1 text-xs font-semibold text-slate-800">
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#004AAD] shrink-0" />
                  <span>Free Laser Measurement</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                  <span>Pet & Cat Scratch Proof</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-[#F58220] shrink-0" />
                  <span>2-Hour Doorstep Response</span>
                </div>
              </div>

              {/* Primary Call to Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#004AAD] hover:bg-blue-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover-lift transition-all"
                >
                  <span>Explore Product Catalogue</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => handleOpenMeasurement()}
                  className="inline-flex items-center gap-2 px-5 py-3.5 bg-[#F58220] hover:bg-[#e07114] text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover-lift transition-all"
                >
                  <Ruler className="w-4 h-4" />
                  <span>Book Free Measurement</span>
                </button>

                <a
                  href={`tel:${siteConfig.company.phone}`}
                  className="inline-flex items-center gap-2 px-4 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-xl text-xs sm:text-sm font-bold shadow-xs hover-lift transition-all"
                >
                  <Phone className="w-4 h-4 text-[#004AAD]" />
                  <span>{siteConfig.company.phoneFormatted}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Real Installation Card & Google Reviews */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border-2 border-blue-100 p-5 shadow-xl relative hover-lift">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#004AAD] animate-ping" />
                    <span className="text-xs font-bold text-slate-900">Real Hyderabad Installation</span>
                  </div>
                  <span className="text-[11px] font-bold text-[#F58220] bg-orange-50 px-2 py-0.5 rounded-md border border-orange-200">
                    Google 5.0 ★ Rated
                  </span>
                </div>

                <div className="relative aspect-4/3 rounded-2xl overflow-hidden bg-slate-950 shadow-inner group">
                  <img
                    src="/assets/aistudio/IMG-20261024-WA0012_4f593d74.jpg"
                    alt="Balcony 4-Panel Sliding Mosquito Net Door Installation in Hyderabad"
                    loading="eager"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-slate-950/85 backdrop-blur-md p-3 rounded-xl border border-white/10 text-white">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span>4-Panel Balcony Sliding Shutter</span>
                      <span className="text-[#00AEEF]">₹165/sq ft</span>
                    </div>
                    <p className="text-[11px] text-slate-300 line-clamp-1 mt-0.5">
                      Smooth nylon rollers with perimeter wool-pile sealing against mosquitoes & lizards.
                    </p>
                  </div>
                </div>

                {/* Direct Action */}
                <div className="mt-3.5 pt-2 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenQuote('Balcony 4-Panel Sliding Mosquito Net Door')}
                    className="text-xs font-bold text-[#004AAD] hover:underline inline-flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#00AEEF]" />
                    <span>Get Instant WhatsApp Quote</span>
                  </button>
                  <Link
                    to="/products/balcony-sliding-mosquito-net-door-2-track"
                    className="text-xs font-bold text-slate-600 hover:text-[#004AAD]"
                  >
                    View Specs →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Google Business Profile & Competitor-Crushing Trust Strip */}
      <section className="bg-slate-900 text-white py-4 border-b border-slate-800">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="font-bold">4.9 / 5.0 Star Rating (860+ Verified Installations)</span>
            <span className="text-slate-500 hidden md:inline">|</span>
            <span className="text-slate-300 hidden md:inline">Kukatpally • Hitec City • Gachibowli • Miyapur • Vijayawada</span>
          </div>

          <a
            href={googleProfileShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#00AEEF] hover:text-cyan-300 font-bold"
          >
            <span>View Verified Google Business Photos & Reviews</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </section>

      {/* 3. Interactive Swipeable Product Gallery (Desktop Scroll Buttons + Mobile Touch Swipe) */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <SwipeableProductGallery
            products={products}
            title="Custom Mosquito Net Doors, Windows & Screens"
            subtitle="Engineered for high-rise apartment balconies, villas, and independent houses across Hyderabad. Swipe on mobile or use arrows on desktop."
            onOpenQuote={handleOpenQuote}
          />
        </div>
      </section>

      {/* 4. Why Shiva Sai Home Needs Beats Other Competitors in the Market */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#004AAD]/10 text-[#004AAD] text-xs font-bold">
              <Award className="w-3.5 h-3.5 text-[#F58220]" />
              <span>Market Leadership Standards</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Why Homeowners Choose Shiva Sai Home Needs Over Local Competitors
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Unlike unorganized local fabricators using thin 0.8mm commercial scrap iron, we build exclusively with heavy architectural grade aluminium and genuine Phifer & SS 304 mesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover-lift space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#004AAD] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Heavy 6063-T6 Aluminium</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Extruded architectural aluminium frames with 1.5mm to 2.0mm thickness that never flex, warp, or rust even in high-floor balcony wind pressures.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover-lift space-y-3">
              <div className="w-12 h-12 rounded-xl bg-orange-50 text-[#F58220] flex items-center justify-center font-bold">
                <Ruler className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">2-Hour Laser Measurement</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our mobile technicians arrive with digital laser measuring devices and physical color swatches to match your UPVC or wooden finish with zero millimeter gaps.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover-lift space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#2E7D32] flex items-center justify-center font-bold">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">SS 304 Pet & Rodent Proof</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-tensile 0.8mm marine-grade stainless steel mesh that resists aggressive cat claws, dog bites, rats, and accidental knife cuts with a 15-year warranty.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover-lift space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Barrier-Free Accordion Pleats</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Virtually flat 3mm bottom track eliminates tripping hazards for elders and children. Folds into a sleek 45mm cassette when open for unobstructed views.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Real Installation Projects Showcase */}
      <ProjectsSection
        title="Recent Gated Community Installations"
        subtitle="Explore authentic on-site photos from My Home Bhooja, Aparna Serene, Rainbow Vistas, Rajapushpa, and luxury villas across Hyderabad & Vijayawada."
        limit={6}
        showFilters={true}
        showViewAllLink={true}
      />

      {/* 6. Real Action Videos Gallery */}
      {sampleVideos && sampleVideos.length > 0 && (
        <section className="py-14 bg-white border-b border-slate-200">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
            <VideoGallery videos={sampleVideos} />
          </div>
        </section>
      )}

      {/* 7. Frequently Asked Questions Section */}
      <div className="bg-slate-50/70 border-b border-slate-200">
        <FAQSection
          limit={6}
          showSearch={true}
          showCategoryTabs={true}
          onOpenMeasurement={() => handleOpenMeasurement('Doorstep Measurement (from Home FAQs)')}
        />
        <div className="text-center pb-8 -mt-4">
          <Link
            to="/faq"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-slate-50 text-[#004AAD] border border-slate-300 rounded-xl text-xs font-bold shadow-2xs hover-lift transition-all"
          >
            <span>View All Detailed FAQs & Maintenance Guides</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* 8. Quick Contact Banner on Every Page */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <QuickContactBanner onOpenEnquiry={() => handleOpenMeasurement()} />
      </div>

      {/* Global Interactive Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={enquiryProductName}
        defaultEnquiryType={enquiryType}
      />
    </div>
  );
};
