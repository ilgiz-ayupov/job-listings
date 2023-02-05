import React from "react";

interface StackProps {
  className: string;
  children: React.ReactNode;
}

const Stack: React.FC<StackProps> = ({ className, children }) => {
  return <ul className={className}>{children}</ul>;
};

export default Stack;
