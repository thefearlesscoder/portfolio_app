import React from 'react';

const Contact = ({ contact, socialLinks }) => {
  return (
    <div className="section">
      <div className="contact">
        <div className="contact-left">
          <h3>{contact.heading}</h3>
          <p style={{ color: '#555' }}>{contact.subheading}</p>
        </div>
        <div className="contact-links">
          <a href={socialLinks.email} className="cl">Email ↗</a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="cl">LinkedIn ↗</a>
          <a href={socialLinks.github} target="_blank" rel="noreferrer" className="cl">GitHub ↗</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
