import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { siteConfig } from '../data/siteConfig';

export const PrivacyPage: React.FC = () => {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Privacy Policy', path: '/privacy' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <Breadcrumbs items={breadcrumbs} />

        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6 text-xs text-slate-600 leading-relaxed">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Legal Information
            </span>
            <h1 className="text-2xl font-bold text-slate-900">Privacy Policy</h1>
            <p className="text-slate-400 text-[11px] mt-1">Last Updated: October 2026</p>
          </div>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">1. Information We Collect</h2>
            <p>
              When you submit a quotation inquiry or request a callback on {siteConfig.company.brandName}, we collect the personal details you provide, including your name, contact mobile number, optional email address, and installation city/locality.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">2. How We Use Your Information</h2>
            <p>
              Your contact details are used strictly to communicate quotation estimates, clarify custom door/window dimensions, schedule site measurement visits by our technicians, and fulfill mosquito net installation services.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">3. WhatsApp Communications</h2>
            <p>
              By clicking &ldquo;Get Best Quote&rdquo; or submitting your inquiry details, you consent to opening a direct WhatsApp chat with {siteConfig.company.brandName} ({siteConfig.company.phoneFormatted}) to facilitate sharing window photos, architectural plans, and pricing estimates.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">4. Data Security</h2>
            <p>
              We do not sell, rent, or trade your contact information to third-party telemarketers or advertisers. All customer data is maintained in accordance with Indian information technology regulations.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">5. Contact Information</h2>
            <p>
              For privacy-related queries or to request removal of your records, contact us at {siteConfig.company.email} or call {siteConfig.company.phoneFormatted}.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
