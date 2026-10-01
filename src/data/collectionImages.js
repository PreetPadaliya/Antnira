import { collectionCategories } from './collectionCatalog';
import doctorUniformCardImage from '../assets/Products/product-1.jpg';
import nurseUniformCardImage from '../assets/Products/product-2.jpg';
import patientWearCardImage from '../assets/imagesNew/hospital_staff_uniform_1790789243719.jpg';
import labCoatCardImage from '../assets/imagesNew/lab_coat_1790789230564.jpg';
import roundNeckTshirtCardImage from '../assets/Products/product-9.jpg';
import poloTshirtCardImage from '../assets/Products/product-3.jpg';
import corporateTshirtCardImage from '../assets/Products/product-8.jpg';
import promotionalTshirtCardImage from '../assets/imagesNew/promotional_tshirt_1790789334918.jpg';
import eventTeamTshirtCardImage from '../assets/imagesNew/event_team_tshirt_1790789352065.jpg';
import securityUniformCardImage from '../assets/Products/product-5.jpg';
import corporateWearCardImage from '../assets/imagesNew/corporate_wear_1790789389721.jpg';
import joggersCardImage from '../assets/Products/product-10.jpg';
import kidswearCardImage from '../assets/Products/product-12.jpg';
import privateLabelCardImage from '../assets/Products/product-11.jpg';
import customDesignCardImage from '../assets/Products/product-14.jpg';

const imageOverrides = {
  'doctor-uniforms': doctorUniformCardImage,
  'nurse-uniforms': nurseUniformCardImage,
  'patient-wear': patientWearCardImage,
  'lab-coats-laboratory-uniforms': labCoatCardImage,
  'custom-round-neck-t-shirts': roundNeckTshirtCardImage,
  'custom-polo-t-shirts': poloTshirtCardImage,
  'corporate-t-shirts': corporateTshirtCardImage,
  'promotional-t-shirts': promotionalTshirtCardImage,
  'event-team-t-shirts': eventTeamTshirtCardImage,
  'security-uniforms': securityUniformCardImage,
  'corporate-wear': corporateWearCardImage,
  workwear: patientWearCardImage,
  'hoodies-sweatshirts': corporateTshirtCardImage,
  joggers: joggersCardImage,
  kidswear: kidswearCardImage,
  'private-label-collections': privateLabelCardImage,
  'custom-designs-fabrics-colors': customDesignCardImage,
};

export const productImages = Object.entries(
  import.meta.glob('../assets/imagesNew/*.{png,jpg,jpeg}', {
    eager: true,
    query: '?url',
    import: 'default',
  })
)
  .sort(([first], [second]) => first.localeCompare(second, undefined, { numeric: true }))
  .map(([, image]) => image);

let productImageIndex = 0;
export const collectionsWithImages = collectionCategories.map((collection) => ({
  ...collection,
  products: collection.products.map((product) => {
    const fallbackImage = productImages[productImageIndex % productImages.length];
    productImageIndex += 1;
    return {
      ...product,
      image: imageOverrides[product.slug] || fallbackImage,
    };
  }),
}));

export const collectionProductImages = Object.fromEntries(
  collectionsWithImages.flatMap((collection) =>
    collection.products.map((product) => [product.slug, product.image])
  )
);