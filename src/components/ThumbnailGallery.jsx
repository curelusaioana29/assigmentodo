// ThumbnailGallery.js
import React from 'react';

const thumbnails = [
  {
    src: 'images/fullwidth-gallery-1-420x350.jpg',
    alt: 'FinStep',
    link: 'images/grid-gallery-1-1200x800-original.jpg',
    title: 'FinStep',
    description:
      'We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.',
    filter: 'Type 4',
  },
  {
    src: 'images/fullwidth-gallery-2-420x350.jpg',
    alt: 'Mobile Finance',
    link: 'images/grid-gallery-2-1200x800-original.jpg',
    title: 'Mobile Finance',
    description:
      'We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.',
    filter: 'Type 1',
  },
  {
    src: 'images/fullwidth-gallery-3-420x350.jpg',
    alt: 'Q-Manage',
    link: 'images/grid-gallery-3-1200x800-original.jpg',
    title: 'Q-Manage',
    description:
      'We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.',
    filter: 'Type 2',
  },
  {
    src: 'images/fullwidth-gallery-4-420x350.jpg',
    alt: 'WeatherCast',
    link: 'images/grid-gallery-4-1200x800-original.jpg',
    title: 'WeatherCast',
    description:
      'We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.',
    filter: 'Type 3',
  },
  {
    src: 'images/fullwidth-gallery-5-420x350.jpg',
    alt: 'Home Calendar',
    link: 'images/grid-gallery-5-1200x800-original.jpg',
    title: 'Home Calendar',
    description:
      'We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.',
    filter: 'Type 3',
  },
  {
    src: 'images/fullwidth-gallery-6-420x350.jpg',
    alt: 'MPlanner',
    link: 'images/grid-gallery-6-1200x800-original.jpg',
    title: 'MPlanner',
    description:
      'We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.',
    filter: 'Type 1',
  },
  {
    src: 'images/fullwidth-gallery-7-420x350.jpg',
    alt: 'Alice Messenger',
    link: 'images/grid-gallery-7-1200x800-original.jpg',
    title: 'Alice Messenger',
    description:
      'We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.',
    filter: 'Type 2',
  },
  {
    src: 'images/fullwidth-gallery-8-420x350.jpg',
    alt: 'WiseMoney',
    link: 'images/grid-gallery-8-1200x800-original.jpg',
    title: 'WiseMoney',
    description:
      'We work hard on every app to deliver top-notch features with great UI that you won’t find anywhere else.',
    filter: 'Type 3',
  },
];

const Thumbnail = ({ src, alt, link, title, description }) => (
  <article className="thumbnail thumbnail-classic thumbnail-md">
    <div className="thumbnail-classic-figure">
      <img src={src} alt={alt} width="420" height="350" />
    </div>
    <div className="thumbnail-classic-caption">
      <div className="thumbnail-classic-title-wrap">
        <a
          className="icon fl-bigmug-line-zoom60"
          href={link}
          data-lightgallery="item"
        >
          <img src={src} alt={alt} width="420" height="350" />
        </a>
        <h5 className="thumbnail-classic-title">
          <a href="#">{title}</a>
        </h5>
      </div>
      <p className="thumbnail-classic-text">{description}</p>
    </div>
  </article>
);

const ThumbnailGallery = ({ filter }) => (
  <section
    className="section section-sm section-fluid bg-default text-center"
    id="projects"
  >
    <div className="container-fluid">
      <div className="row row-30 isotope">
        {thumbnails
          .filter(item => filter === '*' || item.filter === filter)
          .map((item, index) => (
            <div
              className={`col-sm-6 col-lg-4 col-xxl-3 isotope-item wow fadeIn${
                index % 2 === 0 ? 'Left' : 'Right'
              }`}
              data-filter={item.filter}
              data-wow-delay={`${0.1 * (index + 1)}s`}
              key={index}
            >
              <Thumbnail {...item} />
            </div>
          ))}
      </div>
    </div>
  </section>
);

export default ThumbnailGallery;
