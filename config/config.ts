import siteData1 from "./sites/siteData_1.json";
import siteData2 from "./sites/siteData_2.json";
import siteData3 from "./sites/siteData_3.json";
import siteData4 from "./sites/siteData_4.json";
import siteData5 from "./sites/siteData_5.json";
import siteData6 from "./sites/siteData_6.json";
import siteData7 from "./sites/siteData_7.json";
import siteData8 from "./sites/siteData_8.json";
import siteData9 from "./sites/siteData_9.json";
import siteData10 from "./sites/siteData_10.json";
import siteData11 from "./sites/siteData_11.json";
import siteData12 from "./sites/siteData_12.json";
import siteData13 from "./sites/siteData_13.json";
import siteData14 from "./sites/siteData_14.json";
import siteData15 from "./sites/siteData_15.json";
import siteData16 from "./sites/siteData_16.json";
import siteData17 from "./sites/siteData_17.json";
import siteData18 from "./sites/siteData_18.json";
import siteData19 from "./sites/siteData_19.json";
import siteData20 from "./sites/siteData_20.json";
import siteData21 from "./sites/siteData_21.json";
import { SearchType } from "@/types/SearchType";

export const siteConfig = [
  siteData1,
  siteData2,
  siteData3,
  siteData4,
  siteData5,
  siteData6,
  siteData7,
  siteData8,
  siteData9,
  siteData10,
  siteData11,
  siteData12,
  siteData13,
  siteData14,
  siteData15,
  siteData16,
  siteData17,
  siteData18,
  siteData19,
  siteData20,
  siteData21,
];

export const searchConfig: SearchType[] = [
  {
    id: 1,
    label: "常用",
    isSelected: true,
    engines: [
      {
        name: "百度",
        placeholder: "百度一下，你就知道",
        action: "https://www.baidu.com/s?wd=",
      },
      {
        name: "必应",
        placeholder: "微软 Bing 搜索",
        action: "https://cn.bing.com/search?q=",
      },
      {
        name: "谷歌",
        placeholder: "谷歌搜索",
        action: "https://www.google.com/search?q=",
      },
      {
        name: "软件",
        placeholder: "Anaconda 软件搜索",
        action: "https://anaconda.org/search?q=",
      },
      {
        name: "文献",
        placeholder: "PubMed 搜索/文章标题/关键字",
        action: "https://pubmed.ncbi.nlm.nih.gov/?term=",
      },
    ],
  },
  {
    id: 2,
    label: "搜索",
    isSelected: false,
    engines: [
      {
        name: "百度",
        placeholder: "百度一下，你就知道",
        action: "https://www.baidu.com/s?wd=",
      },
      {
        name: "谷歌",
        placeholder: "谷歌搜索",
        action: "https://www.google.com/search?q=",
      },
      {
        name: "360",
        placeholder: "360 好搜",
        action: "https://www.so.com/s?q=",
      },
      {
        name: "搜狗",
        placeholder: "搜狗搜索",
        action: "https://www.sogou.com/web?query=",
      },
      {
        name: "必应",
        placeholder: "微软 Bing 搜索",
        action: "https://cn.bing.com/search?q=",
      },
      {
        name: "神马",
        placeholder: "UC 移动端搜索",
        action: "https://yz.m.sm.cn/s?q=",
      },
    ],
  },
  {
    id: 3,
    label: "工具",
    isSelected: false,
    engines: [
      {
        name: "权重查询",
        placeholder: "请输入网址(不带 https://)",
        action: "https://rank.chinaz.com/all/",
      },
      {
        name: "友链检测",
        placeholder: "请输入网址(不带 https://)",
        action: "https://link.chinaz.com/",
      },
      {
        name: "域名信息查询",
        placeholder: "请输入网址(不带 https://)",
        action: "https://who.is/whois/",
      },
      {
        name: "PING检测",
        placeholder: "请输入网址(不带 https://)",
        action: "https://ping.chinaz.com/",
      },
      {
        name: "死链检测",
        placeholder: "请输入网址(不带https://)",
        action: "https://tool.chinaz.com/Links/?DAddress=",
      },
      {
        name: "关键词挖掘",
        placeholder: "请输入关键词",
        action: "https://www.ciku5.com/s?wd=",
      },
    ],
  },
  {
    id: 4,
    label: "社区",
    isSelected: false,
    engines: [
      {
        name: "知乎",
        placeholder: "知乎",
        action: "https://www.zhihu.com/search?type=content&q=",
      },
      {
        name: "微信",
        placeholder: "微信",
        action: "https://weixin.sogou.com/weixin?type=2&query=",
      },
      {
        name: "微博",
        placeholder: "微博",
        action: "https://s.weibo.com/weibo/",
      },
      {
        name: "豆瓣",
        placeholder: "豆瓣",
        action: "https://www.douban.com/search?q=",
      },
    ],
  },
  {
    id: 5,
    label: "生活",
    isSelected: false,
    engines: [
      {
        name: "淘宝",
        placeholder: "淘宝",
        action: "https://s.taobao.com/search?q=",
      },
      {
        name: "京东",
        placeholder: "京东",
        action: "https://search.jd.com/Search?keyword=",
      },
      {
        name: "下厨房",
        placeholder: "下厨房",
        action: "https://www.xiachufang.com/search/?keyword=",
      },
      {
        name: "香哈菜谱",
        placeholder: "香哈菜谱",
        action: "https://www.xiangha.com/so/?q=caipu&s=",
      },
      { name: "12306", placeholder: "12306", action: "https://www.12306.cn/?" },
      {
        name: "去哪儿",
        placeholder: "去哪儿",
        action: "https://www.qunar.com/?",
      },
    ],
  },
  {
    id: 6,
    label: "求职",
    isSelected: false,
    engines: [
      {
        name: "智联招聘",
        placeholder: "智联招聘",
        action: "https://sou.zhaopin.com/jobs/searchresult.ashx?kw=",
      },
      {
        name: "前程无忧",
        placeholder: "前程无忧",
        action: "https://we.51job.com/pc/search?keyword=",
      },
      {
        name: "拉勾网",
        placeholder: "拉勾网",
        action: "https://www.lagou.com/jobs/list_",
      },
      {
        name: "猎聘网",
        placeholder: "猎聘网",
        action: "https://www.liepin.com/zhaopin/?key=",
      },
    ],
  },
];
