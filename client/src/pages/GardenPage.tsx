import React, { useEffect, useState } from 'react';
import { useTgUser } from '../hooks/useTgUser';
import { fetchUser, harvestPlant, plantSeed } from '../services/api';
import Shop from '../components/Shop';
import { PlantCard } from '../components/PlantCard';
import shopItems from '../data/shopItems.json';
import { useStarsPayment } from '../hooks/useStarsPayment';

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
  const { pay } = useStarsPayment();

  const enrichPlant = (plant: any): Plant => {
    const match = shopItems.find(item => item.sku === plant.type);
    return {
      ...plant,
      name: match?.name || '???',
      emoji: match?.emoji || '🌱',
    };
  };

  const loadPlants = () => {
    if (user?.id) {
      fetchUser(user.id).then(res => {
        setPlants((res.data.plants || []).map(enrichPlant));
      });
    }
  };

  useEffect(() => {
    loadPlants();
  }, [user]);

  const handleHarvest = async (plantId: string) => {
    if (user?.id) {
      await harvestPlant(user.id, plantId);
      loadPlants();
    }
  };

  const handlePlant = async (type: string) => {
    if (user?.id) {
      await plantSeed({ userId: user.id, type });
      loadPlants();
    }
  };

  const handlePay = (sku: string) => {
    if (user?.id) {
      pay(sku, user.id);
    }
  };

  return (
    <div>
      <h1>Мой сад</h1>
      {user?.id && <Shop userId={user.id} onPlant={handlePlant} onPay={handlePay} />}
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
