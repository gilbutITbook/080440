type Inputprops = Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
  type?: "text";
};

export default function Input(props: Inputprops) {
  const { ...rest } = props;
  return <input {...rest} />;
}
