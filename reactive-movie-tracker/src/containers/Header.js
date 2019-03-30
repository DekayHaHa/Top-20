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
    if (activeUser.id) {
      buttonText = 'Sign Out'
    } else {
      buttonText = 'User Sign In'
    }
    const userTitle = `Welcome Back ${activeUser.name}!`
    const noUserTitle = 'Movie Tracker'
    return (
    //       const userBtn = <button className='display-favorites' onClick={this.toggleFavorites}>{btnText}</button>
    // const nonUserBtn = <Link to='/login'><button className="display-favorites">Display Favorites</button></Link>
      <div className="Header">
        <Link to="/login"><button className="btn">{buttonText}</button></Link>
        <h2 className="title">{activeUser.id ? userTitle : noUserTitle}</h2>
        <Link to="/favorites"><button>Favorites</button></Link>
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