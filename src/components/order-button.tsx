interface OrderButtonProps {
  className?: string;
}

export function OrderButton({ className }: OrderButtonProps) {
  return (
    <a
      className={
        "flex items-center justify-center bg-brand h-12 rounded-3xl hover:brightness-125 transition-all text-base py-4 cursor-pointer max-w-44 px-8 " +
        className
      }
    >
      Order now
    </a>
  );
}
