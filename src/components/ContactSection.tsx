import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

interface ContactSectionProps {
  onOpenEnquiry: () => void;
  className?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  onOpenEnquiry,
  className = ''
}) => {
  const { company } = siteConfig;

  return (
    <section
      id="contact-section"
      className={`bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 ${className}`}
    >
      <div className="max-w-3xl mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
          Direct Manufacturer Support
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          Contact {company.brandName} for Free Consultation & Site Measurement
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
          Get in touch with our fabrication team for custom door quotes, bulk residential building inquiries, or free laser measurement at your doorstep across Hyderabad, Secunderabad, Vijayawada, and surrounding regions.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left: Contact Info Block */}
        <div className="space-y-5 bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
              <Phone className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                Direct Call / Phone
              </span>
              <a
                href={`tel:${company.phone}`}
                className="text-base font-bold text-slate-900 hover:text-blue-600 font-mono transition-colors"
              >
                {company.phoneFormatted}
              </a>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Instant inquiry & on-call technical consultation
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
              <MessageSquare className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                WhatsApp Quotation
              </span>
              <a
                href={`https://wa.me/${company.whatsappNumber}?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20mosquito%20net%20doors%20for%20my%20home.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors inline-flex items-center gap-1.5"
              >
                <span>Chat on WhatsApp (+91 {company.phone})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Send window photos or door dimensions for instant quote
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                Workshop & Office Address
              </span>
              <p className="text-xs text-slate-800 font-medium">
                {company.brandName}
              </p>
              <p className="text-xs text-slate-600 mt-0.5">
                {company.addressLine1}, {company.addressLine2}
              </p>
              <p className="text-xs text-slate-600">
                {company.city}, {company.state} - {company.pincode}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
              <Clock className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">
                Working Hours
              </span>
              <p className="text-xs text-slate-800 font-medium">
                {company.workingHours}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                {company.workingDays}
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onOpenEnquiry}
              className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send Enquiry Form</span>
            </button>
            <a
              href={`tel:${company.phone}`}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition-colors"
            >
              <Phone className="w-4 h-4 text-blue-600" />
              <span>Direct Call</span>
            </a>
          </div>
        </div>

        {/* Right: Map Placeholder / Embed Component */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex flex-col h-full justify-between">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-3">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <MapPin className="w-4 h-4 text-red-500" />
                <span>Service Coverage & Workshop Location</span>
              </div>
              <a
                href={company.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Interactive Live Google Maps Embed */}
            <div className="relative w-full h-64 bg-slate-100 rounded-lg overflow-hidden border border-slate-200 shadow-inner">
              <iframe
                title="shivasaihomeneeds Google Maps Location"
                src={company.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute bottom-2 right-2 z-10">
                <a
                  href={company.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-xs text-blue-700 hover:bg-white text-xs font-semibold rounded-md shadow-md border border-slate-200 transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 text-red-500" />
                  <span>Get Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Service Areas Pill Tags */}
          <div className="mt-4 pt-3 border-t border-slate-100">
            <span className="text-[11px] font-semibold text-slate-500 block mb-2">
              Doorstep Measurement & Installation Available Across:
            </span>
            <div className="flex flex-wrap gap-1.5 text-xs text-slate-600">
              {company.serviceAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="bg-slate-50 px-2.5 py-1 rounded text-[11px] font-medium border border-slate-200/80"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Website Build Contact & Developer Credit */}
      <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
        <span>Looking for custom website design & development?</span>
        <span>
          Website Built & Developed by:{' '}
          <a
            href="https://vinaygarapatifreelance.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-[#004AAD] hover:underline"
          >
            Vinay Garapati (vinaygarapatifreelance.in)
          </a>
        </span>
      </div>
    </section>
  );
};
