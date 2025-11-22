import React from 'react';

const Contacts = () => {
  const socials = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/kjpc.16',
      icon: 'bi-facebook',
      color: '#1877f2'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/krt.code',
      icon: 'bi-instagram',
      color: '#E4405F'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/krtdotcode',
      icon: 'bi-github',
      color: '#24292e'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/kurtjoshuacayaga',
      icon: 'bi-linkedin',
      color: '#0077b5'
    }
  ];

  return (
    <div>
      <section id="contact" className="py-5">
        <div className="container-fluid px-5">
          <div className="row text-center text-white mb-5">
            <div className="col">
              <h1 className="display-4 fw-bold">Get In Touch</h1>
              <p className="fs-5 opacity-75">Feel free to reach out for collaborations or opportunities</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="row g-4 justify-content-center">
                {socials.map((social, index) => (
                  <div className="col-6 col-md-3" key={index}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-flex flex-column align-items-center text-white text-decoration-none p-4 rounded"
                      style={{
                        backgroundColor: '#252525',
                        transition: 'all 0.3s ease',
                        border: '1px solid #333'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.querySelector('i').style.color = social.color;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.querySelector('i').style.color = 'white';
                      }}
                    >
                      <i className={`bi ${social.icon} fs-1 mb-2`}></i>
                      <span className="fw-medium">{social.name}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-4" style={{ backgroundColor: '#0f0f0f', color: '#ffffff', borderTop: '1px solid #333' }}>
        <div className="container-fluid px-5">
          <div className="row align-items-center">
            <div className="col-lg-4 mb-3 mb-lg-0 text-center text-lg-start">
              <a href="#overview" className="navbar-brand logo mb-2 d-block" style={{ fontWeight: 'bold', color: '#00d4aa', userSelect: 'none' }}>
                krt.code
              </a>
              <p className="mb-0 opacity-75 small">Aspiring AI/ML Engineer</p>
            </div>
            <div className="col-lg-4 mb-3 mb-lg-0">
              <div className="row justify-content-center">
                <div className="col-auto">
                  <a href="#overview" className="text-white text-decoration-none opacity-75 me-3 small" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#00d4aa'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Overview</a>
                  <a href="#about" className="text-white text-decoration-none opacity-75 me-3 small" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#00d4aa'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>About</a>
                  <a href="#skills" className="text-white text-decoration-none opacity-75 me-3 small" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#00d4aa'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Skills</a>
                  <a href="#projects" className="text-white text-decoration-none opacity-75 me-3 small" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#00d4aa'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Projects</a>
                  <a href="#contact" className="text-white text-decoration-none opacity-75 small" style={{ transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.target.style.color = '#00d4aa'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>Contact</a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="d-flex justify-content-center justify-content-lg-end">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white opacity-75 me-3"
                    style={{ fontSize: '1.25rem', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#00d4aa';
                      e.target.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = 'inherit';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <i className={`bi ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="row mt-4">
            <div className="col text-center">
              <p className="mb-0 opacity-50 small">© 2025 Kurt Joshua Cayaga. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contacts;
