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
      title: "Objective",
      value:
        "Explore the world, experience new cultures, and complete an international journey before December 2029.",
    },
    {
      title: "Mission Status",
      value: "ACTIVE",
    },
    {
      title: "Target",
      value: "December 2029",
    },
  ];

  return (
    <section
      id="mission"
      className="bg-slate-950 px-6 py-20 text-white md:py-28"
    >
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


        <div className="mt-8 grid gap-5 md:grid-cols-2 md:gap-6">

          {details.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
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