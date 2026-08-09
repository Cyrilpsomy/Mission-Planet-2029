"use client";

import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Countdown from "@/components/home/Countdown";
import MissionProfile from "@/components/home/MissionProfile";
import JourneyLog from "@/components/home/JourneyLog";
import DestinationTracker from "@/components/home/DestinationTracker";
import WorldExplorerMap from "@/components/home/WorldExplorerMap";
import MissionGallery from "@/components/home/MissionGallery";
import TravelJournal from "@/components/home/TravelJournal";
import PartnersInHeaven from "@/components/home/PartnersInHeaven";

export default function Planet2029Page() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white">

        {/* ================= PLANET 2029 HERO ================= */}

        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-6 py-32 text-center md:py-40">

          {/* ================= BACKGROUND IMAGE ================= */}

          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/planet-2029-bg.jpg')",
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

          {/* ================= DARK OVERLAY ================= */}

          <div className="absolute inset-0 bg-black/65" />

          {/* ================= CINEMATIC GRADIENT ================= */}

          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-slate-950" />

          {/* ================= GREEN GLOW ================= */}

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A3FF12]/10 blur-3xl" />
          </div>

          {/* ================= HERO CONTENT ================= */}

          <motion.div
            className="relative z-10 mx-auto max-w-4xl"
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
          >

            <p className="text-sm uppercase tracking-[0.5em] text-[#A3FF12]">
              Featured Mission
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-widest text-white md:text-7xl lg:text-8xl">
              PLANET 2029
            </h1>

            <div className="mx-auto mt-8 h-px w-24 bg-[#A3FF12]" />

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-200 md:text-xl">
              A personal mission that began on{" "}
              <strong className="text-white">
                07 August 2026
              </strong>
              , with the goal of exploring beyond familiar borders,
              experiencing new cultures and completing at least one
              international journey before December 2029.
            </p>

            <p className="mt-8 text-sm uppercase tracking-[0.3em] text-white/60">
              Explore • Dream • Discover
            </p>

            {/* ================= HERO BUTTON ================= */}

            <motion.button
              whileHover={{
                scale: 1.06,
                boxShadow: "0 0 35px rgba(163,255,18,0.25)",
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() => {
                document
                  .getElementById("countdown")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  });
              }}
              className="mt-10 rounded-full border border-[#A3FF12] bg-black/50 px-9 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#A3FF12] backdrop-blur-md transition-all duration-300 hover:bg-[#A3FF12] hover:text-black"
            >
              Explore Mission
            </motion.button>

          </motion.div>

          {/* ================= SCROLL INDICATOR ================= */}

          <motion.div
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.4em] text-white/50">
              Scroll
            </p>

            <p className="mt-2 text-lg text-[#A3FF12]">
              ↓
            </p>
          </motion.div>

        </section>

        {/* ================= COUNTDOWN ================= */}

        <section
          id="countdown"
          className="scroll-mt-24 px-6 py-20"
        >
          <Countdown />
        </section>

        {/* ================= MISSION PROFILE ================= */}

        <section
          id="mission"
          className="scroll-mt-24 px-6 py-20"
        >
          <MissionProfile />
        </section>

        {/* ================= JOURNEY LOG ================= */}

        <section
          id="journey"
          className="scroll-mt-24 px-6 py-20"
        >
          <JourneyLog />
        </section>

        {/* ================= DESTINATION TRACKER ================= */}

        <section className="px-6 py-20">
          <DestinationTracker />
        </section>

        {/* ================= WORLD EXPLORER ================= */}

        <section className="px-6 py-20">
          <WorldExplorerMap />
        </section>

        {/* ================= MISSION GALLERY ================= */}

        <section
          id="gallery"
          className="scroll-mt-24"
        >
          <MissionGallery />
        </section>

        {/* ================= TRAVEL JOURNAL ================= */}

        <section
          id="journal"
          className="scroll-mt-24"
        >
          <TravelJournal />
        </section>

        {/* ================= PARTNERS IN HEAVEN ================= */}

        <PartnersInHeaven />

        {/* ================= MISSION CLOSING ================= */}

        <section className="border-t border-white/10 px-6 py-24 text-center">
          <motion.div
            className="mx-auto max-w-3xl"
            initial={{
              opacity: 0,
              y: 30,
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

            <p className="text-sm uppercase tracking-[0.4em] text-[#A3FF12]">
              Mission Continues
            </p>

            <h2 className="mt-5 text-3xl font-bold md:text-5xl">
              The journey is only beginning.
            </h2>

            <p className="mt-6 leading-8 text-slate-400">
              New destinations, experiences, photographs, stories and
              memories will be added as PLANET 2029 unfolds.
            </p>

          </motion.div>
        </section>

      </main>

      <Footer />
    </>
  );
}