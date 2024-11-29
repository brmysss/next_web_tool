import {
  FileUp,
  Film,
  FlaskConical,
  FolderOpen,
  Info,
  Link,
  Pencil,
  Star,
  Wrench,
} from "lucide-react";

export const topMenuList = [
  {
    id: 1,
    title: "常用工具",
    icon: <Star className="w-4 h-4" />,
    href: "#changyonggongju",
    isOpen: false,
  },
  {
    id: 2,
    title: "科研办公",
    icon: <FlaskConical className="w-4 h-4" />,
    isOpen: false,
    subMenu: [
      {
        title: "生物信息",
        href: "#shengwuxinxi",
      },
      {
        title: "云服务器",
        href: "#yunfuwuqi",
      },
      {
        title: "办公学习",
        href: "#bangongxuexi",
      },
    ],
  },
  {
    id: 3,
    title: "休闲娱乐",
    icon: <Film className="w-4 h-4" />,
    isOpen: false,
    subMenu: [
      {
        title: "影音视频",
        href: "#yingyinshipin",
      },
      {
        title: "游戏竞技",
        href: "#youxijingji",
      },
    ],
  },
  {
    id: 4,
    title: "素材资源",
    icon: <FolderOpen className="w-4 h-4" />,
    isOpen: false,
    subMenu: [
      {
        title: "网盘资源",
        href: "#wangpanziyuan",
      },
      {
        title: "图标素材",
        href: "#tubiaosucai",
      },
      {
        title: "图标设计",
        href: "#tubiaosheji",
      },
      {
        title: "平面素材",
        href: "#pingmiansucai",
      },
      {
        title: "字体资源",
        href: "#zitiziyuan",
      },
      {
        title: "PPT资源",
        href: "#pptziyuan",
      },
    ],
  },
  {
    id: 5,
    title: "开发设计",
    icon: <Wrench className="w-4 h-4" />,
    isOpen: false,
    subMenu: [
      {
        title: "图形创意",
        href: "#tuxingchuangyi",
      },
      {
        title: "界面设计",
        href: "#jiemiansheji",
      },
      {
        title: "在线配色",
        href: "#zaixianpeise",
      },
      {
        title: "在线工具",
        href: "#zaixiantools",
      },
      {
        title: "谷歌插件",
        href: "#googleplugin",
      },
    ],
  },
  {
    id: 6,
    title: "资讯学习",
    icon: <Pencil className="w-4 h-4" />,
    isOpen: false,
    subMenu: [
      {
        title: "资讯书籍",
        href: "#zixunshuji",
      },
      {
        title: "博客论坛",
        href: "#blogbbs",
      },
      {
        title: "设计规范",
        href: "#shejiguifan",
      },
      {
        title: "视频教程",
        href: "#shipinjiaocheng",
      },
    ],
  },
];

export const bottomMenuList = [
  {
    id: 1,
    title: "网站提交",
    icon: <FileUp className="w-4 h-4" />,
    href: "/submit",
    target: "_blank",
  },
  {
    id: 2,
    title: "友情链接",
    icon: <Link className="w-4 h-4" />,
    href: "#friendlink",
  },
  {
    id: 3,
    title: "关于导航",
    icon: <Info className="w-4 h-4" />,
    href: "/about",
    target: "_blank",
  },
];
