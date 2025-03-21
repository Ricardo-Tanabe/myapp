import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function PostgreSql() {
  const postgresqlExample = `-- Create a new database
CREATE DATABASE mydatabase;

-- Create a new table
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE NOT NULL
);

-- Insert data into the table
INSERT INTO users (name, email) VALUES ('John Doe', 'john.doe@example.com');

-- Query data from the table
SELECT * FROM users;`;

  return (
    <div className="homepage-container">
      <div className="flex-norm-col w-96">
        <p className="homepage-title text-5xl">PostgreSQL</p>
        <p className="homepage-description">The powerful, open-source object-relational database system</p>
        <button className="bg-purple-600 text-white hover:bg-purple-700 homepage-button">Learn PostgreSQL</button>
        <button className="bg-white text-gray-900 hover:bg-gray-200 homepage-button">PostgreSQL Reference</button>
        <button className="bg-yellow-200 text-gray-900 hover:bg-yellow-300 homepage-button">Get Certified</button>
      </div>
      <div className="homepage-code-container">
        <p className="text-gray-800 font-bold max-xs-2.1:text-sm">PostgreSQL Example</p>
        {/* @ts-ignore */}
        <SyntaxHighlighter language="sql" style={oneDark} className="rounded-lg">
          {postgresqlExample}
        </SyntaxHighlighter>
        <button className="homepage-code-button">Try it Yourself</button>
      </div>
    </div>
  );
}