const certificates = [
  {
    logo: '🏆',
    title: 'AWS Networking Basics',
    issuer: 'AWS Training & Certification',
    date: '2026/02/24',
    link: '/images/cert-aws1.png',
    linkLabel: 'View Certificate',
  },
  {
    logo: '🏆',
    title: 'AWS Well-Architected Foundations',
    issuer: 'AWS Training & Certification',
    date: '2026/03/16',
    link: '/images/cert-aws2.png',
    linkLabel: 'View Certificate',
  },
  {
    logo: '🏆',
    title: 'AWS Cloud Practitioner Essentials',
    issuer: 'AWS Training & Certification',
    date: '2026/03/03',
    link: '/images/cert-aws3.png',
    linkLabel: 'View Certificate',
  },
  {
    logo: '🏆',
    title: 'Well-Architected Proficient',
    issuer: 'AWS Training & Certification',
    date: '2026/03/16',
    link: 'https://www.credly.com/badges/cef2b286-1aff-4929-9b12-1632e05953b3/linked_in_profile',
    linkLabel: 'View Badge',
  },
  {
    logo: '🏅',
    title: 'Accessibility Fundamentals',
    issuer: 'Microsoft',
    date: '2026/03/10',
    badge: true,
  },
]

export default function Certificates() {
  return (
    <section id="certificates">
      <div className="section-container">
        <h2 className="section-title">Certificates & Badges</h2>
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div className="certificate-card" key={cert.title}>
              <div className="certificate-logo">{cert.logo}</div>
              <div className="certificate-info">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
                <p className="certificate-date">{cert.date}</p>
              </div>
              {cert.badge ? (
                <span className="badge-label">Badge Earned</span>
              ) : (
                <a href={cert.link} target="_blank" rel="noreferrer" className="certificate-link">
                  {cert.linkLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}