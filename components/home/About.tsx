"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      className="mx-auto max-w-5xl"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* ================= SECTION HEADING ================= */}

      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.45em] text-[#A3FF12]">
          Get to know me
        </p>

        <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
          About Me
        </h2>

        <div className="mx-auto mt-6 h-px w-20 bg-[#A3FF12]" />
      </div>

      {/* ================= INTRODUCTION ================= */}

      <motion.div
        className="mx-auto mt-12 max-w-4xl space-y-6 text-base leading-8 text-gray-300 md:text-lg md:leading-9"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p>
          Welcome to{" "}
          <strong className="text-white">
            CYRILPSOMY
          </strong>{" "}
          — a personal space where I can document the experiences,
          dreams, journeys and memories that shape my life.
        </p>

        <p>
          I believe that life is more than simply moving from one day
          to another. It is about discovering new places, meeting
          people, experiencing different cultures, learning from every
          journey and creating memories that stay with us.
        </p>

        <p>
          This website is a place to collect those moments. Some will
          be carefully planned, while others may come unexpectedly.
          Together, they will become part of a larger story.
        </p>
      </motion.div>

      {/* ================= PHILOSOPHY ================= */}

      <motion.div
        className="mt-16 rounded-3xl border border-[#A3FF12]/30 bg-[#A3FF12]/[0.04] p-7 text-center backdrop-blur-md transition-all duration-500 hover:border-[#A3FF12]/70 hover:bg-[#A3FF12]/[0.08] hover:shadow-[0_0_45px_rgba(163,255,18,0.1)] md:p-10"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-[0.3em] text-[#A3FF12]">
          My Philosophy
        </p>

        <div className="mx-auto mt-5 h-px w-12 bg-[#A3FF12]/60" />

        <p className="mt-6 text-xl leading-9 text-white md:text-2xl">
          "Life is a journey. Explore it, experience it, and leave
          behind stories worth remembering."
        </p>
      </motion.div>

      {/* ================= PLANET 2029 ================= */}

      <motion.div
        className="group relative mt-12 overflow-hidden rounded-3xl border border-[#A3FF12]/30 bg-gradient-to-br from-lime-950/40 via-black to-black p-7 transition-all duration-500 hover:-translate-y-2 hover:border-[#A3FF12]/70 hover:shadow-[0_0_60px_rgba(163,255,18,0.12)] md:p-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Background Glow */}
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#A3FF12]/10 blur-3xl transition-all duration-700 group-hover:bg-[#A3FF12]/25" />

        <div className="relative z-10 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-[#A3FF12]">
            A journey within the journey
          </p>

          <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            PLANET 2029
          </h3>

          <div className="mx-auto mt-5 h-px w-16 bg-[#A3FF12]" />

          <div className="mx-auto mt-7 max-w-3xl space-y-5 text-base leading-8 text-gray-300 md:text-lg">
            <p>
              On{" "}
              <strong className="text-white">
                7 August 2026
              </strong>
              , I started a personal mission called{" "}
              <strong className="text-white">
                PLANET 2029
              </strong>
              .
            </p>

            <p>
              The mission is simple: explore beyond familiar borders,
              experience the world and complete at least one
              international journey before{" "}
              <strong className="text-white">
                31 December 2029
              </strong>
              .
            </p>

            <p>
              PLANET 2029 is not only about reaching destinations. It
              is about the people I meet, the cultures I experience,
              the challenges I face and the memories I create along
              the way.
            </p>
          </div>

          {/* Interactive Button */}

          <motion.a
            href="/planet-2029"
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 35px rgba(163,255,18,0.4)",
            }}
            whileTap={{ scale: 0.96 }}
            className="mt-9 inline-block rounded-full bg-[#A3FF12] px-8 py-3 font-semibold text-black transition-all duration-300 hover:bg-[#B5FF45]"
          >
            Explore PLANET 2029 →
          </motion.a>
        </div>
      </motion.div>

      {/* ================= CLOSING ================= */}

      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <div className="mx-auto mb-6 h-px w-16 bg-[#A3FF12]/40" />

        <p className="text-xs uppercase tracking-[0.3em] text-white/40 md:text-sm">
          Explore • Dream • Discover • Remember
        </p>
      </motion.div>
    </motion.div>
  );
}