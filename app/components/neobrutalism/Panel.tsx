import React from 'react';

interface PanelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Panel: React.FC<PanelProps> = ({ children, className = '', ...props }) => {
  const baseStyle = 'bg-white border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]';

  return (
    <div className={`${baseStyle} ${className}`} {...props}>
      {children}
    </div>
  );
};

export default Panel;
