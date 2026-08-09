"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const memories = [
  {
    title: "Mission Begins",
    location: "Kerala, India",
    date: "07 August 2026",
    description:
      "The beginning of PLANET 2029 and the first chapter of the journey.",
    image: "/gallery/mission.jpg",
  },
  {
    title: "Norway Dream",
    location: "Norway",
    date: "Future Destination",
    description:
      "The land of fjords, mountains and northern lights awaits.",
    image: "/gallery/norway.jpg",
  },
  {
    title: "World Explorer",
    location: "Around the World",
    date: "Future",
    description:
      "Collecting stories, experiences and memories from different corners of the planet.",
    image: "/gallery/explorer.jpg",
  },
  {
    title: "Future Destination",
    location: "Unknown",
    date: "Future",
    description:
      "New places, new cultures and new experiences waiting to become memories.",
    image: "/gallery/future.jpg",
  },
];

export default function MissionGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeViewer = () => {
    setSelectedIndex(null);
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex((selectedIndex + 1) % memories.length);
  };

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex - 1 + memories.length) % memories.length
    );
  };

  /*
   * Keyboard controls
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        closeViewer();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  /*
   * Prevent background scrolling while viewer is open
   */
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <section className="px-6 py-24">
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* ================= HEADER ================= */}

        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
            Memories & Moments
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Mission Gallery
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Moments that inspire the journey and memories waiting to be
            created throughout PLANET 2029.
          </p>
        </div>

        {/* ================= GALLERY ================= */}

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {memories.map((memory, index) => (
            <motion.article
              key={memory.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              onClick={() => setSelectedIndex(index)}
              className="
                group
                cursor-pointer
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/5
                shadow-xl
                backdrop-blur-md
              "
            >
              {/* IMAGE */}

              <div className="relative h-72 overflow-hidden md:h-96">
                <Image
                  src={memory.image}
                  alt={memory.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="
                    object-cover
                    transition
                    duration-700
                    group-hover:scale-110
                  "
                />

                {/* Overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Date */}

                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs text-white backdrop-blur-md">
                  {memory.date}
                </div>

                {/* View indicator */}

                <div className="absolute bottom-5 right-5 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs text-white opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
                  View Photo
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-6 md:p-7">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-yellow-400">
                  {memory.location}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                  {memory.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {memory.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* ================= FUTURE MESSAGE ================= */}

        <motion.div
          className="mx-auto mt-12 max-w-3xl text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-white/30">
            More memories will be added
          </p>

          <p className="mt-3 text-slate-500">
            Every journey begins with a single step. Every photograph
            becomes a memory.
          </p>
        </motion.div>
      </motion.div>

      {/* ====================================================== */}
      {/* FULL SCREEN PHOTO VIEWER */}
      {/* ====================================================== */}

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm md:p-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeViewer}
          >
            {/* Close Button */}

            <button
              onClick={closeViewer}
              className="
                absolute
                right-5
                top-5
                z-20
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/10
                text-2xl
                text-white
                transition
                hover:bg-white/20
              "
              aria-label="Close gallery"
            >
              ✕
            </button>

            {/* Previous Button */}

            <button
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="
                absolute
                left-3
                z-20
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/50
                text-3xl
                text-white
                transition
                hover:bg-white/20
                md:left-8
                md:h-14
                md:w-14
              "
              aria-label="Previous photo"
            >
              ‹
            </button>

            {/* Next Button */}

            <button
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="
                absolute
                right-3
                z-20
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-black/50
                text-3xl
                text-white
                transition
                hover:bg-white/20
                md:right-8
                md:h-14
                md:w-14
              "
              aria-label="Next photo"
            >
              ›
            </button>

            {/* Photo + Information */}

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-5xl flex-col items-center"
            >
              {/* Image */}

              <div className="relative h-[55vh] w-full md:h-[70vh]">
                <Image
                  src={memories[selectedIndex].image}
                  alt={memories[selectedIndex].title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Information */}

              <div className="mt-4 text-center">
                <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
                  {memories[selectedIndex].location}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white md:text-3xl">
                  {memories[selectedIndex].title}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {memories[selectedIndex].date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}