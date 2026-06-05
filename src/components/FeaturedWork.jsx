import React from 'react';

const FeaturedWork = ({ projects, githubLink }) => {
  return (
    <div className="section" id="projects">
      <div className="sec-header">
        <span className="sec-title">// FEATURED WORK</span>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="sec-link" style={{ textDecoration: 'none' }}>view all →</a>
      </div>
      <div className="proj-grid">
        {projects.map(proj => (
          <a href={proj.link} target="_blank" rel="noopener noreferrer" key={proj.id} className="proj" style={{ textDecoration: 'none', display: 'block' }}>
            <div className="proj-top">
              <span className="proj-name">{proj.name}</span>
              {proj.status && <span className="proj-lc">{proj.status}</span>}
            </div>
            <div className="proj-desc">{proj.description}</div>
            <div className="proj-tags">
              {proj.tags.map((tag, idx) => (
                <span key={idx} className={`tag ${tag.highlight ? 'hl' : ''}`}>
                  {tag.name}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default FeaturedWork;
