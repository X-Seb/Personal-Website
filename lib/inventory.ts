export type Rarity = "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";

export interface InventoryItem {
  id: string;
  name: string;
  image: string;
  description: string;
  type: string;
  rarity: Rarity;
  level: number;
  effects: string[];
}

export const INVENTORY: InventoryItem[] = [
  {
    id: "macbook",
    name: "MacBook Pro",
    image: "/images/inventory/laptop-open-on-desk.webp",
    description: "The main weapon of choice. High durability, critical hit rate increased at night.",
    type: "Weapon",
    rarity: "Legendary",
    level: 81,
    effects: [
      "+50 Productivity",
      "10% Chance to overheat",
      "Grants 'Flow State' ability",
      "+80 Knowledge",
      "5% Chance to spawn money"
    ]
  },
  {
    id: "jetson",
    name: "Nvidia Jetson Orin Nano",
    image: "/images/inventory/nvidia-jetson.webp",
    description: "A pocket-sized supercomputer for edge AI. Runs hot, runs fast.",
    type: "Weapon",
    rarity: "Epic",
    level: 6,
    effects: [
      "+30 Machine Learning",
      "Passive: Fan Noise",
      "Grants 'Computer Vision' sight",
      "+1 AI Girlfriend"
    ]
  },
  {
    id: "arduino",
    name: "Arduino Mega 2560",
    image: "/images/inventory/arduino-mega.webp",
    description: "The reliable workhorse of embedded systems. Tons of pins, zero operating system.",
    type: "Weapon",
    rarity: "Uncommon",
    level: 45,
    effects: [
      "+15 Prototyping Speed",
      "Memory: 256KB (Tiny)",
      "Pinout: Massive"
    ]
  },
  {
    id: "esp32",
    name: "ESP32 Module",
    image: "/images/inventory/esp32.webp",
    description: "A tiny microcontroller with Wi-Fi and Bluetooth. Cheap, powerful, and slightly chaotic.",
    type: "Weapon",
    rarity: "Rare",
    level: 25,
    effects: [
      "+20 Wireless Range",
      "Dual Core processing",
      "Grants 'IoT' ability",
      "Boot time: Instant"
    ]
  },
  {
    id: "airpods-fake",
    name: "Knock-off AirPods",
    image: "/images/inventory/airpods.webp",
    description: "Looks like the real thing from 5 feet away. Case magnetism is questionable.",
    type: "Gear",
    rarity: "Common",
    level: 12,
    effects: [
      "+10 Style (Fake)",
      "Audio Quality: Decent",
      "Connection Drop Chance: 2%",
      "Battery life: Unpredictable"
    ]
  },
  {
    id: "stopwatch",
    name: "Digital Stopwatch",
    image: "/images/inventory/stopwatch.webp",
    description: "A relic of simple timekeeping. No apps, no distractions, just pure pressure.",
    type: "Tool",
    rarity: "Common",
    level: 43,
    effects: [
      "+10 Urgency",
      "Grants 'Timeblocking' skill",
      "-5 Procrastination",
      "-10 Distractions"
    ]
  },
  {
    id: "circuit-pack",
    name: "Component Scrapyard",
    image: "/images/inventory/hardware-pile.webp",
    description: "A chaotic collection of jumper wires, sensors, and breadboards. 50% chance to find what you need.",
    type: "Gear",
    rarity: "Epic",
    level: 27,
    effects: [
      "+50 Versatility",
      "Includes: Sensors, LEDs, Resistors",
      "Tangle risk: 100%"
    ]
  },
  {
    id: "notebook",
    name: "Analog Notebook",
    image: "/images/inventory/notebook-and-pencil.webp",
    description: "Non-volatile memory storage. Immune to hackers and battery failure.",
    type: "Tool",
    rarity: "Common",
    level: 67,
    effects: [
      "+30 Idea Retention",
      "-5 Distraction",
      "Latency: 0ms",
      "Texture: Paper",
      "Requires 'Pencil' ammo"
    ]
  },
  {
    id: "whiteboard",
    name: "Simple Whiteboard",
    image: "/images/inventory/whiteboard.webp",
    description: "A massive canvas for brainstorming. Boosts Creativity.",
    type: "Tool",
    rarity: "Uncommon",
    level: 45,
    effects: [
      "+25 Planning",
      "+10 Coolness",
      "Smell: Marker Fumes"
    ]
  },
  {
    id: "tripod",
    name: "Versatile Tripod",
    image: "/images/inventory/tripod.webp",
    description: "Three legs are better than two. Essential for stable content creation.",
    type: "Weapon",
    rarity: "Rare",
    level: 36,
    effects: [
      "+50 Stability",
      "Hands-free mode",
      "Setup time: 30s",
      "Durability: Low"
    ]
  },
  {
    id: "mic",
    name: "Desktop Mic",
    image: "/images/inventory/microphone-with-stand.webp",
    description: "Captures sound with high fidelity. Filters out background chaos.",
    type: "Tool",
    rarity: "Rare",
    level: 15,
    effects: [
      "+20 Audio Clarity",
      "+5 Charisma",
      "Range: Short",
      "Grants 'Podcaster' aura",
    ]
  },
  {
    id: "sleep-mask",
    name: "Blackout Sleep Mask",
    image: "/images/inventory/sleep-eyepatch.webp",
    description: "Forces the wearer into shutdown mode. Blocks all visual input.",
    type: "Gear",
    rarity: "Common",
    level: 54,
    effects: [
      "+100 Darkness",
      "+15 Sleep Quality",
      "Disables 'Vision' ability",
      "Grants 'Deep REM' buff",
      "Comfort: Medium"
    ]
  },
  {
    id: "earplugs",
    name: "Industrial Earplugs",
    image: "/images/inventory/earplugs.webp",
    description: "Small green cylinders that can blocks out the haters and the ambient noise.",
    type: "Gear",
    rarity: "Common",
    level: 29,
    effects: [
      "+40 Silence",
      "+10 Focus",
      "Cost: Cheap",
      "+12 Sleep Quality"
    ]
  },
  {
    id: "mouth-tape",
    name: "Sleep Tape",
    image: "/images/inventory/mouth-tape.webp",
    description: "Prevents mouth-breathing during sleep mode. Looks weird, works wonders.",
    type: "Consumable",
    rarity: "Uncommon",
    level: 24,
    effects: [
      "+20 Oxygen Efficiency",
      "Prevents 'Snoring' debuff",
      "Social Weirdness: High",
      "Stamina Regen: +5%"
    ]
  },
  {
    id: "water-bottle",
    name: "Hydration Vessel",
    image: "/images/inventory/water-bottle.webp",
    description: "Highly secure H2O container. Essential for biological function upkeep.",
    type: "Consumable",
    rarity: "Uncommon",
    level: 19,
    effects: [
      "+10 Hydration",
      "Prevents 'Headache' debuff",
      "Refillable",
      "Cooldown: 0s"
    ]
  },
];

const HIDDEN_ITEMS = [
  {
    id: "iphone",
    name: "iPhone 14",
    image: "/images/inventory/iphone.png",
    description: "A communication device and secondary brain. Contains infinite knowledge and infinite distractions.",
    type: "Weapon",
    rarity: "Epic",
    level: 85,
    effects: [
      "+100 Connectivity",
      "Camera Quality: 4K",
      "Summons 'Uber' mount",
      "10% Chance to dissapear"
    ]
  },
  {
    id: "smoothie",
    name: "Mixed Berry Smoothie",
    image: "/images/inventory/smoothie.png",
    description: "A blended concoction of frozen fruits. High viscosity, high nutrition.",
    type: "Consumable",
    rarity: "Uncommon",
    level: 5,
    effects: [
      "+30 Health",
      "+10 Brain Power",
      "Temperature: Freezing",
      "Antioxidant Buff",
      "Sugar Rush: Moderate"
    ]
  }
]