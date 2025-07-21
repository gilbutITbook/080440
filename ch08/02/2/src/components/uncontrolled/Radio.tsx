export default function Radio() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log("Selected option:", formData.get("option"));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input type="radio" name="option" value="option1" defaultChecked />
          옵션 1
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="option" value="option2" />
          옵션 2
        </label>
      </div>
      <div>
        <label>
          <input type="radio" name="option" value="option3" />
          옵션 3
        </label>
      </div>
      <button type="submit">제출</button>
    </form>
  );
}
