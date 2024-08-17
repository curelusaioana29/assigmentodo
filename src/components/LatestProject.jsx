// LatestProjects.js
import React, { useState } from 'react';

const LatestProjects = () => {
  const [filter, setFilter] = useState('*');

  const handleFilterChange = newFilter => {
    setFilter(newFilter);
  };

  return (
    <section
      className="section section-sm section-fluid bg-default text-center"
      id="projects"
    >
      <div className="container-fluid">
        <h2 className="wow fadeInLeft">Latest Projects</h2>
        <p className="quote-jean wow fadeInRight" data-wow-delay=".1s">
          In our portfolio, you can browse the latest products developed for our
          clients for different corporate purposes. Our qualified team of
          interface designers and software developers is always ready to create
          something unique for you.
        </p>
        <div className="isotope-filters isotope-filters-horizontal">
          <button
            className="isotope-filters-toggle button button-md button-icon button-icon-right button-default-outline button-wapasha"
            data-custom-toggle="#isotope-3"
            data-custom-toggle-hide-on-blur="true"
            data-custom-toggle-disable-on-blur="true"
          >
            <span className="icon fa fa-caret-down"></span>Filter
          </button>
          <ul className="isotope-filters-list" id="isotope-3">
            <li>
              <a
                className={filter === '*' ? 'active' : ''}
                href="#"
                onClick={() => handleFilterChange('*')}
                data-isotope-group="gallery"
              >
                All
              </a>
            </li>
            <li>
              <a
                className={filter === 'Type 1' ? 'active' : ''}
                href="#"
                onClick={() => handleFilterChange('Type 1')}
                data-isotope-group="gallery"
              >
                Mobile Apps
              </a>
            </li>
            <li>
              <a
                className={filter === 'Type 2' ? 'active' : ''}
                href="#"
                onClick={() => handleFilterChange('Type 2')}
                data-isotope-group="gallery"
              >
                Custom Software
              </a>
            </li>
            <li>
              <a
                className={filter === 'Type 3' ? 'active' : ''}
                href="#"
                onClick={() => handleFilterChange('Type 3')}
                data-isotope-group="gallery"
              >
                QA & Testing
              </a>
            </li>
            <li>
              <a
                className={filter === 'Type 4' ? 'active' : ''}
                href="#"
                onClick={() => handleFilterChange('Type 4')}
                data-isotope-group="gallery"
              >
                UX and Design
              </a>
            </li>
          </ul>
        </div>
        <div
          className="row row-30 isotope"
          data-isotope-layout="fitRows"
          data-isotope-group="gallery"
          data-lightgallery="group"
        >
          <div
            className={`col-sm-6 col-lg-4 col-xxl-3 isotope-item ${
              filter === 'Type 4' ? 'show' : 'hide'
            }`}
          >
            {/* Content of the project */}
          </div>
          {/* Add more items here */}
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;
