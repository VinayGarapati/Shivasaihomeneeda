import React, { useState, useMemo } from 'react';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { faqsData, faqCategories, FAQItem } from '../data/faqs';
import { siteConfig } from '../data/siteConfig';

interface FAQSectionProps {
  initialCategory?: string;
  limit?: number;
  showSearch?: boolean;
  showCategoryTabs?: boolean;
  showContactCTA?: boolean;
  onOpenMeasurement?: () => void;
  title?: string;
  subtitle?: string;
  className?: string;
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  initialCategory = 'all',
  limit,
  showSearch = true,
  showCategoryTabs = true,
  showContactCTA = true,
  onOpenMeasurement,
  title = 'Frequently Asked Questions',
  subtitle = 'Find clear answers about mosquito net door types, sliding systems, SS 304 wire mesh, ceiling cloth hangers, pricing per sq. ft, and our free doorstep measurement visit.',
  className = ''
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-01': true,
    'faq-08': true,
    'faq-11': true
  });

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFaqs = useMemo(() => {
    let list = faqsData;

    if (selectedCategory !== 'all') {
      list = list.filter((item) => item.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (item) =>
          item.question.toLowerCase().includes(q) ||
          item.answer.toLowerCase().includes(q) ||
          item.categoryLabel.toLowerCase().includes(q) ||
          (item.tags && item.tags.some((tag) => tag.toLowerCase().includes(q)))
      );
    }

    if (limit && limit > 0) {
      return list.slice(0, limit);
    }

    return list;
  }, [selectedCategory, searchQuery, limit]);

  return (
    <section className={`py-12 sm:py-16 ${className}`} id="faqs">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold border border-blue-200/60 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            {title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Search Bar & Category Navigation */}
        <div className="max-w-3xl mx-auto mb-8 space-y-4">
          {showSearch && (
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search any question (e.g. price per sq ft, pets, rat proof, cleaning, pleated)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-xl shadow-xs focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all placeholder:text-slate-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 p-1"
                >
                  Clear
                </button>
              )}
            </div>
          )}

          {showCategoryTabs && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none text-xs">
              {faqCategories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-full font-medium whitespace-nowrap transition-colors shrink-0 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* FAQs Accordion List */}
        <div className="max-w-3xl mx-auto space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-10 px-4 bg-slate-50 rounded-xl border border-dashed border-slate-300">
              <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-slate-700">No matching questions found</p>
              <p className="text-xs text-slate-500 mt-1">
                Try searching with different terms, or reach out to our team directly on WhatsApp.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="mt-3 px-3.5 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700"
              >
                Reset Search
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openIds[faq.id];
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-slate-200/90 shadow-2xs overflow-hidden transition-all hover:border-slate-300"
                >
                  <button
                    onClick={() => toggleAccordion(faq.id)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left gap-4 hover:bg-slate-50/70 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-900 leading-snug">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/40">
                      <p className="whitespace-pre-line">{faq.answer}</p>
                      <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100/80 text-[11px] text-slate-400">
                        <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-600 font-medium">
                          {faq.categoryLabel}
                        </span>
                        <a
                          href={`https://wa.me/917337308486?text=${encodeURIComponent(
                            `Hi Shiva Sai Home Needs, I have a question regarding: "${faq.question}"`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center gap-1 hover:underline"
                        >
                          <MessageSquare className="w-3 h-3" />
                          <span>Ask on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

        {/* Bottom Help & Free Measurement Banner */}
        {showContactCTA && (
          <div className="max-w-3xl mx-auto mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-900 via-slate-900 to-blue-950 text-white shadow-lg border border-blue-800/40">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center sm:text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Personal Consultation</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  Still have questions about your doors or windows?
                </h3>
                <p className="text-xs text-slate-300 max-w-md">
                  Book a free laser measurement visit at your residence. Our technician will bring frame samples and fabric swatches.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                {onOpenMeasurement && (
                  <button
                    onClick={onOpenMeasurement}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                  >
                    <span>Book Free Visit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}

                <a
                  href={`https://wa.me/917337308486?text=${encodeURIComponent(
                    'Hi Shiva Sai Home Needs, I would like to inquire about mosquito net doors and schedule a free doorstep measurement.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>WhatsApp +91 7337308486</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
