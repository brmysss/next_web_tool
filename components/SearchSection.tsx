"use client";

import { useState } from "react";

export default function SearchSection() {
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchText);
  };

  return (
    <div className="flex justify-center items-center py-20 bg-[url('/images/bg-dna.jpg')]">
      <div className="flex flex-col items-center">
        <div className="flex text-green-500/50 w-[420px] relative">
          {["常用", "搜索", "工具", "社区", "生活", "求职"].map(
            (label, index) => (
              <label
                key={index}
                htmlFor="search-text"
                className={`flex-1 text-center py-3 px-4 hover:text-green-500 cursor-pointer relative ${
                  activeTab === index ? "text-green-500" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                <span>{label}</span>
              </label>
            )
          )}
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
      </div>
    </div>
  );
}
