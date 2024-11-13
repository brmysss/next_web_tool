"use client";

import { useSettings } from "@/hooks/use-settings";
import { BookText, ChevronsLeft, Home, Info, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { isCollapsed, setIsCollapsed } = useSettings();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`w-full fixed top-0 left-[${
        isCollapsed ? "60px" : "170px"
      }] h-[74px] z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white/70 backdrop-blur-sm text-gray-700" : "text-white"
      }`}
    >
      <div className="flex items-center h-16 gap-4 pl-2">
        {/* 菜单图标 */}
        <button
          className="p-2 hover:text-red-500"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? (
            <Menu className="w-6 h-6" />
          ) : (
            <ChevronsLeft className="w-6 h-6" />
          )}
        </button>
        <button className="p-2 flex items-center hover:text-red-500">
          <Home className="w-6 h-6" />
          <span className="text-sm">首页</span>
        </button>
        <button className="p-2 flex items-center hover:text-red-500">
          <BookText className="w-6 h-6" />
          <span className="text-sm">关于</span>
        </button>
      </div>
    </header>
  );
}
