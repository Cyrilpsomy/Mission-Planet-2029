"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const target = new Date("2029-12-31T23:59:59");

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = target.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Minutes", time.minutes],
    ["Seconds", time.seconds],
  ];

  return (
    <section
      id="countdown"
      className="bg-slate-950 px-6 py-20 text-white md:py-28"
    >
      <motion.div
        className="mx-auto max-w-5xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
          Mission Countdown
        </p>

        <h2 className="mt-5 text-3xl font-bold md:text-5xl">
          Until The PLANET 2029 Goal
        </h2>


        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">

          {countdownItems.map(([label, value]) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur md:p-8"
            >

              <h3 className="text-4xl font-bold text-white md:text-6xl">
                {value}
              </h3>

              <p className="mt-3 text-xs uppercase tracking-widest text-gray-400 md:text-sm">
                {label}
              </p>

            </motion.div>
          ))}

        </div>

        <p className="mt-10 text-sm text-white/50">
          Mission deadline: 31 December 2029
        </p>

      </motion.div>
    </section>
  );
}