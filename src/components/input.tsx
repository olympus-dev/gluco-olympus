interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
}

export function Input({ placeholder, className, ...props } : IInputProps) {
  return (
    <input className={`rounded-sm p-4 m-0 text-black ${className}`} placeholder={placeholder} {...props} />
  );
}
