import React from "react";

export default function Contacts({ contactsItem }) {
  return (
    <ul>
      {contactsItem.map((item) => (
        <li key={item.id}>
          {item.name}: {item.number}
        </li>
      ))}
    </ul>
  );
}
