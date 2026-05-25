import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle,
  CreditCard,
  Heart,
  Landmark,
  Megaphone,
  ShieldCheck,
  Users,
} from "lucide-react";
import CampaignDivider from "../components/CampaignDivider";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Donate | Myron Lizer for Navajo Nation President",
  description:
    "Support Myron Lizer for Navajo Nation President. Direct online donations are forthcoming. Supporters may contact the campaign for contribution information.",
  openGraph: {
    title: "Donate | Myron Lizer for Navajo Nation President",
    description:
      "Direct online donations are forthcoming. Supporters may contact the campaign for contribution information.",
    images: ["/images/myron-lizer/myron-about-leadership.jpg"],
  },
};

const donationAmounts = ["25", "50", "100", "250", "500", "1000"];

const supportAreas = [
  {
    icon: Megaphone,
    title: "Campaign Outreach",
    text: "Help the campaign reach families, chapters, communities, and voters across the Navajo Nation.",
  },
  {
    icon: Users,
    title: "Events & Volunteers",
    text: "Support community events, volunteer coordination, signs, flyers, and local campaign activity.",
  },
  {
    icon: Landmark,
    title: "Voter Engagement",
    text: "Help strengthen communications, voter education, travel, and campaign visibility.",
  },
  {
    icon: ShieldCheck,
    title: "Accountable Support",
    text: "Donation language, links, and compliance details should be reviewed and approved by the campaign team.",
  },
];

const campaignSupportItems = [
  "Support campaign travel and community outreach",
  "Help print signs, flyers, materials, and visibility items",
  "Strengthen event coordination and voter engagement",
  "Expand digital communications and campaign updates",
];

export default function DonatePage() {
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(255,90,54,0.26),transparent_35%)]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:py-14">
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
                Support The Campaign
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <h1 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.95] text-[#FFF3D6] md:text-6xl lg:text-7xl">
                Donate To Help Move The Campaign Forward
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-6 h-1 w-28 bg-[#FF5A36]" />
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F2E6C9]/80">
                Direct online donations are forthcoming. Until the campaign
                activates its official donation system, supporters may contact
                the campaign to request contribution information.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#donation-options"
                  className="rounded bg-[#FF5A36] px-7 py-4 text-center text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.32)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
                >
                  View Donation Status
                </a>

                <Link
                  href="/get-involved#volunteer-form"
                  className="rounded border border-[#F2E6C9]/70 bg-[#F2E6C9] px-7 py-4 text-center text-sm font-black uppercase text-[#050505] transition hover:-translate-y-1 hover:bg-white"
                >
                  Contact Campaign
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="relative mx-auto w-full max-w-xl">
            <div className="absolute -bottom-8 left-8 right-8 h-28 rounded-full bg-[#FF5A36]/20 blur-3xl" />
            <div className="absolute -top-8 right-10 h-40 w-40 rounded-full bg-[#F2E6C9]/10 blur-3xl" />

            <Image
              src="/images/myron-lizer/myron-about-leadership.jpg"
              alt="Myron Lizer campaign leadership portrait"
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

      <section
        id="donation-options"
        className="bg-[#F2E6C9] px-5 py-20 text-[#050505]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Donation Status
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                Direct Online Donations Are Forthcoming
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-base leading-8 text-black/70">
                The campaign is preparing its official donation process. Once
                approved, this page will be updated with the official donation
                platform, contribution instructions, and any required campaign
                finance language.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 rounded-3xl border border-[#5A1E17]/15 bg-[#FFF3D6] p-6 shadow-[0_18px_45px_rgba(5,5,5,0.08)]">
                <div className="flex gap-4">
                  <ShieldCheck className="mt-1 h-7 w-7 shrink-0 text-[#FF5A36]" />
                  <p className="text-sm leading-7 text-black/70">
                    Until direct online donations are active, supporters who
                    want to contribute should submit their contact information
                    through the campaign form so the campaign team can provide
                    approved donation instructions.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <div className="relative overflow-hidden rounded-3xl border border-[#5A1E17]/15 bg-[#FFF3D6] p-6 shadow-[0_25px_70px_rgba(0,0,0,0.18)] md:p-8">
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#FF5A36]/10 blur-2xl" />

              <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-[#5A1E17] text-[#FF5A36] shadow-[0_14px_30px_rgba(90,30,23,0.24)]">
                <CreditCard size={30} />
              </div>

              <p className="relative mt-6 text-xs font-black uppercase tracking-[0.22em] text-[#FF5A36]">
                Payment Card Placeholder
              </p>

              <h3 className="relative mt-3 text-3xl font-black uppercase leading-tight text-[#050505]">
                Online Giving Will Be Added Soon
              </h3>

              <p className="relative mt-5 text-sm leading-7 text-black/68">
                Direct donations through this website are not active yet. The
                campaign is finalizing the approved process for accepting
                contributions. For now, please use the campaign form to submit
                your contact information and request donation details.
              </p>

              <div className="relative mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {donationAmounts.map((amount) => (
                  <div
                    key={amount}
                    className="rounded-2xl border border-[#5A1E17]/15 bg-white/55 p-6 text-center"
                  >
                    <p className="text-3xl font-black text-[#050505]">
                      ${amount}
                    </p>
                    <p className="mt-2 text-xs font-black uppercase tracking-[0.15em] text-[#FF5A36]">
                      Coming Soon
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/get-involved#volunteer-form"
                className="relative mt-6 flex w-full items-center justify-center gap-2 rounded bg-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.25)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
              >
                Request Donation Information
                <ArrowRight size={17} />
              </Link>

              <p className="relative mt-5 text-xs leading-6 text-black/55">
                This section is a placeholder only. Donation links, contribution
                limits, eligibility language, reporting language, and
                disclaimers should be reviewed and approved by the campaign
                before direct donations are accepted online.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#050505] px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Why Support
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-2 text-3xl font-black uppercase text-[#FFF3D6] md:text-4xl">
                Help Build Campaign Momentum
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-4 text-base leading-7 text-[#F2E6C9]/70">
                Support helps the campaign communicate its message of economic
                sovereignty, opportunity, accountability, long-term prosperity,
                and leadership with integrity.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {supportAreas.map((item, index) => {
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
                Campaign Support
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-5 text-4xl font-black uppercase leading-tight md:text-5xl">
                Every Contribution Helps Reach More Voters
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-8 max-w-3xl text-lg leading-8 text-[#F2E6C9]/80">
                Whether through donations, volunteering, sharing campaign
                updates, or attending events, every action helps carry the
                campaign message forward.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-5">
            {campaignSupportItems.map((item, index) => (
              <Reveal key={item} delay={index * 0.06}>
                <div className="rounded-2xl border border-[#F2E6C9]/15 bg-black/25 p-5 transition hover:border-[#FF5A36]/60 hover:bg-black/40">
                  <div className="flex gap-4">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-[#FF5A36]" />
                    <p className="text-sm font-bold leading-7 text-[#F2E6C9]/75">
                      {item}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
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
              More Ways To Help
            </p>

            <h2 className="mt-2 text-3xl font-black uppercase text-[#FFF3D6] md:text-4xl">
              Not Ready To Donate? Get Involved.
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[#F2E6C9]/75">
              You can still help by volunteering, attending events, sharing
              campaign updates, and connecting the campaign with your community.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Link
              href="/get-involved#volunteer-form"
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