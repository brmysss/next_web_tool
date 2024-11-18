"use client";

import { CircleChevronRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from "./ui/tooltip";
import { useState } from "react";
import FallbackImage from "./FallbackImage";
const delayDuration = 100;

export default function SiteCard({
  name,
  description,
  logoSrc,
  url,
}: {
  name: string;
  description: string;
  logoSrc: string;
  url: string;
}) {
  const [isBottomTooltipOpen, setIsBottomTooltipOpen] = useState(false);
  return (
    <TooltipProvider delayDuration={delayDuration}>
      <Tooltip open={isBottomTooltipOpen} onOpenChange={setIsBottomTooltipOpen}>
        <TooltipTrigger asChild>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full no-underline"
          >
            <div className="group w-full h-full flex bg-white dark:bg-[#2c2e2f] rounded-lg shadow-md p-4 justify-between items-center transition-transform duration-200 hover:-translate-y-1">
              <div className="flex items-center flex-1 min-w-0">
                <FallbackImage
                  src={logoSrc}
                  alt={name}
                  className="h-10 w-10 mr-2"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <p className="font-bold text-sm group-hover:text-red-500 dark:group-hover:text-white dark:text-white/80 transition-colors duration-200 overflow-hidden text-ellipsis whitespace-nowrap">
                    {name}
                  </p>
                  <p className="text-[10.5px] font-normal text-gray-500 overflow-hidden text-ellipsis whitespace-nowrap block">
                    {description}
                  </p>
                </div>
              </div>
              <TooltipProvider delayDuration={delayDuration}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <CircleChevronRight
                      className="w-4 h-4 text-gray-200 dark:text-gray-500 transition-colors duration-200 group-hover:text-gray-400 dark:group-hover:text-gray-300"
                      onMouseLeave={() => setIsBottomTooltipOpen(true)}
                    />
                  </TooltipTrigger>
                  <TooltipContent side="right">
                    <TooltipArrow />
                    <p>直达</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </a>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="max-w-[200px]">
          <TooltipArrow />
          <p className="whitespace-normal break-words">{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
