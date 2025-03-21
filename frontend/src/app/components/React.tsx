import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function React() {
  const reactExample = `import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, React!</h1>
      </header>
    </div>
  );
}

export default App;`;

  return (
    <div className="homepage-container">
      <div className="flex-norm-col w-96">
        <p className="homepage-title">React</p>
        <p className="homepage-description">The JavaScript library for building user interfaces</p>
  <button className="bg-blue-600 text-white hover:bg-blue-700 homepage-button">Learn React</button>
  <button className="bg-white text-gray-900 hover:bg-gray-200 homepage-button">React Reference</button>
  <button className="bg-yellow-200 text-gray-900 hover:bg-yellow-300 homepage-button">Get Certified</button>
      </div>
      <div className="homepage-code-container">
        <p className="text-gray-800 font-bold max-xs-2.1:text-sm">React Example</p>
        {/* @ts-ignore */}
        <SyntaxHighlighter language="javascript" style={oneDark} className="rounded-lg">
          {reactExample}
        </SyntaxHighlighter>
        <button className="homepage-code-button">Try it Yourself</button>
      </div>
    </div>
  );
}