import { memo, useState } from "react";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";
import Input from "./html/Input";
import { useTodoStore } from "../store/todoStore";

export default memo(function TodoListItem({ todo }: { todo: Todo }) {
  console.log("TodoListItem renering");
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const modifyTodo = useTodoStore((state) => state.modifyTodo);
  const [isModify, setIsModify] = useState(false); // 수정 여부를 판단하는 상태 정의
  const [modifyTitle, setModifyTitle] = useState(""); // 수정할 내용을 담는 상태 정의
  const modifyHandler = () => {
    setIsModify((modify) => !modify);
    setModifyTitle(modifyTitle === "" ? todo.title : modifyTitle);
    if (modifyTitle.trim() !== "" && modifyTitle !== todo.title) {
      modifyTodo(todo.id, modifyTitle);
    }
  };

  return (
    // 할 일을 완료하면 .todo__item--complete 추가
    <li className={`todo__item ${todo.done && "todo__item--complete"}`}>
      {!isModify && (
        <Checkbox
          parentClassName="todo__checkbox-group"
          type="checkbox"
          className="todo__checkbox"
          checked={todo.done}
          onChange={() => toggleTodo?.(todo.id)}
        >
          {todo.title}
        </Checkbox>
      )}
      {isModify && (
        <Input
          type="text"
          className="todo__modify-input"
          value={modifyTitle}
          onChange={(e) => setModifyTitle(e.target.value)}
        />
      )}
      {/* 할 일을 수정할 때만 노출  */}
      {/* <input type="text" className="todo__modify-input" /> */}
      <div className="todo__button-group">
        <Button className="todo__action-button" onClick={modifyHandler}>
          <SvgPencil />
        </Button>
        <Button
          className="todo__action-button"
          onClick={() => deleteTodo(todo.id)}
        >
          <SvgClose />
        </Button>
      </div>
    </li>
  );
});
