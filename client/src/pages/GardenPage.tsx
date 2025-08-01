import React, { useEffect, useState } from 'react';
import { useTgUser } from '../hooks/useTgUser';
import { fetchUser, harvestPlant } from '../services/api';
import Shop from '../components/Shop';
import { PlantCard } from '../components/PlantCard';

interface Plant {
  id: string;
  type: string;
  plantedAt: string;
  name: string;
  emoji: string;
}

export const GardenPage: React.FC = () => {
  const user = useTgUser();
  const [plants, setPlants] = useState<Plant[]>([]);

  // Получить растения пользователя
  const loadPlants = () => {
    if (user?.id) {
      fetchUser(user.id).then(res => {
        setPlants(res.data.plants || []);
      });
    }
  };

  useEffect(() => {
    loadPlants();
  }, [user]);

  // Обработка сбора урожая
  const handleHarvest = async (plantId: string) => {
    if (user?.id) {
      await harvestPlant(user.id, plantId);
      loadPlants(); // обновить список после сбора
    }
  };

  return (
    <div>
      <h1>Мой сад</h1>
      <Shop />
      <div className="plant-grid">
        {plants.length > 0 ? (
          plants.map((plant, index) => (
            <PlantCard
              key={plant.id || index}
              plant={plant}
              onHarvest={() => handleHarvest(plant.id)}
            />
          ))
        ) : (
          <p>Здесь пока ничего не растёт 🌱</p>
        )}
      </div>
    </div>
  );
};
