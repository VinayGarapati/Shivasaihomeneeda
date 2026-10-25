import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { siteConfig } from '../data/siteConfig';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ImageCarousel } from '../components/ImageCarousel';
import { ProductSpecifications } from '../components/ProductSpecifications';
import { EnquiryModal } from '../components/EnquiryModal';
import { QuickContactBanner } from '../components/QuickContactBanner';
import { Phone, MessageSquare, ArrowLeft, CheckCircle2, ShieldCheck, Ruler, Truck } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [enquiryType, setEnquiryType] = useState<'quote' | 'callback' | 'measurement'>('quote');

  const product = useMemo(() => {
    return products.find((p) => p.slug === slug);
  }, [slug]);

  if (!product) {
    return (
      <div className="max-w-[1240px] mx-auto px-4 py-16 text-center">
        <h2 className="text-xl font-bold text-slate-800">Product Not Found</h2>
        <p className="text-xs text-slate-500 mt-2">
          The requested mosquito net product specification could not be located.
        </p>
        <Link
          to="/products/mosquito-net-door-and-sliding-mosquito-net"
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-xs font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Product Catalogue</span>
        </Link>
      </div>
    );
  }

  const breadcrumbs = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products/mosquito-net-door-and-sliding-mosquito-net' },
    { label: product.categoryName, path: `/products/mosquito-net-door-and-sliding-mosquito-net?category=${product.categoryId}` },
    { label: product.name, path: `/products/${product.slug}` }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        <Breadcrumbs items={breadcrumbs} />

        <div className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 hover:text-blue-600 mb-5 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Products</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Gallery Column */}
            <div className="lg:col-span-5">
              <ImageCarousel
                images={product.images}
                primaryImage={product.image}
                productTitle={product.name}
                categorySlug={product.categoryId}
                className="w-full"
              />

              <div className="mt-4 p-3.5 bg-slate-50 rounded-lg border border-slate-200/80 text-xs text-slate-600 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-slate-800">
                  <Ruler className="w-4 h-4 text-blue-600" />
                  <span>Free Laser Measurement & Color Matching</span>
                </div>
                <p className="text-[11px] text-slate-500">
                  We bring actual aluminium powder-coat swatches and mesh samples directly to your doorstep.
                </p>
              </div>
            </div>

            {/* Info Column */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  {product.categoryName}
                </span>
                <h1 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">
                  {product.name}
                </h1>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {product.detailedDescription}
                </p>

                {/* Quick Inquiry Button directly next to description */}
                <div className="mt-3.5 flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/${siteConfig.company.whatsappNumber}?text=${encodeURIComponent(
                      `Hi Shiva Sai Home Needs! I would like to make a Quick Inquiry about "${product.name}". Please share price details and schedule a free doorstep measurement.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white rounded-xl text-xs font-bold shadow-md hover-lift transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Quick Inquiry on WhatsApp</span>
                  </a>
                  <span className="text-xs text-slate-500 font-medium">Fast technician response</span>
                </div>
              </div>

              {/* Price Block */}
              <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-slate-500 uppercase tracking-wider font-semibold block">
                    Estimated Fabrication Cost
                  </span>
                  {product.price && !product.isPriceOnRequest ? (
                    <div className="flex items-baseline gap-1 mt-0.5">
                      <span className="text-2xl font-black text-slate-900 font-mono">
                        ₹{product.price}
                      </span>
                      <span className="text-xs text-slate-500 font-medium">
                        {product.priceUnit || '₹/sq ft'}
                      </span>
                    </div>
                  ) : (
                    <span className="text-sm font-bold text-blue-800">
                      Price on Request (Based on Frame Gauge & Dimensions)
                    </span>
                  )}
                </div>

                <div className="text-right text-[11px] text-slate-500">
                  <span>Installation included</span>
                  <span className="block text-emerald-600 font-medium font-mono">Warranty Included</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => {
                    setEnquiryType('quote');
                    setIsModalOpen(true);
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get Best Quote on WhatsApp</span>
                </button>

                <button
                  onClick={() => {
                    setEnquiryType('callback');
                    setIsModalOpen(true);
                  }}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-600" />
                  <span>Request Callback</span>
                </button>

                <a
                  href={`tel:${siteConfig.company.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {siteConfig.company.phoneFormatted}</span>
                </a>
              </div>

              {/* Features List */}
              {product.features && (
                <div className="pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Key Fabrication Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Best Suited For */}
              {product.bestSuitedFor && (
                <div className="pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Recommended Applications
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {product.bestSuitedFor.map((app, idx) => (
                      <span
                        key={idx}
                        className="bg-slate-100 text-slate-700 text-xs px-2.5 py-1 rounded font-medium border border-slate-200"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Full Technical Specifications Table */}
              <div className="pt-4">
                <ProductSpecifications
                  specifications={product.specifications}
                  isCompact={false}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact & Doorstep Measurement Banner */}
        <div className="mt-8">
          <QuickContactBanner
            title={`Get Custom Sizing for ${product.name}`}
            subtitle="Our technician will visit your location in Hyderabad or Vijayawada with actual frame swatches and laser measuring tools."
            onOpenEnquiry={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={product.name}
        productId={product.id}
        defaultEnquiryType={enquiryType}
      />
    </div>
  );
};
