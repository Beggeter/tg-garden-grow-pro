export interface Plant {
  id: string;
  name: string;
  emoji: string;
  yieldPerHour: number;
  growMinutes: number;
  price: number; // Stars
}

export interface ShopItem {
  sku: string;
  name: string;
  price: number; // Stars
  type: 'seed' | 'booster' | 'decor' | 'skin' | 'currency';
  description: string;
}
