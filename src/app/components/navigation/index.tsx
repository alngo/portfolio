import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const Navigation = () => {

  return (
    <Box
      textAlign="end"
      justifyContent="flex-end"
      flexDirection="column"
      display="flex"
      width="100%"
    >
      <Typography color="primary">About</Typography>
      <Typography color="primary">Project</Typography>
      <Typography color="primary">Contact</Typography>
    </Box>
  );
};

export default Navigation;
