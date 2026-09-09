"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const shows = [
  {
    title: "Anohana",
    year: "2011",
    genre: "Anime · Drama",
    description:
      "A deeply emotional story about friendship, loss, memories, and letting go.",
  },
  {
    title: "Demon Slayer",
    year: "2019",
    genre: "Anime · Action",
    description:
      "A journey of determination, family, demons, and extraordinary battles.",
  },
  {
    title: "One Piece",
    year: "1999",
    genre: "Anime · Adventure",
    description:
      "An endless adventure across the seas in search of freedom and the legendary One Piece.",
  },
  {
    title: "Tsuki ga Kirei",
    year: "2017",
    genre: "Anime · Romance",
    description:
      "A quiet and beautiful story about first love, growing up, and finding your way.",
  },
  {
    title: "Game of Thrones",
    year: "2011",
    genre: "Fantasy · Drama",
    description:
      "An epic tale of power, loyalty, betrayal, and the fight for the Iron Throne.",
  },
  {
    title: "All of Us Are Dead",
    year: "2022",
    genre: "K-Drama · Horror",
    description:
      "Students fight to survive when their school becomes the center of a zombie outbreak.",
  },
  {
    title: "Mischievous Kiss",
    year: "2010",
    genre: "Drama · Romance",
    description:
      "A charming romantic story about an unexpected relationship between two very different people.",
  },
  {
    title: "Clannad",
    year: "2007",
    genre: "Anime · Drama",
    description:
      "A moving story about family, friendship, love, and the unexpected paths of life.",
  },
  {
    title: "Doraemon",
    year: "1979",
    genre: "Anime · Comedy · Family",
    description:
      "A beloved story of friendship, imagination, and adventures with a robotic cat from the future.",
  },
  {
    title: "Shinchan",
    year: "1992",
    genre: "Anime · Comedy · Family",
    description:
      "The hilarious everyday adventures of a mischievous young boy and his family and friends.",
  },
];

export default function ShowsPage() {
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
                  Shows
                </h1>

                <div className="mt-7 h-px w-24 bg-[#A3FF12]" />
              </div>

              <p className="max-w-md text-sm leading-7 text-white/40 md:text-right">
                Series and shows that kept me coming back for more, episode
                after episode.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Shows Collection */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">
          {/* Collection Header */}
          <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-5">
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              My Collection
            </p>

            <p className="text-xs tracking-widest text-[#A3FF12]">
              {String(shows.length).padStart(2, "0")} SHOWS
            </p>
          </div>

          {/* Show List */}
          <div className="space-y-4">
            {shows.map((show, index) => (
              <motion.div
                key={show.title}
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

                  {/* Show Information */}
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-[#A3FF12] md:text-3xl">
                      {show.title}
                    </h2>

                    <p className="mt-2 text-sm text-white/35">
                      {show.description}
                    </p>
                  </div>

                  {/* Metadata */}
                  <div className="flex flex-col gap-2 md:items-end">
                    <span className="text-sm text-white/70">
                      {show.year}
                    </span>

                    <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                      {show.genre}
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