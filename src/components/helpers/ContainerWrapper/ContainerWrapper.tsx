import React, { ReactNode, HTMLProps } from 'react';

interface ContainerWrapperProps extends HTMLProps<HTMLDivElement> {
  children: ReactNode;
}
//use this container wrapper in all the components...
function ContainerWrapper({ children, ...rest }: ContainerWrapperProps) {
  return (
    <div className={`container mx-auto ${rest.className || ''}`} {...rest}>
      {children}
    </div>
  );
}

export default ContainerWrapper;
