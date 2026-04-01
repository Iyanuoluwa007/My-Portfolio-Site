"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import FeaturedProjects from "@/components/FeaturedProjects";
import Contact from "@/components/Contact";
import { Suspense } from "react";

// Lazy-load the GitHub projects section (async server component wrapper)
import dynamic from "next/dynamic";
const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => (
    <section className="section">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-40 rounded-2xl border border-white/[0.06] bg-surface animate-pulse" />
          ))}
        </div>
      </div>
    </section>
  ),
});

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Projects />
      <Contact />
    </>
  );
}
