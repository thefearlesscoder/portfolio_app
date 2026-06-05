import React from 'react';

const Skills = ({ skills }) => {
  return (
    <div className="section">
      <div className="sec-header"><span className="sec-title">// SKILLS</span></div>
      <div className="skills-grid">
        {skills.map((category, idx) => (
          <div key={idx} className="skill-cat">
            <div className="skill-cat-name">{category.category}</div>
            <div className="skill-list">
              {category.items.map((skill, sIdx) => (
                <div key={sIdx} className="skill-item">
                  <span className="skill-name">{skill.name}</span>
                  <div className="skill-bar-wrap">
                    <div className="skill-bar" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
