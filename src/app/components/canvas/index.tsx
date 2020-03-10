import React from "react";
import System from "./utils/System";

const Canvas = () => {
  const canvas_ref = React.createRef<HTMLCanvasElement>();

  React.useEffect(() => {
    const resize_canvas = () => {
      let canvas = canvas_ref.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.position = "absolute";
      }
    };

    window.addEventListener("resize", resize_canvas);
    resize_canvas();
    return () => {
      window.removeEventListener("resize", resize_canvas);
    };
  });

  React.useEffect(() => {
    const canvas = canvas_ref.current;
    if (canvas) {
      let particle_system = new System(10, canvas);
      particle_system.loop();
    }
  });

  return <canvas ref={canvas_ref} width={1024} height={600} />;
};

export default Canvas;
