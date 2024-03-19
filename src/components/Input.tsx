interface InputProps {
  type: string;
  name: string;
  id: string;
  placeholder: string;
  value: string | number;
  className: string;
}

export default function Input({
  type,
  name,
  id,
  placeholder,
  value,
  className,
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      className={className}
    />
  );
}
