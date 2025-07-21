import { useEffect, useRef, useState } from "react";
import { search } from "../../assets/images/images";
import { useNavigate, useSearchParams } from "react-router";

export default function SearchArea() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(() => searchParams.get("q") || "");
  const debounceTimer = useRef<null | number>(null);
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current); // 이전 타이머 취소
    }
    debounceTimer.current = setTimeout(() => {
      // 디바운스: 입력 300ms 후에 검색 수행
      navigate(query ? "?q=" + query : "/");
    }, 300);
    return () => {
      // 클린업: 컴포넌트 언마운트 시 타이머 취소
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [navigate, query]); // query가 변경될 때마다 실행

  return (
    <>
      <section className="search-area">
        <article className="search-area__search">
          <h2 className="search-area__title">The Sucoding Blog</h2>
          <p className="search-area__description">
            A Blog About Food, Experience, and Recipes.
          </p>
          <form
            className="search-area__form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              name="q"
              placeholder="Search"
              className="search-area__input"
              autoComplete="off"
              value={query}
              onChange={handleChange}
            />
            <button type="submit" className="search-area__submit">
              <img
                src={search}
                alt="search-icon"
                className="search-area__icon"
              />
            </button>
          </form>
        </article>
      </section>
    </>
  );
}
