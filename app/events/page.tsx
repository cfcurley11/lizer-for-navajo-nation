import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  MapPin,
  Megaphone,
  Radio,
  ShieldCheck,
  Users,
} from "lucide-react";
import CampaignDivider from "../components/CampaignDivider";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Events | Myron Lizer for Navajo Nation President",
  description:
    "Upcoming campaign events, community appearances, public forums, and campaign updates for Myron Lizer for Navajo Nation President.",
  openGraph: {
    title: "Events | Myron Lizer for Navajo Nation President",
    description:
      "Follow upcoming campaign events, community appearances, public forums, and campaign updates.",
    images: ["/images/myron-lizer/myron-hero-orange.jpg"],
  },
};

const featuredEvents = [
  {
    status: "Pending Confirmation",
    title: "Navajo Nation PRCA Pro Rodeo",
    eventType: "Public Meet & Greet",
    location: "Window Rock Fairgrounds Rodeo Arena",
    date: "May 29-31, 2026",
    time: "Time To Be Announced",
    description:
      "Myron Lizer is scheduled to meet and greet members of the public during the Navajo Nation PRCA Pro Rodeo weekend.",
  },
  {
    status: "Pending Confirmation",
    title: "Navajo Treaty Day",
    eventType: "Community Appearance",
    location: "Fort Defiance, Arizona",
    date: "Monday, June 1, 2026",
    time: "Time To Be Announced",
    description:
      "Myron Lizer is scheduled to be set up in Fort Defiance, Arizona, for Navajo Treaty Day. Additional location details will be announced once confirmed.",
  },
];

const forumFlyers = [
  {
    status: "Public Forum",
    title: "Navajo Nation Presidential Candidates Forum",
    subtitle: "Shiprock Candidate Forum",
    image: "/images/myron-lizer/prez-forum-sr.jpg",
    date: "Thursday, June 18, 2026",
    time: "5:00–8:00 PM MDT",
    location: "Phil L. Thomas Performing Arts Center",
    address: "Next to Shiprock High School, Shiprock, New Mexico",
    description:
      "Hear directly from the Navajo Nation presidential candidates. The event will be broadcast live on KNDN, KGAK, and KNDN FM.",
  },
  {
    status: "Public Forum",
    title: "Forum On The Navajo Economy",
    subtitle: "Presidential Forum",
    image: "/images/myron-lizer/prez-forum-econo.jpg",
    date: "Friday, July 17, 2026",
    time: "5:00–8:30 PM",
    location: "Twin Arrows Ballroom",
    address: "Open to the public",
    description:
      "A public presidential forum focused on the Navajo economy and issues important to the future of the Navajo Nation.",
  },
];

const eventTypes = [
  {
    icon: Users,
    title: "Community Events",
    text: "Public opportunities to meet Myron, hear campaign updates, and connect with the campaign team.",
  },
  {
    icon: Megaphone,
    title: "Campaign Announcements",
    text: "Public updates, campaign messages, media notices, and official announcements as they are approved.",
  },
  {
    icon: CalendarDays,
    title: "Interviews & Appearances",
    text: "Media interviews, community appearances, virtual events, and public campaign stops across the Navajo Nation.",
  },
];

const campaignNotes = [
  {
    icon: ShieldCheck,
    title: "Confirmed Updates",
    text: "Campaign events, appearances, and forum details will be shared here as information is approved for public release.",
  },
  {
    icon: Radio,
    title: "Public Forums",
    text: "Voters are encouraged to attend, listen, ask questions, and stay informed on the issues facing the Navajo Nation.",
  },
  {
    icon: CheckCircle2,
    title: "Get Involved",
    text: "Supporters can help with outreach, event support, voter engagement, and sharing campaign information with their communities.",
  },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#FFF3D6]">
      {/* HERO */}
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
              <h1 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[#FFF3D6] md:text-6xl lg:text-7xl">
                Events, Forums & Campaign Updates
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-6 h-1 w-28 bg-[#FF5A36]" />
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F2E6C9]/80">
                Follow upcoming campaign events, community appearances, public
                forums, and opportunities to meet Myron Lizer across the Navajo
                Nation.
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
                  href="/watch"
                  className="rounded border border-[#F2E6C9]/70 bg-[#F2E6C9] px-7 py-4 text-center text-sm font-black uppercase text-[#050505] transition hover:-translate-y-1 hover:bg-white"
                >
                  Watch Interviews
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
                Upcoming Public Appearances
              </h2>

              <p className="mt-5 text-base leading-8 text-[#F2E6C9]/75">
                The campaign is preparing public appearances, forums, and
                community events. Completed interviews and media appearances are
                now available on the Watch page.
              </p>

              <div className="mt-7 rounded-2xl border border-[#F2E6C9]/15 bg-white/5 p-5">
                <p className="text-sm font-bold leading-7 text-[#F2E6C9]/75">
                  Check this page for public forums, event notices, broadcast
                  information, and opportunities to connect with the campaign.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <CampaignDivider />
      </section>

      {/* UPCOMING EVENTS */}
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
                Upcoming Campaign Events
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-3xl text-base leading-8 text-black/70">
                Upcoming campaign events, public appearances, and community
                stops will be shared here as the campaign schedule develops.
              </p>
            </Reveal>
          </div>

          <div className="grid items-stretch gap-6 lg:grid-cols-2">
            {featuredEvents.map((event, index) => (
              <Reveal key={`${event.title}-${event.date}`} delay={index * 0.06}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#5A1E17]/15 bg-[#FFF3D6] p-7 shadow-[0_18px_45px_rgba(5,5,5,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/50 hover:shadow-[0_28px_70px_rgba(5,5,5,0.18)]">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FF5A36]/10 blur-2xl transition group-hover:bg-[#FF5A36]/20" />

                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-[#5A1E17] text-[#FF5A36] shadow-[0_14px_30px_rgba(90,30,23,0.22)]">
                    <MapPin size={28} />
                  </div>

                  <p className="relative mt-5 inline-flex w-fit rounded bg-[#FF5A36] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[0_10px_25px_rgba(255,90,54,0.22)]">
                    {event.status}
                  </p>

                  <h3 className="relative mt-5 text-2xl font-black uppercase leading-tight text-[#050505]">
                    {event.title}
                  </h3>

                  <div className="relative mt-6 grid gap-3">
                    <div className="rounded-2xl border border-[#5A1E17]/12 bg-white/45 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#5A1E17]/50">
                        Event Type
                      </p>
                      <p className="mt-1 text-sm font-black uppercase leading-6 text-[#050505]">
                        {event.eventType}
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

      {/* FEATURED FORUMS */}
      <section className="bg-[#050505] px-5 py-20 text-[#FFF3D6]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Featured Forums
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-[#FFF3D6] md:text-5xl">
                Presidential Forums & Public Events
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#F2E6C9]/75">
                Upcoming public forums, event flyers, broadcast information, and
                opportunities to hear directly from the candidates.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {forumFlyers.map((forum, index) => (
              <Reveal key={forum.title} delay={index * 0.08}>
                <article className="group h-full overflow-hidden rounded-3xl border border-[#F2E6C9]/15 bg-white/[0.06] shadow-[0_24px_70px_rgba(0,0,0,0.24)] transition hover:-translate-y-2 hover:border-[#FF5A36]/55">
                  <div className="relative min-h-[520px] overflow-hidden bg-black sm:min-h-[640px]">
                    <Image
                      src={forum.image}
                      alt={forum.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-contain p-4 transition duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="p-8">
                    <p className="inline-flex rounded bg-[#FF5A36] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                      {forum.status}
                    </p>

                    <p className="mt-5 text-sm font-black uppercase tracking-[0.22em] text-[#FF5A36]">
                      {forum.subtitle}
                    </p>

                    <h3 className="mt-3 text-2xl font-black uppercase leading-tight text-[#FFF3D6]">
                      {forum.title}
                    </h3>

                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-[#F2E6C9]/12 bg-black/25 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#F2E6C9]/45">
                          Date
                        </p>
                        <p className="mt-1 text-sm font-bold leading-6 text-[#F2E6C9]/78">
                          {forum.date}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-[#F2E6C9]/12 bg-black/25 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#F2E6C9]/45">
                          Time
                        </p>
                        <p className="mt-1 text-sm font-bold leading-6 text-[#F2E6C9]/78">
                          {forum.time}
                        </p>
                      </div>
                    </div>

                    <div className="mt-3 rounded-2xl border border-[#F2E6C9]/12 bg-black/25 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#F2E6C9]/45">
                        Location
                      </p>
                      <p className="mt-1 text-sm font-bold leading-6 text-[#F2E6C9]/78">
                        {forum.location}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#F2E6C9]/58">
                        {forum.address}
                      </p>
                    </div>

                    <p className="mt-6 text-base leading-8 text-[#F2E6C9]/70">
                      {forum.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT TYPES */}
      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Campaign Schedule
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                What Will Be Shared Here
              </h2>
            </Reveal>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {eventTypes.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <article className="h-full rounded-3xl border border-black/10 bg-[#FFF3D6]/70 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.12)] transition hover:-translate-y-1">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6F1711] text-[#FF5A36]">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="text-2xl font-black uppercase leading-tight tracking-[0.03em] text-[#050505]">
                      {item.title}
                    </h3>

                    <p className="mt-5 text-base leading-8 text-black/68">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CAMPAIGN NOTES */}
      <section className="relative overflow-hidden bg-[#050505] px-5 py-20 text-[#FFF3D6]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 to-[#5A1E17]/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(255,90,54,0.18),transparent_34%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 max-w-3xl">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Stay Updated
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                Event Details Will Be Updated As Confirmed
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 text-lg leading-8 text-[#F2E6C9]/75">
                The campaign will continue sharing approved public information
                for upcoming appearances, forums, and opportunities to
                participate.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {campaignNotes.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="h-full rounded-3xl border border-[#F2E6C9]/14 bg-white/[0.06] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF5A36] text-white">
                      <Icon className="h-7 w-7" />
                    </div>

                    <h3 className="text-2xl font-black uppercase leading-tight tracking-[0.03em] text-[#FFF3D6]">
                      {item.title}
                    </h3>

                    <p className="mt-6 text-base leading-8 text-[#F2E6C9]/70">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <Reveal>
          <div className="mx-auto max-w-5xl rounded-3xl border border-black/10 bg-[#FFF3D6]/70 p-8 text-center shadow-[0_25px_70px_rgba(0,0,0,0.12)] sm:p-12">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Join The Campaign
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
              Help With Events, Outreach, And Updates
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/72">
              Supporters can help with event support, public outreach, voter
              engagement, and sharing official campaign information with their
              communities.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/get-involved"
                className="rounded bg-[#FF5A36] px-7 py-4 text-center text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.34)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
              >
                Get Involved
              </Link>

              <Link
                href="/watch"
                className="rounded border border-[#050505]/15 bg-[#050505] px-7 py-4 text-center text-sm font-black uppercase text-[#FFF3D6] transition hover:-translate-y-1 hover:bg-[#1b1b1b]"
              >
                Watch Interviews
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}