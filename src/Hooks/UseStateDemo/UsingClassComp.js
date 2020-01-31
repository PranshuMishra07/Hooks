import React, { Component } from "react";

class Example1 extends Component {
  constructor() {
    super();
    this.state = {
      fname: "pranshu",
      lname: "mishra"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <h4>Enter your first Name</h4>
        <input
          id="fname"
          type="text"
          name="fname"
          value={this.state.fname}
          onChange={this.handleChange}
        />
        <hr />
        <h4>Enter your last name </h4>
        <input
          type="text"
          name="lname"
          value={this.state.lname}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Example1;
