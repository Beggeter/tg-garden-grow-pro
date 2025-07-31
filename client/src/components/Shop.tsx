import React from 'react';
import { ShopItem } from '../types';

const shopItems: ShopItem[] = [
  { sku: 'seed_tomato',  name: 'Помидорчик',  price: 1, type: 'seed',  emoji: '🍅', description: '+1 ур./час' },
  { sku: 'booster_2x',   name: '×2 скорость', price: 5, type: 'booster', emoji: '🚀', description: '1 ч' },
  { sku: 'decor_fountain', name: 'Фонтан', price: 25, type: 'decor', emoji: '⛲', description: '+100 красоты' },
];

const Shop: React.FC = () => (
  <div style={{ padding: 12 }}>
    <h2>Магазин</h2>
    {shopItems.map(item => (
      <div key={item.sku} style={{ marginBottom: 8 }}>
        {item.emoji} {item.name} – {item.price} Stars
        <br />
        <small>{item.description}</small>
      </div>
    ))}
  </div>
);

export default Shop;
