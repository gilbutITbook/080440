export default function User(props: {
  userObj: { name: string; age: number };
  clickHandler: () => void;
}) {
  return (
    <>
      <p>name: {props.userObj.name}</p>
      <p>age: {props.userObj.age}</p>
      <button onClick={props.clickHandler}>클릭</button>
    </>
  );
}
