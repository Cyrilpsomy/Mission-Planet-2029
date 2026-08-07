"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 px-6 py-20 text-white md:py-28"
    >
      <motion.div
        className="mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
          About The Mission
        </p>

        <h2 className="mt-6 text-4xl font-bold md:text-5xl">
          PLANET 2029
        </h2>

        <div className="mt-8 space-y-6 text-base leading-8 text-gray-300 md:mt-10 md:text-lg md:leading-9">

          <p>
            Mission <strong className="text-white">PLANET 2029</strong>{" "}
            commenced on{" "}
            <strong className="text-white">7 August 2026</strong>{" "}
            with the goal of travelling around the world, one country at a time.
          </p>

          <p>
            The first milestone is to complete at least one international trip
            before{" "}
            <strong className="text-white">31 December 2029</strong>.
          </p>

          <p>
            More than travel, this mission is about creating unforgettable
            memories, seeking inspiration, strengthening faith, and spreading
            kindness wherever the journey leads.
          </p>

        </div>

        <p className="mt-12 text-sm uppercase tracking-[0.3em] text-white/50">
          Explore • Dream • Discover
        </p>

      </motion.div>
    </section>
  );
}