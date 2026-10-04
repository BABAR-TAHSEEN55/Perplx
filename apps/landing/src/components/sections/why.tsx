"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import SmolText from "../shared/smol-text";
import {
  Card,
  CardContent,
  CardHeader,
  CardInsideSkeleton,
  Pattern,
} from "../shared/spawn-card";

const benefits = [
  {
    title: "Takes real action",
    description:
      "Beyond suggestions, Parley executes — sending emails, booking meetings, updating records, and managing tasks across all your tools without constant hand-holding.",
  },
  {
    title: "Connects everything",
    description:
      "Slack, Notion, HubSpot, GitHub — all in one place. Parley connects to 60+ tools. One conversation updates everything, no extra work.",
  },
  {
    title: "Gets better over time",
    description:
      "The longer you work together, the less you explain. Parley learns your tone, shortcuts, and rules. Today’s prompts become tomorrow’s one-word commands.",
  },
  {
    title: "Stays in your control",
    description:
      "You set the rules. Parley asks before anything sensitive and keeps a clear log of everything it does.",
  },
];

// width of the hovered column relative to the others (1fr)
const EXPANDED = 1.5;

const WhyPerplX = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const cols = benefits
    .map((_, i) => (hovered === i ? `${EXPANDED}fr` : "1fr"))
    .join(" ");

  return (
    <section className="pt-8">
      <div className="flex items-end justify-between">
        <div>
          <SmolText text="@Why Perplx" className="mx-0 text-backy" />
          <h3 className="max-w-sm pt-2 font-inter text-3xl font-semibold tracking-tighter text-balance text-neutral-800 md:text-4xl md:tracking-tight lg:text-6xl dark:text-neutral-100">
            A real partner, not a chatbot in disguise
          </h3>
        </div>
        <p className="max-w-md text-balance text-sm text-neutral-600">
          Most AI tools answer questions. Parley takes initiative — anticipating
          needs, executing tasks, and growing smarter with every interaction.
        </p>
      </div>

      <motion.div
        onMouseLeave={() => setHovered(null)}
        animate={{ gridTemplateColumns: cols }}
        transition={{ type: "spring", stiffness: 180, damping: 24, mass: 0.8 }}
        className="grid grid-cols-1 gap-5 pt-8 sm:grid-cols-2 lg:grid-cols-4 "
      >
        {benefits.map((benefit, i) => {
          const isHovered = hovered === i;

          return (
            <motion.div
              key={benefit.title}
              onMouseEnter={() => setHovered(i)}
              layout
              className="min-w-0 overflow-hidden"
            >
              <Card className="h-100 overflow-hidden p-2">
                {isHovered ? (
                  <>
                    <motion.div
                      initial={{ opacity: 0, y: -12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      <Pattern className="flex h-40 items-center justify-center p-6" />
                    </motion.div>
                    <CardHeader>
                      <motion.h4
                        layout
                        className="font-inter text-3xl font-medium tracking-tight text-neutral-800"
                      >
                        {benefit.title}
                      </motion.h4>
                    </CardHeader>
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.3,
                        delay: 0.05,
                        ease: "easeOut",
                      }}
                    >
                      <CardContent className="px-6 pb-4 text-xs text-neutral-600">
                        {benefit.description}
                      </CardContent>
                    </motion.div>
                  </>
                ) : (
                  <>
                    <CardInsideSkeleton />
                    <CardHeader>
                      <motion.h4
                        layout
                        className="font-inter text-xl font-medium tracking-tight text-neutral-800  "
                      >
                        {benefit.title}
                      </motion.h4>
                    </CardHeader>
                  </>
                )}
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default WhyPerplX;
