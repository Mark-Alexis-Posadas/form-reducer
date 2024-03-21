export default function Input({
  type,
  id,
  name,
  placeholder,
  value,
  className,
}) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      className={className}
    />
  );
}
