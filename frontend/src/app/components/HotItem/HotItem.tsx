import React from "react";
import "./HotItem.scss"

interface HotItemProps {
  imageSource: string;
  title: string;
}

const HotItem: React.FC<HotItemProps> = ({ imageSource, title }) => {
  return (
    <div className="hot-item">
      <p className="hot-item__title">{title}</p>
      <div className="hot-item__image-container">
        <div className="hot-item__image_box">
          <img src={imageSource} />
        </div>
      </div>
    </div>
  );
};

export default HotItem;
