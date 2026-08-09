"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-16">
      <motion.div
        className="mx-auto max-w-6xl text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Logo */}

        <h2 className="text-xl font-bold tracking-[0.3em]">
          Cyrilpsomy
        </h2>

        <p className="mt-3 text-sm text-slate-500">
          Personal Journey • Stories • Adventures
        </p>

        {/* Divider */}

        <div className="mx-auto mt-8 h-px w-16 bg-yellow-400/50" />

        {/* Navigation */}

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <a
            href="/"
            className="transition hover:text-yellow-400"
          >
            Home
          </a>

          <a
            href="/#about"
            className="transition hover:text-yellow-400"
          >
            About Me
          </a>

          <a
            href="/planet-2029"
            className="transition hover:text-yellow-400"
          >
            PLANET 2029
          </a>

          <a
            href="/planet-2029#gallery"
            className="transition hover:text-yellow-400"
          >
            Gallery
          </a>

          <a
            href="/planet-2029#journal"
            className="transition hover:text-yellow-400"
          >
            Journal
          </a>
        </div>

        {/* Copyright */}

        <p className="mt-10 text-xs text-white/30">
          © {new Date().getFullYear()} Cyrilpsomy. All rights reserved.
        </p>

        <p className="mt-3 text-xs uppercase tracking-[0.25em] text-white/20">
          Explore • Dream • Discover
        </p>
      </motion.div>
    </footer>
  );
}