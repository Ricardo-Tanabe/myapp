import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function RestfulApis() {
  const restfulExample = `// Example of a RESTful API endpoint using Express.js
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'John Doe' }, { id: 2, name: 'Jane Doe' }]);
});

app.post('/api/users', (req, res) => {
  const newUser = req.body;
  // Save newUser to database (not implemented)
  res.status(201).json(newUser);
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});`;

  return (
    <div className="homepage-container">
      <div className="flex-norm-col w-96">
        <p className="homepage-title text-5xl">RESTful APIs</p>
        <p className="homepage-description">The architectural style for designing networked applications</p>
        <button className="bg-blue-600 text-white hover:bg-blue-700 homepage-button">Learn RESTful APIs</button>
        <button className="bg-white text-gray-900 hover:bg-gray-200 homepage-button">RESTful APIs Reference</button>
        <button className="bg-yellow-200 text-gray-900 hover:bg-yellow-300 homepage-button">Get Certified</button>
      </div>
      <div className="homepage-code-container">
        <p className="text-gray-800 font-bold max-xs-2.1:text-sm">RESTful APIs Example</p>
        {/* @ts-ignore */}
        <SyntaxHighlighter language="javascript" style={oneDark} className="rounded-lg">
          {restfulExample}
        </SyntaxHighlighter>
        <button className="homepage-code-button">Try it Yourself</button>
      </div>
    </div>
  );
}