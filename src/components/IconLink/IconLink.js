import React from 'react';
import './IconLink.css';

const IconLink = ({ href, IconComponent = null, iconSrc = null, alt, label }) => {
  return (
    <div className="main-text icon-link">
      <a href={href} target="_blank" rel="noopener noreferrer">
        {IconComponent ? (
          <IconComponent />
        ) : (
          <img src={iconSrc} alt={alt} width="50" height="50" />
        )}
        <br />
        <span>{label}</span>
      </a>
    </div>
  );
};

export default IconLink;