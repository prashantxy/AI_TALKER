import React from "react";

interface SliderProps {
  value: number; // For a single value. Can be adjusted for ranges.
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  label: string;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  value,
  onChange,
  min,
  max,
  step,
  label,
  className = "",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value)); // Ensure value is passed as number
  };

  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor="slider" className="text-lg font-medium mb-2">
        {label}
      </label>
      <input
        id="slider"
        type="range"
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#FF7B5F]"
        aria-labelledby="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
      />
      <div className="flex justify-between text-sm text-gray-500 mt-2">
        <span>{min}</span>
        <span>{max}</span>
      </div>
      <div className="mt-2 text-sm text-gray-600">Current value: {value}</div>
    </div>
  );
};

export default Slider;
