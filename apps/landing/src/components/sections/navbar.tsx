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
import FlipButtonText from "../shared/flip-button-text";

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
      <p className="text-lg font-semibold">Perplx</p>
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

            <div className="flex items-center gap-4  mt-auto">
              <FlipButtonText text="How it works" className="flex-1" />
              <FlipButtonText
                text="Book a Call"
                variant="orange"
                className="flex-1"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

const DesktopNav = () => {
  return (
    <Container className="fixed inset-x-4 top-4 z-50 hidden items-center gap-2 rounded-lg bg-white px-8 py-4 shadow-[0_4px_20px_rgba(39,39,39,0.05)] lg:flex">
      <div className="flex flex-1 items-center gap-12">
        <Logo />
        <div className="flex items-center gap-6 text-sm text-gray-700/90 font-light tracking-tight ">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative py-1 hover:text-neutral-700 dark:hover:text-neutral-200 transition-all duration-200 ease-in"
            >
              {link.title}
              <span className="absolute inset-x-0 -bottom-1 h-px origin-left scale-x-0 bg-orange-400 transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 relative">
        {/* Secondary white button */}
        <FlipButtonText text="How it works" />
        <FlipButtonText text="Book a Call" variant="orange" />
      </div>
    </Container>
  );
};
