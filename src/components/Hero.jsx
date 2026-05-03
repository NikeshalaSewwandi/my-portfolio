export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">Nikeshala Sewwandi</h1>
        <h2 className="hero-title">Software Engineering (UG)</h2>
        <p className="hero-university">University of Kelaniya, Sri Lanka</p>
        <p className="hero-bio">
          Aspiring Software Engineer crafting clean and efficient code. Passionate about
          full-stack development and cloud technologies, with a focus on building solutions
          that make a real impact.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View My Projects</a>
          <a href="#contact" className="btn-outline">Contact me</a>
        </div>
      </div>
    </section>
  )
}