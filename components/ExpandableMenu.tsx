"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
interface ExpandableMenuProps {
  title: string;
  icon: React.ReactNode;
  href?: string;
  subMenu?: {
    title: string;
    href: string;
  }[];
}

const ExpandableMenu = ({
  title,
  icon,
  href,
  subMenu,
}: ExpandableMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Link
        href={href || subMenu?.[0].href || "#"}
        className="py-4 smooth flex items-center text-slate-600 pl-6 hover:text-red-500 text-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        {icon}
        <span className="ml-2">{title}</span>
        {subMenu && (
          <ChevronRight
            className={`
              ml-6 w-4 h-4
              transition-transform duration-300 ease-in-out
              ${isOpen ? "rotate-90" : "rotate-0"}
            `}
          />
        )}
      </Link>
      {subMenu && (
        <ul
          className={`${
            isOpen ? "max-h-96" : "max-h-0"
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          {subMenu.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="py-4 smooth flex items-center text-slate-600 pl-6 hover:text-red-500 text-sm"
              >
                <span className="ml-6">{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpandableMenu;
