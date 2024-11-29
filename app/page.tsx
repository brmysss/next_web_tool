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
import { MoonStar, Search, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import SearchDialog from "@/components/SearchDialog";

export default function Home() {
  const {
    isCollapsed,
    isMobileMenuOpen,
    isSearchDialogOpen,
    setIsCollapsed,
    setIsMobileMenuOpen,
    setIsSearchDialogOpen,
  } = useSettings();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    if (isMobileMenuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // 清理函数
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsCollapsed(false);
  }, [isMobile]);

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
            <SiteSection key={index} {...item} />
          ))}
          {/* 友情链接 */}
          <FriendLinkSection />
        </div>
        {/* 底部 */}
        <Footer />
        {/* 移动端侧边栏出来时显示半透明遮罩 */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[1089] md:hidden ${
            isMobileMenuOpen ? "block" : "hidden pointer-events-none"
          }`}
        />
        {/* 搜索按钮和夜间模式切换按钮 */}
        <div className="flex flex-col gap-2 fixed bottom-5 right-5 text-black dark:text-white">
          <button
            className="bg-white dark:bg-[#2c2e2f]  p-3 rounded-full"
            onClick={() => setIsSearchDialogOpen(true)}
          >
            <Search className="w-4 h-4" />
          </button>
          <button
            className="bg-white dark:bg-[#2c2e2f]  p-3 rounded-full"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <MoonStar className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* 弹窗 */}
      <SearchDialog isOpen={isSearchDialogOpen} />
    </div>
  );
}
