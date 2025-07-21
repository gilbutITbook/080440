type Buttonprops = React.ComponentPropsWithoutRef<"button">;

export default function Button(props: Buttonprops) {
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
}
