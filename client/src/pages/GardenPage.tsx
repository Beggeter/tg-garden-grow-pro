import React, { useEffect, useState } from 'react';
import { useTgUser } from '../hooks/useTgUser';
import { fetchUser, plantSeed } from '../services/api';
import Shop from '../components/Shop';

export const GardenPage: React.FC = () => {
  const user = useTgUser();
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    if (user?.id) fetchUser(user.id).then(r => setPlants(r.data.plants));
  }, [user]);
  return (
    <div>
      <h1>Мой сад</h1>
      <Shop />
      {/* здесь позже map по plants */}
    </div>
  );
};
