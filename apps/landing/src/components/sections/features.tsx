"use client";
import Heading from "../shared/heading";
import SmolText from "../shared/smol-text";
import SubHeading from "../shared/sub-heading";
import SVGICON from "../shared/svg";
import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  caption: string;
  iconClassName?: string;
  className?: string;
}

const features: Feature[] = [
  {
    title: "Smart Rewrite",
    description:
      "Improve clarity, structure, and tone instantly without rewriting from scratch.",
    caption: "Fix and refine in one click.",
    iconClassName: "text-neutral-900",
  },
  {
    title: "AI Writing",
    description:
      "Start from a simple idea and turn it into structured, high-quality content in seconds.",
    caption: "No more blank pages.",
    iconClassName: "text-[#9BE28F]",
  },
  {
    title: "Tone Control",
    description:
      "Keep your voice consistent across every channel — from emails to social posts.",
    caption: "Write like your brand, every time.",
    iconClassName: "text-[#FFC93C]",
  },
  {
    title: "Ready Templates",
    description:
      "Use proven formats for real-world use cases — from ads to product descriptions.",
    caption: "Start faster with the right structure.",
    iconClassName: "text-[#B3A8FF]",
    className: "col-span-2",
  },
  {
    title: "Content Ideas",
    description:
      "Generate fresh, relevant ideas for any topic, audience, or channel whenever inspiration runs low.",
    caption: "Never run out of what to say.",
    iconClassName: "text-[#FFA03B]",
    className: "col-span-1 ",
  },
];

const Features = () => {
  return (
    <section className="mt-20 pt-8 " id="features">
      <SmolText text="@Why Perplx" className="text-backy" />
      <Heading className="text-center">
        Everything you need to learn about content
      </Heading>
      <SubHeading className="text-center">
        Whether you’re creating content daily or scaling it across a team,
        Verseo adapts to your workflow.
      </SubHeading>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;

const MAX_MOVE = 8;
const FeatureCard = ({
  title,
  description,
  caption,
  iconClassName = "text-[#FFA03B]",
  className,
}: Feature) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 20, mass: 0.6 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // measured on the wrapper, which never moves
    const rect = e.currentTarget.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(-px * 2 * MAX_MOVE);
    y.set(-py * 2 * MAX_MOVE);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    // stationary hit area
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {/* moving card */}
      <motion.div
        style={{ x: springX, y: springY }}
        className="flex h-full min-h-50 flex-col rounded-xl border border-neutral-200/80 bg-white p-5"
      >
        <div aria-hidden="true" className="grid w-10 grid-cols-4 gap-1">
          <SVGICON
            aria-hidden="true"
            className={`size-8 shrink-0 ${iconClassName}`}
          />
        </div>

        <div className="mt-auto pt-18">
          <h3 className="font-inter text-2xl font-medium tracking-tight text-neutral-900">
            {title}
          </h3>
          <p
            className={cn(
              "text-md mt-2 max-w-sm leading-snug tracking-tight text-neutral-800",
              className?.includes("col-span-2") && "max-w-none",
            )}
          >
            {description}
          </p>
          <p className="mt-4 text-sm italic text-neutral-500">{caption}</p>
        </div>
      </motion.div>
    </div>
  );
};
