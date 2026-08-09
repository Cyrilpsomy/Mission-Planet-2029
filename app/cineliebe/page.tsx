"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function CineliebePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        id="home"
        className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6"
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/cineliebe/cineliebe-hero.jpg')",
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />

        <div className="absolute inset-0 bg-black/70" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black" />

        {/* Golden Glow */}

        <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5C542]/10 blur-[160px]" />

        {/* Hero Content */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 mx-auto max-w-5xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.6em] text-[#F5C542] drop-shadow-[0_0_15px_rgba(245,197,66,0.45)] md:text-sm">
            My Cinematic World
          </p>

          <h1 className="mt-6 text-6xl font-bold tracking-tight text-white md:text-8xl lg:text-9xl">
            Cineliebe
          </h1>

          <div className="mx-auto mt-8 h-px w-24 bg-[#F5C542]" />

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-white/80 md:text-xl">
            A personal collection of movies and shows that
            entertained me, inspired me and stayed with me.
          </p>

          <p className="mt-6 text-sm italic text-white/60">
            Stories that became memories.
          </p>

          {/* Explore Button */}

          <motion.a
            href="#collection"
            whileHover={{
              scale: 1.06,
              boxShadow: "0 0 35px rgba(245,197,66,0.35)",
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="mt-10 inline-flex items-center gap-4 rounded-full border border-[#F5C542] bg-black/60 px-8 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#F5C542] backdrop-blur-md transition-all duration-300 hover:bg-[#F5C542] hover:text-black"
          >
            <span>Explore Cineliebe</span>

            <span className="text-lg text-[#F5C542]">
              ↓
            </span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/50">
            Scroll
          </p>

          <p className="mt-2 text-lg text-[#F5C542]">
            ↓
          </p>
        </motion.div>
      </section>

      {/* =====================================================
          COLLECTION
      ===================================================== */}

      <section
        id="collection"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[#A3FF12]">
              Enter the collection
            </p>

            <h2 className="mt-5 text-3xl font-bold md:text-5xl">
              Choose your world
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-white/40">
              Explore the movies and shows that have earned a
              place in my personal cinematic collection.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-2">

            {/* MOVIES */}

            <motion.a
              href="/cineliebe/movies"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-black p-8 transition-all duration-500 hover:border-[#A3FF12]/50 hover:shadow-[0_25px_80px_rgba(163,255,18,0.08)] md:p-12"
            >
              <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#A3FF12]/5 blur-[80px] transition-all duration-500 group-hover:bg-[#A3FF12]/10" />

              <span className="absolute right-8 top-8 text-7xl font-bold text-white/[0.03]">
                01
              </span>

              <div className="relative flex min-h-[350px] flex-col justify-between">

                <div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#A3FF12]/20 bg-[#A3FF12]/5 text-3xl">
                    🎬
                  </div>

                  <p className="mt-10 text-xs uppercase tracking-[0.4em] text-[#A3FF12]">
                    The Films
                  </p>

                  <h3 className="mt-4 text-4xl font-bold md:text-5xl">
                    Movies
                  </h3>

                  <p className="mt-5 max-w-md leading-7 text-white/40">
                    Discover the films that captured my attention,
                    made me laugh, made me think and became part of
                    my memories.
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-4 text-sm font-medium uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 group-hover:text-[#A3FF12]">
                  <span>Explore Movies</span>

                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </motion.a>

            {/* SHOWS */}

            <motion.a
              href="/cineliebe/shows"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-black p-8 transition-all duration-500 hover:border-[#A3FF12]/50 hover:shadow-[0_25px_80px_rgba(163,255,18,0.08)] md:p-12"
            >
              <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-[#A3FF12]/5 blur-[80px] transition-all duration-500 group-hover:bg-[#A3FF12]/10" />

              <span className="absolute right-8 top-8 text-7xl font-bold text-white/[0.03]">
                02
              </span>

              <div className="relative flex min-h-[350px] flex-col justify-between">

                <div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-[#A3FF12]/20 bg-[#A3FF12]/5 text-3xl">
                    📺
                  </div>

                  <p className="mt-10 text-xs uppercase tracking-[0.4em] text-[#A3FF12]">
                    The Series
                  </p>

                  <h3 className="mt-4 text-4xl font-bold md:text-5xl">
                    Shows
                  </h3>

                  <p className="mt-5 max-w-md leading-7 text-white/40">
                    Explore the television shows and series that
                    kept me watching, waiting for the next episode
                    and coming back for more.
                  </p>
                </div>

                <div className="mt-10 flex items-center gap-4 text-sm font-medium uppercase tracking-[0.2em] text-white/60 transition-colors duration-300 group-hover:text-[#A3FF12]">
                  <span>Explore Shows</span>

                  <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            </motion.a>

          </div>
        </div>
      </section>

      {/* =====================================================
          CLOSING
      ===================================================== */}

      <section className="border-t border-white/10 px-6 py-32 text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-[#A3FF12]">
            Cineliebe
          </p>

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            Every story leaves something behind.
          </h2>

          <p className="mt-6 text-white/40">
            These are some of the stories that stayed with me.
          </p>
        </motion.div>

      </section>

      <Footer />

    </main>
  );
}