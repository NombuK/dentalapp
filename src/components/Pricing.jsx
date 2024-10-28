import React from "react";

export default function Pricing(props) {
    const {footer, header} = props
  return (
    <div>
      {header()}
      <h2 className="th2">Our Fee Structure</h2>
      <div className="pricingBackground">
        <p className="feeStructure">
          Please note that our fees are charged in accordance with the
          recommended schedule of fees of the South African Dental Association,
          which are higher than Medical Aid rates. <br />{" "}
          <strong>
            {" "}
            Our contract is with our patient, who is liable for all fees.
          </strong>{" "}
          <br />{" "}
          <strong> Our practice is contracted out of medical aid.</strong>{" "}
          <br /> Our accounts are due on presentation immediately after each
          visit. A deposit may be required when fees due to our dental
          technician are charges. <br /> All relevant documentation will be
          presented to submit to your medical aid. <br /> If you wish to discuss
          fees or require a quotation for your dental treatment, please do not
          hesitate to contact us . <br /> We welcome you to our practice and
          thank you for you co-operation.
        </p>
      </div>
      {footer()}
    </div>
  );
}
