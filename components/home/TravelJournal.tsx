"use client";

import { motion } from "framer-motion";

const journalEntries = [
  {
    date: "07 August 2026",
    location: "Kerala, India",
    title: "Mission Begins",
    status: "Started",
    story:
      "Today marks the official beginning of PLANET 2029. This mission is a promise to myself — to travel beyond borders, experience new cultures, discover unfamiliar places, and create unforgettable memories before December 2029.",
  },
  {
    date: "Future",
    location: "Germany",
    title: "Gateway to Europe",
    status: "Planned",
    story:
      "Germany represents one of the first major European chapters of PLANET 2029. Historic cities, breathtaking castles, modern engineering, and a rich cultural heritage make this destination an exciting part of the mission.",
  },
  {
    date: "Future",
    location: "Austria",
    title: "Alpine Adventure",
    status: "Planned",
    story:
      "A journey through the Austrian Alps, beautiful lakes, historic cities, classical music, and charming villages. A destination where nature and culture come together.",
  },
  {
    date: "Future",
    location: "Bhutan",
    title: "The Land of Happiness",
    status: "Planned",
    story:
      "Discover peaceful monasteries, Himalayan landscapes, unique traditions, and a culture that places great importance on happiness, simplicity, and balance.",
  },
  {
    date: "Future",
    location: "Norway",
    title: "Northern Lights Expedition",
    status: "Dream",
    story:
      "One of the biggest dreams of PLANET 2029 — witnessing the Aurora Borealis, exploring dramatic fjords, and experiencing the extraordinary landscapes of northern Norway.",
  },
  {
    date: "Future",
    location: "Japan",
    title: "Tradition & Innovation",
    status: "Dream",
    story:
      "Experience the contrast between ancient traditions and modern innovation while exploring temples, Japanese culture, cherry blossoms, technology, and vibrant cities.",
  },
];

export default function TravelJournal() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">

        {/* ================= HEADER ================= */}

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
            Stories From The Journey
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Travel Journal
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-400">
            A collection of destinations, dreams, experiences and milestones
            recorded throughout the PLANET 2029 mission.
          </p>
        </motion.div>

        {/* ================= JOURNAL TIMELINE ================= */}

        <div className="relative mt-16">

          {/* Timeline Line */}

          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-8 md:space-y-10">

            {journalEntries.map((entry, index) => (
              <motion.article
                key={`${entry.title}-${index}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="relative md:pl-14"
              >

                {/* Timeline Dot */}

                <div className="absolute left-0 top-8 hidden h-9 w-9 items-center justify-center rounded-full border border-yellow-400/40 bg-slate-950 md:flex">
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                </div>

                {/* Journal Card */}

                <div className="group rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-yellow-400/20 md:p-8">

                  {/* Date + Status */}

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <p className="font-semibold text-yellow-400">
                      {entry.date}
                    </p>

                    <span
                      className={`w-fit rounded-full border px-4 py-1 text-xs font-medium uppercase tracking-wider ${
                        entry.status === "Started"
                          ? "border-green-400/30 bg-green-400/10 text-green-300"
                          : entry.status === "Dream"
                            ? "border-purple-400/30 bg-purple-400/10 text-purple-300"
                            : "border-yellow-400/30 bg-yellow-400/10 text-yellow-300"
                      }`}
                    >
                      {entry.status}
                    </span>
                  </div>

                  {/* Location */}

                  <p className="mt-4 text-sm text-slate-500">
                    📍 {entry.location}
                  </p>

                  {/* Title */}

                  <h3 className="mt-3 text-2xl font-bold text-white md:text-3xl">
                    {entry.title}
                  </h3>

                  {/* Story */}

                  <p className="mt-5 leading-8 text-slate-300">
                    {entry.story}
                  </p>

                  {/* Entry Number */}

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/30">
                      Journal Entry {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}

          </div>
        </div>

        {/* ================= END MESSAGE ================= */}

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mx-auto h-px w-20 bg-yellow-400/50" />

          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-white/30">
            The story continues...
          </p>

          <p className="mx-auto mt-3 max-w-xl text-slate-500">
            New entries will be added as the journey unfolds.
          </p>
        </motion.div>

      </div>
    </section>
  );
}