import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function Nodejs() {
  const nodejsExample = `const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, Node.js!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`;

  return (
    <div className="homepage-container">
      <div className="flex-norm-col w-96">
        <p className="homepage-title">Node.js</p>
        <p className="homepage-description">The JavaScript runtime built on Chrome's V8 engine</p>
        <button className="bg-teal-600 text-white hover:bg-teal-700 homepage-button">Learn Node.js</button>
        <button className="bg-white text-gray-900 hover:bg-gray-200 homepage-button">Node.js Reference</button>
        <button className="bg-orange-200 text-gray-900 hover:bg-orange-300 homepage-button">Get Certified</button>
      </div>
      <div className="homepage-code-container">
        <p className="text-gray-800 font-bold max-xs-2.1:text-sm">Node.js Example</p>
        {/* @ts-ignore */}
        <SyntaxHighlighter language="javascript" style={oneDark} className="rounded-lg">
          {nodejsExample}
        </SyntaxHighlighter>
        <button className="homepage-code-button">Try it Yourself</button>
      </div>
    </div>
  );
}