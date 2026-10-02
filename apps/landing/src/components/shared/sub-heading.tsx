"use client";
import { cn } from "cn";
import type React from "react";
import { motion } from "framer-motion";

const SubHeading = ({
  children,
  className,
  tag,
}: {
  children: React.ReactNode;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
}) => {
  const Tag = tag ?? "p";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="mx-auto w-full max-w-2xl rounded-2xl  p-2 font-inter"
    >
      <Tag
        className={cn(
          "text-lg  md:text-md text-gray-800 dark:text-neutral-400 font-inter font-medium",
          className,
        )}
      >
        {children}
      </Tag>
    </motion.div>
  );
};

export default SubHeading;
