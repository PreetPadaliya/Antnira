import healthcareImage from '../assets/imagesNew/medical_scrubs_1790789190061.jpg';
import tshirtImage from '../assets/imagesNew/custom_round_neck_tshirt_1790789294109.jpg';
import corporateImage from '../assets/imagesNew/corporate_wear_1790789389721.jpg';
import casualImage from '../assets/Products/product-7.jpg';
import medicalScrubsImage from '../assets/imagesNew/medical_scrubs_1790789190061.jpg';
import doctorUniformImage from '../assets/imagesNew/doctor_uniform_1790789204052.jpg';
import nurseUniformImage from '../assets/imagesNew/nurse_uniform_1790789218055.jpg';
import labCoatImage from '../assets/imagesNew/lab_coat_1790789230564.jpg';
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
  'lab-coats-laboratory-uniforms': labCoatImage,
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
      { slug: 'medical-scrubs', title: 'Medical Scrubs', description: 'Scrub tops and trousers developed for clinical teams, with choices for fabric, color, fit, pockets, and branded finishing.', image: productImageMap['medical-scrubs'] },
      { slug: 'doctor-uniforms', title: 'Doctor Uniforms', description: 'Professional doctor apparel, including coats and coordinated uniform pieces, made to your preferred fit, fabric, and presentation.', image: productImageMap['doctor-uniforms'] },
      { slug: 'nurse-uniforms', title: 'Nurse Uniforms', description: 'Comfortable, practical uniform programs for nursing teams, with coordinated styles, colors, sizing, and brand details.', image: productImageMap['nurse-uniforms'] },
      { slug: 'lab-coats-laboratory-uniforms', title: 'Lab Coats & Laboratory Uniforms', description: 'Laboratory apparel made to your requirements, with options for coat length, fabric, pocket layout, fit, and identification.', image: productImageMap['lab-coats-laboratory-uniforms'] },
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
    categoryId: category.id,
    categoryTitle: category.title,
    categoryImage: category.image,
    categoryImageAlt: category.imageAlt,
  }))
);

export const getCollectionProductPath = (slug) => `/collection/${slug}`;