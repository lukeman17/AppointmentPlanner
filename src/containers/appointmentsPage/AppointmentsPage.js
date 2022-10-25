import React, { useState, useEffect } from "react";
import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {
  //Define state variables for appointment info
  console.log(props);

  const [currentTitle, setTitle] = useState("");
  const [currentContact, setContact] = useState("");
  const [currentDate, setDate] = useState("");
  const [currentTime, setTime] = useState("");

  // This is the callback function
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add contact info and clear data
    props.updateAppointment(
      currentTitle,
      currentContact,
      currentDate,
      currentTime
    );
    setTitle("");
    setContact("");
    setDate("");
    setTime("");
    // document.getElementById("contactList");
  };

  // This is used after the render
  useEffect(() => {
    for (const appointmentItem of props.appointment) {
      if (
        appointmentItem.date === currentDate &&
        appointmentItem.time === currentTime
      ) {
        console.log("appointment is already booked");
        alert("already an item");
        return;
      } else {
        console.log("its yours");
      }
    }
  }, [props.appointment, currentDate, currentTime]);

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          contacts={props.contacts}
          title={currentTitle}
          setTitle={setTitle}
          contact={currentContact}
          setContact={setContact}
          date={currentDate}
          setDate={setDate}
          time={currentTime}
          setTime={setTime}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList object={props.appointment} />
      </section>
    </div>
  );
};
