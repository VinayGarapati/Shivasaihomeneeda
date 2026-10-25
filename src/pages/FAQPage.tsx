import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  HelpCircle, 
  Phone, 
  MessageSquare, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Ruler, 
  CheckCircle2,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { FAQSection } from '../components/FAQSection';
import { EnquiryModal } from '../components/EnquiryModal';
import { QuickContactBanner } from '../components/QuickContactBanner';
import { siteConfig } from '../data/siteConfig';
import { googleProfileShareUrl } from '../data/projects';

export const FAQPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enquiryProductName, setEnquiryProductName] = useState('FAQ Free Measurement Booking');

  const handleOpenMeasurement = () => {
    setEnquiryProductName('Free Doorstep Laser Measurement (From FAQ)');
    setIsModalOpen(true);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Banner */}
      <section className="bg-gradient-to-b from-slate-50 via-white to-slate-50 border-b border-slate-200/80 py-12 sm:py-16">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold border border-blue-200/60 mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Customer Help & Guidance Center</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Frequently Asked Questions & Product Guides
            </h1>

            <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
              Everything you need to know about Shiva Sai Home Needs custom mosquito net doors, sliding mesh systems, pleated accordion barriers, SS 304 wire mesh durability, and balcony ceiling cloth drying hangers.
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-200 text-xs">
              <div>
                <span className="block text-xl font-bold text-blue-600 font-mono">100%</span>
                <span className="text-slate-600 font-medium">Free Doorstep Visit</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-blue-600 font-mono">24-48h</span>
                <span className="text-slate-600 font-medium">Quick Fabrication</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-blue-600 font-mono">SS 304</span>
                <span className="text-slate-600 font-medium">Rat & Pet Bite Proof</span>
              </div>
              <div>
                <span className="block text-xl font-bold text-blue-600 font-mono">5 Years</span>
                <span className="text-slate-600 font-medium">Aluminium Frame Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive FAQ Section */}
      <FAQSection
        title="Browse Questions by Category"
        subtitle="Filter answers below or use search to find quick solutions for your apartment, villa, or commercial property."
        onOpenMeasurement={handleOpenMeasurement}
      />

      {/* Direct Contact Bar */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Call Our Specialists
                </span>
                <h3 className="text-base font-bold text-slate-900">Direct Phone Support</h3>
                <p className="text-xs text-slate-500">Monday to Sunday, 8:00 AM – 9:00 PM</p>
                <div className="pt-2">
                  <a
                    href="tel:+917337308486"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800"
                  >
                    <Phone className="w-4 h-4" />
                    <span>+91 7337308486</span>
                  </a>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                  Instant Response
                </span>
                <h3 className="text-base font-bold text-slate-900">WhatsApp Chat & Video Demo</h3>
                <p className="text-xs text-slate-500">Send door photos to get an instant estimate</p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/917337308486?text=Hi%20Shiva%20Sai%20Home%20Needs%2C%20I%20have%20an%20inquiry%20regarding%20mosquito%20nets."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-600 hover:text-emerald-800"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                  Verified Location
                </span>
                <h3 className="text-base font-bold text-slate-900">Google Business Profile</h3>
                <p className="text-xs text-slate-500">Check customer reviews and map location</p>
                <div className="pt-2">
                  <a
                    href={googleProfileShareUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-purple-600 hover:text-purple-800"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>View on Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact & Cross Page Navigation */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <QuickContactBanner
          title="Still Have Questions About Your Door Openings?"
          subtitle="Our master technician will visit your location in Hyderabad with live material swatches for a free consultation."
          onOpenEnquiry={handleOpenMeasurement}
        />
      </div>

      {/* Enquiry Modal */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={enquiryProductName}
        defaultEnquiryType="measurement"
      />
    </div>
  );
};
