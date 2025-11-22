import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { useEffect, useRef } from 'react';

// Import components
import Header from './components/Header';
import Overview from './components/Overview';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
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
            value: 0.4,
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
    <div className="App">
      <div ref={particlesRef} id="particles-js" className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: -1 }}></div>
      <Header />
      <Overview />
      <About className="mb-5" />
      <Skills className="mb-5" />
      <Projects className="mb-5" />
      <Contacts />
    </div>
  );
}

export default App;
