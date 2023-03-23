import "../css/contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const alert = (message, alertType = "info") => {
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${alertType} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Sending Email...", "info");

    emailjs
      .sendForm(
        "service_55ne23p",
        "template_cxvr6b6",
        form.current,
        "rfTUNy65o1qH4f_dM"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email Sent.", "success");
        },
        (error) => {
          console.log(error.text);
          alert("Email Not Sent. Retry", "danger");
        }
      );
  };

  return (
    <div className="contact-page">
      <div className="heading-container d-flex flex-row align-items-center justify-content-center mb-4">
        <div className="blue-dot me-2 p-2"></div>
        <h1 className="heading p-0 my-4">Let's Talk</h1>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact-card shadow-lg col-11 col-md-6 d-flex flex-column p-5"
      >
        <label htmlFor="user-id" className="my-3">
          Name <span className="text-primary">*</span>
          <br />
          <input
            type="text"
            name="user_name"
            className="input-field"
            required
          />
        </label>

        <label htmlFor="user-email" className="my-3">
          Email <span className="text-primary">*</span>
          <br />
          <input
            type="email"
            name="user_email"
            className="input-field"
            required
          />
        </label>

        <label htmlFor="user-subject" className="my-3">
          Subject <span className="text-primary">*</span>
          <br />
          <input
            id="user-subject"
            className="input-field"
            type="text"
            required
          />
        </label>

        <label htmlFor="user-message" className="my-3">
          Message <span className="text-primary">*</span>
          <br />
          <input name="message" className="input-field" type="text" required />
        </label>

        <div id="liveAlertPlaceholder"></div>
        <button className="btn form-btn-blue my-3" id="liveAlertBtn">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
