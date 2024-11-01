import React from 'react'

export default function Team(props) {
  const {footer, header} = props


  function Doctors() {
    return (
      <div className="slideshow-container">
        <img src="/images/doc1.jpg" alt="doc 1" className="slide" />
        <img src="/images/doc2.jpg" alt="doc 2" className="slide" />
        <img src="/images/doc3.jpg" alt="doc 3" className="slide" />
        <img src="/images/doc4.jpg" alt="doc 4" className="slide" />
        <img src="/images/doc5.jpg" alt="doc 5" className="slide" />
        <img src="/images/doc6.jpg" alt="doc 6" className="slide" />
        <img src="/images/doc7.jpg" alt="doc 7" className="slide" />
      </div>
    );
  }

  function TeamMain() {
    return (
      <div>
        <h2 className='teamGreeting'>Your Smile Is Our Priority</h2>
        <div className="profession">
          <img
            src="/images/doc5.jpg"
            alt="doc 5"
            className='teamImage-doc'
          />
          <p>
            <strong>Orthodontics</strong>
            <br />
            Dr. Hiroshi Tanaka is exceptionally detail-oriented and has a gentle
            approach with patients of all ages. He specializes in orthodontics,
            focusing on aligning teeth and correcting bite issues with braces,
            retainers, and other corrective appliances. Patients love his
            precise yet compassionate nature as he helps them achieve beautiful,
            confident smiles
          </p>
        </div>
        <hr />
        <div className="profession">
          <p>
            <strong>Endodontics</strong>
            <br />
            Dr. Ayanna Mbatha has a calming presence, putting even the most
            nervous patients at ease. As an endodontist, she specializes in root
            canal treatments and managing tooth pain, infections, and damage to
            the inner parts of the tooth. Known for her soothing voice and
            gentle touch, Dr. Mbatha is dedicated to preserving natural teeth
            whenever possible
          </p>
          <img
            src="/images/doc7.jpg"
            alt="doc 7"
            className='teamImage-doc'
          />
        </div>
        <hr />
        <div className="profession">
          <img
            src="/images/doc3.jpg"
            alt="doc 3"
            className='teamImage-doc'
          />
          <p>
            <strong>Pediatric Dentistry</strong>
            <br />
            Dr. Carlos Mendoza has a natural rapport with children, making
            dental visits fun and educational. He specializes in pediatric
            dentistry, focusing on the oral health of children from infancy
            through the teenage years. His warm and friendly manner helps kids
            feel safe and comfortable as he guides them through dental care.
          </p>
        </div>
        <hr />
        <div className="profession">
          <p>
            <strong>Periodontics</strong>
            <br />
            Dr. Lisa Blackwell is empathetic and thorough, with a keen focus on
            preventive care. She specializes in periodontics, treating gum
            disease and helping patients maintain healthy gums and jawbones.
            Known for her educational approach, Dr. Blackwell ensures that
            patients understand the importance of oral hygiene in preventing
            serious health issues.
          </p>
          <img
            src="/images/doc6.jpg"
            alt="doc 6"
            className='teamImage-doc'
          />
        </div>
        <hr />
        <div className="profession">
          <img
            src="/images/doc1.jpg"
            alt="doc 1"
            className='teamImage-doc'
          />
          <p>
            <strong>Oral and Maxillofacial Surgery</strong>
            <br />
            Dr. Kwame Boateng is a strong yet caring presence, known for his
            precision in surgery and his ability to explain complex procedures
            in simple terms. He specializes in oral and maxillofacial surgery,
            addressing issues such as impacted teeth, jaw disorders, and facial
            trauma. Patients appreciate his reassuring guidance through every
            step of their treatment
          </p>
        </div>
      </div>
    );
  }
  
  return (
    <div>
      {header()}
      <Doctors/>
      <TeamMain/>
      {footer()}
    </div>
  )
}
