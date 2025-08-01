import { Plant } from '../types';

export const PLANT_RULES: Record<string, { yieldPerHour: number; growMinutes: number }> = {
  seed_tomato:  { yieldPerHour: 1,  growMinutes: 2 },
  seed_pumpkin: { yieldPerHour: 3,  growMinutes: 5 },
  /* ... остальные 13 из shopItems.json */
};

export const calcHarvest = (plantedAt: Date, type: string) => {
  const rule = PLANT_RULES[type];
  if (!rule) return 0;
  const elapsed = (Date.now() - plantedAt.getTime()) / 60000; // минуты
  return Math.floor(elapsed / rule.growMinutes) * rule.yieldPerHour;
};
