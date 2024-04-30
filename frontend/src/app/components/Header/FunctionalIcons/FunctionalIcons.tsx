import React from "react";
import "./FunctionalIcons.scss";
import Icon from "../../Icon";
import { ICON } from "../../Icon/constants";

const FunctionalIcons: React.FC = () => {
  return (
    <div className="functional-icons">
      <div className="functional-icons__icon-container">
        <Icon source={ICON.CART}></Icon>
      </div>
      <div className="functional-icons__icon-container">
        <Icon source={ICON.WISHLIST}></Icon>
      </div>
      <div className="functional-icons__icon-container">
        <Icon source={ICON.LOGIN}></Icon>
      </div>
    </div>
  );
};

export default FunctionalIcons;
