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
  Radio,
  ShieldCheck,
  Users,
} from "lucide-react";
import CampaignDivider from "../components/CampaignDivider";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Events | Myron Lizer for Navajo Nation President",
  description:
    "Upcoming campaign events, community appearances, interviews, public forums, and campaign updates for Myron Lizer for Navajo Nation President.",
  openGraph: {
    title: "Events | Myron Lizer for Navajo Nation President",
    description:
      "Follow upcoming campaign events, community appearances, interviews, public forums, and campaign updates.",
    images: ["/images/myron-lizer/myron-hero-orange.jpg"],
  },
};

const featuredEvents = [
  {
    status: "Pending Confirmation",
    title: "Navajo Nation PRCA Pro Rodeo",
    eventType: "Public Meet & Greet",
    location: "Window Rock Fairgrounds Rodeo Arena",
    date: "Friday, May 29 – Sunday, May 31",
    time: "Time To Be Announced",
    description:
      "Myron Lizer is scheduled to meet and greet members of the public during the Navajo Nation PRCA Pro Rodeo weekend.",
  },
  {
    status: "Pending Confirmation",
    title: "Navajo Treaty Day",
    eventType: "Community Appearance",
    location: "Fort Defiance, Arizona",
    date: "Monday, June 1",
    time: "Time To Be Announced",
    description:
      "Myron Lizer is scheduled to be set up in Fort Defiance, Arizona, for Navajo Treaty Day. Additional location details will be announced once confirmed.",
  },
  {
    status: "Pending Confirmation",
    title: "Interview with Cal Nez",
    eventType: "Virtual / Online Interview",
    location: "Virtual / Online",
    date: "Thursday, June 4",
    time: "2:00 PM MDT",
    description:
      "Myron Lizer is scheduled to be interviewed by Cal Nez. Online viewing or listening details will be shared once confirmed.",
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
    title: "Forum on the Navajo Economy",
    subtitle: "Presidential Forum",
    image: "/images/myron-lizer/prez-forum-econo.jpg",
    date: "Friday, July 17",
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
                Events, Interviews & Campaign Updates
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-6 h-1 w-28 bg-[#FF5A36]" />
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F2E6C9]/80">
                Follow upcoming campaign events, community appearances,
                interviews, public forums, and opportunities to meet Myron Lizer
                across the Navajo Nation.
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
                Upcoming Public Appearances
              </h2>

              <p className="mt-5 text-base leading-8 text-[#F2E6C9]/75">
                The campaign is preparing public appearances, interviews,
                forums, and community events. Event details will be updated as
                they are confirmed and released.
              </p>

              <div className="mt-7 rounded-2xl border border-[#F2E6C9]/15 bg-white/5 p-5">
                <p className="text-sm font-bold leading-7 text-[#F2E6C9]/75">
                  Check this page for campaign appearances, public forums,
                  interview notices, broadcast information, and opportunities to
                  connect with the campaign.
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
                Upcoming Campaign Events
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-3xl text-base leading-8 text-black/70">
                Upcoming campaign events, public appearances, interviews, and
                community stops will be shared here as the campaign schedule
                develops.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredEvents.map((event, index) => (
              <Reveal key={`${event.title}-${event.date}`} delay={index * 0.06}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-[#5A1E17]/15 bg-[#FFF3D6] p-7 shadow-[0_18px_45px_rgba(5,5,5,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/50 hover:shadow-[0_28px_70px_rgba(5,5,5,0.18)]">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FF5A36]/10 blur-2xl transition group-hover:bg-[#FF5A36]/20" />

                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-[#5A1E17] text-[#FF5A36] shadow-[0_14px_30px_rgba(90,30,23,0.22)]">
                    <MapPin size={28} />
                  </div>

                  <p className="relative mt-5 inline-flex rounded-full bg-[#FF5A36] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[0_10px_25px_rgba(255,90,54,0.22)]">
                    {event.status}
                  </p>

                  <h3 className="relative mt-5 min-h-[72px] text-2xl font-black uppercase leading-tight text-[#050505]">
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

                  <p className="relative mt-auto pt-6 text-sm leading-7 text-black/68">
  {event.description}
</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-5 py-16 text-[#FFF3D6]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-4xl">
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
                Review upcoming public forums, event flyers, broadcast
                information, and opportunities to hear directly from the
                candidates.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-7 lg:grid-cols-2">
            {forumFlyers.map((forum, index) => (
              <Reveal key={forum.title} delay={index * 0.08}>
                <article className="group overflow-hidden rounded-3xl border border-[#F2E6C9]/15 bg-[#0B0B0B] shadow-[0_28px_70px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/60">
                  <div className="p-6 pb-4 sm:p-7 sm:pb-5">
                    <p className="inline-flex rounded-full bg-[#FF5A36] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[0_10px_25px_rgba(255,90,54,0.22)]">
                      {forum.status}
                    </p>

                    <h3 className="mt-4 text-2xl font-black uppercase leading-tight text-[#FFF3D6] sm:text-3xl">
                      {forum.title}
                    </h3>

                    <p className="mt-2 text-xs font-black uppercase tracking-[0.2em] text-[#FF5A36] sm:text-sm">
                      {forum.subtitle}
                    </p>
                  </div>

                  <div className="relative mx-4 overflow-hidden rounded-2xl bg-black sm:mx-7">
                    <Image
                      src={forum.image}
                      alt={forum.title}
                      width={1200}
                      height={1500}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="max-h-[360px] w-full object-contain object-top transition duration-500 group-hover:scale-[1.02]"
                    />

                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/65 to-transparent" />
                  </div>

                  <div className="grid gap-3 p-6 pt-5 sm:p-7 sm:pt-5">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-2xl border border-[#F2E6C9]/12 bg-black/30 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#F2E6C9]/45">
                          Date
                        </p>
                        <p className="mt-1 text-sm font-bold leading-6 text-[#F2E6C9]/80">
                          {forum.date}
                        </p>
                      </div>

                      <div className="rounded-2xl border border-[#F2E6C9]/12 bg-black/30 p-4">
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-[#F2E6C9]/45">
                          Time
                        </p>
                        <p className="mt-1 text-sm font-bold leading-6 text-[#F2E6C9]/80">
                          {forum.time}
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-[#F2E6C9]/12 bg-black/30 p-4">
                      <p className="text-xs font-black uppercase tracking-[0.16em] text-[#F2E6C9]/45">
                        Location
                      </p>
                      <p className="mt-1 text-sm font-bold leading-6 text-[#F2E6C9]/80">
                        {forum.location}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#F2E6C9]/60">
                        {forum.address}
                      </p>
                    </div>

                    <p className="text-sm leading-7 text-[#F2E6C9]/70">
                      {forum.description}
                    </p>
                  </div>
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
                As the campaign schedule develops, this page can include
                community events, meet-and-greets, interviews, public
                statements, and campaign appearances across the Navajo Nation.
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
                Stay Connected With The Campaign
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-base leading-8 text-black/70">
                Events are an important opportunity for voters to hear directly
                from candidates, ask questions, and stay informed. The campaign
                will continue sharing public appearances, forums, interviews,
                and community updates on this page.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                href="/get-involved"
                className="mt-8 inline-flex items-center gap-2 rounded bg-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.25)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
              >
                Get Involved
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {campaignNotes.map((note, index) => {
              const Icon = note.icon;

              return (
                <Reveal key={note.title} delay={index * 0.06}>
                  <article className="group relative flex h-full min-h-[590px] flex-col overflow-hidden rounded-3xl border border-[#5A1E17]/15 bg-[#FFF3D6] p-7 shadow-[0_18px_45px_rgba(5,5,5,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/50 hover:shadow-[0_28px_70px_rgba(5,5,5,0.18)]">
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
              Follow Upcoming Campaign Events
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[#F2E6C9]/75">
              Visit this page for campaign events, public forums, interviews,
              community appearances, and opportunities to support Myron Lizer
              for Navajo Nation President.
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