import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Html() {
  const htmlExample = `<!DOCTYPE html>
<html>
  <head>
    <title>HTML Tutorial</title>
  </head>
  <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

  </body>
</html>`;
  return (
    <div className={`homepage-container`}>
      <div className="flex-norm-col w-96">
        <p className="homepage-title">HTML</p>
        <p className="homepage-description">The language for building web pages</p>
        <button className={`bg-green-600 text-slate-50 hover:bg-green-700
          homepage-button`}>Learn HTML</button>
        <button className={`bg-yellow-400 text-gray-900 hover:bg-yellow-500
          homepage-button`}>Video Tutorial</button>
        <button className={`bg-gray-700 text-slate-50 hover:bg-gray-900
          homepage-button`}>HTML Reference</button>
        <button className={`bg-pink-200 text-gray-900 hover:bg-pink-300
          homepage-button`}>Get Certified</button>
      </div>
      <div className="homepage-code-container">
        <p className="text-gray-800 overflow-x-auto font-bold max-xs-2.1:text-sm">HTML Example</p>
          {/* @ts-ignore */}
          <SyntaxHighlighter language="html" style={oneDark} className="rounded-lg">
            {htmlExample}
          </SyntaxHighlighter>
        <button className="homepage-code-button">Try it Yourself</button>
      </div>
    </div>
  );
}
