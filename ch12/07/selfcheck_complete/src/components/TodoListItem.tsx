import { memo, useState } from "react";
import Button from "./html/Button";
import Checkbox from "./html/Checkbox";
import SvgClose from "./svg/SvgClose";
import SvgPencil from "./svg/SvgPencil";
import Input from "./html/Input";
import { useTodoActionContext } from "../hooks/useTodoContext";

export default memo(function TodoListItem({ todo }: { todo: Todo }) {
  console.log("todolistitem render");
  // TodoContextAction에서 modifyTodo, toggleTodo 함수를 가져옴
  const { modifyTodo, toggleTodo, deleteTodo } = useTodoActionContext();

  // 수정 여부를 판단하는 상태값
  const [isModify, setIsModify] = useState(false);

  // 수정할 내용을 담는 상태값
  const [modifyTitle, setModifyTitle] = useState("");

  // 수정 버튼 클릭 시 수정 모드로 전환
  const modifyHandler = () => {
    setIsModify((modify) => !modify);
    setModifyTitle(modifyTitle === "" ? todo.title : modifyTitle);
    if (modifyTitle !== "" && modifyTitle !== todo.title) {
      modifyTodo(todo.id, modifyTitle);
    }
  };

  return (
    // 할 일이 완료되면 .todo__item--complete 추가
    <li className={`todo__item`}>
      {/* 할 일을 수정할 때는 비노출 */}
      {!isModify && (
        <Checkbox
          parentClassName="todo__checkbox-group"
          type="checkbox"
          className={`todo__checkbox ${
            todo.done && "todo__checkbox--complete"
          }`}
          checked={todo.done}
          onChange={() => toggleTodo(todo.id)}
        >
          {todo.title}
        </Checkbox>
      )}
      {/* 할 일을 수정할 때만 노출 (.todo__checkbox-group은 비노출) */}
      {isModify && (
        <Input
          type="text"
          className="todo__modify-input"
          value={modifyTitle}
          onChange={(e) => setModifyTitle(e.target.value)}
        />
      )}
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
