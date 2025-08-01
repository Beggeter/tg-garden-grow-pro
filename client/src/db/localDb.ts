export const activateBooster = (sku: string, durationMs: number) => {
  const boosters = JSON.parse(localStorage.getItem('boosters') || '{}');
  boosters[sku] = Date.now() + durationMs;
  localStorage.setItem('boosters', JSON.stringify(boosters));
};

export const getActiveBoosters = (): string[] => {
  const boosters = JSON.parse(localStorage.getItem('boosters') || '{}');
  const now = Date.now();
  return Object.keys(boosters).filter(key => boosters[key] > now);
};
