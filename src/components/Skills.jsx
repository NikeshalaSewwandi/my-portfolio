const skills = [
  { icon: '🐍', name: 'Python',     level: 'Familiar' },
  { icon: '☕', name: 'Java',       level: 'Familiar' },
  { icon: '⚡', name: 'JavaScript', level: 'Familiar' },
  { icon: '🌐', name: 'HTML',       level: 'Familiar' },
  { icon: '🎨', name: 'CSS',        level: 'Familiar' },
  { icon: '🗄️', name: 'SQL',        level: 'Familiar' },
  { icon: '⚙️', name: 'C',          level: 'Familiar' },
]

export default function Skills() {
  return (
    <section id="skills">
      <div className="section-container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-level">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}