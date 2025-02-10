import React from "react";

interface SelectProps {
  children: React.ReactNode;
  onValueChange: (value: string) => void;
  defaultValue: string;
}

export const Select: React.FC<SelectProps> = ({ children, onValueChange, defaultValue }) => {
  return (
    <div className="relative">
      <select
        value={defaultValue}
        onChange={(e) => onValueChange(e.target.value)}
        className="block w-full p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-[#FF7B5F] cursor-pointer"
      >
        {children}
      </select>
    </div>
  );
};

interface SelectTriggerProps {
  children: React.ReactNode;
}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({ children }) => {
  return <div>{children}</div>;
};

interface SelectValueProps {
  placeholder: string;
}

export const SelectValue: React.FC<SelectValueProps> = ({ placeholder }) => {
  return <span>{placeholder}</span>;
};

interface SelectContentProps {
  children: React.ReactNode;
}

export const SelectContent: React.FC<SelectContentProps> = ({ children }) => {
  return <div>{children}</div>;
};

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

export const SelectItem: React.FC<SelectItemProps> = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};
