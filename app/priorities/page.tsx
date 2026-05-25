import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Droplets,
  GraduationCap,
  Handshake,
  HeartPulse,
  Home,
  Landmark,
  Lightbulb,
  Route,
  Scale,
  ShieldCheck,
  Sprout,
  Users,
  Wifi,
  Zap,
} from "lucide-react";
import CampaignDivider from "../components/CampaignDivider";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Priorities | Myron Lizer for Navajo Nation President",
  description:
    "Campaign priorities for Myron Lizer for Navajo Nation President, focused on economic sovereignty, jobs, energy, infrastructure, water, families, healthcare, accountability, and long-term prosperity.",
  openGraph: {
    title: "Priorities | Myron Lizer for Navajo Nation President",
    description:
      "Economic sovereignty, jobs, infrastructure, energy, water, integrity, healthcare, families, and long-term prosperity for the Navajo Nation.",
    images: ["/images/myron-lizer/myron-look.jpg"],
  },
};

const priorityCards = [
  {
    icon: BriefcaseBusiness,
    title: "Economic Sovereignty",
    text: "Strengthening the Navajo economy through business growth, local opportunity, job creation, and long-term self-reliance.",
  },
  {
    icon: Zap,
    title: "Energy & Jobs",
    text: "Advancing energy opportunities that support employment, revenue, infrastructure, and future economic development.",
  },
  {
    icon: Building2,
    title: "Infrastructure",
    text: "Prioritizing roads, utilities, facilities, broadband, and essential systems that help communities move forward.",
  },
  {
    icon: Droplets,
    title: "Water Access",
    text: "Supporting practical water solutions that improve daily life for families, chapters, businesses, and future generations.",
  },
  {
    icon: Home,
    title: "Families & Housing",
    text: "Focusing on the everyday needs of Navajo families, including housing, utilities, safer communities, and basic services.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Wellness",
    text: "Supporting stronger health outcomes, access to care, and practical solutions that protect families, elders, and communities.",
  },
  {
    icon: GraduationCap,
    title: "Youth & Education",
    text: "Creating opportunity pathways for students, young workers, entrepreneurs, and the next generation of Navajo leadership.",
  },
  {
    icon: Scale,
    title: "Integrity In Leadership",
    text: "Restoring trust through accountability, transparency, responsible decision-making, and service-centered leadership.",
  },
];

const actionPriorities = [
  {
    icon: Route,
    title: "Move Projects Forward",
    text: "Focus on execution, partnerships, planning, and the follow-through needed to turn priorities into visible progress.",
  },
  {
    icon: Users,
    title: "Listen To Communities",
    text: "Keep families, chapters, elders, veterans, business owners, and young people connected to the campaign conversation.",
  },
  {
    icon: Lightbulb,
    title: "Build New Opportunity",
    text: "Support ideas that reduce dependence, grow revenue, strengthen business, and expand local opportunity.",
  },
  {
    icon: ShieldCheck,
    title: "Lead With Accountability",
    text: "Promote leadership that is transparent, responsible, responsive, and focused on rebuilding public trust.",
  },
];

const platformSections = [
  {
    eyebrow: "Economy",
    icon: BriefcaseBusiness,
    title: "Jobs, Business & Economic Sovereignty",
    text: "Economic sovereignty means building a Navajo economy that works for Navajo families. It starts with local opportunity, stronger business conditions, job creation, and long-term planning.",
    bullets: [
      "Support Navajo-owned businesses and local entrepreneurs",
      "Create stronger conditions for job growth",
      "Connect economic development to infrastructure and energy planning",
      "Build long-term self-reliance and local revenue opportunities",
    ],
  },
  {
    eyebrow: "Infrastructure",
    icon: Building2,
    title: "Water, Roads, Broadband & Essential Services",
    text: "A stronger future depends on the basics. Families, schools, businesses, chapters, and public services need reliable infrastructure to grow and function.",
    bullets: [
      "Improve access to water and essential utilities",
      "Support roads, facilities, and community infrastructure",
      "Expand broadband and rural connectivity",
      "Prioritize projects that improve everyday life",
    ],
  },
  {
    eyebrow: "Energy",
    icon: Zap,
    title: "Energy, Revenue & Future Development",
    text: "Energy policy must support jobs, infrastructure, community benefit, and responsible long-term planning for the Navajo Nation.",
    bullets: [
      "Advance energy opportunities tied to jobs and revenue",
      "Support responsible development that benefits Navajo communities",
      "Connect energy planning to infrastructure and economic growth",
      "Prepare for future energy markets while protecting Navajo interests",
    ],
  },
  {
    eyebrow: "Families",
    icon: HeartPulse,
    title: "Families, Healthcare & Community Stability",
    text: "Strong families need reliable services, safer communities, access to care, and leadership that understands everyday needs.",
    bullets: [
      "Support practical healthcare and wellness priorities",
      "Focus on families, elders, veterans, and young people",
      "Strengthen community support systems",
      "Advance solutions that improve quality of life",
    ],
  },
  {
    eyebrow: "Youth",
    icon: GraduationCap,
    title: "Education, Youth & Future Opportunity",
    text: "The next generation needs pathways to education, employment, business ownership, leadership, and a future rooted at home.",
    bullets: [
      "Support students and young workers",
      "Encourage entrepreneurship and workforce development",
      "Create opportunity pathways for future Navajo leaders",
      "Connect education to jobs, infrastructure, and local growth",
    ],
  },
  {
    eyebrow: "Government",
    icon: Landmark,
    title: "Integrity, Accountability & Public Trust",
    text: "Leadership must be rooted in responsibility, communication, and respect for the people. Restoring trust requires transparency, follow-through, and accountable service.",
    bullets: [
      "Promote transparent and responsible leadership",
      "Improve communication with chapters and communities",
      "Build trust through consistent action",
      "Focus on results people can see and measure",
    ],
  },
];

const leadershipFocus = [
  {
    icon: BriefcaseBusiness,
    title: "Create Opportunity",
    text: "Support business growth, job creation, and practical pathways to local prosperity.",
  },
  {
    icon: Wifi,
    title: "Connect Communities",
    text: "Improve broadband, roads, utilities, and systems that support rural life.",
  },
  {
    icon: HeartPulse,
    title: "Support Families",
    text: "Advance priorities tied to housing, healthcare, safety, education, and stability.",
  },
  {
    icon: Handshake,
    title: "Rebuild Trust",
    text: "Lead with integrity, accountability, transparency, and responsible public service.",
  },
];

export default function PrioritiesPage() {
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
            className="object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/93 to-[#5A1E17]/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_30%,rgba(255,90,54,0.26),transparent_35%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 overflow-hidden px-5 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:overflow-visible lg:py-14">
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
                Campaign Priorities
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <h1 className="mt-4 max-w-full break-words text-[2.75rem] font-black uppercase leading-[0.94] tracking-[-0.045em] text-[#FFF3D6] sm:text-6xl sm:tracking-[-0.035em] lg:text-7xl">
  Economic Sovereignty. Real Opportunity.
</h1>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-6 h-1 w-28 bg-[#FF5A36]" />
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F2E6C9]/80">
                Myron Lizer’s campaign is focused on practical priorities that
                matter to Navajo families: jobs, infrastructure, water, energy,
                healthcare, integrity, and long-term prosperity.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/get-involved"
                  className="rounded bg-[#FF5A36] px-7 py-4 text-center text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.32)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
                >
                  Support These Priorities
                </Link>

                <Link
                  href="/news"
                  className="rounded border border-[#F2E6C9]/70 bg-[#F2E6C9] px-7 py-4 text-center text-sm font-black uppercase text-[#050505] transition hover:-translate-y-1 hover:bg-white"
                >
                  Read Campaign News
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="relative mx-auto w-full max-w-xl overflow-hidden">
            <div className="absolute -bottom-8 left-8 right-8 h-28 rounded-full bg-[#FF5A36]/20 blur-3xl" />
            <div className="absolute -top-8 right-10 h-40 w-40 rounded-full bg-[#F2E6C9]/10 blur-3xl" />

            <Image
              src="/images/myron-lizer/myron-look.jpg"
              alt="Myron Lizer speaking about campaign priorities"
              width={900}
              height={700}
              priority
              loading="eager"
              className="relative h-[320px] w-full rounded-3xl border border-[#F2E6C9]/20 object-cover object-[center_28%] shadow-[0_35px_90px_rgba(0,0,0,0.55)] sm:h-[380px] lg:h-[520px]"
            />
          </Reveal>
        </div>

        <CampaignDivider />
      </section>

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Platform Overview
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                Priorities Built Around Everyday Needs
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/75">
                These priorities connect public campaign messaging to the daily
                realities of Navajo families, chapters, businesses, students,
                elders, and future generations.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {priorityCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-[#5A1E17]/15 bg-[#FFF3D6] p-7 shadow-[0_18px_45px_rgba(5,5,5,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/55 hover:shadow-[0_28px_70px_rgba(5,5,5,0.18)]">
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FF5A36]/10 blur-2xl transition group-hover:bg-[#FF5A36]/20" />

                    <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-[#5A1E17] shadow-[0_14px_30px_rgba(90,30,23,0.24)]">
                      <div className="absolute inset-1 rounded-xl border border-[#F2E6C9]/15" />
                      <Icon className="relative h-8 w-8 text-[#FF5A36]" />
                    </div>

                    <h3 className="relative mt-6 text-lg font-black uppercase leading-tight text-[#050505]">
                      {item.title}
                    </h3>

                    <p className="relative mt-3 text-sm leading-7 text-black/65">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="absolute -bottom-6 left-8 h-32 w-32 rounded-full bg-[#FF5A36]/25 blur-3xl" />

            <Image
              src="/images/myron-lizer/myron-community-veterans.jpg"
              alt="Myron Lizer with community members and veterans"
              width={900}
              height={700}
              className="relative h-[460px] w-full rounded-3xl border border-[#F2E6C9]/20 object-cover object-[center_30%] shadow-[0_35px_90px_rgba(0,0,0,0.55)] lg:h-[560px]"
            />
          </Reveal>

          <div>
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Community First
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-[#FFF3D6] md:text-5xl">
                Turning Priorities Into Action
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 text-lg leading-8 text-[#F2E6C9]/80">
                The campaign’s priorities are designed to be clear and
                practical: strengthen opportunity, improve essential
                infrastructure, support families, protect water and energy
                priorities, and restore trust in leadership.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4">
              {actionPriorities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={index * 0.06}>
                    <div className="group rounded-2xl border border-[#F2E6C9]/15 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-[#FF5A36]/50 hover:bg-white/10">
                      <div className="flex gap-4">
                        <div className="mt-1 grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#FF5A36] text-white shadow-[0_10px_25px_rgba(255,90,54,0.22)]">
                          <Icon size={22} />
                        </div>

                        <div>
                          <h3 className="text-sm font-black uppercase text-[#FFF3D6]">
                            {item.title}
                          </h3>

                          <p className="mt-2 text-sm leading-6 text-[#F2E6C9]/68">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.16}>
              <Link
                href="/get-involved"
                className="mt-10 inline-flex items-center gap-2 rounded bg-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.3)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
              >
                Help Move The Vision Forward
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Platform Direction
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                A Platform Built Around Real Needs
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-3xl text-base leading-8 text-black/70">
                As the campaign team finalizes official platform language, this
                page can be refined with approved policy details, direct quotes,
                chapter-specific concerns, and community feedback.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {platformSections.map((section, index) => {
              const Icon = section.icon;

              return (
                <Reveal key={section.title} delay={index * 0.05}>
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-[#5A1E17]/15 bg-[#FFF3D6] p-7 shadow-[0_18px_45px_rgba(5,5,5,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/50 hover:shadow-[0_28px_70px_rgba(5,5,5,0.18)]">
                    <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#FF5A36]/10 blur-2xl transition group-hover:bg-[#FF5A36]/20" />

                    <div className="relative">
                      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#5A1E17] text-[#FF5A36] shadow-[0_14px_30px_rgba(90,30,23,0.22)]">
                        <Icon size={28} />
                      </div>

                      <p className="mt-5 text-xs font-black uppercase tracking-[0.22em] text-[#FF5A36]">
                        {section.eyebrow}
                      </p>
                    </div>

                    <h3 className="relative mt-4 text-2xl font-black uppercase leading-tight text-[#050505]">
                      {section.title}
                    </h3>

                    <p className="relative mt-5 text-sm leading-7 text-black/68">
                      {section.text}
                    </p>

                    <div className="relative mt-6 grid gap-3">
                      {section.bullets.map((bullet) => (
                        <div
                          key={bullet}
                          className="rounded-2xl border border-[#5A1E17]/12 bg-white/45 p-4 transition group-hover:border-[#5A1E17]/20"
                        >
                          <p className="text-sm font-bold leading-6 text-black/70">
                            {bullet}
                          </p>
                        </div>
                      ))}
                    </div>
                  </article>
                </Reveal>
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

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Leadership Focus
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-5xl">
                Economic Sovereignty Starts With Action
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[#F2E6C9]/80">
                Jobs, infrastructure, water, energy, healthcare, and
                accountability are not separate issues. Together, they shape
                whether families can build, businesses can grow, and future
                generations can stay rooted in strong communities.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {leadershipFocus.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <article className="group h-full rounded-3xl border border-[#F2E6C9]/15 bg-black/25 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/60 hover:bg-black/40">
                    <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-[#FF5A36] text-white shadow-[0_12px_30px_rgba(255,90,54,0.28)]">
                      <Icon size={26} />
                    </div>

                    <h3 className="text-lg font-black uppercase text-[#FFF3D6]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#F2E6C9]/70">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
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

        <Reveal className="relative mx-auto grid max-w-7xl gap-8 rounded-3xl border border-[#F2E6C9]/15 bg-black/35 p-8 md:grid-cols-[1fr_auto] md:items-center lg:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Help Share The Vision
            </p>

            <h2 className="mt-2 text-3xl font-black uppercase text-[#FFF3D6] md:text-4xl">
              Join The Campaign For A Stronger Navajo Nation
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[#F2E6C9]/75">
              Volunteer, attend an event, share campaign updates, or contact the
              campaign to learn how you can help move these priorities forward.
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
              href="/events"
              className="inline-flex items-center justify-center rounded-full border border-[#F2E6C9]/35 px-6 py-3 text-sm font-black uppercase text-[#FFF3D6] transition hover:border-[#FF5A36] hover:text-[#FF5A36]"
            >
              View Events
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}