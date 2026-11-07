import healthcareImage from '../assets/imagesNew/medical_scrubs_1790789190061.jpg';
import tshirtImage from '../assets/imagesNew/custom_round_neck_tshirt_1790789294109.jpg';
import corporateImage from '../assets/imagesNew/corporate_wear_1790789389721.jpg';
import casualImage from '../assets/Products/product-7.jpg';
import medicalScrubsImage from '../assets/imagesNew/medical_scrubs_1790789190061.jpg';
import doctorUniformImage from '../assets/imagesNew/doctor_uniform_1790789204052.jpg';
import nurseUniformImage from '../assets/imagesNew/nurse_uniform_1790789218055.jpg';
import hospitalStaffImage from '../assets/imagesNew/hospital_staff_uniform_1790789243719.jpg';
import hospitalAccessoriesImage from '../assets/imagesNew/hospital_accessories_1790789280700.jpg';
import customRoundNeckImage from '../assets/imagesNew/custom_round_neck_tshirt_1790789294109.jpg';
import customPoloImage from '../assets/imagesNew/custom_polo_tshirt_1790789307515.jpg';
import corporateTshirtImage from '../assets/imagesNew/corporate_tshirt_1790789321404.jpg';
import promotionalTshirtImage from '../assets/imagesNew/promotional_tshirt_1790789334918.jpg';
import eventTeamImage from '../assets/imagesNew/event_team_tshirt_1790789352065.jpg';
import corporateWearImage from '../assets/imagesNew/corporate_wear_1790789389721.jpg';

const productImageMap = {
  'medical-scrubs': medicalScrubsImage,
  'doctor-uniforms': doctorUniformImage,
  'nurse-uniforms': nurseUniformImage,
  'ward-boy-hospital-staff-uniforms': hospitalStaffImage,
  'patient-wear': hospitalAccessoriesImage,
  'hospital-accessories': hospitalAccessoriesImage,
  'custom-round-neck-t-shirts': customRoundNeckImage,
  'custom-polo-t-shirts': customPoloImage,
  'corporate-t-shirts': corporateTshirtImage,
  'promotional-t-shirts': promotionalTshirtImage,
  'event-team-t-shirts': eventTeamImage,
  'corporate-wear': corporateWearImage,
  workwear: corporateWearImage,
  'security-uniforms': hospitalStaffImage,
  'institutional-uniforms': corporateWearImage,
  'hospitality-uniforms': hospitalAccessoriesImage,
  't-shirts': customRoundNeckImage,
  'hoodies-sweatshirts': customPoloImage,
  joggers: eventTeamImage,
  kidswear: promotionalTshirtImage,
  'private-label-collections': eventTeamImage,
  'custom-designs-fabrics-colors': corporateTshirtImage,
  'custom-branding-packaging': hospitalAccessoriesImage,
};

const productDetails = {
  'ward-boy-hospital-staff-uniforms': {
    detailTitle: 'Hospital Staff Uniforms, built for practical everyday work.',
    detailIntro: [
      'We develop and manufacture uniforms for ward boys, attendants, housekeeping teams and hospital support staff across healthcare institutions.',
      'From durable fabrics and department colour coding to practical fits, pockets and branding, every uniform can be developed around your operational requirements.',
    ],
    detailSections: [
      { title: 'What we offer', items: ['Ward boy uniforms', 'Hospital attendant uniforms', 'Housekeeping and support staff uniforms', 'Coordinated shirts and trousers', 'Department-specific uniform programmes', 'Custom-designed hospital workwear'] },
      { title: 'Customization options', items: ['Fabric composition and GSM selection', 'Department colours and size ranges', 'Pocket and utility details', 'Fit, stitching and garment finishing', 'Embroidery, printing and identification', 'Labels, packaging and bulk production'] },
    ],
  },
  'patient-wear': {
    detailTitle: 'Patient Wear, designed for comfort and ease of care.',
    detailIntro: [
      'We develop and manufacture patient garments designed for hospitals, clinics, nursing homes and healthcare institutions.',
      'From soft fabric selection and accessible garment construction to sizing, closures and branding, we create patient wear around your care environment.',
    ],
    detailSections: [
      { title: 'What we offer', items: ['Patient gowns and hospital gowns', 'Patient shirts and trousers', 'Maternity and examination wear', 'Recovery and nursing home garments', 'Coordinated patient clothing ranges', 'Custom-designed patient wear'] },
      { title: 'Customization options', items: ['Fabric composition and GSM selection', 'Colours and size grading', 'Front, back and side opening options', 'Fastenings, ties and closure details', 'Logo, labels and institutional branding', 'Packaging and bulk production'] },
    ],
  },
  'hospital-accessories': {
    detailTitle: 'Hospital Accessories, developed for healthcare environments.',
    detailIntro: [
      'We develop and manufacture supporting textile accessories for hospitals, clinics, laboratories and healthcare institutions.',
      'Each item can be coordinated with your uniform programme through selected fabrics, colours, dimensions, finishing and branding.',
    ],
    detailSections: [
      { title: 'What we offer', items: ['Medical aprons and overalls', 'Caps, head covers and shoe covers', 'Patient and staff textile accessories', 'Laundry and utility textile products', 'Coordinated healthcare accessories', 'Custom-designed textile solutions'] },
      { title: 'Customization options', items: ['Fabric composition and GSM selection', 'Colour and size customization', 'Dimensions and construction details', 'Fastening and functional variations', 'Embroidery, printing and logo branding', 'Labels, packaging and bulk production'] },
    ],
  },
  'custom-round-neck-t-shirts': {
    detailTitle: 'Custom Round-Neck T-Shirts, developed for your brand.',
    detailIntro: [
      'We develop and manufacture round-neck T-shirts for brands, businesses, events and promotional programmes.',
      'From knit selection and garment weight to fit, artwork placement and finishing, every detail can be developed around your brief.',
    ],
    detailSections: [
      { title: 'What we offer', items: ['Regular and oversized T-shirts', 'Cotton and blended knit options', 'Men’s, women’s and unisex fits', 'Corporate and promotional T-shirts', 'Custom colour programmes', 'Bulk T-shirt production'] },
      { title: 'Customization options', items: ['Fabric composition and GSM selection', 'Colour and size range development', 'Neck rib, sleeve and hem details', 'Print, embroidery and artwork placement', 'Custom labels and branded trims', 'Packaging and export fulfillment'] },
    ],
  },
  'custom-polo-t-shirts': {
    detailTitle: 'Custom Polo T-Shirts, made for a consistent brand presence.',
    detailIntro: [
      'We develop and manufacture polo shirts for corporate teams, institutions, hospitality groups and promotional programmes.',
      'From fabric and collar construction to fit, colour, embroidery and branded trims, each polo can be developed to your requirements.',
    ],
    detailSections: [
      { title: 'What we offer', items: ['Corporate polo shirts', 'Promotional and event polos', 'Pique and jersey polo options', 'Men’s, women’s and unisex fits', 'Long- and short-sleeve polos', 'Coordinated team polo programmes'] },
      { title: 'Customization options', items: ['Fabric composition and GSM selection', 'Colour and size customization', 'Collar, cuff and placket variations', 'Embroidery, printing and logo placement', 'Labels, buttons and branded trims', 'Packaging and bulk production'] },
    ],
  },
  'corporate-t-shirts': {
    detailTitle: 'Corporate T-Shirts, designed for your team and brand.',
    detailIntro: [
      'We develop and manufacture corporate T-shirts for companies, teams and everyday brand wear.',
      'We coordinate fabric, colour, fit, sizing and logo application to create a consistent apparel programme for your organization.',
    ],
    detailSections: [
      { title: 'What we offer', items: ['Employee and team T-shirts', 'Corporate round-neck and polo styles', 'Men’s, women’s and unisex fits', 'Department and role-based colours', 'Event and internal campaign apparel', 'Repeatable corporate uniform programmes'] },
      { title: 'Customization options', items: ['Fabric composition and GSM selection', 'Brand colours and size ranges', 'Fit, neckline and sleeve variations', 'Embroidery, printing and logo branding', 'Custom labels and packaging', 'Replenishment and bulk production'] },
    ],
  },
  'promotional-t-shirts': {
    detailTitle: 'Promotional T-Shirts, created to make your campaign visible.',
    detailIntro: [
      'We develop and manufacture promotional T-shirts for campaigns, launches, activations and marketing programmes.',
      'From garment selection and artwork placement to colour, sizing and delivery quantities, we work around your campaign brief.',
    ],
    detailSections: [
      { title: 'What we offer', items: ['Campaign and promotional T-shirts', 'Event and activation apparel', 'Staff and brand ambassador T-shirts', 'Printed and embroidered styles', 'Multi-colour promotional ranges', 'Bulk campaign production'] },
      { title: 'Customization options', items: ['Fabric composition and GSM selection', 'Campaign colours and size mix', 'Print technique and artwork placement', 'Neck, sleeve and fit variations', 'Labels, tags and branded packaging', 'Quantity planning and delivery schedules'] },
    ],
  },
  'event-team-t-shirts': {
    detailTitle: 'Event & Team T-Shirts, coordinated for every occasion.',
    detailIntro: [
      'We develop and manufacture matching T-shirts for events, sports teams, teams and group activities.',
      'We coordinate colours, graphics, names, numbers, sizes and finishing so your group has a consistent, recognizable look.',
    ],
    detailSections: [
      { title: 'What we offer', items: ['Event and volunteer T-shirts', 'Sports and activity team apparel', 'Staff and crew T-shirts', 'Group and celebration T-shirts', 'Name and number personalization', 'Coordinated team collections'] },
      { title: 'Customization options', items: ['Fabric composition and GSM selection', 'Team colours and size ranges', 'Graphics, names and number placement', 'Print, embroidery and finishing options', 'Custom labels and packaging', 'Quantity and event delivery planning'] },
    ],
  },
  'corporate-wear': {
    detailTitle: 'Corporate Wear, developed for a professional everyday look.',
    detailIntro: [
      'We develop and manufacture corporate apparel for companies, teams and customer-facing professionals.',
      'From fabric and fit to coordinated colours, garment details and logo application, we create corporate wear around your brand identity.',
    ],
    detailSections: [
      { title: 'What we offer', items: ['Corporate shirts and tops', 'Polos and coordinated T-shirts', 'Formal and smart-casual apparel', 'Team and department uniforms', 'Men’s and women’s corporate fits', 'Complete corporate clothing programmes'] },
      { title: 'Customization options', items: ['Fabric composition and GSM selection', 'Brand colours and size grading', 'Collar, cuff and fit variations', 'Embroidery, printing and logo branding', 'Labels, trims and packaging', 'Repeat orders and bulk production'] },
    ],
  },
  workwear: {
    detailTitle: 'Workwear, designed around the way your teams work.',
    detailIntro: [
      'We develop and manufacture practical workwear for industrial, commercial and service teams.',
      'We combine suitable fabrics, functional construction, role-based sizing and branding to create workwear suited to your workplace.',
    ],
    detailSections: [
      { title: 'What we offer', items: ['Work shirts and trousers', 'Overalls and coveralls', 'Utility and site workwear', 'Role-based team uniforms', 'Lightweight and durable workwear', 'Custom-designed workwear programmes'] },
      { title: 'Customization options', items: ['Fabric composition and GSM selection', 'Colour and size range development', 'Pockets, closures and utility details', 'Fit, stitching and reinforcement options', 'Embroidery, printing and identification', 'Labels, packaging and bulk production'] },
    ],
  },
  'security-uniforms': {
    detailTitle: 'Security Uniforms, built for a clear and professional presence.',
    detailIntro: [
      'We develop and manufacture security uniforms for security agencies, facilities, institutions and corporate teams.',
      'From durable fabrics and functional pockets to insignia, colour and fit, each uniform is developed around your operational requirements.',
    ],
    detailSections: [
      { title: 'What we offer', items: ['Security shirts and trousers', 'Security guard uniform sets', 'Blazers, jackets and outerwear', 'Day and night duty uniforms', 'Role and rank-based uniform programmes', 'Custom security apparel'] },
      { title: 'Customization options', items: ['Fabric composition and GSM selection', 'Colour, size and fit customization', 'Pocket, button and closure details', 'Badges, insignia and name tapes', 'Embroidery, printing and logo branding', 'Labels, packaging and bulk production'] },
    ],
  },
  'institutional-uniforms': {
    detailTitle: 'Institutional Uniforms, coordinated for every department.',
    detailIntro: [
      'We develop and manufacture uniforms for schools, institutions, organizations and multi-department teams.',
      'We coordinate styles, fabrics, colours, sizing and branding to support a consistent appearance across your institution.',
    ],
    detailSections: [
      { title: 'What we offer', items: ['Staff and administration uniforms', 'Department-specific uniforms', 'Formal and casual uniform styles', 'Shirts, trousers, skirts and dresses', 'Coordinated institutional apparel', 'Custom-designed uniform programmes'] },
      { title: 'Customization options', items: ['Fabric composition and GSM selection', 'Institution colours and size ranges', 'Fit, collar, sleeve and pocket details', 'Embroidery, printing and logo branding', 'Labels, packaging and size sorting', 'Bulk production and repeat ordering'] },
    ],
  },
  'hospitality-uniforms': {
    detailTitle: 'Hospitality Uniforms, designed for service and presentation.',
    detailIntro: [
      'We develop and manufacture hospitality uniforms for hotels, restaurants, cafes and service teams.',
      'From guest-facing presentation to operational comfort, we develop fabrics, fits, colours and branding around your service environment.',
    ],
    detailSections: [
      { title: 'What we offer', items: ['Hotel and restaurant uniforms', 'Chef coats and kitchen uniforms', 'Front office and housekeeping uniforms', 'Service shirts, polos and trousers', 'Coordinated staff uniform collections', 'Custom hospitality apparel'] },
      { title: 'Customization options', items: ['Fabric composition and GSM selection', 'Brand colours and size grading', 'Collar, cuff and pocket variations', 'Embroidery, printing and logo branding', 'Custom labels, buttons and trims', 'Packaging and bulk production'] },
    ],
  },
  't-shirts': {
    detailTitle: 'T-Shirts, developed for your collection or retail range.',
    detailIntro: [
      'We develop and manufacture casual T-shirts for brands, retailers and private-label collections.',
      'From silhouette and knit selection to colour, sizing, artwork and finishing, we develop each style around your product direction.',
    ],
    detailSections: [
      { title: 'What we offer', items: ['Round-neck and V-neck T-shirts', 'Regular, relaxed and oversized fits', 'Men’s, women’s and unisex styles', 'Cotton and blended knit options', 'Printed and embroidered T-shirts', 'Retail and private-label production'] },
      { title: 'Customization options', items: ['Fabric composition and GSM selection', 'Colour and size range development', 'Neck, sleeve and hem construction', 'Print, embroidery and artwork placement', 'Custom labels, tags and packaging', 'Sampling and bulk production'] },
    ],
  },
  'hoodies-sweatshirts': {
    detailTitle: 'Hoodies & Sweatshirts, made for comfort and everyday wear.',
    detailIntro: [
      'We develop and manufacture hoodies and sweatshirts for casual, retail, team and private-label collections.',
      'We work with you on knit weight, construction, fit, colour and branding to develop comfortable products for your range.',
    ],
    detailSections: [
      { title: 'What we offer', items: ['Pullover and zip-up hoodies', 'Crew-neck and hooded sweatshirts', 'Fleece and terry knit options', 'Regular, relaxed and oversized fits', 'Team and branded sweatshirts', 'Private-label production'] },
      { title: 'Customization options', items: ['Fabric composition and GSM selection', 'Colour and size customization', 'Hood, pocket, cuff and hem details', 'Print, embroidery and appliqué branding', 'Custom labels and packaging', 'Sampling and bulk production'] },
    ],
  },
  joggers: {
    detailTitle: 'Joggers, developed around comfort, fit and movement.',
    detailIntro: [
      'We develop and manufacture joggers for casualwear, athleisure, teamwear and private-label collections.',
      'From fabric handle and fit to waistband, pockets, colour and finishing, each style can be developed to your specifications.',
    ],
    detailSections: [
      { title: 'What we offer', items: ['Everyday casual joggers', 'Athleisure and sports joggers', 'Fleece and terry joggers', 'Men’s, women’s and unisex fits', 'Matching jogger and sweatshirt sets', 'Private-label jogger collections'] },
      { title: 'Customization options', items: ['Fabric composition and GSM selection', 'Colour and size range development', 'Waistband, drawcord and cuff details', 'Pocket placement and construction', 'Print, embroidery and logo branding', 'Labels, packaging and bulk production'] },
    ],
  },
  kidswear: {
    detailTitle: 'Kidswear, designed for comfort, movement and everyday use.',
    detailIntro: [
      'We develop and manufacture children’s apparel for brands, retailers and private-label collections.',
      'We coordinate age-appropriate silhouettes, comfortable fabrics, colours, sizing and finishing around your product requirements.',
    ],
    detailSections: [
      { title: 'What we offer', items: ['Children’s T-shirts and tops', 'Kids’ sweatshirts and hoodies', 'Casual bottoms and joggers', 'Everyday and seasonal styles', 'Printed and character-led apparel', 'Private-label kidswear ranges'] },
      { title: 'Customization options', items: ['Fabric composition and GSM selection', 'Colour and age-based size ranges', 'Fit, neckline and closure variations', 'Print, embroidery and artwork details', 'Labels, safety and packaging requirements', 'Sampling and bulk production'] },
    ],
  },
  'private-label-collections': {
    detailTitle: 'Private Label Collections, developed from concept to production.',
    detailIntro: [
      'We develop and manufacture apparel collections for private labels, retailers and emerging brands.',
      'From product direction and fabric selection to sampling, branding, packaging and export production, we support your collection requirements.',
    ],
    detailSections: [
      { title: 'What we offer', items: ['Collection planning and product development', 'T-shirts, polos and casualwear', 'Hoodies, joggers and seasonal styles', 'Private-label healthcare and uniforms', 'Sampling and size-set development', 'Export-ready bulk production'] },
      { title: 'Customization options', items: ['Fabric composition, GSM and colour selection', 'Custom fits, size ranges and measurements', 'Garment construction and finishing details', 'Labels, tags, trims and logo branding', 'Packaging and assortment planning', 'Quality checks and delivery coordination'] },
    ],
  },
  'custom-designs-fabrics-colors': {
    detailTitle: 'Custom Designs, Fabrics & Colors, developed around your references.',
    detailIntro: [
      'We develop and manufacture garments from your references, sketches, samples or product direction.',
      'Our team helps translate your design into fabric, colour, construction, fit and production-ready specifications.',
    ],
    detailSections: [
      { title: 'What we offer', items: ['Design interpretation and product development', 'Custom fabric and knit selection', 'Colour development and matching', 'Silhouette and garment construction', 'Sample and fit development', 'Production-ready apparel specifications'] },
      { title: 'Customization options', items: ['Fabric composition and GSM selection', 'Custom colours and lab-dip development', 'Measurements, grading and fit changes', 'Pockets, trims and finishing details', 'Branding, labels and packaging', 'Sampling, quality checks and bulk production'] },
    ],
  },
  'custom-branding-packaging': {
    detailTitle: 'Custom Branding & Packaging, finished for your brand.',
    detailIntro: [
      'We develop and manufacture branded apparel with labels, trims and packaging that reflect your brand identity.',
      'From logo application and garment labels to folding, packing and shipment preparation, we coordinate the final details of your order.',
    ],
    detailSections: [
      { title: 'What we offer', items: ['Logo embroidery and printing', 'Woven, satin and printed labels', 'Hangtags and branded trims', 'Individual garment packaging', 'Retail and export packing', 'Coordinated branded apparel finishing'] },
      { title: 'Customization options', items: ['Brand artwork and application method', 'Label material, size and placement', 'Tag, sticker and barcode requirements', 'Folding, polybag and carton specifications', 'Packing lists and size assortment', 'Bulk production and export fulfillment'] },
    ],
  },
};

export const collectionCategories = [
  {
    id: 'healthcare-uniforms',
    number: '01',
    title: 'Healthcare Uniforms',
    eyebrow: 'Medical & healthcare',
    description: 'Reliable, comfortable apparel for care teams and clinical environments, developed around your fabric, fit, color, and branding requirements.',
    image: healthcareImage,
    imageAlt: 'Healthcare apparel from the Antnira collection',
    products: [
      {
        slug: 'medical-scrubs',
        title: 'Medical Scrubs',
        description: 'We develop and manufacture medical scrubs and healthcare uniforms tailored to the needs of healthcare professionals, hospitals and medical institutions.',
        detailTitle: 'Medical Scrubs, designed around the way you work.',
        detailIntro: [
          'We develop and manufacture medical scrubs and healthcare uniforms tailored to the needs of healthcare professionals, hospitals and medical institutions.',
          'From fabric selection and colour development to garment construction, fit, functional pockets and customized branding, we work with you to develop uniforms that match your requirements.',
        ],
        detailSections: [
          {
            title: 'What we offer',
            items: [
              'Medical scrub tops and trousers',
              'Matching scrub sets',
              "Doctors' lab coats and white coats",
              'Nursing and healthcare staff uniforms',
              'Ward boy and hospital support staff uniforms',
              'Custom-designed healthcare uniforms',
            ],
          },
          {
            title: 'Made to your specifications',
            items: [
              'Fabric composition and GSM selection',
              'Custom colours and size ranges',
              'Functional pocket configurations',
              'Fit, stitching and garment finishing',
              'Logo embroidery, printing and branding',
              'Labels, packaging and bulk production',
            ],
          },
        ],
        image: productImageMap['medical-scrubs'],
      },
      {
        slug: 'doctor-uniforms',
        title: 'Doctor Uniforms',
        description: 'We develop and manufacture professional lab coats and doctor\'s coats designed for doctors, medical professionals, laboratories and healthcare institutions.',
        detailTitle: 'Doctor Lab Coats, tailored for professional environments.',
        detailIntro: [
          'We develop and manufacture professional lab coats and doctor\'s coats designed for doctors, medical professionals, laboratories and healthcare institutions.',
          'From fabric selection and garment construction to functional pockets, sizing and customized branding, every detail can be developed around your requirements.',
        ],
        detailSections: [
          {
            title: 'What we offer',
            items: [
              "Men's and women's doctor lab coats",
              'Short and long lab coats',
              'Single-breasted and customized designs',
              'Different collar and lapel styles',
              'Lab coats with functional pockets',
              'Customized coats for hospitals and laboratories',
            ],
          },
          {
            title: 'Customization options',
            items: [
              'Fabric composition and GSM selection',
              'Fabric colour and design selection',
              'Button, collar and sleeve variations',
              'Pocket placement and dimensions',
              'Custom embroidery and logo branding',
              'Size grading, labels and packaging',
            ],
          },
        ],
        image: productImageMap['doctor-uniforms'],
      },
      {
        slug: 'nurse-uniforms',
        title: 'Nurse Uniforms',
        description: 'We develop and manufacture professional nurse uniforms designed for the daily requirements of nursing teams, hospitals, clinics and healthcare institutions.',
        detailTitle: 'Nurse Uniforms, designed for comfort and everyday care.',
        detailIntro: [
          'We develop and manufacture professional nurse uniforms designed for the daily requirements of nursing teams, hospitals, clinics and healthcare institutions.',
          'From fabric selection and color coordination to garment fit, functional pockets and customized branding, we create uniform solutions around your organization\'s requirements.',
        ],
        detailSections: [
          {
            title: 'What we offer',
            items: [
              "Women's and men's nurse uniforms",
              'Nursing scrub tops and trousers',
              'V-neck and round-neck scrub designs',
              'Matching uniform sets',
              'Custom colours for different departments',
              'Coordinated uniforms for nursing teams',
            ],
          },
          {
            title: 'Customization options',
            items: [
              'Fabric composition and GSM selection',
              'Color and size customization',
              'Pocket placement and configurations',
              'Sleeve, neckline and fit variations',
              'Embroidery and logo branding',
              'Custom labels and packaging',
            ],
          },
        ],
        image: productImageMap['nurse-uniforms'],
      },
      { slug: 'ward-boy-hospital-staff-uniforms', title: 'Ward Boy & Hospital Staff Uniforms', description: 'Consistent uniform programs for hospital support teams, tailored by role, color, size range, and organizational branding.', image: productImageMap['ward-boy-hospital-staff-uniforms'] },
      { slug: 'patient-wear', title: 'Patient Wear', description: 'Patient garments developed around comfort, ease of wear, fabric preference, and the practical needs of your care facility.', image: productImageMap['patient-wear'] },
      { slug: 'hospital-accessories', title: 'Hospital Accessories', description: 'Supporting textile accessories for healthcare organizations, produced to requested specifications and coordinated with your uniform range.', image: productImageMap['hospital-accessories'] },
    ],
  },
  {
    id: 'custom-t-shirts',
    number: '02',
    title: 'Custom T-Shirts',
    eyebrow: 'Everyday, corporate & promotional',
    description: 'T-shirt programs made for brands, teams, events, and businesses, with options for garment construction, colors, decoration, and finishing.',
    image: tshirtImage,
    imageAlt: 'Custom apparel from the Antnira collection',
    products: [
      { slug: 'custom-round-neck-t-shirts', title: 'Custom Round-Neck T-Shirts', description: 'Round-neck T-shirts developed for your brand with choices for knit fabric, weight, color, fit, print, and finishing.', image: productImageMap['custom-round-neck-t-shirts'] },
      { slug: 'custom-polo-t-shirts', title: 'Custom Polo T-Shirts', description: 'Custom polo programs with options for collar and placket details, fabric, colors, embroidery, fit, and branded trims.', image: productImageMap['custom-polo-t-shirts'] },
      { slug: 'corporate-t-shirts', title: 'Corporate T-Shirts', description: 'Coordinated T-shirts for company teams and everyday brand wear, produced to your color, logo, sizing, and replenishment requirements.', image: productImageMap['corporate-t-shirts'] },
      { slug: 'promotional-t-shirts', title: 'Promotional T-Shirts', description: 'Branded T-shirts for campaigns and promotions, with garment, artwork placement, color, and quantity planned around your brief.', image: productImageMap['promotional-t-shirts'] },
      { slug: 'event-team-t-shirts', title: 'Event & Team T-Shirts', description: 'Matching apparel for events and teams, customized with your colors, graphics, names, sizes, and delivery schedule.', image: productImageMap['event-team-t-shirts'] },
    ],
  },
  {
    id: 'corporate-workwear',
    number: '03',
    title: 'Corporate & Workwear',
    eyebrow: 'Institutional & corporate',
    description: 'Coordinated apparel for workforces and institutions, produced to support a consistent appearance, practical use, and repeatable ordering.',
    image: corporateImage,
    imageAlt: 'Corporate and workwear apparel from Antnira',
    products: [
      { slug: 'corporate-wear', title: 'Corporate Wear', description: 'Branded apparel for business teams, developed for a consistent look across garment styles, colors, sizes, and logo applications.', image: productImageMap['corporate-wear'] },
      { slug: 'workwear', title: 'Workwear', description: 'Workwear programs designed around your team’s roles, preferred fabrics, functional details, and workplace identity.', image: productImageMap.workwear },
      { slug: 'security-uniforms', title: 'Security Uniforms', description: 'Coordinated security apparel produced to your garment, color, fit, and insignia requirements.', image: productImageMap['security-uniforms'] },
      { slug: 'institutional-uniforms', title: 'Institutional Uniforms', description: 'Uniform solutions for institutions, with coordinated styles and specifications suited to different teams and departments.', image: productImageMap['institutional-uniforms'] },
      { slug: 'hospitality-uniforms', title: 'Hospitality Uniforms', description: 'Hospitality apparel for guest-facing and operational teams, customized to your service environment and brand direction.', image: productImageMap['hospitality-uniforms'] },
    ],
  },
  {
    id: 'casual-private-label',
    number: '04',
    title: 'Casual & Private Label',
    eyebrow: 'Fashion, retail & OEM',
    description: 'Build a collection for your label or retail channel with flexible styles, custom fabrics, brand details, and export-ready production support.',
    image: casualImage,
    imageAlt: 'Casual apparel and private label products from Antnira',
    products: [
      { slug: 't-shirts', title: 'T-Shirts', description: 'Casual T-shirts made for your collection, with choices for silhouette, knit, color, sizing, artwork, and finishing.', image: productImageMap['t-shirts'] },
      { slug: 'hoodies-sweatshirts', title: 'Hoodies & Sweatshirts', description: 'Knit tops for casual and retail ranges, developed to your preferred fabric, weight, construction, color, and brand details.', image: productImageMap['hoodies-sweatshirts'] },
      { slug: 'joggers', title: 'Joggers', description: 'Casual bottoms developed around your fit, fabric, waistband, pocket, color, and finishing specifications.', image: productImageMap.joggers },
      { slug: 'kidswear', title: 'Kidswear', description: 'Children’s apparel ranges developed around your selected styles, fabrics, colors, size range, and branding.', image: productImageMap.kidswear },
      { slug: 'private-label-collections', title: 'Private Label Collections', description: 'End-to-end garment development for your label, from product direction and sampling to custom branding and export production.', image: productImageMap['private-label-collections'] },
      { slug: 'custom-designs-fabrics-colors', title: 'Custom Designs, Fabrics & Colors', description: 'Develop garments around your references with selected designs, fabric options, color direction, and production-ready specifications.', image: productImageMap['custom-designs-fabrics-colors'] },
      { slug: 'custom-branding-packaging', title: 'Custom Branding & Packaging', description: 'Complete your apparel range with custom labels, branding details, and packaging developed to your requirements.', image: productImageMap['custom-branding-packaging'] },
    ],
  },
];

export const collectionProducts = collectionCategories.flatMap((category) =>
  category.products.map((product) => ({
    ...product,
    ...(productDetails[product.slug] || {}),
    categoryId: category.id,
    categoryTitle: category.title,
    categoryImage: category.image,
    categoryImageAlt: category.imageAlt,
  }))
);

export const getCollectionProductPath = (slug) => `/collection/${slug}`;