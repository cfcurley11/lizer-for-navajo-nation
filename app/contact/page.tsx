import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MessageSquare,
  ShieldCheck,
  Users,
} from "lucide-react";
import CampaignDivider from "../components/CampaignDivider";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Contact | Myron Lizer for Navajo Nation President",
  description:
    "Contact the Myron Lizer campaign for campaign questions, media inquiries, event information, volunteer interest, or donation information.",
  openGraph: {
    title: "Contact | Myron Lizer for Navajo Nation President",
    description:
      "Contact the Myron Lizer campaign for questions, media inquiries, event information, volunteer interest, or donation information.",
    images: ["/images/myron-lizer/myron-community-veterans.jpg"],
  },
};

const contactReasons = [
  {
    icon: MessageSquare,
    title: "Campaign Questions",
    text: "Send general questions, comments, or information for the campaign team to review.",
  },
  {
    icon: Users,
    title: "Events & Outreach",
    text: "Share information about chapter visits, community events, local outreach, or public appearances.",
  },
  {
    icon: Mail,
    title: "Media & Updates",
    text: "Submit media questions, interview requests, public coverage, or campaign communication needs.",
  },
  {
    icon: ShieldCheck,
    title: "Donation Information",
    text: "Request approved contribution information while the campaign prepares its direct online donation process.",
  },
];

const inputClass =
  "mt-3 w-full rounded-2xl border border-[#F2E6C9]/20 bg-[#FFF3D6] px-4 py-4 text-sm font-bold text-[#050505] outline-none transition placeholder:text-[#050505]/45 focus:border-[#FF5A36] focus:ring-2 focus:ring-[#FF5A36]/30";

const labelClass =
  "text-xs font-black uppercase tracking-[0.18em] text-[#FF5A36]";

export default function ContactPage() {
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/93 to-[#5A1E17]/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_30%,rgba(255,90,54,0.25),transparent_35%)]" />
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
                Contact The Campaign
              </p>
            </Reveal>

            <Reveal delay={0.12}>
             <h1 className="mt-4 max-w-full break-words text-[2.65rem] font-black uppercase leading-[0.94] tracking-[-0.045em] text-[#FFF3D6] sm:text-6xl sm:tracking-[-0.035em] lg:text-7xl">
  Send A Message To The Campaign
</h1>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-6 h-1 w-28 bg-[#FF5A36]" />
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F2E6C9]/80">
                Use this page to contact the campaign directly about questions,
                event information, media inquiries, volunteer interest, donation
                information, or general campaign updates.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#contact-form"
                  className="rounded bg-[#FF5A36] px-7 py-4 text-center text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.32)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
                >
                  Contact Campaign
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

          <Reveal delay={0.16} className="relative w-full overflow-hidden">
            <div className="absolute -bottom-8 left-8 right-8 h-28 rounded-full bg-[#FF5A36]/20 blur-3xl" />
            <div className="absolute -top-8 right-10 h-40 w-40 rounded-full bg-[#F2E6C9]/10 blur-3xl" />

            <div className="relative w-full overflow-hidden rounded-3xl border border-[#F2E6C9]/15 bg-black/35 p-6 shadow-[0_35px_90px_rgba(0,0,0,0.55)] backdrop-blur sm:p-8">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#FF5A36]/10 blur-2xl" />

              <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-[#FF5A36] text-white shadow-[0_12px_30px_rgba(255,90,54,0.28)]">
                <Mail size={30} />
              </div>

              <p className="relative mt-7 text-sm font-black uppercase tracking-[0.22em] text-[#FF5A36]">
                Campaign Email
              </p>

             <h2 className="relative mt-3 break-words text-2xl font-black uppercase leading-tight tracking-[-0.035em] text-[#FFF3D6] sm:text-3xl md:text-4xl">
  Reach The Campaign Team
</h2>

              <p className="relative mt-5 text-base leading-8 text-[#F2E6C9]/75">
                For campaign communication, public inquiries, volunteer
                interest, donation information, and event details, use the form
                below or email the campaign.
              </p>

             <div className="relative mt-7 w-full min-w-0 rounded-2xl border border-[#F2E6C9]/15 bg-white/5 p-5">
  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#FF5A36]">
    Email
  </p>

  <a
    href="mailto:prosperity@lizerfornavajonation.com"
    className="mt-2 block w-full max-w-full overflow-wrap-anywhere text-sm font-black leading-6 text-[#FFF3D6] transition hover:text-[#FF5A36] sm:text-lg"
    style={{ overflowWrap: "anywhere", wordBreak: "break-word" }}
  >
    prosperity@lizerfornavajonation.com
  </a>
</div>
</div>
          </Reveal>
        </div>

        <CampaignDivider />
      </section>

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Contact Options
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                Send The Campaign A Direct Message
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/75">
                This contact page is for general campaign communication. For
                volunteer signups, use the Get Involved page. For donation
                questions, you may also use this form and the campaign can
                follow up with approved information.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactReasons.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.06}>
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-[#5A1E17]/15 bg-[#FFF3D6] p-7 shadow-[0_18px_45px_rgba(5,5,5,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/55 hover:shadow-[0_28px_70px_rgba(5,5,5,0.18)]">
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FF5A36]/10 blur-2xl transition group-hover:bg-[#FF5A36]/20" />

                    <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-[#5A1E17] shadow-[0_14px_30px_rgba(90,30,23,0.24)]">
                      <div className="absolute inset-1 rounded-xl border border-[#F2E6C9]/15" />
                      <Icon className="relative h-8 w-8 text-[#FF5A36]" />
                    </div>

                    <h3 className="relative mt-6 text-lg font-black uppercase leading-tight text-[#050505]">
                      {item.title}
                    </h3>

                    <p className="relative mt-3 text-sm leading-7 text-black/65">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="contact-form"
        className="bg-[#050505] px-5 py-20 text-[#FFF3D6]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Contact Form
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                Contact The Campaign Directly
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#F2E6C9]/75">
                Submit your message below and the campaign team can review your
                information. Please include enough detail for the campaign to
                understand your request.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 rounded-3xl border border-[#F2E6C9]/15 bg-white/5 p-6">
                <div className="flex gap-4">
                  <CheckCircle2
                    size={22}
                    className="mt-1 shrink-0 text-[#FF5A36]"
                  />

                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-[#FF5A36]">
                      Campaign Follow-Up
                    </p>

                    <p className="mt-3 text-sm font-bold leading-7 text-[#F2E6C9]/75">
                      The campaign team may use your submitted contact
                      information to respond to your message, request, event
                      details, media inquiry, or donation question.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16}>
            <form
              action="https://formspree.io/f/mbdbzlrv"
              method="POST"
              className="rounded-3xl border border-[#F2E6C9]/15 bg-[#070707] p-6 shadow-[0_35px_90px_rgba(0,0,0,0.5)] md:p-8"
            >
              <input
                type="hidden"
                name="_subject"
                value="New Contact Submission - Myron Lizer Campaign"
              />

              <input
                type="hidden"
                name="_redirect"
                value="https://www.lizerfornavajonation.com/thank-you"
              />

              <div className="grid gap-5 md:grid-cols-2">
                <label className="block">
                  <span className={labelClass}>First Name</span>
                  <input
                    required
                    name="first_name"
                    type="text"
                    autoComplete="given-name"
                    className={inputClass}
                    placeholder="First name"
                  />
                </label>

                <label className="block">
                  <span className={labelClass}>Last Name</span>
                  <input
                    required
                    name="last_name"
                    type="text"
                    autoComplete="family-name"
                    className={inputClass}
                    placeholder="Last name"
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className={labelClass}>Email</span>
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className={inputClass}
                    placeholder="you@example.com"
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className={labelClass}>Chapter / Community</span>
                  <input
                    name="chapter_or_community"
                    type="text"
                    className={inputClass}
                    placeholder="Example: Shiprock, Tuba City, Chinle, Window Rock"
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className={labelClass}>Subject</span>
                  <input
                    required
                    name="subject"
                    type="text"
                    className={inputClass}
                    placeholder="Example: Event information, media inquiry, donation question"
                  />
                </label>

                <label className="block md:col-span-2">
                  <span className={labelClass}>Message</span>
                  <textarea
                    required
                    name="message"
                    rows={7}
                    className={`${inputClass} min-h-[170px] resize-y`}
                    placeholder="Send your message to the campaign team."
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded bg-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.3)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
              >
                Send Message
                <ArrowRight size={18} />
              </button>

              <p className="mt-5 text-xs leading-6 text-[#F2E6C9]/60">
                By submitting this form, you are sharing your information with
                the campaign so they may contact you about your message or
                campaign-related request.
              </p>
            </form>
          </Reveal>
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

        <Reveal className="relative mx-auto grid max-w-7xl gap-8 rounded-3xl border border-[#F2E6C9]/15 bg-black/25 p-8 md:grid-cols-[1fr_auto] md:items-center lg:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Stay Connected
            </p>

            <h2 className="mt-2 text-3xl font-black uppercase text-[#FFF3D6] md:text-4xl">
              Continue Following Campaign Updates
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[#F2E6C9]/75">
              Stay connected through campaign news, events, priorities, and
              opportunities to get involved as new information is released.
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
              href="/news"
              className="inline-flex items-center justify-center rounded-full border border-[#F2E6C9]/35 px-6 py-3 text-sm font-black uppercase text-[#FFF3D6] transition hover:border-[#FF5A36] hover:text-[#FF5A36]"
            >
              View News
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}