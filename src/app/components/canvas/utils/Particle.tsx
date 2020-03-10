import { clamp, randomVelocity } from "./math";

class Particle {
  pos: { [key: string]: number };
  dir: { [key: string]: number };
  velocity: number;
  lifetime: number;
  radius: number;
  canvas: HTMLCanvasElement;

  constructor(
    pos: { x: number; y: number; z: number },
    radius: number,
    velocity: number,
    lifetime: number,
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
    this.canvas = canvas;
  }

  get position() {
    return this.pos;
  }

  get life() {
    return this.lifetime;
  }

  move = () => {
    this.pos.x += this.dir.x ;
    this.pos.y += this.dir.y ;
  };

  render = () => {
    let context = this.canvas.getContext("2d");
    if (context) {
      context.beginPath();
      context.fillStyle = `rgba(255,255,255,${clamp(this.pos.z, 0, 255)})`;
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
