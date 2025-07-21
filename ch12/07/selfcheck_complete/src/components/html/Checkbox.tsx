type CheckboxProps = Omit<React.ComponentPropsWithRef<'input'>, 'type'> & {
  type?: 'checkbox';
  parentClassName: string;
};

export default function Checkbox(props: CheckboxProps) {
  const { parentClassName, children, ...rest } = props;
  return (
    <div className={parentClassName}>
      <input id='chk' {...rest} />
      <label htmlFor='chk'>{children}</label>
    </div>
  );
}
