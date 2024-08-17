import React from 'react';
import 'animate.css'; 

const ServicesSection = () => {
  return (
    <section className="section section-sm section-first bg-default text-center" id="services">
      <div className="container">
        <div className="row row-30 justify-content-center">
          <div className="col-md-7 col-lg-5 col-xl-6 text-lg-left">
            <img 
              src="images/index-1-415x592.png" 
              alt="Service" 
              width="415" 
              height="592" 
              className="wow fadeInUp" 
            />
          </div>
          <div className="col-lg-7 col-xl-6">
            <div className="row row-30">
              <div className="col-sm-6 wow fadeInRight">
                <article className="box-icon-modern box-icon-modern-custom">
                  <div>
                    <h3 className="box-icon-modern-big-title">What We Offer</h3>
                    <div className="box-icon-modern-decor"></div>
                    <a className="button button-primary button-ujarak" href="#">View All Services</a>
                  </div>
                </article>
              </div>
              <div className="col-sm-6 wow fadeInRight" data-wow-delay=".1s">
                <article className="box-icon-modern box-icon-modern-2">
                  <div className="box-icon-modern-icon linearicons-phone-in-out"></div>
                  <h5 className="box-icon-modern-title"><a href="#">CORPORATE<br/>SOLUTIONS</a></h5>
                  <div className="box-icon-modern-decor"></div>
                  <p className="box-icon-modern-text">Need specific software for your company? We are ready to develop it!</p>
                </article>
              </div>
              <div className="col-sm-6 wow fadeInRight" data-wow-delay=".2s">
                <article className="box-icon-modern box-icon-modern-2">
                  <div className="box-icon-modern-icon linearicons-headset"></div>
                  <h5 className="box-icon-modern-title"><a href="#">CALL CENTER<br/>SOLUTIONS</a></h5>
                  <div className="box-icon-modern-decor"></div>
                  <p className="box-icon-modern-text">Our experts provide custom products of any complexity for call centers.</p>
                </article>
              </div>
              <div className="col-sm-6 wow fadeInRight" data-wow-delay=".3s">
                <article className="box-icon-modern box-icon-modern-2">
                  <div className="box-icon-modern-icon linearicons-outbox"></div>
                  <h5 className="box-icon-modern-title"><a href="#">CLOUD<br/>DEVELOPMENT</a></h5>
                  <div className="box-icon-modern-decor"></div>
                  <p className="box-icon-modern-text">We can also offer you reliable cloud development solutions.</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
