"use client";

import { useState } from "react";

export default function SearchSection() {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex justify-center items-center py-4 bg-[url('/images/bg-dna.jpg')]">
      <div className="s-search">
        <div id="search" className="s-search mx-auto">
          <div className="search-wrapper">
            {/* 搜索类型选择 */}
            <div className="search-content">
              <div className="search-input">
                <input
                  type="text"
                  id="search-text"
                  className="form-control search-key"
                  placeholder="输入关键字搜索"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                />
              </div>
              <div className="search-btn">
                <button type="submit">
                  <i className="iconfont icon-search" />
                </button>
              </div>
            </div>
          </div>

          {/* 搜索引擎选择 */}
          <div className="search-engine">
            <div className="search-engine-list">{/* 搜索引擎选项... */}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
