import React from "react";

// Assuming its getting the contact?
export const ContactPicker = (props) => {
  console.log(props.contacts);

  const newUsers = props.contacts.map((users) => {
    return (
      <option value={users.name} key={users.name}>
        {users.name}
      </option>
    );
  });

  return (
    <select onChange={props.onChange} required>
      {/* no contact is selected */}
      <option value={props.defaultListValue} key="default">
        {props.defaultListValue}
      </option>
      {newUsers}
    </select>
  );
};
