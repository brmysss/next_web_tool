"use client";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* 移动端菜单按钮 */}
          <button className="header-mini-btn md:hidden">
            <svg viewBox="0 0 100 100" width="40">
              <path className="line--1" d="M0 40h62c13 0 6 28-4 18L35 35" />
              <path className="line--2" d="M0 50h70" />
              <path className="line--3" d="M0 60h62c13 0 6-28-4-18L35 65" />
            </svg>
          </button>

          {/* 导航菜单 */}
          <nav className="hidden md:flex items-center space-x-4">
            {/* 导航项... */}
          </nav>

          {/* 深色模式切换 */}
          <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <i className="text-xl" />
          </button>
        </div>
      </div>
    </header>
  );
}
