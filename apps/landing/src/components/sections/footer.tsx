import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "Changelog", href: "#changelog" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#privacy" },
      { label: "Terms", href: "#terms" },
      { label: "Cookies", href: "#cookies" },
    ],
  },
];

const socialLinks = [
  { label: "X", href: "https://x.com" },
  { label: "Threads", href: "https://threads.net", mark: "@" },
  { label: "LinkedIn", href: "https://linkedin.com", mark: "in" },
];

const Footer = () => {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 text-neutral-800">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between gap-6 border-b border-neutral-200 pb-5">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight transition-opacity hover:opacity-70"
          >
            Perplx
          </Link>

          <div className="flex items-center gap-2 text-xs text-neutral-500">
            <span className="mr-1 hidden sm:inline">Social media</span>
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="flex size-7 items-center justify-center rounded-sm border border-neutral-200 bg-white font-semibold text-neutral-600 transition-colors hover:border-backy hover:text-backy"
              >
                {social.mark ?? social.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[minmax(0,2fr)_repeat(3,minmax(0,1fr))] lg:gap-8">
          <p className="max-w-xs text-sm leading-5 text-neutral-500">
            Build, deploy, and manage AI-powered workflows that help your team
            do their best work.
          </p>

          {footerGroups.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="text-sm font-semibold text-neutral-800">
                {group.title}
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-neutral-600">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-backy"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="relative min-h-52 overflow-hidden sm:min-h-60">
          <p
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-7 left-0 select-none text-[clamp(5.5rem,17vw,13rem)] font-semibold leading-none tracking-tighter text-backy/6 text-center w-full"
          >
            Perplx
          </p>

          <div className="relative z-10 flex min-h-52 flex-col justify-between gap-8 pb-1 sm:min-h-60 sm:flex-row sm:items-end">
            <p className="text-xs text-neutral-500">
              © {new Date().getFullYear()} Perplx. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
              <Link
                href="#terms"
                className="text-xs font-medium text-neutral-700 transition-colors hover:text-backy"
              >
                Terms &amp; conditions
              </Link>
              <Link
                href="#get-started"
                className="inline-flex items-center gap-2 rounded-md bg-blacky px-4 py-2.5 text-xs font-semibold text-white transition-opacity hover:opacity-85"
              >
                Get Perplx
                <ArrowUpRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
