import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  CalendarDays,
  CheckCircle,
  Heart,
  Mail,
  Newspaper,
  Users,
} from "lucide-react";
import CampaignDivider from "../components/CampaignDivider";

export const metadata: Metadata = {
  title: "Thank You | Myron Lizer for Navajo Nation President",
  description:
    "Thank you for contacting the Myron Lizer campaign. Your submission has been received.",
  openGraph: {
    title: "Thank You | Myron Lizer for Navajo Nation President",
    description:
      "Thank you for getting involved with the Myron Lizer campaign.",
    images: ["/images/myron-lizer/myron-community-veterans.jpg"],
  },
};

const nextSteps = [
  {
    icon: Users,
    title: "Stay Involved",
    text: "The campaign team can follow up with volunteer, outreach, or event opportunities.",
    href: "/get-involved",
    label: "Get Involved",
  },
  {
    icon: Newspaper,
    title: "Read Campaign News",
    text: "View the latest campaign announcements, articles, and media coverage.",
    href: "/news",
    label: "Latest News",
  },
  {
    icon: CalendarDays,
    title: "Attend Events",
    text: "Check upcoming campaign events, community visits, and outreach opportunities.",
    href: "/events",
    label: "View Events",
  },
];

export default function ThankYouPage() {
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/94 to-[#5A1E17]/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_30%,rgba(255,90,54,0.26),transparent_35%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-20">
          <div>
            <Link
              href="/"
              className="inline-flex text-xs font-black uppercase tracking-[0.2em] text-[#F2E6C9]/60 transition hover:text-[#FF5A36]"
            >
              ← Back to Home
            </Link>

            <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#FF5A36]/35 bg-[#FF5A36]/10 px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-[#FF5A36]">
              <CheckCircle size={19} />
              Submission Received
            </div>

            <h1 className="mt-6 max-w-3xl text-5xl font-black uppercase leading-[0.95] text-[#FFF3D6] md:text-6xl lg:text-7xl">
              Thank You For Getting Involved
            </h1>

            <div className="mt-6 h-1 w-28 bg-[#FF5A36]" />

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F2E6C9]/80">
              Your submission has been received. Thank you for taking the time
              to connect with the campaign and help support the message of
              leadership, opportunity, and growth for the Navajo Nation.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/news"
                className="rounded bg-[#FF5A36] px-7 py-4 text-center text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.32)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
              >
                Read Campaign News
              </Link>

              <Link
                href="/events"
                className="rounded border border-[#F2E6C9]/70 bg-[#F2E6C9] px-7 py-4 text-center text-sm font-black uppercase text-[#050505] transition hover:-translate-y-1 hover:bg-white"
              >
                View Events
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -bottom-8 left-8 right-8 h-28 rounded-full bg-[#FF5A36]/20 blur-3xl" />
            <div className="absolute -top-8 right-10 h-40 w-40 rounded-full bg-[#F2E6C9]/10 blur-3xl" />

            <div className="relative rounded-3xl border border-[#F2E6C9]/20 bg-black/35 p-8 shadow-[0_35px_90px_rgba(0,0,0,0.55)] backdrop-blur">
              <div className="grid h-20 w-20 place-items-center rounded-3xl bg-[#FF5A36] text-white shadow-[0_18px_45px_rgba(255,90,54,0.28)]">
                <Mail size={38} />
              </div>

              <h2 className="mt-8 text-3xl font-black uppercase leading-tight text-[#FFF3D6]">
                The Campaign Team Will Review Your Message
              </h2>

              <p className="mt-5 text-base leading-8 text-[#F2E6C9]/75">
                If follow-up is needed, the campaign can use the contact
                information you submitted to connect with you about volunteer
                opportunities, events, outreach, or other next steps.
              </p>

              <div className="mt-7 rounded-2xl border border-[#F2E6C9]/15 bg-white/5 p-5">
                <div className="flex gap-4">
                  <Heart className="mt-1 h-5 w-5 shrink-0 text-[#FF5A36]" />
                  <p className="text-sm font-bold leading-7 text-[#F2E6C9]/72">
                    Thank you for supporting the campaign and helping carry the
                    message forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CampaignDivider />
      </section>

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Next Steps
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
              Keep Following The Campaign
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-black/70">
              Stay connected with upcoming announcements, events, volunteer
              opportunities, and campaign updates as new information becomes
              available.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {nextSteps.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-[#5A1E17]/20 bg-[#FFF3D6] p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#5A1E17] text-[#FF5A36]">
                    <Icon size={26} />
                  </div>

                  <h3 className="mt-6 text-xl font-black uppercase text-[#050505]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-black/65">
                    {item.text}
                  </p>

                  <Link
                    href={item.href}
                    className="mt-6 inline-flex text-sm font-black uppercase text-[#FF5A36] transition hover:text-[#5A1E17]"
                  >
                    {item.label} →
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#5A1E17] px-5 py-16 text-[#FFF3D6]">
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

        <div className="relative mx-auto grid max-w-7xl gap-8 rounded-3xl border border-[#F2E6C9]/15 bg-black/25 p-8 md:grid-cols-[1fr_auto] md:items-center lg:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Continue The Momentum
            </p>

            <h2 className="mt-2 text-3xl font-black uppercase text-[#FFF3D6] md:text-4xl">
              Help Share The Campaign Message
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[#F2E6C9]/75">
              You can continue helping by sharing campaign updates, attending
              events, volunteering, or inviting others to get involved.
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
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-[#F2E6C9]/35 px-6 py-3 text-sm font-black uppercase text-[#FFF3D6] transition hover:border-[#FF5A36] hover:text-[#FF5A36]"
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}