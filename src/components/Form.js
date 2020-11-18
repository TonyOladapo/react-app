import React, { Component } from "react";
import { addUser } from "../redux/actions/actions";
import { connect } from "react-redux";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state.name);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.name}
          placeholder="Name"
        />
      </form>
    );
  }
}

//used to trigger actions in the reducer
const sendDatatToReducer = {
  addUser,
};

export default connect(null, sendDatatToReducer)(Form);
