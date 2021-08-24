import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import Contacts from "./components/Contacts";
import Form from "./components/Form";

class App extends Component {
  state = {
    contacts: [],
    name: "",
    number: "",
  };

  handleInput = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState((prevState) => ({
      contacts: [
        ...prevState.contacts,
        {
          name: this.state.name,
          id: uuidv4(),
          number: this.state.number,
        },
      ],
    }));
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form
          onChange={this.handleInput}
          inputName={this.state.name}
          inputNum={this.state.number}
          onSubmit={this.handleSubmit}
        ></Form>
        <h2>Contacts</h2>
        <Contacts contactsItem={this.state.contacts}></Contacts>
      </div>
    );
  }
}

export default App;
