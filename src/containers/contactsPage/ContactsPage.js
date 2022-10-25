import React, { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = (props) => {
  // Keep track of three local state values
  let [currentName, setCurrentName] = useState("");
  let [currentPhone, setCurrentPhone] = useState("");
  let [currentEmail, setCurrentEmail] = useState("");
  let [duplicateCheck, setDuplicateCheck] = useState(false);
  // const [alert, setAlert] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add contact info and clear data if the contact name is not a duplicate
    if (!duplicateCheck) {
      props.updateContacts(currentName, currentPhone, currentEmail);
      setCurrentName = "";
      setCurrentPhone = "";
      setCurrentEmail = "";
      console.log("Not a duplicate");
    }
  };

  // check for contact name in the contacts array variable in props

  useEffect(() => {
    for (const ourContacts of props.contacts) {
      if (ourContacts.name === currentName) {
        if (!duplicateCheck) {
          setDuplicateCheck(true);
          // make alert = something
          console.log("its there");
        }
        return;
      } else {
        setDuplicateCheck(false);
        console.log("its not in there!");
        // SetAlert to ''
      }
    }
  }, [currentName, duplicateCheck]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={currentName}
          setName={setCurrentName}
          phone={currentPhone}
          setPhone={setCurrentPhone}
          email={currentEmail}
          setEmail={setCurrentEmail}
          handleSubmit={handleSubmit}
          alert={alert}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList object={props.contacts} />
      </section>
    </div>
  );
};
