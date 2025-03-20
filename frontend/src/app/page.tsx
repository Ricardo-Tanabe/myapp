import { SearchBar } from "./components/SearchBar";
import { Html } from "./components/Html";

export default function Home() {
  return (
    <>
      <main className={`flex justify-center w-full bg-slate-100`}>
        <div className={`homepage-main`}>
          <SearchBar />
          <Html />
        </div>
      </main>
    </>
  );
}