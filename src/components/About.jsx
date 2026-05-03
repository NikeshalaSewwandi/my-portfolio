import profileImg from '../assets/images/profile.jpg'

export default function About() {
  return (
    <section id="about">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={profileImg} alt="Nikeshala Sewwandi" />
          </div>
          <div className="about-text">
            <p>
              Hi, I'm Nikeshala Sewwandi, a Software Engineering undergraduate at the
              University of Kelaniya, Sri Lanka. I'm passionate about technology and enjoy
              transforming ideas into real-world solutions through clean and meaningful code.
            </p>
            <p>
              Skilled in Java, JavaScript, HTML, CSS, SQL, and Python, with a strong passion
              for continuous learning.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">Degree</span>
                <span className="detail-value">BSc (Hons) Software Engineering</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">University</span>
                <span className="detail-value">University of Kelaniya</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Location</span>
                <span className="detail-value">Sri Lanka</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Status</span>
                <span className="detail-value">Software Engineering (UG)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}