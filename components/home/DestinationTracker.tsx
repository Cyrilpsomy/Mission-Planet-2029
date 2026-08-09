"use client";

import { motion } from "framer-motion";

const destinations = [
  {
    region: "Asia",
    places: [
      {
        name: "India",
        status: "Home",
      },
      {
        name: "Bhutan",
        status: "Dream",
      },
      {
        name: "Japan",
        status: "Dream",
      },
      {
        name: "Nepal",
        status: "Dream",
      },
    ],
  },
  {
    region: "Europe",
    places: [
      {
        name: "Germany",
        status: "Planned",
      },
      {
        name: "Austria",
        status: "Planned",
      },
      {
        name: "Switzerland",
        status: "Dream",
      },
      {
        name: "Norway",
        status: "Dream",
      },
    ],
  },
  {
    region: "Beyond",
    places: [
      {
        name: "New Territories",
        status: "Future",
      },
      {
        name: "Unexpected Places",
        status: "Future",
      },
      {
        name: "New Discoveries",
        status: "Future",
      },
    ],
  },
];

const statusStyles: Record<string, string> = {
  Home: "border-white/20 bg-white/10 text-slate-200",
  Planned: "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
  Dream: "border-purple-400/20 bg-purple-400/10 text-purple-300",
  Future: "border-sky-400/20 bg-sky-400/10 text-sky-300",
};

export default function DestinationTracker() {
  return (
    <section className="px-6 py-24">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
            Where The Road May Lead
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Destination Tracker
          </h2>

          <div className="mx-auto mt-6 h-px w-20 bg-yellow-400" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-gray-400 md:text-lg">
            Places I hope to discover, experiences I hope to have, and
            destinations waiting to become part of the story.
          </p>
        </div>

        {/* Destination Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.region}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur
                transition
                hover:border-yellow-400/20
                md:p-7
              "
            >
              {/* Region */}
              <h3 className="text-2xl font-bold text-yellow-400">
                {destination.region}
              </h3>

              {/* Places */}
              <div className="mt-6 space-y-4">
                {destination.places.map((place) => (
                  <div
                    key={place.name}
                    className="
                      rounded-2xl
                      border
                      border-white/5
                      bg-black/20
                      p-4
                    "
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-medium text-slate-200">
                        {place.name}
                      </span>

                      <span
                        className={`
                          rounded-full
                          border
                          px-2.5
                          py-1
                          text-[10px]
                          font-semibold
                          uppercase
                          tracking-wider
                          ${
                            statusStyles[place.status] ??
                            "border-white/10 bg-white/5 text-slate-300"
                          }
                        `}
                      >
                        {place.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {["Home", "Planned", "Dream", "Future"].map((status) => (
            <span
              key={status}
              className={`
                rounded-full
                border
                px-4
                py-1.5
                text-xs
                font-medium
                ${statusStyles[status]}
              `}
            >
              {status}
            </span>
          ))}
        </motion.div>

        {/* Closing Message */}
        <p className="mt-10 text-center text-sm uppercase tracking-[0.3em] text-white/40">
          The map is never finished.
        </p>
      </motion.div>
    </section>
  );
}