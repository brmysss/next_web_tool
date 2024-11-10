"use client";

import { useState } from "react";

export default function SearchSection() {
  const [searchText, setSearchText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(searchText);
  };

  return (
    <div className="flex justify-center items-center py-20 bg-[url('/images/bg-dna.jpg')]">
      <div className="flex flex-col items-center">
        <div className="flex text-green-500/50 w-[420px]">
          <label
            htmlFor="search-text"
            className="flex-1 text-center py-2 px-4 hover:text-green-500"
          >
            <span>常用</span>
          </label>
          <label
            htmlFor="search-engine"
            className="flex-1 text-center py-2 px-4 hover:text-green-500"
          >
            <span>搜索</span>
          </label>
          <label
            htmlFor="search-text"
            className="flex-1 text-center py-2 px-4 hover:text-green-500"
          >
            <span>工具</span>
          </label>
          <label
            htmlFor="search-engine"
            className="flex-1 text-center py-2 px-4 hover:text-green-500"
          >
            <span>社区</span>
          </label>
          <label
            htmlFor="search-engine"
            className="flex-1 text-center py-2 px-4 hover:text-green-500"
          >
            <span>生活</span>
          </label>
          <label
            htmlFor="search-engine"
            className="flex-1 text-center py-2 px-4 hover:text-green-500"
          >
            <span>求职</span>
          </label>
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
