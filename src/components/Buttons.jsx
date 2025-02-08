// Button.js
import React from "react";

const Button = ({ className, value, onClick, label }) => {
  return (
    <button className={`buttons ${className}`} value={value} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
