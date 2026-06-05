import React from 'react';

const Experience = ({ experience }) => {
  return (
    <div className="section">
      <div className="sec-header"><span className="sec-title">// EXPERIENCE</span></div>
      <div className="exp-list">
        {experience.map((exp, idx) => (
          <div key={exp.id} className="exp">
            <div className="exp-dot-col">
              <div className="exp-dot" style={{ background: exp.dotColor }}></div>
              {idx < experience.length - 1 && <div className="exp-line"></div>}
            </div>
            <div className="exp-body">
              <div className="exp-company">
                {exp.company} <span style={{ color: '#444', fontSize: '9px', marginLeft: '4px' }}>{exp.location}</span>
              </div>
              <div className="exp-role">{exp.role}</div>
              <div className="exp-period">{exp.period}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
