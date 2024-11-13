"use client";

import { useSettings } from "@/hooks/use-settings";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export interface ExpandableMenuProps {
  id: number;
  title: string;
  icon: React.ReactNode;
  href?: string;
  isOpen?: boolean;
  subMenu?: {
    title: string;
    href: string;
  }[];
  onMenuClicked?: (id: number, isOpen: boolean) => void;
  target?: string;
}

const ExpandableMenu = ({
  id,
  title,
  icon,
  href,
  isOpen,
  subMenu,
  onMenuClicked,
  target,
}: ExpandableMenuProps) => {
  const parentHref = href || subMenu?.[0].href || "#";
  const { isCollapsed } = useSettings();

  const handleClick = (
    href: string,
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      // 处理纯数字的情况，添加额外的属性选择器
      const selector = href.match(/^\#\d+$/) ? `[id="${href.slice(1)}"]` : href;
      const targetElement = document.querySelector(selector);
      if (targetElement) {
        const offsetTop =
          targetElement.getBoundingClientRect().top + window.pageYOffset - 90;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
      // 手动更新url
      window.history.pushState({}, "", href);
    }
  };

  return (
    <div>
      <Link
        target={target || "_self"}
        href={parentHref}
        className="py-4 flex items-center text-slate-600 pl-6 hover:text-red-500 text-sm"
        onClick={(e) => {
          onMenuClicked?.(id, !isOpen);
          handleClick(parentHref, e);
        }}
      >
        {icon}
        {!isCollapsed && <span className="ml-2 text-xs">{title}</span>}
        {!isCollapsed && subMenu && (
          <ChevronRight
            className={`
              ml-6 w-4 h-4
              transition-transform duration-300 ease-in-out
              ${isOpen ? "rotate-90" : "rotate-0"}
            `}
          />
        )}
      </Link>
      {!isCollapsed && subMenu && (
        <ul
          className={`${
            isOpen ? "max-h-96" : "max-h-0"
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          {subMenu.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                onClick={(e) => handleClick(item.href, e)}
                className="py-4 flex items-center text-slate-600 pl-6 hover:text-red-500 text-sm"
              >
                <span className="ml-6 text-xs">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpandableMenu;
