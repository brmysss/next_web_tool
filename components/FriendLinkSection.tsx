import { BookmarkMinus, TagIcon } from "lucide-react";

const FriendLinkSection = () => {
  return (
    <div className="px-4 py-4">
      <h4 className="text-lg font-medium mb-4 flex items-center">
        <BookmarkMinus className="w-4 h-4 mr-2 -rotate-90" />
        友情链接
      </h4>

      <div className="flex items-center gap-4 bg-white rounded-lg p-4">
        <a
          href="https://csdn.net"
          title="程序员社区"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs before:content-['•'] before:mr-1 hover:text-red-500"
        >
          CSDN
        </a>
        <a
          href="https://gitapp.cn/"
          title="程序设计网"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs before:content-['•'] before:mr-1 hover:text-red-500"
        >
          程序设计网
        </a>
        <a
          href="https://juejin.im/"
          title="掘金社区"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs before:content-['•'] before:mr-1 hover:text-red-500"
        >
          掘金社区
        </a>
        <a
          href="https://aliyun.com"
          title="阿里云社区"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs before:content-['•'] before:mr-1 hover:text-red-500"
        >
          阿里云社区
        </a>
      </div>
    </div>
  );
};

export default FriendLinkSection;
