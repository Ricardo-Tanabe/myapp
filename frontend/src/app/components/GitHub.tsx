import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function GitHub() {
  const githubExample = `// Clone a repository from GitHub
git clone https://github.com/user/repo.git

// Create a new repository on GitHub
echo "# New Repository" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/user/repo.git
git push -u origin main`;

  return (
    <div className="homepage-container">
      <div className="flex-norm-col w-96">
        <p className="homepage-title">GitHub</p>
        <p className="homepage-description">The platform for hosting and collaborating on code</p>
        <button className="bg-purple-600 text-white hover:bg-purple-700 homepage-button">Learn GitHub</button>
        <button className="bg-white text-gray-900 hover:bg-gray-200 homepage-button">GitHub Reference</button>
        <button className="bg-yellow-200 text-gray-900 hover:bg-yellow-300 homepage-button">Get Certified</button>
      </div>
      <div className="homepage-code-container">
        <p className="text-gray-800 font-bold max-xs-2.1:text-sm">GitHub Example</p>
        {/* @ts-ignore */}
        <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
          {githubExample}
        </SyntaxHighlighter>
        <button className="homepage-code-button">Try it Yourself</button>
      </div>
    </div>
  );
}