// Pricing.js
import React from 'react';

const pricingPlans = [
  {
    title: 'Basic',
    price: '$500.00',
    features: [
      'Concept development',
      'UI design',
      'Configuration management',
      'Software quality assurance',
      'App integration',
    ],
    popular: false,
  },
  {
    title: 'Optimal',
    price: '$800.00',
    features: [
      'Concept development',
      'UI design',
      'Configuration management',
      'Software quality assurance',
      'App integration',
    ],
    popular: true,
  },
  {
    title: 'Ultimate',
    price: '$1200.00',
    features: [
      'Concept development',
      'UI design',
      'Configuration management',
      'Software quality assurance',
      'App integration',
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="section section-sm section-bottom-70 section-fluid bg-default">
      <div className="container">
        <h2>Pricing</h2>
        <div className="row row-30 justify-content-center">
          {pricingPlans.map((plan, index) => (
            <div className="col-md-6 col-lg-5 col-xl-4" key={index}>
              <div
                className={`box-pricing box-pricing-black ${
                  plan.popular ? 'box-pricing-popular' : ''
                }`}
              >
                <div className="box-pricing-body">
                  <h5 className="box-pricing-title">{plan.title}</h5>
                  <h3 className="box-pricing-price">{plan.price}</h3>
                  <div className="box-pricing-time">starting at</div>
                  <div className="box-pricing-divider">
                    <div className="divider"></div>
                    <span>{plan.title}</span>
                  </div>
                  <ul className="box-pricing-list">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        className={featureIndex < 2 ? 'active' : ''}
                        key={featureIndex}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="box-pricing-button">
                  <a
                    className={`button button-lg button-block ${
                      plan.popular ? 'button-primary' : 'button-gray-4'
                    }`}
                    href="#"
                  >
                    Get started
                  </a>
                </div>
                {plan.popular && (
                  <div className="box-pricing-badge">popular</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
