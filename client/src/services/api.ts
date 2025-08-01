import axios from 'axios';

const api = axios.create({ baseURL: '/api' });

export const fetchUser = (id: number) => api.get(`/user/${id}`);

export const plantSeed = (payload: any) => api.post('/plant', payload);

export const harvestPlant = (userId: number, plantId: string) =>
  api.post(`/harvest`, { userId, plantId });
