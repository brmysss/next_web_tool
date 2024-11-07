"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import SearchSection from "@/components/SearchSection";
import SiteList from "@/components/SiteList";
import "./page.css";
import SiteSection from "@/components/SiteSection";
import config from "@/config/config";

export default function Home() {
  return (
    <div className="min-h-screen flex">
      {/* 侧边栏 */}
      <Sidebar />

      <div className="ml-[170px] flex-1 flex flex-col grid-bg">
        {/* 搜索区域 */}
        <SearchSection />

        <div className="container mx-auto max-w-[1900px]">
          {config.map((item, index) => (
            <SiteSection key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
