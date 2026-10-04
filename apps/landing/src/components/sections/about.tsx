"use client";
import { cn } from "cn";
import SmolText from "../shared/smol-text";
import { useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "25+", label: "SaaS brands launched" },
  { value: "100+", label: "Startup Projects" },
  { value: "4+", label: "AI - tools integrated" },
];

type PillSize = "sm" | "md" | "lg";

type PillData = {
  label: string;
  color: string;
  position: string;
  rotate: string;
  size?: PillSize;
};

const pills: PillData[] = [
  {
    label: "Faster workflow",
    color: "border-purple-500/70 from-fuchsia-400 to-purple-300",
    position: "top-[6%] right-[1%]",
    rotate: "rotate-[15deg]",
  },
  {
    label: "B2B Platforms",
    color: "border-amber-500/70 from-orange-300 to-amber-200",
    position: "top-[33%] right-[1%]",
    rotate: "-rotate-[15deg]",
  },
  {
    label: "No-Code Tools",
    color: "border-sky-500/70 from-sky-400 to-sky-200",
    position: "top-[53%] right-[1%]",
    rotate: "rotate-[15deg]",
  },
  {
    label: "AI - Startups",
    color: "border-emerald-500/70 from-emerald-300 to-teal-200",
    position: "top-[74%] right-[1%]",
    rotate: "-rotate-[15deg]",
  },
  {
    label: "Lead Gen Tools",
    color: "border-orange-600/70 from-[#FFA03B] to-orange-200",
    position: "top-[74%] right-[15%]",
    rotate: "rotate-[15deg]",
  },
  {
    label: "Startup Studios",
    color: "border-lime-500/70 from-lime-300 to-green-200",
    position: "top-[80%] right-[30%]",
    rotate: "-rotate-[10deg]",
  },
];

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <section className="relative overflow-hidden mt-20 ">
      <div className="">
        <SmolText text="About Us" className="mx-0 text-backy" />
        <h4 className="max-w-244 py-6 text-3xl leading-snug">
          We’re a digital design team focused on empowering SaaS startups and
          solo founders with bold, high-converting templates powered by AI. We
          believe in design that moves — fast, flexible, and beautiful. Our goal
          is to give lean teams the tools to launch standout brands without
          wasting time or budget.
        </h4>
        <div className="flex max-w-2xl items-center justify-between pt-8">
          {stats.map((stat) => (
            <NumberStats
              key={stat.label}
              value={stat.value}
              label={stat.label}
            />
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0 hidden lg:block"
        ref={containerRef}
      >
        {pills.map((pill) => (
          <Pill key={pill.label} containerRef={containerRef} {...pill} />
        ))}
      </div>
    </section>
  );
};

export default About;

// Change these to control pill size globally.
const sizeClasses: Record<PillSize, string> = {
  sm: "px-3.5 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-6 py-3 text-lg",
};

const Pill = ({
  label,
  color,
  position,
  rotate,
  size = "md", // change the default size here
  containerRef,
}: PillData & { containerRef: React.RefObject<HTMLDivElement | null> }) => {
  return (
    <div className={cn("absolute", position, rotate)}>
      <motion.span
        drag
        dragConstraints={containerRef}
        dragElastic={1.1}
        animate={{ x: 0, y: 0 }}
        // dragDirectionLock
        dragSnapToOrigin
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
        className={cn(
          "pointer-events-auto relative inline-flex select-none items-center justify-center overflow-hidden whitespace-nowrap",
          "rounded-full border bg-linear-to-br font-medium leading-normal text-white",
          "shadow-[inset_-1px_2px_1px_0px_rgba(255,255,255,0.35),inset_0_-3px_4px_rgba(0,0,0,0.06),0_6px_14px_rgba(0,0,0,0.10)]",
          sizeClasses[size],
          color,
        )}
      >
        {/* Glossy top highlight */}
        <span className="pointer-events-none absolute inset-x-2 top-0.5 h-1/2 rounded-full bg-linear-to-b from-white/40 to-transparent" />

        <span className="relative drop-shadow-sm">{label}</span>
      </motion.span>
    </div>
  );
};

const NumberStats = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-5xl">{value}</p>
      <p className="text-md text-neutral-400">{label}</p>
    </div>
  );
};
