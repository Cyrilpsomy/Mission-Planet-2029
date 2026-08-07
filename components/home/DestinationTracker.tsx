"use client";

import { motion } from "framer-motion";

export default function DestinationTracker() {
  const destinations = [
    {
      region: "Asia",
      places: ["Japan", "Nepal", "Bhutan"],
    },
    {
      region: "Europe",
      places: ["Austria", "Germany", "Switzerland"],
    },
    {
      region: "Future Missions",
      places: ["Unknown Territories", "New Discoveries"],
    },
  ];

  return (
    <section
      id="destination"
      className="bg-slate-950 px-6 py-20 text-white md:py-28"
    >
      <motion.div
        className="mx-auto max-w-5xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Destination Tracker
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
          Planned destinations and future discoveries waiting to become part of
          the PLANET 2029 journey.
        </p>


        <div className="mt-10 grid gap-6 md:grid-cols-3">

          {destinations.map((destination, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >

              <h3 className="text-xl font-bold text-yellow-400">
                {destination.region}
              </h3>


              <ul className="mt-5 space-y-3 text-slate-300">

                {destination.places.map((place, i) => (
                  <li key={i}>
                    <span className="text-yellow-400">•</span> {place}
                  </li>
                ))}

              </ul>

            </motion.div>
          ))}

        </div>

      </motion.div>
    </section>
  );
}