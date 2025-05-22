import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className = '', ...props }) => {
  const baseStyle =
    'w-full px-4 py-3 border-2 border-black bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 shadow-[2px_2px_0px_rgba(0,0,0,1)] focus:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all duration-150 ease-in-out';
  
  const disabledStyle = props.disabled ? 'opacity-60 bg-gray-100 cursor-not-allowed' : '';

  return (
    <input
      className={`${baseStyle} ${disabledStyle} ${className}`}
      {...props}
    />
  );
};

export default Input;
