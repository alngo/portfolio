import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Motto from "app/components/motto/";
import Navigation from "app/components/navigation/";

const useStyles = makeStyles({
  root: {
    position: "relative",
    zIndex: 1
  }
});

function App() {
  const classes = useStyles();

  return (
    <Container classes={{ root: classes.root }}>
      <Grid item xs={12} sm={8} md={8}>
        <Motto />
      </Grid>
      <Grid item xs={12} sm={4} md={4}>
      </Grid>
    </Container>
  );
}

export default App;
