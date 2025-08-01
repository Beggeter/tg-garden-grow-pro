export const minutesLeft = (plantedAt: Date, growMinutes: number) =>
  Math.max(0, growMinutes - (Date.now() - plantedAt.getTime()) / 60000);
