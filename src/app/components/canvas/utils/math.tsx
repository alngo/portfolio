export const clamp = (num: number, min: number, max: number) => {
  return Math.min(Math.max(num, min), max);
};

export const randomRange = (min: number, max: number) => {
  return Math.random() * (max - min + 1) + min;
};

export const randomVelocity = (velocity: number) => {
  return (Math.random() + velocity) * (Math.random() < 0.5 ? -1 : 1);
};

export const distance = (x1: number, y1: number, x2: number, y2: number) => {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2) * 1.0);
};

export const randomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
