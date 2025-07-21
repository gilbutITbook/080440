export default function Button({
  children,
  handleClick,
}: {
  children: React.ReactNode;
  handleClick: () => void;
}) {
  return <button onClick={handleClick}>{children}</button>;
}
