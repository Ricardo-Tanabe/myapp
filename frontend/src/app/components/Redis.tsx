import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Redis() {
  const redisExample = `SET mykey "Hello"
GET mykey
DEL mykey`;

  return (
    <div className={`homepage-container`}>
      <div className="flex-norm-col w-96">
        <p className="homepage-title">Redis</p>
        <p className="homepage-description">A powerful in-memory data structure store</p>
        <button className={`bg-red-600 text-slate-50 hover:bg-red-700
          homepage-button`}>Learn Redis</button>
        <button className={`bg-white text-gray-900 hover:bg-gray-200
          homepage-button`}>Redis Reference</button>
        <button className={`bg-blue-200 text-gray-900 hover:bg-blue-300
          homepage-button`}>Get Certified</button>
      </div>
      <div className="homepage-code-container">
        <p className="text-gray-800 font-bold max-xs-2.1:text-sm">Redis Example</p>
          {/* @ts-ignore */}
          <SyntaxHighlighter language="redis" style={oneDark} className="rounded-lg">
            {redisExample}
          </SyntaxHighlighter>
        <button className="homepage-code-button">Try it Yourself</button>
      </div>
    </div>
  );
}