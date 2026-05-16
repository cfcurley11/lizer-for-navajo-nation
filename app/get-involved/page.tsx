import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  CalendarDays,
  Heart,
  Mail,
  MapPin,
  Megaphone,
  MessageCircle,
  Share2,
  Users,
} from "lucide-react";
import CampaignDivider from "../components/CampaignDivider";

export const metadata: Metadata = {
  title: "Get Involved | Myron Lizer for Navajo Nation President",
  description:
    "Join the Myron Lizer campaign. Volunteer, support the campaign, attend events, share updates, and help build a stronger future for the Navajo Nation.",
  openGraph: {
    title: "Get Involved | Myron Lizer for Navajo Nation President",
    description:
      "Volunteer, support the campaign, attend events, and help build a stronger future for the Navajo Nation.",
    images: ["/images/myron-lizer/myron-community-veterans.jpg"],
  },
};

const involvementOptions = [
  {
    icon: Users,
    title: "Volunteer",
    text: "Join the campaign team and help with outreach, events, calls, signs, community engagement, and local coordination.",
    cta: "Volunteer",
    href: "#volunteer-form",
  },
  {
    icon: CalendarDays,
    title: "Attend Events",
    text: "Meet the campaign, hear the message, and connect with other community members across the Navajo Nation.",
    cta: "View Events",
    href: "/events",
  },
  {
    icon: Share2,
    title: "Share the Message",
    text: "Help spread campaign updates, news coverage, events, and approved campaign content with family and community.",
    cta: "Read News",
    href: "/news",
  },
  {
    icon: Heart,
    title: "Support the Campaign",
    text: "Support campaign outreach, travel, media, events, and communication efforts as the campaign moves forward.",
    cta: "Donate",
    href: "/donate",
  },
];

const waysToHelp = [
  "Host or support a community meet-and-greet",
  "Help with voter outreach and phone calls",
  "Share official campaign announcements",
  "Invite family and community members to events",
  "Assist with signs, flyers, and local visibility",
  "Help connect the campaign with chapter/community contacts",
];

export default function GetInvolvedPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#FFF3D6]">
      <section className="relative overflow-hidden bg-[#050505] pt-20 text-[#FFF3D6] lg:pt-24">
        <div className="absolute inset-0">
<Image
  src="/images/myron-lizer/hero-dark-texture.png"
  alt=""
  fill
  priority
  loading="eager"
  sizes="100vw"
  className="object-cover opacity-45"
/>

          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 to-[#5A1E17]/45" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(255,90,54,0.24),transparent_34%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-14">
          <div>
            <Link
              href="/"
              className="inline-flex text-xs font-black uppercase tracking-[0.2em] text-[#F2E6C9]/60 transition hover:text-[#FF5A36]"
            >
              ← Back to Home
            </Link>

            <p className="mt-8 text-sm font-black uppercase tracking-[0.28em] text-[#FF5A36]">
              Get Involved
            </p>

            <h1 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.95] text-[#FFF3D6] md:text-6xl lg:text-7xl">
              Join The Campaign
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#F2E6C9]/78">
              This campaign is powered by people who believe in leadership,
              opportunity, growth, and a stronger future for the Navajo Nation.
              Sign up, show up, and help carry the message forward.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#volunteer-form"
                className="rounded bg-[#FF5A36] px-7 py-4 text-center text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.32)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
              >
                Sign Up To Help
              </Link>

              <Link
                href="/donate"
                className="rounded border border-[#F2E6C9]/70 bg-[#F2E6C9] px-7 py-4 text-center text-sm font-black uppercase text-[#050505] transition hover:-translate-y-1 hover:bg-white"
              >
                Support The Campaign
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -bottom-8 left-8 right-8 h-28 rounded-full bg-[#FF5A36]/20 blur-3xl" />
            <div className="absolute -top-8 right-10 h-40 w-40 rounded-full bg-[#F2E6C9]/10 blur-3xl" />

            <Image
  src="/images/myron-lizer/myron-community-veterans.jpg"
  alt="Myron Lizer with community members and veterans"
  width={900}
  height={650}
  priority
  loading="eager"
  className="relative h-[360px] w-full rounded-3xl border border-[#F2E6C9]/20 object-cover object-[center_30%] shadow-[0_35px_90px_rgba(0,0,0,0.55)] lg:h-[480px]"
/>
          </div>
        </div>

        <CampaignDivider />
      </section>

      <section className="bg-[#050505] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Take Action
            </p>

            <h2 className="mt-2 text-3xl font-black uppercase text-[#FFF3D6] md:text-4xl">
              Ways To Get Involved
            </h2>

            <p className="mt-4 text-base leading-7 text-[#F2E6C9]/70">
              Whether you can volunteer your time, attend an event, share
              official updates, or support campaign outreach, every effort helps
              move the campaign forward.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {involvementOptions.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group flex h-full flex-col rounded-2xl border border-[#F2E6C9]/15 bg-white/5 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/60 hover:bg-white/[0.07]"
                >
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[#FF5A36] text-white shadow-[0_12px_35px_rgba(255,90,54,0.25)]">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-black uppercase text-[#FFF3D6]">
                    {item.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-[#F2E6C9]/70">
                    {item.text}
                  </p>

                  <Link
                    href={item.href}
                    className="mt-6 inline-flex text-sm font-black uppercase text-[#FF5A36] transition hover:text-[#F2E6C9]"
                  >
                    {item.cta} →
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Community Powered
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
              Help Carry The Message Forward
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-black/70">
              Campaigns grow through relationships, conversations, and people
              willing to serve. Your time and voice can help reach families,
              communities, and chapters across the Navajo Nation.
            </p>

            <Link
              href="#volunteer-form"
              className="mt-8 inline-flex rounded bg-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.25)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
            >
              I Want To Help
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {waysToHelp.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#5A1E17]/20 bg-[#FFF3D6] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex gap-4">
                  <div className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[#5A1E17] text-[#FF5A36]">
                    <Megaphone size={18} />
                  </div>

                  <p className="text-sm font-bold leading-7 text-black/75">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="volunteer-form"
        className="relative overflow-hidden bg-[#050505] px-5 py-20"
      >
        <div className="absolute inset-0">
 <Image
  src="/images/myron-lizer/hero-dark-texture.png"
  alt=""
  fill
  loading="eager"
  sizes="100vw"
  className="object-cover opacity-25"
/>

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,90,54,0.18),transparent_32%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Volunteer Form
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-[#FFF3D6] md:text-5xl">
              Sign Up To Get Involved
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-[#F2E6C9]/75">
              Submit your information and the campaign team can follow up with
              opportunities to help, attend events, support outreach, or connect
              with local campaign activity.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-[#F2E6C9]/15 bg-white/5 p-5">
                <div className="flex gap-4">
                  <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#FF5A36]" />
                  <div>
                    <h3 className="font-black uppercase text-[#FFF3D6]">
                      Local Outreach
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#F2E6C9]/65">
                      Let the campaign know where you are located and how you
                      may be able to help in your area.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#F2E6C9]/15 bg-white/5 p-5">
                <div className="flex gap-4">
                  <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-[#FF5A36]" />
                  <div>
                    <h3 className="font-black uppercase text-[#FFF3D6]">
                      Campaign Follow-Up
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#F2E6C9]/65">
                      The campaign can review submissions and follow up with
                      approved next steps.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <form
            action="https://formspree.io/f/mwvygwby"
            method="POST"
            className="rounded-3xl border border-[#F2E6C9]/15 bg-black/35 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.45)] backdrop-blur md:p-8"
          >
            <input
              type="hidden"
              name="_subject"
              value="New Get Involved Submission - Myron Lizer Campaign"
            />
<input
  type="hidden"
  name="_next"
  value="https://www.lizerfornavajonation.com/thank-you"
/>
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="firstName"
                  className="text-xs font-black uppercase tracking-[0.18em] text-[#FF5A36]"
                >
                  First Name
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-[#F2E6C9]/15 bg-white/10 px-4 py-3 text-[#FFF3D6] outline-none transition placeholder:text-[#F2E6C9]/35 focus:border-[#FF5A36]"
                  placeholder="First name"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="text-xs font-black uppercase tracking-[0.18em] text-[#FF5A36]"
                >
                  Last Name
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-[#F2E6C9]/15 bg-white/10 px-4 py-3 text-[#FFF3D6] outline-none transition placeholder:text-[#F2E6C9]/35 focus:border-[#FF5A36]"
                  placeholder="Last name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-xs font-black uppercase tracking-[0.18em] text-[#FF5A36]"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="_replyto"
                  type="email"
                  required
                  className="mt-2 w-full rounded-xl border border-[#F2E6C9]/15 bg-white/10 px-4 py-3 text-[#FFF3D6] outline-none transition placeholder:text-[#F2E6C9]/35 focus:border-[#FF5A36]"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="text-xs font-black uppercase tracking-[0.18em] text-[#FF5A36]"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  className="mt-2 w-full rounded-xl border border-[#F2E6C9]/15 bg-white/10 px-4 py-3 text-[#FFF3D6] outline-none transition placeholder:text-[#F2E6C9]/35 focus:border-[#FF5A36]"
                  placeholder="Phone number"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="community"
                  className="text-xs font-black uppercase tracking-[0.18em] text-[#FF5A36]"
                >
                  Community / Location
                </label>
                <input
                  id="community"
                  name="community"
                  type="text"
                  required
                  className="mt-2 w-full rounded-xl border border-[#F2E6C9]/15 bg-white/10 px-4 py-3 text-[#FFF3D6] outline-none transition placeholder:text-[#F2E6C9]/35 focus:border-[#FF5A36]"
                  placeholder="Chapter, city, or community"
                />
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="interest"
                  className="text-xs font-black uppercase tracking-[0.18em] text-[#FF5A36]"
                >
                  How would you like to help?
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  className="mt-2 w-full rounded-xl border border-[#F2E6C9]/15 bg-[#1a0d0a] px-4 py-3 text-[#FFF3D6] outline-none transition focus:border-[#FF5A36]"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an option
                  </option>
                  <option value="volunteer">Volunteer</option>
                  <option value="events">Help with events</option>
                  <option value="outreach">Community outreach</option>
                  <option value="signs">Signs / visibility</option>
                  <option value="share">Share campaign updates</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="text-xs font-black uppercase tracking-[0.18em] text-[#FF5A36]"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-xl border border-[#F2E6C9]/15 bg-white/10 px-4 py-3 text-[#FFF3D6] outline-none transition placeholder:text-[#F2E6C9]/35 focus:border-[#FF5A36]"
                  placeholder="Tell the campaign how you would like to help."
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded bg-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.28)] transition hover:-translate-y-1 hover:bg-[#e94b2c] md:w-auto"
            >
              <Mail size={18} />
              Submit Interest
            </button>

            <p className="mt-4 text-xs leading-6 text-[#F2E6C9]/50">
              This temporary form will be routed through Formspree until the
              campaign email account is finalized.
            </p>
          </form>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#5A1E17] px-5 py-16 text-[#FFF3D6]">
        <div className="absolute inset-0 opacity-20">
 <Image
  src="/images/myron-lizer/hero-dark-texture.png"
  alt=""
  fill
  loading="eager"
  sizes="100vw"
  className="object-cover"
/>

        </div>

        <div className="relative mx-auto grid max-w-7xl gap-8 rounded-3xl border border-[#F2E6C9]/15 bg-black/25 p-8 md:grid-cols-[1fr_auto] md:items-center lg:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Stay Connected
            </p>

            <h2 className="mt-2 text-3xl font-black uppercase text-[#FFF3D6] md:text-4xl">
              Be Part Of The Campaign
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[#F2E6C9]/75">
              Follow campaign news, attend upcoming events, and help share the
              message of leadership, opportunity, and growth.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Link
              href="/news"
              className="inline-flex items-center justify-center rounded-full border border-[#F2E6C9]/35 px-6 py-3 text-sm font-black uppercase text-[#FFF3D6] transition hover:border-[#FF5A36] hover:text-[#FF5A36]"
            >
              Latest News
            </Link>

            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF5A36] px-6 py-3 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.25)] transition hover:bg-[#e94b2c]"
            >
              <CalendarDays size={17} />
              View Events
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}