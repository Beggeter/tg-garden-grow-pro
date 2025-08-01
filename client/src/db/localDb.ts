export const getActiveBoosters = (): Record<string, number> => {
  const raw = localStorage.getItem('activeBoosters');
  return raw ? JSON.parse(raw) : {};
};

export const activateBooster = (sku: string, durationMs: number) => {
  const boosters = getActiveBoosters();
  boosters[sku] = Date.now() + durationMs;
  localStorage.setItem('activeBoosters', JSON.stringify(boosters));
};

export const isBoosterActive = (sku: string): boolean => {
  const boosters = getActiveBoosters();
  return boosters[sku] && boosters[sku] > Date.now();
};
