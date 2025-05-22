import React from 'react';
import Button from './Button'; // Assuming Button component is in the same directory

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footerActions?: React.ReactNode; 
  showSaveCancel?: boolean;
  onSave?: () => void;
  saveLabel?: string;
  cancelLabel?: string;
  className?: string;
  titleClassName?: string;
  bodyClassName?: string;
  footerClassName?: string;
}

const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footerActions,
  showSaveCancel = false,
  onSave,
  saveLabel = 'Save',
  cancelLabel = 'Cancel',
  className = '',
  titleClassName = '',
  bodyClassName = '',
  footerClassName = '',
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4"
      onClick={onClose} 
    >
      <div
        className={`bg-white border-2 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] w-full max-w-md flex flex-col ${className}`}
        onClick={(e) => e.stopPropagation()} 
      >
        {/* Header */}
        <div
          className={`px-6 py-4 border-b-2 border-black flex justify-between items-center ${titleClassName}`}
        >
          <h2 className="text-2xl font-bold">{title}</h2>
          <Button variant="ghost" onClick={onClose} className="!p-2 !shadow-none !border-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </Button>
        </div>

        {/* Body */}
        <div className={`px-6 py-4 flex-grow overflow-y-auto ${bodyClassName}`}>
          {children}
        </div>

        {/* Footer */}
        {(footerActions || showSaveCancel) && (
          <div
            className={`px-6 py-4 border-t-2 border-black flex justify-end space-x-3 ${footerClassName}`}
          >
            {footerActions ? (
              footerActions
            ) : showSaveCancel ? (
              <>
                <Button variant="secondary" onClick={onClose}>
                  {cancelLabel}
                </Button>
                {onSave && (
                  <Button variant="primary" onClick={onSave}>
                    {saveLabel}
                  </Button>
                )}
              </>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dialog;
