"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Film,
  FlaskConical,
  FolderOpen,
  Pencil,
  Star,
  Wrench,
} from "lucide-react";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

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
                <li>
                  <Link
                    href="#3e90c5117dc0fe9d71410e448d766e52"
                    className="py-4 smooth flex items-center pl-6 gap-2 hover:text-red-500 text-sm"
                  >
                    <Star className="w-4 h-4" />
                    <span>常用工具</span>
                  </Link>
                </li>

                <li>
                  <Link
                    href="#3e90c5117dc0fe9d71410e448d766e52"
                    className="py-4 smooth flex items-center pl-6 hover:text-red-500 text-sm"
                  >
                    <FlaskConical className="w-4 h-4 mr-2" />
                    <span>科研办公</span>
                    <ChevronRight className="ml-4 w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#3e90c5117dc0fe9d71410e448d766e52"
                    className="py-4 smooth flex items-center pl-6 hover:text-red-500 text-sm"
                  >
                    <Film className="w-4 h-4 mr-2" />
                    <span>休闲娱乐</span>
                    <ChevronRight className="ml-4 w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#3e90c5117dc0fe9d71410e448d766e52"
                    className="py-4 smooth flex items-center pl-6 hover:text-red-500 text-sm"
                  >
                    <FolderOpen className="w-4 h-4 mr-2" />
                    <span>素材资源</span>
                    <ChevronRight className="ml-4 w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#3e90c5117dc0fe9d71410e448d766e52"
                    className="py-4 smooth flex items-center pl-6 hover:text-red-500 text-sm"
                  >
                    <Wrench className="w-4 h-4 mr-2" />
                    <span>开发设计</span>
                    <ChevronRight className="ml-4 w-4 h-4" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#3e90c5117dc0fe9d71410e448d766e52"
                    className="py-4 smooth flex items-center pl-6 hover:text-red-500 text-sm"
                  >
                    <Pencil className="w-4 h-4 mr-2" />
                    <span>资讯学习</span>
                    <ChevronRight className="ml-4 w-4 h-4" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
