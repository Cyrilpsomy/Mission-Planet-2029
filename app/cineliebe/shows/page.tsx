"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const shows = [
  "Anohana",
  "Demon Slayer",
  "One Piece",
  "Tsuki ga Kirei",
  "House of the Dragon",
  "All of Us Are Dead",
  "Mischievous Kiss",
  "Clannad",
];

export default function ShowsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <section className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-[#A3FF12]">
              Cineliebe
            </p>

            <h1 className="mt-5 text-5xl font-bold md:text-7xl">
              Shows
            </h1>

            <div className="mx-auto mt-6 h-px w-20 bg-[#A3FF12]" />

            <p className="mx-auto mt-6 max-w-2xl text-white/50">
              Series and shows that kept me coming back for more.
            </p>
          </motion.div>

          {/* Shows Grid */}

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {shows.map((show, index) => (
              <motion.div
                key={show}
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
                  delay: index * 0.05,
                }}
                viewport={{
                  once: true,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:border-[#A3FF12]/40 hover:bg-[#A3FF12]/5"
              >
                <p className="text-xs tracking-[0.3em] text-[#A3FF12]">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h2 className="mt-5 text-2xl font-bold transition-colors group-hover:text-[#A3FF12]">
                  {show}
                </h2>

                <p className="mt-4 text-sm text-white/40">
                  One of my favorite shows.
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}