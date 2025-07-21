import { useNavigate, useParams } from "react-router";
import { useAuthStore } from "../../stores/useAuthStore";
import { useAxios } from "../../hooks/useAxios";
import { axiosInstance } from "../../api/axiosInstance";
import axios from "axios";
import { format } from "date-fns";

export default function ReadArea() {
  const params = useParams();
  const navigate = useNavigate();
  const user = useAuthStore((store) => store.user);
  const {
    data: { category, title, username, thumbnail, desc, author, regdate },
    isLoading,
    error,
  } = useAxios<Post>(`/posts/${params.id}`, {} as Post);
  const handleDelete = async () => {
    try {
      const { status } = await axiosInstance.delete(`/posts/${params.id}`);
      if (status === 204) {
        alert("삭제되었습니다.");
        navigate("/");
      } else {
        throw new Error("삭제에 실패했습니다.");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const msg = error.response?.data?.message ?? error.message;
        alert(msg);
      } else if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("알 수 없는 이유로 실패했습니다.");
      }
    }
  };
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <>
      <article className="page__read">
        <section>
          <strong className="page__read-tag">{category}</strong>
          <h2 className="page__read-title">{title}</h2>
          <div className="page__read-meta-group">
            <p className="page__read-profile">
              {username} • {format(regdate, "MMM dd, yyyy")}
            </p>
            {user?.email === author && (
              <button className="page__read-btn" onClick={handleDelete}>
                삭제
              </button>
            )}
          </div>
          <img src={thumbnail} alt={title} className="page__read-image" />
        </section>
        <section className="page__read-desc">
          <pre>{desc}</pre>
        </section>
      </article>
    </>
  );
}
