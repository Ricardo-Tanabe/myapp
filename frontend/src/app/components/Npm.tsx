import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function Npm() {
  const npmExample = `// Install a package
npm install express

// Uninstall a package
npm uninstall express

// Update a package
npm update express`;

  return (
    <div className="homepage-container">
      <div className="flex-norm-col w-96">
        <p className="homepage-title">npm</p>
        <p className="homepage-description">The package manager for JavaScript</p>
        <button className="bg-indigo-600 text-white hover:bg-indigo-700 homepage-button">Learn npm</button>
        <button className="bg-white text-gray-900 hover:bg-gray-200 homepage-button">npm Reference</button>
        <button className="bg-teal-200 text-gray-900 hover:bg-teal-300 homepage-button">Get Certified</button>
      </div>
      <div className="homepage-code-container">
        <p className="text-gray-800 font-bold max-xs-2.1:text-sm">npm Example</p>
        {/* @ts-ignore */}
        <SyntaxHighlighter language="javascript" style={oneDark} className="rounded-lg">
          {npmExample}
        </SyntaxHighlighter>
        <button className="homepage-code-button">Try it Yourself</button>
      </div>
    </div>
  );
}