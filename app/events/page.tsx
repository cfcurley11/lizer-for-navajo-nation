import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  CalendarDays,
  Clock,
  MapPin,
  Megaphone,
  Users,
  HeartHandshake,
  Mail,
  ArrowRight,
} from "lucide-react";
import CampaignDivider from "../components/CampaignDivider";

export const metadata: Metadata = {
  title: "Events | Myron Lizer for Navajo Nation President",
  description:
    "View upcoming campaign events, community visits, meet-and-greets, rallies, and opportunities to connect with the Myron Lizer campaign.",
  openGraph: {
    title: "Events | Myron Lizer for Navajo Nation President",
    description:
      "Upcoming campaign events, community visits, meet-and-greets, rallies, and opportunities to connect with the campaign.",
    images: ["/images/myron-lizer/myron-community-veterans.jpg"],
  },
};

const upcomingEvents = [
  {
    date: "May 24",
    month: "May",
    day: "24",
    title: "Window Rock Community Meet & Greet",
    location: "Window Rock, AZ",
    time: "Time To Be Announced",
    description:
      "Join the campaign for a community meet-and-greet focused on listening, conversation, and sharing the campaign message.",
    type: "Community Event",
  },
  {
    date: "May 31",
    month: "May",
    day: "31",
    title: "Shiprock Chapter Visit",
    location: "Shiprock, NM",
    time: "Time To Be Announced",
    description:
      "A campaign visit to connect with families, local leaders, business owners, and community members in the Shiprock area.",
    type: "Chapter Visit",
  },
  {
    date: "Jun 07",
    month: "Jun",
    day: "07",
    title: "Gallup Campaign Rally",
    location: "Gallup, NM",
    time: "Time To Be Announced",
    description:
      "A campaign rally bringing supporters together around leadership, opportunity, growth, and long-term prosperity.",
    type: "Campaign Rally",
  },
];

const eventSupportItems = [
  {
    icon: Users,
    title: "Attend An Event",
    text: "Meet the campaign, hear the message, and connect with supporters in your area.",
  },
  {
    icon: Megaphone,
    title: "Help Promote",
    text: "Share official event announcements with family, friends, chapters, and community networks.",
  },
  {
    icon: HeartHandshake,
    title: "Volunteer On Site",
    text: "Assist with event setup, greeting attendees, signs, outreach, and local coordination.",
  },
  {
    icon: Mail,
    title: "Request Information",
    text: "Contact the campaign to ask about upcoming events, hosting opportunities, or ways to help.",
  },
];

const eventNotes = [
  "Event dates, times, and locations should be confirmed by the campaign team before publication.",
  "Additional campaign events will be added as the official schedule is released.",
  "Supporters can use the Get Involved form to volunteer for event support and local outreach.",
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/92 to-[#5A1E17]/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(255,90,54,0.26),transparent_35%)]" />
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
              Campaign Events
            </p>

            <h1 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.95] text-[#FFF3D6] md:text-6xl lg:text-7xl">
              Meet The Campaign
            </h1>

            <div className="mt-6 h-1 w-28 bg-[#FF5A36]" />

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F2E6C9]/80">
              Join Myron Lizer and the campaign team at upcoming community
              events, chapter visits, meet-and-greets, rallies, and outreach
              opportunities across the Navajo Nation.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#upcoming-events"
                className="rounded bg-[#FF5A36] px-7 py-4 text-center text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.32)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
              >
                View Upcoming Events
              </Link>

              <Link
                href="/get-involved"
                className="rounded border border-[#F2E6C9]/70 bg-[#F2E6C9] px-7 py-4 text-center text-sm font-black uppercase text-[#050505] transition hover:-translate-y-1 hover:bg-white"
              >
                Help With Events
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
              height={700}
              priority
              loading="eager"
              className="relative h-[380px] w-full rounded-3xl border border-[#F2E6C9]/20 object-cover object-[center_30%] shadow-[0_35px_90px_rgba(0,0,0,0.55)] lg:h-[520px]"
            />
          </div>
        </div>

        <CampaignDivider />
      </section>

      <section
        id="upcoming-events"
        className="bg-[#F2E6C9] px-5 py-20 text-[#050505]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Upcoming Events
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
              Campaign Schedule
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-black/70">
              These event listings are ready to be updated with official dates,
              times, locations, and details from the campaign team. Once the
              strategy package is approved, this page can become the central hub
              for upcoming campaign activity.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <article
                key={event.title}
                className="overflow-hidden rounded-3xl border border-[#5A1E17]/20 bg-[#FFF3D6] shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between bg-[#5A1E17] p-6 text-[#FFF3D6]">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FF5A36]">
                      {event.month}
                    </p>
                    <p className="mt-1 text-5xl font-black leading-none">
                      {event.day}
                    </p>
                  </div>

                  <div className="rounded-full border border-[#F2E6C9]/20 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#F2E6C9]">
                    {event.type}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-black uppercase leading-tight text-[#050505]">
                    {event.title}
                  </h3>

                  <div className="mt-5 grid gap-3">
                    <p className="flex items-center gap-3 text-sm font-bold text-black/68">
                      <MapPin className="h-4 w-4 shrink-0 text-[#FF5A36]" />
                      {event.location}
                    </p>

                    <p className="flex items-center gap-3 text-sm font-bold text-black/68">
                      <Clock className="h-4 w-4 shrink-0 text-[#FF5A36]" />
                      {event.time}
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-black/65">
                    {event.description}
                  </p>

                  <Link
                    href="/get-involved"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase text-[#FF5A36] transition hover:text-[#5A1E17]"
                  >
                    Help With This Event <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative">
            <div className="absolute -bottom-6 left-8 h-32 w-32 rounded-full bg-[#FF5A36]/25 blur-3xl" />

            <Image
              src="/images/myron-lizer/myron-about-speaking.jpg"
              alt="Myron Lizer speaking at a campaign event"
              width={900}
              height={700}
              className="relative h-[460px] w-full rounded-3xl border border-[#F2E6C9]/20 object-cover object-[center_28%] shadow-[0_35px_90px_rgba(0,0,0,0.55)] lg:h-[560px]"
            />
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Community Connection
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-[#FFF3D6] md:text-5xl">
              Events Built Around Listening & Engagement
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#F2E6C9]/80">
              Campaign events are opportunities to listen, answer questions,
              share priorities, and connect directly with families, chapters,
              business owners, veterans, elders, youth, and community leaders.
            </p>

            <div className="mt-8 grid gap-4">
              {eventNotes.map((note) => (
                <div
                  key={note}
                  className="rounded-xl border border-[#F2E6C9]/15 bg-white/5 p-5 transition hover:border-[#FF5A36]/50 hover:bg-white/10"
                >
                  <div className="flex gap-4">
                    <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-[#FF5A36]" />
                    <p className="text-sm font-bold leading-7 text-[#F2E6C9]/72">
                      {note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/get-involved"
              className="mt-10 inline-flex rounded bg-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.3)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
            >
              Volunteer For Events
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Event Support
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
              Help The Campaign Show Up Strong
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-black/70">
              Supporters can help make campaign events successful by attending,
              inviting others, sharing approved announcements, and volunteering
              with local coordination.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {eventSupportItems.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#5A1E17]/20 bg-[#FFF3D6] p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#5A1E17] text-[#FF5A36]">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-lg font-black uppercase text-[#050505]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/65">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#5A1E17] px-5 py-20 text-[#FFF3D6]">
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

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Host Or Support An Event
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-5xl">
              Bring The Campaign To Your Community
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#F2E6C9]/80">
              Community members can help by requesting information, helping
              coordinate local outreach, or connecting the campaign with
              chapter and community contacts.
            </p>
          </div>

          <div className="grid gap-5">
            {[
              "Request a community visit or campaign stop",
              "Help coordinate a local meet-and-greet",
              "Invite friends, family, and community members",
              "Share upcoming event details once approved by the campaign",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#F2E6C9]/15 bg-black/25 p-5 transition hover:border-[#FF5A36]/60 hover:bg-black/40"
              >
                <div className="flex gap-4">
                  <Megaphone className="mt-1 h-5 w-5 shrink-0 text-[#FF5A36]" />
                  <p className="text-sm font-bold leading-7 text-[#F2E6C9]/75">
                    {item}
                  </p>
                </div>
              </div>
            ))}

            <Link
              href="/get-involved"
              className="mt-2 inline-flex w-full items-center justify-center rounded bg-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.25)] transition hover:-translate-y-1 hover:bg-[#e94b2c] sm:w-auto"
            >
              Contact The Campaign
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050505] px-5 py-16 text-[#FFF3D6]">
        <div className="absolute inset-0">
          <Image
            src="/images/myron-lizer/hero-dark-texture.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,90,54,0.18),transparent_32%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-8 rounded-3xl border border-[#F2E6C9]/15 bg-black/35 p-8 md:grid-cols-[1fr_auto] md:items-center lg:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Stay Connected
            </p>

            <h2 className="mt-2 text-3xl font-black uppercase text-[#FFF3D6] md:text-4xl">
              Follow Upcoming Campaign Events
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[#F2E6C9]/75">
              Check back for official campaign events, rally dates, chapter
              visits, and community outreach announcements.
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
              href="/get-involved"
              className="inline-flex items-center justify-center rounded-full bg-[#FF5A36] px-6 py-3 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.25)] transition hover:bg-[#e94b2c]"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}