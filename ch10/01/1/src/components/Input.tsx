import { useId } from "react";

type InputProps = React.ComponentPropsWithRef<"input">;

export default function Input({ children, ...props }: InputProps) {
  const uuid = useId();
  return (
    <>
      <label htmlFor={uuid}>{children}</label>
      <input type="text" id={uuid} {...props} />
    </>
  );
}
