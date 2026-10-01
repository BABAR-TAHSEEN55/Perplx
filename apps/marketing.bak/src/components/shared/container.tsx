import { cn } from "cn";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "max-w-7xl md:pr-8 md:pl-8 lg:pr-0 lg:pl-0 p-2 md:p-4 m-auto overflow-hidden md:overflow-visible font-inter",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
