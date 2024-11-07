import { CircleChevronRight, TagIcon } from "lucide-react";
import SiteCard from "./SiteCard";

interface SiteSectionProps {
  title: string;
  sites: {
    name: string;
    description: string;
    logoSrc: string;
    url: string;
  }[];
}

export default function SiteSection({ title, sites }: SiteSectionProps) {
  return (
    <div className="site-list px-4 py-4">
      {/* 分类标题 */}
      <h4 className="text-lg font-medium mb-4 flex items-center">
        <TagIcon className="w-4 h-4 mr-2" />
        {title}
      </h4>

      {/* 网站卡片网格 */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        {/* 网站卡片... */}
        {sites.map((site, index) => (
          <SiteCard
            key={index}
            name={site.name}
            description={site.description}
            logoSrc={site.logoSrc}
            url={site.url}
          />
        ))}
      </div>
    </div>
  );
}
