import { cn } from "cn";
import type { ReactNode } from "react";

const CustomButton = ({
  text,
  className,
  variant = "white",
  size = "md",
  icon,
}: {
  text: string;
  className?: string;
  variant?: "white" | "orange";
  size?: "md" | "lg";
  icon?: ReactNode;
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-sm border py-2.5 text-sm font-semibold leading-normal shadow-[inset_-1px_2px_1px_0px_rgba(255,255,255,0.2)] cursor-pointer",
        size === "lg" ? "px-6" : "px-4",
        variant === "orange"
          ? "border-orange-600 bg-linear-to-b from-[#FFA03B] to-[#F97216] text-white"
          : "border-slate-200 bg-white text-slate-900",
        className,
      )}
    >
      {text}
      {icon && <span>{icon}</span>}
    </button>
  );
};

export default CustomButton;
//TODO: scale part aad
