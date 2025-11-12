import { useParams } from "react-router-dom";
import NewsList from "../components/NewsList";

export default function Category() {
  const { category } = useParams();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center capitalize">
        🗞️ {category} News
      </h2>
      <NewsList category={category} />
    </div>
  );
}
