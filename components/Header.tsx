"use client";

import { useSettings } from "@/hooks/use-settings";
import { BookText, ChevronsLeft, Home, Info, Menu, Search } from "lucide-react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const {
    isCollapsed,
    setIsCollapsed,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    isSearchDialogOpen,
    setIsSearchDialogOpen,
  } = useSettings();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header
      className={`fixed top-0 ${
        isCollapsed ? "md:left-[60px]" : "md:left-[170px]"
      } left-0 right-0 h-[74px] z-50 transition-colors duration-300 ${
        isScrolled
          ? "bg-white/70 dark:bg-[#2c2e2f] backdrop-blur-sm text-gray-700 dark:text-white/80"
          : "text-white"
      }`}
    >
      <div className="flex justify-between">
        <div className="items-center h-16 gap-4 pl-2 flex">
          <button
            className="p-2 hover:text-red-500 hidden md:flex"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? (
              <Menu className="w-6 h-6" />
            ) : (
              <ChevronsLeft className="w-6 h-6" />
            )}
          </button>
          <button className="p-2 items-center hover:text-red-500 hidden md:flex">
            <Home className="w-6 h-6" />
            <span className="text-sm">首页</span>
          </button>
          <button className="p-2 items-center hover:text-red-500 hidden md:flex">
            <BookText className="w-6 h-6" />
            <span className="text-sm">关于</span>
          </button>

          {/* 移动端时显示 */}
          <Link href="/" className="md:hidden">
            <Image
              src="/images/bt.png"
              height={40}
              width={44}
              alt="在线工具网"
              className="logo-light"
            />
            <Image
              src="/images/bt.png"
              height={40}
              width={44}
              alt="在线工具网"
              className="logo-dark hidden"
            />
          </Link>
        </div>

        <div className="items-center h-16 gap-1 flex">
          <button
            onClick={() => setIsSearchDialogOpen(true)}
            className="p-2 flex items-center md:hover:text-red-500"
          >
            <Search className="w-6 h-6" />
          </button>
          <button
            className="p-2 flex items-center md:hover:text-red-500 md:hidden"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
