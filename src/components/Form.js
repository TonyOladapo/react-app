import React, { Component } from "react";

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

  render() {
    return (
      <form>
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

export default Form;
