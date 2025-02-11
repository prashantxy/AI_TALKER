"use client"
import React from "react";

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

export const Select: React.FC<SelectProps> = ({ value, onValueChange, children }) => {
  return (
    <div className="relative">
      <select
        value={value}
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
  return <div className="p-2 border rounded-md cursor-pointer">{children}</div>;
};

interface SelectValueProps {
  value: string;
}

export const SelectValue: React.FC<SelectValueProps> = ({ value }) => {
  return <span>{value || "Select an option"}</span>;
};

interface SelectContentProps {
  children: React.ReactNode;
}

export const SelectContent: React.FC<SelectContentProps> = ({ children }) => {
  return <div className="absolute mt-1 w-full bg-white border rounded-md shadow-md">{children}</div>;
};

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
}

export const SelectItem: React.FC<SelectItemProps> = ({ value, children }) => {
  return <option value={value}>{children}</option>;
};
