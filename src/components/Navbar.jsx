import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/search/${search}`);
      setSearch("");
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        📰 NewsHub
      </Link>

      <div className="flex gap-3 flex-wrap justify-center">
        <Link to="/category/technology" className="hover:underline">Technology</Link>
        <Link to="/category/sports" className="hover:underline">Sports</Link>
        <Link to="/category/business" className="hover:underline">Business</Link>
        <Link to="/category/health" className="hover:underline">Health</Link>
      </div>

      <form onSubmit={handleSearch} className="flex items-center gap-2">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search news..."
          className="px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-700"
        />
        <button
          type="submit"
          className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>
    </nav>
  );
}
