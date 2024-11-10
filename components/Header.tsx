"use client";

import { Menu } from "lucide-react";
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
      className={`fixed top-0 left-[170px] right-0 z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-gray-200/80 backdrop-blur-sm text-gray-500"
          : "text-white"
      }`}
    >
      <div className="flex items-center justify-between h-16">
        {/* 菜单图标 */}
        <button className="p-2">
          <Menu />
        </button>
      </div>
    </header>
  );
}
