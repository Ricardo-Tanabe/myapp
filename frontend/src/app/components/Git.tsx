import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function Git() {
  const gitExample = `// Clone a repository
git clone https://github.com/user/repo.git

// Create a new branch
git checkout -b new-branch

// Commit changes
git commit -m "Commit message"

// Push changes to remote
git push origin new-branch`;

  return (
    <div className="homepage-container">
      <div className="flex-norm-col w-96">
        <p className="homepage-title">Git</p>
        <p className="homepage-description">The version control system for tracking changes in source code</p>
        <button className="bg-blue-600 text-white hover:bg-blue-700 homepage-button">Learn Git</button>
        <button className="bg-white text-gray-900 hover:bg-gray-200 homepage-button">Git Reference</button>
        <button className="bg-yellow-200 text-gray-900 hover:bg-yellow-300 homepage-button">Get Certified</button>
      </div>
      <div className="homepage-code-container">
        <p className="text-gray-800 font-bold max-xs-2.1:text-sm">Git Example</p>
        {/* @ts-ignore */}
        <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
          {gitExample}
        </SyntaxHighlighter>
        <button className="homepage-code-button">Try it Yourself</button>
      </div>
    </div>
  );
}