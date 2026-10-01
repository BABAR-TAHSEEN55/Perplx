"use client";

import React, { useState } from "react";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Menu, MoonIcon, Sun, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "cn";
// import { LogoIcon } from "./svg";
import { useTheme } from "next-themes";
import Image from "next/image";
import Container from "../shared/container";

type NavLinksTypes = {
  title: string;
  href: string;
};
const navLinks: NavLinksTypes[] = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Blog",
    href: "#blog",
  },
  {
    title: "Changelog",
    href: "#changelog",
  },
];
const Navbar = () => {
  return (
    <div>
      <DesktopNav />
      <MobileNav />
    </div>
  );
};

export default Navbar;

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2 ", className)}>
      <Image src="/logo.avif" alt="logo" width={24} height={24} />
      <p className="text-lg font-semibold">Marzy</p>
    </div>
  );
};

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container className="flex items-center justify-between py-2 md:hidden relative z-99">
      <Logo />

      <button
        onClick={() => setOpen(true)}
        className="border border-neutral-300 dark:border-neutral-700 rounded-lg p-1.5 "
      >
        <Menu className="size-4 text-neutral-500" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              backdropFilter: "blur(15px)",
              // background: "transparent",
            }}
            exit={{
              opacity: 0,
              backdropFilter: "blur(0px)",
              // background: "rbga(255,255,255,0.5)",
            }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-10 flex h-full w-full flex-col bg-background/95 px-4 py-2 "
          >
            <div className="flex justify-between items-center ">
              <Logo />
              <button
                onClick={() => setOpen(false)}
                className="border border-neutral-300 dark:border-neutral-700 rounded-lg p-1.5 "
              >
                <X className="size-4 text-neutral-500" />
              </button>
            </div>
            <div className="flex flex-col gap-6 my-10 ">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: idx * 0.1 }}
                  key={idx + link.title}
                >
                  <Link
                    href={link.href}
                    className="text-xl text-neutral-600 dark:text-neutral-300 font-medium"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-4 mt-auto">
              <Button className={"font-medium px-4 py-4.5 flex-1"}>
                Start Building
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

const DesktopNav = () => {
  return (
    <Container className="fixed inset-x-4 top-4 z-50 hidden items-center gap-2 rounded-2xl bg-white px-8 py-4 shadow-[0_4px_20px_rgba(39,39,39,0.05)] lg:flex">
      <div className="flex flex-1 items-center gap-12">
        <Logo />
        <div className="flex items-center gap-6  text-sm text-neutral-600 font-light tracking-tight">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-neutral-700 dark:hover:text-neutral-200 transition-all duration-200 ease-in"
            >
              {link.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 relative">
        {/*<button className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-orange-600 bg-linear-to-b from-[#FFA03B] to-orange-500 px-4 py-2.5 text-sm font-medium text-white shadow-[inset_-1px_2px_1px_0px_rgba(255,255,255,0.2)] transition hover:brightness-105 active:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2  hover:from-orange-400 hover:to-[#FFA03B]">
          Book a Call
        </button>

        <button className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-base font-semibold leading-6 text-slate-900 shadow-[inset_-1px_2px_1px_0px_rgba(255,255,255,0.2)] hover:shadow-[0_0_2px_#fff,0_2px_6px_rgba(0,0,0,0.25)]">
          Get Started
        </button>*/}

        {/* Primary orange button */}
        <button className="inline-flex items-center justify-center gap-2.5 rounded-[10px] border border-orange-600 bg-gradient-to-b from-[#FFA03B] to-[#F97216] px-4 py-2.5 text-sm font-semibold leading-[1.5] text-white shadow-[inset_-1px_2px_1px_0px_rgba(255,255,255,0.2)] hover:from-orange-400 hover:to-[#FFA03B]">
          Book a Call
        </button>
        {/* Secondary white button */}
        <button className="inline-flex items-center justify-center gap-2.5 rounded-[10px] border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold leading-[1.5] text-slate-900 shadow-[inset_-1px_2px_1px_0px_rgba(255,255,255,0.2)]  hover:shadow-[0_0_2px_#fff,0_2px_6px_rgba(0,0,0,0.25)]">
          Get Started
        </button>
      </div>
    </Container>
  );
};

// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { Menu, X } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";
// import Container from "../shared/container";
// type NavLink = {
//   title: string;
//   href: string;
// };
// const navLinks: NavLink[] = [
//   { title: "Features", href: "#features" },
//   { title: "Pricing", href: "#pricing" },
//   { title: "About", href: "#about" },
//   { title: "Blog", href: "#blog" },
//   { title: "Changelog", href: "#changelog" },
// ];
// const primaryButton =
//   "inline-flex items-center justify-center whitespace-nowrap rounded-[10px] border border-orange-600 bg-gradient-to-b from-[#FFA03B] to-[#F97216] px-4 py-2.5 text-sm font-semibold leading-[1.5] text-white shadow-[inset_-1px_2px_1px_0px_rgba(255,255,255,0.2)] hover:from-orange-400 hover:to-[#FFA03B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2";
// const secondaryButton =
//   "inline-flex items-center justify-center whitespace-nowrap rounded-[10px] border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold leading-[1.5] text-slate-900 shadow-[inset_-1px_2px_1px_0px_rgba(255,255,255,0.2)] transition-shadow hover:shadow-[0_0_2px_#fff,0_2px_6px_rgba(203,213,225,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2";
// export default function Navbar() {
//   return (
//     <header>
//       <DesktopNav />
//       <MobileNav />
//     </header>
//   );
// }
// function Logo({ onClick }: { onClick?: () => void }) {
//   return (
//     <Link
//       href="/"
//       onClick={onClick}
//       aria-label="Notus home"
//       className="flex shrink-0 items-center gap-2"
//     >
//       <Image src="/logo.avif" alt="" width={24} height={24} />
//       <span className="text-2xl font-semibold tracking-tight text-slate-900">
//         Notus
//       </span>
//     </Link>
//   );
// }
// function ActionButtons({ onClick }: { onClick?: () => void }) {
//   return (
//     <>
//       {/* Replace these destinations with your real booking and signup URLs. */}
//       <Link href="#contact" onClick={onClick} className={primaryButton}>
//         Book a Call
//       </Link>
//       <Link href="#get-started" onClick={onClick} className={secondaryButton}>
//         Get Started
//       </Link>
//     </>
//   );
// }
// function DesktopNav() {
//   return (
//     <Container className="fixed inset-x-4 top-2 z-50 hidden items-center gap-2 rounded-2xl bg-white px-8 py-5 shadow-[0_4px_20px_rgba(39,39,39,0.05)] lg:flex">
//       <div className="flex flex-1 items-center gap-12">
//         <Logo />
//         <nav aria-label="Main navigation" className="flex items-center gap-6">
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               className="whitespace-nowrap text-sm font-medium text-neutral-600 transition-colors duration-200 hover:text-neutral-900"
//             >
//               {link.title}
//             </Link>
//           ))}
//         </nav>
//       </div>
//       <div className="flex shrink-0 items-center gap-2">
//         <ActionButtons />
//       </div>
//     </Container>
//   );
// }
// function MobileNav() {
//   const [open, setOpen] = useState(false);
//   useEffect(() => {
//     if (!open) return;
//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     function handleKeyDown(event: KeyboardEvent) {
//       if (event.key === "Escape") setOpen(false);
//     }
//     document.addEventListener("keydown", handleKeyDown);
//     return () => {
//       document.body.style.overflow = previousOverflow;
//       document.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [open]);
//   return (
//     <>
//       <Container className="relative z-50 flex items-center justify-between py-3 lg:hidden">
//         <Logo />
//         <button
//           type="button"
//           onClick={() => setOpen(true)}
//           aria-label="Open navigation menu"
//           aria-expanded={open}
//           aria-controls="mobile-navigation"
//           className="rounded-lg border border-neutral-300 p-2 text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
//         >
//           <Menu className="size-5" />
//         </button>
//       </Container>
//       <AnimatePresence>
//         {open && (
//           <motion.div
//             id="mobile-navigation"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             className="fixed inset-0 z-[60] flex h-dvh flex-col overflow-y-auto bg-white/95 px-4 py-3 backdrop-blur-xl lg:hidden"
//           >
//             <div className="flex items-center justify-between">
//               <Logo onClick={() => setOpen(false)} />
//               <button
//                 type="button"
//                 onClick={() => setOpen(false)}
//                 aria-label="Close navigation menu"
//                 className="rounded-lg border border-neutral-300 p-2 text-neutral-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
//               >
//                 <X className="size-5" />
//               </button>
//             </div>
//             <nav
//               aria-label="Mobile navigation"
//               className="my-10 flex flex-col gap-6"
//             >
//               {navLinks.map((link, index) => (
//                 <motion.div
//                   key={link.href}
//                   initial={{ opacity: 0, y: 8 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.2, delay: index * 0.05 }}
//                 >
//                   <Link
//                     href={link.href}
//                     onClick={() => setOpen(false)}
//                     className="text-xl font-medium text-neutral-600 transition-colors hover:text-neutral-900"
//                   >
//                     {link.title}
//                   </Link>
//                 </motion.div>
//               ))}
//             </nav>
//             <div className="mt-auto flex flex-wrap items-center gap-2 pb-4">
//               <ActionButtons onClick={() => setOpen(false)} />
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
