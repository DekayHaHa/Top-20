import React, { Component } from "react";
import { connect } from "react-redux";
import { signInUser } from "../actions";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import "../styles/Login.scss";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: "",
      error: ""
    };
  }

  handlePost = async e => {
    e.preventDefault();
    const url = "http://localhost:3000/api/users/new";
    const userInfo = {
      id: 1,
      name: this.state.name,
      password: this.state.password,
      email: this.state.email
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      if (data.error) {
        this.setState({ error: "That email is already taken" });
      } else {
        await this.props.signInUser(data.id, this.state.name);
      }
    } catch (error) {
      this.setState(
        {
          error: `Could Not Create a New User at This Time.`
        },
      );
    }
  };

  handleSignIn = async e => {
    e.preventDefault();
    const url = "http://localhost:3000/api/users";
    const userInfo = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await response.json();
      this.props.signInUser(data.data.id, data.data.name);
    } catch (error) {
      this.setState({
        error: `Username/password does not match.`
      });
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

  signInInputs = () => {
    const { email, password } = this.state;
    return email && password ? false : true;
  };

  signUpInputs = () => {
    const { email, password, name } = this.state;
    return email && password && name ? false : true;
  };

  render() {
    const { email, password, name, error } = this.state;
    let formSubmitMethod = this.handleSignIn;
    if (error) {
      formSubmitMethod = this.handlePost;
    }
    const signInBtnToggle = this.signInInputs();
    const signUpBtnToggle = this.signUpInputs();
    return (
      <div className="Login">
        {this.props.activeUser.id > 0 && <Redirect to="/" />}
        {error && <h3 className="wrong-password">{error}</h3>}
        <form className="form" onSubmit={formSubmitMethod}>
          {error && (
            <label className="label">
              <input
                className='name-input'
                placeholder='Full Name'
                type="text"
                value={name}
                onChange={this.handleNameInput} />
            </label>
          )}
          <label label className="label">    
            <input
              className='email-input'
              placeholder='Email Address'
              type="text"
              value={email}
              onChange={this.handleEmailInput} />
          </label>
          <label label className="label">
            <input
              className='password-input'
              placeholder='Password'
              type="password"
              value={password}
              onChange={this.handlePasswordInput}
            />
          </label>
          <button className='btn signIn-btn' disabled={signInBtnToggle} onClick={this.handleSignIn}>
            Sign In
          </button>
          {error && (
            <button className='btn signUp-btn'disabled={signUpBtnToggle} onClick={this.handlePost}>
              Sign Up NOW!
            </button>
          )}
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  activeUser: PropTypes.object
};

export const mapStateToProps = state => ({
  activeUser: state.activeUser
});

export const mapDispatchtoProps = dispatch => ({
  signInUser: (id, name) => dispatch(signInUser(id, name))
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Login);
