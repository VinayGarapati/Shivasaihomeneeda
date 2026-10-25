import { EnquiryFormData, EnquirySubmissionResult } from '../types/enquiry';
import { siteConfig } from '../data/siteConfig';

/**
 * Validates Indian 10-digit mobile number starting with 6, 7, 8, or 9
 */
export function validateIndianMobile(mobile: string): boolean {
  const cleaned = mobile.replace(/[\s\-+]/g, '');
  // Matches standard 10 digit Indian mobile numbers (e.g. 7337308486 or 917337308486)
  if (cleaned.length === 10) {
    return /^[6-9]\d{9}$/.test(cleaned);
  }
  if (cleaned.length === 12 && cleaned.startsWith('91')) {
    return /^91[6-9]\d{9}$/.test(cleaned);
  }
  return false;
}

/**
 * Builds the pre-filled WhatsApp click-to-chat redirection URL
 */
export function generateWhatsAppUrl(data: EnquiryFormData): string {
  const targetNumber = siteConfig.company.whatsappNumber || '917337308486';
  
  const typeMap: Record<string, string> = {
    quote: 'Quotation Request',
    callback: 'Request Callback',
    measurement: 'Site Measurement Booking',
    general: 'General Enquiry'
  };

  const enquiryLabel = typeMap[data.enquiryType] || 'Product Enquiry';

  const lines = [
    `*Enquiry for ${siteConfig.company.brandName}*`,
    `--------------------------------`,
    `*Requirement:* ${enquiryLabel}`,
    `*Product:* ${data.productName || 'Mosquito Net Door / Window Solution'}`,
    `*Customer Name:* ${data.name.trim()}`,
    `*Contact Mobile:* ${data.mobile.trim()}`,
    data.location ? `*Site Location:* ${data.location.trim()}` : null,
    data.dimensionEstimate ? `*Approx Dimensions:* ${data.dimensionEstimate.trim()}` : null,
    data.message ? `*Notes:* ${data.message.trim()}` : null,
    `--------------------------------`,
    `Please share the best quote and estimated installation schedule.`
  ].filter(Boolean);

  const text = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${targetNumber}?text=${text}`;
}

/**
 * Mock Isolated Enquiry Handler with simulated latency.
 * Records the lead locally in sessionStorage/localStorage for demo review
 * and returns the generated WhatsApp redirection URL.
 */
export async function submitEnquiry(data: EnquiryFormData): Promise<EnquirySubmissionResult> {
  // Simulate network latency (400ms - 800ms)
  await new Promise((resolve) => setTimeout(resolve, 600));

  // Validation checks
  if (!data.name || data.name.trim().length < 2) {
    throw new Error('Please enter your full name (minimum 2 characters).');
  }

  if (!validateIndianMobile(data.mobile)) {
    throw new Error('Please enter a valid 10-digit Indian mobile number (e.g., 7337308486).');
  }

  if (!data.location || data.location.trim().length < 2) {
    throw new Error('Please specify your city or locality for installation service.');
  }

  if (data.email && data.email.trim().length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email.trim())) {
      throw new Error('Please enter a valid email address or leave it blank.');
    }
  }

  const referenceId = `SSH-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
  const whatsappUrl = generateWhatsAppUrl(data);

  // Store in browser storage for demo inspectability
  try {
    const existing = JSON.parse(sessionStorage.getItem('sivasai_enquiries') || '[]');
    existing.unshift({
      ...data,
      referenceId,
      submittedAt: new Date().toISOString()
    });
    sessionStorage.setItem('sivasai_enquiries', JSON.stringify(existing));
  } catch (err) {
    console.warn('Session storage write skipped', err);
  }

  return {
    success: true,
    message: `Enquiry validated successfully! Redirecting you to WhatsApp to connect with ${siteConfig.company.brandName}...`,
    whatsappUrl,
    referenceId
  };
}
