import React from "react";
import "./Input.scss";
import Icon from "../Icon";

interface InputProps {
  icon: string;
  placeholder: string;
  isPassword?: boolean;
}

const Input: React.FC<InputProps> = ({ icon, placeholder, isPassword }) => {
  return (
    <div className="input">
      <Icon source={icon} />
      <input placeholder={placeholder} />
    </div>
  );
};

export default Input;
