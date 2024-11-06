"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import SearchSection from "@/components/SearchSection";
import SiteList from "@/components/SiteList";

export default function Home() {
  return (
    <div className="min-h-screen flex">
      {/* 侧边栏 */}
      <Sidebar />

      <div className="flex-1 min-w-0">
        <div className="main-content flex flex-col">
          {/* 顶部导航 */}
          <Header />

          {/* 搜索区域 */}
          <SearchSection />

          {/* 网站列表区域 */}
          <SiteList />
        </div>
      </div>
    </div>
  );
}
