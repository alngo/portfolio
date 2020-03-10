class Particles {
  x: number;
  y: number;
  velocity: number;
  opacity: number;
  lifetime: number;
  radius: number;
  canvas: HTMLCanvasElement;

  constructor(
    x: number,
    y: number,
    radius: number,
    velocity: number,
    lifetime: number,
    opacity: number,
    canvas: HTMLCanvasElement
  ) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.velocity = velocity;
    this.lifetime = lifetime;
    this.opacity = opacity;
    this.canvas = canvas;
  }

  move = () => {
    this.x = this.x + Math.random();
    this.y = this.y + Math.random();
  };

  render = () => {
    let context = this.canvas.getContext("2d");

    context.beginPath();
    context.fillStyle = "#fff7";
    context.arc(this.x, this.y, this.radius * 4, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();

    context.beginPath();
    context.fillStyle = "#fffa";
    context.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();

    context.beginPath();
    context.fillStyle = "#fffd";
    context.arc(this.x, this.y, this.radius * 2, 0, Math.PI * 2, true);
    context.closePath();

    context.beginPath();
    context.fillStyle = "#fff";
    context.arc(this.x, this.y, this.radius * 1, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();
  };

  frame = () => {
    this.move();
    this.render();
  };
}

export default Particles;
