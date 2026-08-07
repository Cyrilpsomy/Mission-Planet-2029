"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const memories = [
  {
    title: "Mission Begins",
    description: "07 August 2026 - The first chapter of PLANET 2029",
    image: "/gallery/mission.jpg",
  },
  {
    title: "Norway Dream",
    description: "The land of fjords and northern lights awaits.",
    image: "/gallery/norway.jpg",
  },
  {
    title: "World Explorer",
    description: "Collecting stories from around the planet.",
    image: "/gallery/explorer.jpg",
  },
  {
    title: "Future Destination",
    description: "New places. New cultures. New experiences.",
    image: "/gallery/future.jpg",
  },
];

export default function MissionGallery() {
  return (
    <section
      id="gallery"
      className="bg-slate-950 px-6 py-20 text-white md:py-28"
    >
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Mission Gallery
        </h2>


        <p className="mb-10 mt-4 text-center text-slate-400 md:mb-12">
          Moments that inspire the journey.
        </p>


        <div className="grid gap-6 md:grid-cols-2 md:gap-8">

          {memories.map((memory) => (
            <motion.div
              key={memory.title}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="
                group
                relative
                h-[280px]
                overflow-hidden
                rounded-3xl
                md:h-80
              "
            >

              <Image
                src={memory.image}
                alt={memory.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />


              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />


              <div className="absolute bottom-0 p-5 md:p-8">

                <h3 className="text-2xl font-bold text-white md:text-3xl">
                  {memory.title}
                </h3>


                <p className="mt-2 text-sm text-slate-200 md:mt-3 md:text-base">
                  {memory.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </motion.div>
    </section>
  );
}