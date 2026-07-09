

export const CATEGORIES = [
  "All Categories",
  "Books",
  "Musical Instruments",
  "Food & Drinks",
  "Pet Supplies",
  "Office Supplies & Stationery",
  "Car & Motorbike",
  "Sports & Fitness",
  "Electronics",
  "Bags & Footwear",
  "Jewellery & Accessories",
  "Beauty & Health",
  "Home & Kitchen",
  "Kids",
  "Men",
  "Women Western",
  "Women Ethnic"
];

export const CAROUSEL_SLIDES= [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1600&auto=format&fit=crop&q=80",
    title: "Premium Home Appliances",
    subtitle: "Upgrade your living space with energy-efficient washing machines, smart refrigerators, and ovens.",
    categoryLink: "Home & Kitchen"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600&auto=format&fit=crop&q=80",
    title: "Charming Women's Ethnic & Western Wear",
    subtitle: "Explore beautiful Jaipuri cotton kurtas, elegant clutches, and premium handblock print collection.",
    categoryLink: "Women Ethnic"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1600&auto=format&fit=crop&q=80",
    title: "Exclusive Bags & Handcrafted Footwear",
    subtitle: "Designer wallets, silk clutches with pearl handles, and soft cushioned leather juttis.",
    categoryLink: "Bags & Footwear"
  }
];

export const PRODUCTS = [
  {
    id: 1001,
    title: "Peach & Gold Textured Designer Wallet for Women - Elegant Synthetic Leather Purse",
    vendor: "HelloMem Vendor1",
    price: 234,
    rating: 5.0,
    reviewsCount: 12,
    stock: 100,
    category: "Bags & Footwear",
    images: [
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Elevate your daily fashion statement with this Peach & Gold Textured Designer Wallet for Women. Made from superior grade synthetic leather, it offers a textured surface that catches the eye while staying resilient against daily wear and tear. It features multiple compartments for structured storage of keys, cards, cash, and even small cosmetics.",
    details: {
      "Material": "Premium Synthetic Leather",
      "Color": "Peach & Gold with Textured finish",
      "Design": "Textured Dual Tone Flap Wallet",
      "Type": "Women's Designer Wallet",
      "Closure Type": "Magnetic Snapping Button",
      "Compartments": "Dual Cash slots & 6 Card slots",
      "Occasion": "Festive, Party, Daily Outings",
      "Shape": "Rectangular Silhouette",
      "Dimensions": "19 cm (Length) x 9.5 cm (Height) x 2.5 cm (Width)",
      "Country of Origin": "India"
    },
    keyFeatures: [
      "Beautiful peach and gold textured premium styling",
      "Ergonomic layout with dedicated card and currency chambers",
      "Extremely light and fits effortlessly into standard shoulder bags",
      "Robust stitching for long lasting usage"
    ],
    styleTip: "Perfect to pair with both light colored traditional wear like kurtas or modern western dresses.",
    packageIncludes: "1 x Peach & Gold Textured Designer Wallet",
    idealFor: "Women and young girls who appreciate a blend of elegant textures and spacious compartments.",
    isNew: true
  },
  {
    id: 1002,
    title: "Golden Embroidered Silk Clutch for Women with Pearl Handle - Elegant Ethnic Bridal Evening Handbag",
    vendor: "HelloMem Vendor1",
    price: 546,
    rating: 5.0,
    reviewsCount: 15,
    stock: 100,
    category: "Bags & Footwear",
    images: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc15aab9?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80"
    ],
    description: "This stunning Golden Embroidered Silk Clutch is meticulously crafted for weddings, festivals, and grand evenings. The intricate embroidery is complemented by an exquisite pearl bead handle that doubles as a wristlet. Its rich silk fabric shines beautifully under evening lights, adding instant regal elegance to your overall outfit.",
    details: {
      "Material": "Pure Silk with Embroidered Zari work",
      "Color": "Golden with Multi-color Floral details",
      "Design": "Traditional Hand-embroidered Clutch with Pearl Handle",
      "Type": "Ethnic Silk Clutch",
      "Closure Type": "Metallic Clasp Lock",
      "Compartments": "Single Main Compartment with a tiny slip pocket",
      "Occasion": "Bridal, Wedding Guest, Festivals",
      "Dimensions": "18 cm (Length) x 12 cm (Height) x 5 cm (Width)",
      "Country of Origin": "India"
    },
    keyFeatures: [
      "Rich pure silk base with glistening gold zari embroidery",
      "Premium pearl-embellished round top handle",
      "Secure metal frame with standard snap closure",
      "Sufficient room to store phone, lipstick, and car keys"
    ],
    styleTip: "Pair this clutch with a heavy Banarasi saree, an elegant lehenga, or an Indo-western gown for a regal appearance.",
    packageIncludes: "1 x Golden Embroidered Silk Clutch",
    idealFor: "Brides, bridesmaids, and women looking to make a lasting statement at festive celebrations.",
    isNew: true
  },
  {
    id: 1003,
    title: "Pink Studded Designer Clutch Wallet for Women with Pom-Pom Charm - Vibrant Stylish Purse",
    vendor: "HelloMem Vendor2",
    price: 436,
    rating: 4.8,
    reviewsCount: 8,
    stock: 100,
    category: "Bags & Footwear",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Add a splash of vibrant color to your wardrobe with the Pink Studded Designer Clutch Wallet. Detailed with delicate micro-studs and an adorable matching pom-pom charm, this accessory is the perfect companion for bright sunny days, fun-filled weekend parties, or casual brunches.",
    details: {
      "Material": "Premium Polyurethane Synthetic Leather",
      "Color": "Vibrant Magenta Pink",
      "Design": "Studded fold-over layout with detached pom-pom keychain",
      "Type": "Fashion Shoulder/Clutch Purse",
      "Closure Type": "Magnetic Snap Lock",
      "Compartments": "1 main compartment, 1 interior zip pocket, 4 card slots",
      "Occasion": "Casual Hangouts, Birthdays, Weekend brunches",
      "Dimensions": "21 cm x 11 cm x 3 cm",
      "Country of Origin": "India"
    },
    keyFeatures: [
      "Striking hot pink hue with polished metallic micro-studs",
      "Detachable fluffy pom-pom charm adds a playful twist",
      "Convertible design; carry as a clutch or slip into a larger tote",
      "Sleek yet spacious enough for all-day essentials"
    ],
    styleTip: "Looks amazing against white denim and a solid pastel top, or with lightweight floral dresses.",
    packageIncludes: "1 x Pink Studded Designer Clutch, 1 x Pom-Pom Charm",
    idealFor: "Trendy women and college-goers wanting a fun, eye-catching hand purse.",
    isNew: true
  },
  {
    id: 1004,
    title: "Navy Blue 'Forever Beauty' Women's Clutch Wallet – Premium Synthetic Leather Long Purse",
    vendor: "HelloMem Vendor1",
    price: 499,
    rating: 5.0,
    reviewsCount: 22,
    stock: 100,
    category: "Bags & Footwear",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Wrap your essentials in the sleek and sophisticated Navy Blue 'Forever Beauty' Women's Clutch Wallet. Boasting a high-definition matte texture and subtle white stitching, this long purse is perfect for both executive meetings and evening dining.",
    details: {
      "Material": "High-Grade Textured Polyurethane",
      "Color": "Navy Blue",
      "Design": "Long envelope bi-fold layout with cursive lettering",
      "Type": "Executive Women's Long Wallet",
      "Closure Type": "Press-stud button",
      "Compartments": "3 main cash chambers, 1 zip coin compartment, 8 card slots",
      "Occasion": "Office, Business Trips, Dinners",
      "Dimensions": "20 cm x 10 cm x 3 cm",
      "Country of Origin": "India"
    },
    keyFeatures: [
      "Deep executive navy blue tone with rich matte hand-feel",
      "Super-organized interior with multi-slot layout for cash, receipts, and cards",
      "Rust-free heavy-duty metal zippers for long-term safety",
      "Durable and weather-resistant surface finish"
    ],
    styleTip: "Complements power suits, office trousers, or sophisticated evening dark dresses.",
    packageIncludes: "1 x Navy Blue 'Forever Beauty' Clutch Wallet",
    idealFor: "Working professionals and women who value organized, high-utility long wallets.",
    isNew: false
  },
  {
    id: 1071,
    title: "Black \"Forever Beauty\" Women's Clutch Wallet – Elegant Synthetic Leather Purse | Stylish Party & Daily Use Hand Wallet",
    vendor: "HelloMem Vendor1",
    price: 543,
    rating: 5.0,
    reviewsCount: 1,
    stock: 100,
    category: "Bags & Footwear",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Add a touch of sophistication to your accessory collection with this Black \"Forever Beauty\" Women’s Clutch Wallet. Made from high-quality synthetic leather, this wallet combines elegance with practicality.\n\nThe wallet showcases a sleek black body enhanced by red embroidered stitching and the \"Forever Beauty\" logo on the flap, giving it a refined yet trendy appeal. Its structured design provides ample space for your essentials like cash, cards, and IDs while maintaining a slim profile.\n\nIdeal for both daily use and special occasions, this clutch wallet can easily complement Western, ethnic, or office outfits.",
    details: {
      "Material": "Premium Synthetic Leather",
      "Color": "Black with Red Stitch Detailing",
      "Design": "Fold-Over Flap with \"Forever Beauty\" Embroidery",
      "Type": "Women’s Clutch Wallet",
      "Closure Type": "Magnetic Button",
      "Compartments": "Multiple Card Slots & Cash Compartments",
      "Occasion": "Casual, Formal, Party",
      "Shape": "Rectangle",
      "Dimensions": "20 cm (Length) × 10 cm (Height) × 3 cm (Width)",
      "Country of Origin": "India"
    },
    keyFeatures: [
      "Elegant black design with red embroidered pattern",
      "Compact and lightweight for easy handling",
      "Spacious compartments for cards, cash, and small essentials",
      "Crafted with durable synthetic leather",
      "Perfect for everyday and occasional use"
    ],
    styleTip: "Pair this clutch wallet with any casual or ethnic outfit. Ideal for evening outings or office events when you want to carry style with convenience.",
    packageIncludes: "1 × Black \"Forever Beauty\" Clutch Wallet",
    idealFor: "Women & Girls (Ages 16–45) who prefer stylish, functional, and easy-to-carry wallets for everyday or special occasions.",
    isNew: true
  },
  {
    id: 1006,
    title: "Mustard Yellow & White Floral Printed Cotton Kurta Set with Dupatta",
    vendor: "HelloMem Textiles",
    price: 799,
    rating: 4.9,
    reviewsCount: 45,
    stock: 100,
    category: "Women Ethnic",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&auto=format&fit=crop&q=80"
    ],
    description: "A delightful, bright addition to your festive and casual wardrobe. This printed cotton kurta features detailed Jaipuri handblock floral patterns with a complementary pair of straight cotton pants and a lightweight matching dupatta. Crafted with pure 100% cotton to keep you stylish and comfortable.",
    details: {
      "Material": "100% Jaipur Cotton",
      "Color": "Mustard Yellow & Bright White",
      "Sleeve Type": "3/4th Sleeves",
      "Fit Type": "Regular A-Line Fit",
      "Length": "Calf Length Kurta",
      "Occasion": "Festivals, Daily Casual, Workwear",
      "Country of Origin": "India"
    },
    keyFeatures: [
      "Authentic Rajasthani floral handblock printing",
      "Soft, breathable premium cotton keeping you cool in summers",
      "Includes matching straight pants and full-length dupatta",
      "Color-fast dye that doesn't fade upon washing"
    ],
    styleTip: "Pair with classic silver oxidized earrings and comfortable juttis for a flawless traditional look.",
    packageIncludes: "1 x Kurta, 1 x Straight Pants, 1 x Dupatta",
    idealFor: "Women seeking a charming blend of traditional prints and ultimate comfort.",
    isNew: true
  },
  {
    id: 1007,
    title: "Peach Embroidered Ethnic Jutti for Women - Mirror Work | Cushion Sole",
    vendor: "Jaipur Juttis Co.",
    price: 169,
    rating: 5.0,
    reviewsCount: 31,
    stock: 100,
    category: "Women Ethnic",
    images: [
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Treat your feet with our classic Jaipuri Peach Embroidered Juttis. Highlighted with elegant hand-done thread embroidery and glistening tiny mirror inserts, these padded flats prevent shoe bites while keeping your ethnic attire extremely authentic.",
    details: {
      "Material": "Soft Suede with Cotton Inner Lining",
      "Color": "Peach",
      "Craft": "Mirror Work & Hand Thread Embroidery",
      "Sole": "Double-cushioned Leather Sole",
      "Heel Type": "Flat",
      "Country of Origin": "India"
    },
    keyFeatures: [
      "Traditional Jaipuri handmade craftsmanship",
      "Double padded sole ensures all-day comfort with zero fatigue",
      "Stunning peach shade that matches with various color combinations"
    ],
    styleTip: "Excellent to wear with lehengas, anarkalis, or even simple ankle-length denim.",
    packageIncludes: "1 Pair of Peach Juttis",
    idealFor: "Women and girls looking for a comfortable yet stylish ethnic footwear choice.",
    isNew: false
  },
  {
    id: 1008,
    title: "Black Textured Leather Mojari for Men – Traditional Ethnic Wear | Cushion Sole",
    vendor: "Royal Jodhpurs",
    price: 349,
    rating: 4.7,
    reviewsCount: 19,
    stock: 100,
    category: "Men",
    images: [
      "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Walk with confidence in these premium Black Textured Leather Mojaris. Tailored specifically for modern Indian men who want to make a classic impression at weddings, engagements, or cultural events.",
    details: {
      "Material": "Premium Textured Leatherette",
      "Color": "Classic Black",
      "Design": "Traditional pointed-toe Mojari",
      "Sole": "Cushioned rubber-leather composite",
      "Heel Type": "Flat",
      "Country of Origin": "India"
    },
    keyFeatures: [
      "Polished textured leather outer shell for a premium look",
      "Lightweight, flexible sole allowing hours of walking/dancing",
      "Slip-on design with reinforced stitching"
    ],
    styleTip: "Pairs flawlessly with solid color Kurtas, Sherwanis, or Jodhpuri suits.",
    packageIncludes: "1 Pair of Men's Mojaris",
    idealFor: "Grooms, wedding attendees, and men styling traditional attire.",
    isNew: false
  },
  {
    id: 1009,
    title: "Magenta Floral Printed Cotton Top for Women – Half Sleeve | Regular Fit",
    vendor: "HelloMem Fashion",
    price: 199,
    rating: 4.5,
    reviewsCount: 15,
    stock: 100,
    category: "Women Western",
    images: [
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&auto=format&fit=crop&q=80"
    ],
    description: "A delightful magenta top with cute floral motifs. Styled in a relaxed fit with half sleeves, this top keeps you extremely light and fashionable on hot summery days.",
    details: {
      "Material": "100% Soft Cotton Slub",
      "Color": "Magenta & Pastel Pink",
      "Sleeve Type": "Short Half Sleeves",
      "Neck Style": "Round Neck",
      "Occasion": "Daily Casual, College wear, Outings",
      "Country of Origin": "India"
    },
    keyFeatures: [
      "Vibrant magenta floral theme that pops",
      "Extremely soft cotton fabric suitable for sensitive skins",
      "Durable color treatment for longevity"
    ],
    styleTip: "Tuck it into high-waisted blue jeans or style with white shorts and canvas sneakers.",
    packageIncludes: "1 x Women's Cotton Top",
    idealFor: "Young women who love effortless, breezy western summer tops.",
    isNew: false
  },
  {
    id: 1010,
    title: "Smart Double-Door Refrigerator with Digital Inverter Compressor",
    vendor: "VoltMax Appliances",
    price: 8499,
    rating: 4.8,
    reviewsCount: 34,
    stock: 50,
    category: "Home & Kitchen",
    images: [
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Keep your food items fresh and healthy with our smart double-door refrigerator. Equipped with a digital inverter compressor, it automatically adjusts speed in response to cooling demand, ensuring whisper-quiet operation and immense power savings.",
    details: {
      "Type": "Double-Door Refrigerator",
      "Capacity": "350 Litres",
      "Energy Rating": "5 Star",
      "Compressor": "Digital Inverter",
      "Voltage": "220-240V",
      "Color": "Brushed Steel Silver"
    },
    keyFeatures: [
      "Frost free defrosting system",
      "Smart connect inverter technology runs during power outages",
      "Toughened glass shelves capable of holding up to 150kg"
    ],
    styleTip: "An elegant centerpiece for modern modular kitchens.",
    packageIncludes: "1 x Refrigerator, 1 x User Manual, 1 x Warranty Card",
    idealFor: "Medium to large families seeking robust refrigeration.",
    isNew: false
  },
  {
    id: 1011,
    title: "Fully Automatic Front Load Washing Machine with SuperMotion Clean",
    vendor: "VoltMax Appliances",
    price: 9999,
    rating: 4.9,
    reviewsCount: 29,
    stock: 65,
    category: "Home & Kitchen",
    images: [
      "https://images.unsplash.com/photo-1582730149719-61117da7e0db?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Get crisp, hygienic, and perfectly washed laundry with our top-tier front-load washing machine. Driven by the direct-drive SuperMotion motor, it moves the wash drum in multiple directions, giving fabrics the gentle care they deserve.",
    details: {
      "Type": "Front Loading Washing Machine",
      "Capacity": "8.0 Kg",
      "Color": "Slate Grey",
      "Spin Speed": "1400 RPM",
      "Heater": "In-built Steam Heater"
    },
    keyFeatures: [
      "Smart inverter motor runs silent and uses 30% less electricity",
      "Steam wash cycle eliminates 99.9% of allergens and bacteria",
      "TurboClean cycles wash outfits in under 39 minutes"
    ],
    styleTip: "Install with stable base mounts to enjoy sound-free heavy spinning.",
    packageIncludes: "1 x Washing Machine, 1 x Water Inlet Hose, 1 x Owner's Manual",
    idealFor: "Active households looking for fast, hygienic garment care.",
    isNew: false
  },
  {
    id: 1012,
    title: "Convection Microwave Oven with Smart Auto-Cook Menus",
    vendor: "VoltMax Appliances",
    price: 6999,
    rating: 4.6,
    reviewsCount: 18,
    stock: 80,
    category: "Home & Kitchen",
    images: [
      "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=800&auto=format&fit=crop&q=80"
    ],
    description: "Reinvent your cooking skills with this high-efficiency Convection Microwave Oven. Bake, grill, reheat, and cook with simple touch controls and 100+ automated pre-set Indian recipes.",
    details: {
      "Capacity": "28 Litres",
      "Type": "Convection Microwave",
      "Control Type": "Feather Touch Key Pad",
      "Cavity": "Ceramic Enamel (Scratch-resistant)"
    },
    keyFeatures: [
      "Multi-stage cooking with seamless power control",
      "Deodorization feature keeps the interior fresh",
      "Eco-mode dramatically lowers standby power consumption"
    ],
    styleTip: "Place in well-ventilated corner platforms.",
    packageIncludes: "1 x Microwave Oven, 1 x Glass Turntable, 1 x Grill Rack, 1 x Cookbook",
    idealFor: "Enthusiastic home bakers and family kitchens seeking convenient quick-cook systems.",
    isNew: false
  }
];
