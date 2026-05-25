import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  HeartHandshake,
  MapPin,
  Megaphone,
  ShieldCheck,
  Users,
} from "lucide-react";
import CampaignDivider from "../components/CampaignDivider";
import Reveal from "../components/Reveal";

export const metadata: Metadata = {
  title: "Get Involved | Myron Lizer for Navajo Nation President",
  description:
    "Join the Myron Lizer campaign. Volunteer, request donation information, share your information, help with outreach, events, chapter engagement, and campaign support.",
  openGraph: {
    title: "Get Involved | Myron Lizer for Navajo Nation President",
    description:
      "Volunteer, request donation information, and get involved with the Myron Lizer campaign for Navajo Nation President.",
    images: ["/images/myron-lizer/myron-community-veterans.jpg"],
  },
};

const waysToHelp = [
  {
    icon: Users,
    title: "Volunteer",
    text: "Help with outreach, community contact, phone calls, event support, sign-in tables, and campaign coordination.",
  },
  {
    icon: MapPin,
    title: "Chapter Outreach",
    text: "Support local outreach by helping the campaign connect with families, chapters, communities, and local concerns.",
  },
  {
    icon: Megaphone,
    title: "Share The Message",
    text: "Help spread approved campaign updates, public news, events, and priorities through your personal network.",
  },
  {
    icon: HeartHandshake,
    title: "Donation Information",
    text: "Request approved contribution information while the campaign prepares its direct online donation process.",
  },
];

const volunteerAreas = [
  "Donation information",
  "Chapter outreach",
  "Event setup and support",
  "Phone calls or text outreach",
  "Door-to-door/community outreach",
  "Social media sharing",
  "Photography or video support",
  "Data entry or sign-in help",
  "General campaign support",
];

const reviewNotes = [
  {
    icon: ShieldCheck,
    title: "Campaign Review",
    text: "Submitted information will be reviewed by the campaign team before any follow-up or volunteer assignment.",
  },
  {
    icon: ClipboardList,
    title: "Volunteer Matching",
    text: "Supporters can be matched with outreach, events, media, administrative help, community engagement, or donation follow-up needs.",
  },
  {
    icon: CheckCircle2,
    title: "More Details Coming",
    text: "As the campaign schedule and donation process develop, supporters can receive updates about next steps.",
  },
];

const inputClass =
  "mt-3 w-full rounded-2xl border border-[#F2E6C9]/20 bg-[#FFF3D6] px-4 py-4 text-sm font-bold text-[#050505] outline-none transition placeholder:text-[#050505]/45 focus:border-[#FF5A36] focus:ring-2 focus:ring-[#FF5A36]/30";

const labelClass =
  "text-xs font-black uppercase tracking-[0.18em] text-[#FF5A36]";

export default function GetInvolvedPage() {
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
                Get Involved
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <h1 className="mt-4 max-w-3xl text-5xl font-black uppercase leading-[0.95] text-[#FFF3D6] md:text-6xl lg:text-7xl">
                Help Move The Campaign Forward
              </h1>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="mt-6 h-1 w-28 bg-[#FF5A36]" />
            </Reveal>

            <Reveal delay={0.24}>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#F2E6C9]/80">
                Join the campaign to support outreach, events, chapter house
                visits, community engagement, donation follow-up, and the work
                of sharing Myron Lizer’s message across the Navajo Nation.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#volunteer-form"
                  className="rounded bg-[#FF5A36] px-7 py-4 text-center text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.32)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
                >
                  Volunteer Now
                </a>

                <Link
                  href="/donate"
                  className="rounded border border-[#F2E6C9]/70 bg-[#F2E6C9] px-7 py-4 text-center text-sm font-black uppercase text-[#050505] transition hover:-translate-y-1 hover:bg-white"
                >
                  Donations
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="relative">
            <div className="absolute -bottom-8 left-8 right-8 h-28 rounded-full bg-[#FF5A36]/20 blur-3xl" />
            <div className="absolute -top-8 right-10 h-40 w-40 rounded-full bg-[#F2E6C9]/10 blur-3xl" />

            <Image
              src="/images/myron-lizer/myron-community-veterans.jpg"
              alt="Myron Lizer with community members and veterans"
              width={900}
              height={700}
              priority
              loading="eager"
              className="relative h-[380px] w-full rounded-3xl border border-[#F2E6C9]/20 object-cover object-[center_30%] shadow-[0_35px_90px_rgba(0,0,0,0.55)] lg:h-[520px]"
            />
          </Reveal>
        </div>

        <CampaignDivider />
      </section>

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Ways To Help
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                Every Supporter Can Make A Difference
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-black/75">
                The campaign is continuing to build its outreach, volunteer,
                media, donation, and community engagement efforts. Supporters
                can help in practical ways as the campaign develops.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {waysToHelp.map((item, index) => {
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
        id="volunteer-form"
        className="bg-[#050505] px-5 py-20 text-[#FFF3D6]"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                Campaign Form
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                Tell The Campaign How You Can Help
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-base leading-8 text-[#F2E6C9]/75">
                Complete the form and the campaign can follow up as volunteer
                needs, event schedules, chapter visits, donation requests, and
                outreach efforts are finalized.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 rounded-3xl border border-[#F2E6C9]/15 bg-white/5 p-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#FF5A36]">
                  Areas Of Interest
                </p>

                <div className="mt-5 grid gap-3">
                  {volunteerAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-start gap-3 rounded-2xl border border-[#F2E6C9]/10 bg-black/20 p-4"
                    >
                      <CheckCircle2
                        size={18}
                        className="mt-1 shrink-0 text-[#FF5A36]"
                      />
                      <p className="text-sm font-bold leading-6 text-[#F2E6C9]/78">
                        {area}
                      </p>
                    </div>
                  ))}
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
                value="New Get Involved Submission - Myron Lizer Campaign"
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

                <label className="block">
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

                <label className="block">
                  <span className={labelClass}>Phone</span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    className={inputClass}
                    placeholder="Phone number"
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
                  <span className={labelClass}>
                    How Would You Like To Help?
                  </span>
                  <select
                    name="volunteer_interest"
                    required
                    className={inputClass}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="Donation information">
                      Donation information
                    </option>
                    <option value="Chapter outreach">Chapter outreach</option>
                    <option value="Event setup and support">
                      Event setup and support
                    </option>
                    <option value="Phone calls or text outreach">
                      Phone calls or text outreach
                    </option>
                    <option value="Door-to-door/community outreach">
                      Door-to-door / community outreach
                    </option>
                    <option value="Social media sharing">
                      Social media sharing
                    </option>
                    <option value="Photography or video support">
                      Photography or video support
                    </option>
                    <option value="Data entry or sign-in help">
                      Data entry or sign-in help
                    </option>
                    <option value="General campaign support">
                      General campaign support
                    </option>
                  </select>
                </label>

                <label className="block md:col-span-2">
                  <span className={labelClass}>Message</span>
                  <textarea
                    name="message"
                    rows={6}
                    className={`${inputClass} min-h-[150px] resize-y`}
                    placeholder="Tell the campaign how you would like to help, request donation information, share your availability, or provide any community details."
                  />
                </label>
              </div>

              <button
                type="submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded bg-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.3)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
              >
                Submit Campaign Form
                <ArrowRight size={18} />
              </button>

              <p className="mt-5 text-xs leading-6 text-[#F2E6C9]/60">
                By submitting this form, you are sharing your information with
                the campaign so they may contact you about volunteer, outreach,
                donation, and campaign-related opportunities.
              </p>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <Reveal>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
                What Happens Next
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
                The Campaign Will Review Your Information
              </h2>
            </Reveal>

            <Reveal delay={0.14}>
              <p className="mt-6 max-w-xl text-base leading-8 text-black/70">
                As campaign needs are finalized, submissions can help the team
                identify supporters for chapter outreach, events, media support,
                community engagement, and donation-related follow-up.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <Link
                href="/events"
                className="mt-8 inline-flex items-center gap-2 rounded bg-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.25)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
              >
                View Events
                <ArrowRight size={18} />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {reviewNotes.map((note, index) => {
              const Icon = note.icon;

              return (
                <Reveal key={note.title} delay={index * 0.06}>
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-[#5A1E17]/15 bg-[#FFF3D6] p-7 shadow-[0_18px_45px_rgba(5,5,5,0.08)] transition duration-300 hover:-translate-y-2 hover:border-[#FF5A36]/50 hover:shadow-[0_28px_70px_rgba(5,5,5,0.18)]">
                    <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FF5A36]/10 blur-2xl transition group-hover:bg-[#FF5A36]/20" />

                    <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-[#5A1E17] text-[#FF5A36] shadow-[0_14px_30px_rgba(90,30,23,0.22)]">
                      <Icon size={28} />
                    </div>

                    <h3 className="relative mt-6 text-lg font-black uppercase leading-tight text-[#050505]">
                      {note.title}
                    </h3>

                    <p className="relative mt-4 text-sm leading-7 text-black/65">
                      {note.text}
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
              Help Build A Stronger Navajo Nation
            </h2>

            <p className="mt-4 max-w-3xl text-base leading-7 text-[#F2E6C9]/75">
              Volunteer, request donation information, share campaign updates,
              attend events, and help move the message of economic sovereignty,
              opportunity, and leadership with integrity forward.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Link
              href="/priorities"
              className="inline-flex items-center justify-center rounded-full bg-[#FF5A36] px-6 py-3 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.25)] transition hover:bg-[#e94b2c]"
            >
              View Priorities
            </Link>

            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-full border border-[#F2E6C9]/35 px-6 py-3 text-sm font-black uppercase text-[#FFF3D6] transition hover:border-[#FF5A36] hover:text-[#FF5A36]"
            >
              Donation Status
            </Link>
          </div>
        </Reveal>
      </section>
    </main>
  );
}