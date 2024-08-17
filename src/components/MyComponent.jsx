import React from 'react';

const MyComponent = () => {
  return (
    <div className="page">
      <div id="home">
        {/* Top Banner */}
        <a
          className="section section-banner text-center d-none d-xl-block"
          href="https://www.templatemonster.com/intense-multipurpose-html-template.html"
          style={{
            backgroundImage: 'url(images/banner/banner-bg-02-1920x60.jpg)',
            backgroundImage: '-webkit-image-set(url(images/banner/banner-bg-02-1920x60.jpg) 1x, url(images/banner/banner-bg-02-3840x120.jpg) 2x)',
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="images/banner/banner-fg-02-1600x60.png"
            srcSet="images/banner/banner-fg-02-1600x60.png 1x, images/banner/banner-fg-02-3200x120.png 2x"
            alt="Banner"
            width="1600"
            height="310"
          />
        </a>

        {/* Page Header */}
        <header className="section page-header">
          {/* RD Navbar */}
          <div className="rd-navbar-wrap">
            <nav
              className="rd-navbar rd-navbar-classic"
              data-layout="rd-navbar-fixed"
              data-sm-layout="rd-navbar-fixed"
              data-md-layout="rd-navbar-fixed"
              data-md-device-layout="rd-navbar-fixed"
              data-lg-layout="rd-navbar-static"
              data-lg-device-layout="rd-navbar-fixed"
              data-xl-layout="rd-navbar-static"
              data-xl-device-layout="rd-navbar-static"
              data-xxl-layout="rd-navbar-static"
              data-xxl-device-layout="rd-navbar-static"
              data-lg-stick-up-offset="46px"
              data-xl-stick-up-offset="46px"
              data-xxl-stick-up-offset="46px"
              data-lg-stick-up="true"
              data-xl-stick-up="true"
              data-xxl-stick-up="true"
            >
              <div className="rd-navbar-main-outer">
                <div className="rd-navbar-main">
                  {/* RD Navbar Panel */}
                  <div className="rd-navbar-panel">
                    {/* RD Navbar Toggle */}
                    <button className="rd-navbar-toggle" data-rd-navbar-toggle=".rd-navbar-nav-wrap">
                      <span></span>
                    </button>

                    {/* RD Navbar Brand */}
                    <div className="rd-navbar-brand">
                      <a className="brand" href="index.html">
                        <img src="images/logo-default-223x50.png" alt="Logo" width="223" height="50" />
                      </a>
                    </div>
                  </div>

                  <div className="rd-navbar-main-element">
                    <div className="rd-navbar-nav-wrap">
                      {/* RD Navbar Share */}
                      <div className="rd-navbar-share fl-bigmug-line-share27" data-rd-navbar-toggle=".rd-navbar-share-list">
                        <ul className="list-inline rd-navbar-share-list">
                          <li className="rd-navbar-share-list-item"><a className="icon fa fa-facebook" href="#"></a></li>
                          <li className="rd-navbar-share-list-item"><a className="icon fa fa-twitter" href="#"></a></li>
                          <li className="rd-navbar-share-list-item"><a className="icon fa fa-google-plus" href="#"></a></li>
                          <li className="rd-navbar-share-list-item"><a className="icon fa fa-instagram" href="#"></a></li>
                        </ul>
                      </div>

                      {/* RD Navbar Nav */}
                      <ul className="rd-navbar-nav">
                        <li className="rd-nav-item active"><a className="rd-nav-link" href="#home">Home</a></li>
                        <li className="rd-nav-item"><a className="rd-nav-link" href="#services">Services</a></li>
                        <li className="rd-nav-item"><a className="rd-nav-link" href="#projects">Projects</a></li>
                        <li className="rd-nav-item"><a className="rd-nav-link" href="#team">Team</a></li>
                        <li className="rd-nav-item"><a className="rd-nav-link" href="#news">News</a></li>
                        <li className="rd-nav-item"><a className="rd-nav-link" href="#contacts">Contacts</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default MyComponent;
