import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export function SearchBar() {
    return (
      <div className="homepage-main-container">
        <p className="homepage-main-title">Full Stack Development Space</p>
        <p className="homepage-main-description">
          Explore this platform developed to acquire knowledge about Full Stack Development.
        </p>
        <div className="homepage-main-search">
          <input type="text"
            className={`w-full pl-2 bg-transparent outline-none custom-cursor`}
            placeholder={`Search our tutorials, e.g. HTML`} />
          <div className="flex justify-center bg-green-500 w-16 h-full p-3">
            <FaSearch size={20} />
          </div>
        </div>
        <div className="homepage-main-help">
          <Link href={"/#"} className="">
            Not Sure Where To Begin?
          </Link>
        </div>
      </div>
    );
  }
  