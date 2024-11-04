interface SeparatorProps {
  className?: string;
}

export function Separator({ className }: SeparatorProps) {
  return <div className={"h-[1px] w-full bg-brandLight " + className} />;
}
