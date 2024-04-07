import React, { useState } from "react";
import "./index.css"

const Become=()=>{
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
    <div className="become-bg-container">
        <div className="con1"> 
            <h1 className="become-h1">Become ACCA in 18 months</h1>
            <p>Acquire globally recognized accountancy qualification, ACCA (also called as Global CA), and get placed in top MNCs & Big4s.</p>
            <div className="bc-container">
                <div className="become-card1">
                    <p>3,13,209</p>
                    <p>Registered Users</p>
                </div>
                <div className="become-card1">
                    <p>96,103</p>
                    <p>Courses Enrolled</p>
                </div>
                <div className="become-card1">
                    <p>4,65,95,769</p>
                    <p>Minutes Watched</p>
                </div>
                <div className="become-card1">
                    <p>8 Experts</p>
                    <p>Faculty</p>
                </div>
            </div>
            <div className="download-btn-container">
                <p className="download-btn">DOWNLOAD BROCHURE</p>
                <img className="img1" src="https://indigolearn.s3.ap-south-1.amazonaws.com/website/pp_acca_silver_learning_partner.png" />
            </div>
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
)
}
export default Become