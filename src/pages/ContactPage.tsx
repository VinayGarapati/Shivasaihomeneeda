import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactSection } from '../components/ContactSection';
import { EnquiryModal } from '../components/EnquiryModal';
import { AiDoorAdvisor } from '../components/AiDoorAdvisor';
import { QuickContactBanner } from '../components/QuickContactBanner';
import { siteConfig } from '../data/siteConfig';
import { 
  Sparkles, 
  MapPin, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Bot
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Contact Us', path: '/contact' }
  ];

  return (
    <div className="bg-white min-h-screen pb-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 space-y-8">
        <Breadcrumbs items={breadcrumbs} />

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 pt-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#004AAD]/10 text-[#004AAD] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#F58220]" />
            <span>Doorstep Service Across Hyderabad & AP</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Shiva Sai Home Needs
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Have questions about mesh types, door sizing, or price estimates? Use our interactive AI Door Advisor below or contact our Hyderabad workshop directly.
          </p>
        </div>

        {/* AI Door Advisor Component (Specifically requested: "and add ai in the contact page") */}
        <div id="ai-advisor">
          <AiDoorAdvisor />
        </div>

        {/* Service Locations Grid */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#004AAD]">
            <MapPin className="w-4 h-4 text-[#F58220]" />
            <span>Authorized Service Coverage Areas (2-Hour Response Time)</span>
          </div>
          <p className="text-xs text-slate-600">
            Our mobile measurement vans operate 7 days a week with laser measuring instruments and genuine frame swatches across:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-xs font-semibold text-slate-800">
            {siteConfig.company.serviceAreas.map((area, idx) => (
              <div key={idx} className="flex items-center gap-1.5 p-2 bg-white rounded-xl border border-slate-200/80 shadow-2xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#004AAD] shrink-0" />
                <span className="truncate">{area}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Contact & Workshop Location */}
        <ContactSection onOpenEnquiry={() => setIsModalOpen(true)} className="bg-white shadow-md border-2 border-slate-100" />

        {/* Universal Quick Contact Banner */}
        <QuickContactBanner
          title="Ready for Free Laser Sizing at Your Doorstep?"
          subtitle="Call our master technician directly or send your window and door photos on WhatsApp for an immediate quotation."
        />
      </div>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName="Direct Contact Inquiry"
        defaultEnquiryType="quote"
      />
    </div>
  );
};
