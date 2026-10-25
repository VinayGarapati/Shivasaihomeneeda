# Sivasai Home Needs – Phase 2 Asset Replacement & Configuration Guide

This guide provides step-by-step instructions for dropping in real photographs, company logos, videos, address information, and pricing details into **Sivasai Home Needs** during Phase 2 without rewriting any application code.

---

## 1. Directory Structure for Assets

Place all real media files into the `/public/assets/` directory:

```
public/
  assets/
    logo/
      sivasai-logo.png          <-- High-resolution company logo
      og-image.jpg              <-- 1200x630px social share thumbnail
    products/
      hinged-mosquito-net-door.jpg
      balcony-sliding-mosquito-door.jpg
      pleated-mosquito-net-door.jpg
      ss-304-mosquito-door.jpg
      sliding-window-mosquito-net.jpg
      ...
    gallery/
      installation-01.jpg
      installation-02.jpg
    videos/
      sliding-demo.mp4
      pleated-folding-demo.mp4
      video-thumb-01.jpg
```

---

## 2. Recommended Image Specifications & Conventions

| Asset Type | Recommended Resolution | Aspect Ratio | Format | File Size Target |
| :--- | :--- | :--- | :--- | :--- |
| **Product Photos** | 1200 × 900 px | 4:3 | WebP or JPG | $\le 250$ KB |
| **Gallery Showcase** | 1600 × 1200 px | 4:3 | WebP or JPG | $\le 400$ KB |
| **Social OpenGraph** | 1200 × 630 px | 1.91:1 | JPG | $\le 300$ KB |
| **Company Logo** | 400 × 120 px (or vector SVG) | Custom | Transparent PNG / SVG | $\le 80$ KB |
| **Video Files** | 1080p (1920 × 1080) | 16:9 | MP4 (H.264 / AAC) | $\le 15$ MB |

**Naming Convention**: Use lowercase kebab-case (e.g. `balcony-sliding-mosquito-net-door.jpg`). Avoid spaces, capital letters, or special characters.

---

## 3. How to Replace Product Images & Add Multiple Angles

Open `/src/data/products.ts`. Find the target product by its `id` or `slug` and update the `image` and `images[]` fields:

```typescript
{
  id: 'smnd-01',
  slug: 'balcony-sliding-mosquito-net-door-2-track',
  name: 'Balcony 2-Track Sliding Mosquito Net Door',
  // Primary image displayed on cards:
  image: '/assets/products/my-real-balcony-sliding-door.jpg',
  // Multiple photos for carousel and zoom modal:
  images: [
    '/assets/products/my-real-balcony-sliding-door.jpg',
    '/assets/products/balcony-door-track-detail.jpg',
    '/assets/products/balcony-door-nylon-roller.jpg'
  ],
  ...
}
```

> **Note**: The application has an automatic fallback system. If an image path is missing or fails to load, the UI gracefully renders a clean architectural silhouette blueprint without breaking the layout.

---

## 4. How to Update Product Specifications, Prices & Descriptions

All product details are centralized in `/src/data/products.ts`:

- **Change Price**: Set `price: 185` and `priceUnit: '₹/sq ft'` (or set `isPriceOnRequest: true` to hide the figure and show "Price on Request").
- **Edit Specifications**: Update the `specifications` object:
  ```typescript
  specifications: {
    netType: 'SS 304 High-Tensile Wire Mesh',
    frameMaterial: 'Extruded Aluminium 6063-T6 (1.5mm Gauge)',
    frameColour: 'Teak Wood Finish, Charcoal Grey, Pure White',
    meshColour: 'Black',
    doorSystemType: 'Bottom Rolling Sliding System',
    application: 'Living Room Balcony French Doors',
    openingDirection: 'Horizontal Sliding Left or Right',
    availableSizes: 'Custom Made to Millimetre Dimensions',
    installationType: 'Track Mounted / Retrofit onto UPVC Frame'
  }
  ```

---

## 5. How to Add Product Videos

Open `/src/data/products.ts` and populate the `sampleVideos` array:

```typescript
export const sampleVideos: VideoItem[] = [
  {
    id: 'vid-01',
    title: 'Smooth Gliding Action of Balcony Sliding Mosquito Net',
    description: 'Demonstrating silent nylon rollers and magnetic sealing on a 7-foot balcony door.',
    thumbnailUrl: '/assets/videos/video-thumb-01.jpg',
    videoUrl: '/assets/videos/sliding-demo.mp4',
    duration: '0:45'
  }
];
```

> **Note**: If `sampleVideos` is empty `[]`, the video gallery section automatically hides itself completely from the website so no empty slots are visible.

---

## 6. How to Update Business Details, Phone Numbers & Addresses

Open `/src/data/siteConfig.ts` to edit company data:

```typescript
export const siteConfig = {
  company: {
    brandName: 'Sivasai Home Needs',
    phone: '7337308486',
    phoneFormatted: '+91 73373 08486',
    whatsappNumber: '917337308486',
    email: 'contact@sivasaihomeneeds.in',
    addressLine1: 'Your Street Address',
    addressLine2: 'Landmark / Area',
    city: 'Hyderabad',
    state: 'Telangana',
    pincode: '500001',
    workingHours: '9:00 AM – 8:00 PM',
    workingDays: 'Monday to Saturday',
    googleMapsDirectionsUrl: 'https://maps.google.com/?q=...',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?...'
  }
};
```

---

## 7. How WhatsApp Redirection Works

When customers click **"Get Best Quote"** or **"Request Callback"** in the UI, `/src/services/enquiryService.ts` validates:
1. Customer Name (at least 2 characters)
2. Indian Mobile Number (10 digits starting with 6, 7, 8, or 9)
3. Site Location / City

Upon submission, it formats an inquiry message and triggers:
`https://wa.me/917337308486?text=...`

This opens WhatsApp directly with the customer's requirement pre-filled for **Sivasai Home Needs**.
