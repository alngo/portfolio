import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Motto from "app/components/motto/"

function App() {
  return (
    <Container>
      <Grid item xs={12} sm={8} md={5} >
		<Motto/>
      </Grid>
    </Container>
  );
}

export default App;
