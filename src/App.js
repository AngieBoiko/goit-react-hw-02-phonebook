import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Contacts from "./components/Contacts";
import Form from "./components/Form";

class App extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleInput = (event) => {
    this.setState({ name: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      contacts: [
        {
          name: this.state.name,
          id: uuidv4(),
        },
      ],
    });
    this.reset();
  };
  reset = () => {
    this.setState({ contacts: [], name: "" });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form
          onChange={this.handleInput}
          inputValue={this.state.name}
          onSubmit={this.handleSubmit}
        ></Form>
        <h2>Contacts</h2>
        <Contacts></Contacts>
      </div>
    );
  }
}

export default App;
