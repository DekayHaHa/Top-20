import React, { Component } from "react";
import { fetchData } from "../utilities/api";
import { connect } from "react-redux";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: "",
      error: ""
    };
  }

  loginFetch = () => {};

  handleSubmit = event => {
    event.preventDefault();
    const url = "http://localhost:3000/api/users";
    fetchData(url).then(result => console.log(result.data[0].name));
  };

  handlePost = (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/api/users/new";
    const data = {
      id: 1,
      name: this.state.name,
      password: this.state.password,
      email: this.state.email
    };
    console.log("fired handlePost");

    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };

  handleSignIn = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3000/api/users";
    const userInfo = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email
    };
    console.log("fired handleSignIn");
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
    } catch (error) {
      this.setState({
        error: `Username/password does not match.`
      });
      console.log(this.state.error);
    }
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

  invalidInputs = () => {
    return <div>{this.state.error}</div>;
  };

  render() {
    if (this.state.error) {
      return (
        <div>
          <div>{this.invalidInputs()}</div>
          <div>
            <form onSubmit={this.handlePost}>
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

          <button onClick={this.handlePost}>Sign Up Today!</button>
        </div>
      );
    } else {
      return (
        <div>
          <form onSubmit={this.handleSignIn}>
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
}

export const mapStateToProps = state => ({});

export const mapDispatchtoProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Login);
