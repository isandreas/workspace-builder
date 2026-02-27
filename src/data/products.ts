// ── Product Catalog ──
// Source: Monis.rent — Bali workspace equipment rentals
// https://www.monis.rent/locations/bali

export type Category =
  | "monitors"
  | "furniture"
  | "computers"
  | "peripherals"
  | "gaming"
  | "audio-video"
  | "fitness"
  | "appliances";

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  emoji: string;
  pricePerDay: number;
  pricePerWeek: number;
  pricePerMonth: number;
  imageUrl: string;
  imagePlaceholder: string;
  slug: string;
  width: number; // canvas footprint in grid units
  height: number; // canvas footprint in grid units
  tags: string[];
}

export interface CategoryInfo {
  id: Category;
  label: string;
  emoji: string;
}

// ── Category Metadata ──

export const categories: CategoryInfo[] = [
  { id: "monitors", label: "Monitors", emoji: "🖥" },
  { id: "furniture", label: "Furniture", emoji: "🪑" },
  { id: "computers", label: "Computers", emoji: "💻" },
  { id: "peripherals", label: "Keyboard, Mouse & Accessories", emoji: "⌨️" },
  { id: "gaming", label: "Gaming", emoji: "🎮" },
  { id: "audio-video", label: "Audio & Video", emoji: "🎙" },
  { id: "fitness", label: "Health & Fitness", emoji: "🏃" },
  { id: "appliances", label: "Home Appliances", emoji: "🏠" },
];

// ── CDN Base ──

export const CDN_BASE =
  "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/";

// ── Full Product Catalog ──

export const products: Product[] = [
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  MONITORS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "24-full-hd-monitor-a24i",
    name: '24" Full HD Office Monitor A24i',
    category: "monitors",
    description:
      'Xiaomi 23.8" IPS at 100Hz — sharp, color-accurate, and easy on the eyes.',
    emoji: "🖥",
    pricePerDay: 1,
    pricePerWeek: 6,
    pricePerMonth: 20,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ea6c097ce9fb569b8c0c_24_Full_HD_Office_Monitor_A24i_1_7f987306af.jpeg",
    imagePlaceholder: "monitor-24-fhd-a24i",
    slug: "/products/24-full-hd-office-monitor-a24i-2",
    width: 2,
    height: 2,
    tags: ["monitor", "24-inch", "full-hd", "ips", "100hz", "xiaomi"],
  },
  {
    id: "24-full-hd-monitor-1c",
    name: '24" Full HD Office Monitor 1C',
    category: "monitors",
    description:
      "Budget-friendly 75Hz IPS panel — perfect for focused work sessions.",
    emoji: "🖥",
    pricePerDay: 1,
    pricePerWeek: 5,
    pricePerMonth: 17,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ec2f5d1b9d7ffe2a5582_24_Full_HD_75_Hz_IPS_Desktop_1_C_Monitor_front_7eeba14881.jpeg",
    imagePlaceholder: "monitor-24-fhd-1c",
    slug: "/products/full-hd-office-24",
    width: 2,
    height: 2,
    tags: ["monitor", "24-inch", "full-hd", "ips", "75hz", "budget"],
  },
  {
    id: "27-full-hd-monitor-mid",
    name: '27" Full HD Office Monitor MiD',
    category: "monitors",
    description:
      'Bigger screen, same sharpness — 27" with 100% sRGB and 300 nits.',
    emoji: "🖥",
    pricePerDay: 1,
    pricePerWeek: 7,
    pricePerMonth: 24,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ec36efc0ee750a3cf582_24_essentail_front_ea36cec7cf.jpeg",
    imagePlaceholder: "monitor-27-fhd-mid",
    slug: "/products/27-work-monitor-mi-d",
    width: 2,
    height: 2,
    tags: ["monitor", "27-inch", "full-hd", "srgb", "xiaomi"],
  },
  {
    id: "27-full-hd-monitor-a27i",
    name: '27" Full HD Office Monitor A27i',
    category: "monitors",
    description:
      "Color-accurate 100Hz IPS with VESA mount — your daily driver.",
    emoji: "🖥",
    pricePerDay: 2,
    pricePerWeek: 8,
    pricePerMonth: 28,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ec3d19dead1343bead92_A27i_front_35acc32043.jpeg",
    imagePlaceholder: "monitor-27-fhd-a27i",
    slug: "/products/27-work-monitor-a27i",
    width: 2,
    height: 2,
    tags: ["monitor", "27-inch", "full-hd", "ips", "100hz", "vesa"],
  },
  {
    id: "27-4k-multimedia-monitor",
    name: '27" 4K Multimedia Monitor',
    category: "monitors",
    description:
      "Pixel-perfect 4K with USB-C and 95% DCI-P3 — ship pixels properly.",
    emoji: "🖥",
    pricePerDay: 2,
    pricePerWeek: 13,
    pricePerMonth: 45,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ec4533734dcd2eaea2ea_27_4_K_A27_U_Multitasking_Monitor_1_ce29d15357.jpeg",
    imagePlaceholder: "monitor-27-4k-multimedia",
    slug: "/products/27-4-k-multimedia-monitor",
    width: 2,
    height: 2,
    tags: ["monitor", "27-inch", "4k", "usb-c", "hdr", "dci-p3"],
  },
  {
    id: "27-4k-grading-monitor",
    name: '27" 4K+ Grading Monitor',
    category: "monitors",
    description:
      "PANTONE Validated with 99% DCI-P3 — the colorist's weapon of choice.",
    emoji: "🖥",
    pricePerDay: 3,
    pricePerWeek: 18,
    pricePerMonth: 62,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ec4c66fa18d1b4b37998_27_4_K_60_Hz_IPS_Grading_Monitor_front_01b90d6ac0.jpeg",
    imagePlaceholder: "monitor-27-4k-grading",
    slug: "/products/4k-grading-monitor-27",
    width: 2,
    height: 2,
    tags: ["monitor", "27-inch", "4k", "grading", "pantone", "dci-p3", "pro"],
  },
  {
    id: "27-5k-apple-studio-display",
    name: '27" 5K Apple Studio Display',
    category: "monitors",
    description:
      "5K Retina, 600 nits, P3 wide color, 12MP camera — the Apple experience.",
    emoji: "🖥",
    pricePerDay: 11,
    pricePerWeek: 75,
    pricePerMonth: 260,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ec53811330983bf8ee38_Apple_Studio_Display_6_94c6329a05.jpeg",
    imagePlaceholder: "apple-studio-display-5k",
    slug: "/products/apple-studio-display",
    width: 3,
    height: 2,
    tags: [
      "monitor",
      "27-inch",
      "5k",
      "apple",
      "thunderbolt",
      "retina",
      "premium",
    ],
  },
  {
    id: "27-2k-grading-monitor-benq",
    name: '27" 2K+ Grading Monitor',
    category: "monitors",
    description:
      "BenQ QHD with factory-calibrated Adobe RGB — for print and photo pros.",
    emoji: "🖥",
    pricePerDay: 3,
    pricePerWeek: 19,
    pricePerMonth: 66,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ec5be26ecabb2901acb4_Ben_Q_2_K_Grading_Monitor_27_front_d138954555.jpeg",
    imagePlaceholder: "benq-27-2k-grading",
    slug: "/products/ben-q-2-k-grading-monitor-27",
    width: 2,
    height: 2,
    tags: ["monitor", "27-inch", "2k", "qhd", "grading", "benq", "adobe-rgb"],
  },
  {
    id: "30-gaming-monitor",
    name: '30" Full HD Gaming Monitor',
    category: "monitors",
    description:
      "Ultrawide 200Hz IPS — for devs who also like to frag after hours.",
    emoji: "🖥",
    pricePerDay: 2,
    pricePerWeek: 14,
    pricePerMonth: 48,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ec63ab6c6ad11305ea12_30_Full_HD_Gaming_Monitor_5_9b321bb7e5.jpeg",
    imagePlaceholder: "monitor-30-ultrawide-gaming",
    slug: "/products/mi-30-curved-monitor",
    width: 3,
    height: 2,
    tags: ["monitor", "30-inch", "ultrawide", "200hz", "gaming", "ips"],
  },
  {
    id: "34-4k-gaming-monitor",
    name: '34" 4K Gaming Monitor',
    category: "monitors",
    description: "Curved 180Hz beast at 3440×1440 — code left, game right.",
    emoji: "🖥",
    pricePerDay: 3,
    pricePerWeek: 19,
    pricePerMonth: 66,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ec7fda4da79c38060eba_34_4_K_Gaming_Monitor_7_3f6b2ba627.jpeg",
    imagePlaceholder: "monitor-34-4k-gaming-curved",
    slug: "/products/34-4-k-curved-monitor-180-hz",
    width: 3,
    height: 2,
    tags: [
      "monitor",
      "34-inch",
      "4k",
      "curved",
      "180hz",
      "gaming",
      "ultrawide",
    ],
  },
  {
    id: "34-4k-curved-monitor",
    name: '34" 4K Curved Monitor',
    category: "monitors",
    description:
      "Immersive 144Hz ultrawide with 121% sRGB — your panoramic workstation.",
    emoji: "🖥",
    pricePerDay: 3,
    pricePerWeek: 19,
    pricePerMonth: 66,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ec7036de3b9f5b107126_34_4_K_Ultra_Wide_Curved_Monitor_front_3636b63aed.jpeg",
    imagePlaceholder: "monitor-34-4k-curved",
    slug: "/products/4-k-ultra-wide-34",
    width: 3,
    height: 2,
    tags: ["monitor", "34-inch", "4k", "curved", "144hz", "ultrawide"],
  },
  {
    id: "32-qhd-ergonomic-monitor-lg",
    name: '32" QHD Ergonomic Monitor',
    category: "monitors",
    description:
      "LG Ergo stand with 96W USB-C charging — plug in, power up, ship code.",
    emoji: "🖥",
    pricePerDay: 3,
    pricePerWeek: 19,
    pricePerMonth: 66,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ec6a75f9b740888db34f_32_LG_Fine_Art_addtition_1_1c49831c40.jpeg",
    imagePlaceholder: "lg-32-qhd-ergo",
    slug: "/products/32-4-k-ergonomic-monitor",
    width: 3,
    height: 2,
    tags: ["monitor", "32-inch", "qhd", "usb-c", "ergonomic", "lg", "hdr10"],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  FURNITURE
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "ergonomic-office-chair",
    name: "Ergonomic Office Chair",
    category: "furniture",
    description:
      "Mesh back with 4D armrests — your spine's best friend for 12-hour sessions.",
    emoji: "🪑",
    pricePerDay: 1,
    pricePerWeek: 6,
    pricePerMonth: 20,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863eca419dead1343bef567_fantech_oca259s_chair_6_b632a0c529.jpeg",
    imagePlaceholder: "ergonomic-mesh-chair",
    slug: "/products/ergonomic-office-chair",
    width: 2,
    height: 2,
    tags: ["chair", "ergonomic", "mesh", "adjustable", "lumbar"],
  },
  {
    id: "electrical-adjustable-desk",
    name: "Electrical Adjustable Desk",
    category: "furniture",
    description: "Silent electric motor, 70–118cm — sit, stand, ship, repeat.",
    emoji: "🗄️",
    pricePerDay: 1,
    pricePerWeek: 5,
    pricePerMonth: 17,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ecb375f9b740888dd0d6_desk_titel_new_3db151d44c.jpeg",
    imagePlaceholder: "electric-standing-desk",
    slug: "/products/electrical-adjustable-desk",
    width: 4,
    height: 2,
    tags: ["desk", "standing", "electric", "adjustable", "ergonomic"],
  },
  {
    id: "mechanical-adjustable-desk",
    name: "Mechanical Adjustable Desk",
    category: "furniture",
    description:
      "No electricity needed — crank-powered height adjustment, off-grid ready.",
    emoji: "🗄️",
    pricePerDay: 2,
    pricePerWeek: 9,
    pricePerMonth: 31,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ecbbe26ecabb29020807_Mechanical_Adjustable_Desk_front_new_a83b8077b0.jpeg",
    imagePlaceholder: "mechanical-adjustable-desk",
    slug: "/products/adjustable-wooden-desk",
    width: 4,
    height: 2,
    tags: ["desk", "standing", "mechanical", "adjustable", "wooden"],
  },
  {
    id: "magnetic-whiteboard",
    name: "Magnetic Whiteboard",
    category: "furniture",
    description:
      "90×60cm with magnets, marker and eraser — brainstorm in analog.",
    emoji: "📋",
    pricePerDay: 1,
    pricePerWeek: 5,
    pricePerMonth: 17,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ee3d13016126f302acec_Magnatic_Whiteboard_6aa8a86e74.jpeg",
    imagePlaceholder: "magnetic-whiteboard-small",
    slug: "/products/magnetic-whiteboard",
    width: 2,
    height: 2,
    tags: ["whiteboard", "magnetic", "brainstorm", "office"],
  },
  {
    id: "standing-whiteboard",
    name: "Standing Whiteboard 240×120",
    category: "furniture",
    description:
      "The big board — 240×120cm for team sprints and system diagrams.",
    emoji: "📋",
    pricePerDay: 1,
    pricePerWeek: 7,
    pricePerMonth: 24,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ee44ab6c6ad11306e389_standing_whiteboard_240x120_4a5a6f2c47.jpeg",
    imagePlaceholder: "standing-whiteboard-large",
    slug: "/products/standing-whiteboard-120x240",
    width: 4,
    height: 3,
    tags: ["whiteboard", "standing", "large", "team", "brainstorm"],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  COMPUTERS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "apple-mac-studio",
    name: "Apple Mac Studio",
    category: "computers",
    description:
      "M1 Max or M2 Ultra — desktop power for video, 3D, and heavy compiles.",
    emoji: "💻",
    pricePerDay: 7,
    pricePerWeek: 49,
    pricePerMonth: 170,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ecc24ba9b0f643df7f27_Mac_Studio_M1_6_7488521ebb.jpeg",
    imagePlaceholder: "apple-mac-studio",
    slug: "/products/apple-mac-studio",
    width: 1,
    height: 1,
    tags: [
      "computer",
      "apple",
      "mac",
      "studio",
      "m1-max",
      "m2-ultra",
      "desktop",
    ],
  },
  {
    id: "apple-mac-mini-m2",
    name: "Apple Mac Mini M2",
    category: "computers",
    description:
      "Compact M2 desktop with Thunderbolt 4 — tiny footprint, big output.",
    emoji: "💻",
    pricePerDay: 4,
    pricePerWeek: 28,
    pricePerMonth: 97,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ecd836de3b9f5b10a775_Apple_Mac_Mini_M2_6_1d4fce6808.jpeg",
    imagePlaceholder: "apple-mac-mini-m2",
    slug: "/products/apple-mac-mini-m2-new",
    width: 1,
    height: 1,
    tags: ["computer", "apple", "mac", "mini", "m2", "desktop", "compact"],
  },
  {
    id: "apple-mac-mini-m4",
    name: "Apple Mac Mini M4",
    category: "computers",
    description: "Latest M4 chip, 16GB RAM — the new default for developers.",
    emoji: "💻",
    pricePerDay: 5,
    pricePerWeek: 32,
    pricePerMonth: 111,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ecea75f9b740888df13d_Mac_mini_M4_front_b152d10743.jpeg",
    imagePlaceholder: "apple-mac-mini-m4",
    slug: "/products/apple-mac-mini-m4",
    width: 1,
    height: 1,
    tags: ["computer", "apple", "mac", "mini", "m4", "desktop", "latest"],
  },
  {
    id: "windows-laptop-15",
    name: '15" Office Windows Laptop',
    category: "computers",
    description:
      "Intel i3, 8GB, 256GB SSD — reliable Windows workhorse for daily tasks.",
    emoji: "💻",
    pricePerDay: 3,
    pricePerWeek: 16,
    pricePerMonth: 55,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ecfaab6c6ad113064659_15_Office_Windows_Laptop_1_c1221bb234.jpeg",
    imagePlaceholder: "windows-laptop-15",
    slug: "/products/office-windows-laptop",
    width: 2,
    height: 2,
    tags: ["computer", "laptop", "windows", "intel", "15-inch", "portable"],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  PERIPHERALS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "logitech-mx-keyboard",
    name: "Logitech MX Keyboard",
    category: "peripherals",
    description:
      "Easy-Switch across 3 devices — the keyboard that follows your flow.",
    emoji: "⌨️",
    pricePerDay: 1,
    pricePerWeek: 7,
    pricePerMonth: 24,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ed84b43cca7090fc06ad_Logitech_MX_keys_1_9977480ae1.jpeg",
    imagePlaceholder: "logitech-mx-keyboard",
    slug: "/products/logitech-mx-keyboard",
    width: 2,
    height: 1,
    tags: ["keyboard", "logitech", "wireless", "multi-device", "mx"],
  },
  {
    id: "apple-magic-keyboard",
    name: "Apple Magic Keyboard",
    category: "peripherals",
    description:
      "Touch ID, numeric keypad, wireless — the full-size Apple typing experience.",
    emoji: "⌨️",
    pricePerDay: 2,
    pricePerWeek: 8,
    pricePerMonth: 28,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ed8c36de3b9f5b110424_magic_keyboard_with_touch_id_1_7124075f1d.jpeg",
    imagePlaceholder: "apple-magic-keyboard",
    slug: "/products/apple-magic-keyboard",
    width: 2,
    height: 1,
    tags: ["keyboard", "apple", "wireless", "touch-id", "magic"],
  },
  {
    id: "logitech-m331-mouse",
    name: "Logitech M331 Silent Mouse",
    category: "peripherals",
    description: "RedDot award winner — clicks without the click noise.",
    emoji: "🖱️",
    pricePerDay: 1,
    pricePerWeek: 1,
    pricePerMonth: 3,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ed9475f9b740888e61a6_mouse_side_M33_030834aea0.jpeg",
    imagePlaceholder: "logitech-m331-silent-mouse",
    slug: "/products/logitech-mx-mouse",
    width: 1,
    height: 1,
    tags: ["mouse", "logitech", "silent", "wireless", "budget"],
  },
  {
    id: "logitech-mx-master-s3",
    name: "Logitech MX Master Mouse S3",
    category: "peripherals",
    description:
      "8,000 DPI Darkfield, 70-day battery — the ergonomic mouse that pros swear by.",
    emoji: "🖱️",
    pricePerDay: 1,
    pricePerWeek: 6,
    pricePerMonth: 21,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ed9eefc0ee750a3e33ab_Logitech_S3_6_4cf1e523b8.jpeg",
    imagePlaceholder: "logitech-mx-master-s3",
    slug: "/products/logitech-mx-master-mouse-s3",
    width: 1,
    height: 1,
    tags: ["mouse", "logitech", "ergonomic", "wireless", "mx", "pro"],
  },
  {
    id: "apple-magic-mouse",
    name: "Apple Magic Mouse",
    category: "peripherals",
    description:
      "Multi-touch glass surface — swipe, scroll, and click the Apple way.",
    emoji: "🖱️",
    pricePerDay: 1,
    pricePerWeek: 6,
    pricePerMonth: 21,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863eda5ba5217f622e2fb20_Apple_Magic_Mouse_4_022f966524.jpeg",
    imagePlaceholder: "apple-magic-mouse",
    slug: "/products/apple-magic-mouse",
    width: 1,
    height: 1,
    tags: ["mouse", "apple", "wireless", "multi-touch", "magic"],
  },
  {
    id: "apple-magic-trackpad",
    name: "Apple Magic Trackpad",
    category: "peripherals",
    description: "Full Multi-Touch surface — gestures feel like second nature.",
    emoji: "🖱️",
    pricePerDay: 1,
    pricePerWeek: 7,
    pricePerMonth: 24,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863edade26ecabb2902e8f7_apple_magic_trackpad_1_5430d919cc.jpeg",
    imagePlaceholder: "apple-magic-trackpad",
    slug: "/products/apple-magic-trackpad",
    width: 1,
    height: 1,
    tags: ["trackpad", "apple", "wireless", "multi-touch", "magic"],
  },
  {
    id: "6-in-1-converter-hub",
    name: "6-in-1 Converter Hub",
    category: "peripherals",
    description:
      "USB-C, USB 3.0, 4K HDMI, SD card — one dongle to rule them all.",
    emoji: "🔌",
    pricePerDay: 1,
    pricePerWeek: 2,
    pricePerMonth: 7,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863edb4ff34c912c07584fa_mac_dongle_product_photo_0316bc4b50.jpeg",
    imagePlaceholder: "usb-c-hub-6in1",
    slug: "/products/6-in-1-converter-hub",
    width: 1,
    height: 1,
    tags: ["hub", "usb-c", "hdmi", "adapter", "dongle"],
  },
  {
    id: "ergonomic-laptop-stand",
    name: "Ergonomic Laptop Stand",
    category: "peripherals",
    description: 'Fits 10"–17" laptops — raise your screen, save your neck.',
    emoji: "📐",
    pricePerDay: 1,
    pricePerWeek: 2,
    pricePerMonth: 7,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ee4df1e76aede9741acb_Laptop_stand_back_new2_91df29c3c8.jpeg",
    imagePlaceholder: "ergonomic-laptop-stand",
    slug: "/products/ergonomic-laptop-stand",
    width: 2,
    height: 1,
    tags: ["stand", "laptop", "ergonomic", "adjustable"],
  },
  {
    id: "adjustable-monitor-stand",
    name: "Adjustable Monitor Stand",
    category: "peripherals",
    description:
      "11–18cm height adjustment with storage compartment underneath.",
    emoji: "📐",
    pricePerDay: 1,
    pricePerWeek: 2,
    pricePerMonth: 7,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ed4775f9b740888e3154_Adjustable_Monitor_Stand_4_e6ae3a1d06.jpeg",
    imagePlaceholder: "adjustable-monitor-stand",
    slug: "/products/adjustable-monitor-stand",
    width: 2,
    height: 1,
    tags: ["stand", "monitor", "adjustable", "storage", "ergonomic"],
  },
  {
    id: "monitor-light-bar",
    name: "Monitor Light Bar",
    category: "peripherals",
    description:
      "Mijia dimmable bar, 2700–6500K, Ra95 — zero glare on your screen.",
    emoji: "💡",
    pricePerDay: 1,
    pricePerWeek: 5,
    pricePerMonth: 17,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ed55ff34c912c07565be_Monitor_Light_Bar_1_8e97972171.jpeg",
    imagePlaceholder: "monitor-light-bar",
    slug: "/products/metal-monitor-light-bar",
    width: 2,
    height: 1,
    tags: ["light", "monitor", "dimmable", "mijia", "desk-lamp"],
  },
  {
    id: "wifi-range-extender",
    name: "WiFi Range Extender",
    category: "peripherals",
    description:
      "1200Mbps dual-band with ethernet port — kill those dead zones.",
    emoji: "📡",
    pricePerDay: 1,
    pricePerWeek: 3,
    pricePerMonth: 10,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863edd2da4da79c3806e5fe_Wifi_Range_Extender_AC_1200_6_0fe8118acf.jpeg",
    imagePlaceholder: "wifi-range-extender",
    slug: "/products/wi-fi-range-extender",
    width: 1,
    height: 1,
    tags: ["wifi", "extender", "networking", "dual-band"],
  },
  {
    id: "wifi-6-router",
    name: "Dual-Band Wi-Fi 6 Router",
    category: "peripherals",
    description:
      "TP-Link AX5400 handling 200+ devices — your villa's internet backbone.",
    emoji: "📡",
    pricePerDay: 2,
    pricePerWeek: 10,
    pricePerMonth: 35,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ede219dead1343bf7d5d_Archer_AX_72_AX_5400_Dual_Band_Gigabit_Wi_Fi_6_Router_4_69792f5825.jpeg",
    imagePlaceholder: "wifi-6-router-ax5400",
    slug: "/products/wi-fi-6-router-5-g",
    width: 1,
    height: 1,
    tags: ["wifi", "router", "wifi-6", "tp-link", "networking"],
  },
  {
    id: "smart-power-strip-6",
    name: "Smart Power Strip 6",
    category: "peripherals",
    description:
      "EU/US/AU plugs + 3× USB — the universal travel power companion.",
    emoji: "🔌",
    pricePerDay: 1,
    pricePerWeek: 2,
    pricePerMonth: 7,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ee9305dda5916ca57c4d_Xiaomi_MI_Smart_Power_Strip_Plug_white_4b97124ba0.jpeg",
    imagePlaceholder: "smart-power-strip",
    slug: "/products/smart-power-strip-6",
    width: 1,
    height: 1,
    tags: ["power", "usb", "universal", "travel", "strip"],
  },
  {
    id: "portable-tv-stand",
    name: "Portable TV Stand",
    category: "peripherals",
    description: 'Fits 32"–90" screens, 70kg max — roll your display anywhere.',
    emoji: "📺",
    pricePerDay: 1,
    pricePerWeek: 4,
    pricePerMonth: 14,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ee64efc0ee750a3ee17f_Oximus_TC_6100_2_5b3b7d0822.jpeg",
    imagePlaceholder: "portable-tv-stand-wheels",
    slug: "/products/portable-tv-stand",
    width: 2,
    height: 3,
    tags: ["stand", "tv", "portable", "wheels", "adjustable"],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  GAMING
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "nintendo-switch-2",
    name: "Nintendo Switch 2",
    category: "gaming",
    description: '7" OLED, Mario Kart World included — unwind between deploys.',
    emoji: "🎮",
    pricePerDay: 4,
    pricePerWeek: 28,
    pricePerMonth: 97,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/698584910f908e448c6bc28c_Nintendo_Switch_2_3_207ed0a9cd.jpeg",
    imagePlaceholder: "nintendo-switch-2",
    slug: "/products/nintendo-switch-2",
    width: 1,
    height: 1,
    tags: ["gaming", "nintendo", "switch", "portable", "console"],
  },
  {
    id: "sony-playstation-5",
    name: "Sony PlayStation®5",
    category: "gaming",
    description:
      "4K/120Hz, 1TB SSD, DualSense haptics — the after-work reward.",
    emoji: "🎮",
    pricePerDay: 4,
    pricePerWeek: 28,
    pricePerMonth: 97,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ed091c4df37791e5fef5_Monis_PS_5_Titel_Photo_e3d9eb0af1.jpeg",
    imagePlaceholder: "sony-ps5",
    slug: "/products/play-station-5",
    width: 1,
    height: 2,
    tags: ["gaming", "sony", "playstation", "ps5", "console", "4k"],
  },
  {
    id: "sony-psvr2",
    name: "Sony PSVR2 VR Headset",
    category: "gaming",
    description: "OLED 4K HDR with eye tracking — step into another dimension.",
    emoji: "🥽",
    pricePerDay: 4,
    pricePerWeek: 27,
    pricePerMonth: 93,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ee1705dda5916ca54630_Sony_PSVR_2_VR_Headset_1_2662290f33.jpeg",
    imagePlaceholder: "sony-psvr2",
    slug: "/products/sony-psvr-2-vr-headset",
    width: 1,
    height: 1,
    tags: ["gaming", "vr", "sony", "psvr2", "headset", "4k"],
  },
  {
    id: "smart-tv-55",
    name: '55" Smart TV 4K',
    category: "gaming",
    description:
      "4K UHD with HDR and Dolby Digital+ — big screen for big ideas.",
    emoji: "📺",
    pricePerDay: 3,
    pricePerWeek: 19,
    pricePerMonth: 66,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863edf15d1b9d7ffe2b5789_55_4_K_TV_5_6d395b4acc.jpeg",
    imagePlaceholder: "smart-tv-55-4k",
    slug: "/products/smart-tv-4-k-55",
    width: 3,
    height: 2,
    tags: ["tv", "55-inch", "4k", "smart", "hdr"],
  },
  {
    id: "smart-tv-65",
    name: '65" Smart TV 4K',
    category: "gaming",
    description: '65" 4K UHD — presentations, movie nights, or just flexing.',
    emoji: "📺",
    pricePerDay: 5,
    pricePerWeek: 29,
    pricePerMonth: 100,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863edfa66fa18d1b4b40b23_smart_tv_4k_65_1_7f45a982ed.jpeg",
    imagePlaceholder: "smart-tv-65-4k",
    slug: "/products/smart-tv-4-k-65",
    width: 4,
    height: 2,
    tags: ["tv", "65-inch", "4k", "smart", "hdr"],
  },
  {
    id: "marshall-woburn-3",
    name: "Marshall Woburn III Bluetooth",
    category: "gaming",
    description:
      "110W dual subwoofers with analog controls — rock your workspace.",
    emoji: "🔊",
    pricePerDay: 3,
    pricePerWeek: 16,
    pricePerMonth: 55,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ed5cda4da79c38068917_marshall_woburn_2_1_227171e0f8.jpeg",
    imagePlaceholder: "marshall-woburn-iii",
    slug: "/products/marshall-woburn-ii-bluetooth",
    width: 2,
    height: 1,
    tags: ["speaker", "bluetooth", "marshall", "audio", "premium"],
  },
  {
    id: "switch-2-controller-pack",
    name: "Switch 2 Controller Pack",
    category: "gaming",
    description:
      "2× Joy-Con pairs + charging stand — multiplayer mode activated.",
    emoji: "🎮",
    pricePerDay: 2,
    pricePerWeek: 12,
    pricePerMonth: 42,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ee5c5d1b9d7ffe2b90ee_Nintendo_Switch_2_extra_controller_1_6508ccd5e2.jpeg",
    imagePlaceholder: "switch-2-controller-pack",
    slug: "/products/switch-2-controller-pack",
    width: 1,
    height: 1,
    tags: ["gaming", "nintendo", "controller", "joy-con", "accessory"],
  },
  {
    id: "ps5-wireless-controller",
    name: "PS5 Wireless Controller",
    category: "gaming",
    description:
      "DualSense with haptic feedback and adaptive triggers — feel every game.",
    emoji: "🎮",
    pricePerDay: 1,
    pricePerWeek: 6,
    pricePerMonth: 21,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/69893c987a282a65befc8b55_Sony_charging_station_4_d0825bba0c.jpg",
    imagePlaceholder: "ps5-dualsense-controller",
    slug: "/products/ps-5-wireless-controller",
    width: 1,
    height: 1,
    tags: ["gaming", "controller", "ps5", "sony", "dualsense"],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  AUDIO & VIDEO
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "logitech-4k-webcam",
    name: "Logitech 4K Webcam Brio",
    category: "audio-video",
    description:
      "5× HD zoom, 4K/60fps, noise-cancel mic — look sharp on every call.",
    emoji: "📹",
    pricePerDay: 1,
    pricePerWeek: 6,
    pricePerMonth: 21,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863edbc0e38a5a59864baf8_Logitech_Brio_4_K_Webcam_6_d7ea7e69b0.jpeg",
    imagePlaceholder: "logitech-brio-4k-webcam",
    slug: "/products/logitech-4-k-webcam",
    width: 1,
    height: 1,
    tags: ["webcam", "4k", "logitech", "video", "meeting"],
  },
  {
    id: "shure-mv7-podcast-kit",
    name: "Podcast Microphone Kit",
    category: "audio-video",
    description:
      "Shure MV7 with XLR/USB — broadcast-quality sound, plug and play.",
    emoji: "🎙",
    pricePerDay: 2,
    pricePerWeek: 12,
    pricePerMonth: 42,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863edc3efc0ee750a3e4cd1_Shure_MV_7_Podcast_Microphone_Kit_1_fefd9453fb.jpeg",
    imagePlaceholder: "shure-mv7-podcast-kit",
    slug: "/products/podcast-microphone-kit",
    width: 1,
    height: 1,
    tags: ["microphone", "podcast", "shure", "xlr", "usb", "audio"],
  },
  {
    id: "soundbar-dolby-atmos",
    name: "Soundbar Dolby Atmos",
    category: "audio-video",
    description:
      "330W 3.1.2ch with wireless sub — cinema-grade sound for your desk.",
    emoji: "🔊",
    pricePerDay: 2,
    pricePerWeek: 10,
    pricePerMonth: 35,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ee0905dda5916ca54205_Soundbar_Dolby_Atmos_9a749dc791.jpeg",
    imagePlaceholder: "soundbar-dolby-atmos",
    slug: "/products/soundbar-dolby-atmos",
    width: 3,
    height: 1,
    tags: ["soundbar", "dolby", "atmos", "audio", "wireless-sub"],
  },
  {
    id: "wanbo-t6-projector",
    name: "Wanbo T6 Projector",
    category: "audio-video",
    description: 'Full HD, 550 ANSI, 120" max — turn any wall into a screen.',
    emoji: "📽️",
    pricePerDay: 2,
    pricePerWeek: 13,
    pricePerMonth: 45,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ee27ba5217f622e33b04_Projector_Wanbo_T6_Max_1_aa4529e8fd.jpeg",
    imagePlaceholder: "wanbo-t6-projector",
    slug: "/products/wanbo-t6-projector",
    width: 1,
    height: 1,
    tags: ["projector", "full-hd", "android", "portable", "video"],
  },
  {
    id: "xlr-to-3-5mm-cable",
    name: "XLR Female to 3.5mm Cable",
    category: "audio-video",
    description:
      "Canare L-2T2S, 2m, gold-plated — Japanese studio-grade connection.",
    emoji: "🎵",
    pricePerDay: 1,
    pricePerWeek: 2,
    pricePerMonth: 7,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863eec9e26ecabb2903914d_XLR_to_3_5mm_Cable_Photo_1_37b141dafc.jpeg",
    imagePlaceholder: "xlr-to-3-5mm-cable",
    slug: "/products/xlr-female-to-3-5mm-cable",
    width: 1,
    height: 1,
    tags: ["cable", "xlr", "audio", "canare", "studio"],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  HEALTH & FITNESS
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "walking-pad-r2-pro",
    name: "Foldable Walking Pad R2 Pro",
    category: "fitness",
    description: "0.5–12 km/h under your standing desk — walk while you work.",
    emoji: "🏃",
    pricePerDay: 4,
    pricePerWeek: 24,
    pricePerMonth: 83,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ed642a965324694a298a_Kingsmith_R2_Pro_R_2_Pro_1_30df9226bf.jpeg",
    imagePlaceholder: "walking-pad-foldable",
    slug: "/products/foldable-walk-pad",
    width: 2,
    height: 3,
    tags: ["fitness", "walking-pad", "foldable", "desk", "treadmill"],
  },
  {
    id: "spinning-bike",
    name: "Home Spinning Bike",
    category: "fitness",
    description:
      "Yesoul S3 with magnetic resistance and Bluetooth — morning cardio, sorted.",
    emoji: "🚴",
    pricePerDay: 4,
    pricePerWeek: 22,
    pricePerMonth: 76,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ed6b4ba9b0f643dfc903_Home_Spinning_Bike_4_45de07b098.jpeg",
    imagePlaceholder: "spinning-bike-yesoul",
    slug: "/products/home-spinning-bike-yesoul-S3",
    width: 2,
    height: 3,
    tags: ["fitness", "bike", "spinning", "cardio", "bluetooth"],
  },
  {
    id: "dumbbell-set-50kg",
    name: "Adjustable Dumbbell Weight Set",
    category: "fitness",
    description:
      "Up to 50kg with rubber grips — hotel-gym gains, villa edition.",
    emoji: "🏋️",
    pricePerDay: 1,
    pricePerWeek: 6,
    pricePerMonth: 21,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ed732a965324694a346d_Dumbbell_Barbell_50kg_Set_3_731d6080d4.jpeg",
    imagePlaceholder: "dumbbell-set-50kg",
    slug: "/products/adjustable-dumbbell-weight-set",
    width: 2,
    height: 1,
    tags: ["fitness", "dumbbell", "weights", "adjustable", "gym"],
  },
  {
    id: "massage-gun",
    name: "Massage Gun",
    category: "fitness",
    description: "3 speeds, 5 heads, whisper-quiet — desk-side recovery.",
    emoji: "💆",
    pricePerDay: 1,
    pricePerWeek: 6,
    pricePerMonth: 21,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ed7c4ba9b0f643dfda96_Massage_Gun_2_a8d7d7bda8.jpeg",
    imagePlaceholder: "massage-gun-xiaomi",
    slug: "/products/massage-gun",
    width: 1,
    height: 1,
    tags: ["fitness", "massage", "recovery", "portable"],
  },
  {
    id: "treadmill",
    name: "Treadmill",
    category: "fitness",
    description:
      "1–16 km/h, 12 programs, foldable — no excuses to skip leg day.",
    emoji: "🏃",
    pricePerDay: 3,
    pricePerWeek: 20,
    pricePerMonth: 69,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ee2ee26ecabb2903465e_Treadmill_2_7379507162.jpeg",
    imagePlaceholder: "treadmill-foldable",
    slug: "/products/treadmill",
    width: 2,
    height: 4,
    tags: ["fitness", "treadmill", "cardio", "foldable", "gym"],
  },

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  HOME APPLIANCES
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id: "starlink-kit",
    name: "Starlink Kit (incl. plan)",
    category: "appliances",
    description: "Up to 220 Mbps anywhere — internet from space, literally.",
    emoji: "🛰️",
    pricePerDay: 9,
    pricePerWeek: 59,
    pricePerMonth: 204,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ed1f2a9653246949e174_Starlink_V4_Gen_3_7_41ef714dbb.jpeg",
    imagePlaceholder: "starlink-kit-v4",
    slug: "/products/starlink-kit-incl-plan",
    width: 2,
    height: 2,
    tags: ["internet", "starlink", "satellite", "wifi", "remote"],
  },
  {
    id: "dolce-gusto-coffee",
    name: "Dolce Gusto Coffee Machine",
    category: "appliances",
    description:
      "15-bar pump, hot & cold beverages — fuel your code with capsule convenience.",
    emoji: "☕",
    pricePerDay: 2,
    pricePerWeek: 8,
    pricePerMonth: 28,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ed27efc0ee750a3dccc5_Dolce_Gusto_Type_9781_5_dd90ffc8b2.jpeg",
    imagePlaceholder: "dolce-gusto-coffee-machine",
    slug: "/products/capsule-coffee-machine",
    width: 1,
    height: 1,
    tags: ["coffee", "capsule", "dolce-gusto", "appliance"],
  },
  {
    id: "nespresso-coffee",
    name: "Nespresso Capsule Machine",
    category: "appliances",
    description: "19-bar, 25s heat-up, auto shut-off — espresso on demand.",
    emoji: "☕",
    pricePerDay: 2,
    pricePerWeek: 8,
    pricePerMonth: 28,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ed3e2a965324694a03db_Nespresso_Inissia_M105_2_8f9255da68.jpeg",
    imagePlaceholder: "nespresso-inissia",
    slug: "/products/nespresso-inissia",
    width: 1,
    height: 1,
    tags: ["coffee", "nespresso", "capsule", "espresso", "appliance"],
  },
  {
    id: "smart-tv-43",
    name: '43" Smart TV 4K',
    category: "appliances",
    description:
      "4K UHD with HDR10+ and voice control — your villa entertainment hub.",
    emoji: "📺",
    pricePerDay: 2,
    pricePerWeek: 12,
    pricePerMonth: 42,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863eddab43cca7090fc2ff4_Smart_TV_4_K_43_1_8c5b8dbc8b.jpeg",
    imagePlaceholder: "smart-tv-43-4k",
    slug: "/products/43-smart-tv-4-k",
    width: 3,
    height: 2,
    tags: ["tv", "43-inch", "4k", "smart", "hdr", "appliance"],
  },
  {
    id: "smart-tv-50",
    name: '50" Smart TV 4K',
    category: "appliances",
    description:
      "4K UHD, Dolby Digital+, voice control — bigger screen, better binge.",
    emoji: "📺",
    pricePerDay: 3,
    pricePerWeek: 15,
    pricePerMonth: 52,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863edea05dda5916ca537a1_Smart_TV_4_K_50_1_9de8d7fa6b.jpeg",
    imagePlaceholder: "smart-tv-50-4k",
    slug: "/products/smart-tv-4-k-50-grom-rent",
    width: 3,
    height: 2,
    tags: ["tv", "50-inch", "4k", "smart", "hdr", "appliance"],
  },
  {
    id: "table-fan",
    name: "Table Fan",
    category: "appliances",
    description: '20" oscillating fan — because Bali can get toasty.',
    emoji: "🌀",
    pricePerDay: 1,
    pricePerWeek: 4,
    pricePerMonth: 14,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ee7ce4297cb1b12043e1_Kris_Table_Fan_4_fba4785b6b.jpeg",
    imagePlaceholder: "table-fan-oscillating",
    slug: "/products/table-fan",
    width: 1,
    height: 1,
    tags: ["fan", "cooling", "table", "appliance"],
  },
  {
    id: "mini-bar-fridge",
    name: "Mini Bar Fridge",
    category: "appliances",
    description: "46L, 0–8°C — cold drinks arm's reach from your desk.",
    emoji: "🧊",
    pricePerDay: 1,
    pricePerWeek: 4,
    pricePerMonth: 14,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ef3205dda5916ca5e558_Mini_Bar_1_1305a9b18c.jpeg",
    imagePlaceholder: "mini-bar-fridge",
    slug: "/products/mini-bar-fridge",
    width: 1,
    height: 2,
    tags: ["fridge", "mini-bar", "cooling", "appliance"],
  },
  {
    id: "3-in-1-blender",
    name: "3-in-1 Blender",
    category: "appliances",
    description:
      "Blend, grind, chop — morning smoothies to post-surf recovery shakes.",
    emoji: "🥤",
    pricePerDay: 1,
    pricePerWeek: 3,
    pricePerMonth: 10,
    imageUrl:
      "https://cdn.prod.website-files.com/62ec28c28759bdba5015b899/6863ee3566fa18d1b4b4314e_KLAZ_3_in_1_Blender_1_e4ed6edf96.jpeg",
    imagePlaceholder: "3-in-1-blender",
    slug: "/products/3-in-1-blender",
    width: 1,
    height: 1,
    tags: ["blender", "kitchen", "smoothie", "appliance"],
  },
];

// ── Grouped by Category ──

export const productsByCategory = categories.reduce<
  Record<Category, Product[]>
>(
  (acc, cat) => {
    acc[cat.id] = products.filter((p) => p.category === cat.id);
    return acc;
  },
  {} as Record<Category, Product[]>,
);

// ── Helpers ──

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCategory(category: Category): Product[] {
  return productsByCategory[category] ?? [];
}

export function getCategoryInfo(id: Category): CategoryInfo | undefined {
  return categories.find((c) => c.id === id);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase().trim();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.includes(q)),
  );
}
