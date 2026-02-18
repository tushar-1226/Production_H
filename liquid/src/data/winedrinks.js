import { CrimsonImg, DarkAmberImg, RubyCrestImg, ScarletCrownImg } from './assets/assets'

export const wines = [
  {
    id: 1,
    name: "Crimson Valley Reserve",
    images: CrimsonImg,
    rating: 4.6,
    reviews: 64,
    price: 18.0,
    description: "Crimson Valley Reserve is a rich and full-bodied red wine with notes of dark berries, plum, and subtle oak. Perfect for dinner occasions and special gatherings.",
    flavours: ["Classic Red"],
    coupons: [
      "No coupon available"
    ]
  },
  {
    id: 2,
    name: "Scarlet Crown Premium Red",
    images: ScarletCrownImg,
    rating: 4.7,
    reviews: 72,
    price: 22.0,
    description: "Scarlet Crown Premium Red offers a smooth texture with hints of cherry, spice, and vanilla. A luxurious choice for celebrations.",
    flavours: ["Premium Red"],
    coupons: [
      "Flat 10% off on first purchase",
      "Free delivery on orders above $50"
    ]
  },
  {
    id: 3,
    name: "Dark Ember Red",
    images: DarkAmberImg,
    rating: 4.5,
    reviews: 58,
    price: 20.0,
    description: "Dark Ember Red is bold and intense with flavors of blackcurrant, chocolate, and smoky oak. Best enjoyed with grilled dishes.",
    flavours: ["Reserve Edition"],
    coupons: [
      "No coupon available"
    ]
  },
  {
    id: 4,
    name: "Ruby Crest Classic",
    images: RubyCrestImg,
    rating: 4.4,
    reviews: 49,
    price: 16.0,
    description: "Ruby Crest Classic is a smooth and fruit-forward red wine with soft tannins and a balanced finish. Ideal for casual evenings.",
    flavours: ["Classic Red"],
    coupons: [
      "Buy 2 Get 5% Off",
      "Free wine glass on purchase above $60"
    ]
  }
];
