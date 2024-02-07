import React from 'react';
import { useMemo } from 'react';

export interface ButtonProps {
  text: string;
  type: 'primary' | 'secondary' | 'tertiary';
  onClick?: () => void;
  isHiddenOnMobile?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, type, onClick, isHiddenOnMobile }) => {
  const primaryStyles = useMemo(() => 'bg-[#3171DE] hover:bg-[#FFFFFF] hover:text-[#3171DE] border hover:border-[#3171DE] px-6 py-3 rounded-full text-[#FFFFFF] transition-all duration-5 ease-in-out', []);
  const secondaryStyles = useMemo(() => 'bg-white hover:bg-[#5E5DEF] hover:text-[#FFFFFF] border-[#5E5DEF] px-6 py-3 rounded-full text-[#5E5DEF] transition-all duration-5 ease-in-out', []);
  const tertiaryStyles = useMemo(() => 'px-7 py-2 bg-[#66B066] text-[#ffffff] text-[20px] rounded-full transition-all duration-5 ease-in-out hover:text-[#66B066] border hover:border-[#66B066] hover:bg-[#FFFFFF]', []);
  const buttonStyle = isHiddenOnMobile ? 'md:block hidden' : '';

  return (
    <button
      className={`${type === 'primary' ? primaryStyles : type === 'secondary' ? secondaryStyles : tertiaryStyles} ${buttonStyle}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
