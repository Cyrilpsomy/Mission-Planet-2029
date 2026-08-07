"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

// Prevent Leaflet from loading during server rendering
const MapContainer = dynamic(
  () =>
    import("react-leaflet").then(
      (mod) => mod.MapContainer
    ),
  {
    ssr: false,
  }
);

const TileLayer = dynamic(
  () =>
    import("react-leaflet").then(
      (mod) => mod.TileLayer
    ),
  {
    ssr: false,
  }
);

const Marker = dynamic(
  () =>
    import("react-leaflet").then(
      (mod) => mod.Marker
    ),
  {
    ssr: false,
  }
);

const Popup = dynamic(
  () =>
    import("react-leaflet").then(
      (mod) => mod.Popup
    ),
  {
    ssr: false,
  }
);


export default function InteractiveMap() {
  return (
    <section
      id="map"
      className="bg-slate-950 px-6 py-20 text-white md:py-28"
    >

      <motion.div
        className="mx-auto max-w-6xl"
        initial={{
          opacity: 0,
          y: 40,
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
      >

        <h2 className="text-center text-3xl font-bold md:text-5xl">
          🌍 World Explorer Map
        </h2>


        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
          Explore future destinations planned for the PLANET 2029 mission.
        </p>


        <div
          className="
            mt-10
            h-[400px]
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            md:h-[600px]
          "
        >

          <MapContainer
            center={[20, 0]}
            zoom={2}
            scrollWheelZoom={true}
            style={{
              width: "100%",
              height: "100%",
            }}
          >

            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />


            <Marker position={[60.472, 8.4689]}>
              <Popup>
                🇳🇴 <strong>Norway</strong>
                <br />
                Northern Lights Dream Destination
              </Popup>
            </Marker>


            <Marker position={[36.2048, 138.2529]}>
              <Popup>
                🇯🇵 <strong>Japan</strong>
                <br />
                Culture & Innovation Journey
              </Popup>
            </Marker>


            <Marker position={[46.8182, 8.2275]}>
              <Popup>
                🇨🇭 <strong>Switzerland</strong>
                <br />
                Alps & Scenic Adventure
              </Popup>
            </Marker>


            <Marker position={[48.2082, 16.3738]}>
              <Popup>
                🇦🇹 <strong>Austria</strong>
                <br />
                Alpine Adventure
              </Popup>
            </Marker>


            <Marker position={[50.1109, 8.6821]}>
              <Popup>
                🇩🇪 <strong>Germany</strong>
                <br />
                Gateway to Europe
              </Popup>
            </Marker>


          </MapContainer>

        </div>

      </motion.div>

    </section>
  );
}