// 필요한 모듈 로드
const express = require("express"); // Express 웹 프레임워크를 로드
const cors = require("cors"); // CORS 미들웨어를 로드
const app = express(); // Express 애플리케이션 인스턴스 생성
const PORT = 3000; // 서버가 실행될 포트 설정

// CORS 설정: 모든 도메인에서 이 API에 접근할 수 있도록 허용
app.use(cors()); // CORS 미들웨어를 사용하여 모든 외부 요청 허용

// JSON 요청 본문을 처리하기 위한 미들웨어
app.use(express.json()); // 클라이언트가 보내는 JSON 형식의 데이터를 자동으로 파싱
// app.use((req, res, next) => {
//   setTimeout(() => {
//     next(); // 미들웨어 체인 계속 진행
//   }, 2000); // 2000ms = 2초
// });

// 할일 목록을 저장할 배열 (메모리 상에서만 저장, 서버가 종료되면 데이터가 사라짐)
let todos = [];

app.get("/users/:id", (req, res) => {
  // URL에서 전달된 id 파라미터를 추출
  const { id } = req.params;

  // 해당 id에 맞는 할일을 목록에서 필터링하여 제거
  const user = users.find((user) => user.id === parseInt(id)); // 숫자로 변환 후 비교

  res.status(200).json(user);
});

app.get("/", (req, res) => {
  res.send("Welcome to the Todo List API Service!");
});

// 할일 추가 (POST /todos)
app.post("/todos", (req, res) => {
  // 클라이언트가 보낸 데이터에서 title을 추출
  const { title } = req.body;

  // title이 없으면 400 상태 코드와 함께 오류 메시지 반환
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  // 새로운 할일 객체 생성
  const newTodo = {
    id: Date.now(), // 고유한 id는 현재 시간을 밀리초 단위로 생성
    title: title, // 클라이언트로부터 받은 title
    done: false, // 할일의 완료 여부는 기본값 false
  };

  // 할일 목록에 새로운 할일 추가
  todos.push(newTodo);

  // 새로 생성된 할일을 클라이언트에 JSON 형식으로 응답
  res.status(201).json(newTodo); // 201 상태 코드는 생성된 리소스를 의미
});

// 할일 목록 조회 (GET /todos)
app.get("/todos", (req, res) => {
  // 모든 할일 목록을 클라이언트에 반환
  res.json(todos); // JSON 형식으로 할일 목록을 응답
});

// 할일 삭제 (DELETE /todos/:id)
app.delete("/todos/:id", (req, res) => {
  // URL에서 전달된 id 파라미터를 추출
  const { id } = req.params;

  // 해당 id에 맞는 할일을 목록에서 필터링하여 제거
  todos = todos.filter((todo) => todo.id !== parseInt(id)); // 숫자로 변환 후 비교

  // 할일 삭제 후, 상태 코드 204 (No Content)를 반환
  res.status(204).end(); // 삭제된 후엔 본문이 없는 응답
});

// 할일 완료 여부 변경 (PATCH /todos/:id/done)
app.patch("/todos/:id/done", (req, res) => {
  // URL에서 전달된 id 파라미터를 추출
  const { id } = req.params;

  // 해당 id의 할일을 목록에서 찾음
  const todo = todos.find((todo) => todo.id === parseInt(id)); // id를 숫자로 변환하여 검색

  // 해당 id의 할일이 없으면 404 상태 코드와 함께 오류 메시지 반환
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  // 할일의 done 값을 반전 (true → false, false → true)
  todo.done = !todo.done;

  // 변경된 할일 객체를 클라이언트에 반환
  res.json(todo);
});

// 할일 수정 (PUT /todos/:id)
app.put("/todos/:id", (req, res) => {
  // URL에서 전달된 id 파라미터를 추출
  const { id } = req.params;
  // 클라이언트가 보낸 요청 본문에서 새로운 title을 추출
  const { title } = req.body;

  // title이 없으면 400 상태 코드와 함께 오류 메시지 반환
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  // 해당 id의 할일을 목록에서 찾음
  const todo = todos.find((todo) => todo.id === parseInt(id)); // id를 숫자로 변환하여 검색

  // 해당 id의 할일이 없으면 404 상태 코드와 함께 오류 메시지 반환
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  // 할일의 제목을 새로 받은 제목으로 수정
  todo.title = title;

  // 수정된 할일 객체를 클라이언트에 반환
  res.json(todo);
});

// 서버 시작
app.listen(PORT, () => {
  // 서버가 실행되면 콘솔에 메시지 출력
  console.log(`Server is running on http://localhost:${PORT}`);
});
