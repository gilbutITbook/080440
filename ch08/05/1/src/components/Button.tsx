type ButtonProps = React.ComponentPropsWithRef<"button">;

export default function Button({ children, ...rest }: ButtonProps) {
  return <button {...rest}>{children}</button>;
}
