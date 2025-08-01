import React from 'react';
import { calcHarvest } from '../engine/plantManager';

interface Plant {
  type: string;
  plantedAt: string; // ISO строка
  name: string;
  emoji: string;
}

interface Props {
  plant: Plant;
  onHarvest: () => void;
}

export const PlantCard: React.FC<Props> = ({ plant, onHarvest }) => {
  const plantedDate = new Date(plant.plantedAt);
  const harvestAmount = calcHarvest(plantedDate, plant.type);
  const isReady = harvestAmount > 0;

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 8, margin: 4 }}>
      <span style={{ fontSize: 20 }}>{plant.emoji} {plant.name}</span>
      <div style={{ marginTop: 4 }}>Урожай: {harvestAmount}</div>
      <button
        onClick={onHarvest}
        disabled={!isReady}
        style={{ marginTop: 6 }}
      >
        {isReady ? 'Собрать' : 'Растёт...'}
      </button>
    </div>
  );
};
