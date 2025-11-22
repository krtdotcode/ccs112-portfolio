import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'TeeLuxe',
      tech: ['React', 'JavaScript', 'Bootstrap', 'Docker', 'PHP', 'Laravel'],
      description: 'A modern React-based clothing e-commerce platform specializing in fashion apparel. It provides a full-featured online shopping experience from product discovery to secure checkout, featuring dynamic catalogs, intuitive cart management, and streamlined purchase flows powered by Laravel backend and Docker containerization for scalability.',
      liveLink: '#',
      repoLink: '#'
    },
    {
      title: 'TaskFlow',
      tech: ['React', 'JavaScript', 'Bootstrap', 'Docker'],
      description: 'A versatile task management application that enables users to create, read, update, and delete tasks seamlessly. Built with React and Bootstrap for a responsive frontend, and containerized with Docker for easy deployment, it provides an intuitive platform for organizing daily tasks, setting priorities, and tracking progress to enhance productivity.',
      liveLink: '#',
      repoLink: '#'
    },
    {
      title: 'EdTech',
      tech: ['Angular', 'TypeScript', 'RxJS', 'Firebase', 'DaisyUI', 'Tailwind'],
      description: 'An advanced platform designed to foster mentorship relationships in the Education Technology sector by connecting mentors and mentees through an intelligent matching system. It offers seamless communication tools, personalized dashboards, and comprehensive tracking features to support educational growth and collaborative learning environments.',
      liveLink: '#',
      repoLink: '#'
    },
    {
      title: 'AI Weather Predictor',
      tech: ['Python', 'Flask', 'NumPy', 'Pandas', 'Scikit-learn', 'Angular', 'TypeScript', 'Android', 'PWA'],
      description: 'An intelligent weather prediction system utilizing Random Forest regression to analyze historical weather data and generate accurate temperature forecasts. Built with Python backend integration, it supports multiple platforms including web PWA and Android app, delivering reliable meteorological insights for informed decision-making.',
      liveLink: '#',
      repoLink: '#'
    },
    {
      title: 'Dangal Connect',
      tech: ['TypeScript', 'Angular', 'Firebase'],
      description: 'A specialized platform designed to connect Dangal ng Bayan participants from different departments at University of Cabuyao through preference-based matching and real-time anonymous chat. It fosters community engagement and facilitates meaningful connections among students and staff for collaborative academic and extracurricular activities.',
      liveLink: '#',
      repoLink: '#'
    },
    {
      title: 'Library Management System',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
      description: 'A lightweight web-based Library Management System designed to efficiently manage library resources, including book catalogs, user registrations, and borrowing records. It features a user-friendly interface for both administrators and patrons, with secure authentication and real-time updates to inventory and loan histories.',
      liveLink: '#',
      repoLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container-fluid px-5">
        <div className="row text-center text-white mb-5">
          <div className="col">
            <h1 className="display-4 fw-bold">My Projects</h1>
            <p className="fs-5 opacity-75">A showcase of my technical skills and innovative solutions</p>
          </div>
        </div>
        <div className="row g-4">
          {projects.map((project, index) => (
            <div className="col-lg-6 col-xl-4" key={index}>
              <div className="card h-100 border-0" style={{ backgroundColor: '#252525', borderRadius: '8px' }}>
                <div className="card-body p-4">
                  <h5 className="card-title text-white fw-bold mb-3">{project.title}</h5>
                  <div className="mb-3">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="badge me-2 mb-2" style={{ backgroundColor: '#00d4aa', color: '#1a1a1a' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <p className="card-text text-white-50 mb-4">{project.description}</p>
                  <div className="d-flex gap-3">
                    <a href={project.liveLink} className="btn btn-sm" style={{ backgroundColor: '#00d4aa', borderColor: '#00d4aa', color: '#1a1a1a' }}>
                      <i className="bi bi-box-arrow-up-right me-2"></i>View Project
                    </a>
                    <a href={project.repoLink} className="btn btn-outline-light btn-sm">
                      <i className="bi bi-github me-2"></i>Github
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
