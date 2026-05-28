import type { Metadata } from "next";
import Link from "next/link";
import {
  CalendarDays,
  Megaphone,
  PlayCircle,
  Share2,
  Video,
} from "lucide-react";
import CampaignDivider from "../components/CampaignDivider";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Watch | Myron Lizer for Navajo Nation President",
  description:
    "Watch campaign videos, interviews, public messages, and updates from Myron Lizer for Navajo Nation President.",
  openGraph: {
    title: "Watch | Myron Lizer for Navajo Nation President",
    description:
      "Watch campaign videos, interviews, public messages, and updates from Myron Lizer for Navajo Nation President.",
    url: "https://www.lizerfornavajonation.com/watch",
    siteName: "Myron Lizer for Navajo Nation President",
    type: "website",
    images: ["/images/myron-lizer/myron-hero-orange.jpg"],
  },
};

const latestVideo = {
  title: "Can Business Leadership Save The Navajo Nation?",
  eyebrow: "Latest Campaign Video",
  youtubeId: "P7Wr3k50MGY",
  description:
    "Hear directly from Myron Lizer as he shares his message, leadership vision, and commitment to the future of the Navajo Nation.",
  date: "NavConPatriot • Featured Interview",
};

const videos = [
  {
    title: "Navajo Nation Outreach: Christians In Politics",
    eyebrow: "Campaign Interview",
    youtubeId: "fAyHuQoZRmo",
    description:
      "Myron Lizer joins OvercomersTV.Live for a Navajo Nation outreach interview discussing faith, leadership, Christians in politics, and his 2026 run for Navajo Nation President.",
    date: "OvercomersTV.Live • Episode 027",
  },
  latestVideo,
];

const watchHighlights = [
  {
    icon: Megaphone,
    label: "Message",
    title: "Leadership Rooted In Experience",
    text: "Myron Lizer brings decades of leadership, business experience, and public service to the conversation about the future of the Navajo Nation.",
  },
  {
    icon: Video,
    label: "Updates",
    title: "Interviews & Campaign Videos",
    text: "Follow campaign interviews, event recaps, public remarks, livestreams, and short updates from the trail.",
  },
  {
    icon: Share2,
    label: "Share",
    title: "Help Spread The Message",
    text: "Supporters can share videos with family, chapters, communities, and voters who want to hear directly from the campaign.",
  },
];

export default function WatchPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#FFF3D6]">
      {/* HERO / LATEST VIDEO */}
      <section className="relative overflow-hidden bg-[#050505] pt-20 text-[#FFF3D6] lg:pt-24">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 to-[#5A1E17]/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(255,90,54,0.24),transparent_34%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(242,230,201,0.08),transparent_30%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 overflow-hidden px-5 py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:overflow-visible lg:py-16">
          <div>
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.28em] text-[#FF5A36]">
                Watch
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h1 className="mt-5 max-w-full break-words text-[3.15rem] font-black uppercase leading-[0.92] tracking-[-0.04em] text-[#FFF3D6] sm:text-6xl lg:text-7xl">
                Watch The Latest From Myron Lizer
              </h1>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="mt-6 h-1 w-28 bg-[#FF5A36]" />
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F2E6C9]/82">
                Campaign videos, interviews, public messages, and updates from
                the trail — all in one place for supporters and community
                members.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#latest-videos"
                  className="rounded bg-[#FF5A36] px-7 py-4 text-center text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.34)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
                >
                  View Videos
                </a>

                <Link
                  href="/get-involved"
                  className="rounded border border-[#F2E6C9]/70 bg-[#F2E6C9] px-7 py-4 text-center text-sm font-black uppercase text-[#050505] transition hover:-translate-y-1 hover:bg-white"
                >
                  Get Involved
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal
            delay={0.16}
            className="relative mx-auto w-full max-w-2xl overflow-hidden"
          >
            <div className="absolute -bottom-8 left-8 right-8 h-28 rounded-full bg-[#FF5A36]/20 blur-3xl" />
            <div className="absolute -top-8 right-10 h-40 w-40 rounded-full bg-[#F2E6C9]/10 blur-3xl" />

            <div className="relative rounded-3xl border border-[#F2E6C9]/20 bg-black/35 p-3 shadow-[0_35px_90px_rgba(0,0,0,0.55)]">
              <div className="overflow-hidden rounded-[1.25rem] border border-[#F2E6C9]/10 bg-black">
                <div className="relative aspect-video">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${latestVideo.youtubeId}`}
                    title={latestVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              <div className="mt-4 grid gap-3 rounded-2xl border border-[#F2E6C9]/14 bg-black/35 p-4 sm:grid-cols-[auto_1fr] sm:items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF5A36] text-white">
                  <PlayCircle className="h-6 w-6" />
                </div>

                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-[#FF5A36]">
                    {latestVideo.eyebrow}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-[#F2E6C9]/72">
                    {latestVideo.title}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <CampaignDivider />
      </section>

      {/* FEATURED VIDEO DETAILS */}
      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                {latestVideo.eyebrow}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                {latestVideo.title}
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 text-lg leading-8 text-black/75">
                {latestVideo.description}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="rounded-3xl border border-black/10 bg-[#FFF3D6]/70 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.12)]">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Campaign Media
              </p>

              <h3 className="mt-4 text-3xl font-black uppercase leading-tight text-[#050505]">
                Videos, Interviews, And Campaign Updates
              </h3>

              <p className="mt-5 text-base leading-8 text-black/70">
                This page is built as the campaign video hub. As new interviews,
                public messages, event recaps, and livestreams are released, the
                newest video can move to the top while older videos remain
                available below.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* VIDEO LIBRARY */}
      <section
        id="latest-videos"
        className="bg-[#F2E6C9] px-5 pb-20 text-[#050505]"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Latest Videos
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                Campaign Video Library
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 text-lg leading-8 text-black/75">
                Watch the latest campaign videos and check back as more updates
                are added throughout the campaign.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <Reveal key={video.youtubeId} delay={index * 0.06}>
                <article className="h-full overflow-hidden rounded-3xl border border-black/10 bg-[#FFF3D6]/70 shadow-[0_24px_70px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(0,0,0,0.16)]">
                  <div className="relative aspect-video bg-black">
                    <iframe
                      className="absolute inset-0 h-full w-full"
                      src={`https://www.youtube.com/embed/${video.youtubeId}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>

                  <div className="p-8">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6F1711] text-[#FF5A36]">
                      <PlayCircle className="h-7 w-7" />
                    </div>

                    <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                      {video.eyebrow}
                    </p>

                    <p className="mt-4 text-sm font-black uppercase tracking-[0.18em] text-black/45">
                      {video.date}
                    </p>

                    <h3 className="mt-4 text-2xl font-black uppercase leading-tight tracking-[0.03em] text-[#050505]">
                      {video.title}
                    </h3>

                    <p className="mt-6 text-base leading-8 text-black/68">
                      {video.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}

            <Reveal delay={0.12}>
              <article className="flex h-full min-h-[420px] flex-col justify-center rounded-3xl border border-dashed border-black/20 bg-[#FFF3D6]/50 p-8 text-center shadow-[0_24px_70px_rgba(0,0,0,0.08)]">
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6F1711] text-[#FF5A36]">
                  <CalendarDays className="h-7 w-7" />
                </div>

                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                  More Coming Soon
                </p>

                <h3 className="mt-4 text-2xl font-black uppercase leading-tight tracking-[0.03em] text-[#050505]">
                  Future Campaign Videos
                </h3>

                <p className="mt-6 text-base leading-8 text-black/68">
                  Additional interviews, event recaps, livestreams, and campaign
                  updates can be added here as they are released.
                </p>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WATCH HIGHLIGHTS */}
      <section className="relative overflow-hidden bg-[#050505] px-5 py-20 text-[#FFF3D6]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/95 to-[#5A1E17]/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,rgba(255,90,54,0.18),transparent_34%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Share The Message
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                Follow The Campaign From The Trail
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 text-lg leading-8 text-[#F2E6C9]/75">
                Videos make it easier for supporters, families, chapters, and
                communities to hear the campaign message directly.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {watchHighlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.08}>
                  <div className="h-full rounded-3xl border border-[#F2E6C9]/14 bg-white/[0.06] p-8 shadow-[0_24px_70px_rgba(0,0,0,0.24)]">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FF5A36] text-white">
                      <Icon className="h-7 w-7" />
                    </div>

                    <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                      {item.label}
                    </p>

                    <h3 className="mt-4 text-2xl font-black uppercase leading-tight tracking-[0.03em] text-[#FFF3D6]">
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
              Stay Connected
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
              Follow The Campaign And Stay Updated
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-black/72">
              Watch for new videos, upcoming events, interviews, and campaign
              announcements as Myron Lizer continues sharing his vision for the
              Navajo Nation.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/events"
                className="rounded bg-[#FF5A36] px-7 py-4 text-center text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.34)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
              >
                View Events
              </Link>

              <Link
                href="/get-involved"
                className="rounded border border-[#050505]/15 bg-[#050505] px-7 py-4 text-center text-sm font-black uppercase text-[#FFF3D6] transition hover:-translate-y-1 hover:bg-[#1b1b1b]"
              >
                Get Involved
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}