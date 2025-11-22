import React from 'react';
import Chatbot from './Chatbot';

const About = () => {
  return (
  <section id="about" className="d-flex align-items-center justify-content-center py-3" style={{ minHeight: '100vh' }}>
      <div className="container-fluid h-100 px-5">
        <div className="row h-100 align-items-center">
          <div className="col-lg-6 text-white text-center text-lg-start">
            <h1 className="display-4 fw-bold mb-4">About Me</h1>
            <p className="fs-5">
              I am a Computer Science student aspiring to become a Software Engineer in the near future, with a strong interest in Artificial Intelligence and Machine Learning. Currently building skills in software development and AI/ML, particularly with Python, NumPy, Pandas, Scikit-learn, and TensorFlow, I focus on learning through hands-on projects, experimenting with new ideas, and seeking ways to solve problems with technology.
            </p>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <div className="d-flex h-100 align-items-center justify-content-center">
              <Chatbot />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
