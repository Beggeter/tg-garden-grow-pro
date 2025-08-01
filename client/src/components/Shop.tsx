import React from 'react';
import shopItems from '../data/shopItems.json';
import { payWithStars } from '../hooks/useStarsPayment';
import { activateBooster } from '../db/localDb';

interface Props {
  userId: number;
  onPlant: (seedType: string) => void;
}

const Shop: React.FC<Props> = ({ userId, onPlant }) => {
  return (
    <div style={{ padding: 12 }}>
      <h2>🛒 Магазин</h2>
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
          }}
        >
          <span>{item.emoji} <strong>{item.name}</strong></span>
          <div>
            <span>{item.price} ⭐</span>
            {item.type === 'seed' && (
              <button onClick={() => onPlant(item.sku)} style={{ marginLeft: 8 }}>
                Посадить
              </button>
            )}
            {item.type === 'booster' && (
              <button
                onClick={() => {
                  payWithStars(item.sku, userId);
                  activateBooster(item.sku, 3600000); // 1ч по умолчанию
                }}
                style={{ marginLeft: 8 }}
              >
                Купить бустер
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shop;
