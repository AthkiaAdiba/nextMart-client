import React, { ReactNode } from "react";

interface NMContainerProps {
  children: ReactNode;
  className?: string;
}

const NMContainer = ({ children, className = "" }: NMContainerProps) => {
  return <div className={`px-12 mx-auto ${className}`}>{children}</div>;
};

export default NMContainer;
