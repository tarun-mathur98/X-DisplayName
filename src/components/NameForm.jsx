import React, { useState } from "react";
// import { useState } from "react";
import styles from "./NameForm.module.css";

const NameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFullName(`${firstName} ${lastName}`);
    setIsSubmit(true);
  };

  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h1>Full Name Display</h1>
          <div>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
            />
          </div>
          <div>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {isSubmit && (
          <div>
            <p>Full Name: {fullName}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default NameForm;
