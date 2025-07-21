import { useState } from "react";
import Button from "./html/Button";
import Input from "./html/Input";
import { useTodoActionContext } from "../hooks/useTodoContext";

export default function TodoEditor() {
  const { addTodo } = useTodoActionContext();
  const [text, setText] = useState("");
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };
  return (
    <form className="todo__form" onSubmit={submitHandler}>
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
