import React, { ReactNode, HTMLProps } from 'react';

interface ContainerWrapperProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
  data: any; // Data to check for null or undefined
}

function ContainerWrapper({ children, data, ...rest }: ContainerWrapperProps) {
  if (data === null || data === undefined) {
    return (
      <div className={`container mx-auto ${rest.className || ''}`} {...rest}>
        <p className="font-bold text-2xl text-center text-red-400">No Data was Found!</p>
      </div>
    );
  }

  return (
    <div className={`container mx-auto ${rest.className || ''}`} {...rest}>
      {children}
    </div>
  );
}

export default ContainerWrapper;
