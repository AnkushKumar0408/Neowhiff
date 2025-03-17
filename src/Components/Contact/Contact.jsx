import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon4.png";
import phone_icon from "../../assets/phone-icon2.png";
import location_icon from "../../assets/location-icon2.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4476fd0f-9112-4929-811c-bbeb3516f4f0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Get in Touch <img src={msg_icon} alt="" />
        </h3>
        <p>
          Have any questions or need assistance? Feel free to reach out to us.
          Our team is here to help you with any inquiries related to our
          services. Drop us a message, and we'll get back to you as soon as
          possible!
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" />
            arun@neowhiff.com
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" />
            +91 9999799821
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" />
            H-146, Sector 63
            <br /> Noida, UP 201301
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter yout name"
            required
          />
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter your mobile number"
            required
            pattern="[0-9]{10}"
          />
          <label>Email Id</label>
          <input
            type="email"
            name="email"
            placeholder="Ex : example@gmail.com"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Enter Your msg"
            required
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
