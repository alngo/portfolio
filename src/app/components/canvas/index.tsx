import React from "react";
import styled from "styled-components";

const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`;

const Canvas = () => {
  const canvas_ref = React.createRef<HTMLCanvasElement>();

  React.useEffect(() => {
    const resize_canvas = () => {
      let canvas = canvas_ref.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    window.addEventListener("resize", resize_canvas);

    return () => {
      window.removeEventListener("resize", resize_canvas);
    };
  });

  return <StyledCanvas ref={canvas_ref}></StyledCanvas>;
};

export default Canvas;
