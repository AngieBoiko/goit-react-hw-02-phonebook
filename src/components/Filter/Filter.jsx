import React, { Component } from "react";
class Filter extends Component {
  state = {
    filter: "",
  };
  handleInput = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
    this.props.onChange(value);
  };

  render() {
    const { filter } = this.state;
    return (
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={this.handleInput}
        ></input>
      </label>
    );
  }
}
export default Filter;
