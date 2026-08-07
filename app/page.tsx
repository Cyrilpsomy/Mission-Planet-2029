import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-6xl font-extrabold tracking-wide">
          🌍 MISSION PLANET 2029
        </h1>

        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
          To explore the beautiful world that God has created for us,
          create unforgettable memories, seek inspiration, and spread
          love wherever the journey leads.
        </p>

        <button className="mt-10 rounded-xl bg-yellow-500 px-8 py-4 text-black font-bold hover:bg-yellow-400 transition">
          Begin the Journey
        </button>
      </div>
    </main>
  );
}