"use client";

import clsx from "clsx";
interface InputProps {
  id: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (str: any) => void;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  type,
  disabled,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <>
      <div>
        <input
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={clsx(
            `
            w-full
            rounded-md
            py-2.5
            px-5
            ring-1
            ring-inset
            ring-[#929292]/50
            outline-none
            bg-transparent 
            placeholder:text-[#929292]
            text-[#929292]/60`,
            disabled && "cursor-default bg-transparent opacity-50 font-ct"
          )}
        />
      </div>
    </>
  );
};

export default Input;
