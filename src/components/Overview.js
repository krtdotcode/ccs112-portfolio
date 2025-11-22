import React, { useEffect, useRef } from 'react';

const Overview = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    if (particlesRef.current && window.particlesJS) {
      window.particlesJS('particles-js', {
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: '#00d4aa'
          },
          shape: {
            type: 'circle',
            stroke: {
              width: 0,
              color: '#000000'
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: '',
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.5,
            random: false,
            anim: {
              enable: false,
              speed: 1,
              opacity_min: 0.1,
              sync: false
            }
          },
          size: {
            value: 5,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#00d4aa',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 6,
            direction: 'none',
            random: false,
            straight: false,
            out_mode: 'out',
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true
          },
          modes: {
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1
              }
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3
            },
            repulse: {
              distance: 200
            },
            push: {
              particles_nb: 4
            },
            remove: {
              particles_nb: 2
            }
          }
        },
        retina_detect: true
      });
    }
  }, []);

  return (
    <section id="overview" className="vh-100 d-flex align-items-center position-relative">
      <div ref={particlesRef} id="particles-js" className="position-absolute top-0 start-0 w-100 h-100"></div>
      <div className="container-fluid text-center text-white" style={{ zIndex: 2, position: 'relative' }}>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="display-2 mb-3">Hello World,</p>
            <h1 className="display-3 fw-bold mb-3">I'm Kurt Joshua Cayaga</h1>
            <p className="display-5 mb-4">Aspiring AI/ML Engineer</p>
            <button className="btn btn-outline-light btn-lg">Explore More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
