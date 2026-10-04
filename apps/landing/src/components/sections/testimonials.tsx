// "use client";
//
// import { useRef } from "react";
// import {
//   motion,
//   useAnimationFrame,
//   useMotionValue,
//   useTransform,
// } from "framer-motion";
// import Image from "next/image";
//
// interface Testimonial {
//   quote: string;
//   name: string;
//   role: string;
//   image: string; // avatar (same for all for now)
//   hoverBg: string; // image from /public shown on hover
// }
//
// const testimonials: Testimonial[] = [
//   {
//     quote:
//       "The CRM follow-up workflow alone saved our sales team 12 hours a week. The meeting notes beat anything we wrote by hand.",
//     name: "Paul M.",
//     role: "Head of Sales",
//     image: "/testimonials.avif",
//     hoverBg: "/mask.avif",
//   },
//   {
//     quote:
//       "We were up and running in minutes. Everything lives in one place now, so projects move forward without the usual chasing.",
//     name: "Maya Chen",
//     role: "Product Lead",
//     image: "/testimonials.avif",
//     hoverBg: "/mask.avif",
//   },
//   {
//     quote:
//       "It gives us the clarity and flexibility to collaborate confidently as our team and goals keep evolving.",
//     name: "Priya Shah",
//     role: "Operations Manager",
//     image: "/testimonials.avif",
//     hoverBg: "/mask.avif",
//   },
// ];
//
// const DURATION = 20; // seconds for one full loop, higher = slower
// const SPEED = 50 / DURATION; // % of the track per second (track = 2 copies)
//
// const mask =
//   "linear-gradient(to right, transparent, black 10%, black 90%, transparent)";
//
// const Testimonials = () => {
//   const progress = useMotionValue(0); // 0 → -50 (%)
//   const paused = useRef(false);
//   const x = useTransform(progress, (v) => `${v}%`);
//
//   useAnimationFrame((_, delta) => {
//     if (paused.current) return;
//     let next = progress.get() - (delta / 1000) * SPEED;
//     if (next <= -50) next += 50; // seamless loop
//     progress.set(next);
//   });
//
//   return (
//     <section className="mt-20 pt-8">
//       <div
//         className="w-full overflow-hidden py-2"
//         style={{ maskImage: mask, WebkitMaskImage: mask }}
//         onMouseEnter={() => (paused.current = true)}
//         onMouseLeave={() => (paused.current = false)}
//       >
//         <motion.div className="flex w-max will-change-transform" style={{ x }}>
//           {[0, 1].map((copy) => (
//             <div
//               key={copy}
//               aria-hidden={copy === 1 ? true : undefined}
//               className="flex shrink-0 gap-4 pr-4"
//             >
//               {testimonials.map(({ quote, name, role, image, hoverBg }) => (
//                 <div
//                   key={name}
//                   className="group relative isolate flex min-h-50 w-80 shrink-0 flex-col overflow-hidden rounded-xl border border-neutral-200/80 bg-white p-4 py-6 md:w-96"
//                 >
//                   {/* Hover background, sits behind the content */}
//                   <Image
//                     src={hoverBg}
//                     alt=""
//                     aria-hidden="true"
//                     fill
//                     sizes="384px"
//                     className="-z-10 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
//                   />
//
//                   <div className="max-w-md text-balance text-neutral-900 transition-colors duration-300 group-hover:text-white">
//                     {quote}
//                   </div>
//
//                   <div className="mt-auto pt-18">
//                     <Image
//                       alt={copy === 0 ? name : ""}
//                       src={image}
//                       className="size-13"
//                       height={100}
//                       width={100}
//                     />
//                     <p className="mt-2 max-w-sm text-lg leading-snug tracking-tight text-neutral-800 transition-colors duration-300 group-hover:text-white">
//                       {name}
//                     </p>
//                     <p className="mt-2 text-sm italic text-neutral-400 transition-colors duration-300 group-hover:text-neutral-200">
//                       {role}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   );
// };
//
// export default Testimonials;

"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
  hoverBg: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The CRM follow-up workflow alone saved our sales team 12 hours a week. The meeting notes beat anything we wrote by hand.",
    name: "Paul M.",
    role: "Head of Sales",
    image: "/testimonials.avif",
    hoverBg: "/mask.avif",
  },
  {
    quote:
      "We were up and running in minutes. Everything lives in one place now, so projects move forward without the usual chasing.",
    name: "Maya Chen",
    role: "Product Lead",
    image: "/testimonials.avif",
    hoverBg: "/mask.avif",
  },
  {
    quote:
      "It gives us the clarity and flexibility to collaborate confidently as our team and goals keep evolving.",
    name: "Priya Shah",
    role: "Operations Manager",
    image: "/testimonials.avif",
    hoverBg: "/mask.avif",
  },
];

const Testimonials = () => {
  const progress = useMotionValue(0);
  const pauseRef = useRef(false);
  const x = useTransform(progress, (value) => `${value}%`);

  useAnimationFrame((_, delta) => {
    if (pauseRef.current) return;

    const next = progress.get() - (delta / 1000) * 2.5;
    progress.set(next <= -50 ? next + 50 : next);
  });

  return (
    <section className="mt-20 pt-8">
      <div
        onMouseEnter={() => (pauseRef.current = true)}
        onMouseLeave={() => (pauseRef.current = false)}
        className="w-full overflow-hidden py-2"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <motion.div className="flex w-max will-change-transform" style={{ x }}>
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
              className="flex shrink-0 gap-4 pr-4"
            >
              {testimonials.map(({ quote, name, role, image, hoverBg }) => (
                <article
                  key={name}
                  className="group relative isolate flex min-h-50 w-80 shrink-0 flex-col overflow-hidden rounded-xl border border-neutral-200/80 bg-white p-4 py-6 md:w-96"
                >
                  <Image
                    src={hoverBg}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="384px"
                    className="-z-10 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  <p className="max-w-md text-balance text-neutral-900 transition-colors duration-300 group-hover:text-white">
                    {quote}
                  </p>

                  <div className="mt-auto pt-18">
                    <Image
                      alt={copy === 0 ? name : ""}
                      src={image}
                      className="size-13"
                      height={100}
                      width={100}
                    />
                    <p className="mt-2 max-w-sm text-lg leading-snug tracking-tight text-neutral-800 transition-colors duration-300 group-hover:text-white">
                      {name}
                    </p>
                    <p className="mt-2 text-sm italic text-neutral-400 transition-colors duration-300 group-hover:text-neutral-200">
                      {role}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
