interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export function Container({ className, children }: ContainerProps) {
  return (
    <div className={"px-8 max-w-6xl mx-auto lg:px-0 " + className}>
      {children}
    </div>
  );
}
