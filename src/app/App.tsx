import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Motto from "app/components/motto/";
import Footer from "app/components/footer/";
import Header from "app/components/header/";

const useStyles = makeStyles({
  root: {
    position: "relative",
    zIndex: 1
  }
});

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container classes={{ root: classes.root }}>
        <Header />
        <Grid item xs={12} sm={8} md={8}>
          <Motto />
        </Grid>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default App;
