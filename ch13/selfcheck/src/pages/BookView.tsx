import { NavLink } from "react-router";

export default function BookView() {
  const books = [
    {
      id: 1,
      title: "코딩 자율학습 HTML+CSS+자바스크립트",
      author: "김기수",
      year: 2022,
      description:
        "코딩 입문자들도 쉽게 배울 수 있는 HTML+CSS+자바스크립트 입문서",
    },
    {
      id: 2,
      title: "코딩 자율학습 나도코딩의 파이썬 입문",
      author: "나도코딩",
      year: 2023,
      description:
        "일상 속 재미있는 예제로 파이썬 기본 개념을 배울 수 있는 입문서",
    },
    {
      id: 3,
      title: "코딩 자율학습 스프링 부트 3 자바 백엔드 개발 입문",
      author: "홍팍",
      year: 2023,
      description:
        "스프링 부트로 백엔드 개발 과정과 핵심 개념을 배울 수 있는 입문서",
    },
    {
      id: 4,
      title: "코딩 자율학습 나도코딩의 C 언어 입문",
      author: "나도코딩",
      year: 2022,
      description: "C 언어를 완공할 수 있게 돕는 프로그래밍 자습서",
    },
    {
      id: 5,
      title: "코딩 자율학습 제로초의 자바스크립트 입문",
      author: "조현영",
      year: 2024,
      description:
        "12가지 프로그램을 만들면서 개념과 문법을 익히는 자바스크립트 자습서",
    },
    {
      id: 6,
      title: "코딩 자율학습 Vue.js 프런트엔드 개발 입문",
      author: "김기수",
      year: 2024,
      description:
        "기초부터 실무 프로젝트까지 만들면서 배우는 프런트엔드 개발 자습서",
    },
    {
      id: 7,
      title: "코딩 자율학습 리눅스 입문 with 우분투",
      author: "런잇",
      year: 2024,
      description: "입문자를 위한 가장 쉬운 리눅스 입문서",
    },
    {
      id: 8,
      title: "코딩 자율학습 자바 입문",
      author: "최원효",
      year: 2024,
      description: "입문자의 눈높이에 맞춰 문법과 개념을 설명하는 자바 입문서",
    },
    {
      id: 9,
      title: "코딩 자율학습 SQL 데이터베이스 입문",
      author: "홍팍",
      year: 2025,
      description: "기초부터 활용까지 입문자를 위한 SQL 자습서",
    },
    {
      id: 10,
      title: "코딩 자율학습 잔재미코딩의 파이썬 데이터 분석 입문",
      author: "Dave Lee",
      year: 2025,
      description:
        "Pandas, Plotly 사용부터 생성형 AI 활용법까지 한 권으로 배우는 데이터 분석 입문",
    },
    {
      id: 11,
      title: "코딩 자율학습 컴퓨터 구조와 운영체제",
      author: "기술노트알렉",
      year: 2025,
      description: "이해하기 쉽게 체계적으로 정리한 CS 자습서",
    },
  ];

  return (
    <>
      <h1>Books List</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>
                <NavLink to={`/book/${book.id}`}>{book.title}</NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
