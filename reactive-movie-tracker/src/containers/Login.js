import React, { Component } from "react";
import { fetchData } from "../utilities/api";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: ""
    };
  }

  loginFetch = () => {};

  handleSubmit = event => {
    event.preventDefault();
    const url = "http://localhost:3000/api/users";
    fetchData(url).then(result => console.log(result.data[0].name));
  };

  handlePost = () => {
    const url = "http://localhost:3000/api/users/new";
    const data = {
      id: 1,
      name: this.state.name,
      password: this.state.password,
      email: this.state.email
    };
    console.log("fired");

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      // .then(res => res.json())
      // .then(response => console.log("Success:", JSON.stringify(response)))
      // .catch(error => console.error("Error:", error));
  };

  handleNameInput = event => {
    this.setState({
      name: event.target.value
    });
  };

  handlePasswordInput = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleEmailInput = event => {
    this.setState({
      email: event.target.value
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handlePost}>POST</button>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameInput}
            />
          </label>
          <label>
            Password:
            <input
              type="text"
              value={this.state.password}
              onChange={this.handlePasswordInput}
            />
          </label>
          <label>
            Email:
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleEmailInput}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export { Login };
