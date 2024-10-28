import React from "react";
import Typewriter from "typewriter-effect";
import { Link, useNavigate } from "react-router-dom";


export default function Home(props) {
  const { footer, header } = props;

  const navigate = useNavigate();

  function Background() {
    return (
      <div className="homeBackground">
        <div className="homeTitle">
          <h1>Keep Your Smile Clean And Great</h1>
          <p>
            Your smile is our priority. Professional dental care for the whole
            family.
          </p>
        </div>
        <button
          className="homeButton"
          onClick={() => {
            window.location.href = "#mainContent";
          }}
        >
          Get Started
          <i className="fa-solid fa-circle-arrow-right rightArrowIcon"></i>
        </button>
      </div>
    );
  }


  function Greeting() {
    return (
      <div className="greeting">
        <Typewriter
          options={{
            strings: "Welcome to the Best Place for Your Perfect Smile!",
            autoStart: true,
            loop: true,
            delay: 20,
            cursor: "",
          }}
        />
      </div>
    );
  }

  function Intro() {
    return (
      <div className="intro">
        <div>
          <Greeting />
          <div className="recommendations">
            <span className="introPic">
              <div>
                <h1>LUMIDENT HEALTH CARE</h1>
                <p>
                  LumiDent is a comprehensive dental care provider dedicated to
                  offering high-quality services in a welcoming and professional
                  environment. Our team of experienced dental professionals is
                  committed to delivering personalized treatments that
                  prioritize patient comfort and satisfaction. At LumiDent, we
                  believe in promoting long-term oral health with cutting-edge
                  technology and a patient-centered approach to care
                </p>
              </div>
              <img src="/images/front2.webp" alt="" width={300} />
            </span>
            <ul>
              <li>Experienced professionals.</li>
              <li>Pain-free experience.</li>
              <li>Personalized treatment plans.</li>
              <li>Comfortable and friendly environment.</li>
              <li>Flexible scheduling.</li>
              <li>Affordable pricing.</li>
            </ul>
          </div>
        </div>
        <div className="location">
          <p>Location</p>
          <img src="/images/map.png" alt="map" width={600} />
          <br />
          <a href="https://www.google.com/maps/place/10+Park+St,+Bedfordview,+Germiston,+2008,+South+Africa/@-26.17795,28.137023,17z/data=!4m6!3m5!1s0x1e9512201475e261:0x7ed7018224fece80!8m2!3d-26.1779496!4d28.1370228!16s%2Fg%2F11hbnt6ytt?hl=en-US&entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D">
            Find On Map
          </a>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Background />
      {header()}
      <Intro />
      {footer()}
    </div>
  );
}
