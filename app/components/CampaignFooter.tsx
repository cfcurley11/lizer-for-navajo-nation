import Link from "next/link";
import Image from "next/image";

const campaignLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Priorities", href: "/priorities" },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "Get Involved", href: "/get-involved" },
];

const actionLinks = [
  { label: "Donate", href: "/donate" },
  { label: "Volunteer", href: "/get-involved" },
  { label: "Latest News", href: "/news" },
  { label: "Upcoming Events", href: "/events" },
];

export default function CampaignFooter() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-[#050302] via-[#0b0504] to-[#170805] text-[#f7ecd2]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,83,56,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(247,236,210,0.08),transparent_32%)]" />

      <div className="relative mx-auto max-w-7xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.75fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-4">
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src="/images/myron-lizer/myron-lizer-logo-sign.jpg"
                  alt="Myron Lizer campaign logo"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>

              <div className="leading-tight">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ff5338]">
                  Myron Lizer
                </p>
                <p className="text-lg font-extrabold text-[#f7ecd2]">
                  For Navajo Nation President
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#f7ecd2]/70">
              Leadership rooted in service, opportunity, prosperity, and a
              stronger future for the Navajo Nation.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center rounded-full bg-[#ff5338] px-6 py-3 text-sm font-extrabold text-white shadow-lg shadow-[#ff5338]/20 transition hover:bg-[#e8462f]"
              >
                Donate
              </Link>

              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center rounded-full border border-[#f7ecd2]/20 px-6 py-3 text-sm font-extrabold text-[#f7ecd2] transition hover:border-[#ff5338]/60 hover:text-[#ff5338]"
              >
                Join the Campaign
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#ff5338]">
              Campaign
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {campaignLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-[#f7ecd2]/70 transition hover:text-[#ff5338]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-extrabold uppercase tracking-[0.24em] text-[#ff5338]">
              Take Action
            </h3>

            <div className="mt-5 flex flex-col gap-3">
              {actionLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-[#f7ecd2]/70 transition hover:text-[#ff5338]"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-7 rounded-2xl border border-[#ff5338]/15 bg-black/20 p-5">
              <p className="text-sm font-extrabold text-[#f7ecd2]">
                Stay connected with the campaign.
              </p>
              <p className="mt-2 text-sm leading-6 text-[#f7ecd2]/65">
                Follow updates, announcements, events, and opportunities to get
                involved.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#ff5338]/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-[#f7ecd2]/50 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} Myron Lizer for Navajo Nation
              President. All rights reserved.
            </p>

            <p className="text-[#f7ecd2]/45">
              Paid for by Myron Lizer for Navajo Nation President.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}