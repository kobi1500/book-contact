import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    width: "90%"
  },
  media: {
    height: 100,
    width: 100,
    margin: "0 auto",
    borderRadius: "50%",
    backgroundColor: "transparent"
  },

  content: {
    background: "#dedede"
  }
}));

export default function Profile({ name, email, img, gender }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={img} />
      <CardContent className={classes.content}>
        <Typography variant={"h6"}>{name}</Typography>
        <Typography variant={"caption"}>{email}</Typography>{" "}
        {gender === "female" ? (
          <i className="fa fa-female" />
        ) : (
          <i className="fa fa-male" />
        )}
      </CardContent>
    </Card>
  );
}
