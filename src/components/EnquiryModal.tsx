import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Phone, MessageSquare, AlertCircle, CheckCircle2, ExternalLink } from 'lucide-react';
import { EnquiryFormData } from '../types/enquiry';
import { submitEnquiry, validateIndianMobile } from '../services/enquiryService';
import { siteConfig } from '../data/siteConfig';
import { AnimatedCheckmark } from './AnimatedCheckmark';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  productId?: string;
  defaultEnquiryType?: 'quote' | 'callback' | 'measurement' | 'general';
  triggerElement?: HTMLElement | null;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  productName = 'Mosquito Net Door and Sliding Mesh Solutions',
  productId,
  defaultEnquiryType = 'quote',
  triggerElement
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    productName,
    productId,
    enquiryType: defaultEnquiryType,
    name: '',
    mobile: '',
    email: '',
    location: '',
    dimensionEstimate: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    whatsappUrl?: string;
    referenceId?: string;
    message?: string;
  } | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  // Sync default values when modal opens
  useEffect(() => {
    if (isOpen) {
      setFormData({
        productName,
        productId,
        enquiryType: defaultEnquiryType,
        name: '',
        mobile: '',
        email: '',
        location: '',
        dimensionEstimate: '',
        message: ''
      });
      setErrors({});
      setSubmissionResult(null);
      setIsSubmitting(false);

      // Focus first input after animation
      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 50);
    } else if (triggerElement) {
      triggerElement.focus();
    }
  }, [isOpen, productName, productId, defaultEnquiryType, triggerElement]);

  // Handle ESC key and focus trapping
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }

      // Simple focus trap
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please provide your full name (at least 2 letters).';
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Mobile number is required.';
    } else if (!validateIndianMobile(formData.mobile)) {
      newErrors.mobile = 'Enter a valid 10-digit Indian mobile number (e.g., 7337308486).';
    }

    if (formData.email && formData.email.trim().length > 0) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Enter a valid email address or leave blank.';
      }
    }

    if (!formData.location.trim()) {
      newErrors.location = 'Please provide your city / area for quotation.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const result = await submitEnquiry(formData);
      setSubmissionResult(result);

      // Auto trigger WhatsApp redirect in new tab after 800ms
      if (result.whatsappUrl) {
        setTimeout(() => {
          window.open(result.whatsappUrl, '_blank', 'noopener,noreferrer');
        }, 1200);
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setErrors({ form: message });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8"
      >
        {/* Header */}
        <div className="bg-slate-900 text-white px-5 py-4 flex items-center justify-between border-b border-slate-800">
          <div>
            <span className="text-xs uppercase tracking-wider font-semibold text-blue-400">
              Sivasai Home Needs
            </span>
            <h2 id="enquiry-modal-title" className="text-base font-bold text-white mt-0.5">
              {formData.enquiryType === 'quote'
                ? 'Get Best Quotation'
                : formData.enquiryType === 'measurement'
                ? 'Book Free Site Measurement'
                : 'Request Callback'}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visible Demo Mode Notice (Required by prompt) */}
        <div className="bg-amber-50 px-4 py-2 border-b border-amber-200 text-amber-900 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>
            <strong>Demo mode:</strong> Enquiries redirect directly to WhatsApp ({siteConfig.company.phoneFormatted}) for quotation.
          </span>
        </div>

        {submissionResult?.success ? (
          /* Success Screen */
          <div className="p-6 text-center space-y-4">
            <div className="flex justify-center py-2">
              <AnimatedCheckmark size={68} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">Enquiry Successfully Sent!</h3>
              <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                Reference ID: <strong className="font-mono text-slate-800">{submissionResult.referenceId}</strong>
              </p>
              <p className="text-xs text-slate-600 mt-2">
                We are opening WhatsApp with your pre-filled inquiry details for{' '}
                <strong className="text-slate-900">{siteConfig.company.brandName}</strong> ({siteConfig.company.phoneFormatted}).
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              {submissionResult.whatsappUrl && (
                <a
                  href={submissionResult.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium text-xs shadow-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Open WhatsApp Chat
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-medium transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* Form Screen */
          <form onSubmit={handleSubmit} className="p-5 space-y-4">
            {errors.form && (
              <div className="p-3 bg-red-50 text-red-700 text-xs rounded-lg border border-red-200">
                {errors.form}
              </div>
            )}

            {/* Pre-filled Product Name (read-only) */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Selected Product / Category
              </label>
              <input
                type="text"
                readOnly
                value={formData.productName}
                className="w-full px-3 py-2 text-xs bg-slate-100 text-slate-700 border border-slate-300 rounded-lg cursor-not-allowed font-medium"
              />
            </div>

            {/* Grid for Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="enquiry-name" className="block text-xs font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  ref={nameInputRef}
                  id="enquiry-name"
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-3 py-2 text-xs border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.name
                      ? 'border-red-400 focus:ring-red-200 bg-red-50/30'
                      : 'border-slate-300 focus:border-blue-500 focus:ring-blue-100'
                  }`}
                />
                {errors.name && <p className="text-[11px] text-red-600 mt-0.5">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="enquiry-mobile" className="block text-xs font-semibold text-slate-700 mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-500 font-mono">
                    +91
                  </span>
                  <input
                    id="enquiry-mobile"
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="7337308486"
                    value={formData.mobile}
                    onChange={(e) =>
                      setFormData({ ...formData, mobile: e.target.value.replace(/\D/g, '') })
                    }
                    className={`w-full pl-10 pr-3 py-2 text-xs font-mono border rounded-lg focus:outline-none focus:ring-2 ${
                      errors.mobile
                        ? 'border-red-400 focus:ring-red-200 bg-red-50/30'
                        : 'border-slate-300 focus:border-blue-500 focus:ring-blue-100'
                    }`}
                  />
                </div>
                {errors.mobile && <p className="text-[11px] text-red-600 mt-0.5">{errors.mobile}</p>}
              </div>
            </div>

            {/* Grid for Location & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="enquiry-location" className="block text-xs font-semibold text-slate-700 mb-1">
                  Installation City / Area <span className="text-red-500">*</span>
                </label>
                <input
                  id="enquiry-location"
                  type="text"
                  required
                  placeholder="e.g. Hyderabad / Vijayawada"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className={`w-full px-3 py-2 text-xs border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.location
                      ? 'border-red-400 focus:ring-red-200 bg-red-50/30'
                      : 'border-slate-300 focus:border-blue-500 focus:ring-blue-100'
                  }`}
                />
                {errors.location && <p className="text-[11px] text-red-600 mt-0.5">{errors.location}</p>}
              </div>

              <div>
                <label htmlFor="enquiry-email" className="block text-xs font-semibold text-slate-700 mb-1">
                  Email ID <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  id="enquiry-email"
                  type="email"
                  placeholder="ramesh@example.com"
                  value={formData.email || ''}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-3 py-2 text-xs border rounded-lg focus:outline-none focus:ring-2 ${
                    errors.email
                      ? 'border-red-400 focus:ring-red-200'
                      : 'border-slate-300 focus:border-blue-500 focus:ring-blue-100'
                  }`}
                />
                {errors.email && <p className="text-[11px] text-red-600 mt-0.5">{errors.email}</p>}
              </div>
            </div>

            {/* Dimensions (Optional) */}
            <div>
              <label htmlFor="enquiry-dimensions" className="block text-xs font-semibold text-slate-700 mb-1">
                Approximate Dimensions / Quantity <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                id="enquiry-dimensions"
                type="text"
                placeholder="e.g. 2 Balcony Doors (7x5 ft), 3 Windows"
                value={formData.dimensionEstimate || ''}
                onChange={(e) => setFormData({ ...formData, dimensionEstimate: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-blue-100"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="enquiry-message" className="block text-xs font-semibold text-slate-700 mb-1">
                Special Requirements or Questions <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <textarea
                id="enquiry-message"
                rows={2}
                placeholder="Need pet-proof SS mesh, sliding track installation schedule, etc."
                value={formData.message || ''}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:border-blue-500 focus:ring-blue-100 resize-none"
              />
            </div>

            {/* Direct Call Quick Action */}
            <div className="pt-1 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-blue-600" />
                Prefer calling directly?
              </span>
              <a
                href={`tel:${siteConfig.company.phone}`}
                className="font-semibold text-blue-600 hover:text-blue-800"
              >
                {siteConfig.company.phoneFormatted}
              </a>
            </div>

            {/* Submit Action */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg shadow-sm transition-colors"
              >
                {isSubmitting ? (
                  <span>Preparing WhatsApp...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send & Connect via WhatsApp</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
