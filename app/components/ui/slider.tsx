"use client";  // ✅ Add this at the top!

import React from "react";

interface SliderProps {
  value: number;
  onValueChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  label?: string;
  className?: string;
}

const Slider: React.FC<SliderProps> = ({
  value,
  onValueChange,
  min,
  max,
  step,
  label,
  className = "",
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onValueChange(Number(e.target.value));
  };

  return (
    <div className={`flex flex-col ${className}`}>
      {label && (
        <label htmlFor="slider" className="text-lg font-medium mb-2">
          {label}
        </label>
      )}
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
      <div className="mt-2 text-sm text-gray-600">Current value: {value.toFixed(1)}</div>
    </div>
  );
};

export default Slider;
