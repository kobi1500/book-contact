import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Input from "@material-ui/core/Input";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },

  input: {
    margin: "0 auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #dedede",
    width: "30%",
    padding: "0.375rem 0.75rem",
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
    color: "#495057",
    backgroundColor: "#fff",
    borderRadius: "0.25rem"
  }
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Input placeholder="Search User" className={classes.input} />
        </Toolbar>
      </AppBar>
    </div>
  );
}
