import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { siteConfig } from '../data/siteConfig';
import { EnquiryModal } from '../components/EnquiryModal';
import { QuickContactBanner } from '../components/QuickContactBanner';
import { googleProfileShareUrl } from '../data/projects';
import { ShieldCheck, Award, Factory, Users, Phone, MessageSquare, ExternalLink, Star, Camera, CheckCircle2 } from 'lucide-react';

export const AboutPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { company } = siteConfig;

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' }
  ];

  return (
    <div className="bg-white min-h-screen pb-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 space-y-6">
        <Breadcrumbs items={breadcrumbs} />

        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold border border-blue-200 mb-2">
              <Camera className="w-3.5 h-3.5 text-blue-700" />
              <span>Authentic On-Site Craftsmanship</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Pioneers in Custom Mosquito Net Doors, Sliding Mesh & Home Needs Fabrication
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed max-w-3xl">
              Founded with the commitment to provide 100% insect-free living spaces without suffocating homes behind closed glass, <strong className="text-slate-900 font-semibold">{company.brandName}</strong> is a premier manufacturer and installer of custom aluminium insect screens, balcony sliding mesh doors, pleated systems, and heavy-duty stainless steel wire mesh doors across Hyderabad, Secunderabad, and Andhra Pradesh.
            </p>
          </div>

          {/* Real Team & Workshop Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
            <div className="lg:col-span-5 space-y-3">
              <div className="relative rounded-xl overflow-hidden border border-slate-300 shadow-sm h-80 bg-slate-950 flex items-center justify-center p-1">
                <img
                  src="/assets/aistudio/IMG-20261024-WA0010_ecfb542d.jpg"
                  alt={`${company.brandName} Lead Technician and Fabricator on Site`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/95 via-black/70 to-transparent text-white">
                  <span className="text-xs font-bold block">Lead Installation Specialist</span>
                  <span className="text-[11px] text-slate-300">{company.brandName} — On-Site Door Handover</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                Direct Craftsman Integrity
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                12+ Years of Hands-On Fabrication and Flawless On-Site Installations
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Unlike third-party retail dealers who outsource your fitting to random subcontractors, every order with <strong className="text-slate-900 font-semibold">{company.brandName}</strong> is directly measured, fabricated in our own workshop, and installed by our trained specialists.
              </p>

              <div className="space-y-2 pt-1 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Heavy architectural aluminium 6063-T6 (never recycled scraps)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Dual ball-bearing silent nylon rollers for effortless sliding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Custom laser measurements with zero insect-gap guarantee</span>
                </div>
              </div>

              {/* Verified Google Business Link */}
              <div className="pt-2">
                <a
                  href={googleProfileShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 rounded-lg text-xs font-semibold transition-colors shadow-xs"
                >
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span>View Verified Google Business Profile & Photos</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Key Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <Factory className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">In-House Precision Fabrication</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We custom-cut and assemble every door and window frame using high-tensile 6063-T6 architectural aluminium sections and specialized mitre-joint machinery.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Certified High-Tensile Mesh</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                From marine-grade SS 304 wire mesh that resists knives and pets to high-transparency Phifer fiberglass and pleated accordion meshes, we use zero low-grade substitutes.
              </p>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <div className="w-10 h-10 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900">Expert Doorstep Installation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our trained technicians visit your home, record millimeter-precise measurements, and perform dust-controlled installation with perfect alignment.
              </p>
            </div>
          </div>

          {/* Experience and Service Stats */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
                Direct Manufacturer Advantage
              </span>
              <h3 className="text-lg font-bold">
                Serving Homeowners, Builders & Commercial Properties
              </h3>
              <p className="text-xs text-slate-400 max-w-xl">
                Get factory-direct pricing with no retail intermediary markups. Every installation is backed by comprehensive customer support and warranty.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
              >
                Request Consultation
              </button>
              <a
                href={`tel:${company.phone}`}
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                Call {company.phoneFormatted}
              </a>
            </div>
          </div>

          {/* Cross Page Navigation Strip */}
          <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="font-semibold text-slate-700">Explore More from Shiva Sai Home Needs:</span>
            <div className="flex flex-wrap items-center gap-2">
              <a href="/products" className="text-blue-600 hover:underline">Catalogue</a>
              <span className="text-slate-300">·</span>
              <a href="/projects" className="text-blue-600 hover:underline font-bold">Projects & Installations</a>
              <span className="text-slate-300">·</span>
              <a href="/services" className="text-blue-600 hover:underline">Services</a>
              <span className="text-slate-300">·</span>
              <a href="/contact" className="text-blue-600 hover:underline">Contact</a>
            </div>
          </div>
        </div>

        {/* Quick Contact & Cross Page Navigation */}
        <QuickContactBanner
          title="Direct Manufacturer Integrity & Free Doorstep Measurement"
          subtitle="Call our team or message us on WhatsApp for free laser measurements, frame color samples, and fast delivery."
          onOpenEnquiry={() => setIsModalOpen(true)}
        />
      </div>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName="Company Consultation & Quotation"
        defaultEnquiryType="callback"
      />
    </div>
  );
};
