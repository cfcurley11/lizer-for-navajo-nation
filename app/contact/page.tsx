import Image from "next/image";
import type { Metadata } from "next";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";

import CampaignHeader from "../components/CampaignHeader";
import CampaignFooter from "../components/CampaignFooter";
import CampaignDivider from "../components/CampaignDivider";

export const metadata: Metadata = {
  title: "Contact | Myron Lizer Campaign",
  description:
    "Contact page concept for the Myron Lizer campaign for general inquiries, media, volunteer interest, and campaign communication.",
};

const contactCards = [
  {
    icon: Mail,
    title: "Email",
    text: "info@myronlizer.com",
  },
  {
    icon: Phone,
    title: "Phone",
    text: "(928) 555-1234",
  },
  {
    icon: MapPin,
    title: "Campaign Area",
    text: "Navajo Nation",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#FFF3D6]">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            body > footer { display: none !important; }

            @keyframes campaignReveal {
              from { opacity: 0; transform: translateY(24px); filter: blur(5px); }
              to { opacity: 1; transform: translateY(0); filter: blur(0); }
            }

            .campaign-reveal {
              animation: campaignReveal 0.8s ease-out both;
            }
          `,
        }}
      />

      <CampaignHeader />

      <section className="relative overflow-hidden bg-[#050505] px-5 py-24">
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-[#5A1E17]/65" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_30%,rgba(255,90,54,0.24),transparent_35%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <div className="campaign-reveal max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#FF5A36]">
              Contact The Campaign
            </p>

            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.95] text-[#FFF3D6] md:text-7xl">
              Let&apos;s Stay Connected
            </h1>

            <div className="mt-6 h-1 w-24 bg-[#FF5A36]" />

            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#F2E6C9]/80">
              Reach out to the campaign for general inquiries, volunteer
              interest, event coordination, media requests, or community
              engagement.
            </p>
          </div>
        </div>
      </section>

<CampaignDivider />

      <section className="bg-[#F2E6C9] px-5 py-20 text-[#050505]">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div className="campaign-reveal">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Send A Message
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-5xl">
              Contact Form
            </h2>

            <p className="mt-6 text-lg leading-8 text-black/75">
              This form is a placeholder for the campaign concept. Final routing
              can be connected to Formspree, Google Workspace, a CRM, or another
              campaign-approved inbox.
            </p>

            <div className="mt-10 grid gap-5">
              {contactCards.map((item) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-[#5A1E17]/20 bg-[#FFF3D6] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#5A1E17]">
                        <Icon className="h-8 w-8 text-[#FF5A36]" />
                      </div>

                      <div>
                        <h3 className="text-lg font-black uppercase text-[#050505]">
                          {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-black/65">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="campaign-reveal">
            <div className="rounded-3xl border border-[#5A1E17]/20 bg-[#FFF3D6] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#5A1E17]">
                <MessageSquare className="h-8 w-8 text-[#FF5A36]" />
              </div>

              <h2 className="mt-6 text-3xl font-black uppercase text-[#050505]">
                Message The Campaign
              </h2>

              <form className="mt-8 grid gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="rounded-xl border border-[#5A1E17]/25 bg-white/70 px-5 py-4 text-sm text-[#050505] outline-none transition placeholder:text-black/45 focus:border-[#FF5A36]"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-xl border border-[#5A1E17]/25 bg-white/70 px-5 py-4 text-sm text-[#050505] outline-none transition placeholder:text-black/45 focus:border-[#FF5A36]"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="rounded-xl border border-[#5A1E17]/25 bg-white/70 px-5 py-4 text-sm text-[#050505] outline-none transition placeholder:text-black/45 focus:border-[#FF5A36]"
                />

                <textarea
                  rows={6}
                  placeholder="Message"
                  className="rounded-xl border border-[#5A1E17]/25 bg-white/70 px-5 py-4 text-sm text-[#050505] outline-none transition placeholder:text-black/45 focus:border-[#FF5A36]"
                />

                <button
                  type="submit"
                  className="rounded bg-[#FF5A36] px-7 py-4 text-sm font-black uppercase text-white shadow-[0_12px_35px_rgba(255,90,54,0.3)] transition hover:-translate-y-1 hover:bg-[#e94b2c]"
                >
                  Send Message
                </button>
              </form>

              <p className="mt-5 text-xs leading-6 text-black/55">
                Placeholder only. Final contact form should be connected to the
                official campaign email or campaign-approved communication
                system.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#050505] px-5 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="campaign-reveal relative">
            <div className="absolute -bottom-6 left-8 h-32 w-32 rounded-full bg-[#FF5A36]/25 blur-3xl" />

            <Image
              src="/images/myron-lizer/myron-community-veterans.jpg"
              alt="Campaign community contact"
              width={900}
              height={700}
              className="relative rounded-3xl border border-[#F2E6C9]/20 object-cover shadow-[0_35px_90px_rgba(0,0,0,0.55)]"
            />
          </div>

          <div className="campaign-reveal">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Campaign Communication
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase leading-tight text-[#FFF3D6] md:text-5xl">
              A Clear Path For Voters, Volunteers, And Supporters
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#F2E6C9]/80">
              A campaign website should make it simple for people to ask
              questions, offer support, request information, and connect with the
              campaign team.
            </p>

            <div className="mt-8 grid gap-4">
              {[
                "General campaign inquiries",
                "Volunteer and outreach questions",
                "Event coordination requests",
                "Media or community engagement messages",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-[#F2E6C9]/15 bg-white/5 p-5 text-sm font-bold text-[#F2E6C9] transition hover:border-[#FF5A36]/50 hover:bg-white/10"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#5A1E17] px-5 py-20 text-[#FFF3D6]">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/myron-lizer/hero-dark-texture.png"
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="campaign-reveal">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#FF5A36]">
              Get Involved
            </p>

            <h2 className="mt-5 text-4xl font-black uppercase md:text-5xl">
              Help Move The Campaign Forward
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[#F2E6C9]/80">
              Whether you want to volunteer, attend an event, donate, or request
              information, the campaign team would be glad to connect.
            </p>
          </div>
        </div>
      </section>

      <CampaignFooter />
    </main>
  );
}