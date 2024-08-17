// ContactInformation.js
import React from 'react';

const contactInfo = [
  {
    id: 1,
    icon: 'fl-bigmug-line-cellphone55',
    links: [
      { href: 'tel:#', text: '+1 323-913-4688' },
      { href: 'tel:#', text: '+1 323-888-4554' },
    ],
  },
  {
    id: 2,
    icon: 'fl-bigmug-line-up104',
    links: [
      { href: '#', text: '4730 Crystal Springs Dr, Los Angeles, CA 90027' },
    ],
  },
  {
    id: 3,
    icon: 'fl-bigmug-line-chat55',
    links: [
      { href: 'mailto:#', text: 'mail@demolink.org' },
      { href: 'mailto:#', text: 'info@demolink.org' },
    ],
  },
];

const ContactInformation = () => {
  return (
    <section className="section section-sm bg-default">
      <div className="container">
        <div className="row row-30 justify-content-center">
          {contactInfo.map(contact => (
            <div className="col-sm-8 col-md-6 col-lg-4" key={contact.id}>
              <article className="box-contacts">
                <div className="box-contacts-body">
                  <div className={`box-contacts-icon ${contact.icon}`}></div>
                  <div className="box-contacts-decor"></div>
                  {contact.links.map((link, index) => (
                    <p className="box-contacts-link" key={index}>
                      <a href={link.href}>{link.text}</a>
                    </p>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
