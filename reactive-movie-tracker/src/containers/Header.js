import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signOutUser } from "../actions/index";
import PropTypes from "prop-types";
import "../styles/Header.scss";
import { getMovies } from '../Thunks/getMovies'


export const Header = class extends Component {

  clearUserData = () => {
    this.props.signOutUser()
    this.props.getMovies()
  };

  render() {
    const { activeUser } = this.props
    let buttonText;
    let urlPath;
    let button;

    if (activeUser.id) {
      buttonText = 'Sign Out'
      urlPath = 'favorites'
      button = <button onClick={this.clearUserData} className="btn">{buttonText}</button>
    } else {
      buttonText = 'User Sign In'
      urlPath = 'login'
      button = < Link to = "/login" > <button className="btn">{buttonText}</button></Link >
    }

    const welcome = <p>Welcome Back, { activeUser.name }</p>
    return (
      <div className="header">
      <div>
        { activeUser.id > 0 && welcome }
        {button}
      </div>
        <Link to='/'><h2 className="title">Movie Tracker</h2></Link>
        <Link to={`/${urlPath}`}><button className="btn">Favorites</button></Link>
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
  signOutUser: () => dispatch(signOutUser()),
  getMovies: (url) => dispatch(getMovies(url))
});

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Header);