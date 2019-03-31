import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signInUser, signOutUser } from "../actions/index";
import PropTypes from "prop-types";
import "../styles/Header.scss";

export const Header = class extends Component {
  clearUserData = () => {
    this.props.signOutUser()
  };

  render() {
    const { activeUser } = this.props
    let buttonText;
    let urlPath;
    if (activeUser.id) {
      buttonText = 'Sign Out'
      urlPath = 'favorites'
    } else {
      buttonText = 'User Sign In'
      urlPath = 'login'
    }
    const welcome = <p>Welcome Back, { activeUser.name }</p>
    return (
      <div className="Header">
      <div>
        { activeUser.id && welcome }
        <Link to="/login"><button className="btn">{buttonText}</button></Link>
      </div>
        <Link to='/'><h2 className="title">Movie Tracker</h2></Link>
        <Link to={`/${urlPath}`}><button>Favorites</button></Link>
      </div>
    );
  }
};

Header.propTypes = {
  activeUser: PropTypes.object
};

export const mapStateToProps = state => ({
  activeUser: state.activeUser
});

export const mapDispatchtoProps = dispatch => ({
  signInUser: (id, name) => dispatch(signInUser(id, name)),
  signOutUser: () => dispatch(signOutUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Header);