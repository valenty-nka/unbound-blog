type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-5xl px-4 md:px-8 ${className}`}>
      {children}
    </div>
  );
}