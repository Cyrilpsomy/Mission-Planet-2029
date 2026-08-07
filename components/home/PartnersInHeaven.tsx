"use client";

import { motion } from "framer-motion";

export default function PartnersInHeaven() {
  const partners = [
    "Mary Chechi",
    "Ichachachan",
    "Velyammachi",
    "Sravan",
    "Pooja",
    "Jose",
    "Alex",
    "All our beloved departed souls",
  ];

  return (
    <section
      id="partners"
      className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white md:py-28"
    >

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-slate-950 to-slate-950" />


      <motion.div
        className="relative z-10 mx-auto max-w-5xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >

        <h2 className="text-3xl font-bold tracking-wide text-yellow-400 md:text-5xl">
          Our Partners in Heaven
        </h2>


        <p className="mx-auto mt-6 max-w-3xl text-base italic text-slate-300 md:text-lg">
          "Some journeys are guided by those who are no longer beside us,
          but forever remain in our hearts."
        </p>


        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur md:mt-10 md:p-8">

          <p className="text-slate-200">
            This mission is dedicated to the memories, love, and blessings of
            those who continue to inspire us from above.
          </p>

        </div>


        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-12 md:grid-cols-3">

          {partners.map((name, index) => (

            <motion.div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur md:p-6"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
            >

              <div className="mb-3 text-2xl">
                🕊️
              </div>


              <p
                className={`text-lg font-semibold md:text-xl ${
                  name === "All our beloved departed souls"
                    ? "italic text-yellow-400"
                    : "text-white"
                }`}
              >
                {name}
              </p>


              <p className="mt-2 text-sm text-yellow-400">
                Forever part of PLANET 2029
              </p>

            </motion.div>

          ))}

        </div>


        <p className="mt-10 text-xs uppercase tracking-[0.3em] text-white/50 md:mt-12 md:text-sm">
          Remembered • Honored • Forever Connected
        </p>


      </motion.div>

    </section>
  );
}