"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { movies } from "@/data/cineliebe";

export default function MoviesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32">
        {/* Gold glow */}
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#F5C542]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.5em] text-[#F5C542]">
              Cineliebe
            </p>

            <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
                  Movies
                </h1>

                <div className="mt-7 h-px w-24 bg-[#F5C542]" />
              </div>

              <p className="max-w-md text-sm leading-7 text-white/40 md:text-right">
                Films that stayed with me long after the credits
                rolled, becoming part of my cinematic memories.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MOVIE COLLECTION */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">

          {/* COLLECTION HEADER */}
          <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-5">
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              My Collection
            </p>

            <p className="text-xs tracking-widest text-[#F5C542]">
              {String(movies.length).padStart(2, "0")} MOVIES
            </p>
          </div>

          {/* MOVIE LIST */}
          <div className="space-y-4">
            {movies.map((movie, index) => (
              <motion.div
                key={movie.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                whileHover={{ x: 8 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-all duration-500 hover:border-[#F5C542]/40 hover:bg-[#F5C542]/[0.04]"
              >
                {/* Hover accent line */}
                <div className="absolute left-0 top-0 h-full w-0 bg-[#F5C542] transition-all duration-500 group-hover:w-1" />

                <div className="grid items-center gap-6 p-5 md:grid-cols-[100px_80px_1fr_auto] md:p-8">

                  {/* POSTER */}
                  <div className="relative h-[150px] w-[100px] overflow-hidden rounded-lg bg-white/5 shadow-2xl">
                    <Image
                      src={movie.poster}
                      alt={`${movie.title} poster`}
                      fill
                      sizes="100px"
                      priority={index < 3}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Poster overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
                  </div>

                  {/* NUMBER */}
                  <div>
                    <p className="text-sm font-medium tracking-[0.25em] text-[#F5C542]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  {/* MOVIE INFORMATION */}
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-[#F5C542] md:text-3xl">
                      {movie.title}
                    </h2>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-white/35">
                      {movie.description}
                    </p>
                  </div>

                  {/* YEAR / GENRE */}
                  <div className="flex flex-col gap-2 md:items-end">
                    <span className="text-sm text-white/70">
                      {movie.year}
                    </span>

                    <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                      {movie.genre}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}