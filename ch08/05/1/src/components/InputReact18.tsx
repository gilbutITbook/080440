import React, { forwardRef } from "react";

type InputProps = React.ComponentPropsWithRef<"input"> & {
  label: string;
};

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, ...rest },
  ref
) {
  const { id } = rest;
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input ref={ref} {...rest} />
    </div>
  );
});
