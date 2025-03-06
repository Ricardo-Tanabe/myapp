import { Search } from "lucide-react";

export function SearchBar() {
    return (
      <div className="flex-norm-row h-full">
        <Search size={20} className="header-icon-menu xs:hidden"/>
        <div className="flex-norm-row header-search">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent outline-none"/>
          <Search size={20} className="text-gray-500 ml-2" />
        </div>
      </div>
    );
  }
  