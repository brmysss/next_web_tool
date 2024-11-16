"use client";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import SearchSection from "@/components/SearchSection";
import "./page.css";
import SiteSection from "@/components/SiteSection";
import { siteConfig } from "@/config/config";
import { useEffect, useState } from "react";
import { useSettings } from "@/hooks/use-settings";
import FriendLinkSection from "@/components/FriendLinkSection";
import Footer from "@/components/Footer";
import { useMediaQuery } from "usehooks-ts";

export default function Home() {
  const { isCollapsed, setIsCollapsed } = useSettings();
  const isMobile = useMediaQuery("(max-width: 768px)");
  useEffect(() => {
    if (!isCollapsed && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // 清理函数
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCollapsed]);

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
        {/* 移动端侧边栏出来时显示半透明遮罩 */}
        <div
          onClick={() => setIsCollapsed(true)}
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[1089] md:hidden ${
            isCollapsed ? "hidden pointer-events-none" : "block"
          }`}
        />
      </div>
    </div>
  );
}
