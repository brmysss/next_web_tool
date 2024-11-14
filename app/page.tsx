"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import SearchSection from "@/components/SearchSection";
import "./page.css";
import SiteSection from "@/components/SiteSection";
import { siteConfig } from "@/config/config";
import { useState } from "react";
import { useSettings } from "@/hooks/use-settings";
import FriendLinkSection from "@/components/FriendLinkSection";
import Footer from "@/components/Footer";

export default function Home() {
  const { isCollapsed } = useSettings();

  return (
    <div className="min-h-screen flex overflow-x-hidden">
      {/* 侧边栏 */}
      <Sidebar />

      <div
        className={`${
          isCollapsed ? "md:ml-[60px]" : "md:ml-[170px]"
        } ml-0 flex-1 flex flex-col grid-bg`}
      >
        {/* 头部 */}
        <Header />
        {/* 搜索区域 */}
        <SearchSection />

        <div className="container mx-auto max-w-[1900px]">
          {siteConfig.map((item, index) => (
            <SiteSection key={index} id={index.toString()} {...item} />
          ))}
          {/* 友情链接 */}
          <FriendLinkSection />
        </div>
        {/* 底部 */}
        <Footer />
      </div>
    </div>
  );
}
