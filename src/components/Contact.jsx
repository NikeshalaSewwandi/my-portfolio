const contacts = [
  {
    icon: '📧',
    type: 'Email',
    value: 'nikeshalasewwandi281@gmail.com',
    href: 'mailto:nikeshalasewwandi281@gmail.com',
  },
  {
    icon: '🐙',
    type: 'GitHub',
    value: 'github.com/NikeshalaSewwandi',
    href: 'https://github.com/NikeshalaSewwandi',
  },
  {
    icon: '💼',
    type: 'LinkedIn',
    value: 'linkedin.com/in/nikeshala-sewwandi',
    href: 'https://linkedin.com/in/nikeshala-sewwandi',
  },
]

export default function Contact() {
  return (
    <section id="contact">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          If you have any questions or would like to connect, my inbox is always open.
        </p>
        <div className="contact-grid">
          {contacts.map((contact) => (
            <a key={contact.type} href={contact.href} className="contact-card" target="_blank" rel="noreferrer">
              <div className="contact-icon">{contact.icon}</div>
              <h3 className="contact-type">{contact.type}</h3>
              <p className="contact-value">{contact.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}