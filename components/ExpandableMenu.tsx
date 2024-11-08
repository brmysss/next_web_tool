"use client";

import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
interface ExpandableMenuProps {
  title: string;
  icon: React.ReactNode;
  subMenu?: {
    title: string;
    href: string;
  }[];
}

const ExpandableMenu = ({ title, icon, subMenu }: ExpandableMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      <Link
        href="#3e90c5117dc0fe9d71410e448d766e52"
        className="py-4 smooth flex items-center pl-6 hover:text-red-500 text-sm"
      >
        {icon}
        <span className="ml-2">{title}</span>
        {subMenu && <ChevronRight className="ml-4 w-4 h-4" />}
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
                href="#3e90c5117dc0fe9d71410e448d766e52"
                className="py-4 smooth flex items-center pl-6 hover:text-red-500 text-sm"
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
