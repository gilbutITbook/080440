import SearchArea from "../components/home/SearchArea";
import PostArea from "../components/home/PostArea";
export default function Home() {
  return (
    <main className="page__main">
      {/* Search  */}
      <SearchArea />
      {/* PostArea  */}
      <PostArea />
    </main>
  );
}
