import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Route, Switch } from "react-router-dom";
import Container from "@material-ui/core/Container";
import About from "app/components/about/";
import Motto from "app/components/motto/";
import Footer from "app/components/footer/";
import Navigation from "app/components/header/";

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
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Motto />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default App;
