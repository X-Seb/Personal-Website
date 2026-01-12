export type Rarity = "Common" | "Uncommon" | "Rare" | "Epic" | "Legendary";

export interface InventoryItem {
  id: string;
  name: string;
  image: string;
  description: string;
  type: string; // e.g., "Weapon", "Gear", "Consumable", "Software"
  rarity: Rarity;
  level: number;
  effects: string[]; // e.g., ["+10 Coding Speed", "+5 Charisma"]
}

export const INVENTORY: InventoryItem[] = [
  // --- WEAPONS (Main Tech) ---
  {
    id: "macbook",
    name: "M3 MacBook Pro",
    image: "/images/inventory/macbook.png",
    description: "The main weapon of choice. High durability, critical hit rate increased at night.",
    type: "Weapon",
    rarity: "Legendary",
    level: 99,
    effects: [
      "+50 Productivity",
      "10% Chance to overheat",
      "Grants 'Flow State' ability",
      "Wallet damage: Critical",
      "Deploy time: Instant"
    ],
  },
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
      "-20 Focus (when notifications on)",
      "Camera Quality: 4K",
      "Summons 'Uber' mount",
      "Battery drain: High"
    ],
  },
  {
    id: "jetson",
    name: "Nvidia Jetson Orin Nano",
    image: "/images/inventory/jetson.png",
    description: "A pocket-sized supercomputer for edge AI. Runs hot, runs fast.",
    type: "Weapon",
    rarity: "Epic",
    level: 70,
    effects: [
      "+30 Machine Learning",
      "Requires 'Linux Driver' skill",
      "Passive: Fan Noise",
      "Grants 'Computer Vision' sight",
      "Power consumption: Low"
    ],
  },
  {
    id: "arduino",
    name: "Arduino Mega 2560",
    image: "/images/inventory/arduino.png",
    description: "The reliable workhorse of embedded systems. Tons of pins, zero operating system.",
    type: "Weapon",
    rarity: "Rare",
    level: 45,
    effects: [
      "+15 Prototyping Speed",
      "Invulnerable to OS crashes",
      "Memory: 256KB (Tiny)",
      "Grants 'C++' proficiency",
      "Pinout: Massive"
    ],
  },
  {
    id: "esp32",
    name: "ESP32 Module",
    image: "/images/inventory/esp32.png",
    description: "A tiny microcontroller with Wi-Fi and Bluetooth. Cheap, powerful, and slightly chaotic.",
    type: "Weapon",
    rarity: "Uncommon",
    level: 30,
    effects: [
      "+20 Wireless Range",
      "Cost to deploy: $5",
      "Dual Core processing",
      "Grants 'IoT' ability",
      "Boot time: Instant"
    ],
  },

  // --- GEAR (Tools & Wearables) ---
  {
    id: "airpods-fake",
    name: "Knock-off AirPods",
    image: "/images/inventory/airpods.png",
    description: "Looks like the real thing from 5 feet away. Case magnetism is questionable.",
    type: "Gear",
    rarity: "Uncommon",
    level: 12,
    effects: [
      "+10 Style (Fake)",
      "Audio Quality: Mid",
      "Connection Drop Chance: 15%",
      "Cost efficiency: Maximum",
      "Battery life: Unpredictable"
    ],
  },
  {
    id: "stopwatch",
    name: "Digital Stopwatch",
    image: "/images/inventory/stopwatch.png",
    description: "A relic of simple timekeeping. No apps, no distractions, just pure pressure.",
    type: "Gear",
    rarity: "Common",
    level: 5,
    effects: [
      "+10 Urgency",
      "Grants 'Timeboxing' skill",
      "Battery life: 2 years",
      "-5 Procrastination",
      "Simple UI buff"
    ],
  },
  {
    id: "circuit-pack",
    name: "Component Scrapyard",
    image: "/images/inventory/wires.png",
    description: "A chaotic box of jumper wires, sensors, and breadboards. 50% chance to find what you need.",
    type: "Gear",
    rarity: "Rare",
    level: 25,
    effects: [
      "+50 Versatility",
      "Inventory Clutter: High",
      "Grants 'MacGyver' perk",
      "Includes: Sensors, LEDs, Resistors",
      "Tangle risk: 100%"
    ],
  },
  {
    id: "notebook",
    name: "Analog Notebook",
    image: "/images/inventory/notebook.png",
    description: "Non-volatile memory storage. Immune to hackers and battery failure.",
    type: "Gear",
    rarity: "Common",
    level: 1,
    effects: [
      "+10 Idea Retention",
      "No Auto-Correct debuff",
      "Latency: 0ms",
      "Texture: Paper",
      "Requires 'Pencil' ammo"
    ],
  },
  {
    id: "whiteboard",
    name: "Wall Whiteboard",
    image: "/images/inventory/whiteboard.png",
    description: "A massive canvas for brainstorming. Makes you look like a mad scientist.",
    type: "Gear",
    rarity: "Rare",
    level: 10,
    effects: [
      "+25 Planning",
      "+10 Intelligence (Visual)",
      "Erasable History",
      "Grants 'Teacher' aura",
      "Smell: Marker Fumes"
    ],
  },
  {
    id: "tripod",
    name: "Phone Tripod",
    image: "/images/inventory/tripod.png",
    description: "Three legs are better than two. Essential for stable content creation.",
    type: "Gear",
    rarity: "Common",
    level: 8,
    effects: [
      "+50 Stability",
      "Hands-free mode",
      "Setup time: 30s",
      "Grants 'Vlogger' status",
      "Durability: Low"
    ],
  },
  {
    id: "mic",
    name: "Desktop Mic",
    image: "/images/inventory/mic.png",
    description: "Captures voice data with high fidelity. Filters out background chaos.",
    type: "Gear",
    rarity: "Uncommon",
    level: 15,
    effects: [
      "+20 Audio Clarity",
      "+5 Charisma",
      "Range: Short",
      "Grants 'Podcaster' voice",
      "Requires 'Silence' environment"
    ],
  },
  {
    id: "sleep-mask",
    name: "Blackout Sleep Mask",
    image: "/images/inventory/mask.png",
    description: "Forces the user into shutdown mode. Blocks all visual input.",
    type: "Gear",
    rarity: "Common",
    level: 1,
    effects: [
      "+100 Darkness",
      "+15 Sleep Quality",
      "Disables 'Vision'",
      "Grants 'Deep REM' buff",
      "Comfort: Medium"
    ],
  },
  {
    id: "earplugs",
    name: "Industrial Earplugs",
    image: "/images/inventory/earplugs.png",
    description: "A jar of orange foam cylinders. Blocks out the haters and the construction noise.",
    type: "Gear",
    rarity: "Uncommon",
    level: 1,
    effects: [
      "+40 Silence",
      "+10 Focus",
      "Disables 'Hearing'",
      "Cost: Cheap",
      "Reusability: Low"
    ],
  },
  {
    id: "mouth-tape",
    name: "Sleep Tape",
    image: "/images/inventory/tape.png",
    description: "Prevents mouth-breathing during sleep mode. Looks weird, works wonders.",
    type: "Consumable",
    rarity: "Rare",
    level: 1,
    effects: [
      "+20 Oxygen Efficiency",
      "+10 Jaw Structure",
      "Prevents 'Snoring' debuff",
      "Social Weirdness: High",
      "Stamina Regen: +5%"
    ],
  },

  // --- CONSUMABLES (Food & Fuel) ---
  {
    id: "water-bottle",
    name: "Hydration Vessel",
    image: "/images/inventory/water.png",
    description: "H2O container. Essential for biological function upkeep.",
    type: "Consumable",
    rarity: "Common",
    level: 1,
    effects: [
      "+10 Hydration",
      "Prevents 'Headache' debuff",
      "Refillable",
      "Leak Risk: 5%",
      "Cooldown: 0s"
    ],
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
    ],
  },
];