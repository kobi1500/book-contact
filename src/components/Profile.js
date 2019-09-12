import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 200,
    marginTop: 70,
    marginLeft: 200
  },
  media: {
    height: 100,
    width: 100,
    display: "flex",
    margin: "0 auto",
    paddingTop: "10%",
    borderRadius: "50%",
    backgroundColor: "transparent"
  },

  content: {
    width: 200,
    background: "#dedede",
    marginTop: "100"
  }
}));

export default function Profile({ firstname, lastname, email, img }) {
  const classes = useStyles();

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={img} />
        <CardContent className={classes.content}>
          <Typography variant={"h6"}>
            {firstname} {lastname}
          </Typography>
          <Typography variant={"caption"}>{email}</Typography>{" "}
          <i className="fa fa-male"></i>
        </CardContent>
      </Card>
    </div>
  );
}
