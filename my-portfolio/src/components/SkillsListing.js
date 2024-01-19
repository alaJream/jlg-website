import React from 'react';
import './SkillsListing.css'; 

const SkillsListing = ({ title, items, showTitle = true }) => {
    return (
      <div>
        {showTitle && <div className="skills-title">{title}</div>}
        <div className="skills-grid">
          {items.map((item, index) => (
            <div key={index} className="skill-item">{item}</div>
          ))}
        </div>
      </div>
    );
  };

export default SkillsListing;
