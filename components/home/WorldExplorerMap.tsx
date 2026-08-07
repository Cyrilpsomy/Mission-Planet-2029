"use client";

import { motion } from "framer-motion";

export default function WorldExplorerMap() {
  const destinations = [
    {
      country: "Austria",
      detail: "Northern lights • Fjords • Arctic landscapes",
    },
    {
      country: "Japan",
      detail: "Culture • Tradition • Modern innovation",
    },
    {
      country: "Switzerland",
      detail: "Alps • Lakes • Scenic journeys",
    },
  ];

  return (
    <section
      id="explorer"
      className="bg-slate-950 px-6 py-20 text-white md:py-28"
    >

      <motion.div
        className="
          mx-auto
          max-w-6xl
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-6
          backdrop-blur
          md:p-10
        "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2 className="text-center text-3xl font-bold md:text-5xl">
          World Explorer
        </h2>


        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-300">
          A collection of places waiting to become memories.
          Every destination represents a new chapter of PLANET 2029.
        </p>


        {/* Map Placeholder */}
        <div
          className="
            mt-10
            flex
            h-56
            items-center
            justify-center
            rounded-3xl
            bg-slate-900
            md:mt-12
            md:h-72
          "
        >

          <p className="px-4 text-center text-lg text-slate-400 md:text-xl">
            🌍 World Map Illustration Coming Soon
          </p>

        </div>


        {/* Destination Cards */}
        <div className="mt-8 grid gap-5 md:mt-10 md:grid-cols-3">

          {destinations.map((place, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-slate-900
                p-5
                md:p-6
              "
            >

              <h3 className="text-xl font-semibold text-yellow-400 md:text-2xl">
                {place.country}
              </h3>


              <p className="mt-3 leading-7 text-slate-300">
                {place.detail}
              </p>

            </motion.div>

          ))}

        </div>


      </motion.div>

    </section>
  );
}