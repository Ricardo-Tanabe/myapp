import Link from "next/link";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="flex flex-col items-center w-full max-w-6xl pt-32">
      <p className="text-6xl font-bold text-gray-800 mb-6">Full Stack Development Space</p>
      <p className="text-shadow text-lg font-bold text-yellow-300 mb-6">
        Explore this platform developed to acquire knowledge about Full Stack Development.
      </p>
      <div className={`flex flex-row justify-between bg-white rounded-2xl mb-6
        w-[30rem] overflow-hidden`}>
        <input type="text"
          className={`w-full pl-2 bg-transparent outline-none custom-cursor`}
          placeholder={`Search our tutorials, e.g. HTML`} />
        <div className="flex justify-center bg-green-300 w-16 h-full p-3">
          <FaSearch size={20} />
        </div>
      </div>
      <div className={`text-xl text-gray-800 font-bold underline
        hover:text-yellow-300 hover:text-shadow`}>
        <Link href={"/#"} className="">
          Not Sure Where To Begin?
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const htmlExample = `<!DOCTYPE html>
<html>
  <head>
    <title>HTML Tutorial</title>
  </head>
  <body>

    <h1>This is a heading</h1>
    <p>This is a paragraph.</p>

  </body>
</html>`;

  return (
    <>
      <main className={`flex flex-col items-center space-y-48 w-full min-h-screen bg-slate-200`}>
        <SearchBar />
        <div className={`flex flex-col w-full items-center`}>
          <p className="text-6xl font-bold text-gray-800 mb-6">HTML</p>
          <p className="text-gray-800 font-bold mb-6">The language for building web pages</p>
          <button className={`bg-green-600 font-bold text-slate-50 w-56 py-2
            rounded-2xl mb-6 hover:bg-green-700`}>Learn HTML</button>
          <button className={`bg-yellow-400 font-bold text-gray-900 w-56 py-2
            rounded-2xl mb-6 hover:bg-yellow-500`}>Video Tutorial</button>
          <button className={`bg-gray-700 font-bold text-slate-50 w-56 py-2
            rounded-2xl mb-6 hover:bg-gray-900`}>HTML Reference</button>
          <button className={`bg-pink-200 font-bold text-gray-900 w-56 py-2
            rounded-2xl mb-6 hover:bg-pink-300`}>Get Certified</button>
          <div className="box-shadow rounded-sm px-4 py-8 mb-6" style={{width: "90%"}}>
            <p className="text-gray-800 font-bold">HTML Example</p>
              {/* @ts-ignore */}
              <SyntaxHighlighter language="html" style={oneDark} className="rounded-lg">
                {htmlExample}
              </SyntaxHighlighter>
            <button className={`bg-green-600 font-bold text-slate-50 w-48 py-2
              rounded-3xl my-2 hover:bg-green-700`}>Try it Yourself</button>
          </div>
        </div>
      </main>
    </>
  );
}