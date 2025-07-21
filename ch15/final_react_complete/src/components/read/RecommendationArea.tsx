import { useParams } from "react-router";
import { useAxios } from "../../hooks/useAxios";
import RecommendationItem from "./RecommendationItem";

export default function RecommendationArea() {
  const params = useParams();
  const { data, isLoading, error } = useAxios<Post[]>(
    `/posts/${params.id}/related`,
    []
  );
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  if (data.length === 0) return null;

  return (
    <>
      <article className="page__recommend">
        <h3 className="page__recommend-title">Recommend Reading</h3>
        <ul className="page__recommend-lists">
          {/* RecommendationItem  */}
          {data &&
            data.map((post) => <RecommendationItem key={post.id} {...post} />)}
        </ul>
      </article>
    </>
  );
}
