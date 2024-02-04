import React from 'react';

interface ButtonProps {
  text: string;
  type: 'primary' | 'secondary';
  onClick?: () => void;
  isHiddenOnMobile?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, type, onClick, isHiddenOnMobile }) => {
  const primaryStyles = 'bg-[#3171DE] hover:bg-[#FFFFFF] hover:text-[#3171DE] border hover:border-[#3171DE] px-6 py-3 rounded-full text-[#FFFFFF] transition-all duration-5 ease-in-out';
  const secondaryStyles = 'bg-white hover:bg-[#5E5DEF] hover:text-[#FFFFFF] border-[#5E5DEF] px-6 py-3 rounded-full text-[#5E5DEF] transition-all duration-5 ease-in-out';

  const buttonStyle = isHiddenOnMobile ? 'md:block hidden' : '';

  return (
    <button
      className={`${type === 'primary' ? primaryStyles : secondaryStyles} ${buttonStyle}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
