import React from "react";

export default function Services(props) {
  const { footer, header } = props;


  function Service() {
    return (
      <div>
        <h2 className="th2">SERVICES OFFERED</h2>
        <div className="services">
          <div className="service">
            <h5>Cosmetic Dentistry</h5>
            <img
              src="/images/cosmeticDentistry.jpg"
              alt="cosmetic dentistry"
              width={300}
              className="serviceImage"
            />
            <p>
              Enhances the appearance of your smile through procedures like
              veneers, bonding, and teeth whitening.
            </p>
          </div>
          <div className="service">
            <h5>TMD/TMJ Assessment</h5>
            <img
              src="/images/tmj-assessment.webp"
              alt="tmj/tmd dentistry"
              width={300}
              className="serviceImage"
            />
            <p>
              Diagnoses and treats temporomandibular joint disorders, relieving
              pain and improving jaw function
            </p>
          </div>
          <div className="service">
            <h5>Sedation Dentistry</h5>
            <img
              src="/images/sedation-dentistry.jpeg"
              alt="sedation dentistry"
              width={300}
              className="serviceImage"
            />
            <p>
              Provides relaxation options to help you stay comfortable and calm
              during dental procedures.
            </p>
          </div>
          <div className="service">
            <h5>Mouth Guards</h5>
            <img
              src="/images/mouth-guard.jpg"
              alt="mouth guards"
              width={300}
              className="serviceImage"
            />
            <p>
              Custom-made protective guards to prevent injuries from sports or
              teeth grinding (bruxism)
            </p>
          </div>
          <div className="service">
            <h5>Dental Hygiene</h5>
            <img
              src="/images/dental-hygiene.png"
              alt="dental hygiene"
              width={300}
              className="serviceImage"
            />
            <p>
              Professional cleanings to remove plaque, prevent cavities, and
              maintain overall oral health
            </p>
          </div>
          <div className="service">
            <h5>Gum Treatment</h5>
            <img
              src="/images/gum-treatment.jpg"
              alt="gum treatment"
              width={300}
              className="serviceImage"
            />
            <p>
              Treats gum disease and maintains gum health to prevent tooth loss
              and other complications.
            </p>
          </div>
          <div className="service">
            <h5>Dental Veneers</h5>
            <img
              src="/images/Dental-Veneers.png"
              alt="dental veneers"
              width={300}
              className="serviceImage"
            />
            <p>
              Thin porcelain shells that cover the front of teeth, enhancing
              their color, shape, and alignment
            </p>
          </div>
          <div className="service">
            <h5>Endodontic Canal Treatment</h5>
            <img
              src="/images/root-treatment.jpg"
              alt="root treatment"
              width={300}
              className="serviceImage"
            />
            <p>
              Removes infected tissue inside the tooth, relieving pain and
              preserving your natural tooth.
            </p>
          </div>
          <div className="service">
            <h5>Teeth Whitening</h5>
            <img
              src="/images/toothWhitening.jpg"
              alt="tooth whitening"
              width={300}
              className="serviceImage"
            />
            <p>
              Brightens teeth safely and effectively, removing stains for a
              whiter, more radiant smile.
            </p>
          </div>
          <div className="service">
            <h5>Dental Bridges</h5>
            <img
              src="/images/dental-bridge.jpg"
              alt="dental bridge"
              width={300}
              className="serviceImage"
            />
            <p>
              Replaces missing teeth by anchoring a false tooth to adjacent
              teeth for a complete smile
            </p>
          </div>
          <div className="service">
            <h5>Emergency Care</h5>
            <img
              src="/images/emergency-care.jpg"
              alt="emergency care"
              width={300}
              className="serviceImage"
            />
            <p>
              Immediate dental care for urgent situations like tooth pain,
              broken teeth, or infections.
            </p>
          </div>
          <div className="service">
            <h5>Dental Crowns</h5>
            <img
              src="/images/crowns.jpg"
              alt="dental crowns"
              width={300}
              className="serviceImage"
            />
            <p>
              Caps that cover damaged teeth, restoring their strength,
              appearance, and functionality.
            </p>
          </div>
          <div className="service">
            <h5>Children Dentistry</h5>
            <img
              src="/images/children-dentistry.jpg"
              alt="child dentistry"
              width={300}
              className="serviceImage"
            />
            <p>
              Specialized care for children, promoting healthy habits and
              treating developing teeth.
            </p>
          </div>
          <div className="service">
            <h5>Dental Implants</h5>
            <img
              src="/images/dental-implants.jpg"
              alt="dental implants"
              width={300}
              className="serviceImage"
            />
            <p>
              Permanent replacements for missing teeth, providing a natural look
              and secure function.
            </p>
          </div>
          <div className="service">
            <h5>Metal Free Dentistry</h5>
            <img
              src="/images/metal-free.jpeg"
              alt="non-metal dentistry"
              width={300}
              className="serviceImage"
            />
            <p>
              Uses metal-free materials for crowns, fillings, and bridges,
              ensuring a natural, aesthetic result
            </p>
          </div>
          <div className="service">
            <h5>Snoring Appliances</h5>
            <img
              src="/images/snoring-device.jpg"
              alt="snorning appliances"
              width={300}
              className="serviceImage"
            />
            <p>
              Custom devices to reduce snoring and improve sleep quality by
              keeping airways open
            </p>
          </div>
          <div className="service">
            <h5>Dentures</h5>
            <img
              src="/images/dentures.webp"
              alt="dentures"
              width={300}
              className="serviceImage"
            />
            <p>
              Removable replacements for multiple missing teeth, allowing
              comfortable chewing and speaking.
            </p>
          </div>
          <div className="service">
            <h5>Extractions</h5>
            <img
              src="/images/tooth-extractions.jpg"
              alt="extractions"
              width={300}
              className="serviceImage"
            />
            <p>
              Removes damaged or problematic teeth to protect your oral health
            </p>
          </div>
        </div>
        {footer()}
      </div>
    );
  }

  return (
    <div>
      {header()}
      <Service />
    </div>
  );
}
