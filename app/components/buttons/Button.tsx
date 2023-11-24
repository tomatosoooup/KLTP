"use client";

import clsx from "clsx";
import { TfiReload } from "react-icons/tfi";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  type,
  fullWidth,
  children,
  onClick,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={clsx(
        `
        uppercase text-base leading-6 flex items-center gap-4 rounded-md px-5 py-3 relative justify-center font-tt btn 
  `,
        fullWidth && "w-full",
        disabled && "opacity-50"
      )}
    >
      {children}
      <TfiReload size={16} color="#828282" />
    </button>
  );
};

export default Button;
