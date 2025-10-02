"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center gap-20 md:gap-24 px-6 md:px-10 text-white py-20"
      style={{
        backgroundImage: "url('/Background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Avatar + Arrow */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center"
      >
        <Image src="/me.png" alt="Iyanuoluwa Avatar" width={240} height={240} className="rounded-full shadow-lg glow" />
        <Image 
          src="/arrow.png" 
          alt="Arrow pointing" 
          width={120} 
          height={120} 
          className="absolute -top-12 -right-20 hidden md:block" 
          />

      </motion.div>

      {/* Intro text */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left max-w-2xl flex flex-col justify-center md:-mt-24"
      >
        <h1 className="text-5xl font-bold mb-4">
          👋 Hi, I&apos;m <span className="text-cyan-400">Iyanuoluwa Oke</span>
        </h1>
        <p className="text-xl mb-6 leading-relaxed">
          Robotics & AI Engineer | Computer Vision | ROS2 Developer <br />
          Building intelligent robotics, Computer Vision, and AI systems.
        </p>
      </motion.div>
    </section>
  );
}
