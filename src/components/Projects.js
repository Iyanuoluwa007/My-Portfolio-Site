"use client";
import { motion } from "framer-motion";

// Animation variants
const container = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.15 },
  },
};

const card = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default async function Projects() {
  // 🔑 Add headers using your environment variable
  const headers = {};
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const res = await fetch(
    "https://api.github.com/users/Iyanuoluwa007/repos?per_page=12&sort=updated",
    { headers, next: { revalidate: 3600 } } // cache for 1h
  );

  const data = await res.json();
  const repos = (data || []).filter((x) => !x.fork && !x.archived);

  return (
    <section id="projects">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        🧪 My Projects
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {repos.map((repo) => (
          <motion.div
            key={repo.id}
            variants={card}
            className="rounded-xl p-6 bg-gradient-to-br from-primary/20 to-accent/20 border border-white/10 text-white shadow-glow glow-hover"
          >
            <h3 className="text-xl font-semibold mb-2">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {repo.name}
              </a>
            </h3>
            <p className="text-sm text-white/80 mb-4">
              {repo.description || "No description available"}
            </p>
            <div className="text-xs text-white/60">
              ⭐ {repo.stargazers_count}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
