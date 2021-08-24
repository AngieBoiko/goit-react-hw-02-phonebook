import React from "react";
import propTypes from "prop-types";

export default function Form({ onChange, inputValue, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input
          value={inputValue}
          onChange={onChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <button type="submit">Add to contacts</button>
    </form>
  );
}
