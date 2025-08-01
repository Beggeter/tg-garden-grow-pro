import { openDB } from 'idb';
const dbPromise = openDB('garden-db', 1, {
  upgrade(db) { db.createObjectStore('plants', { keyPath: 'id' }); }
});
export const savePlant = (p: any) => dbPromise.then(db => db.put('plants', p));
export const getPlants = () => dbPromise.then(db => db.getAll('plants'));
