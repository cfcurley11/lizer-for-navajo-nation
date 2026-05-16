import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  BriefcaseBusiness,
  Building2,
  Droplets,
  GraduationCap,
  HeartPulse,
  Home,
  Landmark,
  Lightbulb,
  Route,
  ShieldCheck,
  Sprout,
  Users,
  Wifi,
  Zap,
} from "lucide-react";
import CampaignDivider from "../components/CampaignDivider";

export const metadata: Metadata = {
  title: "Priorities | Myron Lizer for Navajo Nation President",
  description:
    "Campaign priorities for Myron Lizer for Navajo Nation President, focused on economic sovereignty, jobs, energy, infrastructure, water, families, accountability, and long-term prosperity.",
  openGraph: {
    title: "Priorities | Myron Lizer for Navajo Nation President",
    description:
      "Leadership, opportunity, growth, economic sovereignty, infrastructure, accountability, and long-term prosperity for the Navajo Nation.",
    images: ["/images/myron-lizer/myron-about-speaking.jpg"],
  },
};

const priorityCards = [
  {
    icon: BriefcaseBusiness,
    title: "Economic Sovereignty",
    text: "Build a stronger Navajo economy by supporting local enterprise, job creation, small businesses, and long-term self-reliance.",
  },
  {
    icon: Zap,
    title: "Energy & Jobs",
    text: "Advance energy opportunities that can create jobs, strengthen local revenue, and support future economic development.",
  },
  {
    icon: Building2,
    title: "Infrastructure",
    text: "Prioritize roads, utilities, broadband, facilities, and essential systems that allow communities and businesses to grow.",
  },
  {
    icon: Droplets,
    title: "Water Access",
    text: "Support practical solutions for water access, community needs, and infrastructure that improves everyday life.",
  },
  {
    icon: Home,
    title: "Housing & Families",
    text: "Focus on the needs of Navajo families, including housing, utilities, community services, and safer living conditions.",
  },
  {
    icon: GraduationCap,
    title: "Youth & Education",
    text: "Invest in students, workforce development, opportunity pathways, and future generations of Navajo leadership.",
  },
  {
    icon: Landmark,
    title: "Integrity In Government",
    text: "Restore trust through accountability, transparency, responsible leadership, and service-centered decision making.",
  },
  {
    icon: Sprout,
    title: "Land & Resources",
    text: "Protect land, water, natural resources, and traditional values while planning responsibly for future generations.",
  },
];

const actionPriorities = [
  {
    icon: Route,
    title: "Move Projects Forward",
    text: "Focus on practical execution, partnership building, and turning major needs into real progress for communities.",
  },
  {
    icon: Users,
    title: "Listen To Communities",
    text: "Keep families, chapters, business owners, veterans, elders, and young people connected to the campaign conversation.",
  },
  {
    icon: Lightbulb,
    title: "Build New Opportunity",
    text: "Support ideas that reduce dependence, create revenue, strengthen business growth, and expand local opportunity.",
  },
  {
    icon: ShieldCheck,
    title: "Lead With Accountability",
    text: "Promote leadership that is transparent, responsible, responsive, and focused on long-term public trust.",
  },
];

const platformSections = [
  {
    eyebrow: "Economy",
    title: "Jobs, Business & Economic Sovereignty",
    text: "Myron Lizer’s campaign message emphasizes economic sovereignty and the need to create jobs, strengthen infrastructure, and prepare the Navajo Nation for a future with less dependence on declining outside support.",
    bullets: [
      "Support Navajo-owned businesses and local entrepreneurs",
      "Create conditions for job growth across communities",
      "Strengthen revenue opportunities and long-term self-reliance",
      "Connect economic development to infrastructure and energy planning",
    ],
  },
  {
    eyebrow: "Infrastructure",
    title: "Water, Roads, Broadband & Essential Services",
    text: "A stronger economy depends on the basics: water, roads, reliable utilities, broadband, and the infrastructure needed to support families, businesses, schools, and public services.",
    bullets: [
      "Improve access to water and essential utilities",
      "Support roads, community facilities, and public infrastructure",
      "Expand broadband and connectivity across rural areas",
      "Prioritize practical projects that improve daily life",
    ],
  },
  {
    eyebrow: "Government",
    title: "Integrity, Accountability & Public Trust",
    text: "The campaign announcement has emphasized restoring integrity to the Office of the President and building leadership rooted in accountability, responsible decision making, and public service.",
    bullets: [
      "Promote transparency and responsible leadership",
      "Improve communication with chapters and communities",
      "Build trust through consistent action and follow-through",
      "Focus on results that people can see and measure",
    ],
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

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-14">
          <div>
            <Link
              href="/"
              className="inline-flex text-xs font-black uppercase tracking-[0.2em] text-[#F2E6C9]/60 transition hover:text-[#FF5A36]"
            >
              ← Back to Home
            </Link>

            <p className="mt-8 text-sm font-black uppercase tracking-[0.28em] text-[#FF5A36]">
              Campaign Priorities
            </p>

            <h1 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.95] text-[#FFF3D6] md:text-6xl lg:text-7xl">
              Leadership. Opportunity. Growth.
            </h1>

            <div className="mt-6 h-1 w-28 bg-[#FF5A36]" />

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F2E6C9]/80">
              Myron Lizer’s campaign is focused on economic sovereignty, jobs,
              energy, infrastructure, water, integrity, and long-term
              prosperity for the Navajo people.
            </p>

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
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -bottom-8 left-8 right-8 h-28 rounded-full bg-[#FF5A36]/20 blur-3xl" />
            <div className="absolute -top-8 right-10 h-40 w-40 rounded-full bg-[#F2E6C9]/10 blur-3xl" />

            <Image
              src="/images/myron-lizer/myron-about-speaking.jpg"
              alt="Myron Lizer speaking about campaign priorities"
              width={900}
              height={700}
              priority
              loading="eager"
              className="relative h-[380px] w-full rounded-3xl border border-[#F2E6C9]/20 object-cover object-[center_28%] shadow-[0_35px_90px_rgba(0,0,0,0.55)] lg:h-[520px]"
            />
          </div>
        </div>

        <CampaignDivider />
      </section>

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Platform Overview
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
              Practical Priorities For A Stronger Navajo Nation
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/75">
              These priorities connect campaign messaging to the everyday needs
              of Navajo families, chapters, businesses, students, elders, and
              future generations.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {priorityCards.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#5A1E17]/20 bg-[#FFF3D6] p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="grid h-13 w-13 place-items-center rounded-2xl bg-[#5A1E17] p-3 text-[#FF5A36]">
                    <Icon className="h-8 w-8" />
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

      <section className="bg-[#050505] px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -bottom-6 left-8 h-32 w-32 rounded-full bg-[#FF5A36]/25 blur-3xl" />

            <Image
              src="/images/myron-lizer/myron-community-veterans.jpg"
              alt="Myron Lizer with community members and veterans"
              width={900}
              height={700}
              className="relative h-[460px] w-full rounded-3xl border border-[#F2E6C9]/20 object-cover object-[center_30%] shadow-[0_35px_90px_rgba(0,0,0,0.55)] lg:h-[560px]"
            />
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Community First
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-[#FFF3D6] md:text-5xl">
              Turning Priorities Into Action
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#F2E6C9]/80">
              The campaign’s priorities should be easy for voters to understand:
              stronger local opportunity, reliable infrastructure, responsible
              leadership, and a future where Navajo communities can grow with
              confidence.
            </p>

            <div className="mt-8 grid gap-4">
              {actionPriorities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-xl border border-[#F2E6C9]/15 bg-white/5 p-5 transition hover:border-[#FF5A36]/50 hover:bg-white/10"
                  >
                    <div className="flex gap-4">
                      <div className="mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#FF5A36] text-white">
                        <Icon size={20} />
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
                );
              })}
            </div>

            <Link
              href="/get-involved"
              className="mt-10 inline-flex rounded bg-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.3)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
            >
              Help Move The Vision Forward
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Priority Areas
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
              A Platform Built Around Real Needs
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-black/70">
              As the campaign team finalizes its strategy package, this page can
              be refined with approved policy language, specific commitments,
              and direct quotes from Myron Lizer.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {platformSections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-[#5A1E17]/20 bg-[#FFF3D6] p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FF5A36]">
                  {section.eyebrow}
                </p>

                <h3 className="mt-4 text-2xl font-black uppercase leading-tight text-[#050505]">
                  {section.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-black/68">
                  {section.text}
                </p>

                <div className="mt-6 grid gap-3">
                  {section.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-xl border border-[#5A1E17]/15 bg-white/45 p-4"
                    >
                      <p className="text-sm font-bold leading-6 text-black/70">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
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
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Leadership Focus
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-5xl">
              Economic Sovereignty Starts With Action
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#F2E6C9]/80">
              Jobs, infrastructure, water, energy, and accountability are not
              separate issues. Together, they shape whether families can build,
              businesses can grow, and future generations can stay rooted in
              strong communities.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                icon: BriefcaseBusiness,
                title: "Create Opportunity",
                text: "Support business growth, job creation, and practical pathways to local prosperity.",
              },
              {
                icon: Wifi,
                title: "Connect Communities",
                text: "Improve infrastructure, broadband, roads, and systems that support rural life.",
              },
              {
                icon: HeartPulse,
                title: "Support Families",
                text: "Advance priorities connected to housing, healthcare, safety, education, and family stability.",
              },
              {
                icon: ShieldCheck,
                title: "Restore Trust",
                text: "Lead with integrity, accountability, transparency, and responsible public service.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#F2E6C9]/15 bg-black/25 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/60 hover:bg-black/40"
                >
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[#FF5A36] text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-lg font-black uppercase text-[#FFF3D6]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#F2E6C9]/70">
                    {item.text}
                  </p>
                </article>
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

        <div className="relative mx-auto grid max-w-7xl gap-8 rounded-3xl border border-[#F2E6C9]/15 bg-black/35 p-8 md:grid-cols-[1fr_auto] md:items-center lg:p-10">
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
        </div>
      </section>
    </main>
  );
}