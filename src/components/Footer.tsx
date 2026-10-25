import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ShieldCheck, ChevronRight, MessageSquare, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { productCategories } from '../data/products';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { company } = siteConfig;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Col 1: Brand & Logo */}
          <div className="space-y-4">
            <Link to="/" className="block">
              <img
                src="/assets/logo/shivasai-brand-full.png"
                alt="Shiva Sai Home Needs Logo"
                className="h-14 sm:h-16 w-auto max-w-[240px] object-contain bg-white/95 rounded-xl p-1.5 shadow-md"
              />
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed">
              Premier manufacturer and custom installation specialists for mosquito net doors, UPVC sliding screens, barrier-free pleated mesh systems, and stainless steel SS 304 security mesh in Hyderabad & Andhra Pradesh.
            </p>
            <div className="pt-1 flex items-center gap-1.5 text-xs text-[#00AEEF]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>100% Rust-Proof 6063-T6 Aluminium & SS 304</span>
            </div>
          </div>

          {/* Col 2: Categories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F58220]" />
              <span>Screen Solutions</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {productCategories.slice(0, 6).map((cat) => (
                <li key={cat.id}>
                  <Link
                    to={`/products/mosquito-net-door-and-sliding-mosquito-net?category=${cat.slug}`}
                    className="hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600 group-hover:text-[#00AEEF]" />
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation Menu */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00AEEF]" />
              <span>Navigation</span>
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Locations */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
              <span>Contact & Workshop</span>
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F58220] shrink-0 mt-0.5" />
                <span>
                  {company.addressLine1}, {company.city}, {company.state} - {company.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00AEEF] shrink-0" />
                <a href={`tel:${company.phone}`} className="hover:text-white font-mono font-bold text-white">
                  {company.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                <a 
                  href={company.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white text-[#25D366] font-bold"
                >
                  WhatsApp Quote (+91 {company.phone})
                </a>
              </div>
              <div className="pt-2 text-[11px] text-slate-500 border-t border-slate-800">
                Operating Hours: <strong>{company.workingHours}</strong> (Mon-Sun All 7 Days Open)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Developer Credit & Legal */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} <strong>{company.brandName}</strong>. All rights reserved. {company.tagline}.
          </div>

          {/* Developer Credit & Website Build Contact explicitly requested by user */}
          <div className="text-center md:text-right text-[11px] text-slate-400">
            Website Developed by{' '}
            <a
              href="https://vinaygarapatifreelance.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#00AEEF] hover:underline"
            >
              Vinay Garapati
            </a>{' '}
            • Website Build Contact:{' '}
            <a
              href="https://vinaygarapatifreelance.in"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:text-[#00AEEF] hover:underline"
            >
              vinaygarapatifreelance.in
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px]">
            <Link to="/privacy" className="hover:text-slate-300">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" className="hover:text-slate-300">Terms of Service</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-slate-300">Hyderabad Service Centers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
