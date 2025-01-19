import React from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

interface HighlightedcodeProps {
  language: string;
  theme: { [key: string]: React.CSSProperties };
  fontSize: number;
  code: string;
}

function Highlightedcode({
  language,
  theme,
  fontSize,
  code,
}: HighlightedcodeProps) {
  return (
    <SyntaxHighlighter
      language={language}
      style={theme}
      customStyle={{
        fontSize: `${fontSize}px`,
        borderRadius: "6px",
        padding: "40px 5px 34px 12px",
        boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2), 0 8px 24px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
      }}
      wrapLongLines={true}
      showLineNumbers={true}
    >
      {code || `function sayHello(name: string): string {
  return \`Hello, \${name}!\`;
}

const greeting = sayHello("World");
console.log(greeting);
`}
    </SyntaxHighlighter>
  );
}

export default Highlightedcode;
