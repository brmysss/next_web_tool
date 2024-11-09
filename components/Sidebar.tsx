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
import ExpandableMenu from "./ExpandableMenu";

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
                  <ExpandableMenu
                    href="#0"
                    icon={<Star className="w-4 h-4" />}
                    title="常用工具"
                  />
                </li>

                <li>
                  <ExpandableMenu
                    icon={<FlaskConical className="w-4 h-4" />}
                    title="科研办公"
                    subMenu={[
                      {
                        title: "生物信息",
                        href: "#1",
                      },
                      {
                        title: "云服务器",
                        href: "#2",
                      },
                      {
                        title: "办公学习",
                        href: "#3",
                      },
                    ]}
                  />
                </li>
                <li>
                  <ExpandableMenu
                    icon={<Film className="w-4 h-4" />}
                    title="休闲娱乐"
                    subMenu={[
                      {
                        title: "影音视频",
                        href: "#4",
                      },
                      {
                        title: "游戏竞技",
                        href: "#5",
                      },
                    ]}
                  />
                </li>
                <li>
                  <ExpandableMenu
                    icon={<FolderOpen className="w-4 h-4" />}
                    title="素材资源"
                    subMenu={[
                      {
                        title: "网盘资源",
                        href: "#6",
                      },
                      {
                        title: "图标素材",
                        href: "#7",
                      },
                      {
                        title: "图标设计",
                        href: "#8",
                      },
                      {
                        title: "平面素材",
                        href: "#9",
                      },
                      {
                        title: "字体资源",
                        href: "#10",
                      },
                      {
                        title: "PPT资源",
                        href: "#11",
                      },
                    ]}
                  />
                </li>
                <li>
                  <ExpandableMenu
                    icon={<Wrench className="w-4 h-4" />}
                    title="开发设计"
                    subMenu={[
                      {
                        title: "图形创意",
                        href: "#12",
                      },
                      {
                        title: "界面设计",
                        href: "#13",
                      },
                      {
                        title: "在线配色",
                        href: "#14",
                      },
                      {
                        title: "在线工具",
                        href: "#15",
                      },
                      {
                        title: "谷歌插件",
                        href: "#16",
                      },
                    ]}
                  />
                </li>
                <li>
                  <ExpandableMenu
                    icon={<Pencil className="w-4 h-4" />}
                    title="资讯学习"
                    subMenu={[
                      {
                        title: "资讯书籍",
                        href: "#17",
                      },
                      {
                        title: "博客论坛",
                        href: "#18",
                      },
                      {
                        title: "设计规范",
                        href: "#19",
                      },
                      {
                        title: "视频教程",
                        href: "#20",
                      },
                    ]}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
