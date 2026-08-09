"use client";

import { motion } from "framer-motion";

const destinations = [
  {
    country: "Norway",
    region: "Europe",
    status: "Dream",
    detail: "Northern lights • Fjords • Arctic landscapes",
    symbol: "🇳🇴",
  },
  {
    country: "Japan",
    region: "Asia",
    status: "Dream",
    detail: "Culture • Tradition • Modern innovation",
    symbol: "🇯🇵",
  },
  {
    country: "Switzerland",
    region: "Europe",
    status: "Dream",
    detail: "Alps • Lakes • Scenic journeys",
    symbol: "🇨🇭",
  },
  {
    country: "Germany",
    region: "Europe",
    status: "Planned",
    detail: "History • Cities • Culture • Architecture",
    symbol: "🇩🇪",
  },
  {
    country: "Austria",
    region: "Europe",
    status: "Planned",
    detail: "Alps • Lakes • Villages • Classical heritage",
    symbol: "🇦🇹",
  },
  {
    country: "Bhutan",
    region: "Asia",
    status: "Dream",
    detail: "Himalayas • Monasteries • Peaceful landscapes",
    symbol: "🇧🇹",
  },
];

const statusStyles: Record<string, string> = {
  Planned:
    "border-yellow-400/30 bg-yellow-400/10 text-yellow-300",
  Dream:
    "border-purple-400/30 bg-purple-400/10 text-purple-300",
  Visited:
    "border-green-400/30 bg-green-400/10 text-green-300",
};

export default function WorldExplorerMap() {
  return (
    <section
      id="explorer"
      className="px-6 py-24 scroll-mt-24"
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
          backdrop-blur-md
          md:p-10
        "
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-yellow-400">
            Explore The Possibilities
          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            World Explorer
          </h2>

          <div className="mx-auto mt-6 h-px w-20 bg-yellow-400" />

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            A collection of destinations that could become future chapters
            of the CYRILPSOMY journey and PLANET 2029 mission.
          </p>
        </div>

        {/* Explorer Display */}
        <motion.div
          className="
            relative
            mt-12
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-slate-950
            p-6
            md:p-10
          "
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Background Grid */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-20
              bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
              bg-[size:40px_40px]
            "
          />

          {/* Globe */}
          <div className="relative flex min-h-[260px] items-center justify-center md:min-h-[320px]">
            <motion.div
              className="
                flex
                h-40
                w-40
                items-center
                justify-center
                rounded-full
                border
                border-yellow-400/20
                bg-slate-900
                text-7xl
                shadow-[0_0_80px_rgba(250,204,21,0.08)]
                md:h-52
                md:w-52
                md:text-8xl
              "
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🌍
            </motion.div>

            {/* Explorer Rings */}
            <div className="absolute h-56 w-56 rounded-full border border-white/5 md:h-72 md:w-72" />

            <div className="absolute h-72 w-72 rounded-full border border-white/5 md:h-96 md:w-96" />
          </div>

          <div className="relative text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
              The world is waiting
            </p>

            <p className="mt-3 text-sm text-slate-400">
              Every destination begins as an idea.
            </p>
          </div>
        </motion.div>

        {/* Destination Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((place, index) => (
            <motion.div
              key={place.country}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="
                rounded-2xl
                border
                border-white/10
                bg-slate-900/80
                p-5
                transition
                hover:border-yellow-400/20
                md:p-6
              "
            >
              {/* Country Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">
                    {place.symbol}
                  </span>

                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {place.country}
                    </h3>

                    <p className="mt-1 text-xs uppercase tracking-wider text-slate-500">
                      {place.region}
                    </p>
                  </div>
                </div>

                {/* Status */}
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
                    ${statusStyles[place.status]}
                  `}
                >
                  {place.status}
                </span>
              </div>

              {/* Details */}
              <p className="mt-5 leading-7 text-slate-300">
                {place.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {["Planned", "Dream", "Visited"].map((status) => (
            <span
              key={status}
              className={`
                rounded-full
                border
                px-4
                py-1.5
                text-xs
                ${statusStyles[status]}
              `}
            >
              {status}
            </span>
          ))}
        </div>

        {/* Closing */}
        <p className="mt-10 text-center text-sm uppercase tracking-[0.3em] text-white/30">
          Destination list subject to change
        </p>
      </motion.div>
    </section>
  );
}