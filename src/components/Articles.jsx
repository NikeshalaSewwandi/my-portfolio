const articles = [
  {
    date: '2025/11/08',
    readTime: '3 min read',
    title: '"Fundamental Python Concepts: Variables, User Input and Looping"',
    desc: 'This article is about the fundamentals of python.',
    url: 'https://medium.com/@nikeshalasewwandi281/fundamental-python-concepts-variables-user-input-and-looping-72418c6afb43',
  },
  {
    date: '2026/03/22',
    readTime: '6 min read',
    title: 'From Sketches to System: How Diagrams Power Software Modelling',
    desc: 'This article explains how diagrams support software modeling.',
    url: 'https://medium.com/@nikeshalasewwandi281/from-sketches-to-system-how-diagrams-power-software-modelling-61d148b9152b',
  },
]

export default function Articles() {
  return (
    <section id="articles">
      <div className="section-container">
        <h2 className="section-title">Medium Articles</h2>
        <p className="section-subtitle">
          I write about things I learn. Here are some of my recent articles
        </p>
        <div className="article-grid">
          {articles.map((article) => (
            <div className="article-card" key={article.title}>
              <div className="article-meta">
                <span className="article-date">{article.date}</span>
                <span className="article-read-time">{article.readTime}</span>
              </div>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-desc">{article.desc}</p>
              <a href={article.url} target="_blank" rel="noreferrer" className="article-link">
                Read on Medium →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}