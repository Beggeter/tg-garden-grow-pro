import React from 'react';
import shopItems from '../data/shopItems.json';

const Shop: React.FC = () => (
  <div style={{ padding: 12, fontFamily: 'Comic Sans MS, cursive' }}>
    <h2>🛒 Магазин ({shopItems.length} товара)</h2>
    {shopItems.map(item => (
      <div
        key={item.sku}
        style={{
          marginBottom: 8,
          border: '1px solid #ccc',
          borderRadius: 8,
          padding: 8,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span>
          {item.emoji} <strong>{item.name}</strong> — {item.description ?? ''}
        </span>
        <span>{item.price} ⭐</span>
      </div>
    ))}
  </div>
);

export default Shop;
