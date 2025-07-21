type HTMLInputType =
  | 'text'
  | 'password'
  | 'email'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'file'
  | 'hidden'
  | 'image'
  | 'submit'
  | 'reset'
  | 'button'
  | 'color'
  | 'range'
  | 'checkbox'
  | 'radio';
type InputProps = Omit<React.ComponentPropsWithRef<'input'>, 'type'> & {
  type?: Exclude<HTMLInputType, 'radio' | 'checkbox'>;
};

export default function Input(props: InputProps) {
  const { ...rest } = props;
  return <input {...rest} />;
}
