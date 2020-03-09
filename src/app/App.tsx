import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Motto from "app/components/motto/";
import Navigation from "app/components/navigation/";

function App() {
  return (
    <Container>
      <Grid item xs={12} sm={8} md={8}>
        <Motto />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
        <Navigation />
      </Grid>
    </Container>
  );
}

export default App;
