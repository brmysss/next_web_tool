"use client";

import { useSettings } from "@/hooks/use-settings";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useMediaQuery } from "usehooks-ts";
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
  const { isCollapsed, setIsMobileMenuOpen } = useSettings();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleClick = (
    href: string,
    e: React.MouseEvent<HTMLAnchorElement>,
    isSubMenu: boolean
  ) => {
    if (href?.startsWith("#")) {
      e.preventDefault();
      const targetElement = document.querySelector(href);
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
      if (isMobile && isSubMenu) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <div>
      <Link
        target={target || "_self"}
        href={parentHref}
        className="py-4 flex items-center text-slate-600 dark:text-white/80 dark:hover:text-white dark:hover:bg-[#232526] pl-6 hover:text-red-500 text-sm"
        onClick={(e) => {
          onMenuClicked?.(id, !isOpen);
          handleClick(parentHref, e, false);
        }}
      >
        {icon}
        <span className={`${isCollapsed ? "hidden" : "block"} ml-2 text-xs`}>
          {title}
        </span>
        {subMenu && (
          <ChevronRight
            className={`
              ml-6 w-4 h-4
              transition-transform duration-300 ease-in-out
              ${isOpen ? "rotate-90" : "rotate-0"}
              ${isCollapsed ? "hidden" : "block"}
            `}
          />
        )}
      </Link>
      {subMenu && (
        <ul
          className={`${
            isOpen ? "max-h-96" : "max-h-0"
          } overflow-hidden transition-all duration-300 ease-in-out ${
            isCollapsed ? "hidden" : "block"
          }`}
        >
          {subMenu.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                onClick={(e) => handleClick(item.href, e, true)}
                className="py-4 flex items-center text-slate-600 dark:text-white/80 pl-6 dark:hover:bg-[#232526] dark:hover:text-white hover:text-red-500 text-sm"
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
