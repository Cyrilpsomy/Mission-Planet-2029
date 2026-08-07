"use client";

import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Countdown from "@/components/home/Countdown";
import MissionProfile from "@/components/home/MissionProfile";
import JourneyLog from "@/components/home/JourneyLog";
import DestinationTracker from "@/components/home/DestinationTracker";
import MissionGallery from "@/components/home/MissionGallery";
import TravelJournal from "@/components/home/TravelJournal";
import PartnersInHeaven from "@/components/home/PartnersInHeaven";
import About from "@/components/home/About";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">

        {/* ================= HERO SECTION ================= */}
        <section
          id="home"
          className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/travel-bg.jpg')",
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

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Hero Content */}
          <motion.div
            className="relative z-10 max-w-5xl text-center"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
<h1 className="text-6xl md:text-8xl font-bold tracking-wide">
  PLANET 2029
</h1>

<p className="mt-4 text-xl md:text-2xl italic text-slate-300">
  A dream written into reality.
</p>

<p className="mt-2 text-lg text-slate-400">
  — Cyril P Somy
</p>

<p className="mt-8 text-xl md:text-2xl text-slate-200">
  A journey beyond borders.
  <br />
  Discovering the world, one story at a time.
</p>

            <p className="mt-6 italic text-slate-300">
              "The world is waiting to be explored."
            </p>

            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                document.getElementById("countdown")?.scrollIntoView({
                  behavior: "smooth",
                });
              }}
              className="mt-12 rounded-full bg-yellow-400 px-10 py-4 font-semibold text-black transition hover:bg-yellow-300"
            >
              Begin the Journey
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center"
            animate={{ y: [0, 10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">
              Scroll
            </p>

            <div className="mt-2 text-2xl text-white/70">
              ↓
            </div>
          </motion.div>
        </section>

        {/* ================= WEBSITE CONTENT ================= */}

        <Countdown />

        <MissionProfile />

        <JourneyLog />

        <DestinationTracker />

        <MissionGallery />

    

        <TravelJournal />

        <PartnersInHeaven />


          <About />

      </main>
    </>
  );
}

      