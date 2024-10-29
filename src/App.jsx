import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Button from "./components/Button";
import Athena from "./components/Athena";

function Header() {
  const navigate = useNavigate();
  return (
    <div id="mainContent">
      <div className="header">
        <div className="toothIcon">
          <i className="fa-solid fa-tooth icon-tooth"></i>
          <h4>LumiDent Care</h4>
        </div>
        <Link className="name" to="/services">
          Services
        </Link>
        <Link className="name" to="/pricing">
          Pricing
        </Link>
        <Link className="name" to="/team">
          Team
        </Link>
        <Link className="name" to="/testimonial">
          Testimonials
        </Link>
        <Link className="name" to="/#mainContent">
          Home
        </Link>
        <button className="headerButton" onClick={() => navigate("/button")}>
          Book Now!!
        </button>
      </div>
    </div>
  );
}

function Icons() {
  return (
    <div className="icons">
      <i className="fa-brands fa-whatsapp"></i>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-telegram"></i>
      <i className="fa-brands fa-facebook"></i>
    </div>
  );
}

function App() {
  function Footer() {
    return (
      <div className="footer">
        <div className="referalLink">
          <Link className="referalLink-link" to="/#mainContent">
            About Us
          </Link>
          <Link className="referalLink-link" to="">
            Contact Us
          </Link>
          <Link className="referalLink-link" to="/button">
            Book Now
          </Link>
          <Link className="referalLink-link" to="/testimonial">
            Reviews
          </Link>
          <Link className="referalLink-link">Privacy Policy</Link>
        </div>

        <Icons />
        <div className="contact">
          <div>
            <h2>Get In Touch</h2>
            <p>10 Park Street</p>
            <p>Bedfordview, 2007</p>
          </div>
          <div>
            <h2>Office</h2>
            <span>
              <p>
                <strong>Tel</strong>: 0114552100/1
              </p>
            </span>
            <span>
              <p>
                <strong>Mobile</strong>: 0848998640
              </p>
            </span>
            <span>
              <p>
                <strong>Fax</strong>: 0014552126
              </p>
            </span>
            <span>
              <p>
                <strong>Email</strong>:
                <a href="kathy@barlowandrossouw.co.za">
                  {" "}
                  lumident.io@health.com
                </a>
              </p>
            </span>
          </div>
          <div>
            <h2>Opening Hours</h2>
            <span>
              <p>
                <strong>Mon - Fri:</strong>
              </p>
              <p>07:30 - 16:30</p>
            </span>
            <span>
              <p>
                <strong>Sat - Sun:</strong>
              </p>
              <p>Closed</p>
            </span>
            <span>
              <p>
                <strong>Lunch:</strong>
              </p>
              <p>13:00 - 14:00</p>
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home header={Header} footer={Footer} />} />
          <Route
            path="/#mainContent"
            element={<Home header={Header} footer={Footer} />}
          />
          <Route
            path="/services"
            element={<Services header={Header} footer={Footer} />}
          />
          <Route
            path="/pricing"
            element={<Pricing header={Header} footer={Footer} />}
          />
          <Route
            path="/team"
            element={<Team header={Header} footer={Footer} />}
          />
          <Route
            path="/testimonial"
            element={<Testimonials header={Header} footer={Footer} />}
          />
          <Route
            path="/button"
            element={<Button header={Header} footer={Footer} />}
          />
        </Routes>
        <Athena />
      </div>
    </Router>
  );
}

export default App;
