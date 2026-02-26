import React from 'react';

const Card = ({ children, className = '', padding = 'default', hover = false }) => {
  const baseStyles = 'bg-white rounded-lg shadow-md';

  const paddingStyles = {
    none: '',
    sm: 'p-3',
    default: 'p-6',
    lg: 'p-8',
  };

  const hoverStyles = hover ? 'hover:shadow-lg transition-shadow duration-200' : '';

  return (
    <div className={`${baseStyles} ${paddingStyles[padding]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
