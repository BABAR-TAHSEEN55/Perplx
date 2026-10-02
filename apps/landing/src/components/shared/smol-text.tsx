import { cn } from "cn";

const SmolText = ({
  text,
  className,
}: {
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        `flex  items-center justify-center gap-1.5 overflow-hidden font-geist-pixel text-sm font-normal leading-[1.2] tracking-[-0.02em] text-[rgb(104,104,104)] max-w-md mx-auto w-fit`,
        className,
      )}
    >
      <span>[</span>
      <span>{text}</span>
      <span>]</span>
    </div>
  );
};

export default SmolText;
