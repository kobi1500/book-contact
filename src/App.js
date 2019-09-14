import React, { Component } from "react";
import Filter from "./components/Filter";
import List from "./components/List";
import axios from "axios";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      original_list: [],
      filtered_list: [],
      limit: 9
    };

    this.LoadMore = this.LoadMore.bind(this);
  }

  getUsers() {
    axios
      .get("https://randomuser.me/api/?results=100")

      .then(response =>
        response.data.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          email: `${user.email}`,
          image: `${user.picture.medium}`,
          gender: `${user.gender}`
        }))
      )
      .then(users => {
        this.setState({
          original_list: users,
          filtered_list: users
        });
      })
      .catch(error => this.setState({ error }));
  }
  componentDidMount() {
    this.getUsers();
  }

  update_list_state = filtered_list => {
    this.setState({ filtered_list });
  };

  LoadMore() {
    this.setState(prev => {
      return { limit: this.state.limit + 9 };
    });
  }

  render() {
    return (
      <div style={{ marginBottom: 10 }}>
        <Filter
          list_data={this.state.original_list}
          on_filter={this.update_list_state}
        />
        <List
          list_data={this.state.filtered_list}
          LoadMore={this.LoadMore}
          limit={this.state.limit}
        />
      </div>
    );
  }
}
