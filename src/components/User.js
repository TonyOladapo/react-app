import React, { Component } from "react";

class User extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h3>{this.props.name}</h3>;
  }
}

export default User;
