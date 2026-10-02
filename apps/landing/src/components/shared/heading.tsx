"use client";
import { cn } from "cn";
import type React from "react";
import { motion } from "framer-motion";

const Heading = ({
  children,
  className,
  tag,
}: {
  children: React.ReactNode;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  const Tag = tag ?? "h2";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto w-full max-w-2xl rounded-2xl  p-2 font-inter"
    >
      <Tag
        className={cn(
          "text-3xl md:text-4xl lg:text-6xl  tracking-tighter md:tracking-tight font-inter text-neutral-800 dark:text-neutral-100 font-semibold",
          className,
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
};

export default Heading;
