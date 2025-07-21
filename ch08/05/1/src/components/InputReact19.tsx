type InputProps = React.ComponentPropsWithRef<"input"> & {
  label: string;
};
export default function Input({ label, ref, ...rest }: InputProps) {
  const id = rest.id || rest.name; // id를 label과 연결하기 위해 설정
  return (
    <div className="input-group">
      {/* <div>로 감싸 입력 그룹을 시각적으로 묶어줌 */}
      {label && <label htmlFor={id}>{label}</label>}
      <input ref={ref} {...rest} />
    </div>
  );
}
