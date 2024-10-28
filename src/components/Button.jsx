import React, { useState } from "react";

export default function Button(props) {
  const { footer, header } = props;
  
  function AppointmentForm() {
    const [formData, setFormData] = useState({
      name: "",
      phoneNumber: "",
      emergencyPhone: "",
      email: "",
      dob: "",
      medicalAid: "",
      reason: "",
      additionalInfo: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form submitted", formData);
      setFormData({
        name: "",
        phoneNumber: "",
        emergencyPhone: "",
        email: "",
        dob: "",
        medicalAid: "",
        reason: "",
        additionalInfo: "",
      });
      alert(`We will be in touch soon!`);
    };

    return (
      <form onSubmit={handleSubmit} className="appointment-form">
        <label>
          Name and Surname:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Phone Number:
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Emergency Phone Number:
          <input
            type="tel"
            name="emergencyPhone"
            value={formData.emergencyPhone}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Date of Birth:
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Medical Aid:
          <select
            name="medicalAid"
            value={formData.medicalAid}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </label>

        <label>
          Reason:
          <textarea
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Additional Information (Optional):
          <textarea
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    );
  }
  
 
  return (
    <div>
      {header()}
      <h2 className="th2">Your Trusted Dental Health Care</h2>
      <AppointmentForm />
      {footer()}
    </div>
  );
}
