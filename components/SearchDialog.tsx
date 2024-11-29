"use client";

import { ChevronDown, ChevronRight, Search, X } from "lucide-react";
import { useState } from "react";
import { searchConfig } from "@/config/config";
import { SearchType } from "@/types/SearchType";
import { EngineType } from "@/types/EngineType";
import { useSettings } from "@/hooks/use-settings";

interface DialogProps {
  isOpen: boolean;
}

const SearchDialog = ({ isOpen }: DialogProps) => {
  const { setIsSearchDialogOpen } = useSettings();
  const [searchText, setSearchText] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [searchTypes, setSearchTypes] = useState(searchConfig);
  const [selectedSearchType, setSelectedSearchType] = useState<SearchType>(
    searchConfig[0]
  );
  const [selectedEngine, setSelectedEngine] = useState<EngineType>(
    searchConfig[0].engines[0]
  );

  const handleSearchTypeClick = (type: SearchType) => {
    setSelectedSearchType(type);
    setSelectedEngine(type.engines[0]);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!searchText.trim()) {
      return;
    }
    const searchUrl = `${selectedEngine.action}${searchText}`;
    window.open(searchUrl, "_blank");
  };

  const handleClose = () => {
    setSearchText("");
    setIsSearchDialogOpen(false);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-150 ${
        isOpen ? "block" : "hidden"
      }`}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="p-4 w-[800px] flex flex-col items-center animate-in slide-in-from-top duration-150">
        <div className="w-full rounded-lg bg-white dark:bg-[#2c2e2f] px-4 py-10">
          {/* 顶部导航栏 */}
          <div className="flex">
            {/* 选项按钮和popup */}
            <div className="relative">
              <button
                className="text-gray-500 flex items-center gap-1 px-2 py-1 text-base"
                onMouseEnter={() => setShowPopup(true)}
                onMouseLeave={() => setShowPopup(false)}
              >
                {selectedSearchType.label}
                <ChevronRight className="h-4 w-4" />
              </button>
              {/* 弹出菜单 */}
              {showPopup && (
                <div
                  className="z-10 absolute top-full left-1/2 -translate-x-1/2 bg-white dark:bg-[#2c2e2f] rounded-lg shadow-lg border dark:border-gray-700 w-20 before:content-[''] before:absolute before:top-[-6px] before:left-1/2 before:-translate-x-1/2 before:w-3 before:h-3 before:rotate-45 before:bg-white dark:before:bg-[#2c2e2f] before:border-t before:border-l before:border-gray-200 dark:before:border-gray-700"
                  onMouseEnter={() => setShowPopup(true)}
                  onMouseLeave={() => setShowPopup(false)}
                >
                  <div className="py-2 space-y-1">
                    {searchTypes.map((type) => (
                      <button
                        key={type.id}
                        className="w-full text-center py-1 text-sm hover:bg-gray-100 dark:hover:bg-gray-800"
                        onClick={() => handleSearchTypeClick(type)}
                      >
                        {type.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-1">
              {selectedSearchType.engines.map((engine, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedEngine(engine)}
                  className={`text-gray-500 px-3 py-1 text-sm ${
                    engine.name === selectedEngine.name ? "bg-gray-100" : ""
                  } hover:bg-gray-100 dark:hover:bg-gray-800`}
                >
                  {engine.name}
                </button>
              ))}
            </div>
          </div>

          {/* 搜索框部分 */}
          <form className="relative" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder={selectedEngine.placeholder}
              className="w-full px-4 py-2 rounded-md bg-gray-100 dark:border-gray-700 dark:bg-gray-800 focus:outline-none"
              value={searchText}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setSearchText(e.target.value)
              }
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
            >
              <Search className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* 关闭按钮 */}
        <button
          onClick={handleClose}
          className="rounded-full p-1 mt-2 bg-gray-100 dark:hover:bg-gray-800"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default SearchDialog;
