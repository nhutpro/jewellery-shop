import React from "react";
import Icon, { ICON } from "../Icon";
import './Star.scss'

interface StartProps {
  starNumber: number;
}

const Star: React.FC<StartProps> = ({ starNumber }) => {
  return (
    <div className="star">
      {[...new Array(5)].map((__, index) => {
        if (starNumber > 0.8) {
          starNumber--;
          return <Icon key={index} source={ICON.FULL_STAR} />;
        }

        if (starNumber > 0) {
          starNumber--;
          return <Icon key={index} source={ICON.HALF_STAR} />;
        }

        return <Icon key={index} source={ICON.EMPTY_STAR} />;
      })}
    </div>
  );
};

export default Star;
