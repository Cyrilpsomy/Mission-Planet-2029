"use client";

import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import About from "@/components/home/About";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        {/* ================= HERO ================= */}
        <section
          id="home"
          className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
        >
          {/* Background Image */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/travel-bg.jpg')",
            }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.08 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/75" />

          {/* Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />

          {/* Electric Green Glow */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime-400/10 blur-[140px]"
            animate={{
              scale: [1, 1.18, 1],
              opacity: [0.25, 0.55, 0.25],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Hero Content */}
          <motion.div
            className="relative z-10 mx-auto max-w-5xl text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            {/* Welcome */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6 text-xs uppercase tracking-[0.45em] text-lime-300 md:text-sm"
            >
              I am
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-6xl font-bold uppercase tracking-[0.12em] sm:text-7xl md:text-8xl lg:text-9xl"
            >
              Cyril
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="mt-5 text-sm uppercase tracking-[0.35em] text-lime-300 md:text-base"
            >
              A life in progress since 2002
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-300 md:text-xl"
            >
              A personal journey of dreams, experiences, adventures,
              destinations and stories — one chapter at a time.
            </motion.p>

            {/* Quote */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="mt-6 text-sm italic text-gray-400 md:text-base"
            >
              "The world is waiting to be explored."
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.8 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              {/* Discover Button */}
              <motion.button
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 0 40px rgba(163,255,18,0.45)",
                }}
                whileTap={{ scale: 0.96 }}
                onClick={() => {
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="rounded-full bg-[#A3FF12] px-8 py-4 font-semibold text-black transition hover:bg-[#B5FF45]"
              >
                Discover My Journey
              </motion.button>

              {/* PLANET 2029 */}
              <motion.a
                href="/planet-2029"
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 0 30px rgba(163,255,18,0.25)",
                }}
                whileTap={{ scale: 0.96 }}
                className="rounded-full border border-[#A3FF12]/50 bg-black/50 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:border-[#A3FF12] hover:text-[#A3FF12]"
              >
                PLANET 2029 →
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500">
              Scroll to explore
            </p>

            <div className="mx-auto mt-3 h-10 w-px bg-gradient-to-b from-[#A3FF12] to-transparent" />
          </motion.div>
        </section>

        {/* ================= ABOUT ================= */}
        <section
          id="about"
          className="scroll-mt-24 border-t border-[#A3FF12]/15 px-6 py-24"
        >
          <About />
        </section>

        {/* ================= PLANET 2029 ================= */}
        <section className="relative overflow-hidden border-t border-[#A3FF12]/15 bg-black px-6 py-28">
          {/* Green Glow */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A3FF12]/5 blur-[130px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="relative z-10 mx-auto max-w-5xl text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.5em] text-[#A3FF12] md:text-sm">
              Featured Mission
            </p>

            <h2 className="mt-5 text-5xl font-bold tracking-widest md:text-7xl">
              PLANET{" "}
              <span className="text-[#A3FF12]">
                2029
              </span>
            </h2>

            <div className="mx-auto mt-6 h-px w-20 bg-[#A3FF12]" />

            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
              A personal mission to explore the world, experience new
              cultures, discover new places and create unforgettable
              memories.
            </p>

            {/* Mission Card */}
            <motion.div
              whileHover={{
                y: -8,
                borderColor: "rgba(163,255,18,0.45)",
                boxShadow: "0 20px 60px rgba(163,255,18,0.06)",
              }}
              className="mx-auto mt-12 max-w-3xl rounded-3xl border border-[#A3FF12]/15 bg-[#A3FF12]/[0.03] p-8 backdrop-blur-sm transition-all duration-500 md:p-12"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-gray-600">
                The journey has begun
              </p>

              <p className="mt-4 text-xl font-medium text-white md:text-2xl">
                One mission.
                <span className="text-[#A3FF12]">
                  {" "}One world.
                </span>
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-500">
                Follow the journey as it unfolds.
              </p>

              <motion.a
                href="/planet-2029"
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 0 35px rgba(163,255,18,0.4)",
                }}
                whileTap={{ scale: 0.97 }}
                className="mt-8 inline-block rounded-full bg-[#A3FF12] px-8 py-4 font-semibold text-black transition hover:bg-[#B5FF45]"
              >
                Enter PLANET 2029 →
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* ================= FUTURE ================= */}
        <section className="border-t border-[#A3FF12]/15 bg-black px-6 py-28 text-center">
          <motion.div
            className="mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.45em] text-[#A3FF12] md:text-sm">
              More to come
            </p>

            <h2 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
              This journey is
              <br />
              <span className="text-[#A3FF12]">
                only beginning.
              </span>
            </h2>

            <div className="mx-auto mt-6 h-px w-16 bg-[#A3FF12]/40" />

            <p className="mt-8 leading-8 text-gray-400">
              Cyrilpsomy will continue to grow with new destinations,
              experiences, photographs, stories and memories collected
              along the way.
            </p>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}