"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { series } from "@/data/cineliebe";

export default function ShowsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}
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

      {/* =====================================================
          SHOWS COLLECTION
      ====================================================== */}
      <section className="px-6 pb-32">
        <div className="mx-auto max-w-7xl">

          {/* Collection Header */}
          <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-5">
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">
              My Collection
            </p>

            <p className="text-xs tracking-widest text-[#A3FF12]">
              {String(series.length).padStart(2, "0")} SHOWS
            </p>
          </div>

          {/* Show List */}
          <div className="space-y-4">
            {series.map((show, index) => (
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

                <div className="grid items-center gap-6 p-5 md:grid-cols-[100px_80px_1fr_auto] md:p-8">

                  {/* =================================================
                      POSTER
                  ================================================= */}
                  <div className="relative h-[150px] w-[100px] overflow-hidden rounded-lg bg-white/5 shadow-2xl">
                    <Image
                      src={show.poster}
                      alt={`${show.title} poster`}
                      fill
                      sizes="100px"
                      priority={index < 3}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Poster Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
                  </div>

                  {/* =================================================
                      NUMBER
                  ================================================= */}
                  <div>
                    <p className="text-sm font-medium tracking-[0.25em] text-[#A3FF12]">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  {/* =================================================
                      SHOW INFORMATION
                  ================================================= */}
                  <div>
                    <h2 className="text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-[#A3FF12] md:text-3xl">
                      {show.title}
                    </h2>

                    <p className="mt-2 max-w-2xl text-sm leading-6 text-white/35">
                      {show.description}
                    </p>
                  </div>

                  {/* =================================================
                      METADATA
                  ================================================= */}
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

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <Footer />
    </main>
  );
}