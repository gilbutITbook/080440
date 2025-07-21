import { useState } from 'react';
import Button from './html/Button';
import Input from './html/Input';
import { apiRequest } from '../api/apiRequest';

export default function TodoEditor({
  addTodo,
}: {
  addTodo: (todo: Todo) => void;
}) {
  const [text, setText] = useState('');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // 기본 이벤트 제거
    if (!text.trim()) return; // 입력 필드가 비어있으면 함수 종료
    const response = await apiRequest('/todo2s', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: text }),
    });
    const data: Todo = await response.json();
    addTodo(data);
    setText(''); // 입력 필드 초기화
  };

  return (
    <form className='todo__form' onSubmit={handleSubmit}>
      <div className='todo__editor'>
        <Input
          type='text'
          className='todo__input'
          placeholder='Enter Todo List'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button className='todo__button' type='submit'>
          Add
        </Button>
      </div>
    </form>
  );
}
