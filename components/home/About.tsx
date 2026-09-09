"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = Array.from({ length: 16 }, (_, index) => ({
  src: `/about/cyril-${String(index + 1).padStart(2, "0")}.jpg`,
  alt: `Cyril — personal moment ${index + 1}`,
}));

export default function About() {
  return (
    <div className="mx-auto max-w-7xl">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-xs uppercase tracking-[0.5em] text-[#A3FF12]">
          About Me
        </p>

        <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-5xl font-bold tracking-tight sm:text-6xl md:text-8xl">
              This is me.
            </h2>

            <div className="mt-7 h-px w-20 bg-[#A3FF12]" />
          </div>

          <p className="max-w-md text-sm leading-7 text-white/40 md:text-right">
            Not just a collection of photographs, but moments that became
            memories and experiences that became part of my story.
          </p>
        </div>
      </motion.div>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-16 grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-end"
      >
        <div>
          <p className="text-2xl font-medium leading-relaxed text-white md:text-3xl">
            I am Cyril.
          </p>

          <p className="mt-5 max-w-xl text-sm leading-8 text-white/40 md:text-base">
            A person figuring things out one chapter at a time. I believe
            life is made up of experiences, people, places and moments that
            slowly shape who we become.
          </p>
        </div>

        <div className="md:text-right">
          <p className="text-xs uppercase tracking-[0.35em] text-white/25">
            My Philosophy
          </p>

          <p className="mt-4 text-xl italic text-[#A3FF12] md:text-2xl">
            “Everything in life happens for a reason.”
          </p>
        </div>
      </motion.div>

      {/* Photo Gallery */}
      <div className="mt-20">
        <div className="mb-8 flex items-center justify-between border-b border-white/10 pb-5">
          <p className="text-xs uppercase tracking-[0.35em] text-white/30">
            Moments
          </p>

          <p className="text-xs tracking-[0.25em] text-[#A3FF12]">
            16 PHOTOGRAPHS
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {photos.map((photo, index) => {
            /*
             * Give selected photos larger visual weight.
             * 01, 06, 11 and 16 become featured images.
             */
            const featured =
              index === 0 ||
              index === 5 ||
              index === 10 ||
              index === 15;

            return (
              <motion.div
                key={photo.src}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: (index % 4) * 0.08,
                }}
                viewport={{
                  once: true,
                  margin: "-50px",
                }}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] ${
                  featured
                    ? "col-span-2 row-span-2 min-h-[420px] md:min-h-[520px]"
                    : "min-h-[210px] md:min-h-[260px]"
                }`}
              >
                {/* Green glow */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-[#A3FF12]/0 transition-all duration-700 group-hover:bg-[#A3FF12]/[0.035]" />

                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes={
                    featured
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 z-10 h-1/3 bg-gradient-to-t from-black/50 to-transparent opacity-60" />

                {/* Number */}
                <div className="absolute bottom-4 left-4 z-20">
                  <span className="text-[10px] tracking-[0.3em] text-white/50">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 z-20 rounded-2xl border border-transparent transition-all duration-500 group-hover:border-[#A3FF12]/40" />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Closing statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="mx-auto mt-24 max-w-3xl text-center"
      >
        <div className="mx-auto h-px w-16 bg-[#A3FF12]" />

        <p className="mt-8 text-2xl font-medium leading-relaxed md:text-4xl">
          “Life is not about having everything figured out.
          <span className="text-white/30">
            {" "}
            It is about experiencing it while you are here.”
          </span>
        </p>

        <p className="mt-7 text-xs uppercase tracking-[0.4em] text-white/25">
          Cyrilpsomy
        </p>
      </motion.div>
    </div>
  );
}