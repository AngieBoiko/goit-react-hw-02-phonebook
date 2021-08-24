import React from "react";
export default function Filter({ onChange, value }) {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        onChange={onChange}
        value={value}
        name="filter"
      ></input>
    </label>
  );
}
