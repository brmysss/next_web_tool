import { CircleChevronRight, TagIcon } from "lucide-react";
import SiteCard from "./SiteCard";

interface SiteSectionProps {
  title: string;
  id: string;
  sites: {
    name: string;
    description: string;
    logoSrc: string;
    url: string;
  }[];
}

export default function SiteSection({ title, id, sites }: SiteSectionProps) {
  return (
    <div className="site-list px-4 py-4">
      {/* 分类标题 */}
      <h4
        id={id}
        className="text-lg font-medium mb-4 flex items-center text-gray-500"
      >
        <TagIcon className="w-4 h-4 mr-2 rotate-135" />
        {title}
      </h4>

      {/* 网站卡片网格 */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
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
