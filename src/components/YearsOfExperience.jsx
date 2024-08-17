// YearsOfExperience.js
import React from 'react';

const stats = [
  { number: '2', suffix: 'k', title: 'apps developed' },
  { number: '40', title: 'Consultants' },
  { number: '12', title: 'Awards won' },
  { number: '160', title: 'Employees' },
];

const clients = [
  'images/clients-9-270x117.png',
  'images/clients-10-270x117.png',
  'images/clients-3-270x117.png',
  'images/clients-11-270x117.png',
];

const YearsOfExperience = () => (
  <section className="section section-sm bg-default">
    <div className="container">
      <div className="row row-30 row-xl-24 justify-content-center align-items-center align-items-lg-start text-left">
        <div className="col-md-6 col-lg-5 col-xl-4 text-center">
          <a className="text-img" href="#">
            <div id="particles-js"></div>
            <span className="counter">10</span>
          </a>
        </div>
        <div className="col-sm-8 col-md-6 col-lg-5 col-xl-4">
          <div className="text-width-extra-small offset-top-lg-24 wow fadeInUp">
            <h3 className="title-decoration-lines-left">Years of Experience</h3>
            <p className="text-gray-500">
              RatherApp is a team of highly experienced app designers and
              developers creating unique software for you.
            </p>
            <a className="button button-secondary button-pipaluk" href="#">
              Get in touch
            </a>
          </div>
        </div>
        <div
          className="col-sm-10 col-md-8 col-lg-6 col-xl-4 wow fadeInRight"
          data-wow-delay=".1s"
        >
          <div className="row justify-content-center border-2-column offset-top-xl-26">
            {stats.map((stat, index) => (
              <div className="col-9 col-sm-6" key={index}>
                <div className="counter-amy">
                  <div className="counter-amy-number">
                    <span className="counter">{stat.number}</span>
                    {stat.suffix && (
                      <span className="symbol">{stat.suffix}</span>
                    )}
                  </div>
                  <h6 className="counter-amy-title">{stat.title}</h6>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-lg-6 col-xl-12 align-self-center">
          <div className="row row-30 justify-content-center">
            {clients.map((client, index) => (
              <div
                className={`col-sm-6 col-md-5 col-lg-6 col-xl-3 wow fadeInLeft`}
                data-wow-delay={`${0.1 * index}s`}
                key={index}
              >
                <a className="clients-classic" href="#">
                  <img src={client} alt="" width="270" height="117" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default YearsOfExperience;
