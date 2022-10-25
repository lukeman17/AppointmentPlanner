import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name:"
          type="text"
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
        <input
          placeholder="Phone:"
          type="tel"
          onChange={(e) => setPhone(e.target.value)}
          // pattern="(^1300\d{6}$)|(^1800|1900|1902\d{6}$)|(^0[2|3|7|8]{1}[0-9]{8}$)|(^13\d{4}$)|(^04\d{2,3}\d{6}$)"
          required
        ></input>
        <input
          placeholder="Email:"
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        ></input>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};
