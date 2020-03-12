import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { withRouter, RouteComponentProps } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  header: {},
  grow: {
    flexGrow: 1
  }
});

const Header = (props: RouteComponentProps) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="transparent" className={classes.header}>
      <Toolbar>
        <Button color="primary" onClick={() => props.history.push("/")}>
          home
        </Button>
        <Button color="primary" onClick={() => props.history.push("/about")}>
          about
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
