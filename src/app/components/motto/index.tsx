import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import styled, { keyframes } from "styled-components";
import useTypingEffect from "./hooks/useTypingEffect";

const color = "rgba(255,255,255,.75)";

const blink = keyframes`
	from {
		border-right-color: ${color};
	}
  	to {
		border-right-color: transparent;
	}
`;

const BlinkCursor = styled.strong`
  animation: ${blink} 0.75s linear infinite;
  border-right: solid 3px ${color};
  padding-right: 3px;
`;

const Motto = () => {
  const mottos = Object.freeze(["KNOWLEDGE.", "BEST PRACTICES.", "INNOVATION."]);
  const text = useTypingEffect(mottos);
  return (
    <Box justifyContent="center" flexDirection="column" display="flex">
      <Typography variant="h3" color="secondary">
        <strong>Seek</strong>
      </Typography>
      <Typography variant="h2" color="primary">
        <BlinkCursor>{text}</BlinkCursor>
      </Typography>
    </Box>
  );
};

export default Motto;