"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const movies = [
  {
    title: "Your Name",
    year: "2016",
    genre: "Anime · Romance",
    description:
      "A beautiful story of connection, destiny, and memories that transcend time.",
  },
  {
    title: "Interstellar",
    year: "2014",
    genre: "Sci-Fi · Drama",
    description:
      "A journey beyond space and time, driven by love, survival, and human curiosity.",
  },
  {
    title: "Weathering with You",
    year: "2019",
    genre: "Anime · Fantasy",
    description:
      "A story of love, weather, sacrifice, and two people brought together by fate.",
  },
  {
    title: "Spirited Away",
    year: "2001",
    genre: "Anime · Fantasy",
    description:
      "A mysterious journey through a magical world filled with unforgettable characters.",
  },
  {
    title: "My Neighbor Totoro",
    year: "1988",
    genre: "Anime · Family",
    description:
      "A warm and magical story about childhood, family, friendship, and imagination.",
  },
  {
    title: "Be with You",
    year: "2018",
    genre: "Romance · Drama",
    description:
      "A heartfelt story about love, promises, memories, and finding each other again.",
  },
  {
    title: "Miracle in Cell No. 7",
    year: "2013",
    genre: "Drama · Family",
    description:
      "An emotional story of innocence, fatherly love, friendship, and family.",
  },
  {
    title: "The Nun",
    year: "2018",
    genre: "Horror · Mystery",
    description:
      "A dark and terrifying chapter from the world of The Conjuring.",
  },
  {
    title: "Kettayolaanu Ente Malakha",
    year: "2019",
    genre: "Malayalam · Drama",
    description:
      "A deeply human story exploring marriage, relationships, communication, and understanding.",
  },
  {
    title: "Bethalahem Kudumba Unit",
    year: "2026",
    genre: "Malayalam · Drama",
    description:
      "A new addition to my personal collection of cinematic memories.",
  },
  {
    title: "Premam",
    year: "2015",
    genre: "Malayalam · Romance",
    description:
      "A nostalgic journey through different stages of love, life, friendship, and growing up.",
  },
  {
    title: "The Terminal",
    year: "2004",
    genre: "Comedy · Drama",
    description:
      "A touching story about an ordinary man unexpectedly trapped inside an airport.",
  },
  {
    title: "The Raid",
    year: "2011",
    genre: "Action · Thriller",
    description:
      "A relentless fight for survival as an elite team takes on a dangerous criminal stronghold.",
  },
  {
    title: "Extraction",
    year: "2020",
    genre: "Action · Thriller",
    description:
      "A black-market mercenary takes on a dangerous mission that pushes him to his limits.",
  },
  {
    title: "Grave of the Fireflies",
    year: "1988",
    genre: "Anime · War · Drama",
    description:
      "A heartbreaking story of two siblings struggling to survive during wartime.",
  },
  {
    title: "Hotarubi no Mori e",
    year: "2011",
    genre: "Anime · Romance · Fantasy",
    description:
      "A bittersweet story of an unusual friendship, love, and a connection that cannot last forever.",
  },
  {
    title: "Kazhcha",
    year: "2004",
    genre: "Malayalam · Drama",
    description:
      "A touching Malayalam drama about compassion, family, and the unexpected bonds between people.",
  },
];

export default function MoviesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32">
        {/* Background Glow */}
        <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[#A3FF12]/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Label */}
            <p className="text-xs uppercase tracking-[0.5em] text-[#A3FF12]">
              Cineliebe
            </p>

            {/* Title Area */}
            <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
                  Movies
                </h1>

                <div className="mt-7 h-px w-24 bg-[#A3FF12]" />
              </div>

              <p className="max-w-md text-sm leading-7 text-white/40 md:text-right">
                Films that became part of my cinematic memories, each leaving
                something behind long after the credits rolled.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Movie Collection */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          {/* Collection Header */}
          <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-5">
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              My Collection
            </p>

            <p className="text-xs tracking-widest text-[#A3FF12]">
              {String(movies.length).padStart(2, "0")} FILMS
            </p>
          </div>

          {/* Movie List */}
          <div className="space-y-4">
            {movies.map((movie, index) => (
              <motion.div
                key={movie.title}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                whileHover={{
                  x: 8,
                }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] transition-all duration-500 hover:border-[#A3FF12]/40 hover:bg-[#A3FF12]/[0.04]"
              >
                {/* Green Hover Line */}
                <div className="absolute left-0 top-0 h-full w-0 bg-[#A3FF12] transition-all duration-500 group-hover:w-1" />

                <div className="grid items-center gap-6 p-6 md:grid-cols-[80px_1fr_auto] md:p-8">
                  {/* Number */}
                  <div>
                    <p className="text-sm font-medium tracking-[0.25em] text-[#A3FF12]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  {/* Movie Information */}
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-[#A3FF12] md:text-3xl">
                      {movie.title}
                    </h2>

                    <p className="mt-2 text-sm text-white/35">
                      {movie.description}
                    </p>
                  </div>

                  {/* Metadata */}
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