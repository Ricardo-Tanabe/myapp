import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function JavaScript() {
  const jsExample = ` <button onclick="myFunction">Click Me!</button>
  
  <script>
  function myFunction() {
    let x = document.getElementById("demo");
    x.style.fontSize = "25px";
    x.style.color = "red";
  }
  </script>`;

  return (
    <div className={`homepage-container`}>
      <div className="flex-norm-col w-96">
        <p className="homepage-title">JavaScript</p>
        <p className="homepage-description">The language for programming web pages</p>
        <button className={`bg-green-600 text-slate-50 hover:bg-green-700
          homepage-button`}>Learn JavaScript</button>
        <button className={`bg-white text-gray-900 hover:bg-gray-200
          homepage-button`}>JavaScript Reference</button>
        <button className={`bg-pink-200 text-gray-900 hover:bg-pink-300
          homepage-button`}>Get Certified</button>
      </div>
      <div className="homepage-code-container">
        <p className="text-gray-800 font-bold max-xs-2.1:text-sm">JavaScript Example</p>
          {/* @ts-ignore */}
          <SyntaxHighlighter language="html" style={oneDark} className="rounded-lg">
            {jsExample}
          </SyntaxHighlighter>
        <button className="homepage-code-button">Try it Yourself</button>
      </div>
    </div>
  );
}
