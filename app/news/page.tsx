import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  FileText,
  Megaphone,
  Newspaper,
  Radio,
  ShieldCheck,
} from "lucide-react";
import CampaignDivider from "../components/CampaignDivider";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "News | Myron Lizer for Navajo Nation President",
  description:
    "Latest news, public coverage, campaign announcements, and media references for Myron Lizer for Navajo Nation President.",
  openGraph: {
    title: "News | Myron Lizer for Navajo Nation President",
    description:
      "Follow recent public coverage, campaign announcements, and media updates from Myron Lizer for Navajo Nation President.",
    images: ["/images/myron-lizer/news-hero.jpg"],
  },
};

const featuredArticles = [
  {
    source: "Navajo Times",
    date: "May 2026",
    type: "News Article",
    title: "Lizer Launches Navajo Presidential Bid Focused On Jobs, Energy",
    summary:
      "Coverage of Myron Lizer’s campaign launch and his message around economic sovereignty, jobs, infrastructure, energy, and long-term prosperity.",
    href: "https://navajotimes.com/reznews/lizer-launches-navajo-presidential-bid-focused-on-jobs-energy/",
  },
  {
    source: "Gallup Sun",
    date: "May 2026",
    type: "Campaign Announcement",
    title: "Former VP Myron Lizer Announces Candidacy For Navajo Nation President",
    summary:
      "Announcement coverage highlighting visionary leadership, economic sovereignty, long-term prosperity, and restoring integrity to the Office of the President.",
    href: "https://gallupsunweekly.com/2026/05/13/former-vp-myron-lizer-announces-candidacy-for-navajo-nation-president/",
  },
  {
    source: "ICT",
    date: "May 2026",
    type: "Election Overview",
    title: "The Navajo Nation 2026 Presidential Election",
    summary:
      "Election coverage outlining the 2026 Navajo Nation presidential field, including former Vice President Myron Lizer among the candidates.",
    href: "https://ictnews.org/news/the-navajo-nation-2026-presidential-election/",
  },
  {
    source: "Navajo Election Administration",
    date: "April 2026",
    type: "Official Election Notice",
    title: "2026 Navajo Nation Presidential Candidate Filing Notice",
    summary:
      "Official public election information listing filed candidates for Navajo Nation President following the April filing deadline.",
    href: "https://nnemaildist.navajo-nsn.gov/Portals/0/Announcements/2026/Apr/Public%20Service%20Announcement.pdf",
  },
  {
    source: "KJZZ",
    date: "May 2026",
    type: "Election Coverage",
    title: "Incumbent Navajo Nation President Faces 15 Challengers",
    summary:
      "Public election coverage describing the crowded 2026 Navajo Nation presidential race and the larger political context surrounding the campaign season.",
    href: "https://www.kjzz.org/the-show/2026-05-05/incumbent-navajo-nation-president-buu-nygren-faces-15-challengers-in-presidential-race",
  },
  {
    source: "Native News Online",
    date: "April 2026",
    type: "Election Coverage",
    title: "Navajo Nation Council Speaker Announces Bid For President",
    summary:
      "Broader Native Vote coverage naming several prominent candidates in the 2026 Navajo Nation presidential race, including former Vice President Myron Lizer.",
    href: "https://nativenewsonline.net/sovereignty/navajo-nation-council-speaker-curley-announces-bid-for-navajo-nation-president",
  },
];

const mediaMentions = [
  {
    source: "Navajo Times",
    date: "May 2026",
    title: "Navajo Times Social Post Sharing Launch Coverage",
    summary:
      "A public social media post from Navajo Times sharing its coverage of Myron Lizer’s campaign launch.",
    href: "https://www.instagram.com/p/DYe7lV1lIre/",
  },
  {
    source: "Navajo Times",
    date: "May 2026",
    title: "Navajo Times Social Update",
    summary:
      "A public social update from Navajo Times referencing its report that former Vice President Myron Lizer is running for Navajo Nation President.",
    href: "https://x.com/navajotimes/status/2055312316883951666",
  },
  {
    source: "YouTube",
    date: "January 2025",
    title: "Former Vice President Myron Lizer Public Remarks",
    summary:
      "A public video of Myron Lizer addressing a tribal gathering in Washington, D.C. This can be reviewed as background media if approved by the campaign.",
    href: "https://www.youtube.com/watch?v=gxj1TFiRpks",
  },
];

const updateCards = [
  {
    icon: ShieldCheck,
    title: "Campaign Review",
    text: "News items, announcements, event details, and public statements should be reviewed by the campaign before being treated as official campaign messaging.",
  },
  {
    icon: FileText,
    title: "Official Updates",
    text: "As official platform language is finalized, this page can link to approved policy statements, press releases, interviews, and campaign updates.",
  },
  {
    icon: CalendarDays,
    title: "Events & Appearances",
    text: "Confirmed campaign events, community appearances, chapter visits, and media interviews can be added as they are announced.",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#FFF3D6]">
      <section className="relative overflow-hidden bg-[#050505] pt-20 text-[#FFF3D6] lg:pt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/myron-lizer/news-hero.jpg"
            alt=""
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover object-center opacity-28"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/94 to-[#5A1E17]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_30%,rgba(255,90,54,0.24),transparent_35%)]" />
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
                Campaign News
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <h1 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.95] text-[#FFF3D6] md:text-6xl lg:text-7xl">
                Updates, Coverage & Public Mentions
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-6 h-1 w-28 bg-[#FF5A36]" />
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F2E6C9]/80">
                Follow recent public coverage, campaign announcements, election
                references, and media mentions related to Myron Lizer for Navajo
                Nation President.
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

 <Reveal delay={0.16} className="relative">
  <div className="absolute -bottom-8 left-8 right-8 h-28 rounded-full bg-[#FF5A36]/20 blur-3xl" />
  <div className="absolute -top-8 right-10 h-40 w-40 rounded-full bg-[#F2E6C9]/10 blur-3xl" />

  <div className="relative overflow-hidden rounded-3xl border border-[#F2E6C9]/15 bg-black/35 shadow-[0_35px_90px_rgba(0,0,0,0.55)]">
    <div className="relative h-[520px] w-full sm:h-[460px] lg:h-[520px]">
      <Image
        src="/images/myron-lizer/news-hero.jpg"
        alt="Navajo Nation Executive Branch Building"
        fill
        priority
        loading="eager"
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover object-[center_45%] sm:object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/96 via-[#050505]/45 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/40 via-transparent to-[#5A1E17]/25" />

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 md:p-8">
        <div className="mx-auto flex w-full max-w-[560px] flex-col items-center rounded-3xl border border-white/10 bg-black/82 p-5 text-center shadow-[0_25px_70px_rgba(0,0,0,0.65)] backdrop-blur-xl sm:p-6">
          <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#FF5A36] text-white shadow-[0_12px_30px_rgba(255,90,54,0.28)] sm:h-14 sm:w-14">
            <Newspaper size={24} />
          </div>

          <p className="mt-4 text-[0.65rem] font-black uppercase tracking-[0.2em] text-[#FF5A36] sm:text-xs">
            Current Public Message
          </p>

          <h2 className="mt-3 text-xl font-black uppercase leading-tight tracking-[-0.03em] text-[#FFF3D6] sm:text-2xl md:text-3xl">
            Economic Sovereignty, Jobs, Energy & Integrity
          </h2>

          <p className="mt-4 text-sm leading-7 text-[#F2E6C9]/95 sm:text-base">
            Recent public coverage has centered on Myron Lizer’s campaign
            launch, his call for economic sovereignty, and his message around
            jobs, infrastructure, energy, long-term prosperity, and restoring
            integrity to the Office of the President.
          </p>
        </div>
      </div>
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
                Featured Coverage
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                Public Articles & Election References
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 text-base leading-8 text-black/70">
                This section links to public articles and election references.
                Article images are intentionally omitted so the page remains
                lightweight and easier to maintain as new coverage is added.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredArticles.map((article, index) => (
              <Reveal key={article.title} delay={index * 0.05}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-[#5A1E17]/15 bg-[#FFF3D6] p-7 shadow-[0_18px_45px_rgba(5,5,5,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/50 hover:shadow-[0_28px_70px_rgba(5,5,5,0.18)]">
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FF5A36]/10 blur-2xl transition group-hover:bg-[#FF5A36]/20" />

                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-[#5A1E17] text-[#FF5A36] shadow-[0_14px_30px_rgba(90,30,23,0.22)]">
                    <Newspaper size={28} />
                  </div>

                  <p className="relative mt-5 text-xs font-black uppercase tracking-[0.22em] text-[#FF5A36]">
                    {article.type}
                  </p>

                  <p className="relative mt-4 text-xs font-black uppercase tracking-[0.18em] text-[#5A1E17]/55">
                    {article.source} • {article.date}
                  </p>

                  <h3 className="relative mt-3 text-2xl font-black uppercase leading-tight text-[#050505]">
                    {article.title}
                  </h3>

                  <p className="relative mt-5 text-sm leading-7 text-black/68">
                    {article.summary}
                  </p>

                  <Link
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mt-7 inline-flex items-center gap-2 text-sm font-black uppercase text-[#FF5A36] transition hover:gap-3 hover:text-[#5A1E17]"
                  >
                    Read Source
                    <ArrowUpRight size={17} />
                  </Link>
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
                Social & Media Mentions
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-[#FFF3D6] md:text-5xl">
                Public Posts, Video & Media References
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#F2E6C9]/75">
                These links include public media references and social posts.
                Campaign-specific videos, interviews, and event recaps can be
                added here once they are approved by the campaign team.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded border border-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-[#FF5A36] transition hover:-translate-y-1 hover:bg-[#FF5A36] hover:text-white"
              >
                Send A Media Tip
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-5">
            {mediaMentions.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="group rounded-3xl border border-[#F2E6C9]/15 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/60 hover:bg-white/10">
                  <div className="flex gap-5">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-[#FF5A36] text-white shadow-[0_12px_30px_rgba(255,90,54,0.24)]">
                      <Radio size={26} />
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FF5A36]">
                        {item.source} • {item.date}
                      </p>

                      <h3 className="mt-3 text-xl font-black uppercase leading-tight text-[#FFF3D6]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-[#F2E6C9]/70">
                        {item.summary}
                      </p>

                      <Link
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-black uppercase text-[#FF5A36] transition hover:gap-3 hover:text-[#F2E6C9]"
                      >
                        Open Link
                        <ArrowUpRight size={17} />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Campaign Communications
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                More Updates Coming Soon
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-base leading-8 text-black/70">
                This page will continue to grow as the campaign releases
                official announcements, event information, media content,
                interviews, press statements, and approved messaging.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                href="/get-involved"
                className="mt-8 inline-flex items-center gap-2 rounded bg-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.25)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
              >
                Join The Campaign
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {updateCards.map((update, index) => {
              const Icon = update.icon;

              return (
                <Reveal key={update.title} delay={index * 0.06}>
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-[#5A1E17]/15 bg-[#FFF3D6] p-7 shadow-[0_18px_45px_rgba(5,5,5,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/50 hover:shadow-[0_28px_70px_rgba(5,5,5,0.18)]">
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FF5A36]/10 blur-2xl transition group-hover:bg-[#FF5A36]/20" />

                    <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-[#5A1E17] text-[#FF5A36] shadow-[0_14px_30px_rgba(90,30,23,0.22)]">
                      <Icon size={28} />
                    </div>

                    <h3 className="relative mt-6 text-lg font-black uppercase leading-tight text-[#050505]">
                      {update.title}
                    </h3>

                    <p className="relative mt-4 text-sm leading-7 text-black/65">
                      {update.text}
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
              Follow Campaign Updates As They Are Released
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[#F2E6C9]/75">
              Check back for new articles, official statements, campaign event
              updates, videos, and approved public announcements.
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