import React, { Component } from "react";

import Contacts from "./components/Contacts";
import Form from "./components/Form";
import Filter from "./components/Filter";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  forSubmitHandler = (data) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, data],
    }));
  };
  forInputChange = (data) => {
    this.setState({ filter: data });
  };
  getContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter((item) =>
      item.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.forSubmitHandler}></Form>
        <h2>Contacts</h2>
        <Filter onChange={this.forInputChange}></Filter>
        <Contacts contactsItem={this.getContacts()}></Contacts>
      </div>
    );
  }
}

export default App;
