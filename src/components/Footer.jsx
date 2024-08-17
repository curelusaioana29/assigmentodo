import React from 'react';

const Footer = () => (
  <footer className="section section-fluid footer-minimal context-dark">
    <div className="bg-gray-15">
      <div className="container-fluid">
        <div className="footer-minimal-inset oh">
          <ul className="footer-list-category-2">
            <li><a href="#">UI Design</a></li>
            <li><a href="#">Windows/Mac OS Apps</a></li>
            <li><a href="#">Android/iOS Apps</a></li>
            <li><a href="#">Cloud Solutions</a></li>
            <li><a href="#">Customer Support</a></li>
          </ul>
        </div>
        <div className="footer-minimal-bottom-panel text-sm-left">
          <div className="row row-10 align-items-md-center">
            <div className="col-sm-6 col-md-4 text-sm-right text-md-center">
              <ul className="list-inline list-inline-sm footer-social-list-2">
                <li><a className="icon fa fa-facebook" href="#"></a></li>
                <li><a className="icon fa fa-twitter" href="#"></a></li>
                <li><a className="icon fa fa-google-plus" href="#"></a></li>
                <li><a className="icon fa fa-instagram" href="#"></a></li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-4 order-sm-first">
              <p className="rights"><span>&copy;&nbsp;</span><span className="copyright-year"></span> <span>RatherApp</span></p>
            </div>
            <div className="col-sm-6 col-md-4 text-md-right">
              <span>All rights reserved.</span> <span>Design&nbsp;by&nbsp;<a href="https://www.templatemonster.com">TemplateMonster</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
