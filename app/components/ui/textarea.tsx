import React from "react";

interface TextAreaProps {
  value: string;
  onChange: (value: string) => void; // Expects a string, not the event
  placeholder?: string;
  rows?: number;
  cols?: number;
  maxLength?: number;
  className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
  value,
  onChange,
  placeholder = "Type here...",
  rows = 4,
  cols = 50,
  maxLength,
  className = "",
}) => {
  // Extract the value from the event and pass it to onChange
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value); // Pass the value (string), not the event
  };

  return (
    <textarea
      value={value}
      onChange={handleChange} // Using handleChange to extract value
      placeholder={placeholder}
      rows={rows}
      cols={cols}
      maxLength={maxLength}
      className={`resize-none border p-2 rounded-md w-full ${className}`}
    />
  );
};

export default TextArea;
