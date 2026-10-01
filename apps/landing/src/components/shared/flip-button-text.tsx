"use client";
import { cn } from "cn";
import { motion } from "framer-motion";
const FlipButtonText = ({
  text,
  className,
  variant = "white",
  size = "md",
}: {
  text: string;
  className?: string;
  variant?: "white" | "orange";
  size?: "md" | "lg";
}) => {
  return (
    <motion.button
      initial="initial"
      whileHover="hovered"
      className={cn(
        "inline-flex items-center justify-center gap-2.5 rounded-[10px] border py-2.5 text-sm font-semibold leading-normal shadow-[inset_-1px_2px_1px_0px_rgba(255,255,255,0.2)]",
        size === "lg" ? "px-6" : "px-4",
        variant === "orange"
          ? "border-orange-600 bg-linear-to-b from-[#FFA03B] to-[#F97216] text-white hover:from-orange-400 hover:to-[#FFA03B]"
          : "border-slate-200 bg-white text-slate-900 hover:shadow-[0_0_2px_#fff,0_2px_6px_rgba(0,0,0,0.25)]",
        className,
      )}
    >
      <span className="relative block overflow-hidden whitespace-nowrap leading-normal">
        <span className="block">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                delay: 0.025 * index,
              }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </span>
        <span className="absolute inset-0 block">
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}
              transition={{
                duration: 0.25,
                ease: "easeInOut",
                delay: 0.025 * index,
              }}
              className="inline-block"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </span>
      </span>
    </motion.button>
  );
};

export default FlipButtonText;
