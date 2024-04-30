import React from "react";
import "./NavItem.scss";

interface NabItemProps {
  path: string;
  active?: boolean;
  title: string;
}

const NabItem: React.FC<NabItemProps> = ({ path, active, title }) => {
  return (
    <div className="nav-item">
      <a href={path} className={active ? "active" : undefined}>
        {title}
      </a>
    </div>
  );
};

export default NabItem;
