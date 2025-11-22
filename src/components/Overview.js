import React from 'react';

const Overview = () => {
  return (
    <section id="overview" className="vh-100 d-flex align-items-center justify-content-center" style={{ position: 'relative', zIndex: 1 }}>
      <div className="container-fluid text-white">
        <div className="row w-100 justify-content-center">
          <div className="col-lg-8 text-center">
            <p className="display-2 mb-3">Hello World,</p>
            <h1 className="display-3 fw-bold mb-3">I'm Kurt Joshua Cayaga</h1>
            <p className="display-5 mb-4">Aspiring AI/ML Engineer</p>
            <a href="#about" className="btn btn-outline-light btn-lg">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
