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
          Send Us a Message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
          minima facilis numquam doloribus modi commodi quod ea omnis. Aliquid,
          sed debitis! Earum impedit eos iure.
        </p>
        <ul>
          <li>
            {" "}
            <img src={mail_icon} alt="" />
            ankushkumar7669@gmail.com
          </li>
          <li>
            {" "}
            <img src={phone_icon} alt="" />
            +91 8505832598
          </li>
          <li>
            {" "}
            <img src={location_icon} alt="" />
            56/19 Kishan Colony, Prahladpur
            <br /> Delhi 110042, India
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
