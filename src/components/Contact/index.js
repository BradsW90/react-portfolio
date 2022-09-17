import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage("Please enter a correct email address!");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} field can not be blank!`);
      } else {
        setErrorMessage("");
      }
    }
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="contact-wrapper">
      <h1 className="contact-title">Contact Me</h1>
      <form>
        <div>
          <input
            type="text"
            name="name"
            placeholder="name"
            defaultValue={name}
            onMouseLeave={handleChange}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email address"
            defaultValue={email}
            onMouseLeave={handleChange}
          />
        </div>
        <div>
          <textarea
            name="message"
            rows="5"
            placeholder="message"
            defaultValue={message}
            onMouseLeave={handleChange}
          />
        </div>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
