import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { siteConfig } from '../data/siteConfig';

export const TermsPage: React.FC = () => {
  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Terms and Conditions', path: '/terms' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6">
        <Breadcrumbs items={breadcrumbs} />

        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-6 text-xs text-slate-600 leading-relaxed">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Customer Agreement
            </span>
            <h1 className="text-2xl font-bold text-slate-900">Terms and Conditions</h1>
            <p className="text-slate-400 text-[11px] mt-1">Effective Date: October 2026</p>
          </div>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">1. Custom Fabrication & Specifications</h2>
            <p>
              All mosquito net doors, sliding mesh systems, pleated accordion screens, and window shutters manufactured by {siteConfig.company.brandName} are custom-made to order according to verified physical measurements taken at the customer&apos;s site.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">2. Measurement & Tolerance</h2>
            <p>
              Site measurements are conducted by our trained personnel. The customer is responsible for ensuring clear access to door portals and window frames at the scheduled installation time.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">3. Quotations & Pricing</h2>
            <p>
              Price quotations provided on the website or via WhatsApp are estimates based on standard square footage. Final quotation invoices will reflect exact dimensions, customized powder-coating finishes, and chosen mesh grades (e.g. fiberglass vs. SS 304).
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">4. Warranty & Maintenance</h2>
            <p>
              Aluminium frames carry a structural anti-corrosion warranty. Mesh longevity depends on proper cleaning guidelines (avoiding harsh chemical bleaches or abrasive metal scourers). SS 304 mesh carries pet and rodent barrier assurances.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-bold text-slate-900">5. Jurisdiction</h2>
            <p>
              Any disputes arising from service or manufacturing agreements are subject to the exclusive jurisdiction of the competent courts in {siteConfig.company.city}, India.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
