import { randomVelocity, distance } from "./math";

class Particle {
  pos: { [key: string]: number };
  dir: { [key: string]: number };
  velocity: number;
  lifetime: number;
  radius: number;
  color: string;
  canvas: HTMLCanvasElement;

  constructor(
    pos: { x: number; y: number; z: number },
    radius: number,
    velocity: number,
    lifetime: number,
    color: string,
    canvas: HTMLCanvasElement
  ) {
    this.pos = pos;
    this.velocity = velocity;
    this.dir = {
      x: randomVelocity(this.velocity),
      y: randomVelocity(this.velocity),
      z: randomVelocity(this.velocity)
    };
    this.radius = radius;
    this.lifetime = lifetime;
    this.color = color;
    this.canvas = canvas;
  }

  get position() {
    return this.pos;
  }

  get life() {
    return this.lifetime;
  }

  move = () => {
    this.pos.x += this.dir.x;
    this.pos.y += this.dir.y;
  };

  connect = (particles: Particle[]) => {
    let context = this.canvas.getContext("2d");
    if (context) {
      particles.forEach(particle => {
        if (
          distance(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y) < 100
        ) {
          if (context) {
            context.beginPath();
            context.strokeStyle = this.color + "25"
            context.moveTo(this.pos.x, this.pos.y);
            context.lineTo(particle.pos.x, particle.pos.y);
            context.stroke();
          }
        }
      });
    }
  };

  render = () => {
    let context = this.canvas.getContext("2d");
    if (context) {
      context.beginPath();
      context.fillStyle = this.color;
      context.arc(
        this.pos.x,
        this.pos.y,
        this.radius * 1,
        0,
        Math.PI * 2,
        true
      );
      context.closePath();
      context.fill();
    }
  };

  decline = () => {
    this.lifetime--;
  };
}

export default Particle;
