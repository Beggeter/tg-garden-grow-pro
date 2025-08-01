import React from 'react';
import { calcHarvest } from '../engine/plantManager';
import { isBoosterActive } from '../db/localDb';

interface Plant {
  type: string;
  plantedAt: string;
  name: string;
  emoji: string;
}

interface Props {
  plant: Plant;
  onHarvest: () => void;
}

export const PlantCard: React.FC<Props> = ({ plant, onHarvest }) => {
  const plantedDate = new Date(plant.plantedAt);
  let harvestAmount = calcHarvest(plantedDate, plant.type);

  if (isBoosterActive('booster_2x')) harvestAmount *= 2;
  if (isBoosterActive('booster_3x')) harvestAmount *= 3;

  const isReady = harvestAmount > 0;

  return (
    <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 8, margin: 4 }}>
      <span>{plant.emoji} {plant.name}</span>
      <div>Урожай: {harvestAmount}</div>
      <button onClick={onHarvest} disabled={!isReady}>
        {isReady ? 'Собрать' : 'Растёт...'}
      </button>
    </div>
  );
};
