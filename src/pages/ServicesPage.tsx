import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { EnquiryModal } from '../components/EnquiryModal';
import { QuickContactBanner } from '../components/QuickContactBanner';
import { siteConfig } from '../data/siteConfig';
import { 
  Ruler, 
  Palette, 
  Wrench, 
  ShieldCheck, 
  RefreshCw, 
  Building2, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  CalendarCheck 
} from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedServiceName, setSelectedServiceName] = useState('Installation Service Booking');
  const [enquiryType, setEnquiryType] = useState<'quote' | 'callback' | 'measurement'>('measurement');

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' }
  ];

  const services = [
    {
      id: 'srv-01',
      title: 'Free Doorstep Laser Measurement & Consultation',
      icon: Ruler,
      description: 'Our expert technician visits your apartment, villa, or commercial site with sample kits, aluminium color swatches, and high-precision laser distance meters to measure every opening down to the millimetre.',
      highlights: [
        'Zero measurement errors and guaranteed perfect fit',
        'Physical mesh samples (Fiberglass, SS 304, Pleated)',
        'Frame color matching against existing UPVC/wooden frames',
        'Completely free consultation with zero obligation'
      ]
    },
    {
      id: 'srv-02',
      title: 'Custom Aluminium Powder-Coating & Wood Finish',
      icon: Palette,
      description: 'We do not sell generic off-the-shelf sizes. Every frame is electrostatically powder-coated to seamlessly match your home interior and exterior architectural palette.',
      highlights: [
        'RAL shades: Pure White, Off-White, Anthracite Grey, Bronze, Jet Black',
        'Italian sublimation Golden Teak, Walnut, and Rosewood grain finishes',
        '100% UV resistant, salt-spray immune, and rust-proof',
        'Lead-free and eco-friendly architectural coatings'
      ]
    },
    {
      id: 'srv-03',
      title: 'Balcony French Door Sliding Mesh Retrofitting',
      icon: Building2,
      description: 'Specialized installation for modern 2-track and 3-track sliding balcony doors. We supply auxiliary track retrofits and heavy-gauge aluminium sliding panels that glide on silent nylon ball bearings.',
      highlights: [
        'Tolerates high wind pressure at 10th-30th floor balconies',
        'Interlocking stiles with wool-felt weatherstrip seal',
        'Zero obstruction to existing glass doors and curtains',
        'Concealed flush lock with key security option'
      ]
    },
    {
      id: 'srv-04',
      title: 'Barrier-Free Pleated & Retractable Screen Fitting',
      icon: Wrench,
      description: 'Zero-trip-hazard accordion pleated mesh doors installed with an ultra-flat 3mm floor ribbon. Perfect for elders, wheelchairs, and robot vacuum cleaners.',
      highlights: [
        'Water-repellent zig-zag polypropylene mesh',
        'High-strength Kevlar guide tension cords',
        'Smooth caterpillar track retraction into a compact 7cm cassette',
        'Single slide or center bi-parting double pull for wide spans'
      ]
    },
    {
      id: 'srv-05',
      title: 'SS 304 High-Security Intruder & Pet Barrier Installation',
      icon: ShieldCheck,
      description: 'Heavy-duty 0.8mm marine stainless steel SS 304 security screen installation for main entrance doors and ground floor openings where both insect prevention and burglar deterrence are needed.',
      highlights: [
        'Anti-knife shear and impact resistant wire mesh',
        'Pet-proof (cats and dogs cannot scratch or tear through)',
        'Rat and rodent proof (teeth cannot bite through SS 304)',
        'Multi-point mortise security locking mechanism'
      ]
    },
    {
      id: 'srv-06',
      title: 'Mesh Re-Screening, Roller Replacement & AMC',
      icon: RefreshCw,
      description: 'Have existing mosquito net frames that are damaged, torn, or have jammed rollers? We offer doorstep mesh replacement and roller overhaul services to make them brand new.',
      highlights: [
        'Quick on-site re-meshing for aluminium and wooden frames',
        'Upgraded heavy-duty nylon ball-bearing roller installation',
        'New perimeter magnetic strips and weather-pile sealing',
        'Annual maintenance contracts for residential societies'
      ]
    }
  ];

  const handleBookService = (title: string, type: 'measurement' | 'quote' = 'measurement') => {
    setSelectedServiceName(title);
    setEnquiryType(type);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white min-h-screen pb-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <Breadcrumbs items={breadcrumbs} />

        {/* Page Heading Banner */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 mb-8 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Installation & Technical Services
              </span>
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                End-to-End Mosquito Net Fabrication & On-Site Installation
              </h1>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl leading-relaxed">
                From precision laser measurements to dust-controlled fitting, our certified technicians deliver turnkey insect screen solutions for apartments, luxury villas, and commercial properties.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleBookService('General Site Measurement & Quotation')}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
              >
                Book Free Measurement
              </button>
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                Call {siteConfig.company.phoneFormatted}
              </a>
            </div>
          </div>

          {/* Quick Cross-Navigation Links */}
          <div className="pt-4 flex flex-wrap items-center gap-2 text-xs text-slate-600">
            <span className="font-semibold text-slate-700">Explore Other Pages:</span>
            <Link to="/" className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded text-slate-800 font-medium">
              Home
            </Link>
            <Link to="/products" className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded text-slate-800 font-medium">
              Products Catalogue
            </Link>
            <Link to="/gallery" className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded text-slate-800 font-medium">
              Photo Gallery
            </Link>
            <Link to="/about" className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded text-slate-800 font-medium">
              About Us
            </Link>
            <Link to="/contact" className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 rounded text-slate-800 font-medium">
              Contact Us
            </Link>
          </div>
        </div>

        {/* 6 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((srv) => {
            const IconComponent = srv.icon;
            return (
              <div
                key={srv.id}
                className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-blue-400 hover:shadow-md transition-all space-y-4"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h2 className="text-base font-bold text-slate-900">{srv.title}</h2>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block">
                      Service Highlights
                    </span>
                    {srv.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <button
                    onClick={() => handleBookService(srv.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Inquire on WhatsApp</span>
                  </button>

                  <Link
                    to="/contact"
                    className="text-xs font-semibold text-slate-600 hover:text-blue-700"
                  >
                    Contact Support →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* 5-Step Execution Workflow */}
        <div className="bg-slate-900 text-white rounded-xl p-6 sm:p-8 mb-12">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-1">
              Streamlined Service Process
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              How We Deliver Your Custom Mosquito Net
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              From inquiry to completed installation in as fast as 48 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { step: '01', title: 'Consultation & Quote', desc: 'Share your requirements or window count via WhatsApp or call.' },
              { step: '02', title: 'Laser Measurement', desc: 'Technician visits with swatches and measures door dimensions.' },
              { step: '03', title: 'Factory Fabrication', desc: 'Precision 45° mitre cuts and electrostatic powder-coating.' },
              { step: '04', title: 'Dust-Free Fitting', desc: 'Expert on-site mounting with silent rollers and wool seals.' },
              { step: '05', title: 'Quality Handover', desc: 'Functionality testing, cleaning tips, and warranty registration.' }
            ].map((st, idx) => (
              <div key={idx} className="p-4 rounded-lg bg-slate-800/80 border border-slate-700">
                <span className="text-xs font-mono font-bold text-blue-400 block mb-1">
                  Step {st.step}
                </span>
                <h3 className="text-xs font-bold text-white mb-1">{st.title}</h3>
                <p className="text-[11px] text-slate-400 leading-relaxed">{st.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <CalendarCheck className="w-5 h-5 text-blue-400" />
              <span className="text-xs text-slate-300">
                Ready to schedule your site visit? Our team is available 9 AM – 8 PM.
              </span>
            </div>

            <button
              onClick={() => handleBookService('Quick Measurement Booking')}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold transition-colors shrink-0"
            >
              Book Site Visit Now
            </button>
          </div>
        </div>

        {/* Quick Contact & Doorstep Measurement Banner */}
        <QuickContactBanner
          title="Schedule Free Doorstep Laser Measurement Today"
          subtitle="Our technicians arrive with physical swatches of all mesh types, aluminium profiles, and color charts across Hyderabad & Vijayawada."
          onOpenEnquiry={() => handleBookService('Direct Doorstep Measurement Request')}
        />
      </div>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={selectedServiceName}
        defaultEnquiryType={enquiryType}
      />
    </div>
  );
};
