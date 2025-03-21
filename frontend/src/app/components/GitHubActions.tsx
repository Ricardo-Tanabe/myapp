import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function GitHubActions() {
  const githubActionsExample = `name: CI

on: [push]

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v2
    - name: Set up Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '14'
    - run: npm install
    - run: npm test`;

  return (
    <div className={`homepage-container`}>
      <div className="flex-norm-col w-96">
        <p className="homepage-title text-5xl">GitHub Actions</p>
        <p className="homepage-description">Automate your workflows directly in your GitHub repository</p>
        <button className={`bg-gray-600 text-slate-50 hover:bg-gray-700
          homepage-button`}>Learn GitHub Actions</button>
        <button className={`bg-white text-gray-900 hover:bg-gray-200
          homepage-button`}>GitHub Actions Reference</button>
        <button className={`bg-yellow-200 text-gray-900 hover:bg-yellow-300
          homepage-button`}>Get Certified</button>
      </div>
      <div className="homepage-code-container">
        <p className="text-gray-800 font-bold max-xs-2.1:text-sm">GitHub Actions Example</p>
          {/* @ts-ignore */}
          <SyntaxHighlighter language="yaml" style={oneDark} className="rounded-lg">
            {githubActionsExample}
          </SyntaxHighlighter>
        <button className="homepage-code-button">Try it Yourself</button>
      </div>
    </div>
  );
}