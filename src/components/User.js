import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //displays an h3 which contains the user name.
    return <h3>{this.props.name}</h3>;
  }
}

export default User;
