import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  Award,
  BriefcaseBusiness,
  Church,
  HeartHandshake,
  Landmark,
  Scale,
  ShieldCheck,
  Store,
  Users,
} from "lucide-react";
import CampaignDivider from "../components/CampaignDivider";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "About Myron Lizer | Myron Lizer for Navajo Nation President",
  description:
    "Learn more about Myron Lizer, former Navajo Nation Vice President, businessman, community leader, husband, and 2026 candidate for Navajo Nation President.",
  openGraph: {
    title: "About Myron Lizer | Myron Lizer for Navajo Nation President",
    description:
      "Former Navajo Nation Vice President, businessman, community servant, and candidate for Navajo Nation President.",
    images: ["/images/myron-lizer/myron-hero-orange.jpg"],
  },
};

const highlights = [
  {
    icon: Award,
    title: "Former Vice President",
    text: "Served as Vice President of the Navajo Nation from 2019 to 2023, helping lead through major challenges affecting Navajo families and communities.",
  },
  {
    icon: Store,
    title: "Business Experience",
    text: "Built practical experience in business ownership, management, entrepreneurship, and local job creation.",
  },
  {
    icon: HeartHandshake,
    title: "Community Service",
    text: "His background includes service through business, education, ministry, and community-centered efforts.",
  },
  {
    icon: Users,
    title: "People-Focused Leadership",
    text: "Believes leadership begins with listening, building trust, working together, and delivering practical results.",
  },
];

const foundationCards = [
  {
    icon: BriefcaseBusiness,
    title: "Business & Jobs",
    text: "Myron understands the daily realities of running a business, creating jobs, managing teams, and serving local communities.",
  },
  {
    icon: Landmark,
    title: "Public Service",
    text: "As former Vice President, he brings firsthand experience in tribal government, advocacy, and public responsibility.",
  },
  {
    icon: Church,
    title: "Faith & Family Values",
    text: "His public life has been shaped by faith, family, service, and a belief that leadership should be grounded in humility.",
  },
  {
    icon: ShieldCheck,
    title: "Accountable Leadership",
    text: "His leadership approach is centered on trust, accountability, collaboration, and respect for the people he serves.",
  },
];

const storySections = [
  {
    label: "Rooted In Community",
    icon: Users,
    title: "A Life Connected To The Navajo People",
    text: "Myron Lizer’s story is connected to the people, families, businesses, and communities of the Navajo Nation. His experience across business, public service, ministry, and community work gives him a practical understanding of the challenges many Navajo families face.",
  },
  {
    label: "Business Background",
    icon: Store,
    title: "Understanding Work, Jobs & Local Opportunity",
    text: "Before serving in elected office, Myron built experience in business ownership, management, accounting, and entrepreneurship. That background continues to shape his focus on economic sovereignty, local jobs, infrastructure, and long-term prosperity.",
  },
  {
    label: "Public Leadership",
    icon: Landmark,
    title: "Serving As Vice President Of The Navajo Nation",
    text: "From 2019 to 2023, Myron served as Vice President of the Navajo Nation. His time in office included work across government, communities, federal advocacy, economic development, infrastructure needs, and the difficult years of the COVID-19 pandemic.",
  },
  {
    label: "Moving Forward",
    icon: Scale,
    title: "A Campaign Focused On Practical Results",
    text: "His campaign is focused on economic sovereignty, jobs, water, energy, infrastructure, integrity, and building a stronger future where Navajo families can live, work, raise children, and prosper at home.",
  },
];

export default function AboutPage() {
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(255,90,54,0.24),transparent_35%)]" />
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
                About Myron Lizer
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <h1 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.95] text-[#FFF3D6] md:text-6xl lg:text-7xl">
                Rooted In Service, Built For Leadership
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-6 h-1 w-28 bg-[#FF5A36]" />
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F2E6C9]/80">
                Myron Lizer is a former Vice President of the Navajo Nation,
                businessman, husband, community servant, and candidate for
                Navajo Nation President. His leadership story is rooted in
                business, faith, family, service, and a commitment to building
                opportunity for the Navajo people.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/get-involved"
                  className="rounded bg-[#FF5A36] px-7 py-4 text-center text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.32)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
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

          <Reveal delay={0.16} className="relative mx-auto w-full max-w-xl">
            <div className="absolute -bottom-8 left-8 right-8 h-28 rounded-full bg-[#FF5A36]/20 blur-3xl" />
            <div className="absolute -top-8 right-10 h-40 w-40 rounded-full bg-[#F2E6C9]/10 blur-3xl" />

            <Image
  src="/images/myron-lizer/myron-about-leadership.jpg"
  alt="Myron Lizer leadership portrait"
  width={900}
  height={700}
  priority
  loading="eager"
  className="relative h-[380px] w-full rounded-3xl border border-[#F2E6C9]/20 object-cover object-[center_42%] shadow-[0_35px_90px_rgba(0,0,0,0.55)] lg:h-[520px]"
/>
          </Reveal>
        </div>

        <CampaignDivider />
      </section>

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                His Story
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                Business, Family, Faith & Public Service
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 text-lg leading-8 text-black/75">
                Myron Lizer has spent his life working across business,
                community, ministry, and public service. Before serving in
                tribal leadership, he built practical experience in management,
                entrepreneurship, accounting, and local business operations.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-lg leading-8 text-black/75">
                That experience matters. Myron understands that Navajo families
                are looking for more than political talk. They want jobs,
                working infrastructure, reliable services, stronger
                communities, and a future where young people can build a good
                life at home.
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <p className="mt-6 text-lg leading-8 text-black/75">
                His campaign is centered on economic sovereignty, long-term
                prosperity, water, energy, infrastructure, and restoring
                integrity to the Office of the President.
              </p>
            </Reveal>

            <Reveal delay={0.32}>
              <Link
                href="/news"
                className="mt-10 inline-flex items-center gap-2 rounded border border-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-[#FF5A36] transition hover:-translate-y-1 hover:bg-[#FF5A36] hover:text-white"
              >
                Read Campaign News
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
          <div className="text-center">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Leadership Highlights
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase text-[#FFF3D6] md:text-5xl">
                Experience That Connects
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#F2E6C9]/70">
                Myron brings together business experience, public leadership,
                community service, faith, and family values.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => {
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
        </div>
      </section>

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Background
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                A Record Rooted In Work, Service & Relationships
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-3xl text-base leading-8 text-black/70">
                This campaign is about more than a title. It is about practical
                leadership, trusted relationships, and building a stronger
                future for Navajo families.
              </p>
            </Reveal>
          </div>

<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
  {storySections.map((item, index) => {
    const Icon = item.icon;

    return (
      <Reveal key={item.title} delay={index * 0.06}>
        <article className="group relative h-full overflow-hidden rounded-3xl border border-[#5A1E17]/15 bg-[#FFF3D6] p-7 shadow-[0_18px_45px_rgba(5,5,5,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/50 hover:shadow-[0_28px_70px_rgba(5,5,5,0.18)]">
          <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FF5A36]/10 blur-2xl transition group-hover:bg-[#FF5A36]/20" />

          <div className="relative">
            <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#5A1E17] text-[#FF5A36] shadow-[0_14px_30px_rgba(90,30,23,0.22)]">
              <Icon size={28} />
            </div>

            <p className="mt-5 text-xs font-black uppercase tracking-[0.22em] text-[#FF5A36]">
              {item.label}
            </p>
          </div>

          <h3 className="relative mt-4 text-xl font-black uppercase leading-tight text-[#050505]">
            {item.title}
          </h3>

          <p className="relative mt-4 text-sm leading-7 text-black/65">
            {item.text}
          </p>
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

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Leadership Approach
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-5xl">
                Listening First. Leading With Integrity.
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[#F2E6C9]/80">
                Myron believes leadership should be grounded in humility,
                accountability, and respect for the people. His approach is
                focused on listening, building trust, working across
                communities, and delivering practical results.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {foundationCards.map((item, index) => {
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
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal className="relative order-2 lg:order-1">
            <div className="absolute -bottom-6 right-10 h-40 w-40 rounded-full bg-[#FF5A36]/25 blur-3xl" />

<Image
  src="/images/myron-lizer/myron-about-speaking.jpg"
  alt="Myron Lizer speaking at an event"
  width={900}
  height={700}
  className="relative h-[440px] w-full rounded-3xl border border-[#5A1E17]/20 object-cover object-[center_28%] shadow-[0_35px_80px_rgba(0,0,0,0.32)] lg:h-[540px]"
/>
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Why He Is Running
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                A Stronger, More Self-Reliant Navajo Nation
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 text-lg leading-8 text-black/75">
                Myron’s campaign is focused on building a future where the
                Navajo Nation can create more opportunity from within. That
                means supporting local businesses, strengthening infrastructure,
                protecting water and energy priorities, and creating pathways
                for young people to work and prosper in their own communities.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-6 text-lg leading-8 text-black/75">
                He understands that many families are tired of division and
                empty promises. They want leadership that respects the people,
                listens to communities, and brings practical experience to the
                work ahead.
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <p className="mt-6 text-lg leading-8 text-black/75">
                This campaign is about moving forward with integrity, rebuilding
                trust, and creating long-term prosperity for the Navajo people.
              </p>
            </Reveal>
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
              Moving Forward Together
            </p>

            <h2 className="mt-2 text-3xl font-black uppercase text-[#FFF3D6] md:text-4xl">
              Building Opportunity For Future Generations
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[#F2E6C9]/75">
              Join Myron Lizer in building a stronger, more self-reliant Navajo
              Nation rooted in integrity, opportunity, and service to the
              people.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center rounded-full bg-[#FF5A36] px-6 py-3 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.25)] transition hover:bg-[#e94b2c]"
            >
              Join The Campaign
            </Link>

            <Link
              href="/priorities"
              className="inline-flex items-center justify-center rounded-full border border-[#F2E6C9]/35 px-6 py-3 text-sm font-black uppercase text-[#FFF3D6] transition hover:border-[#FF5A36] hover:text-[#FF5A36]"
            >
              View Priorities
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}