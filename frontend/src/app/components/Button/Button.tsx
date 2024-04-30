import React from "react";
import "./Button.scss"

interface ButtonProps {
  text: string;
}

const Button: React.FC<ButtonProps> = ({ text }) => {
  return <button>{text}</button>;
};

export default Button;
