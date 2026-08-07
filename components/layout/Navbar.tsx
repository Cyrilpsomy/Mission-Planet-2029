"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Mission", id: "mission" },
  { label: "Journey", id: "journey" },
  { label: "Gallery", id: "gallery" },
  { label: "About", id: "about" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setOpen(false);

    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7 }}
        className="mx-4 mt-4 rounded-2xl border border-white/10 bg-black/30 px-5 py-4 backdrop-blur-md md:mx-6"
      >

        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div className="text-3xl">
              🌍
            </div>

            <div>
              <h1 className="text-lg font-bold tracking-widest md:text-xl">
                PLANET 2029
              </h1>

              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 md:text-xs">
                Explore • Dream • Discover
              </p>
            </div>

          </div>


          {/* Desktop Menu */}
          <ul className="hidden gap-8 text-gray-300 md:flex">

            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer transition hover:text-yellow-400"
              >
                {item.label}
              </li>
            ))}

          </ul>


          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="text-3xl text-white md:hidden"
          >
            ☰
          </button>

        </div>


        {/* Mobile Menu */}
        {open && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-5 space-y-4 border-t border-white/10 pt-5 text-center text-gray-300 md:hidden"
          >

            {navItems.map((item) => (
              <li
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="cursor-pointer transition hover:text-yellow-400"
              >
                {item.label}
              </li>
            ))}

          </motion.ul>
        )}

      </motion.nav>
    </header>
  );
}