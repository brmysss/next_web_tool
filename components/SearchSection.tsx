"use client";

import { searchConfig } from "@/config/config";
import { Search } from "lucide-react";
import { useState } from "react";
import SearchEngine from "./SearchEngine";
import { EngineType } from "@/types/EngineType";
import { SearchType } from "@/types/SearchType";
export default function SearchSection() {
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [selectedSearchType, setSelectedSearchType] = useState<SearchType>(
    searchConfig[0]
  );
  const [selectedEngine, setSelectedEngine] = useState<EngineType>(
    searchConfig[0].engines[0]
  );
  const [searchTypes, setSearchTypes] = useState(searchConfig);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText.trim()) {
      return;
    }
    const searchUrl = `${selectedEngine.action}${searchText}`;
    window.open(searchUrl, "_blank");
  };

  const handleLabelClick = (clickedItem: SearchType, index: number) => {
    setSearchTypes(
      searchTypes.map((item) => ({
        ...item,
        isSelected: item.id === clickedItem.id,
      }))
    );
    setSelectedSearchType(clickedItem);
    setActiveTab(index);
  };

  const onEngineSelected = (engine: EngineType) => {
    setSelectedEngine(engine);
  };

  return (
    <div className="flex justify-center items-center py-16 bg-[url('/images/bg-dna.jpg')]">
      <div className="flex flex-col items-center w-full px-2">
        <div className="flex text-green-500/50 w-full md:w-[420px] relative">
          {searchTypes.map((item, index) => (
            <label
              key={item.id}
              htmlFor="search-text"
              className={`
                  flex-1 text-center py-3 md:px-4 
                  hover:text-green-500 cursor-pointer relative 
                  transition-colors duration-200
                  ${
                    item.isSelected
                      ? "text-green-500"
                      : `after:content-[''] 
                  after:absolute after:left-1/2 after:-translate-x-1/2 
                  after:bottom-1 after:w-1 after:h-1 
                  after:rounded-full after:bg-white 
                  after:opacity-0 hover:after:opacity-100
                  after:transition-opacity after:duration-200`
                  }
                `}
              onClick={() => handleLabelClick(item, index)}
            >
              <span>{item.label}</span>
            </label>
          ))}
          {/* 添加底部指示器 */}
          <div
            className="absolute bottom-1 h-[4px] bg-white dark:bg-white/80 rounded-full transition-all duration-300 ease-in-out"
            style={{
              left: `${(100 / 6) * activeTab + (100 / 6) * 0.25}%`, // 向右偏移 1/4 标签宽度
              width: `${(100 / 6) * 0.5}%`, // 设置为标签宽度的一半
            }}
          />
        </div>
        {/* 搜索框 */}
        <form
          className="relative w-full flex md:w-[800px] justify-center"
          onSubmit={handleSubmit}
        >
          <input
            className="dark:bg-[#2c2e2f] rounded-full w-full h-[50px] text-base px-5 py-2 outline-none"
            type="text"
            placeholder={selectedEngine.placeholder}
            value={searchText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchText(e.target.value)
            }
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-500 focus:outline-none"
          >
            <Search className="h-5 w-5" />
          </button>
        </form>
        {/* 底部指示器 */}
        <SearchEngine
          engines={selectedSearchType.engines}
          onEngineSelected={onEngineSelected}
        />
      </div>
    </div>
  );
}
