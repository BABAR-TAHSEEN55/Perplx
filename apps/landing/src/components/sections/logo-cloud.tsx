//USE LOGOS from Flexfolio
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: "/client-1.svg", alt: "Client 1" },
  { src: "/client-2.svg", alt: "Client 2" },
  { src: "/client-3.svg", alt: "Client 3" },
  { src: "/client-4.svg", alt: "Client 4" },
  { src: "/client-5.svg", alt: "Client 5" },
];

const LogoCloud = () => {
  return (
    <section className="pt-8">
      <div className="flex w-full items-center">
        <div className="flex items-center justify-between">
          <div className="max-w-xs text-balance text-lg font-light tracking-tight">
            Trusted by <span className="inline text-orange-500">1,000+</span>{" "}
            teams Used by fast-growing startups worldwide
          </div>
          <div className="h-16 w-px shrink-0 bg-neutral-200" />
        </div>

        <div
          className="mx-auto w-full max-w-2xl overflow-hidden py-2.5"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 25%, black 75%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 25%, black 75%, transparent)",
          }}
        >
          <motion.div
            className="flex w-max items-center will-change-transform"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop",
            }}
          >
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1 ? true : undefined}
                className="flex shrink-0 items-center gap-20 pr-20 "
              >
                {logos.map((logo) => (
                  <Image
                    key={logo.src}
                    src={logo.src}
                    alt={copy === 0 ? logo.alt : ""}
                    height={"100"}
                    width={"100"}
                    className="h-8 w-auto max-w-none shrink-0"
                  />
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
