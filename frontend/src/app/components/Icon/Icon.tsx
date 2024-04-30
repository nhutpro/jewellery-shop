import React from "react";
import "./Icon.scss";

interface IconProps {
  source: string;
}

const Icon: React.FC<IconProps> = ({ source }) => {
  return (
    <div className="icon">
      <i className={source}></i>
    </div>
  );
};

export default Icon;
