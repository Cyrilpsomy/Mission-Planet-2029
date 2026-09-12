"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { movies, series } from "@/data/cineliebe";

const featured = [
  {
    number: "01",
    title: "Your Name",
    type: "FILM",
    year: "2016",
  },
  {
    number: "02",
    title: "Interstellar",
    type: "FILM",
    year: "2014",
  },
  {
    number: "03",
    title: "Premam",
    type: "FILM",
    year: "2015",
  },
  {
    number: "04",
    title: "Anohana",
    type: "SERIES",
    year: "2011",
  },
  {
    number: "05",
    title: "Grave of the Fireflies",
    type: "FILM",
    year: "1988",
  },
  {
    number: "06",
    title: "One Piece",
    type: "SERIES",
    year: "1999",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function CineliebePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6"
      >
        {/* Hero Image */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/cineliebe/cineliebe-hero.jpg')",
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/65" />

        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black/30" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />

        {/* Gold atmospheric glow */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5C542]/10 blur-[180px]" />

        {/* Film grain */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:url('data:image/svg+xml,%3Csvg viewBox=%220 0 180 180%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%22.8%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22 opacity=%22.7%22/%3E%3C/svg%3E')]" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 1 }}
            className="max-w-5xl"
          >
            {/* Small label */}
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#F5C542]" />

              <p className="text-xs font-medium uppercase tracking-[0.5em] text-[#F5C542]">
                My Cinematic World
              </p>
            </div>

            {/* Main title */}
            <h1 className="mt-8 text-[18vw] font-bold leading-[0.8] tracking-[-0.06em] text-white sm:text-[15vw] md:text-[11vw] lg:text-[10rem]">
              Cineliebe
            </h1>

            {/* Subtitle */}
            <p className="mt-10 max-w-2xl text-base leading-8 text-white/60 md:text-xl">
              A personal archive of films and stories that made me
              laugh, think, feel, and remember.
            </p>

            {/* Quote */}
            <p className="mt-5 text-sm italic tracking-wide text-white/35">
              Stories that became memories.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href="#archive"
                whileHover={{
                  scale: 1.04,
                  boxShadow:
                    "0 0 40px rgba(245,197,66,0.25)",
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="inline-flex items-center gap-4 rounded-full bg-[#F5C542] px-7 py-4 text-xs font-bold uppercase tracking-[0.25em] text-black transition-all duration-300"
              >
                Enter the Archive

                <span className="text-lg">
                  ↓
                </span>
              </motion.a>

              <motion.a
                href="/cineliebe/movies"
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                className="inline-flex items-center gap-4 rounded-full border border-white/20 bg-black/30 px-7 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/70 backdrop-blur-md transition-all duration-300 hover:border-[#F5C542]/50 hover:text-[#F5C542]"
              >
                Browse Films

                <span>
                  →
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom metadata */}
        <div className="absolute bottom-10 left-6 right-6 z-10">
          <div className="mx-auto flex max-w-7xl items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/30">
                CINELIEBE / 001
              </p>
            </div>

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="text-right"
            >
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/30">
                Scroll
              </p>

              <p className="mt-2 text-lg text-[#F5C542]">
                ↓
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ===================================================== */}

      <section
        id="archive"
        className="relative border-t border-white/10 px-6 py-28 md:py-36"
      >
        {/* Background glow */}
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5C542]/[0.035] blur-[140px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            <p className="text-xs uppercase tracking-[0.45em] text-[#F5C542]">
              The Archive
            </p>

            <div className="mt-7 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
              <h2 className="text-5xl font-bold leading-[0.95] tracking-tight md:text-7xl">
                Cinema is not
                <br />

                <span className="text-white/25">
                  just entertainment.
                </span>
              </h2>

              <p className="max-w-md text-sm leading-8 text-white/40 md:pb-2">
                Some stories disappear when the credits roll.
                Others stay with you. This is a collection of
                those stories.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          MOVIES / SHOWS / I'M ONLY HUMAN
      ===================================================== */}

      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-3">

            {/* =================================================
                MOVIES
            ================================================= */}

            <motion.a
              href="/cineliebe/movies"
              initial={{
                opacity: 0,
                x: -40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                backgroundColor:
                  "rgba(245,197,66,0.035)",
              }}
              className="group relative min-h-[480px] overflow-hidden bg-black p-8 transition-all duration-700 md:p-12"
            >
              {/* Number */}

              <span className="absolute right-8 top-6 text-[9rem] font-bold leading-none text-white/[0.025] transition-all duration-700 group-hover:text-[#F5C542]/[0.06] md:right-12 md:text-[12rem]">
                01
              </span>

              {/* Glow */}

              <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#F5C542]/[0.04] blur-[100px] transition-all duration-700 group-hover:bg-[#F5C542]/[0.1]" />

              {/* Content */}

              <div className="relative flex min-h-[410px] flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#F5C542]" />

                    <p className="text-[10px] uppercase tracking-[0.4em] text-white/35">
                      The Films
                    </p>
                  </div>

                  <h3 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl">
                    Movies
                  </h3>

                  <div className="mt-7 h-px w-16 bg-[#F5C542] transition-all duration-500 group-hover:w-28" />

                  <p className="mt-7 max-w-md text-sm leading-8 text-white/35">
                    Films that captured my attention, made me
                    laugh, made me think, and became part of
                    my memories.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                      Enter Collection
                    </span>

                    <p className="mt-2 text-xs text-[#F5C542]/70">
                      {movies.length} Films
                    </p>
                  </div>

                  <span className="text-2xl text-[#F5C542] transition-transform duration-500 group-hover:translate-x-3">
                    →
                  </span>
                </div>
              </div>
            </motion.a>

            {/* =================================================
                SHOWS
            ================================================= */}

            <motion.a
              href="/cineliebe/shows"
              initial={{
                opacity: 0,
                x: 0,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                backgroundColor:
                  "rgba(245,197,66,0.035)",
              }}
              className="group relative min-h-[480px] overflow-hidden bg-black p-8 transition-all duration-700 md:p-12"
            >
              {/* Number */}

              <span className="absolute right-8 top-6 text-[9rem] font-bold leading-none text-white/[0.025] transition-all duration-700 group-hover:text-[#F5C542]/[0.06] md:right-12 md:text-[12rem]">
                02
              </span>

              {/* Glow */}

              <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-[#F5C542]/[0.04] blur-[100px] transition-all duration-700 group-hover:bg-[#F5C542]/[0.1]" />

              {/* Content */}

              <div className="relative flex min-h-[410px] flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#F5C542]" />

                    <p className="text-[10px] uppercase tracking-[0.4em] text-white/35">
                      The Series
                    </p>
                  </div>

                  <h3 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl">
                    Shows
                  </h3>

                  <div className="mt-7 h-px w-16 bg-[#F5C542] transition-all duration-500 group-hover:w-28" />

                  <p className="mt-7 max-w-md text-sm leading-8 text-white/35">
                    Series that kept me watching, waiting for
                    the next episode, and coming back for more.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-white/10 pt-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.35em] text-white/30">
                      Enter Collection
                    </span>

                    <p className="mt-2 text-xs text-[#F5C542]/70">
                      {series.length} Shows
                    </p>
                  </div>

                  <span className="text-2xl text-[#F5C542] transition-transform duration-500 group-hover:translate-x-3">
                    →
                  </span>
                </div>
              </div>
            </motion.a>

            {/* =================================================
                I'M ONLY HUMAN
            ================================================= */}

            <motion.a
              href="/cineliebe/im-only-human"
              initial={{
                opacity: 0,
                x: 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                backgroundColor:
                  "rgba(245,197,66,0.045)",
              }}
              className="group relative min-h-[480px] overflow-hidden bg-[#f9f8f4] p-8 text-[#252525] transition-all duration-700 md:p-12"
            >
              {/* Number */}

              <span className="absolute right-8 top-6 font-serif text-[9rem] font-light leading-none text-[#b38a2e]/[0.08] transition-all duration-700 group-hover:text-[#b38a2e]/[0.14] md:right-12 md:text-[12rem]">
                03
              </span>

              {/* Soft gold glow */}

              <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-[#c9a44c]/[0.08] blur-[100px] transition-all duration-700 group-hover:bg-[#c9a44c]/[0.16]" />

              {/* Content */}

              <div className="relative flex min-h-[410px] flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-[#b38a2e]" />

                    <p className="text-[10px] uppercase tracking-[0.4em] text-[#8f702c]">
                      Something Different
                    </p>
                  </div>

                  <h3 className="mt-8 font-serif text-4xl font-light leading-tight md:text-5xl">
                    I&apos;m Only
                    <br />
                    <span className="italic text-[#b38a2e]">
                      Human.
                    </span>
                  </h3>

                  <div className="mt-7 h-px w-16 bg-[#c9a44c] transition-all duration-500 group-hover:w-28" />

                  <p className="mt-7 max-w-md text-sm leading-8 text-[#777]">
                    Cineliebe is not just about recommending movies and
                    shows. It is about discovering different possibilities
                    of life through the stories we watch — different ways
                    of thinking, loving, choosing, and living — helping us
                    reflect on our own journey and make choices that could
                    make our lives a little better.
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-[#b38a2e]/15 pt-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.35em] text-[#999]">
                      Enter Collection
                    </span>

                    <p className="mt-2 text-xs text-[#b38a2e]">
                      Stories of kindness & humanity
                    </p>
                  </div>

                  <span className="text-2xl text-[#b38a2e] transition-transform duration-500 group-hover:translate-x-3">
                    →
                  </span>
                </div>
              </div>
            </motion.a>

          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED
      ===================================================== */}

      <section className="border-t border-white/10 px-6 py-28 md:py-36">
        <div className="mx-auto max-w-7xl">

          {/* Header */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.45em] text-[#F5C542]">
                Selected Memories
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
                Featured
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-white/35 md:text-right">
              A few stories that hold a special place in the
              collection.
            </p>
          </motion.div>

          {/* Featured list */}

          <div className="mt-14 border-t border-white/10">
            {featured.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                viewport={{
                  once: true,
                }}
                className="group grid grid-cols-[45px_1fr_auto] items-center gap-5 border-b border-white/10 py-6 transition-all duration-500 hover:px-4 md:grid-cols-[70px_1fr_100px_80px] md:gap-8"
              >
                {/* Number */}

                <span className="text-xs tracking-[0.25em] text-[#F5C542]">
                  {item.number}
                </span>

                {/* Title */}

                <h3 className="text-xl font-medium tracking-tight transition-colors duration-300 group-hover:text-[#F5C542] md:text-2xl">
                  {item.title}
                </h3>

                {/* Type */}

                <span className="hidden text-right text-[10px] uppercase tracking-[0.3em] text-white/25 md:block">
                  {item.type}
                </span>

                {/* Year */}

                <span className="text-right text-xs text-white/35">
                  {item.year}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          STATISTICS
      ===================================================== */}

      <section className="border-y border-white/10 px-6 py-20">
        <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-white/10 text-center">

          {/* Movies */}

          <div>
            <p className="text-4xl font-bold md:text-6xl">
              {movies.length}
            </p>

            <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-white/30 md:text-xs">
              Films
            </p>
          </div>

          {/* Shows */}

          <div>
            <p className="text-4xl font-bold md:text-6xl">
              {series.length}
            </p>

            <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-white/30 md:text-xs">
              Shows
            </p>
          </div>

          {/* Memories */}

          <div>
            <p className="text-4xl font-bold text-[#F5C542] md:text-6xl">
              ∞
            </p>

            <p className="mt-3 text-[9px] uppercase tracking-[0.35em] text-white/30 md:text-xs">
              Memories
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING
      ===================================================== */}

      <section className="relative overflow-hidden px-6 py-36 text-center">

        {/* Glow */}

        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5C542]/[0.06] blur-[150px]" />

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
          }}
          viewport={{
            once: true,
          }}
          className="relative mx-auto max-w-4xl"
        >
          <p className="text-xs uppercase tracking-[0.5em] text-[#F5C542]">
            Cineliebe
          </p>

          <h2 className="mt-8 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Every story leaves
            <br />

            <span className="text-white/30">
              something behind.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-white/35">
            These are not just movies and shows.
            They are moments, feelings, memories and pieces
            of time that stayed long after the screen went dark.
          </p>

          <motion.a
            href="/cineliebe/movies"
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 40px rgba(245,197,66,0.2)",
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="mt-10 inline-flex items-center gap-4 rounded-full border border-[#F5C542]/60 px-8 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#F5C542] transition-all duration-300 hover:bg-[#F5C542] hover:text-black"
          >
            Start Exploring

            <span>
              →
            </span>
          </motion.a>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}