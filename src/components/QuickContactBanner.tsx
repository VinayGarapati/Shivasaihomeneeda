import React from 'react';
import { Phone, MessageSquare, Ruler, Clock, MapPin, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';

interface QuickContactBannerProps {
  onOpenEnquiry?: () => void;
  title?: string;
  subtitle?: string;
}

export const QuickContactBanner: React.FC<QuickContactBannerProps> = ({
  onOpenEnquiry,
  title = 'Need Custom Sizing for Your Doors & Windows?',
  subtitle = 'Free doorstep laser measurement in Hyderabad & Vijayawada. Our technician carries real frame & mesh samples.'
}) => {
  return (
    <section className="my-10 bg-gradient-to-r from-[#004AAD] via-[#0A3E8A] to-[#00AEEF] rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
      {/* Decorative Brand Accent Background Circles */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full bg-[#F58220]/15 pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F58220] text-white rounded-full text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>2-Hour Doorstep Service in Hyderabad</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {title}
          </h2>

          <p className="text-xs sm:text-sm text-blue-100 leading-relaxed">
            {subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-blue-100 pt-1">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#00AEEF]" />
              <span>Mon - Sun: 8:30 AM – 9:00 PM</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#F58220]" />
              <span>Kukatpally, Hitec City, Gachibowli, Miyapur & all AP/TS</span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
          <a
            href={siteConfig.company.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-xl text-xs sm:text-sm font-bold shadow-lg hover-lift transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${siteConfig.company.phone}`}
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white hover:bg-slate-100 text-[#004AAD] rounded-xl text-xs sm:text-sm font-bold shadow-lg hover-lift transition-all"
          >
            <Phone className="w-4 h-4 text-[#004AAD]" />
            <span>Call: {siteConfig.company.phoneFormatted}</span>
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-900/80 hover:bg-slate-900 text-white rounded-xl text-xs sm:text-sm font-bold border border-white/20 hover-lift transition-all"
          >
            <Ruler className="w-4 h-4 text-[#00AEEF]" />
            <span>AI Estimator & Sizing</span>
          </Link>
        </div>
      </div>

      {/* Quick Navigation Links along the pages */}
      <div className="mt-8 pt-6 border-t border-white/15 flex flex-wrap items-center justify-between gap-3 text-xs text-blue-200">
        <span className="font-semibold text-white">Explore More:</span>
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 font-medium">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>•</span>
          <Link to="/products" className="hover:text-white transition-colors">Products</Link>
          <span>•</span>
          <Link to="/services" className="hover:text-white transition-colors">Services</Link>
          <span>•</span>
          <Link to="/projects" className="hover:text-white transition-colors">Projects</Link>
          <span>•</span>
          <Link to="/gallery" className="hover:text-white transition-colors">Gallery</Link>
          <span>•</span>
          <Link to="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>
      </div>
    </section>
  );
};
