import React, { useState } from 'react';

const ContactForm = () => {
  // State to manage form inputs
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // Handle input changes
  const handleChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    // Process form submission (e.g., send data to an API or server)
    console.log('Form submitted:', form);
    // You might want to reset the form or show a success message
    // setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section
      className="section section-sm section-last bg-default text-left"
      id="contacts"
    >
      <div className="container">
        <article className="title-classic">
          <div className="title-classic-title">
            <h3>Get in touch</h3>
          </div>
          <div className="title-classic-text">
            <p>
              If you have any questions, just fill in the contact form, and we
              will answer you shortly.
            </p>
          </div>
        </article>
        <form
          className="rd-form rd-form-variant-2 rd-mailform"
          onSubmit={handleSubmit}
        >
          <div className="row row-14 gutters-14">
            <div className="col-md-4">
              <div className="form-wrap">
                <input
                  className="form-input"
                  id="contact-your-name-2"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" htmlFor="contact-your-name-2">
                  Your Name
                </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-wrap">
                <input
                  className="form-input"
                  id="contact-email-2"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
                <label className="form-label" htmlFor="contact-email-2">
                  E-mail
                </label>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-wrap">
                <input
                  className="form-input"
                  id="contact-phone-2"
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
                <label className="form-label" htmlFor="contact-phone-2">
                  Phone
                </label>
              </div>
            </div>
            <div className="col-12">
              <div className="form-wrap">
                <label className="form-label" htmlFor="contact-message-2">
                  Message
                </label>
                <textarea
                  className="form-input textarea-lg"
                  id="contact-message-2"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
          </div>
          <button
            className="button button-primary button-pipaluk"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
