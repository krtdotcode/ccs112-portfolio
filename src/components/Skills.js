import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Python', icon: 'python/python-original' },
    { name: 'Numpy', icon: 'numpy/numpy-original' },
    { name: 'Pandas', icon: 'pandas/pandas-original' },
    { name: 'Scikit-learn', icon: 'scikitlearn/scikitlearn-original' },
    { name: 'Tensorflow', icon: 'tensorflow/tensorflow-original' },
    { name: 'Pytorch', icon: 'pytorch/pytorch-original' },
    { name: 'Java', icon: 'java/java-original' },
    { name: 'HTML', icon: 'html5/html5-original' },
    { name: 'CSS', icon: 'css3/css3-original' },
    { name: 'JavaScript', icon: 'javascript/javascript-original' },
    { name: 'React', icon: 'react/react-original' },
    { name: 'Laravel', icon: 'laravel/laravel-original' },
    { name: 'Angular', icon: 'angular/angular-original' },
    { name: 'TypeScript', icon: 'typescript/typescript-original' },
    { name: 'Bootstrap', icon: 'bootstrap/bootstrap-original' },
    { name: 'Tailwind', icon: 'tailwindcss/tailwindcss-original' },
    { name: 'Node.js', icon: 'nodejs/nodejs-original' },
    { name: 'Firebase', icon: 'firebase/firebase-original' },
    { name: 'Git', icon: 'git/git-original' },
    { name: 'GitHub', icon: 'github/github-original' }
  ];

  return (
    <section id="skills" className="py-3 py-md-5">
      <div className="container-fluid px-5">
        <div className="row text-center text-white mb-5">
          <div className="col">
            <h1 className="display-4 fw-bold">Technical Skills</h1>
            <p className="fs-5">Technologies and tools I have experience with</p>
          </div>
        </div>
        <div className="row justify-content-center g-4">
          {skills.map((skill, index) => (
            <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4">
              <div className="skill-item text-center">
                <img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${skill.icon}.svg`} alt={skill.name} className="skill-icon" />
                <p className="mt-2">{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
