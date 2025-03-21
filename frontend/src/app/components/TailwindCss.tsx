import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function TailwindCss() {
  const tailwindExample = `<div class="bg-blue-500 text-white p-4 rounded-lg">
  <h1 class="text-2xl font-bold">Hello, Tailwind CSS!</h1>
  <p class="mt-2">This is a simple example of using Tailwind CSS.</p>
</div>`;

  return (
    <div className="homepage-container">
      <div className="flex-norm-col w-96">
        <p className="homepage-title text-5xl">Tailwind CSS</p>
        <p className="homepage-description">The utility-first CSS framework for rapid UI development</p>
        <button className="bg-indigo-600 text-white hover:bg-indigo-700 homepage-button">Learn Tailwind CSS</button>
        <button className="bg-white text-gray-900 hover:bg-gray-200 homepage-button">Tailwind CSS Reference</button>
        <button className="bg-teal-200 text-gray-900 hover:bg-teal-300 homepage-button">Get Certified</button>
      </div>
      <div className="homepage-code-container">
        <p className="text-gray-800 font-bold max-xs-2.1:text-sm">Tailwind CSS Example</p>
        {/* @ts-ignore */}
        <SyntaxHighlighter language="html" style={oneDark} className="rounded-lg">
          {tailwindExample}
        </SyntaxHighlighter>
        <button className="homepage-code-button">Try it Yourself</button>
      </div>
    </div>
  );
}