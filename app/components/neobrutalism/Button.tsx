import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'ghost';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseStyle =
    'px-6 py-3 font-bold border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black';
  
  const hoverStyle = 'hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5';
  const activeStyle = 'active:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:translate-y-0.5 active:translate-x-0.5';

  let variantStyle = '';
  switch (variant) {
    case 'primary':
      variantStyle = 'bg-blue-500 text-white';
      break;
    case 'secondary':
      variantStyle = 'bg-gray-300 text-black';
      break;
    case 'success':
      variantStyle = 'bg-green-500 text-white'; // For Buy
      break;
    case 'danger':
      variantStyle = 'bg-red-500 text-white'; // For Sell
      break;
    case 'ghost':
      variantStyle = 'bg-transparent text-black shadow-none hover:shadow-[4px_4px_0px_rgba(0,0,0,0.1)] active:shadow-none';
      break;
    default:
      variantStyle = 'bg-blue-500 text-white';
  }

  // For disabled state, reduce opacity and remove hover/active effects
  const disabledClasses = props.disabled ? 'opacity-50 cursor-not-allowed' : `${hoverStyle} ${activeStyle}`;

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${disabledClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
