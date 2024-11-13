"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ExpandableMenu from "./ExpandableMenu";
import { menuConfig } from "@/config/menuConfig";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [menus, setMenus] = useState(menuConfig);

  const handleMenuClicked = (id: number, isOpen: boolean) => {
    setIsCollapsed(false);
    // 点击的时候要把其他菜单的isOpen设置为false
    setMenus(
      menus.map((item) => ({
        ...item,
        isOpen: item.id === id ? isOpen : false,
      }))
    );
  };

  return (
    <div className="fixed left-0 top-0 h-screen fade animate-nav w-[170px] bg-white">
      <div className="modal-dialog h-full sidebar-nav-inner">
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
        <div className="sidebar-menu flex-1">
          <div className="sidebar-scroll">
            <div className="sidebar-menu-inner">
              <ul>
                {menus.map((item) => (
                  <ExpandableMenu
                    key={item.id}
                    {...item}
                    onMenuClicked={handleMenuClicked}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
