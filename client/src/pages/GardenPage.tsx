import React, { useEffect, useState, useCallback } from 'react';
import Shop from '../components/Shop';
import { loadGameState, saveGameState, getActiveBoosters } from '../db/localDb';
import { calcHarvest, PLANT_RULES } from '../engine/plantManager';
import PlantCard from '../components/PlantCard';
import ActiveBoosters from '../components/ActiveBoosters';
import GardenDecor from '../components/GardenDecor';
import { payWithStars } from '../hooks/useStarsPayment';

interface Plant {
  sku: string;
  plantedAt: string;
}

interface GameState {
  plants: Plant[];
  decors: string[];
  currency: number;
}

const GardenPage: React.FC = () => {
  const [state, setState] = useState<GameState>(() => loadGameState());
  const [boosters, setBoosters] = useState(getActiveBoosters());

  useEffect(() => {
    saveGameState(state);
  }, [state]);

  const updateBoosters = useCallback(() => {
    setBoosters(getActiveBoosters());
  }, []);

  useEffect(() => {
    const interval = setInterval(updateBoosters, 30000); // Проверка бустеров каждые 30 секунд
    return () => clearInterval(interval);
  }, [updateBoosters]);

  const handlePlant = (sku: string) => {
    if (state.plants.length >= 20) {
      alert('🌱 Максимум растений уже посажен!');
      return;
    }
    setState(prev => ({
      ...prev,
      plants: [...prev.plants, { sku, plantedAt: new Date().toISOString() }]
    }));
  };

  const handleHarvest = (index: number) => {
    const plant = state.plants[index];
    const rule = PLANT_RULES[plant.sku];
    const harvestedAmount = calcHarvest(new Date(plant.plantedAt), rule, boosters);

    setState(prev => ({
      ...prev,
      currency: prev.currency + harvestedAmount,
      plants: prev.plants.filter((_, idx) => idx !== index)
    }));
  };

  const handlePurchase = (sku: string) => {
    payWithStars(sku, 12345);
    alert(`✅ Покупка ${sku} успешно завершена!`);
    // Дополнительно реализовать логику активации предметов и декора
  };

  return (
    <div className="garden-container">
      <h1 className="garden-title">🌱 Мой прекрасный сад</h1>

      <Shop userId={12345} onPlant={handlePlant} onPurchase={handlePurchase} />

      <ActiveBoosters boosters={boosters} />

      <div className="garden-field">
        {state.plants.map((plant, index) => (
          <PlantCard
            key={index}
            plant={plant}
            harvestableAmount={calcHarvest(new Date(plant.plantedAt), PLANT_RULES[plant.sku], boosters)}
            onHarvest={() => handleHarvest(index)}
          />
        ))}
      </div>

      <GardenDecor items={state.decors} />

      <div className="currency-display">
        💰 Твои звёзды: <strong>{state.currency} XTR ⭐️</strong>
      </div>
    </div>
  );
};

export default GardenPage;
