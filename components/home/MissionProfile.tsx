"use client";

import { motion } from "framer-motion";

export default function MissionProfile() {
  const details = [
    {
      title: "Mission Name",
      value: "PLANET 2029",
    },
    {
      title: "Mission Start",
      value: "07 August 2026",
    },
    {
      title: "Mission Vision",
      value:
        "To explore beyond familiar borders, discover new places, experience different cultures, and create memories that become part of a lifelong journey.",
    },
    {
      title: "Mission Objective",
      value:
        "Complete at least one international journey on or before December 2029 while continuing to explore and document meaningful experiences along the way.",
    },
    {
      title: "Mission Status",
      value: "ACTIVE",
    },
    {
      title: "Mission Duration",
      value: "August 2026 — December 2029",
    },
    {
      title: "Primary Target",
      value:
        "At least one international trip before the end of December 2029.",
    },
    {
      title: "Mission Philosophy",
      value:
        "Travel is not only about destinations. It is about people, cultures, experiences, challenges, growth, and the stories collected along the way.",
    },
  ];

  return (
    <section className="px-6 py-20">
      <motion.div
        className="
          mx-auto
          max-w-5xl
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-6
          backdrop-blur
          md:p-8
        "
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Mission Profile
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-center leading-7 text-slate-300">
          PLANET 2029 is a personal journey that began on 07 August 2026,
          with a simple goal — to explore beyond familiar borders and complete
          at least one international journey before December 2029.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-2 md:gap-6">
          {details.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
              className="
                rounded-xl
                border
                border-white/10
                bg-slate-900/70
                p-5
                md:p-6
              "
            >
              <h3 className="font-semibold text-yellow-400">
                {item.title}
              </h3>

              <p className="mt-2 leading-7 text-slate-200">
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}