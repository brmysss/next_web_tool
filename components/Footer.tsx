const Footer = () => {
  return (
    <div className="text-center py-4 text-xs">
      <p>
        本站内容源自互联网，如有内容侵犯了你的权益，请联系删除相关内容，联系邮箱：kefu308@gmail.com
      </p>
      <p>
        © 2021 - {new Date().getFullYear()} By{" "}
        <a
          href="https://webtool.fun"
          title="Web_tool"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-red-500"
        >
          Web_tool
        </a>{" "}
        |{" "}
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-red-500"
        >
          京ICP备2023018588号
        </a>
      </p>
    </div>
  );
};

export default Footer;
