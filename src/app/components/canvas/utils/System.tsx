class System {
  max_particles: number;
  canvas: HTMLCanvasElement;

  constructor(max_particles: number, canvas: HTMLCanvasElement) {
    this.max_particles = max_particles;
    this.canvas = canvas;
  }

  loop = () => {};
}

export default System;
