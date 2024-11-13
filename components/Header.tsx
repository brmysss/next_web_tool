"use client";

import { BookText, Home, Info, Menu } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 left-[170px] h-[74px] right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-white/70 backdrop-blur-sm text-gray-700" : "text-white"
      }`}
    >
      <div className="flex items-center h-16 gap-4">
        {/* 菜单图标 */}
        <button className="p-2">
          <Menu className="w-6 h-6" />
        </button>
        <button className="p-2 flex items-center">
          <Home className="w-6 h-6" />
          <span className="text-sm">首页</span>
        </button>
        <button className="p-2 flex items-center">
          <BookText className="w-6 h-6" />
          <span className="text-sm">关于</span>
        </button>
      </div>
    </header>
  );
}
