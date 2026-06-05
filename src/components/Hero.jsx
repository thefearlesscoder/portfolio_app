import React from 'react';

const Hero = ({ data }) => {
  return (
    <div className="hero">
      <div>
        <div className="hero-label">// {data.role}</div>
        <div className="hero-name">{data.name}</div>
        <div className="hero-role" style={{ whiteSpace: 'pre-line' }}>{data.description}</div>
        <div className="hero-badges">
          {data.badges.map((badge, idx) => (
            <span key={idx} className={`badge ${badge.isLocation ? 'loc' : ''}`}>
              {badge.text}
            </span>
          ))}
        </div>
        <div className="hero-btn-row" style={{ marginTop: '14px' }}>
          <a href="#projects" className="btn-p" style={{ textDecoration: 'none', display: 'inline-block' }}>View Projects</a>
          <a href={data.socialLinks?.github} target="_blank" rel="noopener noreferrer" className="btn-s" style={{ textDecoration: 'none' }}>GitHub ↗</a>
          <a href={data.socialLinks?.linkedin} target="_blank" rel="noopener noreferrer" className="btn-s" style={{ textDecoration: 'none' }}>LinkedIn ↗</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="stat-row">
          {data.stats.map((stat, idx) => (
            <div key={idx} className="stat">
              <div className="stat-n">{stat.value}</div>
              <div className="stat-l">{stat.label}</div>
            </div>
          ))}
        </div>
        <div className="stat" style={{ padding: '10px 12px' }}>
          <div style={{ fontSize: '9px', color: 'var(--color-accent-primary)', marginBottom: '4px', letterSpacing: '0.1em' }}>
            {data.currentProject.title}
          </div>
          <div style={{ fontSize: '11px', color: 'var(--color-text-primary)' }}>
            {data.currentProject.name}
          </div>
          <div style={{ fontSize: '9px', color: '#555', marginTop: '2px' }}>
            {data.currentProject.link}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
