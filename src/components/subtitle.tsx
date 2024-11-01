interface SubtitleProps {
  className?: string;
  children: React.ReactNode;
}

export function Subtitle({ children, className }: SubtitleProps) {
  return (
    <div className={"text-2xl font-bold text-center " + className}>
      {children}
    </div>
  );
}