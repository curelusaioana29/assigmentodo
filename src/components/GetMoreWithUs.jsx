// GetMoreWithUs.js
import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const tabsContent = [
  {
    id: 'tabs-6-1',
    title: 'FREE APPS',
    content:
      'We regularly upload new free apps to our website, which is fully accessible to our clients and subscribers. You can also find out about free apps in our blog.',
  },
  {
    id: 'tabs-6-2',
    title: 'GET SOCIAL',
    content:
      'Every app we develop has built-in social support that allows you to stay connected to your accounts on Facebook, Instagram, Twitter and other networks.',
  },
  {
    id: 'tabs-6-3',
    title: 'CUSTOMER SERVICE',
    content:
      'Every customer of RatherApp can get access to our friendly and qualified 24/7 support via chat or phone. Fell free to ask us any question!',
  },
  {
    id: 'tabs-6-4',
    title: 'GREAT USABILITY',
    content:
      'All our apps are designed to have great usability in order to easily operate our applications. That is why our software has high ratings and lots of awards.',
  },
];

const carouselItems = [
  'images/index-4-313x580.png',
  'images/index-5-313x580.png',
  'images/index-4-313x580.png',
  'images/index-5-313x580.png',
];

const GetMoreWithUs = () => {
  const [activeTab, setActiveTab] = useState('tabs-6-1');

  const handleTabClick = id => {
    setActiveTab(id);
  };

  return (
    <section className="section section-sm bg-default text-md-left">
      <div className="container">
        <div className="row row-50 align-items-center justify-content-center justify-content-xl-between">
          <div className="col-lg-6 col-xl-5 wow fadeInLeft">
            <h2>Get More With Us</h2>
            <div
              className="tabs-custom tabs-horizontal tabs-line tabs-line-big text-center text-md-left"
              id="tabs-6"
            >
              <ul className="nav nav-tabs">
                {tabsContent.map((tab, index) => (
                  <li className="nav-item" role="presentation" key={tab.id}>
                    <a
                      className={`nav-link nav-link-big ${
                        activeTab === tab.id ? 'active' : ''
                      }`}
                      href={`#${tab.id}`}
                      onClick={() => handleTabClick(tab.id)}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="tab-content">
                {tabsContent.map(tab => (
                  <div
                    key={tab.id}
                    className={`tab-pane fade ${
                      activeTab === tab.id ? 'show active' : ''
                    }`}
                    id={tab.id}
                  >
                    <h5 className="font-weight-normal">{tab.title}</h5>
                    <p>{tab.content}</p>
                    <div className="group-sm group-middle">
                      <a
                        className="button button-secondary button-pipaluk"
                        href="#modalCta"
                        data-toggle="modal"
                      >
                        Get in touch
                      </a>
                      <a
                        className="button button-default-outline button-wapasha"
                        href="#"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 text-center wow fadeInUp"
            data-wow-delay=".1s"
          >
            <OwlCarousel
              className="owl-carousel owl-style-1"
              items="2"
              loop
              autoplay
              margin="0"
              mouseDrag
            >
              {carouselItems.map((item, index) => (
                <a className="box-device" href="#" key={index}>
                  <img src={item} alt="" width="313" height="580" />
                </a>
              ))}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetMoreWithUs;
