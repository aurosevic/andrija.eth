import React from 'react';
import './IconLink.css';

const IconLink = ({ href, IconComponent = null, iconSrc = null, alt, label, width = "50", height="50" }) => {
  return (
    <div className="main-text icon-link">
        <a href={href} target="_blank" rel="noopener noreferrer">
            {IconComponent ? (
                <IconComponent width={width} height={height}/>
            ) : (
                <img src={iconSrc} alt={alt} width={width} height={height}/>
            )}
            <span style={{paddingTop: '14px'}}>{label}</span>
        </a>
    </div>
  );
};

export default IconLink;