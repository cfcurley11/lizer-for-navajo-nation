import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock,
  MapPin,
  Megaphone,
  ShieldCheck,
  Users,
} from "lucide-react";
import CampaignDivider from "../components/CampaignDivider";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Events | Myron Lizer for Navajo Nation President",
  description:
    "Upcoming campaign events, chapter house meetings, community appearances, and public updates for Myron Lizer for Navajo Nation President.",
  openGraph: {
    title: "Events | Myron Lizer for Navajo Nation President",
    description:
      "Follow upcoming campaign events, chapter house visits, community meetings, and public appearances.",
    images: ["/images/myron-lizer/myron-hero-orange.jpg"],
  },
};

const featuredEvents = [
  {
    status: "Placeholder Event",
    title: "Community Listening Session",
    chapter: "Tuba City Chapter House",
    location: "Tuba City, Arizona",
    date: "Date To Be Announced",
    time: "Time To Be Announced",
    description:
      "A future community listening session focused on jobs, infrastructure, water, energy, families, and long-term prosperity.",
  },
  {
    status: "Placeholder Event",
    title: "Chapter House Meet & Greet",
    chapter: "Shiprock Chapter House",
    location: "Shiprock, New Mexico",
    date: "Date To Be Announced",
    time: "Time To Be Announced",
    description:
      "A future campaign gathering for community members to meet the campaign, ask questions, and hear more about the vision for economic sovereignty.",
  },
  {
    status: "Placeholder Event",
    title: "Community Priorities Meeting",
    chapter: "Chinle Chapter House",
    location: "Chinle, Arizona",
    date: "Date To Be Announced",
    time: "Time To Be Announced",
    description:
      "A future community meeting centered on local priorities, infrastructure needs, youth opportunity, families, and accountable leadership.",
  },
];

const eventTypes = [
  {
    icon: Users,
    title: "Chapter House Meetings",
    text: "Community-centered gatherings where local priorities, concerns, and ideas can be heard directly.",
  },
  {
    icon: Megaphone,
    title: "Campaign Announcements",
    text: "Public updates, campaign messages, media notices, and official announcements as they are approved.",
  },
  {
    icon: CalendarDays,
    title: "Community Appearances",
    text: "Future appearances at local events, community gatherings, and public campaign stops across the Navajo Nation.",
  },
];

const eventNotes = [
  {
    icon: ShieldCheck,
    title: "Campaign Approval",
    text: "All event dates, locations, times, and details should be confirmed by the campaign before being treated as official.",
  },
  {
    icon: Clock,
    title: "Updates Coming",
    text: "This page can be updated quickly as chapter visits, public events, and campaign appearances are confirmed.",
  },
  {
    icon: CheckCircle2,
    title: "Volunteer Ready",
    text: "Once events are confirmed, supporters can help with setup, outreach, sign-in, media, and follow-up.",
  },
];

export default function EventsPage() {
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
            className="object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/93 to-[#5A1E17]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_30%,rgba(255,90,54,0.25),transparent_35%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-14">
          <div>
            <Reveal>
              <Link
                href="/"
                className="inline-flex text-xs font-black uppercase tracking-[0.2em] text-[#F2E6C9]/60 transition hover:text-[#FF5A36]"
              >
                ← Back to Home
              </Link>
            </Reveal>

            <Reveal delay={0.06}>
              <p className="mt-8 text-sm font-black uppercase tracking-[0.28em] text-[#FF5A36]">
                Campaign Events
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <h1 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.95] text-[#FFF3D6] md:text-6xl lg:text-7xl">
                Chapter Visits, Community Meetings & Campaign Updates
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-6 h-1 w-28 bg-[#FF5A36]" />
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F2E6C9]/80">
                Follow upcoming campaign events, chapter house meetings,
                community appearances, and public gatherings as they are
                confirmed by the campaign.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/get-involved"
                  className="rounded bg-[#FF5A36] px-7 py-4 text-center text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.32)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
                >
                  Volunteer For Events
                </Link>

                <Link
                  href="/contact"
                  className="rounded border border-[#F2E6C9]/70 bg-[#F2E6C9] px-7 py-4 text-center text-sm font-black uppercase text-[#050505] transition hover:-translate-y-1 hover:bg-white"
                >
                  Contact Campaign
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="relative">
            <div className="absolute -bottom-8 left-8 right-8 h-28 rounded-full bg-[#FF5A36]/20 blur-3xl" />
            <div className="absolute -top-8 right-10 h-40 w-40 rounded-full bg-[#F2E6C9]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-[#F2E6C9]/15 bg-black/35 p-8 shadow-[0_35px_90px_rgba(0,0,0,0.55)] backdrop-blur">
              <div className="grid h-16 w-16 place-items-center rounded-2xl bg-[#FF5A36] text-white shadow-[0_12px_30px_rgba(255,90,54,0.28)]">
                <CalendarDays size={30} />
              </div>

              <p className="mt-7 text-sm font-black uppercase tracking-[0.22em] text-[#FF5A36]">
                Event Schedule
              </p>

              <h2 className="mt-3 text-3xl font-black uppercase leading-tight text-[#FFF3D6] md:text-4xl">
                Official Dates Coming Soon
              </h2>

              <p className="mt-5 text-base leading-8 text-[#F2E6C9]/75">
                The campaign is preparing future chapter visits, community
                meetings, and campaign events. Confirmed dates, times, and
                locations will be posted here once approved.
              </p>

              <div className="mt-7 rounded-2xl border border-[#F2E6C9]/15 bg-white/5 p-5">
                <p className="text-sm font-bold leading-7 text-[#F2E6C9]/75">
                  Placeholder events are shown below to help prepare the page
                  structure. They should not be treated as confirmed campaign
                  events until approved by the campaign team.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <CampaignDivider />
      </section>

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Upcoming Events
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                Campaign Event Placeholders
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-3xl text-base leading-8 text-black/70">
                The following sample events are included as draft placeholders
                so the campaign can quickly review, edit, replace, or approve
                upcoming chapter house appearances.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredEvents.map((event, index) => (
              <Reveal key={event.chapter} delay={index * 0.06}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-[#5A1E17]/15 bg-[#FFF3D6] p-7 shadow-[0_18px_45px_rgba(5,5,5,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/50 hover:shadow-[0_28px_70px_rgba(5,5,5,0.18)]">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FF5A36]/10 blur-2xl transition group-hover:bg-[#FF5A36]/20" />

                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-[#5A1E17] text-[#FF5A36] shadow-[0_14px_30px_rgba(90,30,23,0.22)]">
                    <MapPin size={28} />
                  </div>

                  <p className="relative mt-5 text-xs font-black uppercase tracking-[0.22em] text-[#FF5A36]">
                    {event.status}
                  </p>

                  <h3 className="relative mt-4 text-2xl font-black uppercase leading-tight text-[#050505]">
                    {event.title}
                  </h3>

                  <div className="relative mt-6 grid gap-3">
                    <div className="rounded-2xl border border-[#5A1E17]/12 bg-white/45 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#5A1E17]/50">
                        Chapter
                      </p>
                      <p className="mt-1 text-sm font-black uppercase leading-6 text-[#050505]">
                        {event.chapter}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-[#5A1E17]/12 bg-white/45 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#5A1E17]/50">
                        Location
                      </p>
                      <p className="mt-1 text-sm font-bold leading-6 text-black/70">
                        {event.location}
                      </p>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-[#5A1E17]/12 bg-white/45 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#5A1E17]/50">
                          Date
                        </p>
                        <p className="mt-1 text-sm font-bold leading-6 text-black/70">
                          {event.date}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-[#5A1E17]/12 bg-white/45 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#5A1E17]/50">
                          Time
                        </p>
                        <p className="mt-1 text-sm font-bold leading-6 text-black/70">
                          {event.time}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="relative mt-6 text-sm leading-7 text-black/68">
                    {event.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-5 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Event Types
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-[#FFF3D6] md:text-5xl">
                Ways The Campaign Can Connect With Communities
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#F2E6C9]/75">
                As the campaign schedule develops, this page can include chapter
                visits, listening sessions, meet-and-greets, public statements,
                and community events.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                href="/get-involved"
                className="mt-8 inline-flex items-center gap-2 rounded border border-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-[#FF5A36] transition hover:-translate-y-1 hover:bg-[#FF5A36] hover:text-white"
              >
                Help With Events
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-5">
            {eventTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <article className="group rounded-3xl border border-[#F2E6C9]/15 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/60 hover:bg-white/10">
                    <div className="flex gap-5">
                      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#FF5A36] text-white shadow-[0_12px_30px_rgba(255,90,54,0.24)]">
                        <Icon size={26} />
                      </div>

                      <div>
                        <h3 className="text-xl font-black uppercase leading-tight text-[#FFF3D6]">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-[#F2E6C9]/70">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Campaign Notes
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                Event Information Will Be Updated
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-base leading-8 text-black/70">
                Once the campaign confirms official events, this page can be
                updated with final dates, locations, times, contact details,
                RSVP links, maps, and volunteer assignments.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded bg-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.25)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
              >
                Submit Event Details
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {eventNotes.map((note, index) => {
              const Icon = note.icon;

              return (
                <Reveal key={note.title} delay={index * 0.06}>
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-[#5A1E17]/15 bg-[#FFF3D6] p-7 shadow-[0_18px_45px_rgba(5,5,5,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/50 hover:shadow-[0_28px_70px_rgba(5,5,5,0.18)]">
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FF5A36]/10 blur-2xl transition group-hover:bg-[#FF5A36]/20" />

                    <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-[#5A1E17] text-[#FF5A36] shadow-[0_14px_30px_rgba(90,30,23,0.22)]">
                      <Icon size={28} />
                    </div>

                    <h3 className="relative mt-6 text-lg font-black uppercase leading-tight text-[#050505]">
                      {note.title}
                    </h3>

                    <p className="relative mt-4 text-sm leading-7 text-black/65">
                      {note.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050505] px-5 py-16 text-[#FFF3D6]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,90,54,0.18),transparent_32%)]" />

        <Reveal className="relative mx-auto grid max-w-7xl gap-8 rounded-3xl border border-[#F2E6C9]/15 bg-black/35 p-8 md:grid-cols-[1fr_auto] md:items-center lg:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Stay Connected
            </p>

            <h2 className="mt-2 text-3xl font-black uppercase text-[#FFF3D6] md:text-4xl">
              Check Back For Confirmed Campaign Events
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[#F2E6C9]/75">
              Event dates and chapter house visits will be updated as the
              campaign schedule is confirmed and approved for public release.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center rounded-full bg-[#FF5A36] px-6 py-3 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.25)] transition hover:bg-[#e94b2c]"
            >
              Get Involved
            </Link>

            <Link
              href="/news"
              className="inline-flex items-center justify-center rounded-full border border-[#F2E6C9]/35 px-6 py-3 text-sm font-black uppercase text-[#FFF3D6] transition hover:border-[#FF5A36] hover:text-[#FF5A36]"
            >
              View News
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}