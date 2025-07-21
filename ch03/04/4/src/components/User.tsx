interface UserProps {
  name: string;
  age: number;
  clickHandler: () => void;
}
export default function User(props: UserProps) {
  const { name, age, clickHandler } = props;
  return (
    <>
      <p>name: {name}</p>
      <p>age: {age}</p>
      <button onClick={clickHandler}>클릭</button>
    </>
  );
}
