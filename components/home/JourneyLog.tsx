"use client";

import { motion } from "framer-motion";

const entries = [
  {
    date: "07 AUGUST 2026",
    year: "2026",
    title: "The Journey Begins",
    description:
      "CYRILPSOMY begins its first chapter. A decision to explore beyond familiar places, experience the world, and create stories worth remembering.",
    status: "COMPLETED",
  },
  {
    date: "07 AUGUST 2026",
    year: "2026",
    title: "PLANET 2029 Commenced",
    description:
      "The PLANET 2029 mission officially begins with one clear objective: complete at least one international journey before 31 December 2029.",
    status: "ACTIVE",
  },
  {
    date: "2026 — 2027",
    year: "2026–27",
    title: "Preparation & Planning",
    description:
      "Researching destinations, preparing for international travel, building resources, learning, planning and turning future possibilities into achievable goals.",
    status: "IN PROGRESS",
  },
  {
    date: "2027 — 2028",
    year: "2027–28",
    title: "Exploration Phase",
    description:
      "The next chapters will be shaped by new experiences, new places and the opportunities that appear along the way.",
    status: "UPCOMING",
  },
  {
    date: "2028 — 2029",
    year: "2028–29",
    title: "International Chapter",
    description:
      "The mission moves closer to its primary milestone — experiencing an international destination and creating memories beyond familiar borders.",
    status: "TARGET",
  },
  {
    date: "31 DECEMBER 2029",
    year: "2029",
    title: "PLANET 2029 Milestone",
    description:
      "The primary mission deadline. By this date, the goal is to have completed at least one international journey and documented the experience as part of the CYRILPSOMY story.",
    status: "MISSION TARGET",
  },
];

export default function JourneyLog() {
  return (
    <section className="px-6 py-24">
      <motion.div
        className="mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
            The Road So Far
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Journey Log
          </h2>

          <div className="mx-auto mt-6 h-px w-20 bg-yellow-400" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
            A timeline of milestones, preparation, experiences and future
            chapters that shape the CYRILPSOMY journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-14">

          {/* Timeline Line */}
          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:left-1/2 md:block" />

          <div className="space-y-10 md:space-y-16">
            {entries.map((entry, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -40 : 40,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 top-8 z-10 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-yellow-400 md:block" />

                  {/* Mobile Dot */}
                  <div className="absolute left-0 top-8 h-3 w-3 rounded-full bg-yellow-400 md:hidden" />

                  {/* Card */}
                  <div
                    className={`
                      ml-7
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/5
                      p-6
                      backdrop-blur-md
                      transition
                      hover:border-yellow-400/30
                      md:ml-0
                      md:p-8
                      ${
                        isLeft
                          ? "md:col-start-1"
                          : "md:col-start-2"
                      }
                    `}
                  >
                    {/* Date */}
                    <p className="text-sm font-semibold tracking-widest text-yellow-400">
                      {entry.date}
                    </p>

                    {/* Title */}
                    <h3 className="mt-3 text-2xl font-bold md:text-3xl">
                      {entry.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-4 leading-7 text-slate-300 md:leading-8">
                      {entry.description}
                    </p>

                    {/* Status */}
                    <span
                      className="
                        mt-6
                        inline-block
                        rounded-full
                        border
                        border-yellow-500/30
                        bg-yellow-500/10
                        px-4
                        py-1.5
                        text-xs
                        font-semibold
                        tracking-wider
                        text-yellow-300
                      "
                    >
                      {entry.status}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing Message */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            The journey continues...
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}