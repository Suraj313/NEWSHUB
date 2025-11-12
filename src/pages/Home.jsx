import NewsList from "../components/NewsList";

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">🏠 Top Headlines</h2>
      <NewsList />
    </div>
  );
}
