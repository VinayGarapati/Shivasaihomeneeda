import React, { useState, useEffect } from 'react';
import { X, Phone, MessageSquare, Clock, CheckCircle2, Ruler, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { AnimatedCheckmark } from './AnimatedCheckmark';

interface TimedContactPopupProps {
  onOpenEnquiryModal: () => void;
}

export const TimedContactPopup: React.FC<TimedContactPopupProps> = ({ onOpenEnquiryModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [phoneInput, setPhoneInput] = useState('');
  const [serviceNeeded, setServiceNeeded] = useState('Mosquito Net Doors');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    // Check if dismissed permanently for this session
    const isDismissed = sessionStorage.getItem('shivasai_popup_dismissed') === 'true';
    if (isDismissed) return;

    // Trigger every 1 minute (60,000 ms) as requested by user
    const interval = setInterval(() => {
      const alreadyDismissed = sessionStorage.getItem('shivasai_popup_dismissed') === 'true';
      if (!alreadyDismissed) {
        setIsOpen(true);
      }
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    if (dontShowAgain) {
      sessionStorage.setItem('shivasai_popup_dismissed', 'true');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneInput.trim()) return;

    setIsSubmitted(true);
    // Open WhatsApp with direct prefilled lead
    const message = encodeURIComponent(
      `Hello Shiva Sai Home Needs! I am looking for ${serviceNeeded}. My contact phone number is: ${phoneInput.trim()}. Please schedule a free doorstep measurement.`
    );
    setTimeout(() => {
      window.open(`https://wa.me/${siteConfig.company.whatsappNumber}?text=${message}`, '_blank');
      sessionStorage.setItem('shivasai_popup_dismissed', 'true');
      setIsOpen(false);
    }, 1200);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/65 backdrop-blur-xs animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border-2 border-blue-100 overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prominent Exit Sign / Close Button as explicitly requested by user */}
        <button
          onClick={handleClose}
          className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-slate-100 hover:bg-red-50 text-slate-500 hover:text-red-600 flex items-center justify-center border border-slate-200 transition-colors shadow-xs"
          aria-label="Exit contact pop up"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Top Header Banner with Brand Colors */}
        <div className="bg-gradient-to-r from-[#004AAD] via-[#0A3E8A] to-[#00AEEF] p-6 text-white text-center relative overflow-hidden">
          <div className="flex items-center justify-center mb-2">
            <img 
              src="/assets/logo/shivasai-brand-full.png" 
              alt="Shiva Sai Home Needs" 
              className="h-16 w-auto max-w-[240px] object-contain bg-white/95 rounded-xl p-1.5 shadow-md"
            />
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#F58220] text-white rounded-full text-xs font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Free Doorstep Measurement in Hyderabad & AP</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold mt-2 tracking-tight">
            Need Expert Advice or Instant Free Quote?
          </h3>
          <p className="text-xs text-blue-100 mt-1 max-w-xs mx-auto">
            Our technician will visit your home within 2-4 hours with demo samples of all frames and meshes.
          </p>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-4">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-3">
              <div className="flex justify-center">
                <AnimatedCheckmark size={64} />
              </div>
              <h4 className="text-base font-bold text-slate-900">Request Sent Successfully!</h4>
              <p className="text-xs text-slate-600">
                Opening WhatsApp with your inquiry for Shiva Sai Home Needs. Thank you!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-50/70 border border-blue-100">
                  <Ruler className="w-4 h-4 text-[#004AAD] shrink-0" />
                  <span>Free Laser Sizing</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-orange-50/70 border border-orange-100">
                  <Clock className="w-4 h-4 text-[#F58220] shrink-0" />
                  <span>Same-Day Sizing</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Select Product You Need:
                </label>
                <select
                  value={serviceNeeded}
                  onChange={(e) => setServiceNeeded(e.target.value)}
                  className="w-full text-xs font-medium p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:border-[#004AAD] focus:outline-none"
                >
                  <option value="Mosquito Net Doors">Mosquito Net Doors (Hinged & Openable)</option>
                  <option value="Balcony Sliding Mosquito Net">Balcony 2-Track & 3-Track Sliding Net</option>
                  <option value="Barrier-Free Pleated Net">Barrier-Free Pleated Mesh Accordion Screen</option>
                  <option value="UPVC Sliding Window Mesh">UPVC Window Sliding Mesh Shutter</option>
                  <option value="Stainless Steel SS 304 Pet Door">Stainless Steel SS 304 Pet & Security Door</option>
                  <option value="Ceiling Cloth Drying Hanger">Ceiling Cloth Drying Pulley Hanger</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Your Mobile Number:
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    required
                    placeholder="Enter 10-digit mobile number"
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    className="w-full text-sm font-semibold p-2.5 pl-9 rounded-xl border border-slate-300 focus:border-[#004AAD] focus:outline-none"
                  />
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <button
                  type="submit"
                  className="flex-1 py-3 px-4 bg-[#004AAD] hover:bg-blue-800 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover-lift transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-[#00AEEF]" />
                  <span>Get Quote on WhatsApp</span>
                </button>

                <a
                  href={`tel:${siteConfig.company.phone}`}
                  className="py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md hover-lift transition-all flex items-center justify-center gap-2 shrink-0"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Directly</span>
                </a>
              </div>

              {/* Checkbox: Don't show again */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-[11px] text-slate-500">
                <label className="flex items-center gap-1.5 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={dontShowAgain}
                    onChange={(e) => setDontShowAgain(e.target.checked)}
                    className="rounded text-[#004AAD] focus:ring-0 w-3.5 h-3.5"
                  />
                  <span>Don't show again this session</span>
                </label>
                <button
                  type="button"
                  onClick={handleClose}
                  className="text-slate-400 hover:text-slate-700 font-medium"
                >
                  Exit / Close
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
