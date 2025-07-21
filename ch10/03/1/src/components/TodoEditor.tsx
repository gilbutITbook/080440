import { useState } from "react";
import Button from "./html/Button";
import Input from "./html/Input";

export default function TodoEditor({
  addTodo,
}: {
  addTodo: (title: string) => void;
}) {
  const [text, setText] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 동작 막기
    if (!text.trim()) return; // 입력창이 비어 있으면 함수 종료
    addTodo(text); // 부모 컴포넌트에서 전달받은 함수 실행
    setText(""); // 입력 필드 초기화
  };

  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <div className="todo__editor">
        <Input
          type="text"
          className="todo__input"
          placeholder="Enter Todo List"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button className="todo__button" type="submit">
          Add
        </Button>
      </div>
    </form>
  );
}
