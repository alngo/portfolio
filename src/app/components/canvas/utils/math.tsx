export const clamp = (num: number, min: number, max: number) => {
  return Math.min(Math.max(num, min), max);
};

export const randomRange = (min: number, max: number) => {
  return Math.random() * (max - min + 1) + min;
};

export const randomVelocity = (velocity: number) => {
  return (Math.random() + velocity) * (Math.random() < 0.5 ? -1 : 1);
};
