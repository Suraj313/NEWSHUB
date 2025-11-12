import { useParams } from "react-router-dom";
import NewsList from "../components/NewsList";

export default function Search() {
  const { query } = useParams();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">
        🔍 Search Results for: <span className="text-blue-500">{query}</span>
      </h2>
      <NewsList query={query} />
    </div>
  );
}
