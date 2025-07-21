import Button from './html/Button';
import Input from './html/Input';

export default function TodoEditor() {
  return (
    <form className='todo__form'>
      <div className='todo__editor'>
        <Input
          type='text'
          className='todo__input'
          placeholder='Enter Todo List'
        />
        <Button className='todo__button' type='submit'>
          Add
        </Button>
      </div>
    </form>
  );
}
