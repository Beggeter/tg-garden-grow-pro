import { Plant } from '../types';

export const PLANT_RULES: Record<string, { yieldPerHour: number; growMinutes: number }> = {
  seed_tomato:     { yieldPerHour: 1,   growMinutes: 2 },
  seed_pumpkin:    { yieldPerHour: 3,   growMinutes: 5 },
  seed_strawberry: { yieldPerHour: 5,   growMinutes: 10 },
  seed_watermelon: { yieldPerHour: 10,  growMinutes: 30 },
  seed_magnolia:   { yieldPerHour: 15,  growMinutes: 60 },
  seed_cactus:     { yieldPerHour: 20,  growMinutes: 120 },
  seed_bamboo:     { yieldPerHour: 25,  growMinutes: 180 },
  seed_lavender:   { yieldPerHour: 30,  growMinutes: 240 },
  seed_cherry:     { yieldPerHour: 40,  growMinutes: 360 },
  seed_corn:       { yieldPerHour: 50,  growMinutes: 480 },
  seed_pineapple:  { yieldPerHour: 60,  growMinutes: 600 },
  seed_mango:      { yieldPerHour: 75,  growMinutes: 720 },
  seed_potato:     { yieldPerHour: 90,  growMinutes: 960 },
  seed_carrot:     { yieldPerHour: 100, growMinutes: 1200 },
  seed_wheat:      { yieldPerHour: 120, growMinutes: 1440 }
};

export const calcHarvest = (plantedAt: Date, type: string) => {
  const rule = PLANT_RULES[type];
  if (!rule) return 0;
  const elapsed = (Date.now() - plantedAt.getTime()) / 60000; // минуты
  return Math.floor(elapsed / rule.growMinutes) * rule.yieldPerHour;
};
