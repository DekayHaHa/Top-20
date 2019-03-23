import React, { Component } from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"

const Header = class extends Component {
  render() {
    return (
      <div>
        <h2>Welcome Back {this.props.activeUser.name} </h2>
        <Link to="/login">User Sign In</Link>
      </div>
    );
  }
};

export const mapStateToProps = state => ({
  activeUser: state.activeUser
});



export default connect(
  mapStateToProps,
  null
)(Header);
