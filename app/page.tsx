"use client";

import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        {/* =========================================================
            HERO
        ========================================================= */}
        <section
          id="home"
          className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
        >
          {/* Background */}
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

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/75" />

          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black" />

          {/* Green atmospheric glow */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A3FF12]/10 blur-[140px]"
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
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
            }}
          >
            {/* I AM */}
            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="mb-6 text-xs uppercase tracking-[0.45em] text-[#A3FF12] md:text-sm"
            >
              I am
            </motion.p>

            {/* NAME */}
            <motion.h1
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
                duration: 1,
              }}
              className="text-6xl font-bold uppercase tracking-[0.12em] sm:text-7xl md:text-8xl lg:text-9xl"
            >
              Cyril
            </motion.h1>

            {/* TAGLINE */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.9,
                duration: 1,
              }}
              className="mt-5 text-sm uppercase tracking-[0.35em] text-[#A3FF12] md:text-base"
            >
              A life in progress since 2002
            </motion.p>

            {/* DESCRIPTION */}
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.1,
                duration: 0.8,
              }}
              className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-300 md:text-xl"
            >
              A personal journey of dreams, experiences, adventures,
              destinations and stories — one chapter at a time.
            </motion.p>

            {/* QUOTE */}
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 1.4,
                duration: 1,
              }}
              className="mt-6 text-sm italic text-gray-400 md:text-base"
            >
              "The world is waiting to be explored."
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1.6,
                duration: 0.8,
              }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:flex-wrap"
            >
              {/* ABOUT */}
              <motion.a
                href="/about"
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 0 40px rgba(163,255,18,0.45)",
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="rounded-full bg-[#A3FF12] px-8 py-4 font-semibold text-black transition hover:bg-[#B5FF45]"
              >
                Discover My Journey →
              </motion.a>

              {/* PLANET 2029 */}
              <motion.a
                href="/planet-2029"
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 0 30px rgba(163,255,18,0.25)",
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="rounded-full border border-[#A3FF12]/50 bg-black/50 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:border-[#A3FF12] hover:text-[#A3FF12]"
              >
                PLANET 2029 →
              </motion.a>

              {/* CINELIEBE */}
              <motion.a
                href="/cineliebe"
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 0 35px rgba(245,197,66,0.3)",
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="rounded-full border border-[#F5C542]/60 bg-black/50 px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:border-[#F5C542] hover:bg-[#F5C542]/10 hover:text-[#F5C542]"
              >
                CINELIEBE →
              </motion.a>
            </motion.div>
          </motion.div>

          {/* SCROLL INDICATOR */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
            animate={{
              y: [0, 8, 0],
            }}
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

        {/* =========================================================
            PLANET 2029
        ========================================================= */}
        <section className="relative overflow-hidden border-t border-[#A3FF12]/10 bg-black px-6 py-24 md:py-32">
          {/* Green atmospheric glow */}
          <motion.div
            className="absolute right-0 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#A3FF12]/5 blur-[130px]"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="relative z-10 mx-auto max-w-7xl"
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:items-center">
              {/* Left */}
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-[#A3FF12]">
                  My Mission
                </p>

                <h2 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">
                  PLANET 2029
                </h2>

                <div className="mt-7 h-px w-20 bg-[#A3FF12]" />
              </div>

              {/* Right */}
              <div>
                <p className="text-base leading-8 text-white/50 md:text-lg">
                  A personal mission to explore beyond familiar borders,
                  experience new places, and create memories worth carrying
                  forward. The goal is simple — complete at least one
                  international journey before{" "}
                  <span className="text-white">
                    31 December 2029.
                  </span>
                </p>

                {/* Mission dates */}
                <div className="mt-8 flex flex-wrap gap-8">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                      Mission Started
                    </p>

                    <p className="mt-2 text-sm text-[#A3FF12]">
                      07 August 2026
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-[0.3em] text-white/25">
                      Mission Target
                    </p>

                    <p className="mt-2 text-sm text-[#A3FF12]">
                      31 December 2029
                    </p>
                  </div>
                </div>

                {/* Button */}
                <motion.a
                  href="/planet-2029"
                  whileHover={{
                    scale: 1.04,
                    boxShadow:
                      "0 0 35px rgba(163,255,18,0.2)",
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="mt-9 inline-flex items-center gap-3 rounded-full border border-[#A3FF12]/50 px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#A3FF12] transition-all duration-300 hover:bg-[#A3FF12] hover:text-black"
                >
                  Explore PLANET 2029
                  <span>→</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* =========================================================
            CINELIEBE
        ========================================================= */}
        <section className="relative overflow-hidden border-t border-[#F5C542]/15 bg-black px-6 py-28 md:py-36">
          {/* Gold glow */}
          <motion.div
            className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5C542]/5 blur-[140px]"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="relative z-10 mx-auto max-w-5xl text-center"
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            <p className="text-xs uppercase tracking-[0.5em] text-[#F5C542]">
              My Cinematic World
            </p>

            <h2 className="mt-5 text-5xl font-bold tracking-tight md:text-7xl">
              CINELIEBE
            </h2>

            <div className="mx-auto mt-6 h-px w-16 bg-[#F5C542]" />

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/40 md:text-base">
              A personal collection of movies and shows that became part of
              my memories.
            </p>

            <motion.a
              href="/cineliebe"
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 0 35px rgba(245,197,66,0.35)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#F5C542] px-7 py-4 text-sm font-semibold text-black transition hover:bg-[#FFD866]"
            >
              Enter CINELIEBE
              <span>→</span>
            </motion.a>
          </motion.div>
        </section>
      </main>

      {/* =========================================================
          FOOTER
      ========================================================= */}
      <Footer />
    </div>
  );
}