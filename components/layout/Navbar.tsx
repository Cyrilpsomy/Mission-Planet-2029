"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = [
    {
      name: "Home",
      href: "/#home",
    },
    {
      name: "About",
      href: "/#about",
    },
    {
      name: "Cineliebe",
      href: "/cineliebe",
    },
  ];

  return (
    <>
      {/* =====================================================
          DESKTOP NAVBAR
      ===================================================== */}

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className={`fixed left-0 top-0 z-50 hidden w-full transition-all duration-500 md:block ${
          scrolled
            ? "border-b border-white/10 bg-black/90 backdrop-blur-xl"
            : "bg-black/20 backdrop-blur-md"
        }`}
      >
        <div className="flex h-24 w-full items-center justify-between px-8 lg:px-12">

          {/* ================= LOGO ================= */}

          <motion.a
            href="/"
            whileHover={{ scale: 1.02 }}
            className="group flex-shrink-0"
          >
            <span className="text-2xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-[#A3FF12]">
              Cyrilpsomy
            </span>
          </motion.a>

          {/* ================= RIGHT SIDE ================= */}

          <div className="flex items-center gap-8">

            {/* Navigation Links */}

            <div className="flex items-center gap-8">
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  whileHover={{ y: -2 }}
                  className="group relative py-2 text-sm font-medium text-white/60 transition-colors duration-300 hover:text-white"
                >
                  {link.name}

                  <span className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-[#A3FF12] transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}
            </div>

            {/* ================= PLANET 2029 ================= */}

            <motion.a
              href="/planet-2029"
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group flex items-center gap-4 rounded-full border border-[#A3FF12]/40 bg-[#A3FF12]/5 py-2 pl-5 pr-2 transition-all duration-300 hover:border-[#A3FF12] hover:bg-[#A3FF12]/10"
            >
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[#A3FF12]">
                PLANET 2029
              </span>

              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#A3FF12] text-sm font-bold text-black transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </motion.a>
          </div>
        </div>

        {/* ================= BOTTOM ACCENT ================= */}

        <div
          className={`h-px bg-gradient-to-r from-transparent via-[#A3FF12]/40 to-transparent transition-opacity duration-500 ${
            scrolled ? "opacity-100" : "opacity-40"
          }`}
        />
      </motion.nav>

      {/* =====================================================
          MOBILE NAVBAR
      ===================================================== */}

      <motion.nav
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className={`fixed left-0 top-0 z-50 w-full md:hidden ${
          scrolled
            ? "border-b border-white/10 bg-black/95 backdrop-blur-xl"
            : "bg-black/30 backdrop-blur-md"
        }`}
      >
        <div className="flex h-20 items-center justify-between px-6">

          {/* Mobile Logo */}

          <motion.a
            href="/"
            whileTap={{ scale: 0.97 }}
            className="text-xl font-semibold tracking-tight text-white"
          >
            Cyrilpsomy
          </motion.a>

          {/* Mobile Menu Button */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="relative flex h-11 w-11 items-center justify-center"
          >
            <div className="relative h-5 w-6">

              <span
                className={`absolute left-0 h-px w-6 bg-[#A3FF12] transition-all duration-300 ${
                  menuOpen
                    ? "top-2.5 rotate-45"
                    : "top-0"
                }`}
              />

              <span
                className={`absolute left-0 top-2.5 h-px w-4 bg-white transition-all duration-300 ${
                  menuOpen
                    ? "opacity-0"
                    : "opacity-100"
                }`}
              />

              <span
                className={`absolute left-0 h-px w-6 bg-[#A3FF12] transition-all duration-300 ${
                  menuOpen
                    ? "top-2.5 -rotate-45"
                    : "top-5"
                }`}
              />

            </div>
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="overflow-hidden border-t border-white/10 bg-black/95"
            >
              <div className="px-6 pb-8 pt-5">

                {/* Mobile Links */}

                <div className="space-y-1">
                  {links.map((link, index) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      initial={{
                        opacity: 0,
                        x: -15,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      className="flex items-center justify-between border-b border-white/5 py-5 text-lg text-white/70 transition-colors hover:text-[#A3FF12]"
                    >
                      <span>{link.name}</span>

                      <span className="text-[#A3FF12]">
                        →
                      </span>
                    </motion.a>
                  ))}
                </div>

                {/* Mobile PLANET 2029 */}

                <motion.a
                  href="/planet-2029"
                  onClick={() => setMenuOpen(false)}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.25,
                  }}
                  className="mt-6 flex items-center justify-between rounded-2xl bg-[#A3FF12] px-5 py-4 text-black"
                >
                  <span className="text-sm font-bold tracking-wide">
                    PLANET 2029
                  </span>

                  <span className="text-lg font-bold">
                    →
                  </span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Accent */}

        <div className="h-px bg-gradient-to-r from-transparent via-[#A3FF12]/40 to-transparent" />
      </motion.nav>
    </>
  );
}