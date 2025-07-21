type CheckboxProps = Omit<React.ComponentPropsWithRef<"input">, "type"> & {
  type?: "checkbox";
  parentClassName: string;
};

export default function Checkbox(props: CheckboxProps) {
  const { parentClassName, children, ...rest } = props;
  return (
    <div className={parentClassName}>
      <input {...rest} />
      <label>{children}</label>
    </div>
  );
}
