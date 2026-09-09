"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

/* =========================================================
   PERSONAL ARCHIVE PHOTOS
========================================================= */

const photos = [
  "cyril-01.png",
  "cyril-02.jpg",
  "cyril-03.jpg",
  "cyril-04.jpg",
  "cyril-05.jpg",
  "cyril-06.jpg",
  "cyril-07.jpg",
  "cyril-08.png",
  "cyril-09.png",
  "cyril-10.JPG",
  "cyril-11.jpg",
  "cyril-12.JPG",
  "cyril-13.png",
  "cyril-14.jpg",
  "cyril-15.jpg",
  "cyril-16.jpg",
];

/* =========================================================
   PERSONAL ARCHIVE PHOTO POSITIONS
========================================================= */

const photoPositions = [
  "left-[2%] top-[35px] rotate-[-7deg]",
  "left-[14%] top-[15px] rotate-[5deg]",
  "left-[26%] top-[45px] rotate-[-4deg]",
  "left-[38%] top-[10px] rotate-[6deg]",
  "left-[51%] top-[40px] rotate-[-5deg]",
  "left-[64%] top-[20px] rotate-[7deg]",
  "left-[77%] top-[50px] rotate-[-4deg]",

  "left-[8%] top-[165px] rotate-[4deg]",
  "left-[21%] top-[185px] rotate-[-6deg]",
  "left-[34%] top-[160px] rotate-[3deg]",
  "left-[48%] top-[180px] rotate-[-5deg]",
  "left-[61%] top-[155px] rotate-[6deg]",
  "left-[74%] top-[190px] rotate-[-3deg]",

  "left-[17%] top-[295px] rotate-[-4deg]",
  "left-[34%] top-[285px] rotate-[5deg]",
  "left-[55%] top-[290px] rotate-[-5deg]",
];

/* =========================================================
   PLACES
========================================================= */

const places = [
  {
    name: "Hometown",
    location: "Where the journey began",
    folder: "hometown",
    photos: [
      {
        file: "hometown-01.jpg",
        caption: "Hometown",
      },
      {
        file: "hometown-02.jpg",
        caption: "Hometown",
      },
      {
        file: "hometown-03.jpg",
        caption: "Hometown",
      },
      {
        file: "hometown-04.jpg",
        caption: "Hometown",
      },
    ],
  },
  {
    name: "Palakkad",
    location: "Kerala, India",
    folder: "palakkad",
    photos: [
      {
        file: "palakkad-01.jpg",
        caption: "Kollengode",
      },
      {
        file: "palakkad-02.jpg",
        caption: "Kollengode",
      },
      {
        file: "palakkad-03.jpg",
        caption: "Mudapallur",
      },
    ],
  },
];

/* =========================================================
   LIGHTBOX TYPE
========================================================= */

type SelectedPhoto = {
  src: string;
  place: string;
  caption: string;
  index: number;
  total: number;
};

/* =========================================================
   PAGE
========================================================= */

export default function AboutPage() {
  const [selectedPhoto, setSelectedPhoto] =
    useState<SelectedPhoto | null>(null);

  /* =======================================================
     OPEN PHOTO
  ======================================================= */

  const openPhoto = (
    src: string,
    place: string,
    caption: string,
    index: number,
    total: number
  ) => {
    setSelectedPhoto({
      src,
      place,
      caption,
      index,
      total,
    });
  };

  /* =======================================================
     CLOSE PHOTO
  ======================================================= */

  const closePhoto = () => {
    setSelectedPhoto(null);
  };

  /* =======================================================
     NEXT PHOTO
  ======================================================= */

  const nextPhoto = () => {
    if (!selectedPhoto) return;

    const currentPlace = places.find(
      (place) => place.name === selectedPhoto.place
    );

    if (!currentPlace) return;

    const nextIndex =
      (selectedPhoto.index + 1) %
      currentPlace.photos.length;

    const nextImage =
      currentPlace.photos[nextIndex];

    setSelectedPhoto({
      src: `/places/${currentPlace.folder}/${nextImage.file}`,
      place: currentPlace.name,
      caption: nextImage.caption,
      index: nextIndex,
      total: currentPlace.photos.length,
    });
  };

  /* =======================================================
     PREVIOUS PHOTO
  ======================================================= */

  const previousPhoto = () => {
    if (!selectedPhoto) return;

    const currentPlace = places.find(
      (place) => place.name === selectedPhoto.place
    );

    if (!currentPlace) return;

    const previousIndex =
      (selectedPhoto.index -
        1 +
        currentPlace.photos.length) %
      currentPlace.photos.length;

    const previousImage =
      currentPlace.photos[previousIndex];

    setSelectedPhoto({
      src: `/places/${currentPlace.folder}/${previousImage.file}`,
      place: currentPlace.name,
      caption: previousImage.caption,
      index: previousIndex,
      total: currentPlace.photos.length,
    });
  };

  /* =======================================================
     KEYBOARD CONTROLS
  ======================================================= */

  useEffect(() => {
    if (!selectedPhoto) return;

    const handleKeyDown = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        closePhoto();
      }

      if (event.key === "ArrowRight") {
        nextPhoto();
      }

      if (event.key === "ArrowLeft") {
        previousPhoto();
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, [selectedPhoto]);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-black text-white">

      {/* =====================================================
          FIXED BACKGROUND
      ===================================================== */}

      <div className="fixed inset-0 z-0">

        <Image
          src="/about/cyril-01.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_15%]"
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.35)_45%,rgba(0,0,0,0.92)_100%)]" />

        <motion.div
          className="absolute left-[45%] top-[40%] h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A3FF12]/10 blur-[180px]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.12, 0.25, 0.12],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

      </div>

      <div className="relative z-10">

        <Navbar />

        {/* ===================================================
            HERO
        =================================================== */}

        <section className="relative flex min-h-[90vh] items-center px-6">

          <div className="mx-auto w-full max-w-6xl">

            <motion.div
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
              }}
              className="max-w-2xl"
            >

              <p className="text-[10px] font-medium uppercase tracking-[0.55em] text-[#A3FF12] sm:text-xs">
                About Me
              </p>

              <h1 className="mt-5 text-6xl font-bold tracking-[-0.04em] sm:text-7xl md:text-8xl lg:text-[9rem]">
                Cyril
              </h1>

              <div className="mt-7 h-[2px] w-14 bg-[#A3FF12] sm:w-20" />

              <p className="mt-7 max-w-xl text-sm leading-7 text-white/60 sm:text-base md:text-lg">
                Someone who feels deeply, loves genuinely, and
                values meaningful connections—turning life&apos;s
                experiences into growth, creativity, and a journey
                of becoming.
              </p>

            </motion.div>

          </div>

          {/* SCROLL */}

          <motion.div
            className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.4,
              duration: 1,
            }}
          >

            <span className="text-[8px] uppercase tracking-[0.5em] text-white/50">
              Scroll
            </span>

            <motion.div
              className="mt-3 h-9 w-px bg-[#A3FF12]"
              animate={{
                scaleY: [0.3, 1, 0.3],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

          </motion.div>

        </section>

        {/* ===================================================
            WHO I AM
        =================================================== */}

        <section
          id="about"
          className="border-y border-white/10 bg-black/45 px-6 py-20 sm:py-24 md:py-32"
        >

          <div className="mx-auto max-w-6xl">

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="grid items-center gap-12 md:grid-cols-[1fr_1.25fr] md:gap-24"
            >

              {/* LEFT */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                viewport={{
                  once: true,
                }}
                className="text-left"
              >

                <p className="text-4xl font-medium uppercase tracking-[0.12em] text-[#A3FF12] sm:text-6xl md:text-7xl lg:text-8xl">
                  Who I Am
                </p>

                <h2 className="mt-4 text-xl font-semibold tracking-tight text-white/75 sm:text-3xl md:text-4xl">
                  Cyril P Somy
                </h2>

                <div className="mt-6 h-[2px] w-16 bg-[#A3FF12] md:w-20" />

              </motion.div>

              {/* RIGHT */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: 35,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                }}
                viewport={{
                  once: true,
                }}
                className="text-left"
              >

                <p className="max-w-2xl text-sm leading-7 text-white/55 sm:text-base md:text-lg md:leading-9">
                  Hi, I&apos;m Cyril P Somy, based in Kerala, India.
                  My background is in healthcare, with a degree in
                  nursing and hands-on clinical experience. Alongside
                  patient care, I&apos;m driven by a strong curiosity
                  about how things work, from everyday technology and
                  design to cinema, travel, and the universe around us.
                  I enjoy learning, exploring new ideas, understanding
                  technology, and turning my interests into meaningful
                  projects.{" "}
                  <span className="text-white/85">
                    Curiosity keeps me moving, always learning and
                    always moving forward.
                  </span>
                </p>

              </motion.div>

            </motion.div>

          </div>

        </section>

        {/* ===================================================
            MY PHILOSOPHY
        =================================================== */}

        <section className="relative overflow-hidden border-b border-white/10 bg-black/35 px-6 py-20 sm:py-24 md:py-28">

          <motion.div
            className="pointer-events-none absolute left-[-150px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-[#A3FF12]/5 blur-[150px]"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 mx-auto max-w-5xl">

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              className="text-center"
            >

              <p className="text-[10px] uppercase tracking-[0.6em] text-[#A3FF12] sm:text-xs">
                My Philosophy
              </p>

              <div className="mx-auto mt-6 h-[2px] w-12 bg-[#A3FF12]" />

              <h2 className="mt-9 text-3xl font-medium leading-tight tracking-tight text-white/90 sm:text-4xl md:text-5xl lg:text-6xl">
                &ldquo;Everything in life happens
                <br className="hidden sm:block" />
                {" "}for a reason.&rdquo;
              </h2>

              <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/35 md:text-base">
                Some moments make sense immediately. Others take
                time. I believe every experience has something to
                teach, shape, or lead us toward.
              </p>

            </motion.div>

          </div>

        </section>

        {/* ===================================================
            PERSONAL ARCHIVE
        =================================================== */}

        <section className="relative overflow-hidden bg-black/35 px-6 py-24 sm:py-28 md:py-32">

          <div className="mx-auto max-w-6xl">

            <div className="grid items-center gap-14 md:grid-cols-[0.8fr_1.2fr] md:gap-16">

              {/* TEXT */}

              <motion.div
                initial={{
                  opacity: 0,
                  x: -30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                }}
                viewport={{
                  once: true,
                }}
              >

                <p className="text-[10px] uppercase tracking-[0.55em] text-[#A3FF12] sm:text-xs">
                  Personal Archive
                </p>

                <h2 className="mt-5 text-5xl font-bold tracking-tight sm:text-6xl">
                  Moments
                </h2>

                <div className="mt-6 h-[2px] w-14 bg-[#A3FF12]" />

                <p className="mt-7 max-w-sm text-sm leading-7 text-white/45 md:text-base">
                  A curated series of portraits tracing my personal
                  journey, preserving the subtle shifts, emotions,
                  and growth that defined each season of my life.
                </p>

              </motion.div>

              {/* PHOTO STACK */}

              <div className="relative mx-auto h-[430px] w-full max-w-[650px] sm:h-[470px]">

                {photos.map((photo, index) => (

                  <motion.div
                    key={photo}
                    className={`absolute ${photoPositions[index]}`}
                    initial={{
                      opacity: 0,
                      scale: 0.6,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.04,
                    }}
                    viewport={{
                      once: true,
                    }}
                    style={{
                      zIndex: index + 1,
                    }}
                  >

                    <motion.div
                      className="group relative"
                      whileHover={{
                        scale: 1.35,
                        rotate: 0,
                        zIndex: 100,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeOut",
                      }}
                    >

                      <div className="relative h-[105px] w-[80px] overflow-hidden border border-white/25 bg-[#080808] p-1 shadow-2xl transition duration-300 group-hover:border-[#A3FF12]/70 group-hover:shadow-[0_0_40px_rgba(163,255,18,0.18)] sm:h-[140px] sm:w-[108px]">

                        <div className="relative h-full w-full overflow-hidden">

                          <Image
                            src={`/about/${photo}`}
                            alt={`Cyril moment ${index + 1}`}
                            fill
                            sizes="400px"
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />

                        </div>

                        <span className="absolute bottom-1 left-2 text-[7px] uppercase tracking-[0.25em] text-white/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div className="absolute inset-0 border border-transparent transition duration-300 group-hover:border-[#A3FF12]/70" />

                      </div>

                    </motion.div>

                  </motion.div>

                ))}

              </div>

            </div>

            <motion.p
              className="mt-3 text-center text-[8px] uppercase tracking-[0.5em] text-white/25"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                delay: 1,
              }}
              viewport={{
                once: true,
              }}
            >
              A glimpse into the archive
            </motion.p>

          </div>

        </section>

        {/* ===================================================
            PLACES I'VE BEEN
        =================================================== */}

        <section className="relative overflow-hidden border-y border-white/10 bg-black/55 px-6 py-24 sm:py-28 md:py-36">

          <motion.div
            className="pointer-events-none absolute right-[-180px] top-[20%] h-[550px] w-[550px] rounded-full bg-[#A3FF12]/5 blur-[180px]"
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.1, 0.22, 0.1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative z-10 mx-auto max-w-7xl">

            {/* HEADER */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              className="mb-14 sm:mb-20"
            >

              <p className="text-[10px] uppercase tracking-[0.55em] text-[#A3FF12] sm:text-xs">
                Through My Lens
              </p>

              <div className="mt-5 flex flex-col justify-between gap-7 md:flex-row md:items-end">

                <div>

                  <h2 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                    Places I&apos;ve Been
                  </h2>

                  <div className="mt-6 h-[2px] w-14 bg-[#A3FF12]" />

                </div>

                <p className="max-w-md text-sm leading-7 text-white/40 md:text-right">
                  Places I have visited and photographs I have
                  captured along the way.
                </p>

              </div>

            </motion.div>

            {/* PLACES */}

            <div className="space-y-20 sm:space-y-28">

              {places.map((place, placeIndex) => (

                <motion.div
                  key={place.name}
                  initial={{
                    opacity: 0,
                    y: 45,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.8,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                >

                  {/* PLACE TITLE */}

                  <div className="mb-8 flex items-end justify-between border-b border-white/10 pb-5">

                    <div>

                      <div className="flex items-center gap-4">

                        <span className="font-mono text-[9px] tracking-[0.3em] text-[#A3FF12]">
                          {String(placeIndex + 1).padStart(2, "0")}
                        </span>

                        <div className="h-px w-9 bg-[#A3FF12]/50" />

                      </div>

                      <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
                        {place.name}
                      </h3>

                      <p className="mt-2 text-[9px] uppercase tracking-[0.4em] text-white/35">
                        {place.location}
                      </p>

                    </div>

                    <span className="hidden text-[8px] uppercase tracking-[0.4em] text-white/20 sm:block">
                      {place.photos.length} Frames
                    </span>

                  </div>

                  {/* PHOTOS */}

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

                    {place.photos.map(
                      (photo, photoIndex) => {

                        const imagePath =
                          `/places/${place.folder}/${photo.file}`;

                        return (

                          <motion.button
                            key={photo.file}
                            type="button"
                            onClick={() =>
                              openPhoto(
                                imagePath,
                                place.name,
                                photo.caption,
                                photoIndex,
                                place.photos.length
                              )
                            }
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
                              delay: photoIndex * 0.08,
                            }}
                            viewport={{
                              once: true,
                              amount: 0.1,
                            }}
                            className="group relative block w-full cursor-zoom-in text-left focus:outline-none"
                          >

                            <div className="relative aspect-[4/3] w-full overflow-hidden border border-white/10 bg-black transition duration-500 group-hover:border-[#A3FF12]/60 group-hover:shadow-[0_0_45px_rgba(163,255,18,0.12)]">

                              <Image
                                src={imagePath}
                                alt={`${photo.caption} - photograph ${photoIndex + 1}`}
                                fill
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                              />

                              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />

                              {/* ZOOM */}

                              <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/30 opacity-0 backdrop-blur-sm transition duration-300 group-hover:opacity-100">

                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="h-4 w-4 text-white"
                                >

                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m21 21-4.35-4.35m0 0A7.5 7.5 0 1 0 6.04 6.04a7.5 7.5 0 0 0 10.61 10.61ZM10.5 8v5m-2.5-2.5h5"
                                  />

                                </svg>

                              </div>

                              {/* NUMBER */}

                              <div className="absolute bottom-4 left-4">

                                <span className="font-mono text-[9px] tracking-[0.3em] text-white/70">
                                  {String(photoIndex + 1).padStart(2, "0")}
                                </span>

                              </div>

                            </div>

                            {/* CAPTION */}

                            <div className="mt-4 flex items-center justify-between">

                              <div className="flex items-center gap-3">

                                <div className="h-px w-6 bg-[#A3FF12] transition-all duration-500 group-hover:w-10" />

                                <span className="text-[8px] uppercase tracking-[0.35em] text-white/40 transition-colors duration-300 group-hover:text-[#A3FF12]">
                                  {photo.caption}
                                </span>

                              </div>

                              <span className="text-[8px] uppercase tracking-[0.3em] text-white/20">
                                View
                              </span>

                            </div>

                          </motion.button>

                        );
                      }
                    )}

                  </div>

                </motion.div>

              ))}

            </div>

            {/* FOOTNOTE */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              className="mt-20 border-t border-white/10 pt-6 sm:mt-24"
            >

              <div className="flex flex-col justify-between gap-3 sm:flex-row">

                <p className="text-[8px] uppercase tracking-[0.4em] text-white/20">
                  Personal Travel Archive
                </p>

                <p className="text-[8px] uppercase tracking-[0.4em] text-white/20">
                  More places to come
                </p>

              </div>

            </motion.div>

          </div>

        </section>

        {/* ===================================================
            CINELIEBE
        =================================================== */}

        <section className="relative overflow-hidden border-y border-white/10 bg-black/50 px-6 py-20 sm:py-24 md:py-32">

          <motion.div
            className="pointer-events-none absolute right-[-100px] top-1/2 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#A3FF12]/5 blur-[130px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="mx-auto max-w-6xl">

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              viewport={{
                once: true,
              }}
              className="max-w-xl"
            >

              <p className="text-[10px] uppercase tracking-[0.55em] text-[#A3FF12] sm:text-xs">
                The Cinema In Me
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
                CINELIEBE
              </h2>

              <div className="mt-6 h-[2px] w-14 bg-[#A3FF12]" />

              <p className="mt-7 max-w-lg text-sm leading-7 text-white/50 md:text-base">
                A space for the films, stories and moments that
                move me. Because sometimes, life feels a little more
                real through a different lens.
              </p>

              <div className="mt-8">

                <a
                  href="/cineliebe"
                  className="group inline-flex items-center gap-4 border border-[#A3FF12]/60 px-5 py-3 text-[9px] uppercase tracking-[0.3em] text-[#A3FF12] transition duration-300 hover:bg-[#A3FF12] hover:text-black"
                >
                  Explore Cineliebe

                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </a>

              </div>

            </motion.div>

          </div>

        </section>

        {/* ===================================================
            CLOSING
        =================================================== */}

        <section className="relative overflow-hidden bg-black/40 px-6 py-28 text-center sm:py-32 md:py-40">

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
            }}
            viewport={{
              once: true,
            }}
            className="mx-auto max-w-4xl"
          >

            <p className="text-[10px] uppercase tracking-[0.55em] text-[#A3FF12] sm:text-xs">
              CYRILPSOMY
            </p>

            <h2 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">

              The story is still

              <br />

              <span className="text-white/35">
                being written.
              </span>

            </h2>

            <div className="mx-auto mt-8 h-[2px] w-14 bg-[#A3FF12]" />

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/40">
              There are places yet to see, experiences yet to live
              and memories yet to create.
            </p>

          </motion.div>

        </section>

        {/* ===================================================
            WHY I CREATED THIS
            VERY LAST CONTENT BEFORE FOOTER
        =================================================== */}

        <section className="border-b border-white/5 bg-black/30 px-6 py-10 sm:py-12">

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            transition={{
              duration: 1.2,
            }}
            viewport={{
              once: true,
            }}
            className="mx-auto max-w-2xl text-center"
          >

            <p className="text-[6px] uppercase tracking-[0.45em] text-white/20 sm:text-[7px]">
              Why I Created This
            </p>

            <p className="mx-auto mt-3 max-w-lg text-[8px] leading-5 text-white/20 sm:text-[9px]">
              This website is an effort to bring back what was once
              lost, built with hope, memories, and the lessons life
              left behind.
            </p>

          </motion.div>

        </section>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <Footer />

      </div>

      {/* =====================================================
          FULL SCREEN PHOTO LIGHTBOX
      ===================================================== */}

      <AnimatePresence>

        {selectedPhoto && (

          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-3 sm:p-8"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onMouseDown={(event) => {

              if (
                event.target === event.currentTarget
              ) {
                closePhoto();
              }

            }}
          >

            {/* TOP BAR */}

            <div className="absolute left-4 right-4 top-4 z-20 flex items-center justify-between sm:left-8 sm:right-8 sm:top-8">

              <div className="min-w-0 pr-4">

                <p className="truncate text-[8px] uppercase tracking-[0.35em] text-[#A3FF12] sm:text-[9px] sm:tracking-[0.45em]">
                  {selectedPhoto.caption}
                </p>

                <p className="mt-2 font-mono text-[8px] tracking-[0.2em] text-white/40 sm:text-[9px]">

                  {selectedPhoto.place}

                  {" · "}

                  {String(
                    selectedPhoto.index + 1
                  ).padStart(2, "0")}

                  {" / "}

                  {String(
                    selectedPhoto.total
                  ).padStart(2, "0")}

                </p>

              </div>

              {/* CLOSE */}

              <button
                type="button"
                onClick={closePhoto}
                aria-label="Close image"
                className="group flex h-10 w-10 shrink-0 items-center justify-center border border-white/15 bg-white/5 text-white/70 backdrop-blur-md transition hover:border-[#A3FF12]/60 hover:text-[#A3FF12] sm:h-11 sm:w-11"
              >

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90"
                >

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />

                </svg>

              </button>

            </div>

            {/* PREVIOUS */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                previousPhoto();
              }}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/10 bg-black/40 text-white/60 backdrop-blur-md transition hover:border-[#A3FF12]/50 hover:text-[#A3FF12] sm:left-8 sm:h-12 sm:w-12"
            >

              <span className="text-xl sm:text-2xl">
                ←
              </span>

            </button>

            {/* NEXT */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                nextPhoto();
              }}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/10 bg-black/40 text-white/60 backdrop-blur-md transition hover:border-[#A3FF12]/50 hover:text-[#A3FF12] sm:right-8 sm:h-12 sm:w-12"
            >

              <span className="text-xl sm:text-2xl">
                →
              </span>

            </button>

            {/* ORIGINAL IMAGE */}

            <motion.div
              key={selectedPhoto.src}
              initial={{
                opacity: 0,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative flex h-[calc(100vh-125px)] w-[calc(100vw-75px)] items-center justify-center sm:h-[calc(100vh-150px)] sm:w-[calc(100vw-100px)]"
              onMouseDown={(event) =>
                event.stopPropagation()
              }
            >

              <Image
                src={selectedPhoto.src}
                alt={`${selectedPhoto.caption} photograph`}
                fill
                sizes="100vw"
                className="object-contain"
                priority
                unoptimized
              />

            </motion.div>

            {/* BOTTOM CONTROLS */}

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:bottom-7">

              <p className="whitespace-nowrap text-[7px] uppercase tracking-[0.3em] text-white/30 sm:text-[8px] sm:tracking-[0.4em]">
                ← → Navigate&nbsp;&nbsp;&nbsp; ESC Close
              </p>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </main>
  );
}