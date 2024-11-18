"use client";

import { useState, useEffect } from "react";
import { EngineType } from "@/types/EngineType";

const SearchEngine = ({
  engines,
  onEngineSelected,
}: {
  engines: EngineType[];
  onEngineSelected: (engine: EngineType) => void;
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    setSelectedIndex(0);
    onEngineSelected(engines[0]);
  }, [engines]);

  const handleLabelClick = (index: number) => {
    setSelectedIndex(index);
    onEngineSelected(engines[index]);
  };

  return (
    <div>
      <div className="text-white/50 text-sm">
        <ul className="flex flex-wrap">
          {engines.map((item, index) => (
            <li key={index} className="px-4 py-3">
              <label
                className={`
            relative flex flex-col items-center group cursor-pointer 
            before:content-[''] before:absolute before:-top-2 
            before:left-1/2 before:-translate-x-1/2
            before:w-0 before:h-0 
            before:border-l-[8px] before:border-l-transparent
            before:border-r-[8px] before:border-r-transparent
            before:border-t-[8px] before:border-t-white dark:before:border-t-white/80
            ${
              index === selectedIndex
                ? "before:opacity-100 text-white"
                : "before:opacity-0"
            }
            before:transition-opacity before:duration-200`}
                onClick={() => handleLabelClick(index)}
              >
                <span>{item.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchEngine;
