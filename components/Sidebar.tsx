"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ExpandableMenu from "./ExpandableMenu";
import { topMenuList, bottomMenuList } from "@/config/menuConfig";
import { useSettings } from "@/hooks/use-settings";

export default function Sidebar() {
  const [topMenus, setTopMenus] = useState(topMenuList);
  const { isCollapsed, isMobileMenuOpen } = useSettings();

  const handleMenuClicked = (id: number, isOpen: boolean) => {
    // 点击的时候要把其他菜单的isOpen设置为false
    setTopMenus(
      topMenus.map((item) => ({
        ...item,
        isOpen: item.id === id ? isOpen : false,
      }))
    );
  };

  return (
    <div
      className={`fixed left-0 top-0 h-screen bg-white dark:bg-[#2c2e2f] transition-transform duration-150 ease-in-out w-[170px] z-[1090] -translate-x-full md:translate-x-0 ${
        isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      } ${isCollapsed ? "md:w-[60px]" : "md:w-[170px]"}`}
    >
      <div className="h-full flex flex-col">
        {/* Logo区域 */}
        <div className="sidebar-logo py-6 flex items-center pl-2">
          <Link href="/" className={isCollapsed ? "hidden" : ""}>
            <Image
              src="/images/bt8-expand-light.png"
              height={40}
              width={153}
              alt="在线工具网"
              className="dark:hidden"
            />
            <Image
              src="/images/bt8-expand-dark.png"
              height={40}
              width={153}
              alt="在线工具网"
              className="hidden dark:block"
            />
          </Link>
          <Link href="/" className={isCollapsed ? "" : "hidden"}>
            <Image
              src="/images/bt.png"
              height={40}
              width={40}
              alt="在线工具网"
              className="logo-light"
            />
            <Image
              src="/images/bt.png"
              height={40}
              width={40}
              alt="在线工具网"
              className="logo-dark hidden"
            />
          </Link>
        </div>
        {/* 中间菜单 */}
        <div className="flex-1 overflow-y-auto touch-pan-y">
          <ul className="h-full">
            {topMenus.map((item) => (
              <ExpandableMenu
                key={item.id}
                {...item}
                onMenuClicked={handleMenuClicked}
              />
            ))}
          </ul>
        </div>
        {/* 底部菜单 */}
        <div className="py-2">
          <ul>
            {bottomMenuList.map((item) => (
              <ExpandableMenu key={item.id} {...item} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
