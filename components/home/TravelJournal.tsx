"use client";

import { motion } from "framer-motion";

const journalEntries = [
  {
    date: "07 August 2026",
    location: "Kerala, India",
    title: "Mission Begins",
    status: "Started",
    story:
      "Today marks the official beginning of PLANET 2029. This mission is a promise to myself—to travel beyond borders, experience new cultures, and create unforgettable memories before December 2029.",
  },
  {
    date: "Future",
    location: "Germany",
    title: "Gateway to Europe",
    status: "Planned",
    story:
      "Experience Germany's historic cities, breathtaking castles, modern engineering, and rich cultural heritage. This will be one of the first major milestones of PLANET 2029.",
  },
  {
    date: "Future",
    location: "Austria",
    title: "Alpine Adventure",
    status: "Planned",
    story:
      "Explore the majestic Alps, beautiful lakes, classical music, and charming villages while experiencing Austria's incredible natural beauty.",
  },
  {
    date: "Future",
    location: "Bhutan",
    title: "The Land of Happiness",
    status: "Planned",
    story:
      "Discover peaceful monasteries, Himalayan landscapes, unique traditions, and the country's philosophy of Gross National Happiness.",
  },
  {
    date: "Future",
    location: "Norway",
    title: "Northern Lights Expedition",
    status: "Dream",
    story:
      "Witness the magical Aurora Borealis, explore dramatic fjords, and experience one of the world's most spectacular natural wonders.",
  },
  {
    date: "Future",
    location: "Japan",
    title: "Land of Tradition & Innovation",
    status: "Dream",
    story:
      "Experience the perfect blend of ancient traditions and cutting-edge technology while exploring temples, cherry blossoms, and vibrant cities.",
  },
];

export default function TravelJournal() {
  return (
    <section
      id="journal"
      className="bg-slate-950 px-6 py-20 text-white md:py-28"
    >

      <div className="mx-auto max-w-5xl">

        <motion.h2
          className="text-center text-3xl font-bold md:text-5xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Travel Journal
        </motion.h2>


        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
          Documenting destinations, dreams, and milestones throughout the
          PLANET 2029 mission.
        </p>


        <div className="mt-10 space-y-8 md:mt-16 md:space-y-10">

          {journalEntries.map((entry, index) => (

            <motion.div
              key={index}
              className="
                rounded-3xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-md
                shadow-xl
                md:p-8
              "
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
            >

              <p className="font-semibold text-yellow-400">
                {entry.date}
              </p>


              <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                {entry.title}
              </h3>


              <p className="mt-2 text-slate-400">
                📍 {entry.location}
              </p>


              <span
                className="
                  mt-4
                  inline-block
                  rounded-full
                  border
                  border-yellow-500
                  bg-yellow-500/20
                  px-4
                  py-1
                  text-sm
                  text-yellow-300
                "
              >
                {entry.status}
              </span>


              <p className="mt-5 leading-7 text-slate-300 md:mt-6 md:leading-8">
                {entry.story}
              </p>


            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}