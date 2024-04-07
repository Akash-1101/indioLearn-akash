import React, { useState } from "react";
import "./index.css";

const Kickoffyourjourney = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can handle form submission logic here
    // For this example, let's just open the modal
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="kick-off-container">
      <div>
        <h1>Kick off your journey with Indiolearn</h1>
        <p>Sign in and get instant access to our FREE Courses</p>
        <img
          className="img1"
          src="https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_acca_silver_learning_partner.png"
          alt="Indiolearn"
        />
      </div>
      <div className="card">
        <p>Aspiring to be an ACCA? Get in touch with us</p>
        <form onSubmit={handleSubmit}>
          <input
            className="inputEl"
            type="text"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
          />
          <input
            className="inputEl"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="inputEl"
            type="tel"
            placeholder="Mobile number*"
            value={mobile}
            onChange={handleMobileChange}
          />
          <br />
          <button type="submit" className="submit-btn">
            Request Call Back
          </button>
          {showModal && (
            <div className="modal">
                <div className="modal-content">
                    <p>Success!✅ We'll get back to you soon.</p>
                    <button className="close-btn" onClick={closeModal}>
                    ok
                    </button>
                </div>
            </div>
        )}
        </form>
      </div>
      
    </div>
  );
};

export default Kickoffyourjourney;
