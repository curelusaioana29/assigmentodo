// WhatPeopleSay.js
import React from 'react';

const testimonials = [
  {
    name: 'Catherine Williams',
    status: 'Regular client',
    quote:
      'RatherApp offers a high caliber of resources skilled in Microsoft Azure .NET, mobile and Quality Assurance. They became our true business partners over the past three years.',
    imgSrc: 'images/user-11-75x75.jpg',
    imgAlt: 'Catherine Williams',
  },
  {
    name: 'Rupert Wood',
    status: 'Regular client',
    quote:
      'RatherApp powered us with a competent team to develop products for banking services. The team has been delivering results within budget and time, which is amazing.',
    imgSrc: 'images/user-12-75x75.jpg',
    imgAlt: 'Rupert Wood',
  },
  {
    name: 'Samantha Brown',
    status: 'Regular client',
    quote:
      'RatherApp is a highly skilled and uniquely capable firm with multitudes of talent on-board. We have collaborated on a number of diverse projects that have been a great success.',
    imgSrc: 'images/user-20-75x75.jpg',
    imgAlt: 'Samantha Brown',
  },
];

const WhatPeopleSay = () => {
  return (
    <section className="section section-sm section-bottom-70 section-fluid bg-default">
      <div className="container-fluid">
        <h2>What people Say</h2>
        <div className="row row-50 row-sm">
          {testimonials.map((testimonial, index) => (
            <div
              className={`col-md-6 col-xl-4 wow fadeInRight`}
              key={index}
              data-wow-delay={`${index * 0.1}s`}
            >
              <article className="quote-modern quote-modern-custom">
                <div className="unit unit-spacing-md align-items-center">
                  <div className="unit-left">
                    <a className="quote-modern-figure" href="#">
                      <img
                        className="img-circles"
                        src={testimonial.imgSrc}
                        alt={testimonial.imgAlt}
                        width="75"
                        height="75"
                      />
                    </a>
                  </div>
                  <div className="unit-body">
                    <h4 className="quote-modern-cite">
                      <a href="#">{testimonial.name}</a>
                    </h4>
                    <p className="quote-modern-status">{testimonial.status}</p>
                  </div>
                </div>
                <div className="quote-modern-text">
                  <p className="q">{testimonial.quote}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatPeopleSay;
