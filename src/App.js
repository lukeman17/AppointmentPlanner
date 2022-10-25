import React, { useState } from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  // Define state variables for contacts and appointment
  const info = [
    {
      name: "Bill williams",
      phoneNum: "0405554342",
      email: "bil@ordr.co.co",
    },
    {
      name: "Bill two",
      phoneNum: "0402222242",
      email: "bil@wil.co",
    },
  ];

  // Contact list
  const [contacts, setContacts] = useState(info);

  // Appointment list
  const [appointment, setAppointment] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  //Implement functions to add data to contacts and appointments
  const updateContacts = (name, phone, email) => {
    setContacts((prev) => {
      return [...prev, { name: name, phone: phone, email: email }];
    });
  };

  const updateAppointment = (title, contact, date, time) => {
    setAppointment((prev) => {
      return [
        ...prev,
        { title: title, contact: contact, date: date, time: time },
      ];
    });
  };

  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} updateContacts={updateContacts} />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              contacts={contacts}
              appointment={appointment}
              updateAppointment={updateAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
