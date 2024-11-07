import { CircleChevronRight } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  TooltipArrow,
} from "./ui/tooltip";

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
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-full no-underline"
          >
            <div className="group w-full h-full flex bg-white rounded-lg shadow-md p-4 justify-between items-center transition-transform duration-200 hover:-translate-y-1">
              <div className="flex items-center">
                <img src={logoSrc} alt={name} className="h-10 w-10 mr-2" />
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-sm group-hover:text-red-500 transition-colors duration-200">
                    {name}
                  </p>
                  <p className="text-xs text-gray-500">{description}</p>
                </div>
              </div>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <CircleChevronRight className="w-4 h-4 text-gray-200 transition-colors duration-200 group-hover:text-gray-400" />
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
        <TooltipContent side="bottom">
          <TooltipArrow />
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
