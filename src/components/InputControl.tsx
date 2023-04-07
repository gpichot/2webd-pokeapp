interface InputControlProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
}

export default function InputControl({
  label,
  ...inputProps
}: InputControlProps) {
  const id = inputProps.id || label;

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...inputProps} />
    </div>
  );
}
