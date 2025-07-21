export default function TodoListItemEmpty() {
  return (
    <li className="todo__item todo__item--empty">
      <p className="todo__text--empty">There are no registered tasks</p>
    </li>
  );
}
