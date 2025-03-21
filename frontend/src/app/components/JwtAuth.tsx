import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function JwtAuth() {
  const jwtExample = `const jwt = require('jsonwebtoken');

// Generate a token
const token = jwt.sign({ userId: 123 }, 'your-secret-key', { expiresIn: '1h' });

// Verify a token
jwt.verify(token, 'your-secret-key', (err, decoded) => {
  if (err) {
    console.log('Token is invalid');
  } else {
    console.log('Token is valid', decoded);
  }
});`;

  return (
    <div className="homepage-container">
      <div className="flex-norm-col w-96">
        <p className="homepage-title">JWT Auth</p>
        <p className="homepage-description">The method for securely transmitting information between parties</p>
        <button className="bg-indigo-600 text-white hover:bg-indigo-700 homepage-button">Learn JWT Auth</button>
        <button className="bg-white text-gray-900 hover:bg-gray-200 homepage-button">JWT Auth Reference</button>
        <button className="bg-teal-200 text-gray-900 hover:bg-teal-300 homepage-button">Get Certified</button>
      </div>
      <div className="homepage-code-container">
        <p className="text-gray-800 font-bold max-xs-2.1:text-sm">JWT Auth Example</p>
        {/* @ts-ignore */}
        <SyntaxHighlighter language="javascript" style={oneDark} className="rounded-lg">
          {jwtExample}
        </SyntaxHighlighter>
        <button className="homepage-code-button">Try it Yourself</button>
      </div>
    </div>
  );
}