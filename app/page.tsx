import ElectionCountdown from "./components/ElectionCountdown";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Droplets,
  Handshake,
  HeartHandshake,
  Landmark,
  Mail,
  Newspaper,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";
import CampaignDivider from "./components/CampaignDivider";
import Reveal from "./components/Reveal";

export const metadata: Metadata = {
  title: "Myron Lizer for Navajo Nation President",
  description:
    "Official campaign website for Myron Lizer, 2026 Navajo Nation President candidate, bringing 36 years of leadership experience focused on economic sovereignty, jobs, infrastructure, water, energy, integrity, and long-term prosperity for the Navajo people.",
  openGraph: {
    title: "Myron Lizer for Navajo Nation President",
    description:
      "36 years of leadership experience focused on economic sovereignty, stronger infrastructure, jobs for our people, and leadership with integrity.",
    images: ["/images/myron-lizer/myron-hero-orange.jpg"],
  },
};

const priorities = [
  {
    icon: BriefcaseBusiness,
    title: "Economic Sovereignty",
    text: "Building a stronger Navajo economy through local opportunity, business growth, jobs, and long-term self-reliance.",
  },
  {
    icon: Zap,
    title: "Energy & Jobs",
    text: "Advancing energy and development opportunities that support employment, revenue, and community infrastructure.",
  },
  {
    icon: Building2,
    title: "Infrastructure",
    text: "Focusing on roads, utilities, broadband, facilities, and essential systems that help communities move forward.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity In Leadership",
    text: "Restoring trust through accountability, responsible decision-making, transparency, and service-centered leadership.",
  },
];

const messagePoints = [
  {
    icon: Droplets,
    title: "Water",
    text: "Supporting practical solutions for families, chapters, and future generations.",
  },
  {
    icon: Building2,
    title: "Infrastructure",
    text: "Strengthening the systems that support daily life, business, and community services.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Jobs",
    text: "Creating conditions for work, opportunity, entrepreneurship, and local prosperity.",
  },
  {
    icon: Landmark,
    title: "Trust",
    text: "Leading with integrity, accountability, and respect for the Navajo people.",
  },
];

const newsArticles = [
  {
    source: "Navajo Times",
    date: "May 2026",
    title: "Lizer launches bid focused on jobs and energy",
    text: "Recent coverage highlighted Myron Lizer’s campaign launch and his message around economic sovereignty, jobs, infrastructure, energy, and long-term prosperity.",
    image: "/images/myron-lizer/myron-about-leadership.jpg",
    imagePosition: "object-[center_42%]",
    alt: "Myron Lizer campaign leadership portrait",
    href: "https://navajotimes.com/reznews/lizer-launches-navajo-presidential-bid-focused-on-jobs-energy/",
  },
  {
    source: "Gallup Sun",
    date: "May 2026",
    title: "Former Vice President announces candidacy",
    text: "Public announcement coverage emphasized visionary leadership, economic sovereignty, restoring integrity, and building a stronger future for the Navajo Nation.",
    image: "/images/myron-lizer/myron-community-veterans.jpg",
    imagePosition: "object-[center_30%]",
    alt: "Myron Lizer with community members and veterans",
    href: "https://gallupsunweekly.com/2026/05/13/former-vp-myron-lizer-announces-candidacy-for-navajo-nation-president/",
  },
  {
    source: "ICT",
    date: "May 2026",
    title: "2026 Navajo Nation presidential field",
    text: "Election coverage listed Myron Lizer among the 2026 Navajo Nation presidential candidates and referenced his background in leadership and business.",
    image: "/images/myron-lizer/myron-look.jpg",
    imagePosition: "object-[center_28%]",
    alt: "Myron Lizer",
    href: "https://ictnews.org/news/the-navajo-nation-2026-presidential-election/",
  },
];

const getInvolved = [
  {
    icon: Users,
    title: "Volunteer",
    text: "Help with outreach, events, calls, community contact, and campaign support.",
    href: "/get-involved",
  },
  {
    icon: CalendarDays,
    title: "Attend Events",
    text: "Follow upcoming appearances, community gatherings, and campaign events as they are announced.",
    href: "/events",
  },
  {
    icon: Mail,
    title: "Stay Connected",
    text: "Join the campaign contact list for updates, volunteer opportunities, and future announcements.",
    href: "/contact",
  },
];

export default function MyronLizerCampaignPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#FFF3D6]">
      <section className="relative overflow-hidden bg-[#050505] pt-20 text-[#FFF3D6] lg:pt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/myron-lizer/myron-hero-orange.jpg"
            alt="Myron Lizer"
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover object-[center_28%] opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-[#5A1E17]/45" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(255,90,54,0.24),transparent_34%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-10 overflow-hidden px-5 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:overflow-visible lg:py-16">
          <div>
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#FF5A36]">
                Myron Lizer For Navajo Nation President
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 max-w-full break-words text-[3.15rem] font-black uppercase leading-[0.92] tracking-[-0.04em] text-[#FFF3D6] sm:text-6xl lg:text-7xl">
                Economic Sovereignty. Stronger Communities.
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-6 h-1 w-28 bg-[#FF5A36]" />
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F2E6C9]/82">
                With 36 years of leadership experience, Myron Lizer’s campaign
                is focused on jobs, infrastructure, water, energy, long-term
                prosperity, and leadership with integrity for the Navajo people.
              </p>
            </Reveal>

            <Reveal delay={0.36}>
              <div className="mt-8 grid max-w-2xl gap-3 rounded-2xl border border-[#F2E6C9]/18 bg-black/35 p-4 shadow-[0_18px_45px_rgba(0,0,0,0.2)] sm:grid-cols-[auto_1fr] sm:items-center">
                <div className="text-4xl font-black leading-none text-[#FF5A36] sm:text-5xl">
                  36
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#FFF3D6]">
                    Years In Leadership
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#F2E6C9]/72">
                    Experience shaped through public service, business, family,
                    faith, and community commitment.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/get-involved"
                  className="rounded bg-[#FF5A36] px-7 py-4 text-center text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.34)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
                >
                  Join The Campaign
                </Link>

                <Link
                  href="/priorities"
                  className="rounded border border-[#F2E6C9]/70 bg-[#F2E6C9] px-7 py-4 text-center text-sm font-black uppercase text-[#050505] transition hover:-translate-y-1 hover:bg-white"
                >
                  View Priorities
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={0.16}
            className="relative mx-auto w-full max-w-xl overflow-hidden"
          >
            <div className="absolute -bottom-8 left-8 right-8 h-28 rounded-full bg-[#FF5A36]/20 blur-3xl" />
            <div className="absolute -top-8 right-10 h-40 w-40 rounded-full bg-[#F2E6C9]/10 blur-3xl" />

            <Image
              src="/images/myron-lizer/myron-hero-orange.jpg"
              alt="Myron Lizer"
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

      <ElectionCountdown />

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                About Myron Lizer
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                Rooted In Business, Family, Faith & Service
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 text-lg leading-8 text-black/75">
                Myron Lizer is a former Vice President of the Navajo Nation,
                businessman, husband, community servant, and candidate for
                Navajo Nation President. He brings 36 years of leadership
                experience shaped through public service, business, family,
                faith, and community relationships, with a practical
                understanding of the everyday needs facing Navajo families.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-lg leading-8 text-black/75">
                The full About page shares more of his story, including his
                leadership journey, public service, business background, family
                values, faith, community relationships, and vision for a
                stronger, more self-reliant Navajo Nation.
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <Link
                href="/about"
                className="mt-10 inline-flex items-center gap-2 rounded border border-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-[#FF5A36] transition hover:-translate-y-1 hover:bg-[#FF5A36] hover:text-white"
              >
                Read About Myron
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>

          <Reveal delay={0.14} className="relative">
            <div className="absolute -bottom-6 left-10 h-40 w-40 rounded-full bg-[#FF5A36]/25 blur-3xl" />

            <div className="relative overflow-hidden rounded-3xl border border-[#5A1E17]/20 bg-[#050505]/5 shadow-[0_35px_80px_rgba(0,0,0,0.35)]">
              <Image
                src="/images/myron-lizer/myron-wife.jpg"
                alt="Myron and Dottie Lizer"
                width={1200}
                height={800}
                priority
                loading="eager"
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-contain"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#050505] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Campaign Priorities
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-[#FFF3D6] md:text-5xl">
                Practical Priorities For Navajo Families
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#F2E6C9]/75">
                Shaped by 36 years of leadership experience, the campaign
                message centers on economic sovereignty, jobs, infrastructure,
                water, energy, integrity, and long-term prosperity.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {priorities.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-[#F2E6C9]/15 bg-white/5 p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/60 hover:bg-white/10 hover:shadow-2xl">
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FF5A36]/10 blur-2xl transition group-hover:bg-[#FF5A36]/20" />

                    <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-[#5A1E17] shadow-[0_14px_30px_rgba(90,30,23,0.24)]">
                      <div className="absolute inset-1 rounded-xl border border-[#F2E6C9]/15" />
                      <Icon className="relative h-8 w-8 text-[#FF5A36]" />
                    </div>

                    <h3 className="relative mt-6 text-lg font-black uppercase leading-tight text-[#FFF3D6]">
                      {item.title}
                    </h3>

                    <p className="relative mt-3 text-sm leading-7 text-[#F2E6C9]/70">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={0.12}>
            <div className="mt-12 text-center">
              <Link
                href="/priorities"
                className="inline-flex items-center gap-2 rounded bg-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.28)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
              >
                View Full Priorities
                <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
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

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Message Focus
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-5xl">
                Economic Sovereignty Starts With The Basics
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[#F2E6C9]/80">
                Jobs, infrastructure, water, energy, and accountability are
                connected. Mr. Lizer’s 36 years in leadership help frame these
                priorities with a practical understanding of what families,
                chapters, businesses, and future generations need to stay rooted
                in strong Navajo communities.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {messagePoints.map((item, index) => {
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

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <Reveal>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                  Latest Public Coverage
                </p>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                  Campaign News & Public Mentions
                </h2>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="mt-6 text-base leading-8 text-black/70">
                  Recent public reporting reflects the campaign’s focus on
                  economic sovereignty, jobs, energy, infrastructure, long-term
                  prosperity, and restoring integrity.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.18}>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 rounded border border-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-[#FF5A36] transition hover:-translate-y-1 hover:bg-[#FF5A36] hover:text-white"
              >
                View News
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {newsArticles.map((article, index) => (
              <Reveal key={article.title} delay={index * 0.07}>
                <article className="group h-full overflow-hidden rounded-3xl border border-[#5A1E17]/15 bg-[#FFF3D6] shadow-[0_18px_45px_rgba(5,5,5,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/55 hover:shadow-[0_28px_70px_rgba(5,5,5,0.18)]">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className={`object-cover transition duration-700 group-hover:scale-105 ${article.imagePosition}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/55 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full bg-[#FF5A36] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white">
                      {article.source}
                    </div>
                  </div>

                  <div className="p-7">
                    <div className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#5A1E17]/55">
                      <Newspaper size={15} />
                      <span>{article.date}</span>
                    </div>

                    <h3 className="text-xl font-black uppercase leading-tight text-[#050505]">
                      {article.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-black/65">
                      {article.text}
                    </p>

                    <Link
                      href={article.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase text-[#FF5A36] transition hover:gap-3"
                    >
                      Read Source
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-5 py-20 text-[#FFF3D6]">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="relative order-2 lg:order-1">
            <Reveal>
              <div className="absolute -bottom-6 right-10 h-40 w-40 rounded-full bg-[#FF5A36]/25 blur-3xl" />

              <Image
                src="/images/myron-lizer/myron-community-veterans.jpg"
                alt="Myron Lizer with community members and veterans"
                width={900}
                height={700}
                className="relative h-[440px] w-full rounded-3xl border border-[#F2E6C9]/20 object-cover object-[center_30%] shadow-[0_35px_80px_rgba(0,0,0,0.55)] lg:h-[540px]"
              />
            </Reveal>
          </div>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Get Involved
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                Help Move The Campaign Forward
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 text-lg leading-8 text-[#F2E6C9]/78">
                The campaign is continuing to build its outreach, media,
                volunteer, and community engagement efforts. Supporters can help
                by volunteering, sharing updates, attending events, and staying
                connected as new information is released.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4">
              {getInvolved.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={index * 0.06}>
                    <Link
                      href={item.href}
                      className="group block rounded-2xl border border-[#F2E6C9]/15 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-[#FF5A36]/50 hover:bg-white/10"
                    >
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
                    </Link>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#5A1E17] px-5 py-16 text-[#FFF3D6]">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/myron-lizer/hero-dark-texture.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <Reveal className="relative mx-auto grid max-w-7xl gap-8 rounded-3xl border border-[#F2E6C9]/15 bg-black/35 p-8 md:grid-cols-[1fr_auto] md:items-center lg:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Join The Movement
            </p>

            <h2 className="mt-2 text-3xl font-black uppercase text-[#FFF3D6] md:text-4xl">
              Building A Stronger Future For The Navajo Nation
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[#F2E6C9]/75">
              Stand with Myron Lizer in support of 36 years of leadership
              experience, economic sovereignty, stronger infrastructure, jobs
              for our people, and leadership with integrity.
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
              href="/donate"
              className="inline-flex items-center justify-center rounded-full border border-[#F2E6C9]/35 px-6 py-3 text-sm font-black uppercase text-[#FFF3D6] transition hover:border-[#FF5A36] hover:text-[#FF5A36]"
            >
              Donate
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}