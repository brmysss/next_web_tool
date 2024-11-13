"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ExpandableMenu from "./ExpandableMenu";
import { topMenuList, bottomMenuList } from "@/config/menuConfig";
import Menu from "./Menu";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [topMenus, setTopMenus] = useState(topMenuList);

  const handleMenuClicked = (id: number, isOpen: boolean) => {
    setIsCollapsed(false);
    // 点击的时候要把其他菜单的isOpen设置为false
    setTopMenus(
      topMenus.map((item) => ({
        ...item,
        isOpen: item.id === id ? isOpen : false,
      }))
    );
  };

  return (
    <div className="fixed left-0 top-0 h-screen fade animate-nav w-[170px] bg-white">
      <div className="h-full flex flex-col">
        {/* Logo区域 */}
        <div className="sidebar-logo py-6 flex items-center pl-4">
          <Link href="/" className="logo-expanded">
            <Image
              src="/images/bt8-expand-light.png"
              height={40}
              width={153}
              alt="在线工具网"
              className="logo-light"
            />
            <Image
              src="/images/bt8-expand-dark.png"
              height={40}
              width={153}
              alt="在线工具网"
              className="logo-dark hidden"
            />
          </Link>
          <Link href="/" className="logo-collapsed hidden">
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

        {/* 菜单区域 */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <ul>
              {topMenus.map((item) => (
                <ExpandableMenu
                  key={item.id}
                  {...item}
                  onMenuClicked={handleMenuClicked}
                />
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {bottomMenuList.map((item) => (
                <Menu key={item.id} {...item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
