"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
  const target = new Date("2029-12-31T23:59:59").getTime();

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTime({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    calculateTime();

    const timer = setInterval(calculateTime, 1000);

    return () => clearInterval(timer);
  }, [target]);

  const countdownItems = [
    ["Days", time.days],
    ["Hours", time.hours],
    ["Minutes", time.minutes],
    ["Seconds", time.seconds],
  ];

  return (
    <section
      id="countdown"
      className="px-6 py-24 scroll-mt-24"
    >
      <motion.div
        className="mx-auto max-w-5xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Label */}
        <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
          PLANET 2029
        </p>

        {/* Heading */}
        <h2 className="mt-4 text-4xl font-bold md:text-5xl">
          Mission Countdown
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
          The clock is running. Every day brings the PLANET 2029 mission
          closer to its target.
        </p>

        {/* Countdown */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {countdownItems.map(([label, value], index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{
                scale: 1.05,
                y: -5,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-5
                backdrop-blur-md
                shadow-xl
                md:p-8
              "
            >
              <motion.h3
                key={value}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                className="text-4xl font-bold text-white md:text-6xl"
              >
                {String(value).padStart(2, "0")}
              </motion.h3>

              <p className="mt-3 text-xs uppercase tracking-[0.25em] text-slate-400 md:text-sm">
                {label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mission Date */}
        <div className="mt-10">
          <p className="text-sm text-white/50">
            Mission deadline
          </p>

          <p className="mt-2 text-lg font-semibold text-white">
            31 December 2029
          </p>
        </div>

        {/* Mission Statement */}
        <motion.div
          className="mx-auto mt-10 max-w-3xl rounded-2xl border border-yellow-400/10 bg-yellow-400/5 p-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm leading-7 text-slate-300 md:text-base">
            One international journey before the end of 2029.
            <span className="text-yellow-400"> The mission is active.</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}