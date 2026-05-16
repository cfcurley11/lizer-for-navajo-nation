"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Priorities", href: "/priorities" },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Get Involved", href: "/get-involved" },
];

export default function CampaignHeader() {
  const [open, setOpen] = useState<boolean>(false);

  return (
   <header className="fixed left-0 top-0 z-50 w-full border-b border-[#ff5338]/10 bg-gradient-to-r from-[#050302]/95 via-[#0b0504]/95 to-[#170805]/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-4">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
            <Image
              src="/images/myron-lizer/myron-lizer-logo-sign.jpg"
              alt="Myron Lizer campaign logo"
              fill
              sizes="56px"
              className="object-contain"
              priority
            />
          </div>

          <div className="leading-tight">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ff5338]">
              Myron Lizer
            </p>
            <p className="text-base font-extrabold text-[#f7ecd2] sm:text-lg">
              For Navajo Nation President
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-[#f7ecd2]/85 transition hover:text-[#ff5338]"
            >
              {link.label}
            </Link>
          ))}

 <Link
  href="/donate"
  className="rounded-full bg-[#ff5338] px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#ff5338]/20 transition hover:bg-[#e8462f]"
>
  Donate
</Link>

        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#f7ecd2]/20 text-[#f7ecd2] lg:hidden"
          aria-label="Toggle campaign menu"
        >
          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-6 bg-current transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 h-0.5 w-6 bg-current transition ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

{open && (
  <div className="border-t border-[#ff5338]/10 bg-[#070403] px-5 py-5 lg:hidden">
    <nav className="mx-auto flex max-w-7xl flex-col gap-2">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() => setOpen(false)}
          className="rounded-xl px-4 py-3 text-base font-bold text-[#f7ecd2]/90 transition hover:bg-white/10 hover:text-[#ff5338]"
        >
          {link.label}
        </Link>
      ))}

      <Link
        href="/donate"
        onClick={() => setOpen(false)}
        className="mt-3 rounded-full bg-[#ff5338] px-5 py-3 text-center text-base font-extrabold text-white shadow-lg shadow-[#ff5338]/20 transition hover:bg-[#e8462f]"
      >
        Donate
      </Link>
    </nav>
  </div>
)}
    </header>
  );
}