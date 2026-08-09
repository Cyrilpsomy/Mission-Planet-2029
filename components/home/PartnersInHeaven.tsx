"use client";

import { motion } from "framer-motion";

const lovedOnes = [
  "Mary chechi",
  "Ichachan",
  "Velyammachi",
  "Pooja",
  "Sraven",
  "Jose",
  "Alex",
];

export default function PartnersInHeaven() {
  return (
    <section className="border-t border-white/10 px-6 py-24">
      <motion.div
        className="mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        {/* ================= HEADER ================= */}

        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
            Forever Remembered
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Partners in Heaven
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            Some souls may no longer be physically beside us, but their
            memories, love, and presence continue to be part of our journey.
          </p>
        </div>

        {/* ================= NAMES ================= */}

        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {lovedOnes.map((name, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.04,
                y: -4,
              }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-6
                py-7
                text-center
                shadow-xl
                backdrop-blur-md
                transition
                hover:border-yellow-400/30
              "
            >
              {/* Star */}

              <div className="text-2xl text-yellow-400">
                ✦
              </div>

              {/* Name */}

              <h3 className="mt-3 text-xl font-semibold text-white">
                {name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* ================= CLOSING ================= */}

        <motion.div
          className="mx-auto mt-14 max-w-3xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto h-px w-20 bg-yellow-400/50" />

          <p className="mt-8 text-lg italic leading-8 text-slate-300">
            "Though you may not walk beside me,
            you will always be a part of my journey."
          </p>

          <p className="mt-5 text-xs uppercase tracking-[0.3em] text-white/30">
            Mary chechi • Ichachan • Velyammachi • Pooja • Sraven • Jose • Alex
          </p>

          <p className="mt-4 text-sm text-slate-500">
            And all beloved souls who remain forever in our hearts.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}