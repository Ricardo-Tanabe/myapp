import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Css() {
  const cssExample = ` body {
    background-color: lightblue;
  }
    
  h1 {
    color: white;
    text-align: center;
  }
    
  p {
    font-family: verdana;
  }`;

  return (
    <div className={`homepage-container`}>
      <div className="flex-norm-col w-96">
        <p className="homepage-title">CSS</p>
        <p className="homepage-description">The language for styling web pages</p>
        <button className={`bg-green-600 text-slate-50 hover:bg-green-700
          homepage-button`}>Learn CSS</button>
        <button className={`bg-gray-700 text-slate-50 hover:bg-gray-900
          homepage-button`}>CSS Reference</button>
        <button className={`bg-pink-200 text-gray-900 hover:bg-pink-300
          homepage-button`}>Get Certified</button>
      </div>
      <div className="homepage-code-container">
        <p className="text-gray-800 font-bold max-xs-2.1:text-sm">CSS Example</p>
          {/* @ts-ignore */}
          <SyntaxHighlighter language="css" style={oneDark} className="rounded-lg">
            {cssExample}
          </SyntaxHighlighter>
        <button className="homepage-code-button">Try it Yourself</button>
      </div>
    </div>
  );
}
