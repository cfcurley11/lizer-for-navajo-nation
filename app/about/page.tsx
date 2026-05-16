import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Award,
  Briefcase,
  Church,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Store,
  Users,
} from "lucide-react";
import CampaignDivider from "../components/CampaignDivider";

export const metadata: Metadata = {
  title: "About Myron Lizer | Myron Lizer for Navajo Nation President",
  description:
    "Learn more about Myron Lizer, 2026 Navajo Nation President candidate, former Navajo Nation Vice President, businessman, community leader, and advocate for economic sovereignty and long-term prosperity.",
  openGraph: {
    title: "About Myron Lizer | Myron Lizer for Navajo Nation President",
    description:
      "Former Navajo Nation Vice President, businessman, community leader, and candidate for Navajo Nation President.",
    images: ["/images/myron-lizer/myron-about-leadership.jpg"],
  },
};

const highlights = [
  {
    icon: Award,
    title: "Former Vice President",
    text: "Served as the 10th Vice President of the Navajo Nation from 2019 to 2023.",
  },
  {
    icon: Store,
    title: "Business Owner",
    text: "Owner and manager of four Navajoland Ace Hardware stores, with deep experience in business operations and job creation.",
  },
  {
    icon: Briefcase,
    title: "Management Experience",
    text: "Built a career in business development, management, entrepreneurship, and organizational leadership.",
  },
  {
    icon: HeartHandshake,
    title: "Community Service",
    text: "Served through business boards, school boards, ministry, and community-focused efforts.",
  },
];

const leadershipPoints = [
  {
    icon: Landmark,
    title: "Public Service",
    text: "As former Vice President of the Navajo Nation, Myron Lizer brings firsthand experience in tribal government, leadership, and public service.",
  },
  {
    icon: Briefcase,
    title: "Economic Development",
    text: "His campaign message emphasizes economic sovereignty, job creation, infrastructure, energy, and long-term prosperity.",
  },
  {
    icon: Users,
    title: "Relationship Building",
    text: "His leadership approach is rooted in collaboration, consensus-building, partnerships, and moving projects forward.",
  },
  {
    icon: Church,
    title: "Faith & Family",
    text: "His public story includes faith, family, ministry, and community values as important parts of his leadership foundation.",
  },
];

const aboutTimeline = [
  {
    label: "Business Foundation",
    title: "Entrepreneurship & Management",
    text: "Myron built a career through business ownership, retail management, and organizational leadership, including work connected to Navajoland Ace Hardware Stores and Lumber Yards.",
  },
  {
    label: "Community Service",
    title: "Boards, Ministry & Local Involvement",
    text: "His background includes service on business boards, private school boards, ministry leadership, and community concerns, including helping found the Window Rock Jaycees charter chapter in the late 1990s.",
  },
  {
    label: "Public Leadership",
    title: "Vice President of the Navajo Nation",
    text: "From 2019 to 2023, Myron served as Vice President of the Navajo Nation under President Jonathan Nez, bringing business experience into tribal leadership.",
  },
  {
    label: "2026 Campaign",
    title: "Leadership, Opportunity & Growth",
    text: "His 2026 campaign message focuses on visionary leadership, economic sovereignty, jobs, infrastructure, water, energy, integrity, and long-term prosperity for the Navajo people.",
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
            <Link
              href="/"
              className="inline-flex text-xs font-black uppercase tracking-[0.2em] text-[#F2E6C9]/60 transition hover:text-[#FF5A36]"
            >
              ← Back to Home
            </Link>

            <p className="mt-8 text-sm font-black uppercase tracking-[0.28em] text-[#FF5A36]">
              About Myron Lizer
            </p>

            <h1 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.95] text-[#FFF3D6] md:text-6xl lg:text-7xl">
              Leadership Built Through Service
            </h1>

            <div className="mt-6 h-1 w-28 bg-[#FF5A36]" />

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F2E6C9]/80">
              Myron Lizer is a businessman, former Vice President of the Navajo
              Nation, community leader, and candidate for President of the
              Navajo Nation. His leadership story is rooted in business,
              service, faith, family, and a commitment to building long-term
              opportunity for the Navajo people.
            </p>

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
          </div>

          <div className="relative mx-auto w-full max-w-xl">
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
          </div>
        </div>

        <CampaignDivider />
      </section>

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Biography
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
              Business, Service & Navajo Leadership
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/75">
              Myron Lizer has built his career across business, community
              service, and public leadership. Before and after serving as Vice
              President of the Navajo Nation, he remained connected to the
              practical challenges and opportunities facing Navajo families,
              communities, and businesses.
            </p>

            <p className="mt-6 text-lg leading-8 text-black/75">
              As a business owner and manager, Myron understands the importance
              of jobs, local enterprise, reliable infrastructure, and economic
              self-reliance. His campaign message centers on strengthening
              opportunity, restoring integrity, and building long-term
              prosperity for the Navajo Nation.
            </p>

            <p className="mt-6 text-lg leading-8 text-black/75">
              His background also includes service through boards, ministry,
              family business growth, and community engagement. These
              experiences shape a leadership approach focused on relationships,
              collaboration, accountability, and practical results.
            </p>

            <Link
              href="/news"
              className="mt-10 inline-flex rounded border border-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-[#FF5A36] transition hover:-translate-y-1 hover:bg-[#FF5A36] hover:text-white"
            >
              Read Campaign News
            </Link>
          </div>

          <div className="relative">
            <div className="absolute -bottom-6 left-10 h-40 w-40 rounded-full bg-[#FF5A36]/25 blur-3xl" />

            <Image
              src="/images/myron-lizer/myron-about-speaking.jpg"
              alt="Myron Lizer speaking at an event"
              width={900}
              height={700}
              className="relative h-[500px] w-full rounded-3xl border border-[#5A1E17]/20 object-cover object-[center_28%] shadow-[0_35px_80px_rgba(0,0,0,0.35)] lg:h-[560px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Leadership Highlights
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase text-[#FFF3D6] md:text-5xl">
              Experience That Matters
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-[#F2E6C9]/70">
              Myron’s experience reaches across tribal government, business
              ownership, management, community service, faith, and family.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#F2E6C9]/15 bg-white/5 p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/60 hover:bg-white/10 hover:shadow-2xl"
                >
                  <Icon className="h-10 w-10 text-[#FF5A36]" />

                  <h3 className="mt-6 text-lg font-black uppercase text-[#FFF3D6]">
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

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Background
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
              A Record Rooted In Work, Service & Relationships
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-black/70">
              The About page should give voters a clear picture of who Myron is:
              a businessman, a former tribal executive leader, a community
              servant, and a candidate focused on practical results for Navajo
              families.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-4">
            {aboutTimeline.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#5A1E17]/20 bg-[#FFF3D6] p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FF5A36]">
                  {item.label}
                </p>

                <h3 className="mt-4 text-xl font-black uppercase leading-tight text-[#050505]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/65">
                  {item.text}
                </p>
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

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Leadership Approach
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-5xl">
              Relationships. Accountability. Practical Results.
            </h2>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#F2E6C9]/80">
              Myron’s leadership approach is built around listening,
              relationship-building, business-minded decision making, and
              collaboration across communities, government, and partners.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {leadershipPoints.map((item) => {
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
              Moving Forward Together
            </p>

            <h2 className="mt-2 text-3xl font-black uppercase text-[#FFF3D6] md:text-4xl">
              Building Opportunity For Future Generations
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[#F2E6C9]/75">
              Together, we can continue building strong communities, expanding
              opportunity, and creating a stronger future for the Navajo Nation.
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
        </div>
      </section>
    </main>
  );
}