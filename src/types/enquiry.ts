export interface EnquiryFormData {
  productId?: string;
  productName: string;
  enquiryType: 'quote' | 'callback' | 'general' | 'measurement';
  name: string;
  mobile: string;
  email?: string;
  location: string;
  dimensionEstimate?: string;
  message?: string;
}

export interface EnquirySubmissionResult {
  success: boolean;
  message: string;
  whatsappUrl?: string;
  referenceId?: string;
}
