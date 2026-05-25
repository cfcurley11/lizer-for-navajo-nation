"use client";

import { useEffect, useMemo, useState } from "react";
import { CalendarDays, Clock, Vote } from "lucide-react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(targetDate: Date): TimeLeft {
  const difference = targetDate.getTime() - new Date().getTime();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function ElectionCountdown() {
  const targetDate = useMemo(() => new Date("2026-07-21T06:00:00-06:00"), []);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    getTimeLeft(targetDate)
  );

  useEffect(() => {
    const interval = window.setInterval(() => {
      setTimeLeft(getTimeLeft(targetDate));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [targetDate]);

  const countdownItems = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
   <section className="bg-[#F2E6C9] px-5 pb-12 pt-8 text-[#050505]">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-[#5A1E17]/15 bg-[#FFF3D6] p-6 shadow-[0_18px_45px_rgba(5,5,5,0.08)] md:p-8">
          <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#FF5A36]/10 blur-2xl" />
          <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-[#5A1E17]/10 blur-2xl" />

          <div className="relative grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-[#FF5A36]/25 bg-[#FF5A36]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#FF5A36]">
                <Vote size={17} />
                2026 Primary Election
              </div>

              <h2 className="mt-5 text-3xl font-black uppercase leading-tight text-[#050505] md:text-4xl">
                Countdown To Election Day
              </h2>

              <p className="mt-4 text-sm leading-7 text-black/68 md:text-base">
                Navajo Nation Primary Election Day is scheduled for{" "}
                <span className="font-black text-[#050505]">
                  Tuesday, July 21, 2026
                </span>
                . Voter registration closes{" "}
                <span className="font-black text-[#050505]">
                  June 11, 2026 at 5:00 PM
                </span>
                .
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-4">
              {countdownItems.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[#5A1E17]/15 bg-white/55 p-5 text-center shadow-sm"
                >
                  <p className="text-4xl font-black leading-none text-[#5A1E17] md:text-5xl">
                    {String(item.value).padStart(2, "0")}
                  </p>
                  <p className="mt-3 text-xs font-black uppercase tracking-[0.18em] text-[#FF5A36]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-6 grid gap-3 border-t border-[#5A1E17]/10 pt-6 md:grid-cols-3">
            <div className="flex gap-3 rounded-2xl border border-[#5A1E17]/10 bg-white/45 p-4">
              <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-[#FF5A36]" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#5A1E17]/55">
                  Absentee Voting Begins
                </p>
                <p className="mt-1 text-sm font-black text-[#050505]">
                  June 22, 2026
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-2xl border border-[#5A1E17]/10 bg-white/45 p-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-[#FF5A36]" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#5A1E17]/55">
                  Absentee Request Deadline
                </p>
                <p className="mt-1 text-sm font-black text-[#050505]">
                  July 6, 2026 at 5 PM
                </p>
              </div>
            </div>

            <div className="flex gap-3 rounded-2xl border border-[#5A1E17]/10 bg-white/45 p-4">
              <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-[#FF5A36]" />
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#5A1E17]/55">
                  Early In-Person Deadline
                </p>
                <p className="mt-1 text-sm font-black text-[#050505]">
                  July 17, 2026 at 5 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}