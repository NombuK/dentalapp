import React from "react";

export default function Testimonials(props) {
  const { footer, header } = props;
  


  function Star() {
    return (
      <div>
        <hr />
        <div className="reviewStarContainer">
          <i className="fa-solid fa-star-half-stroke reviewStar"></i>
          <i className="fa-solid fa-star-half-stroke reviewStar"></i>
          <i className="fa-solid fa-star-half-stroke reviewStar"></i>
          <i className="fa-solid fa-star-half-stroke reviewStar"></i>
          <i className="fa-solid fa-star-half-stroke reviewStar"></i>
        </div>
        <h3 className="rate">Proudly Rated 5 Star World Wide</h3>
        <hr />
        <div className="starView">
          <p className="starParagraph">
            <h2>LUMIDENT</h2>
            At LumiDent Care, we are dedicated to providing world-class dental
            services with a commitment to quality, comfort, and patient
            satisfaction. But don't just take our word for it—see what our
            valued patients have to say about their experiences with us.
          </p>
          <img className="star-img" src="/images/lab1.jpg" alt="" width={400} />
        </div>
      </div>
    );
  }

  function Testimonials() {
    
    return (
      <div>
        <h2 className="th2">TESTIMONIALS</h2>
        <div className="testimonials">
          <div>
            <img
              src="/images/p2.jpg"
              alt="patient1"
              className="patientImage"
            />
            <p className="patientReview">
              LumiDent Care is truly amazing! They made me feel comfortable and
              thoroughly explained every step. My smile has never looked better!
              <br />
              <em>– Emma Patterson</em>
            </p>
          </div>
          <div>
            <img
              src="/images/p4.jpg"
              alt="patient"
              className="patientImage"
            />
            <p className="patientReview">
              Exceptional service and a warm atmosphere! The team at LumiDent
              exceeded my expectations and truly cares about their patients.
              <br />
              <em>– John Rodriguez</em>
            </p>
          </div>
          <div>
            <img
              src="/images/p3.jpg"
              alt="patient"
              className="patientImage"
            />
            <p className="patientReview">
              From booking my appointment to the follow-up care, LumiDent was
              professional and attentive. I couldn’t be happier with my
              experience!
              <br />
              <em>– Sofia Nguyen</em>
            </p>
          </div>
          <div>
            <img
              src="/images/p6.jpg"
              alt="patient"
              className="patientImage"
            />
            <p className="patientReview">
              Dr. Tanaka and the LumiDent team are fantastic. They turned my
              dental anxiety into a positive experience—I actually look forward
              to my visits now!
              <br />
              <em>– Michael Thompson</em>
            </p>
          </div>
          <div>
            <img
              src="/images/p1.jpg"
              alt="patient"
              className="patientImage"
            />
            <p className="patientReview">
              I’ve been to many dentists, but LumiDent stands out for its
              cutting-edge technology and friendly staff. My whole family now
              goes here!
              <br />
              <em>– Amina Patel</em>
            </p>
          </div>
          <div>
            <img
              src="/images/p5.jpg"
              alt="patient"
              className="patientImage"
            />
            <p className="patientReview">
              The staff treated me like family and made sure I was comfortable
              at every step. LumiDent is definitely my top choice for dental
              care!
              <br />
              <em>– James O’Connor</em>
            </p>
          </div>
        </div>
       
      </div>
    );
  }

  return (
    <div>
      {header()}
      <h2 className="th2">Reviews/Testimonials</h2>
      <Star />
      <Testimonials />
      {footer()}
    </div>
  );
}
