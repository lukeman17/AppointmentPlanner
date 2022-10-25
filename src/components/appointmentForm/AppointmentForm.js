import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  // These are the props
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit,
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Title (Mr, Mrs)"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        type="date"
        placeholder="Date"
        // value={date}
        onChange={(e) => setDate(e.target.value)}
        min={getTodayString()}
      ></input>
      <input
        type="time"
        value={time}
        placeholder="Appointment Time"
        onChange={(e) => setTime(e.target.value)}
      ></input>
      <button type="submit">Add Appointment</button>
      <ContactPicker
        contacts={contacts}
        onChange={(e) => setContact(e.target.value)}
      />
    </form>
  );
};
