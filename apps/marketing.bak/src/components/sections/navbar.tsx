"use client";

import React, { useState } from "react";

import Container from "../shared/container";
import Link from "next/link";
import Image from "next/image";

import { Menu, MoonIcon, Sun, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "cn";

import { useTheme } from "next-themes";
import { Button } from "@repo/ui/button";

type NavLinksTypes = {
  title: string;
  href: string;
};
const navLinks: NavLinksTypes[] = [
  {
    title: "Pricing",
    href: "#pricing",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Careers",
    href: "#careers",
  },
  {
    title: "Blog",
    href: "#blog",
  },
];

const Navbar = () => {
  return (
    <div className="border-b border-neutral-200 dark:border-neutral-800">
      <DesktopNav />
      <MobileNav />
    </div>
  );
};

export default Navbar;

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2 text-sm", className)}>
      {/*<LogoIcon />*/}
      <Image src="/logo.avif" alt="logo" width={24} height={24} />
      <p className="text-2xl">Notus</p>
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
  const { resolvedTheme, setTheme } = useTheme();
  const SWITCH_THEME = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };
  return (
    <Container className=" hidden lg:flex items-center justify-between py-4 ">
      <Logo />
      <div className="flex items-center gap-10  text-md text-neutral-400 font-light tracking-tight">
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
      <div className="flex items-center gap-4 relative">
        <button
          className="size-4 flex items-center justify-center p-4 rounded-lg"
          onClick={SWITCH_THEME}
        >
          <Sun className="absolute size-4  dark:scale-0 scale-100 dark:rotate-45 transition-all duration-200" />
          <MoonIcon className="absolute size-4  dark:scale-100 scale-0 dark:rotate-0 rotate-45 transition-all duration-300" />
        </button>
        <Button className={"font-medium px-6 py-5"}>Start Building</Button>
      </div>
    </Container>
  );
};
