"use client";

import { motion } from "framer-motion";

export default function JourneyLog() {
  const entries = [
    {
      date: "07 August 2026",
      title: "Mission PLANET 2029 Commenced",
      description:
        "The journey begins with the goal of exploring the world and completing an international trip before December 2029.",
    },
    {
      date: "2026 - 2027",
      title: "Preparation Phase",
      description:
        "Building skills, planning destinations, saving resources, and preparing for the first international adventure.",
    },
    {
      date: "2029",
      title: "Global Milestone",
      description:
        "The mission target: completing an international journey and creating unforgettable memories.",
    },
  ];

  return (
    <section
      id="journey"
      className="bg-slate-950 px-6 py-20 text-white md:py-28"
    >
      <motion.div
        className="mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Journey Log
        </h2>


        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
          Tracking the milestones, preparation, and memories created throughout
          the PLANET 2029 mission.
        </p>


        <div className="mt-10 space-y-6">

          {entries.map((entry, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:p-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >

              <p className="font-semibold text-yellow-400">
                {entry.date}
              </p>


              <h3 className="mt-2 text-xl font-bold md:text-2xl">
                {entry.title}
              </h3>


              <p className="mt-3 leading-7 text-slate-300">
                {entry.description}
              </p>


            </motion.div>
          ))}

        </div>

      </motion.div>
    </section>
  );
}