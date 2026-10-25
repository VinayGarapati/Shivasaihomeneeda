import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const WhatsAppFloatingButton: React.FC = () => {
  const { whatsappNumber, phone, phoneFormatted } = siteConfig.company;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Shiva%20Sai%20Home%20Needs%2C%20I%20would%20like%20to%20get%20a%20free%20quotation%20and%20doorstep%20measurement%20for%20mosquito%20nets.`;

  return (
    <aside
      aria-label="Direct Floating Contact Actions"
      className="fixed bottom-5 right-4 sm:right-6 z-40 print:hidden flex flex-col items-end gap-2.5"
    >
      {/* Floating Call Button */}
      <a
        href={`tel:${phone}`}
        aria-label={`Call Shiva Sai Home Needs at ${phoneFormatted}`}
        className="flex items-center gap-2 px-3.5 py-2.5 bg-[#004AAD] hover:bg-blue-800 active:bg-blue-900 text-white rounded-full shadow-lg hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <Phone className="w-4 h-4 fill-current group-hover:rotate-12 transition-transform" />
        </div>
        <span className="text-xs font-bold hidden sm:inline whitespace-nowrap">
          Call: {phoneFormatted}
        </span>
      </a>

      {/* Floating WhatsApp Button with pulse ring */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Shiva Sai Home Needs"
        className="relative flex items-center gap-2 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da851] text-white rounded-full shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-0.5 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none group-hover:opacity-0" />
        
        <div className="w-5 h-5 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 fill-current" />
        </div>
        <span className="text-xs font-extrabold tracking-wide hidden sm:inline whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>
    </aside>
  );
};
