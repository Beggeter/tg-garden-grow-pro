import React, { useEffect, useState } from 'react';
import { useTgUser } from '../hooks/useTgUser';
import { fetchUser } from '../services/api';
import Shop from '../components/Shop';
import PlantCard from '../components/PlantCard';

interface Plant {
  id: string;
  type: string;
  plantedAt: string; // строка, т.к. скорее всего приходит из API
}

export const GardenPage: React.FC = () => {
  const user = useTgUser();
  const [plants, setPlants] = useState<Plant[]>([]);

  useEffect(() => {
    if (user?.id) {
      fetchUser(user.id).then(res => {
        setPlants(res.data.plants || []);
      });
    }
  }, [user]);

  return (
    <div>
      <h1>Мой сад</h1>
      <Shop />
      <div className="plant-grid">
        {plants.length > 0 ? (
          plants.map((plant, index) => (
            <PlantCard key={index} plant={plant} />
          ))
        ) : (
          <p>Здесь пока ничего не растёт 🌱</p>
        )}
      </div>
    </div>
  );
};
