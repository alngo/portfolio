import Particle from "./Particle";
import { randomRange } from "./math";

class System {
  max_particles: number;
  canvas: HTMLCanvasElement;
  particles: Particle[];

  constructor(max_particles: number, canvas: HTMLCanvasElement) {
    this.max_particles = max_particles;
    this.canvas = canvas;
    this.particles = [];
  }

  start_animation = () => {
    requestAnimationFrame(this.update);
  };

  clear_canvas = () => {
    let context = this.canvas.getContext("2d");
    if (context) {
      context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  };

  remove_dead_particles = () => {
    this.particles = this.particles.filter(particle => {
      let pos = particle.position;
      if (pos.x >= this.canvas.width || pos.x <= 0) return 0;
      else if (pos.y >= this.canvas.height || pos.y <= 0) return 0;
      return 1;
    });
  };

  generate_particles = () => {
    while (this.particles.length < this.max_particles) {
      this.particles = this.particles.concat(
        new Particle(
          {
            x: Math.floor(randomRange(1, this.canvas.width)),
            y: Math.floor(randomRange(1, this.canvas.height)),
            z: 255
          },
          1,
          0.05,
          1000,
          this.canvas
        )
      );
    }
  };

  update = () => {
    this.clear_canvas();
    this.generate_particles();
    this.particles.forEach(particle => {
      particle.move();
      particle.render();
      particle.decline();
    });
    this.remove_dead_particles();
    requestAnimationFrame(this.update);
  };
}

export default System;
