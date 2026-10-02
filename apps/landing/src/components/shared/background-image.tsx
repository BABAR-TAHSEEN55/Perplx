"use client";
import { motion } from "framer-motion";
import Image from "next/image";
const BackgroundImage = () => {
  return (
    <motion.div
      className="absolute inset-0 h-full w-full"
      initial={{ opacity: 0, scale: 1.25 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      <Image
        className="h-full w-full object-cover object-top"
        src={"/background.avif"}
        alt="Background"
        fill
      />
    </motion.div>
  );
};

export default BackgroundImage;
