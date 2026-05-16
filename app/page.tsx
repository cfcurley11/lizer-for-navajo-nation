import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  Heart,
  Mail,
  ShieldCheck,
  TrendingUp,
  Users,
  Handshake,
  Landmark,
} from "lucide-react";
import type { Metadata } from "next";
import CampaignDivider from "./components/CampaignDivider";

export const metadata: Metadata = {
  title: "Myron Lizer for Navajo Nation President",
  description:
    "Official campaign website for Myron Lizer, 2026 Navajo Nation President candidate, focused on leadership, opportunity, growth, integrity, and prosperity for the Navajo people.",
  openGraph: {
    title: "Myron Lizer for Navajo Nation President",
    description:
      "Leadership, opportunity, growth, and long-term prosperity for the Navajo Nation.",
    images: ["/images/myron-lizer/myron-hero-orange.jpg"],
  },
};

const values = [
  {
    icon: Users,
    title: "Our People",
    text: "Empowering families and strengthening communities.",
  },
  {
    icon: Handshake,
    title: "Our Economy",
    text: "Supporting opportunity, jobs, and Navajo-owned businesses.",
  },
  {
    icon: ShieldCheck,
    title: "Our Future",
    text: "Investing in youth, education, and infrastructure.",
  },
  {
    icon: Heart,
    title: "Our Values",
    text: "Leading with faith, unity, respect, and accountability.",
  },
];

const priorities = [
  {
    icon: TrendingUp,
    title: "Strong Economy",
    text: "Create jobs, support Navajo businesses, and build self-reliance.",
  },
  {
    icon: Users,
    title: "Strong Families",
    text: "Invest in education, healthcare, housing, and youth.",
  },
  {
    icon: Landmark,
    title: "Better Infrastructure",
    text: "Improve roads, utilities, broadband, and essential services.",
  },
  {
    icon: ShieldCheck,
    title: "Protect Our Land",
    text: "Preserve land, water, and natural resources.",
  },
];

const newsArticles = [
  {
    source: "Navajo Times",
    date: "May 2026",
    title: "Lizer Launches Presidential Bid Focused on Jobs & Energy",
    text: "Coverage of Myron Lizer’s campaign launch and his focus on economic sovereignty, jobs, infrastructure, and long-term prosperity.",
    image: "/images/myron-lizer/myron-about-leadership.jpg",
    imagePosition: "object-[center_42%]",
    alt: "Myron Lizer campaign leadership portrait",
    href: "https://navajotimes.com/reznews/lizer-launches-navajo-presidential-bid-focused-on-jobs-energy/",
  },
  {
    source: "Gallup Sun",
    date: "May 2026",
    title: "Former VP Myron Lizer Announces Candidacy",
    text: "Announcement coverage highlighting Lizer’s campaign for President of the Navajo Nation and his message of leadership, opportunity, and growth.",
    image: "/images/myron-lizer/myron-community-veterans.jpg",
    imagePosition: "object-[center_30%]",
    alt: "Myron Lizer with community and veterans",
    href: "https://gallupsunweekly.com/2026/05/13/former-vp-myron-lizer-announces-candidacy-for-navajo-nation-president/",
  },
  {
    source: "ICT",
    date: "May 2026",
    title: "The Navajo Nation 2026 Presidential Election",
    text: "Election coverage outlining the 2026 Navajo Nation presidential field, including former Vice President Myron Lizer.",
    image: "/images/myron-lizer/myron-about-speaking.jpg",
    imagePosition: "object-[center_28%]",
    alt: "Myron Lizer speaking at campaign event",
    href: "https://ictnews.org/news/the-navajo-nation-2026-presidential-election/",
  },
];

const events = [
  {
    date: "May 24",
    title: "Window Rock Community Meet & Greet",
    location: "Window Rock, AZ",
  },
  {
    date: "May 31",
    title: "Shiprock Chapter Visit",
    location: "Shiprock, NM",
  },
  {
    date: "Jun 07",
    title: "Gallup Campaign Rally",
    location: "Gallup, NM",
  },
];

export default function MyronLizerCampaignPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#FFF3D6]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes campaignReveal {
              from {
                opacity: 0;
                transform: translateY(26px);
                filter: blur(6px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
                filter: blur(0);
              }
            }

            @keyframes campaignImageReveal {
              from {
                opacity: 0;
                transform: translateY(30px) scale(0.98);
                filter: blur(8px);
              }
              to {
                opacity: 1;
                transform: translateY(0) scale(1);
                filter: blur(0);
              }
            }

            .campaign-reveal {
              animation: campaignReveal 0.85s ease-out both;
            }

            .campaign-image-reveal {
              animation: campaignImageReveal 1s ease-out both;
            }

            .delay-100 { animation-delay: 0.1s; }
            .delay-200 { animation-delay: 0.2s; }
            .delay-300 { animation-delay: 0.3s; }
            .delay-400 { animation-delay: 0.4s; }
          `,
        }}
      />

      <section className="relative overflow-hidden bg-[#050505] pt-20 lg:pt-24">
        <div className="absolute inset-0">
          <Image
            src="/images/myron-lizer/hero-dark-texture.png"
            alt=""
            fill
            priority
            loading="eager"
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/92 to-[#050505]/35" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,90,54,0.22),transparent_35%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:py-16">
          <div className="campaign-reveal">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#FFF3D6]">
              Myron
            </p>

            <h1 className="mt-3 max-w-2xl text-7xl font-black uppercase leading-[0.82] tracking-tight text-[#FF5A36] md:text-8xl lg:text-9xl">
              Lizer
            </h1>

            <p className="mt-4 text-xl font-black uppercase tracking-[0.08em] text-[#FFF3D6] md:text-2xl">
              2026 Navajo Nation President
            </p>

            <div className="mt-5 h-1 w-32 bg-[#FF5A36]" />

            <p className="mt-6 text-2xl font-black text-[#F2E6C9]">
              Leadership • Opportunity • Growth
            </p>

            <p className="mt-5 max-w-xl text-lg leading-8 text-[#F2E6C9]/85">
              A Navajo leader with a clear vision for a stronger, more
              prosperous Navajo Nation. Together, we can build a future of
              opportunity, unity, and lasting growth for our people.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/get-involved"
                className="rounded bg-[#FF5A36] px-7 py-4 text-center text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.32)] transition hover:-translate-y-1 hover:bg-[#e94b2c] hover:shadow-[0_18px_45px_rgba(255,90,54,0.42)]"
              >
                Join the Campaign
              </Link>

              <Link
                href="/priorities"
                className="rounded border border-[#F2E6C9]/70 bg-[#F2E6C9] px-7 py-4 text-center text-sm font-black uppercase text-[#050505] transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                View Priorities
              </Link>
            </div>
          </div>

          <div className="campaign-image-reveal delay-200 relative mx-auto w-full max-w-xl">
            <div className="absolute -bottom-8 left-8 right-8 h-28 rounded-full bg-[#FF5A36]/25 blur-3xl" />
            <div className="absolute -top-8 right-10 h-40 w-40 rounded-full bg-[#F2E6C9]/10 blur-3xl" />

            <Image
              src="/images/myron-lizer/myron-hero-orange.jpg"
              alt="Myron Lizer"
              width={900}
              height={900}
              priority
              loading="eager"
              className="relative h-[380px] w-full rounded-3xl border border-[#F2E6C9]/20 object-cover shadow-[0_35px_90px_rgba(0,0,0,0.55)] lg:h-[520px]"
            />
          </div>
        </div>

        <CampaignDivider />
      </section>

      <section className="bg-[#F2E6C9] px-5 py-16 text-[#050505]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="campaign-reveal">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Our Commitment
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
              Building a Stronger Navajo Nation
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-black/75">
              We are committed to good governance, economic opportunity,
              community development, and protecting our way of life for
              generations to come.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex rounded border border-[#FF5A36] px-6 py-3 text-sm font-black uppercase text-[#FF5A36] transition hover:-translate-y-1 hover:bg-[#FF5A36] hover:text-white"
            >
              Learn More About Myron
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`campaign-reveal rounded-2xl border border-[#5A1E17]/20 bg-[#FFF3D6] p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    index === 0
                      ? "delay-100"
                      : index === 1
                      ? "delay-200"
                      : index === 2
                      ? "delay-300"
                      : "delay-400"
                  }`}
                >
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#5A1E17]">
                    <Icon className="h-8 w-8 text-[#FF5A36]" />
                  </div>

                  <h3 className="mt-5 text-sm font-black uppercase text-[#050505]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/65">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#050505] px-5 py-20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/myron-lizer/hero-dark-texture.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-30"
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="campaign-image-reveal relative">
            <div className="absolute -bottom-6 left-8 h-32 w-32 rounded-full bg-[#FF5A36]/20 blur-3xl" />
            <Image
              src="/images/myron-lizer/myron-about-speaking.jpg"
              alt="Myron Lizer speaking"
              width={850}
              height={600}
              className="relative rounded-3xl border border-[#F2E6C9]/20 object-cover shadow-[0_35px_90px_rgba(0,0,0,0.55)]"
            />
          </div>

          <div className="campaign-reveal">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              A Vision For Tomorrow
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-[#FFF3D6] md:text-5xl">
              Honoring Our Past. Building Our Future.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#F2E6C9]/80">
              Our traditions guide us, our values unite us, and our future
              depends on leadership that understands the needs of Navajo
              families and communities.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "Leadership grounded in service and accountability",
                "Opportunity for Navajo families and small businesses",
                "Growth that protects culture, land, and future generations",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#F2E6C9]/15 bg-white/5 p-5 text-sm font-bold text-[#F2E6C9]"
                >
                  {item}
                </div>
              ))}
            </div>

            <Link
              href="/priorities"
              className="mt-9 inline-flex rounded bg-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.26)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
            >
              View Full Priorities
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto max-w-7xl text-center">
          <div className="campaign-reveal">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Campaign Priorities
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase md:text-5xl">
              Leadership • Opportunity • Growth
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-black/70">
              A campaign focused on restoring integrity, strengthening economic
              opportunity, supporting Navajo families, and building long-term
              prosperity across the Navajo Nation.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {priorities.map((item, index) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className={`campaign-reveal rounded-2xl border border-[#5A1E17]/20 bg-[#FFF3D6] p-7 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                    index === 0
                      ? "delay-100"
                      : index === 1
                      ? "delay-200"
                      : index === 2
                      ? "delay-300"
                      : "delay-400"
                  }`}
                >
                  <Icon className="h-10 w-10 text-[#FF5A36]" />

                  <h3 className="mt-5 text-lg font-black uppercase text-[#050505]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-black/65">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#5A1E17] px-5 py-16 text-[#FFF3D6]">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/myron-lizer/hero-dark-texture.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>

        <div className="relative mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-4">
          <div className="campaign-reveal md:col-span-1">
            <h2 className="text-3xl font-black uppercase text-[#FF5A36]">
              Be Part of the Change
            </h2>

            <p className="mt-3 text-[#F2E6C9]/80">
              Together, we can build a stronger future for the Navajo Nation.
            </p>
          </div>

          <Link
            href="/get-involved"
            className="campaign-reveal delay-100 rounded-xl border border-[#F2E6C9]/20 bg-black/25 p-6 text-center transition hover:-translate-y-2 hover:border-[#FF5A36] hover:bg-black/40"
          >
            <Users className="mx-auto h-9 w-9 text-[#FF5A36]" />
            <p className="mt-3 font-black uppercase">Volunteer</p>
            <p className="text-sm text-[#F2E6C9]/70">Join our team</p>
          </Link>

          <Link
            href="/donate"
            className="campaign-reveal delay-200 rounded-xl border border-[#F2E6C9]/20 bg-black/25 p-6 text-center transition hover:-translate-y-2 hover:border-[#FF5A36] hover:bg-black/40"
          >
            <Heart className="mx-auto h-9 w-9 text-[#FF5A36]" />
            <p className="mt-3 font-black uppercase">Donate</p>
            <p className="text-sm text-[#F2E6C9]/70">Support our campaign</p>
          </Link>

          <Link
            href="/contact"
            className="campaign-reveal delay-300 rounded-xl border border-[#F2E6C9]/20 bg-black/25 p-6 text-center transition hover:-translate-y-2 hover:border-[#FF5A36] hover:bg-black/40"
          >
            <Mail className="mx-auto h-9 w-9 text-[#FF5A36]" />
            <p className="mt-3 font-black uppercase">Contact</p>
            <p className="text-sm text-[#F2E6C9]/70">Get in touch</p>
          </Link>
        </div>
      </section>

      <section className="bg-[#050505] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="campaign-reveal">
            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                  Campaign Announcement
                </p>

                <h2 className="mt-2 text-3xl font-black uppercase text-[#FFF3D6] md:text-4xl">
                  Latest News
                </h2>

                <p className="mt-4 max-w-3xl text-base leading-7 text-[#F2E6C9]/75">
                  Myron Lizer announced his candidacy for President of the
                  Navajo Nation with a message centered on visionary leadership,
                  economic sovereignty, jobs, infrastructure, integrity, and
                  long-term prosperity for the Navajo people.
                </p>
              </div>

              <Link
                href="/news"
                className="text-sm font-black uppercase text-[#FF5A36] transition hover:text-[#F2E6C9]"
              >
                View All News
              </Link>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {newsArticles.map((article) => (
                <article
                  key={article.title}
                  className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#F2E6C9]/15 bg-white/5 shadow-[0_18px_45px_rgba(0,0,0,0.35)] transition hover:-translate-y-2 hover:border-[#FF5A36]/60"
                >
                  <Image
                    src={article.image}
                    alt={article.alt}
                    width={900}
                    height={450}
                    className={`h-44 w-full object-cover ${article.imagePosition}`}
                  />

                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-xs font-black uppercase tracking-[0.15em] text-[#FF5A36]">
                      {article.source} • {article.date}
                    </p>

                    <h3 className="mt-2 text-xl font-black text-[#FFF3D6]">
                      {article.title}
                    </h3>

                    <p className="mt-3 flex-1 text-sm leading-6 text-[#F2E6C9]/70">
                      {article.text}
                    </p>

                    <a
                      href={article.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex text-sm font-black uppercase text-[#FF5A36] transition hover:text-[#F2E6C9]"
                    >
                      Read Article →
                    </a>
                  </div>
                </article>
              ))}
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

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Upcoming Events
              </p>

              <h2 className="mt-2 text-3xl font-black uppercase text-[#FFF3D6] md:text-4xl">
                Meet The Campaign
              </h2>
            </div>

            <Link
              href="/events"
              className="text-sm font-black uppercase text-[#FF5A36] transition hover:text-[#F2E6C9]"
            >
              View All Events
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {events.map((event) => (
              <article
                key={event.title}
                className="rounded-2xl border border-[#F2E6C9]/15 bg-black/25 p-6 transition hover:-translate-y-2 hover:border-[#FF5A36]/60 hover:bg-black/40"
              >
                <div className="mb-5 inline-flex rounded-xl bg-[#FF5A36] px-4 py-3 text-sm font-black uppercase text-white">
                  {event.date}
                </div>

                <h3 className="text-lg font-black uppercase text-[#FFF3D6]">
                  {event.title}
                </h3>

                <p className="mt-2 flex items-center gap-2 text-sm text-[#F2E6C9]/70">
                  <CalendarDays size={16} /> {event.location}
                </p>
              </article>
            ))}
          </div>

          <Link
            href="/events"
            className="mt-8 inline-flex rounded border border-[#F2E6C9]/40 px-6 py-3 text-sm font-black uppercase text-[#FFF3D6] transition hover:-translate-y-1 hover:border-[#FF5A36] hover:text-[#FF5A36]"
          >
            View Campaign Events
          </Link>
        </div>
      </section>
    </main>
  );
}