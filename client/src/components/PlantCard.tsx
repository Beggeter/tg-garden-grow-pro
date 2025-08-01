import React from 'react';
interface Props { plant: any; onHarvest: () => void }
export const PlantCard: React.FC<Props> = ({ plant, onHarvest }) => (
  <div style={{ border: '1px solid #ccc', borderRadius: 8, padding: 8, margin: 4 }}>
    <span>{plant.emoji} {plant.name}</span>
    <button onClick={onHarvest}>Собрать</button>
  </div>
);
