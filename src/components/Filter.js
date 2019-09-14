import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Input from "@material-ui/core/Input";

export default class Filter extends Component {
  update_list = event => {
    const txt = event.target.value;
    const { list_data, on_filter } = this.props;

    const filtered_list = list_data.filter(item =>
      item.name.toLowerCase().includes(txt.toLowerCase())
    );

    on_filter(filtered_list);
  };

  render() {
    return (
      <div>
        <AppBar position="fixed">
          <Toolbar>
            <Input
              placeholder="Search User"
              style={{
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
              }}
              onChange={this.update_list}
            />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
