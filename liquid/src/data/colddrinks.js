import { SpriteImg, CocaColaImg } from "../assets/assets";

export const colddrinks = [
    {
        id: 1,
        name: "Sprite Lemon Lime",
        images: SpriteImg,
        rating: 4.6,
        reviews: 58,
        price: 3.5,
        description: "Sprite Lemon Lime delivers a crisp and refreshing burst of lemon-lime flavor with intense fizz. Perfect for cooling down on a hot day, it offers a clean, sharp taste that instantly refreshes and energizes your mood.",
        flavours: ["Original Lemon Lime"],
        coupons: [
            "Flat 15% Off on first order via Zepto",
            "Get 10% Cashback with HDFC Credit Cards",
            "Buy 2 Get 1 Free (Limited Time Offer)",
            "Get ₹30 Cashback via Paytm UPI",
            "Extra 5% Off on orders above ₹499"
        ]
    },
    {
  id: 2,
  name: "Coca-Cola Original Taste",
  images: CocaColaImg, 
  rating: 4.7,
  reviews: 74,
  price: 3.8,
  description: "Coca-Cola Original Taste delivers the classic, bold cola flavor with refreshing fizz that has been loved for generations. Perfectly balanced sweetness and carbonation make it the ultimate drink to enjoy anytime, anywhere.",
  flavours: ["Original Taste"],
  coupons: [
    "Flat 15% Off on first order",
    "Buy 2 Get 1 Free (Limited Period)",
    "Get 10% Cashback with SBI Credit Cards",
    "₹25 Cashback via PhonePe UPI",
    "Free delivery on orders above ₹499"
  ]
}


]