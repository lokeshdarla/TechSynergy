import React from 'react';
import './Button.css';

export interface ButtonProps {
  text: string;
  type: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  isHiddenOnMobile?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, type, onClick, isHiddenOnMobile }) => {
  const buttonStyle = isHiddenOnMobile ? 'hidden-on-mobile' : '';

  return (
    <button
      className={`button-base ${type === 'primary' ? 'primary-button' : type === 'secondary' ? 'secondary-button' : 'tertiary-button'} ${buttonStyle}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
