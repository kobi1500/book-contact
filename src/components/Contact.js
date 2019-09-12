import React, { Component } from "react";
import Profile from "./Profile";
import GridList from "@material-ui/core/GridList";
import Button from "@material-ui/core/Button";

export default class Contact extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          firstname: "kobi",
          lastname: "dahan",
          email: "kobi6255@gmail.com",
          img: "/img/male.jpg"
        },
        {
          id: 2,
          firstname: "shir",
          lastname: "atar",
          email: "shir@gmail.com",
          img: "/img/female.jpg"
        },
        {
          id: 3,
          firstname: "dolev",
          lastname: "dahan",
          email: "dolev@gmail.com",
          img: "/img/male.jpg"
        },
        {
          id: 4,
          firstname: "kineret",
          lastname: "bredichin",
          email: "kineret@gmail.com",
          img: "/img/female.jpg"
        },
        {
          id: 5,
          firstname: "sapir",
          lastname: "albilia",
          email: "sapir@gmail.com",
          img: "/img/female.jpg"
        },
        {
          id: 6,
          firstname: "batel",
          lastname: "kandelker",
          email: "batel@gmail.com",
          img: "/img/female.jpg"
        },
        {
          id: 7,
          firstname: "bareket",
          lastname: "matmon",
          email: "bareket@gmail.com",
          img: "/img/female.jpg"
        },
        {
          id: 8,
          firstname: "ron",
          lastname: "lalum",
          email: "ron@gmail.com",
          img: "/img/male.jpg"
        },
        {
          id: 9,
          firstname: "aviel",
          lastname: "sasson",
          email: "aviel@gmail.com",
          img: "/img/male.jpg"
        },
        {
          id: 10,
          firstname: "aviel",
          lastname: "sasson",
          email: "aviel@gmail.com",
          img: "/img/male.jpg"
        }
      ]
    };
  }
  render() {
    const contact = this.state.data.slice(0, 9);
    return (
      <div>
        <GridList>
          {contact.map(contact => {
            return (
              <Profile
                key={contact.id}
                img={contact.img}
                firstname={contact.firstname}
                lastname={contact.lastname}
                email={contact.email}
              />
            );
          })}
        </GridList>
        <Button
          variant="contained"
          color="primary"
          style={{ display: "flex", margin: "5% auto" }}
        >
          Primary
        </Button>
      </div>
    );
  }
}
