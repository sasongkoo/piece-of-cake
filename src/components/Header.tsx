"use client";

import { useState } from "react";
import { site, waLink } from "@/data/site";

const links = [
  { href: "#layanan", label: "Layanan" },
  { href: "#cara-kerja", label: "Cara kerja" },
  { href: "#event", label: "Event" },
  { href: "#order", label: "Order" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07060c]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#beranda" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-fuchsia-500 text-sm font-black text-white shadow-[0_0_24px_rgba(217,70,239,0.55)]">
            J
          </span>
          <span className="font-display text-lg font-bold tracking-tight">
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-sm text-white/70 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={waLink()}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-full bg-lime-300 px-4 py-2 text-sm font-semibold text-black transition hover:bg-lime-200 md:inline-flex"
        >
          Chat WhatsApp
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          aria-expanded={open}
        >
          <span className="flex w-4 flex-col gap-1">
            <span className="block h-0.5 w-4 bg-white" />
            <span className="block h-0.5 w-4 bg-white" />
            <span className="block h-0.5 w-4 bg-white" />
          </span>
        </button>
      </div>

      {open ? (
        <nav className="flex flex-col gap-3 border-t border-white/10 px-5 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/80"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={waLink()}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-lime-300 px-4 py-2 text-center text-sm font-semibold text-black"
          >
            Chat WhatsApp
          </a>
        </nav>
      ) : null}
    </header>
  );
}
