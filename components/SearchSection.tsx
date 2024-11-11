"use client";

import { searchConfig } from "@/config/config";
import { useState } from "react";

export default function SearchSection() {
  const [searchText, setSearchText] = useState("");
  const [activeTool, setActiveTool] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  const [selectedEngines, setSelectedEngines] = useState<string[]>(
    searchConfig[0].engines
  );
  const [tools, setTools] = useState(searchConfig);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchText);
  };

  const handleLabelClick = (id: number, engines: string[], index: number) => {
    setTools(
      tools.map((tool) => ({
        ...tool,
        isSelected: tool.id === id,
      }))
    );
    setSelectedEngines(engines);
    setActiveTab(index);
  };

  return (
    <div className="flex justify-center items-center py-20 bg-[url('/images/bg-dna.jpg')]">
      <div className="flex flex-col items-center">
        <div className="flex text-green-500/50 w-[420px] relative">
          {tools.map(({ id, label, isSelected, engines }, index) => (
            <label
              key={id}
              htmlFor="search-text"
              className={`
                  flex-1 text-center py-3 px-4 
                  hover:text-green-500 cursor-pointer relative 
                  transition-colors duration-200
                  ${
                    isSelected
                      ? "text-green-500"
                      : `after:content-[''] 
                  after:absolute after:left-1/2 after:-translate-x-1/2 
                  after:bottom-1 after:w-1 after:h-1 
                  after:rounded-full after:bg-white 
                  after:opacity-0 hover:after:opacity-100
                  after:transition-opacity after:duration-200`
                  }
                `}
              onClick={() => handleLabelClick(id, engines, index)}
            >
              <span>{label}</span>
            </label>
          ))}
          {/* 添加底部指示器 */}
          <div
            className="absolute bottom-1 h-[4px] bg-white rounded-full transition-all duration-300 ease-in-out"
            style={{
              left: `${(100 / 6) * activeTab + (100 / 6) * 0.25}%`, // 向右偏移 1/4 标签宽度
              width: `${(100 / 6) * 0.5}%`, // 设置为标签宽度的一半
            }}
          />
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="rounded-full w-[800px] h-[50px] text-xl px-5 py-2 outline-none"
            type="text"
            placeholder="输入关键字搜索"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </form>
        <div>
          <div className="text-white/50 text-sm">
            <ul className="flex flex-wrap">
              {selectedEngines.map((item, index) => (
                <li key={index} className="px-4 py-3">
                  <label
                    className={`
                    relative flex flex-col items-center group cursor-pointer 
                    before:content-[''] before:absolute before:-top-2 
                    before:left-1/2 before:-translate-x-1/2
                    before:w-0 before:h-0 
                    before:border-l-[8px] before:border-l-transparent
                    before:border-r-[8px] before:border-r-transparent
                    before:border-t-[8px] before:border-t-white
                    ${
                      index === activeTool
                        ? "before:opacity-100 text-white"
                        : "before:opacity-0"
                    }
                    before:transition-opacity before:duration-200`}
                    onClick={() => setActiveTool(index)}
                  >
                    <span>{item}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
