import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';

const SwiperComponent = () => {
  return (
    <section className="section">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        direction="vertical"
        loop={true}
        autoplay={{ delay: 4859 }}
        pagination={{
          type: 'fraction',
          el: '.swiper-pagination',
          renderFraction: function (currentClass, totalClass) {
            return (
              '<span class="' +
              currentClass +
              '"></span>' +
              '<span class="swiper-pagination__fraction-divider">/</span>' +
              '<span class="' +
              totalClass +
              '"></span>'
            );
          },
        }}
        className="swiper-slider swiper-slider-classic"
      >
        <SwiperSlide>
          <div
            className="swiper-slide"
            style={{
              backgroundImage: 'url(images/slider-1-slide-2-1770x742.jpg)',
            }}
          >
            <div className="swiper-slide-caption section-md">
              <div className="container">
                <h1 className="fadeInLeft">Mobile App Development</h1>
                <p className="text-width-large fadeInRight">
                  Since our establishment, we have been delivering high-quality
                  and sustainable software solutions for corporate purposes of
                  worldwide businesses.
                </p>
                <a
                  className="button button-primary button-ujarak fadeInUp"
                  href="#modalCta"
                  data-toggle="modal"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="swiper-slide"
            style={{
              backgroundImage: 'url(images/slider-1-slide-4-1770x742.jpg)',
            }}
          >
            <div className="swiper-slide-caption section-md">
              <div className="container">
                <h1 className="fadeInLeft">Experienced Team</h1>
                <p className="text-width-large fadeInRight">
                  We are a team of qualified software developers, aimed at
                  creating unique and powerful tools for your business &
                  everyday life.
                </p>
                <a
                  className="button button-primary button-ujarak fadeInUp"
                  href="#modalCta"
                  data-toggle="modal"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="swiper-slide"
            style={{
              backgroundImage: 'url(images/slider-1-slide-6-1770x742.jpg)',
            }}
          >
            <div className="swiper-slide-caption section-md">
              <div className="container">
                <h1 className="fadeInLeft">Award-Winning Software</h1>
                <p className="text-width-large fadeInRight">
                  The software solutions developed by our company have been
                  numerously awarded for usability and innovative features.
                </p>
                <a
                  className="button button-primary button-ujarak fadeInUp"
                  href="#modalCta"
                  data-toggle="modal"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="swiper-pagination__module">
        <div className="swiper-pagination__fraction">
          <span className="swiper-pagination__fraction-index">00</span>
          <span className="swiper-pagination__fraction-divider">/</span>
          <span className="swiper-pagination__fraction-count">00</span>
        </div>
        <div className="swiper-pagination__divider"></div>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};

export default SwiperComponent;
