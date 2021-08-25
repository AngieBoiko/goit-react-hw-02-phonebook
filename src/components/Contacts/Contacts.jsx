import React, { Component } from "react";
import PropTypes from "prop-types";

class Contacts extends Component {
  handleClick = (id) => {
    this.props.onClick(id);
  };
  render() {
    const contacts = this.props.contactsItem;
    return (
      <ul>
        {contacts.map((item) => (
          <li key={item.id}>
            <p>
              {item.name}: {item.number}
            </p>
            <button type="button" onClick={() => this.handleClick(item.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
export default Contacts;
Contacts.propTypes = {
  onClick: PropTypes.func.isRequired,
  contactsItem: PropTypes.array.isRequired,
};
