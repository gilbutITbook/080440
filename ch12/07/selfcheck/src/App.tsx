import TodoEditor from './components/TodoEditor';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <div className='todo'>
      <TodoHeader />
      {/* 할 일 등록 */}
      <TodoEditor />
      {/* 할 일 목록 */}
      <TodoList />
    </div>
  );
}
