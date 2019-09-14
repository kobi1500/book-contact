import React from "react";
import Profile from "./Profile";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default ({ list_data, LoadMore, limit }) => {
  return (
    <div style={{ textAlign: "center" }}>
      {create_list_ui(list_data, limit)}
      <Button variant="contained" color="primary" onClick={LoadMore}>
        Load More
      </Button>
    </div>
  );
};

const create_list_ui = (users, limit) => (
  <div style={{ flexGrow: 1, marginTop: 100, marginBottom: 40 }}>
    <Grid container spacing={3}>
      {users.slice(0, limit).map(user => {
        const { gender, name, email, image } = user;
        return (
          <Grid item xs={4} key={name}>
            <Profile img={image} name={name} email={email} gender={gender} />
          </Grid>
        );
      })}
    </Grid>
  </div>
);
