const Footer = () => {
  return (
    <div className="text-center py-4 text-xs px-4">
      <p>
        本站内容源自互联网，如有内容侵犯了你的权益，请联系删除相关内容，联系邮箱：zfyoung799699@gmail.com
      </p>
      <p>
        © 2021 - {new Date().getFullYear()} By{" "}
        <a
          href="https://github.com/mundane799699/next_web_tool"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-red-500"
        >
          next_web_tool
        </a>{" "}
        |{" "}
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-red-500"
        >
          浙ICP备2023005735号
        </a>
      </p>
    </div>
  );
};

export default Footer;
