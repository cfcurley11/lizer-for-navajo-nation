import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, CalendarDays, Newspaper, ShieldCheck } from "lucide-react";
import CampaignHeader from "../components/CampaignHeader";
import CampaignFooter from "../components/CampaignFooter";
import CampaignDivider from "../components/CampaignDivider";

export const metadata: Metadata = {
  title: "News | Myron Lizer for Navajo Nation President",
  description:
    "Latest news, media coverage, and campaign updates from Myron Lizer for Navajo Nation President.",
  openGraph: {
    title: "News | Myron Lizer for Navajo Nation President",
    description:
      "Follow the latest campaign announcements, media coverage, and updates from Myron Lizer for Navajo Nation President.",
    images: ["/images/myron-lizer/myron-about-leadership.jpg"],
  },
};

const featuredArticles = [
  {
    source: "Navajo Times",
    date: "May 2026",
    title: "Lizer Launches Presidential Bid Focused on Jobs & Energy",
    summary:
      "Coverage of Myron Lizer’s campaign launch and his focus on economic sovereignty, jobs, infrastructure, energy, and long-term prosperity for the Navajo Nation.",
    image: "/images/myron-lizer/myron-about-leadership.jpg",
    imagePosition: "object-[center_42%]",
    alt: "Myron Lizer campaign leadership portrait",
    href: "https://navajotimes.com/reznews/lizer-launches-navajo-presidential-bid-focused-on-jobs-energy/",
  },
  {
    source: "Gallup Sun",
    date: "May 2026",
    title: "Former VP Myron Lizer Announces Candidacy",
    summary:
      "Announcement coverage highlighting Myron Lizer’s candidacy for President of the Navajo Nation and his message of leadership, opportunity, and growth.",
    image: "/images/myron-lizer/myron-community-veterans.jpg",
    imagePosition: "object-[center_30%]",
    alt: "Myron Lizer speaking with community members and veterans",
    href: "https://gallupsunweekly.com/2026/05/13/former-vp-myron-lizer-announces-candidacy-for-navajo-nation-president/",
  },
  {
    source: "ICT",
    date: "May 2026",
    title: "The Navajo Nation 2026 Presidential Election",
    summary:
      "Election coverage outlining the 2026 Navajo Nation presidential field, including former Vice President Myron Lizer.",
    image: "/images/myron-lizer/myron-about-speaking.jpg",
    imagePosition: "object-[center_28%]",
    alt: "Myron Lizer speaking at an event",
    href: "https://ictnews.org/news/the-navajo-nation-2026-presidential-election/",
  },
];

const campaignUpdates = [
  {
    title: "Campaign Strategy Package Coming Soon",
    text: "The campaign team is preparing additional messaging, platform details, media assets, and event information. Once approved, those materials will be added to this page.",
  },
  {
    title: "Official Updates Will Be Reviewed",
    text: "Campaign content, issue language, announcements, and event details will be reviewed and approved by the campaign team before final publication.",
  },
  {
    title: "More Media Coverage Will Be Added",
    text: "As additional articles, interviews, photos, and videos become available, this news page will continue to serve as a central hub for campaign coverage.",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#FFF3D6]">
      <CampaignHeader />

      <section className="relative overflow-hidden bg-[#050505] px-5 pt-20 text-[#FFF3D6] lg:pt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/myron-lizer/hero-dark-texture.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 to-[#5A1E17]/40" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(255,90,54,0.25),transparent_34%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl py-8 lg:py-10">
          <Link
            href="/"
            className="inline-flex text-xs font-black uppercase tracking-[0.2em] text-[#F2E6C9]/60 transition hover:text-[#FF5A36]"
          >
            ← Back to Home
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#FF5A36]">
                Campaign News
              </p>

              <h1 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.95] text-[#FFF3D6] md:text-6xl lg:text-7xl">
                Latest Updates & Media Coverage
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#F2E6C9]/78">
                Follow the latest campaign announcements, news coverage, and
                official updates from Myron Lizer for Navajo Nation President.
              </p>
            </div>

            <div className="rounded-3xl border border-[#F2E6C9]/15 bg-black/35 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.45)] backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#FF5A36] text-white">
                  <Newspaper size={24} />
                </div>

                <div>
                  <h2 className="text-xl font-black uppercase text-[#FFF3D6]">
                    Campaign Announcement Summary
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-[#F2E6C9]/75">
                    Myron Lizer announced his candidacy for President of the
                    Navajo Nation with a message focused on leadership,
                    opportunity, growth, economic sovereignty, infrastructure,
                    jobs, accountability, and long-term prosperity for the
                    Navajo people. As the campaign moves forward, this page will
                    be updated with approved announcements, media coverage, and
                    official campaign communications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CampaignDivider />
      </section>

      <section className="bg-[#050505] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Featured Coverage
              </p>

              <h2 className="mt-2 text-3xl font-black uppercase text-[#FFF3D6] md:text-4xl">
                In The News
              </h2>

              <p className="mt-4 max-w-3xl text-base leading-7 text-[#F2E6C9]/70">
                Recent articles covering Myron Lizer’s campaign announcement
                and the 2026 Navajo Nation presidential election.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredArticles.map((article) => (
              <article
                key={article.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#F2E6C9]/15 bg-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/60 hover:bg-white/[0.07]"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={`object-cover transition duration-500 group-hover:scale-105 ${article.imagePosition}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-black uppercase tracking-[0.15em] text-[#FF5A36]">
                    {article.source} • {article.date}
                  </p>

                  <h3 className="mt-3 text-2xl font-black leading-tight text-[#FFF3D6]">
                    {article.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-[#F2E6C9]/70">
                    {article.summary}
                  </p>

                  <a
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-black uppercase text-[#FF5A36] transition hover:text-[#F2E6C9]"
                  >
                    Read Article <ArrowUpRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Campaign Communications
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
              More Updates Coming Soon
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-black/70">
              This page will continue to grow as the campaign releases official
              announcements, event information, media content, interviews, and
              approved messaging.
            </p>

            <Link
              href="/get-involved"
              className="mt-8 inline-flex rounded bg-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.25)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
            >
              Join The Campaign
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {campaignUpdates.map((update) => (
              <article
                key={update.title}
                className="rounded-2xl border border-[#5A1E17]/20 bg-[#FFF3D6] p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-[#5A1E17] text-[#FF5A36]">
                  <ShieldCheck size={24} />
                </div>

                <h3 className="text-lg font-black uppercase leading-tight text-[#050505]">
                  {update.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-black/65">
                  {update.text}
                </p>
              </article>
            ))}
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

        <div className="relative mx-auto grid max-w-7xl gap-8 rounded-3xl border border-[#F2E6C9]/15 bg-black/25 p-8 md:grid-cols-[1fr_auto] md:items-center lg:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Stay Connected
            </p>

            <h2 className="mt-2 text-3xl font-black uppercase text-[#FFF3D6] md:text-4xl">
              Follow Campaign Announcements
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[#F2E6C9]/75">
              Check back for official updates, campaign events, press coverage,
              and newly approved content from the campaign team.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Link
              href="/events"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#F2E6C9]/35 px-6 py-3 text-sm font-black uppercase text-[#FFF3D6] transition hover:border-[#FF5A36] hover:text-[#FF5A36]"
            >
              <CalendarDays size={17} />
              View Events
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

      <CampaignFooter />
    </main>
  );
}