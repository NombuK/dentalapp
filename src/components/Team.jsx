import React from 'react'

export default function Team(props) {
  const {footer, header} = props


  function Doctors() {
    return (
      <div class="slideshow-container">
        <img src="public/images/doc1.jpg" alt="doc 1" class="slide" />
        <img src="public/images/doc2.jpg" alt="doc 2" class="slide" />
        <img src="public/images/doc3.jpg" alt="doc 3" class="slide" />
        <img src="public/images/doc4.jpg" alt="doc 4" class="slide" />
        <img src="public/images/doc5.jpg" alt="doc 5" class="slide" />
        <img src="public/images/doc6.jpg" alt="doc 6" class="slide" />
        <img src="public/images/doc7.jpg" alt="doc 7" class="slide" />
      </div>
    );
  }

  function TeamMain() {
    return (
      <div>
        <h2 className='teamGreeting'>Your Smile Is Our Priority</h2>
        <div className="profession">
          <img
            src="public/images/doc5.jpg"
            alt="doc 5"
            width={500}
            height={400}
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
            src="public/images/doc7.jpg"
            alt="doc 7"
            width={500}
            height={400}
          />
        </div>
        <hr />
        <div className="profession">
          <img
            src="public/images/doc3.jpg"
            alt="doc 3"
            width={500}
            height={400}
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
            src="public/images/doc6.jpg"
            alt="doc 6"
            width={500}
            height={400}
          />
        </div>
        <hr />
        <div className="profession">
          <img
            src="public/images/doc1.jpg"
            alt="doc 1"
            width={500}
            height={400}
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
