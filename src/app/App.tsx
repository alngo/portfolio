import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <Container >
      <Grid direction="column" alignItems="center">
        <Box height="100%">
          <Typography variant="h3" color="primary">
            <strong>Seek.</strong>
          </Typography>
          <Typography variant="h2" color="secondary">
            <strong>KNOWLEDGE</strong>
          </Typography>
        </Box>
      </Grid>
    </Container>
  );
}

export default App;
