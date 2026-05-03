const projects = [
  {
    title: 'AI ChatBot',
    status: 'Completed',
    desc: 'An AI Chatbot built from scratch using HTML, CSS and JavaScript. Features Groq AI API integration with LLaMA model, image and file upload support, dark/light theme toggle, real-time typing animation, stop response button, copy message button, and a fully responsive design — no frameworks!',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Groq AI', 'LLaMA'],
    links: [{ label: 'Github/AI ChatBot', url: 'https://github.com/NikeshalaSewwandi/AI-ChatBot' }],
  },
  {
    title: 'Youtube Frontend UI Clone',
    status: 'Completed',
    desc: 'I used HTML5 and CSS3 for this project, which helped me understand how to build a clean and structured UI layout. I applied CSS Grid and Flexbox for modern layouts and learned how to maintain a well-organized GitHub repository.',
    tags: ['HTML5', 'CSS3'],
    links: [{ label: 'Github/Youtube UI', url: 'https://github.com/NikeshalaSewwandi/Youtube-Project' }],
  },
  {
    title: 'Todo-List',
    status: 'Completed',
    desc: 'I created a simple Todo List web application using HTML, CSS, and JavaScript. It allows users to add tasks and remove them once completed. The design is clean and interactive, making task management easy and user-friendly.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    links: [{ label: 'Github/Todo-List', url: 'https://github.com/NikeshalaSewwandi/Todo-List' }],
  },
]

export default function Projects() {
  return (
    <section id="projects">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-status">{project.status}</span>
              </div>
              <p className="project-desc">{project.desc}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.links.map((link) => (
                  <a key={link.label} href={link.url} className="project-link" target="_blank" rel="noreferrer">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}