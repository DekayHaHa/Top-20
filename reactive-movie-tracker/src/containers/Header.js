import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signInUser, addFavorites } from "../actions/index";

const Header = class extends Component {
  clearUserData = () => {
    this.props.signInUser(0, "")
     this.props.addFavorites([]);
  };

  render() {
    return (
      <div>
        <h2>Welcome Back {this.props.activeUser.name} </h2>
        <Link to="/login">User Sign In</Link>

        <Link to="/login">
          <button onClick={this.clearUserData}>Sign Out?</button>
        </Link>
      </div>
    );
  }
};

export const mapStateToProps = state => ({
  activeUser: state.activeUser
});

export const mapDispatchtoProps = dispatch => ({
  signInUser: (id, name) => dispatch(signInUser(id, name)),
  addFavorites: movies => dispatch(addFavorites(movies))
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Header);
