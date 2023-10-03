import React from "react";

interface InputProps {
  type: "text" | "number" | "password" | "email"; // Specify the input type
  placeholder?: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  prefix?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  prefix,
  className,
}) => {
  return (
    <div
      className={`flex flex-row justify-center align-center items-center gap-2 ${className}`}
    >
      {prefix && <div>{prefix}</div>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  );
};

export default Input;
