import React from 'react';

const BottomBanner = () => (
  <section className="section section-fluid">
    <a
      className="section-banner"
      href="https://www.templatemonster.com/intense-multipurpose-html-template.html"
      style={{
        backgroundImage: `url(images/banner/banner-bg-01-1920x310.jpg)`,
        backgroundImage: `-webkit-image-set(
          url(images/banner/banner-bg-01-1920x310.jpg) 1x,
          url(images/banner/banner-bg-01-3840x620.jpg) 2x
        )`,
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="images/banner/banner-fg-01-1600x310.png"
        srcSet="images/banner/banner-fg-01-1600x310.png 1x, images/banner/banner-fg-01-3200x620.png 2x"
        alt="Banner"
        width="1600"
        height="310"
      />
    </a>
  </section>
);

export default BottomBanner;
