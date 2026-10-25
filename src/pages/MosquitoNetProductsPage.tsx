import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ProductSidebar } from '../components/ProductSidebar';
import { ProductSearch } from '../components/ProductSearch';
import { ProductList } from '../components/ProductList';
import { ContactSection } from '../components/ContactSection';
import { VideoGallery } from '../components/VideoGallery';
import { FAQSection } from '../components/FAQSection';
import { EnquiryModal } from '../components/EnquiryModal';
import { QuickContactBanner } from '../components/QuickContactBanner';
import { siteConfig } from '../data/siteConfig';
import { products, productCategories, sampleVideos } from '../data/products';
import { Product } from '../types/product';
import { Shield, Wind, CheckCircle2 } from 'lucide-react';

export const MosquitoNetProductsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');

  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string | null>(categoryParam);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Enquiry Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState<Product | undefined>(undefined);
  const [modalEnquiryType, setModalEnquiryType] = useState<'quote' | 'callback' | 'measurement' | 'general'>('quote');

  // Sync selectedCategorySlug with URL parameter
  useEffect(() => {
    setSelectedCategorySlug(categoryParam);
  }, [categoryParam]);

  const handleSelectCategory = (slug: string | null) => {
    setIsLoading(true);
    setSelectedCategorySlug(slug);
    if (slug) {
      setSearchParams({ category: slug });
    } else {
      setSearchParams({});
    }
    setTimeout(() => setIsLoading(false), 150);
  };

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    products.forEach((p) => {
      counts[p.categoryId] = (counts[p.categoryId] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered products based on category and search query
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (selectedCategorySlug && product.categoryId !== selectedCategorySlug) {
        return false;
      }

      // Search filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesCategory = product.categoryName.toLowerCase().includes(query);
        const matchesDesc = product.shortDescription.toLowerCase().includes(query);
        const matchesSpecs =
          product.specifications.netType?.toLowerCase().includes(query) ||
          product.specifications.frameMaterial?.toLowerCase().includes(query) ||
          product.specifications.application?.toLowerCase().includes(query);

        return matchesName || matchesCategory || matchesDesc || Boolean(matchesSpecs);
      }

      return true;
    });
  }, [selectedCategorySlug, searchQuery]);

  const activeCategoryObj = useMemo(() => {
    return productCategories.find((c) => c.slug === selectedCategorySlug);
  }, [selectedCategorySlug]);

  const handleOpenQuote = (product: Product) => {
    setModalProduct(product);
    setModalEnquiryType('quote');
    setIsModalOpen(true);
  };

  const handleOpenCallback = (product: Product) => {
    setModalProduct(product);
    setModalEnquiryType('callback');
    setIsModalOpen(true);
  };

  const handleOpenGeneralEnquiry = () => {
    setModalProduct(undefined);
    setModalEnquiryType('quote');
    setIsModalOpen(true);
  };

  return (
    <div className="bg-slate-50/60 min-h-screen pb-16">
      {/* Top Container */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Breadcrumbs */}
        <Breadcrumbs items={siteConfig.pageMeta.breadcrumbs} />

        {/* Page Heading & Dense Introduction Section */}
        <div className="bg-white rounded-xl border border-slate-200/90 p-5 sm:p-7 mb-6 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">
                <Shield className="w-4 h-4" />
                <span>Custom Insect Screen Fabrication & Installation</span>
              </div>
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                {activeCategoryObj ? activeCategoryObj.name : siteConfig.pageMeta.h1}
              </h1>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <button
                onClick={handleOpenGeneralEnquiry}
                className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
              >
                Request Quotation
              </button>
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="px-3.5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors hidden sm:inline-block"
              >
                Call {siteConfig.company.phoneFormatted}
              </a>
            </div>
          </div>

          {/* Intro text covering ventilation, insect protection, and residential/commercial spaces */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600 leading-relaxed">
            <div className="md:col-span-2">
              <p>
                {activeCategoryObj?.description || siteConfig.pageMeta.introParagraph}
              </p>
              <p className="mt-2 text-slate-500">
                All mosquito net door and sliding window solutions are custom-manufactured in our local fabrication unit using genuine architectural 6063-T6 aluminium frames, premium Teflon/nylon rollers, and international-grade insect mesh (SS 304, Phifer fiberglass, or waterproof pleated polypropylene).
              </p>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200/70 space-y-2">
              <span className="font-semibold text-slate-800 text-xs block">
                Why {siteConfig.company.brandName} Screens?
              </span>
              <div className="flex items-start gap-1.5 text-[11px] text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span>100% insect protection without blocking airflow</span>
              </div>
              <div className="flex items-start gap-1.5 text-[11px] text-slate-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span>Custom color-matching to existing door & UPVC frames</span>
              </div>
              <div className="flex items-start gap-1.5 text-[11px] text-slate-600">
                <Wind className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                <span>Free on-site laser measurement in 24 hours</span>
              </div>
            </div>
          </div>

          {/* Quick Page Redirection Links */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="font-semibold text-slate-700">Explore Other Sections:</span>
            <div className="flex flex-wrap items-center gap-2">
              <a href="/" className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-medium">Home</a>
              <a href="/projects" className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-medium">Projects & Photos</a>
              <a href="/gallery" className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-medium">Photo Gallery</a>
              <a href="/services" className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-medium">Installation Services</a>
              <a href="/about" className="px-2.5 py-1 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded font-medium">About Us</a>
              <a href="/contact" className="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded font-medium">Contact Us</a>
            </div>
          </div>
        </div>

        {/* Main Catalogue Layout: 2-Column Desktop (Sidebar + Content), 1-Column Mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
          {/* Left Column: Product Sidebar & Category Navigation */}
          <div className="lg:col-span-1 lg:sticky lg:top-20">
            <ProductSidebar
              categories={productCategories}
              selectedCategorySlug={selectedCategorySlug}
              onSelectCategory={handleSelectCategory}
              categoryCounts={categoryCounts}
              totalProductsCount={products.length}
            />
          </div>

          {/* Right Column: Search + Product Listings */}
          <main className="lg:col-span-3 space-y-5">
            {/* Search and Quick Filters Strip */}
            <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center gap-3 justify-between">
              <div className="w-full sm:max-w-md">
                <ProductSearch
                  value={searchQuery}
                  onChange={setSearchQuery}
                  resultCount={filteredProducts.length}
                  totalCount={products.length}
                />
              </div>

              {selectedCategorySlug && (
                <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-2 text-xs">
                  <span className="text-slate-500">Filter:</span>
                  <button
                    onClick={() => handleSelectCategory(null)}
                    className="text-blue-700 hover:text-blue-900 font-semibold underline text-xs"
                  >
                    Clear Filter
                  </button>
                </div>
              )}
            </div>

            {/* Product Card List */}
            <ProductList
              products={filteredProducts}
              isLoading={isLoading}
              onOpenQuote={handleOpenQuote}
              onOpenCallback={handleOpenCallback}
              onResetFilters={() => {
                handleSelectCategory(null);
                setSearchQuery('');
              }}
            />

            {/* Video Gallery Section */}
            <VideoGallery videos={sampleVideos} />

            {/* Product & Technical FAQs Section */}
            <div className="mt-8 bg-slate-50/70 rounded-2xl border border-slate-200 p-2 sm:p-4">
              <FAQSection
                title="Product FAQs & Technical Inquiries"
                subtitle="Got questions about custom fitments, aluminium gauge, or rat and pet proofing? Read our answers below."
                limit={5}
                showSearch={true}
                showCategoryTabs={true}
                onOpenMeasurement={handleOpenGeneralEnquiry}
              />
            </div>

            {/* Contact and Measurement Section */}
            <ContactSection onOpenEnquiry={handleOpenGeneralEnquiry} className="mt-8" />

            {/* Quick Contact & Cross Page Navigation */}
            <QuickContactBanner
              title="Need Custom Measurements for Your Flat or Villa?"
              subtitle="Our team provides doorstep laser sizing within 2 hours across all Hyderabad locations and Vijayawada."
              onOpenEnquiry={handleOpenGeneralEnquiry}
            />
          </main>
        </div>
      </div>

      {/* Enquiry and Quotation Modal with WhatsApp dispatch */}
      <EnquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={modalProduct?.name || 'Mosquito Net Door and Sliding Net Solutions'}
        productId={modalProduct?.id}
        defaultEnquiryType={modalEnquiryType}
      />
    </div>
  );
};
