"use client"
import React, { useState, ReactElement } from "react";

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
}

interface SelectTriggerProps {
  children: React.ReactNode;
}

interface SelectValueProps {
  value?: string;
  placeholder?: string;
}

interface SelectContentProps {
  children: React.ReactNode;
  onSelect?: (value: string) => void;
  currentValue?: string;
}

interface SelectItemProps {
  value: string;
  children: React.ReactNode;
  onSelect?: (value: string) => void;
  isSelected?: boolean;
}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({ children }) => {
  return <div className="p-2 border rounded-md cursor-pointer bg-white">{children}</div>;
};

export const SelectValue: React.FC<SelectValueProps> = ({ value, placeholder }) => {
  return <span>{value || placeholder || "Select an option"}</span>;
};

export const SelectItem: React.FC<SelectItemProps> = ({ value, children, onSelect, isSelected }) => {
  return (
    <div
      className={`p-2 cursor-pointer hover:bg-gray-100 ${
        isSelected ? "bg-gray-50 text-[#FF7B5F]" : ""
      }`}
      onClick={() => onSelect?.(value)}
    >
      {children}
    </div>
  );
};

export const SelectContent: React.FC<SelectContentProps> = ({ children, onSelect, currentValue }) => {
  return (
    <div className="mt-1 w-full bg-white border rounded-md shadow-md max-h-60 overflow-auto">
      {React.Children.map(children, (child) => {
        if (React.isValidElement<SelectItemProps>(child) && child.type === SelectItem) {
          return React.cloneElement(child, {
            onSelect,
            isSelected: child.props.value === currentValue,
          });
        }
        return child;
      })}
    </div>
  );
};

export const Select: React.FC<SelectProps> = ({ value, onValueChange, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (newValue: string) => {
    onValueChange(newValue);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <div onClick={() => setIsOpen(!isOpen)}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement<SelectTriggerProps>(child) && child.type === SelectTrigger) {
            return child;
          }
          return null;
        })}
      </div>

      {isOpen && (
        <div className="absolute w-full z-50">
          {React.Children.map(children, (child) => {
            if (React.isValidElement<SelectContentProps>(child) && child.type === SelectContent) {
              return React.cloneElement(child, {
                onSelect: handleSelect,
                currentValue: value,
              });
            }
            return null;
          })}
        </div>
      )}
    </div>
  );
};