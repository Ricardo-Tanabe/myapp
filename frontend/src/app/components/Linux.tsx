import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Linux() {
  const linuxExample = `# List files in the current directory
ls

# Change directory
cd /path/to/directory

# Display the current directory
pwd`;

  return (
    <div className={`homepage-container`}>
      <div className="flex-norm-col w-96">
        <p className="homepage-title">Linux</p>
        <p className="homepage-description">A powerful open-source operating system</p>
        <button className={`bg-blue-600 text-slate-50 hover:bg-blue-700
          homepage-button`}>Learn Linux</button>
        <button className={`bg-white text-gray-900 hover:bg-gray-200
          homepage-button`}>Linux Reference</button>
        <button className={`bg-green-200 text-gray-900 hover:bg-green-300
          homepage-button`}>Get Certified</button>
      </div>
      <div className="homepage-code-container">
        <p className="text-gray-800 font-bold max-xs-2.1:text-sm">Linux Example</p>
          {/* @ts-ignore */}
          <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
            {linuxExample}
          </SyntaxHighlighter>
        <button className="homepage-code-button">Try it Yourself</button>
      </div>
    </div>
  );
}