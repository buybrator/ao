import React from 'react';

interface AvatarProps {
  src?: string;
  alt?: string;
  placeholder?: React.ReactNode; 
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  shape?: 'square' | 'circle'; 
}

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  placeholder,
  size = 'md',
  className = '',
  shape = 'square',
}) => {
  let sizeClasses = '';
  switch (size) {
    case 'sm':
      sizeClasses = 'w-10 h-10';
      break;
    case 'md':
      sizeClasses = 'w-16 h-16';
      break;
    case 'lg':
      sizeClasses = 'w-24 h-24';
      break;
  }

  const shapeClass = shape === 'circle' ? 'rounded-full' : ''; 

  const baseStyle = `bg-gray-300 border-2 border-black flex items-center justify-center overflow-hidden shadow-[2px_2px_0px_rgba(0,0,0,1)] ${shapeClass} ${sizeClasses}`;

  return (
    <div className={`${baseStyle} ${className}`}>
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : placeholder ? (
        placeholder
      ) : (
        <div className="w-full h-full bg-gray-400" /> 
      )}
    </div>
  );
};

export default Avatar;
