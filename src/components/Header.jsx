import React from 'react';

const Header = ({ resumeLink }) => {
  return (
    <div className="nav">
      <span className="nav-logo">VK</span>
      <div className="nav-links">
        {/* <span>work</span> */}
        {/* <span>skills</span> */}
        {/* <span>experience</span> */}
        {/* <span>blog</span> */}
        <span>Vivek Kumar | Final Year | MNNIT Allahabad  </span>
      </div>
      <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="nav-cta" style={{ textDecoration: 'none' }}>
        résumé ↓
      </a>
    </div>
  );
};

export default Header;
