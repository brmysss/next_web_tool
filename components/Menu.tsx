"use client";

import { useSettings } from "@/hooks/use-settings";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
export interface MenuProps {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const Menu = ({ title, icon, href }: MenuProps) => {
  const { isCollapsed } = useSettings();
  return (
    <div>
      <Link
        href={href}
        className="py-4 flex items-center text-slate-600 pl-6 hover:text-red-500 text-sm"
      >
        {icon}
        {!isCollapsed && <span className="ml-2 text-xs">{title}</span>}
      </Link>
    </div>
  );
};

export default Menu;
