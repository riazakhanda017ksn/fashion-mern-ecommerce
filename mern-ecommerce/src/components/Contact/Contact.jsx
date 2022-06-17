import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" data-aos="fade-up">
      <div className="contact-section" data-aos="fade-right">
        <h1>get in touch</h1>
        <form action="">
          <input type="text" name="" placeholder="Name" /> <br />
          <input type="email" name="" placeholder="Email" /> <br />
          <input type="text" name="" placeholder="Subject" /> <br />
          <textarea
            name=""
            cols="30"
            rows="4"
            placeholder="Message"
          ></textarea>{" "}
          <br />
          <button type="submit">Send message</button>
        </form>
      </div>
      <div className="contact-img" data-aos="fade-right">
        <img src="https://i.ibb.co/Y013G87/hme-persona-portrait.webp" alt="" />
      </div>
    </div>
  );
};

export default Contact;
