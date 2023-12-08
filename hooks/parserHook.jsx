import { useState, useEffect } from "react";
import { remark } from "remark";
import html from "remark-html";
const parserHook = (rawContent) => {
  const [content, setContent] = useState();

  const parseMarkdown = async (data) => {
    // Use remark to convert markdown into HTML string
    const processedContent = await remark().use(html).process(data);
    const contentHtml = processedContent.toString();
    setContent(contentHtml);
  };

  useEffect(() => {
    parseMarkdown(rawContent);
    return () => {
      setContent(null);
    };
  }, []);

  return content;
};

export default parserHook;
