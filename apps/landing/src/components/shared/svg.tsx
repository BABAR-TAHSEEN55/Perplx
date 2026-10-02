"use client";
import type { ComponentProps } from "react";
import { motion } from "framer-motion";

type IconProps = ComponentProps<typeof motion.svg>;
const SVGICON = (props: IconProps) => {
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 11 11"
      fill="none"
      overflow="visible"
      variants={{
        hidden: { opacity: 0, scale: 0.6, rotate: -90 },
        visible: { opacity: 1, scale: 1, rotate: 0 },
        hover: { scale: 1.15, rotate: 90 },
      }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      {...props}
    >
      <path
        d="M 3 0 L 5 0 L 5 2 L 3 2 Z M 6 0 L 8 0 L 8 2 L 6 2 Z M 3 6 L 5 6 L 5 8 L 3 8 Z M 0 6 L 2 6 L 2 8 L 0 8 Z M 6 6 L 8 6 L 8 8 L 6 8 Z M 9 6 L 11 6 L 11 8 L 9 8 Z M 3 3 L 5 3 L 5 5 L 3 5 Z M 0 3 L 2 3 L 2 5 L 0 5 Z M 6 3 L 8 3 L 8 5 L 6 5 Z M 9 3 L 11 3 L 11 5 L 9 5 Z M 3 9 L 5 9 L 5 11 L 3 11 Z M 6 9 L 8 9 L 8 11 L 6 11 Z"
        fill="currentColor"
      ></path>
    </motion.svg>
  );
};

export default SVGICON;
