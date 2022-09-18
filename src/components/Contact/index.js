import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  //Hook to watch form inputs
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  //determine and display current error message
  const [errorMessage, setErrorMessage] = useState("");
  //destructure for readability
  const { name, email, message } = formState;

  //function to watch for input
  function handleChange(e) {
    //if target is email verifiy email is correct
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      //if email is not correct send error else clear error
      if (!isValid) {
        setErrorMessage("Please enter a correct email address!");
      } else {
        setErrorMessage("");
      }
    }
    //if target is not email
    else {
      //if no input send error else clear error
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} field can not be blank!`);
      } else {
        setErrorMessage("");
      }
    }

    //if no error message update form state
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
