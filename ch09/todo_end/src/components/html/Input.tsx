type Inputprops = Omit<React.ComponentPropsWithRef<"input">, "type"> & {
  type?: "text";
};

export default function Input(props: Inputprops) {
  const { ...rest } = props;
  return <input {...rest} />;
}
