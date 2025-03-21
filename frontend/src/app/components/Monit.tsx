import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export function Monit() {
  const monitExample = `# Start Monit
monit

# Check Monit status
monit status

# Restart a service
monit restart myservice`;

  return (
    <div className={`homepage-container`}>
      <div className="flex-norm-col w-96">
        <p className="homepage-title">Monit</p>
        <p className="homepage-description">A utility for managing and monitoring Unix systems</p>
        <button className={`bg-purple-600 text-slate-50 hover:bg-purple-700
          homepage-button`}>Learn Monit</button>
        <button className={`bg-white text-gray-900 hover:bg-gray-200
          homepage-button`}>Monit Reference</button>
        <button className={`bg-teal-200 text-gray-900 hover:bg-teal-300
          homepage-button`}>Get Certified</button>
      </div>
      <div className="homepage-code-container">
        <p className="text-gray-800 font-bold max-xs-2.1:text-sm">Monit Example</p>
          {/* @ts-ignore */}
          <SyntaxHighlighter language="bash" style={oneDark} className="rounded-lg">
            {monitExample}
          </SyntaxHighlighter>
        <button className="homepage-code-button">Try it Yourself</button>
      </div>
    </div>
  );
}